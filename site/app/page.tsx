import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import {
  Display,
  Eyebrow,
  Lead,
  Body,
  Card,
  CardEyebrow,
  CardTitle,
  CardBody,
  CardMetric,
  Button,
  Badge,
  PullQuote,
  Numeric,
  Logo,
} from '@/components/ui'

export default function HomePage() {
  return (
    <>
      {/* ================ HERO ================ */}
      <section className="bg-ink text-paper relative overflow-hidden">
        {/* Monograma como marca d'água sutil */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-24 opacity-[0.035] hidden lg:block"
        >
          <svg width="520" height="520" viewBox="0 0 100 100" className="text-paper">
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.8"/>
            <g fill="currentColor">
              <rect x="22.5" y="26" width="7.5" height="48"/>
              <rect x="19" y="26" width="14.5" height="1.6"/>
              <rect x="19" y="72.4" width="14.5" height="1.6"/>
              <rect x="70" y="26" width="7.5" height="48"/>
              <rect x="66.5" y="26" width="14.5" height="1.6"/>
              <rect x="66.5" y="72.4" width="14.5" height="1.6"/>
              <polygon points="30,26 33.2,26 51.6,61 48.4,61"/>
              <polygon points="66.8,26 70,26 51.6,61 48.4,61"/>
            </g>
          </svg>
        </div>

        <div className="container-wide relative py-14 md:py-20 xl:py-24 flex flex-col gap-7 md:gap-10">
          <div className="flex items-center gap-4">
            <Logo variant="monogram" className="h-[44px] w-[44px] text-paper" />
            <span className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-paper/60">
              Gestão Patrimonial · Boutique independente
            </span>
          </div>

          <Display as="h1" size="2xl" className="text-paper max-w-[18ch]">
            Arquitetura antes de alocação.
          </Display>

          <Lead className="text-paper/75 max-w-[52ch]">
            Para o empresário que construiu patrimônio do zero e acabou de virá-lo em dinheiro —
            e que precisa de estrutura, não de prateleira.
          </Lead>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4">
            <Button
              variant="inverse"
              size="lg"
              icon={<ArrowRight size={16} strokeWidth={1.25} />}
            >
              Agendar primeira conversa
            </Button>
            <Link href="/estrategia" className="link-editorial link-editorial--inverse text-[0.9375rem]">
              Entender o posicionamento
              <ArrowUpRight size={14} strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================ POSICIONAMENTO ================ */}
      <section className="container-wide py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1.6fr] md:gap-12">
          <div className="flex flex-col gap-4">
            <Eyebrow>01 — Posicionamento</Eyebrow>
            <Display as="h2" size="l" className="mt-1">
              A terceira opção — a que não existia com nome.
            </Display>
          </div>

          <div className="flex flex-col gap-6">
            <Body size="lg">
              O mercado brasileiro de gestão patrimonial divide o empresário pós-liquidez entre
              dois lados ocupados. Nenhum deles, por construção, está do seu lado da mesa.
            </Body>

            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <Card variant="bordered" padding="lg" className="gap-3 transition-colors duration-200 hover:border-ink">
                <CardEyebrow>Inimigo 01</CardEyebrow>
                <h3 className="font-serif text-[1.5rem] leading-[1.15] font-medium type-display-opsz-sm">
                  Private banking de prateleira
                </h3>
                <CardBody>
                  Atende com seriedade e vende, na mesma reunião, o produto que o banco precisa
                  distribuir naquele mês.
                </CardBody>
              </Card>
              <Card variant="bordered" padding="lg" className="gap-3 transition-colors duration-200 hover:border-ink">
                <CardEyebrow>Inimigo 02</CardEyebrow>
                <h3 className="font-serif text-[1.5rem] leading-[1.15] font-medium type-display-opsz-sm">
                  Wealth advisor de Instagram
                </h3>
                <CardBody>
                  Monta fundo próprio, empurra alocação para um patrimônio que não construiu.
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ================ KERNEL ================ */}
      <section className="bg-paper-50 hairline-y">
        <div className="container-wide py-14 md:py-20">
          <div className="flex flex-col gap-4 mb-8 md:mb-12">
            <Eyebrow>02 — Kernel</Eyebrow>
            <Display as="h2" size="l" className="max-w-[22ch]">
              Quatro decisões estruturais. Sagradas.
            </Display>
            <Body size="lg" className="mt-2">
              Se alguma linha cair, MAGNO deixa de ser MAGNO. As quatro vêm no primeiro dia
              da firma e não são negociáveis.
            </Body>
          </div>

          <ol className="grid gap-0 divide-y divide-neutral-20 hairline-y">
            {kernelItems.map((item) => (
              <li
                key={item.n}
                className="group relative grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 py-8 md:grid-cols-[90px_minmax(0,1fr)_1.4fr] md:gap-x-12 md:py-10 transition-colors hover:bg-paper/50"
              >
                <span className="font-mono text-[0.9375rem] font-medium text-neutral-50 tabular-nums pt-2">
                  {item.n}
                </span>
                <h3 className="font-serif text-[clamp(1.5rem,1.5vw_+_1rem,1.875rem)] leading-[1.15] font-medium text-ink type-display-opsz-sm text-balance">
                  {item.title}
                </h3>
                <p className="font-sans text-[1rem] leading-[1.65] text-ink-65 md:max-w-[62ch] col-span-2 md:col-span-1 text-pretty">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================ PERSONAS ================ */}
      <section className="container-wide py-14 md:py-20">
        <div className="flex flex-col gap-4 mb-8 md:mb-12">
          <Eyebrow>03 — Quem MAGNO atende</Eyebrow>
          <Display as="h2" size="l" className="max-w-[24ch]">
            Empresários em travessia estrutural.
          </Display>
          <Body size="lg" className="mt-2 max-w-[62ch]">
            Um número pequeno de famílias — por decisão. Três perfis, três momentos distintos da
            travessia patrimonial.
          </Body>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {personas.map((p) => (
            <Card
              key={p.code}
              variant="bordered"
              padding="lg"
              className="gap-5 transition-all duration-200 hover:border-ink hover:bg-paper-50/40"
            >
              <div className="flex items-start justify-between">
                <CardEyebrow>Persona {p.code}</CardEyebrow>
                <Badge variant="neutral">JTBD</Badge>
              </div>
              <CardTitle as="h3" className="type-display-opsz-sm">{p.name}</CardTitle>
              <CardBody>{p.desc}</CardBody>
              <div className="grid grid-cols-2 gap-4 pt-5 hairline-t mt-auto">
                <CardMetric label="Ticket" value={p.ticket} />
                <CardMetric label="Setup" value={p.setup} />
              </div>
              <CardMetric label="Fee sobre AUM" value={p.fee} />
            </Card>
          ))}
        </div>
      </section>

      {/* ================ ANÁLISE DESTAQUE ================ */}
      <section className="bg-ink text-paper relative overflow-hidden">
        <div className="container-wide py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14 items-center">
            <div className="flex flex-col gap-6">
              <span className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-paper/55">
                04 — Análise
              </span>
              <Display as="h2" size="l" className="text-paper">
                A aritmética silenciosa do rebate.
              </Display>
              <p className="font-sans text-[clamp(1.0625rem,0.5vw_+_1rem,1.125rem)] leading-[1.65] text-paper/75 max-w-[52ch] text-pretty">
                Em um portfólio de R$&nbsp;80M, 1,3&nbsp;%&nbsp;a.a. são R$&nbsp;1M por ano que não
                aparecem no extrato. O rebate embutido em produtos estruturados é,
                em média, entre 1&nbsp;% e 3&nbsp;% do notional — invisível à cotação.
              </p>
              <Link
                href="/estrategia"
                className="link-editorial link-editorial--inverse text-[0.9375rem] mt-2 self-start"
              >
                Ler carta trimestral
                <ArrowUpRight size={14} strokeWidth={1.25} />
              </Link>
            </div>

            <div className="grid gap-7">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-accent pl-6 group">
                  <div className="font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-paper/55 mb-2">
                    {s.label}
                  </div>
                  <div className="font-mono font-medium tabular-nums text-paper text-[clamp(2rem,2vw_+_1.5rem,2.75rem)] leading-tight tracking-tight">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================ MANIFESTO BREVE ================ */}
      <section className="container-prose py-14 md:py-20">
        <div className="flex flex-col gap-2 mb-8">
          <Eyebrow>05 — Manifesto</Eyebrow>
        </div>
        <PullQuote cite="Manifesto institucional — abril 2026">
          A firma que nasce do seu ponto de vista — não do portfólio do banco.
        </PullQuote>
        <Body size="lg" className="mt-10">
          MAGNO é a terceira opção — a que não existia com nome. Somos um <em>family office</em>
          {' '}boutique independente. Atendemos um número pequeno de famílias, por decisão.
        </Body>
        <Body size="lg" className="mt-4">
          A primeira entrega não é uma carteira. É o desenho da arquitetura. A alocação é
          consequência da estrutura — não o ponto de partida.
        </Body>
        <div className="mt-10">
          <Link href="/estrategia" className="link-editorial text-[0.9375rem]">
            Ler manifesto completo
            <ArrowRight size={14} strokeWidth={1.25} />
          </Link>
        </div>
      </section>

      {/* ================ NAVEGAÇÃO PRÓXIMAS SEÇÕES ================ */}
      <section className="bg-paper-50 hairline-t">
        <div className="container-wide py-14 md:py-20">
          <div className="flex flex-col gap-4 mb-8 md:mb-12">
            <Eyebrow>Explorar a marca</Eyebrow>
            <Display as="h2" size="m" className="max-w-[26ch]">
              Seis seções. Uma marca construída por sistema.
            </Display>
          </div>

          <div className="grid gap-0 divide-y divide-neutral-20 hairline-y">
            {navCards.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-6 py-7 md:grid-cols-[56px_220px_1fr_auto] md:gap-10 md:py-8 transition-colors hover:bg-paper"
              >
                <span className="font-mono text-[0.8125rem] text-neutral-50 tabular-nums">
                  {item.num}
                </span>
                <h3 className="font-serif text-[clamp(1.5rem,1vw_+_1.25rem,1.875rem)] leading-tight font-medium text-ink type-display-opsz-sm transition-colors group-hover:text-accent">
                  {item.label}
                </h3>
                <p className="font-sans text-[1rem] text-ink-65 max-w-[60ch] hidden md:block text-pretty">
                  {item.desc}
                </p>
                <span className="flex items-center justify-center h-10 w-10 border border-neutral-20 rounded-full transition-all group-hover:border-ink group-hover:bg-ink">
                  <ArrowRight
                    size={16}
                    strokeWidth={1.25}
                    className="text-ink transition-all group-hover:text-paper group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const kernelItems = [
  {
    n: '01',
    title: 'Cliente no centro, não o produto.',
    body: 'Toda decisão de arquitetura começa nos objetivos do cliente. Produto é consequência — e só entra se a arquitetura pedir.',
  },
  {
    n: '02',
    title: 'Arquitetura antes de alocação.',
    body: 'A primeira entrega é o desenho da holding, da sucessão, do offshore, da governança, do tributário. A carteira vem em seguida.',
  },
  {
    n: '03',
    title: 'Apenas partners (15+ anos) no client-facing.',
    body: 'Não há associate entre você e a decisão. Quem atende é sênior. Quem desenha é sênior. Quem revisa é sênior.',
  },
  {
    n: '04',
    title: '100 % fee-based sobre AUM.',
    body: 'Zero rebate. Zero comissão de produto. Zero contrato de distribuição. A única conta que MAGNO tem a pagar é a do cliente.',
  },
]

const personas = [
  {
    code: '01',
    name: 'O Fundador',
    desc: 'Empresário 1ª geração, pós-evento de liquidez: M&A parcial, IPO ou secondary. Entre 45 e 62 anos.',
    ticket: 'R$ 20M–R$ 200M',
    setup: 'R$ 120k–R$ 300k',
    fee: '0,45–0,75 % a.a.',
  },
  {
    code: '02',
    name: 'A Herdeira Operadora',
    desc: 'Herdeira de empresário 1ª geração, presidência ou conselho da empresa família. Entre 35 e 50 anos.',
    ticket: 'R$ 15M–R$ 80M',
    setup: 'R$ 180k–R$ 300k',
    fee: '0,60–0,75 % a.a.',
  },
  {
    code: '03',
    name: 'O Sócio Saindo',
    desc: 'Advogado, médico, consultor ou engenheiro sênior pós-saída de sociedade profissional. 50–65 anos.',
    ticket: 'R$ 10M–R$ 50M',
    setup: 'R$ 120k–R$ 180k',
    fee: '0,75 % a.a.',
  },
]

const stats = [
  { label: 'Portfólio típico',     value: 'R$ 80.000.000' },
  { label: 'Custo oculto anual',   value: 'R$ 1.040.000' },
  { label: 'Em 10 anos (simples)', value: 'R$ 11.900.000' },
]

const navCards = [
  { num: '→ 01', href: '/estrategia', label: 'Estratégia', desc: 'Posicionamento, personas e voz editorial.' },
  { num: '→ 02', href: '/identidade', label: 'Identidade', desc: 'Logo, paleta, tipografia e sistema visual.' },
  { num: '→ 03', href: '/ui-kit', label: 'UI Kit', desc: 'Componentes React + Tailwind.' },
  { num: '→ 04', href: '/social-kit', label: 'Social Kit', desc: '4 pilares, 20 posts, templates 1:1 / 4:5 / 9:16.' },
  { num: '→ 05', href: '/proposta', label: 'Proposta comercial', desc: 'Documento institucional em 10 páginas A4.' },
  { num: '→ 06', href: '/papel-timbrado', label: 'Papel timbrado', desc: 'Letterhead A4 e assinatura de e-mail.' },
]
