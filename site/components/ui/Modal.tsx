'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  eyebrow?: string
  children: ReactNode
  footer?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-xl',
  lg: 'max-w-3xl',
}

export function Modal({
  open,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  size = 'md',
  className,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) dialogRef.current?.focus()
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      aria-hidden={!open}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute inset-0 bg-ink/50 backdrop-blur-[2px] cursor-default"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        tabIndex={-1}
        className={cn(
          'relative w-full bg-paper text-ink',
          'border border-neutral-20',
          'shadow-[0_8px_32px_rgba(14,14,16,0.12)]',
          'max-h-[90vh] overflow-y-auto',
          sizeClasses[size],
          className,
        )}
      >
        <div className="flex items-start justify-between gap-6 border-b border-neutral-10 p-6">
          <div className="flex flex-col gap-2">
            {eyebrow && (
              <span className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-neutral-50">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 id="modal-title" className="font-serif text-[1.75rem] font-medium leading-tight">
                {title}
              </h2>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-[36px] w-[36px] shrink-0 items-center justify-center text-ink-65 hover:text-ink transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" />
            </svg>
          </button>
        </div>
        <div className="p-6">{children}</div>
        {footer && (
          <div className="border-t border-neutral-10 bg-paper-50 px-6 py-4">{footer}</div>
        )}
      </div>
    </div>
  )
}
