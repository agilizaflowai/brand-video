import Link from 'next/link'
import { Logo } from './Logo'

interface FooterLink {
  href: string
  label: string
  external?: boolean
}

const navLinks: FooterLink[] = [
  { href: '/estrategia', label: 'Estratégia' },
  { href: '/identidade', label: 'Identidade' },
  { href: '/ui-kit', label: 'UI Kit' },
  { href: '/social-kit', label: 'Social Kit' },
  { href: '/proposta', label: 'Proposta' },
  { href: '/papel-timbrado', label: 'Papel Timbrado' },
]

const contactLinks: FooterLink[] = [
  { href: 'mailto:contato@magno.capital', label: 'contato@magno.capital' },
  { href: '#', label: 'Av. Brigadeiro Faria Lima' },
  { href: '#', label: 'Itaim Bibi · São Paulo' },
]

const instLinks: FooterLink[] = [
  { href: '#', label: 'Governança' },
  { href: '#', label: 'Compliance' },
  { href: '#', label: 'Política de privacidade' },
  { href: 'https://linkedin.com', label: 'LinkedIn', external: true },
]

export function Footer() {
  return (
    <footer className="border-t border-neutral-10 bg-paper">
      <div className="mx-auto max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 xl:px-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-8 lg:gap-12">
          <div className="flex flex-col gap-6">
            <Logo variant="full" className="h-8 w-auto text-ink" />
            <p className="max-w-sm font-sans text-[0.9375rem] leading-[1.65] text-ink-65 text-pretty">
              Family office boutique independente para empresários brasileiros de 1ª geração em
              fase pós-liquidez. <em>Arquitetura antes de alocação.</em>
            </p>
          </div>

          <FooterColumn title="Navegação" links={navLinks} />
          <FooterColumn title="Contato" links={contactLinks} />
          <FooterColumn title="Institucional" links={instLinks} />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-neutral-10 pt-6 font-sans text-[0.75rem] text-neutral-50 md:flex-row md:items-end md:justify-between md:mt-12 md:pt-8">
          <span>
            © {new Date().getFullYear()} MAGNO Gestão Patrimonial.
            <span className="hidden sm:inline"> Todos os direitos reservados.</span>
          </span>
          <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-accent">
            Arquitetura antes de alocação.
          </span>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-neutral-50">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="inline-block font-sans text-[0.9375rem] text-ink-65 transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
