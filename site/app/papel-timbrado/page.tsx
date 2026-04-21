import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Display, Eyebrow, Body, Lead, Card, CardEyebrow, CardBody, CardTitle, Logo } from '@/components/ui'

export const metadata = { title: 'Papel timbrado' }

export default function PapelTimbradoPage() {
  return (
    <article className="pb-14 md:pb-20">
      <header className="container-wide py-14 md:py-20 border-b border-neutral-10">
        <Eyebrow className="mb-6">Fase 07 — Letterhead &amp; assinatura de e-mail</Eyebrow>
        <Display as="h1" size="xl" className="max-w-[22ch]">
          Carta formal, convite, assinatura de e-mail.
        </Display>
        <Lead className="mt-8 max-w-[60ch]">
          Dossiê jurídico + relatório de fundo soberano. Papel branco para material corriqueiro,
          papel pergaminho para convite institucional. Marca d&apos;água de monograma sutil em
          ambos.
        </Lead>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/letterhead.html"
            className="inline-flex items-center gap-2 font-sans text-[0.9375rem] text-ink underline underline-offset-4 decoration-neutral-20 hover:decoration-accent hover:text-accent transition-colors"
          >
            Abrir letterhead (.html) <ArrowUpRight size={16} strokeWidth={1.25} />
          </Link>
          <Link
            href="/email-signature.html"
            className="inline-flex items-center gap-2 font-sans text-[0.9375rem] text-ink underline underline-offset-4 decoration-neutral-20 hover:decoration-accent hover:text-accent transition-colors"
          >
            Abrir assinatura de e-mail (.html) <ArrowUpRight size={16} strokeWidth={1.25} />
          </Link>
        </div>
      </header>

      {/* PREVIEW LETTERHEAD */}
      <section className="container-wide py-12 md:py-20">
        <Eyebrow className="mb-4">01 · Letterhead A4</Eyebrow>
        <Display as="h2" size="m" className="mb-10 max-w-[24ch]">
          Duas variantes, uma hierarquia.
        </Display>

        <div className="grid gap-8 md:grid-cols-2">
          <Card variant="bordered" padding="none" className="overflow-hidden">
            {/* Simulated A4 preview */}
            <div className="bg-paper-pure aspect-[210/297] p-8 flex flex-col relative overflow-hidden">
              <svg
                viewBox="0 0 100 100"
                className="absolute -right-10 -bottom-10 w-64 h-64 text-ink/[0.03] pointer-events-none"
              >
                <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <g fill="currentColor">
                  <rect x="22.5" y="26" width="7.5" height="48" />
                  <rect x="19" y="26" width="14.5" height="1.6" />
                  <rect x="19" y="72.4" width="14.5" height="1.6" />
                  <rect x="70" y="26" width="7.5" height="48" />
                  <rect x="66.5" y="26" width="14.5" height="1.6" />
                  <rect x="66.5" y="72.4" width="14.5" height="1.6" />
                  <polygon points="30,26 33.2,26 51.6,61 48.4,61" />
                  <polygon points="66.8,26 70,26 51.6,61 48.4,61" />
                </g>
              </svg>
              <div className="flex items-center gap-3 pb-3 border-b border-neutral-20">
                <Logo variant="monogram" className="h-7 w-7 text-ink" />
                <div>
                  <div className="font-serif text-[1.25rem] font-medium text-ink tracking-[0.14em]">MAGNO</div>
                  <div className="font-sans text-[0.5625rem] uppercase tracking-[0.22em] text-neutral-50">Gestão Patrimonial</div>
                </div>
              </div>
              <div className="font-sans text-[0.625rem] text-ink-65 mt-4 flex-1">
                São Paulo, 20 de abril de 2026.<br /><br />
                Prezado(a) Carlos,<br /><br />
                Encaminhamos em anexo a revisão trimestral...
              </div>
              <div className="pt-3 border-t border-neutral-20 font-sans text-[0.5rem] uppercase tracking-[0.15em] text-neutral-50 flex justify-between">
                <span>MAGNO · Faria Lima</span>
                <span className="font-mono text-accent tracking-[0.1em]">Arquitetura antes de alocação.</span>
              </div>
            </div>
            <div className="p-5 border-t border-neutral-20">
              <CardEyebrow>Variante 01</CardEyebrow>
              <CardTitle as="h3" className="text-[1.375rem] mt-1">Carta formal · papel branco</CardTitle>
              <CardBody className="mt-2">Uso padrão: correspondência, relatórios, cartas institucionais.</CardBody>
            </div>
          </Card>

          <Card variant="bordered" padding="none" className="overflow-hidden">
            <div className="bg-paper aspect-[210/297] p-8 flex flex-col relative overflow-hidden">
              <svg
                viewBox="0 0 100 100"
                className="absolute -right-10 -bottom-10 w-64 h-64 text-ink/[0.04] pointer-events-none"
              >
                <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <g fill="currentColor">
                  <rect x="22.5" y="26" width="7.5" height="48" />
                  <rect x="19" y="26" width="14.5" height="1.6" />
                  <rect x="19" y="72.4" width="14.5" height="1.6" />
                  <rect x="70" y="26" width="7.5" height="48" />
                  <rect x="66.5" y="26" width="14.5" height="1.6" />
                  <rect x="66.5" y="72.4" width="14.5" height="1.6" />
                  <polygon points="30,26 33.2,26 51.6,61 48.4,61" />
                  <polygon points="66.8,26 70,26 51.6,61 48.4,61" />
                </g>
              </svg>
              <div className="flex items-center gap-3 pb-3 border-b border-neutral-20">
                <Logo variant="monogram" className="h-7 w-7 text-ink" />
                <div>
                  <div className="font-serif text-[1.25rem] font-medium text-ink tracking-[0.14em]">MAGNO</div>
                  <div className="font-sans text-[0.5625rem] uppercase tracking-[0.22em] text-neutral-50">Gestão Patrimonial</div>
                </div>
              </div>
              <div className="font-sans text-[0.625rem] text-ink-65 mt-4 flex-1">
                Mesa redonda Q2 2026.<br /><br />
                Prezado(a) convidado(a),<br /><br />
                MAGNO promoverá em 15 de maio...
              </div>
              <div className="pt-3 border-t border-neutral-20 font-sans text-[0.5rem] uppercase tracking-[0.15em] text-neutral-50 flex justify-between">
                <span>MAGNO · Itaim Bibi</span>
                <span className="font-mono text-accent tracking-[0.1em]">Arquitetura antes de alocação.</span>
              </div>
            </div>
            <div className="p-5 border-t border-neutral-20">
              <CardEyebrow>Variante 02</CardEyebrow>
              <CardTitle as="h3" className="text-[1.375rem] mt-1">Convite · pergaminho</CardTitle>
              <CardBody className="mt-2">Uso editorial: convite, carta trimestral, comunicação institucional premium.</CardBody>
            </div>
          </Card>
        </div>
      </section>

      {/* PREVIEW EMAIL SIGNATURE */}
      <section className="bg-paper-50 border-y border-neutral-10 py-12 md:py-20">
        <div className="container-wide">
          <Eyebrow className="mb-4">02 · Assinatura de e-mail</Eyebrow>
          <Display as="h2" size="m" className="mb-6 md:mb-8 max-w-[24ch]">
            Compatível com Gmail, Outlook, Apple Mail.
          </Display>

          <div className="bg-paper-pure border border-neutral-20 p-10 max-w-3xl">
            <table cellPadding={0} cellSpacing={0} className="font-sans text-[0.8125rem] text-ink leading-[1.55]">
              <tbody>
                <tr>
                  <td style={{ verticalAlign: 'top', paddingRight: '20px', borderRight: '1px solid #B8B3A9' }}>
                    <Logo variant="monogram" className="h-14 w-14 text-ink" />
                  </td>
                  <td style={{ verticalAlign: 'top', paddingLeft: '20px' }}>
                    <div className="font-serif text-[1.25rem] font-medium tracking-[0.14em] text-ink mb-[2px]">
                      MAGNO
                    </div>
                    <div className="font-sans text-[0.625rem] uppercase tracking-[0.22em] text-neutral-50 mb-4 font-medium">
                      Gestão Patrimonial
                    </div>
                    <div className="text-[0.875rem] font-semibold text-ink">[Nome do Partner]</div>
                    <div className="text-[0.6875rem] uppercase tracking-[0.12em] text-neutral-50 mb-3">Partner</div>
                    <div className="text-[0.8125rem] leading-[1.55] text-ink-65">
                      partner@magno.capital<br />
                      +55 11 3000-0000 · magno.capital
                    </div>
                    <div className="mt-3 pt-2 border-t border-neutral-10">
                      <span className="font-serif italic text-[0.8125rem] text-accent">
                        Arquitetura antes de alocação.
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Body className="mt-6 max-w-[60ch]">
            Implementada em <code className="font-mono text-accent">&lt;table&gt;</code> com estilos inline
            — padrão obrigatório porque o Outlook desktop descarta CSS externo.
            Fonte da marca: Fraunces (serif). Fallback em Georgia para clients sem web font.
          </Body>
        </div>
      </section>
    </article>
  )
}
