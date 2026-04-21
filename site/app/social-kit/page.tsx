import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import {
  Display,
  Eyebrow,
  Body,
  Lead,
  Card,
  CardEyebrow,
  CardTitle,
  CardBody,
  CardMetric,
  Badge,
} from '@/components/ui'

export const metadata = { title: 'Social Kit' }

export default function SocialKitPage() {
  return (
    <article className="pb-14 md:pb-20">
      <header className="container-wide py-14 md:py-20 border-b border-neutral-10">
        <Eyebrow className="mb-6">Fase 06 — Social Kit</Eyebrow>
        <Display as="h1" size="xl" className="max-w-[22ch]">
          Quatro pilares. Vinte ideias. Dez templates exatos.
        </Display>
        <Lead className="mt-8">
          Qualidade editorial é o ativo — MAGNO só ganha respeito publicando pouco, denso, certo.
          ~100 posts/ano distribuídos entre princípios, análise, travessia e institucional.
        </Lead>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8 md:mt-10 border-t border-neutral-10 pt-6 md:pt-8">
          {[
            ['01', 'Pilares'],
            ['02', 'Banco de 20 ideias'],
            ['03', 'Templates visuais'],
            ['04', 'Cadência & rituais'],
          ].map(([n, label]) => (
            <div key={n} className="flex flex-col gap-1">
              <dt className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">{n}</dt>
              <dd className="font-sans text-[0.9375rem] text-ink">{label}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* ==================== 01 · PILARES ==================== */}
      <section className="container-wide py-12 md:py-20">
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-[1fr_1.6fr] mb-8 md:mb-10">
          <div>
            <Eyebrow className="mb-4">01 · Os quatro pilares</Eyebrow>
            <Display as="h2" size="m">Como MAGNO distribui presença editorial.</Display>
          </div>
          <Body size="lg">
            Cada peça pertence a um pilar — que define tom, formato e quantidade. A hierarquia
            abaixo vale para qualquer canal: LinkedIn, newsletter, site, material de apresentação.
          </Body>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((p) => (
            <Card key={p.code} variant="bordered" padding="lg" className="gap-4">
              <div className="flex items-start justify-between">
                <CardEyebrow>Pilar {p.code}</CardEyebrow>
                <Badge variant="accent">{p.ratio}</Badge>
              </div>
              <CardTitle as="h3" className="type-display-opsz-sm">{p.name}</CardTitle>
              <CardBody>{p.desc}</CardBody>
              <div className="pt-4 border-t border-neutral-10 mt-auto">
                <CardMetric label="Registro" value={p.register} />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ==================== 02 · BANCO DE IDEIAS ==================== */}
      <section className="bg-paper-50 border-y border-neutral-10 py-12 md:py-20">
        <div className="container-wide">
          <div className="grid gap-6 lg:gap-12 lg:grid-cols-[1fr_1.6fr] mb-8 md:mb-10">
            <div>
              <Eyebrow className="mb-4">02 · Banco de ideias</Eyebrow>
              <Display as="h2" size="m">Vinte posts — primeiro trimestre completo.</Display>
            </div>
            <Body size="lg">
              Cada ideia carrega pilar, persona-alvo, hook editorial e direção de formato.
              Distribuição 35 / 35 / 20 / 10 respeitada.
            </Body>
          </div>

          <ol className="grid gap-0 divide-y divide-neutral-20 border-y border-neutral-20">
            {allIdeas.map((i, idx) => (
              <li
                key={idx}
                className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 py-6 md:grid-cols-[48px_minmax(0,1fr)_auto] md:gap-x-10 md:py-7"
              >
                <span className="font-mono text-[0.9375rem] text-neutral-50 tabular-nums pt-1">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-2 min-w-0">
                  <h3 className="font-serif text-[1.25rem] leading-[1.25] font-medium text-ink text-balance">
                    {i.hook}
                  </h3>
                  <p className="font-sans text-[0.875rem] text-ink-65 leading-[1.5] max-w-[72ch] text-pretty">
                    {i.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start md:self-center col-span-2 md:col-span-1 flex-wrap">
                  <Badge variant="neutral">{i.pillar}</Badge>
                  <Badge variant="accent">{i.persona}</Badge>
                  <span className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">
                    {i.format}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ==================== 03 · TEMPLATES ==================== */}
      <section className="container-wide py-12 md:py-20">
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-[1fr_1.6fr] mb-8 md:mb-10">
          <div>
            <Eyebrow className="mb-4">03 · Templates visuais</Eyebrow>
            <Display as="h2" size="m">Três formatos canônicos. Dez peças de referência.</Display>
          </div>
          <Body size="lg">
            Feed 1:1 (1080×1080), Feed 4:5 (1080×1350), Story 9:16 (1080×1920). Renderizados em
            HTML+CSS — Playwright gera PNG em 2×. Sem plugin, sem Figma.
          </Body>
        </div>

        {/* Feed 1:1 */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-baseline justify-between border-b border-neutral-10 pb-3 mb-8">
            <Eyebrow>Feed 1:1 · 1080 × 1080</Eyebrow>
            <span className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">
              4 variações
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {feedSquare.map((t, i) => (
              <SquareTemplate key={i} {...t} />
            ))}
          </div>
        </div>

        {/* Feed 4:5 */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-baseline justify-between border-b border-neutral-10 pb-3 mb-8">
            <Eyebrow>Feed 4:5 · 1080 × 1350</Eyebrow>
            <span className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">
              3 variações
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {feedPortrait.map((t, i) => (
              <PortraitTemplate key={i} {...t} />
            ))}
          </div>
        </div>

        {/* Story 9:16 */}
        <div>
          <div className="flex items-baseline justify-between border-b border-neutral-10 pb-3 mb-8">
            <Eyebrow>Story / Reels cover · 1080 × 1920</Eyebrow>
            <span className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">
              3 variações
            </span>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 md:gap-6">
            {story.map((t, i) => (
              <StoryTemplate key={i} {...t} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-6">
          <Link
            href="/templates.html"
            className="link-editorial text-[0.9375rem]"
          >
            Abrir arquivo de templates (.html)
            <ArrowUpRight size={16} strokeWidth={1.25} />
          </Link>
        </div>
      </section>

      {/* ==================== 04 · CADÊNCIA ==================== */}
      <section className="bg-ink text-paper py-12 md:py-20">
        <div className="container-wide">
          <div className="grid gap-6 lg:gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <Eyebrow className="mb-4 text-paper/60">04 · Cadência &amp; rituais</Eyebrow>
              <Display as="h2" size="m" className="text-paper">Pouco. Denso. Certo.</Display>
              <p className="font-sans text-[0.9375rem] leading-[1.65] text-paper/75 mt-6 max-w-[42ch]">
                A cadência é um ativo de marca. Publicar com consistência, sempre no mesmo tom,
                faz com que o perfil seja procurado — não empurrado.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <MetricDark label="Posts por semana"     value="2"      />
              <MetricDark label="Posts por ano"         value="~100"   />
              <MetricDark label="Canal primário"        value="LinkedIn" serif />
              <MetricDark label="Hashtags"              value="0"      />
              <MetricDark label="Emojis"                value="0"      />
              <MetricDark label="Exclamações"           value="0"      />
              <MetricDark label="Repost de terceiros"   value="0"      />
              <MetricDark label="Caracteres hook"       value="≤ 80"    />
              <MetricDark label="Dias entre publicação" value="3–4"    />
            </div>
          </div>

          {/* Calendário semanal */}
          <div className="mt-10 md:mt-14">
            <div className="flex items-baseline justify-between border-b border-paper/15 pb-3 mb-8">
              <span className="eyebrow-wide text-paper/60">Semana-padrão de publicação</span>
              <span className="font-mono text-[0.75rem] text-paper/50 tabular-nums">terça &amp; quinta</span>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {week.map((d) => (
                <div
                  key={d.day}
                  className={`aspect-square border p-3 flex flex-col justify-between ${
                    d.post ? 'border-paper bg-paper/5' : 'border-paper/20'
                  }`}
                >
                  <span className="font-mono text-[0.75rem] uppercase tracking-[0.2em] text-paper/60">
                    {d.day}
                  </span>
                  {d.post && (
                    <span className="font-serif text-[0.875rem] leading-tight text-paper type-display-opsz-body">
                      {d.post}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

/* ============================================================
   Sub-componentes
   ============================================================ */

function Monogram({ color = 'currentColor', size = 32 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ color }}>
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
  )
}

type SquareTemplateProps = {
  variant: 'dark' | 'light' | 'accent'
  eyebrow: string
  title: string
  caption?: string
}

function SquareTemplate({ variant, eyebrow, title, caption }: SquareTemplateProps) {
  const map = {
    dark:   { bg: '#0E0E10', fg: '#F4EFE6', rule: '#F4EFE6' },
    light:  { bg: '#F4EFE6', fg: '#0E0E10', rule: '#0E0E10' },
    accent: { bg: '#F4EFE6', fg: '#0E0E10', rule: '#5A1F25' },
  }[variant]
  return (
    <div className="flex flex-col gap-3">
      <div
        className="aspect-square p-7 flex flex-col justify-between border border-neutral-20"
        style={{ background: map.bg, color: map.fg }}
      >
        <div className="flex items-start justify-between">
          <Monogram color={map.fg} size={26} />
          <span className="font-sans text-[0.6875rem] uppercase tracking-[0.22em]" style={{ opacity: 0.55 }}>
            {eyebrow}
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-px" style={{ background: map.rule, opacity: 0.5 }} />
          <h3 className="font-serif text-[1.625rem] leading-[1.1] font-medium type-display-opsz-sm text-balance">
            {title}
          </h3>
        </div>
        <div className="flex items-end justify-between">
          <span className="font-serif font-medium tracking-[0.22em] text-[0.875rem]">MAGNO</span>
          <span className="font-sans text-[0.625rem] uppercase tracking-[0.22em]" style={{ opacity: 0.55 }}>
            1080 × 1080
          </span>
        </div>
      </div>
      {caption && (
        <p className="font-sans text-[0.8125rem] text-ink-65 leading-[1.4]">{caption}</p>
      )}
    </div>
  )
}

type PortraitTemplateProps = {
  variant: 'editorial' | 'metric' | 'quote'
  eyebrow: string
  title: string
  caption?: string
  metric?: { big: string; suffix?: string; label?: string }
}

function PortraitTemplate({ variant, eyebrow, title, caption, metric }: PortraitTemplateProps) {
  const bg = '#F4EFE6'
  const fg = '#0E0E10'
  return (
    <div className="flex flex-col gap-3">
      <div
        className="aspect-[4/5] p-8 flex flex-col justify-between border border-neutral-20"
        style={{ background: bg, color: fg }}
      >
        <div className="flex items-start justify-between">
          <Monogram color={fg} size={28} />
          <span className="font-sans text-[0.6875rem] uppercase tracking-[0.22em]" style={{ opacity: 0.55 }}>
            {eyebrow}
          </span>
        </div>

        {variant === 'metric' && metric && (
          <div className="flex flex-col gap-3">
            <div className="flex items-baseline gap-2">
              <span className="font-mono font-medium tabular-nums text-ink text-[3.5rem] leading-none">
                {metric.big}
              </span>
              {metric.suffix && (
                <span className="font-mono text-[1rem] tabular-nums text-ink">{metric.suffix}</span>
              )}
            </div>
            {metric.label && (
              <span className="font-sans text-[0.75rem] uppercase tracking-[0.22em] text-ink-65">
                {metric.label}
              </span>
            )}
            <div className="h-px bg-accent w-10 mt-2" />
          </div>
        )}

        {variant === 'editorial' && (
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-[2rem] leading-[1.05] font-medium text-balance type-display-opsz-sm">
              {title}
            </h3>
            <div className="h-px bg-accent w-10" />
          </div>
        )}

        {variant === 'quote' && (
          <div className="flex flex-col gap-3">
            <span className="font-serif text-[2.5rem] leading-none text-accent">"</span>
            <p className="font-serif italic text-[1.375rem] leading-[1.25] font-medium type-display-opsz-sm text-balance">
              {title}
            </p>
          </div>
        )}

        <div className="flex items-end justify-between">
          <span className="font-serif font-medium tracking-[0.22em] text-[0.875rem]">MAGNO</span>
          <span className="font-sans text-[0.625rem] uppercase tracking-[0.22em]" style={{ opacity: 0.55 }}>
            1080 × 1350
          </span>
        </div>
      </div>
      {caption && (
        <p className="font-sans text-[0.8125rem] text-ink-65 leading-[1.4]">{caption}</p>
      )}
    </div>
  )
}

type StoryTemplateProps = {
  variant: 'principio' | 'dado' | 'convite'
  bg: string
  fg: string
  eyebrow: string
  title: string
  sub?: string
  caption?: string
}

function StoryTemplate({ variant, bg, fg, eyebrow, title, sub, caption }: StoryTemplateProps) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="aspect-[9/16] p-6 flex flex-col justify-between border border-neutral-20"
        style={{ background: bg, color: fg }}
      >
        <div className="flex items-start justify-between">
          <Monogram color={fg} size={22} />
          <span className="font-sans text-[0.625rem] uppercase tracking-[0.22em]" style={{ opacity: 0.6 }}>
            {eyebrow}
          </span>
        </div>

        {variant === 'principio' && (
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-[1.75rem] leading-[1.05] font-medium type-display-opsz-sm text-balance">
              {title}
            </h3>
            {sub && (
              <p className="font-sans text-[0.75rem] leading-[1.5] opacity-75 max-w-[22ch]">
                {sub}
              </p>
            )}
          </div>
        )}

        {variant === 'dado' && (
          <div className="flex flex-col gap-2">
            <span className="font-mono font-medium tabular-nums text-[3rem] leading-none">{title}</span>
            {sub && (
              <span className="font-sans text-[0.75rem] uppercase tracking-[0.22em] opacity-70 max-w-[22ch]">
                {sub}
              </span>
            )}
            <div className="h-px mt-3 w-8" style={{ background: fg, opacity: 0.6 }} />
          </div>
        )}

        {variant === 'convite' && (
          <div className="flex flex-col gap-3">
            <p className="font-serif text-[1.375rem] leading-[1.15] font-medium type-display-opsz-sm text-balance">
              {title}
            </p>
            {sub && (
              <span className="font-sans text-[0.8125rem] uppercase tracking-[0.2em] opacity-75">
                {sub}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: fg, opacity: 1 }}>
          <span className="font-serif font-medium tracking-[0.22em] text-[0.75rem]">MAGNO</span>
          <span className="font-sans text-[0.5625rem] uppercase tracking-[0.22em]" style={{ opacity: 0.55 }}>
            1080 × 1920
          </span>
        </div>
      </div>
      {caption && (
        <p className="font-sans text-[0.8125rem] text-ink-65 leading-[1.4]">{caption}</p>
      )}
    </div>
  )
}

function MetricDark({ label, value, serif = false }: { label: string; value: string; serif?: boolean }) {
  return (
    <div className="flex flex-col gap-1 border-l-2 border-accent pl-4">
      <span className="font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-paper/55">
        {label}
      </span>
      <span
        className={
          serif
            ? 'font-serif text-[1.875rem] leading-[1.1] font-medium text-paper type-display-opsz-sm'
            : 'font-mono text-[1.875rem] leading-[1.1] font-medium tabular-nums text-paper'
        }
      >
        {value}
      </span>
    </div>
  )
}

/* ============================================================
   Data — pilares, 20 ideias, templates, semana
   ============================================================ */

const pillars = [
  {
    code: '01',
    name: 'Princípios',
    ratio: '35 %',
    register: 'Declaração firme',
    desc: 'Posts curtos que reforçam um princípio da marca por vez. A tese sem maquiagem.',
  },
  {
    code: '02',
    name: 'Análise',
    ratio: '35 %',
    register: 'Editorial The Economist',
    desc: 'Análise de dados reais, prática de mercado, estruturas patrimoniais. Sage puro.',
  },
  {
    code: '03',
    name: 'Travessia',
    ratio: '20 %',
    register: 'Narrativo contido',
    desc: 'Cenários compostos sobre o momento pós-liquidez. Nunca cliente identificável.',
  },
  {
    code: '04',
    name: 'Institucional',
    ratio: '10 %',
    register: 'Seco, informativo',
    desc: 'Publicação de carta, adesão a framework, novo partner. Nunca celebrativo.',
  },
]

const allIdeas = [
  { hook: 'Arquitetura antes de alocação.',                                 desc: 'Declaração central da firma. Hook curto, 3 parágrafos de desdobramento, fecho seco.', pillar: 'Princípios',   persona: 'Fundador',   format: '1:1' },
  { hook: 'A aritmética silenciosa do rebate.',                             desc: 'Análise: 1,3 % a.a. oculto em R$ 80M = R$ 1M/ano invisível ao extrato.',              pillar: 'Análise',      persona: 'Fundador',   format: '4:5' },
  { hook: 'Por que MAGNO não atende abaixo de R$ 20M.',                     desc: 'Aritmética do modelo. Anti-law Kapferer — comunicar para quem não está mirando.',      pillar: 'Princípios',   persona: 'Todas',      format: '1:1' },
  { hook: 'A carteira não é o plano.',                                       desc: 'Separação conceitual: alocação é consequência da arquitetura — não ponto de partida.', pillar: 'Princípios',   persona: 'Fundador',   format: '1:1' },
  { hook: 'Doze meses depois do M&A.',                                       desc: 'Três descobertas que costumam aparecer no primeiro ano pós-liquidez.',                 pillar: 'Travessia',    persona: 'Fundador',   format: '4:5' },
  { hook: 'A voz externa sênior.',                                           desc: 'Perfil da herdeira operadora e por que conselho técnico ≠ conselho patrimonial.',      pillar: 'Travessia',    persona: 'Herdeira',   format: '4:5' },
  { hook: 'Holding antes do próximo cheque.',                                desc: 'Quando a estruturação societária tem que vir antes de novos investimentos.',          pillar: 'Análise',      persona: 'Fundador',   format: '4:5' },
  { hook: 'Zero rebate. Zero contrato de distribuição.',                     desc: 'A aritmética da independência — o que sai do fee-based puro.',                        pillar: 'Princípios',   persona: 'Todas',      format: '1:1' },
  { hook: 'O que o banco não tem como te dizer.',                            desc: 'Análise do conflito estrutural de distribuição em bancos com prateleira própria.',    pillar: 'Análise',      persona: 'Fundador',   format: '4:5' },
  { hook: 'A primeira reunião não tem prateleira.',                          desc: 'Anatomia do diagnóstico patrimonial inicial de MAGNO. Sem produto, sem proposta.',    pillar: 'Análise',      persona: 'Fundador',   format: '4:5' },
  { hook: 'Offshore é arquitetura, não produto.',                            desc: 'A diferença entre "ter offshore" e ter uma estrutura offshore coerente com a holding.', pillar: 'Análise',    persona: 'Fundador',   format: '4:5' },
  { hook: 'Sucessão começa quando ninguém quer começar.',                    desc: 'Narrativa contida sobre a janela de 24 meses antes da primeira conversa formal.',    pillar: 'Travessia',    persona: 'Herdeira',   format: '4:5' },
  { hook: 'A família é sistema, não lista de herdeiros.',                    desc: 'Governança familiar como arquitetura — conselho, fórum, cartilha, regras claras.',   pillar: 'Análise',      persona: 'Herdeira',   format: '4:5' },
  { hook: 'O CFO familiar e a arquitetura acima.',                           desc: 'Como MAGNO trabalha com CFO familiar: complementar e treinador, não substituto.',    pillar: 'Princípios',   persona: 'Fundador',   format: '1:1' },
  { hook: '10–14 semanas — a travessia da primeira estruturação.',           desc: 'Cronograma canônico: diagnóstico, desenho, implementação. Entregas por fase.',         pillar: 'Análise',      persona: 'Fundador',   format: '4:5' },
  { hook: 'A carta trimestral de MAGNO — edição de abertura.',               desc: 'Publicação da carta inaugural. Texto curto + link para a íntegra no site.',           pillar: 'Institucional', persona: 'Todas',      format: '1:1' },
  { hook: 'A firma que nasce do seu ponto de vista.',                        desc: 'Manifesto de lançamento. Visual 4:5 em antracite, bordão serifado, assinatura abaixo.', pillar: 'Institucional', persona: 'Todas',      format: '4:5' },
  { hook: 'A armadilha do COE do mês.',                                      desc: 'Análise de produto estruturado: por que o que é bom pro banco raramente é bom pro cliente.', pillar: 'Análise', persona: 'Fundador',   format: '4:5' },
  { hook: 'O sócio que saiu e ainda não chegou.',                            desc: 'Retrato do advogado/médico pós-saída de sociedade — a travessia silenciosa.',         pillar: 'Travessia',    persona: 'Sócio',      format: '4:5' },
  { hook: 'Partners no client-facing — a economia explicada.',               desc: 'Por que MAGNO se recusa a pôr associate entre o cliente e a decisão patrimonial.',   pillar: 'Princípios',   persona: 'Todas',      format: '1:1' },
]

const feedSquare: SquareTemplateProps[] = [
  { variant: 'dark',   eyebrow: 'Princípio 01', title: 'Arquitetura antes de alocação.',         caption: 'Declaração central. Fundo antracite, serifa 40pt.' },
  { variant: 'light',  eyebrow: 'Princípio 04', title: 'A carteira não é o plano.',              caption: 'Contraponto editorial. Fundo pergaminho.' },
  { variant: 'accent', eyebrow: 'Acento',       title: 'Sem prateleira.',                        caption: 'Acento bordô apenas na régua. Uso escasso.' },
  { variant: 'light',  eyebrow: 'Princípio 08', title: 'Zero rebate. Zero contrato.',            caption: 'Afirmação seca. Duas linhas, sem adjetivo.' },
]

const feedPortrait: PortraitTemplateProps[] = [
  { variant: 'editorial', eyebrow: 'Princípio',  title: 'A firma que nasce do seu ponto de vista.', caption: 'Manifesto. Régua bordô abaixo do título.' },
  { variant: 'metric',    eyebrow: 'Análise 02', title: '',                                        metric: { big: '1,3', suffix: '% a.a.', label: 'oculto em R$ 80M' }, caption: 'Dado puro. Monoespaçada de 56pt.' },
  { variant: 'quote',     eyebrow: 'Carta',      title: 'O cliente está do lado dele. A firma precisa estar também.', caption: 'Citação editorial em itálico.' },
]

type StoryVariantType = 'principio' | 'dado' | 'convite'
const story: StoryTemplateProps[] = [
  {
    variant: 'principio',
    bg: '#0E0E10',
    fg: '#F4EFE6',
    eyebrow: 'Princípio',
    title: 'A firma que nasce do seu ponto de vista — não do portfólio do banco.',
    sub: 'MAGNO · Gestão patrimonial boutique',
    caption: 'Story editorial escuro. Hook serifado grande.',
  },
  {
    variant: 'dado',
    bg: '#F4EFE6',
    fg: '#5A1F25',
    eyebrow: 'Análise',
    title: '1,3 %',
    sub: 'a.a. ocultos no extrato de R$ 80M',
    caption: 'Story de dado. Número bordô em mono.',
  },
  {
    variant: 'convite',
    bg: '#F4EFE6',
    fg: '#0E0E10',
    eyebrow: 'Convite',
    title: 'Carta trimestral — primeira edição no ar.',
    sub: 'magno.capital / carta',
    caption: 'Story institucional. CTA em caixa alta.',
  },
]

const week = [
  { day: 'Seg', post: null },
  { day: 'Ter', post: 'Princípio · 1:1' },
  { day: 'Qua', post: null },
  { day: 'Qui', post: 'Análise · 4:5' },
  { day: 'Sex', post: null },
  { day: 'Sáb', post: null },
  { day: 'Dom', post: null },
]
