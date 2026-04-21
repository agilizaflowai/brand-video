'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { cn } from '@/lib/cn'

interface NavItem {
  href: string
  label: string
}

const defaultItems: NavItem[] = [
  { href: '/estrategia', label: 'Estratégia' },
  { href: '/identidade', label: 'Identidade' },
  { href: '/ui-kit', label: 'UI Kit' },
  { href: '/social-kit', label: 'Social Kit' },
  { href: '/proposta', label: 'Proposta' },
  { href: '/papel-timbrado', label: 'Papel Timbrado' },
]

interface NavbarProps {
  items?: NavItem[]
  className?: string
}

export function Navbar({ items = defaultItems, className }: NavbarProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-[background-color,border-color] duration-200',
        scrolled
          ? 'bg-paper/95 backdrop-blur-md border-b border-neutral-10'
          : 'bg-paper/80 backdrop-blur-sm border-b border-transparent',
        className,
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[75rem] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12">
        <Link
          href="/"
          aria-label="MAGNO — Início"
          className="group flex items-center text-ink -my-1 py-1 focus-visible:outline-none"
        >
          <Logo
            variant="full"
            className="h-7 w-auto transition-opacity duration-200 group-hover:opacity-80"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {items.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className="nav-link font-sans text-[0.875rem] tracking-[0.005em]"
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center -mr-2 text-ink md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
            ) : (
              <>
                <path d="M3 7H19" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
                <path d="M3 15H19" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="md:hidden border-t border-neutral-10 bg-paper"
      >
        <nav aria-label="Principal mobile">
          <ul className="flex flex-col divide-y divide-neutral-10">
            {items.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex items-center justify-between px-5 py-4 font-sans text-[1rem] transition-colors',
                      active ? 'text-ink bg-paper-50' : 'text-ink-65 hover:text-ink',
                    )}
                  >
                    <span>{item.label}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="opacity-40">
                      <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
                    </svg>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
