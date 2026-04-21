import { Display, Eyebrow, Body, Lead, PullQuote, Numeric, Card, CardEyebrow, CardTitle, CardBody } from '@/components/ui'

export const metadata = { title: 'Estratégia' }

export default function EstrategiaPage() {
  return (
    <article className="pb-14 md:pb-20">
      {/* Header */}
      <header className="container-wide py-14 md:py-20 border-b border-neutral-10">
        <Eyebrow className="mb-6">Fase 01 — Estratégia de marca</Eyebrow>
        <Display as="h1" size="xl" className="max-w-[22ch]">
          A firma que nasce do seu ponto de vista — não do portfólio do banco.
        </Display>
        <Body size="lg" className="mt-8 max-w-[60ch]">
          Posicionamento, arquétipo, personas, voz editorial e método. Cinco decisões
          estruturais que, juntas, definem porque MAGNO existe — e porque só uma categoria de
          empresários deve contratá-la.
        </Body>

        <dl className="grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-5 mt-8 md:mt-10 border-t border-neutral-10 pt-6 md:pt-8">
          {[
            ['01', 'Onlyness'],
            ['02', 'Arquétipo'],
            ['03', 'Personas'],
            ['04', 'Voz & Tom'],
            ['05', 'Método'],
          ].map(([n, label]) => (
            <div key={n} className="flex flex-col gap-1">
              <dt className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">{n}</dt>
              <dd className="font-serif text-[1.125rem] leading-tight text-ink type-display-opsz-body">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {/* Onlyness */}
      <section className="container-wide py-12 md:py-20">
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow className="mb-4">01 · Onlyness</Eyebrow>
            <Display as="h2" size="m">O recorte único de MAGNO.</Display>
          </div>
          <div className="flex flex-col gap-6">
            <Lead>
              MAGNO é o único <em>family office</em> brasileiro desenhado para o primeiro grande evento
              de liquidez de um empresário 1ª geração — sem prateleira, sem comissão, sem junior
              na linha de frente.
            </Lead>
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <Card variant="bordered" padding="md" className="gap-2">
                <CardEyebrow>Palavra</CardEyebrow>
                <CardTitle as="h3" className="text-[1.75rem]">Arquitetura</CardTitle>
                <CardBody>A palavra que MAGNO planta na mente. Não performance. Não acesso.</CardBody>
              </Card>
              <Card variant="bordered" padding="md" className="gap-2">
                <CardEyebrow>Essência</CardEyebrow>
                <CardTitle as="h3" className="text-[1.75rem]">Primeiro desenho. Depois carteira.</CardTitle>
                <CardBody>Holding, sucessão, governança, offshore. A alocação vem depois.</CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Arquétipo */}
      <section className="bg-paper-50 border-y border-neutral-10 py-12 md:py-20">
        <div className="container-wide">
          <div className="grid gap-6 lg:gap-12 lg:grid-cols-[1fr_1.6fr] mb-8 md:mb-10">
            <div>
              <Eyebrow className="mb-4">02 · Arquétipo</Eyebrow>
              <Display as="h2" size="m">Ruler 70 % + Sage 30 %.</Display>
            </div>
            <Body size="lg">
              Na taxonomia de Mark &amp; Pearson, MAGNO opera como <em>Ruler</em> — a autoridade
              que organiza, protege, administra — temperado por <em>Sage</em> — o estudo, a
              paciência intelectual. Nunca Hero (performance), nunca Magician (transformação),
              nunca Everyman (proximidade).
            </Body>
          </div>

          <div className="grid gap-0 md:grid-cols-2 border border-neutral-20 bg-paper">
            {archetypes.map((a, i) => (
              <div
                key={a.name}
                className={`p-7 md:p-8 flex flex-col gap-4 ${
                  i === 0 ? 'border-b md:border-b-0 md:border-r border-neutral-20' : ''
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-ink">
                      {a.name}
                    </span>
                  </div>
                  <span className="font-mono font-medium tabular-nums text-ink text-[1.875rem] leading-none">
                    {a.weight}
                  </span>
                </div>
                <p className="font-sans text-[1rem] leading-[1.6] text-ink-65 max-w-[55ch]">
                  {a.desc}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-2 pt-4 border-t border-neutral-10">
                  <div>
                    <div className="font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-neutral-50 mb-2">
                      Expressa-se como
                    </div>
                    <ul className="flex flex-col gap-1 font-sans text-[0.875rem] text-ink">
                      {a.yes.map((y) => <li key={y}>— {y}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-accent mb-2">
                      Nunca se expressa como
                    </div>
                    <ul className="flex flex-col gap-1 font-sans text-[0.875rem] text-ink-65">
                      {a.no.map((n) => <li key={n}>× {n}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="container-wide py-12 md:py-20">
        <div>
          <div className="grid gap-6 lg:gap-12 lg:grid-cols-[1fr_1.6fr] mb-8 md:mb-10">
            <div>
              <Eyebrow className="mb-4">03 · Personas</Eyebrow>
              <Display as="h2" size="m">Três perfis, três momentos de travessia.</Display>
            </div>
            <Body size="lg">
              MAGNO atende um número pequeno de famílias — por decisão. Distribuição esperada nos
              primeiros 24 meses concentra-se no Fundador (60 %), seguido da Herdeira Operadora
              (25 %) e do Sócio Saindo (15 %).
            </Body>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {personas.map((p) => (
              <Card key={p.code} variant="bordered" padding="lg" className="gap-5">
                <div className="flex items-center justify-between">
                  <CardEyebrow>Persona {p.code}</CardEyebrow>
                  <Numeric size="sm">{p.ratio}</Numeric>
                </div>
                <CardTitle as="h3">{p.name}</CardTitle>
                <CardBody>{p.desc}</CardBody>
                <div className="mt-auto pt-5 border-t border-neutral-10">
                  <div className="font-sans text-[0.75rem] uppercase tracking-[0.2em] text-neutral-50 mb-2">
                    Job emocional dominante
                  </div>
                  <p className="font-sans text-[0.9375rem] text-ink leading-snug italic">
                    {p.job}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Voz */}
      <section className="bg-paper-50 border-y border-neutral-10 py-12 md:py-20">
        <div className="container-wide grid gap-6 lg:gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <Eyebrow className="mb-4">04 · Voz e tom</Eyebrow>
            <Display as="h2" size="m">The Economist escrevendo ao cliente.</Display>
          </div>

          <div>
            <Body size="lg" className="mb-8">
              Gabarito mental: <em>The Economist escrevendo uma nota ao cliente</em> cruzado com
              {' '}<em>advogado de família dando conselho na sobremesa</em>. Arquetipicamente,
              Ruler 70 % + Sage 30 %.
            </Body>

            <div className="grid sm:grid-cols-2 gap-3 my-10">
              {voicePrinciples.map((vp, i) => (
                <div key={i} className="border-l-2 border-accent pl-4 py-1">
                  <div className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] text-neutral-50 mb-1">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="font-sans text-[0.9375rem] text-ink leading-snug">{vp}</p>
                </div>
              ))}
            </div>

            <PullQuote cite="Brand Book, seção 4.7 — Sistema de tagline">
              Arquitetura antes de alocação.
            </PullQuote>
          </div>
        </div>
      </section>

      {/* Método em 4 atos */}
      <section className="container-wide py-12 md:py-20">
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-[1fr_1.6fr] mb-8 md:mb-10">
          <div>
            <Eyebrow className="mb-4">05 · Método</Eyebrow>
            <Display as="h2" size="m">A travessia em quatro atos.</Display>
          </div>
          <Body size="lg">
            Cada nova família entra por uma sequência canônica — 10 a 14 semanas entre
            diagnóstico e implementação, com um partner sênior em cada ato. Depois, o
            atendimento entra em rotina editorial trimestral.
          </Body>
        </div>

        <ol className="grid gap-0 divide-y divide-neutral-20 hairline-y">
          {method.map((step) => (
            <li
              key={step.n}
              className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 py-8 md:grid-cols-[80px_1.1fr_1.4fr_auto] md:gap-x-10 md:py-10"
            >
              <span className="font-mono text-[0.9375rem] text-neutral-50 tabular-nums pt-2">
                {step.n}
              </span>
              <h3 className="font-serif text-[1.625rem] leading-[1.15] font-medium text-ink type-display-opsz-sm text-balance">
                {step.title}
              </h3>
              <p className="font-sans text-[0.9375rem] leading-[1.6] text-ink-65 md:max-w-[60ch] col-span-2 md:col-span-1 text-pretty">
                {step.body}
              </p>
              <span className="font-mono text-[0.8125rem] text-neutral-50 tabular-nums self-start pt-2 col-span-2 md:col-span-1 md:text-right">
                {step.duration}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Inimigos */}
      <section className="bg-ink text-paper py-12 md:py-20">
        <div className="container-wide">
          <Eyebrow className="mb-4 text-paper/60">06 · Inimigos simbólicos</Eyebrow>
          <Display as="h2" size="m" className="text-paper max-w-[24ch] mb-10">
            O que MAGNO não é — e nunca vai ser.
          </Display>

          <div className="grid gap-0 divide-y divide-paper/20 border-y border-paper/20">
            {enemies.map((e, i) => (
              <div key={e.label} className="grid gap-4 py-8 md:grid-cols-[80px_1.2fr_1.5fr] md:gap-10">
                <span className="font-mono text-[1rem] text-paper/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-[1.625rem] font-medium text-paper leading-tight">
                  {e.label}
                </h3>
                <p className="font-sans text-[1rem] leading-[1.65] text-paper/75 max-w-[60ch]">
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}

const personas = [
  {
    code: '01',
    name: 'O Fundador',
    ratio: '60 %',
    desc: 'Empresário 1ª geração, 45–62 anos, pós-M&A parcial, IPO ou secondary. Patrimônio líquido R$ 20M–R$ 200M.',
    job: '"Parar de ter medo de ser enganado."',
  },
  {
    code: '02',
    name: 'A Herdeira Operadora',
    ratio: '25 %',
    desc: 'Filha de empresário 1ª geração, presidência ou conselho da empresa família. R$ 15M–R$ 80M pessoal.',
    job: '"Ter voz externa sênior antes de decisão grande."',
  },
  {
    code: '03',
    name: 'O Sócio Saindo',
    ratio: '15 %',
    desc: 'Advogado / médico / consultor sênior pós-saída de sociedade. R$ 10M–R$ 50M. 50–65 anos.',
    job: '"Sensação de que tudo está em ordem."',
  },
]

const voicePrinciples = [
  'Precisão é deferência. Cada palavra pesada.',
  'A marca não celebra. Zero exclamação, sempre.',
  'Ausência de produção. Sem jornada, sem ecossistema.',
  'Par, nunca subalterno nem entusiasmado.',
  'Confiança sem decoração. Afirmação direta.',
  'Especificidade técnica sem jargão defensivo.',
  'Números são personagens — Plex Mono, unidade explícita.',
]

const archetypes = [
  {
    name: 'Ruler',
    weight: '70 %',
    desc: 'A autoridade que organiza. Protege patrimônio, estrutura governança, documenta cada decisão. Fala como par de igual para igual — nunca como fornecedor subalterno, nunca como entusiasmado.',
    yes: ['Soberania', 'Estrutura', 'Rastreabilidade', 'Discrição'],
    no: ['Performance', 'Celebração', 'Urgência', 'Proximidade forçada'],
  },
  {
    name: 'Sage',
    weight: '30 %',
    desc: 'O estudo paciente. Análise de dados reais, revisão de literatura, pensamento de longo prazo. Publica raramente — e, quando publica, é denso.',
    yes: ['Evidência', 'Didática contida', 'Método', 'Curiosidade fria'],
    no: ['Opinião sem dado', 'Didatismo simplificador', 'Viral take', 'Thread de LinkedIn'],
  },
]

const method = [
  {
    n: '01',
    title: 'Diagnóstico patrimonial',
    body: 'Mapeamento completo: liquidez, equity, imóveis, estrutura atual, gap tributário, pontos de exposição e cronograma familiar. A primeira entrega é um dossiê, nunca uma proposta de carteira.',
    duration: '3–4 semanas',
  },
  {
    n: '02',
    title: 'Desenho da arquitetura',
    body: 'Holding, sucessão, offshore, governança familiar e política de investimentos. Trabalho conjunto com advogado de família e jurista tributário quando aplicável.',
    duration: '4–6 semanas',
  },
  {
    n: '03',
    title: 'Implementação & política',
    body: 'Execução com bancos de custódia e gestores selecionados. Política de investimentos assinada, bandas, benchmarks e janela de rebalanceamento documentados.',
    duration: '3–4 semanas',
  },
  {
    n: '04',
    title: 'Governança em ritmo editorial',
    body: 'Reunião trimestral de comitê, carta anual, revisão formal a cada 12 meses. MAGNO não assina por você — senta do seu lado da mesa e registra cada decisão.',
    duration: 'contínuo',
  },
]

const enemies = [
  {
    label: 'Private banking de prateleira',
    desc: 'O canal que atende com seriedade e vende, na mesma reunião, o produto que o banco precisa distribuir naquele mês. A seriedade é real. O alinhamento de interesses, não.',
  },
  {
    label: 'Wealth advisor de Instagram',
    desc: 'O influenciador que monta fundo próprio e empurra alocação para um patrimônio que ele não construiu. A linguagem é próxima. A profundidade, não.',
  },
  {
    label: 'A acomodação do "já resolvi isso"',
    desc: 'O cliente ainda não sabe que está acomodado. Toda comunicação de MAGNO nomeia essa acomodação sem ofender — para que ele reconheça.',
  },
]
