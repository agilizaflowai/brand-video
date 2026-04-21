'use client'

import { useState } from 'react'
import { ArrowRight, Info, AlertTriangle, Check } from 'lucide-react'
import {
  Display,
  Heading,
  Eyebrow,
  Body,
  Button,
  Input,
  Textarea,
  Card,
  CardEyebrow,
  CardTitle,
  CardBody,
  CardMetric,
  Accordion,
  Modal,
  Badge,
  Alert,
  Lead,
  PullQuote,
  Numeric,
  Logo,
} from '@/components/ui'

export default function UIKitPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [tab, setTab] = useState('arquitetura')
  const [toggleA, setToggleA] = useState(true)
  const [toggleB, setToggleB] = useState(false)
  const [checks, setChecks] = useState({ relatorio: true, carta: false, assinatura: true })
  const [radio, setRadio] = useState('conservador')

  return (
    <article className="pb-10 md:pb-14">
      <header className="container-wide py-10 md:py-14 border-b border-neutral-10">
        <Eyebrow className="mb-5">Fase 05 — UI Kit</Eyebrow>
        <Display as="h1" size="xl" className="max-w-[22ch]">
          Componentes vivos, construídos sobre os tokens.
        </Display>
        <Body size="lg" className="mt-6 max-w-[60ch]">
          Cada componente respeita radius 0, stroke fino, paleta travada e tipografia semântica.
          Sem animação decorativa — apenas transições de cor em 150 ms.
        </Body>

        <dl className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mt-7 border-t border-neutral-10 pt-6">
          {[
            ['01', 'Button'],
            ['02', 'Forms'],
            ['03', 'Card'],
            ['04', 'Accordion'],
            ['05', 'Modal'],
            ['06', 'Badge · Alert'],
            ['07', 'Tabs · Stats'],
            ['08', 'Table'],
            ['09', 'Navbar · Footer'],
            ['10', 'Typography'],
          ].map(([n, label]) => (
            <div key={n} className="flex flex-col gap-1">
              <dt className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">{n}</dt>
              <dd className="font-sans text-[0.9375rem] text-ink">{label}</dd>
            </div>
          ))}
        </dl>
      </header>

      {/* ===================== 01 · BUTTON ===================== */}
      <Section number="01" title="Button" desc="Primary, secondary, ghost, destructive × sm / md / lg. Estados disabled e ícone suportados.">
        <div className="flex flex-col gap-6">
          <Row label="Variantes (md)">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </Row>
          <Row label="Tamanhos">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Row>
          <Row label="Com ícone">
            <Button icon={<ArrowRight size={16} strokeWidth={1.25} />}>Agendar</Button>
            <Button variant="secondary" icon={<ArrowRight size={16} strokeWidth={1.25} />}>Saber mais</Button>
          </Row>
          <Row label="Estado">
            <Button disabled>Indisponível</Button>
            <Button variant="secondary" disabled>Aguardando</Button>
          </Row>
        </div>
      </Section>

      {/* ===================== 02 · FORMS ===================== */}
      <Section number="02" title="Forms" desc="Input, Textarea, Toggle, Checkbox, Radio. Label, hint e erro canônicos.">
        <div className="flex flex-col gap-7">
          <div className="grid gap-5 md:grid-cols-2 max-w-3xl">
            <Input label="Nome completo" placeholder="Ex: Maria Silva" required />
            <Input label="E-mail" type="email" error="Formato inválido" />
            <Input
              label="Patrimônio aproximado"
              placeholder="R$ 0,00"
              hint="Valor líquido, sem imóveis residenciais."
              mono
            />
            <Input
              eyebrow="Opcional"
              label="LinkedIn"
              placeholder="linkedin.com/in/..."
            />
            <div className="md:col-span-2">
              <Textarea
                label="Contexto"
                hint="Conte brevemente o momento atual do seu patrimônio. Máximo 500 caracteres."
                maxLength={500}
                rows={5}
              />
            </div>
          </div>

          {/* Toggle */}
          <div className="flex flex-col gap-3 max-w-xl border-t border-neutral-10 pt-6">
            <Eyebrow>Toggle · Switch</Eyebrow>
            <ToggleRow
              label="Receber relatório trimestral"
              hint="Enviado como PDF no décimo dia útil do mês."
              checked={toggleA}
              onChange={() => setToggleA((v) => !v)}
            />
            <ToggleRow
              label="Newsletter editorial mensal"
              hint="Uma carta por mês. Zero cadência alta."
              checked={toggleB}
              onChange={() => setToggleB((v) => !v)}
            />
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-3 max-w-xl border-t border-neutral-10 pt-6">
            <Eyebrow>Checkbox</Eyebrow>
            <CheckRow
              label="Relatório patrimonial trimestral"
              checked={checks.relatorio}
              onChange={() => setChecks((c) => ({ ...c, relatorio: !c.relatorio }))}
            />
            <CheckRow
              label="Carta institucional quadrimestral"
              checked={checks.carta}
              onChange={() => setChecks((c) => ({ ...c, carta: !c.carta }))}
            />
            <CheckRow
              label="Assinatura institucional em e-mail"
              checked={checks.assinatura}
              onChange={() => setChecks((c) => ({ ...c, assinatura: !c.assinatura }))}
            />
          </div>

          {/* Radios */}
          <div className="flex flex-col gap-3 max-w-xl border-t border-neutral-10 pt-6">
            <Eyebrow>Radio — perfil de risco</Eyebrow>
            {[
              { v: 'conservador', l: 'Preservação', d: '0–15 % de volatilidade projetada.' },
              { v: 'equilibrado', l: 'Equilibrado',  d: '15–30 % de volatilidade projetada.' },
              { v: 'oportunista', l: 'Oportunista',  d: 'Acima de 30 %, com caixa de reserva de 18 meses.' },
            ].map((r) => (
              <RadioRow
                key={r.v}
                label={r.l}
                hint={r.d}
                name="risk"
                value={r.v}
                checked={radio === r.v}
                onChange={() => setRadio(r.v)}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* ===================== 03 · CARD ===================== */}
      <Section number="03" title="Card" desc="Default, bordered, elevated, accent, inverted. Com sub-composições de eyebrow, title, body, métrica.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Card>
            <CardEyebrow>Default</CardEyebrow>
            <CardTitle>Cartão padrão</CardTitle>
            <CardBody>Fundo pergaminho 50. Sem borda. Para grid de conteúdo.</CardBody>
          </Card>
          <Card variant="bordered">
            <CardEyebrow>Bordered</CardEyebrow>
            <CardTitle>Cartão com borda</CardTitle>
            <CardBody>Borda fina neutral-20. Padrão em listagem de personas.</CardBody>
          </Card>
          <Card variant="elevated">
            <CardEyebrow>Elevated</CardEyebrow>
            <CardTitle>Cartão elevado</CardTitle>
            <CardBody>Sombra hairline. Uso raro — apenas em hover de card interativo.</CardBody>
          </Card>
          <Card variant="accent">
            <CardEyebrow className="text-paper/70">Accent</CardEyebrow>
            <CardTitle className="text-paper">Call-out bordô</CardTitle>
            <CardBody className="text-paper/85">
              Para separação de seção editorial, capas e destaques raros.
            </CardBody>
          </Card>
          <Card variant="inverted">
            <CardEyebrow className="text-paper/60">Inverted</CardEyebrow>
            <CardTitle className="text-paper">Cartão noite</CardTitle>
            <CardBody className="text-paper/75">
              Fundo antracite. Para blocos de contraste editorial.
            </CardBody>
          </Card>
          <Card variant="bordered">
            <CardEyebrow>Com métricas</CardEyebrow>
            <CardTitle>Modelo econômico</CardTitle>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <CardMetric label="Até R$ 50M" value="0,75 %" />
              <CardMetric label="R$ 50M–150M" value="0,60 %" />
            </div>
          </Card>
        </div>
      </Section>

      {/* ===================== 04 · ACCORDION ===================== */}
      <Section number="04" title="Accordion · FAQ" desc='A "caixa de perguntas" — aria-expanded, keyboard navigation, transição de 150 ms.'>
        <div className="max-w-3xl">
          <Accordion items={accordionData} />
        </div>
      </Section>

      {/* ===================== 05 · MODAL ===================== */}
      <Section number="05" title="Modal" desc="Foco no dialog, fecha em Escape, trava scroll do body. Eyebrow + title + footer canônicos.">
        <Button onClick={() => setModalOpen(true)}>Abrir modal</Button>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          eyebrow="Agendamento"
          title="Primeira conversa"
          footer={
            <div className="flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancelar</Button>
              <Button onClick={() => setModalOpen(false)}>Confirmar</Button>
            </div>
          }
        >
          <Body>
            Reunião de 90 minutos, sem custo e sem compromisso. A partir daí, decidimos em
            conjunto se faz sentido avançar para um diagnóstico patrimonial formal.
          </Body>
        </Modal>
      </Section>

      {/* ===================== 06 · BADGE · ALERT ===================== */}
      <Section number="06" title="Badge · Alert" desc="Etiquetas discretas e alertas de status. Linha colorida; nunca fundo inteiro.">
        <div className="flex flex-col gap-8">
          <div>
            <Eyebrow className="mb-4">Badge</Eyebrow>
            <div className="flex flex-wrap gap-3">
              <Badge>Persona 01</Badge>
              <Badge variant="accent">Kernel</Badge>
              <Badge variant="inverted">MAGNO</Badge>
              <Badge variant="success">Aprovado</Badge>
              <Badge variant="warning">Em revisão</Badge>
              <Badge variant="info">Informativo</Badge>
              <Badge size="md" variant="accent">Fase 03 · Identidade</Badge>
              <Badge uppercase={false}>Mixed Case</Badge>
            </div>
          </div>
          <div>
            <Eyebrow className="mb-4">Alert</Eyebrow>
            <div className="flex flex-col gap-4 max-w-2xl">
              <Alert variant="info" title="Nota de produção" icon={<Info size={18} strokeWidth={1.25} />}>
                As imagens são placeholders documentados. Substituir por fotos produzidas antes da publicação.
              </Alert>
              <Alert variant="success" title="Salvo" icon={<Check size={18} strokeWidth={1.25} />}>
                Alterações aplicadas ao kernel da marca.
              </Alert>
              <Alert variant="warning" title="Atenção" icon={<AlertTriangle size={18} strokeWidth={1.25} />}>
                Acento bordô reservado para destaque editorial. Evitar em massa de fundo.
              </Alert>
              <Alert variant="danger" title="Erro">
                Não foi possível enviar o formulário. Verifique os campos destacados.
              </Alert>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== 07 · TABS · STATS ===================== */}
      <Section number="07" title="Tabs · Stats" desc="Navegação tabular editorial e blocos numéricos de alta hierarquia. Núcleo da proposta e do relatório.">
        <div className="flex flex-col gap-8">
          <div>
            <Eyebrow className="mb-4">Tabs</Eyebrow>
            <div className="max-w-3xl">
              <div className="flex border-b border-neutral-20">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`relative px-5 py-3 font-sans text-[0.875rem] transition-colors ${
                      tab === t.id ? 'text-ink' : 'text-ink-65 hover:text-ink'
                    }`}
                  >
                    {t.label}
                    {tab === t.id && (
                      <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-ink" />
                    )}
                  </button>
                ))}
              </div>
              <div className="pt-6 font-sans text-[1rem] leading-[1.65] text-ink-65 max-w-[65ch]">
                {tabs.find((t) => t.id === tab)?.body}
              </div>
            </div>
          </div>

          <div>
            <Eyebrow className="mb-4">Stats — bloco de destaque</Eyebrow>
            <div className="grid gap-0 sm:grid-cols-3 border-y border-neutral-20">
              <Stat label="AUM alvo em 36 meses"     value="R$ 1,6 B" delta="meta" />
              <Stat label="Famílias em atendimento"   value="12–20"    delta="limite" stroke />
              <Stat label="Tempo médio estruturação" value="10–14"    suffix="sem"  stroke />
            </div>
          </div>

          <div>
            <Eyebrow className="mb-4">Stats — versão invertida</Eyebrow>
            <div className="bg-ink grid gap-0 sm:grid-cols-3">
              <DarkStat label="Fee sobre AUM"           value="0,45–0,75" suffix="% a.a." />
              <DarkStat label="Setup fee"                value="R$ 120–300" suffix="k" />
              <DarkStat label="Ticket mínimo"            value="R$ 20" suffix="M+" />
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== 08 · TABLE ===================== */}
      <Section number="08" title="Table" desc="Tabela financeira. Monoespaçada, alinhamento decimal, hairline entre linhas. Nunca zebra.">
        <div className="flex flex-col gap-8">
          <div>
            <Eyebrow className="mb-4">Estrutura tarifária</Eyebrow>
            <div className="border border-neutral-20 overflow-x-auto">
              <table className="w-full min-w-[560px] font-sans text-[0.875rem] md:text-[0.9375rem]">
                <thead>
                  <tr className="border-b border-neutral-20 bg-paper-50">
                    <th className="text-left font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-neutral-50 px-5 py-3">
                      Faixa de AUM
                    </th>
                    <th className="text-right font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-neutral-50 px-5 py-3">
                      Fee anual
                    </th>
                    <th className="text-right font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-neutral-50 px-5 py-3">
                      Bps
                    </th>
                    <th className="text-right font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-neutral-50 px-5 py-3">
                      Caso &mdash; R$ 80M
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tariff.map((r) => (
                    <tr key={r.range} className="border-b border-neutral-10 last:border-b-0">
                      <td className="px-5 py-4 text-ink">{r.range}</td>
                      <td className="px-5 py-4 text-ink font-mono tabular-nums text-right">{r.fee}</td>
                      <td className="px-5 py-4 text-ink-65 font-mono tabular-nums text-right">{r.bps}</td>
                      <td className="px-5 py-4 text-ink font-mono tabular-nums text-right">{r.case}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-ink bg-paper-50/40">
                    <td className="px-5 py-4 font-sans text-[0.75rem] uppercase tracking-[0.22em] text-ink">Total no caso</td>
                    <td />
                    <td />
                    <td className="px-5 py-4 text-ink font-mono tabular-nums text-right font-medium">
                      R$ 600.000,00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="font-sans text-[0.75rem] text-neutral-50 mt-3">
              Valor anual total. Sem rebate de produto, sem comissão de distribuição.
            </p>
          </div>

          <div>
            <Eyebrow className="mb-4">Alocação sugerida — perfil equilibrado</Eyebrow>
            <div className="border border-neutral-20 overflow-x-auto">
              <table className="w-full min-w-[560px] font-sans text-[0.875rem] md:text-[0.9375rem]">
                <thead>
                  <tr className="border-b border-neutral-20 bg-paper-50">
                    <th className="text-left px-5 py-3 font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-neutral-50">Classe</th>
                    <th className="text-right px-5 py-3 font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-neutral-50">Peso</th>
                    <th className="text-right px-5 py-3 font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-neutral-50">Benchmark</th>
                    <th className="text-right px-5 py-3 font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-neutral-50">Janela</th>
                  </tr>
                </thead>
                <tbody>
                  {allocation.map((a) => (
                    <tr key={a.cls} className="border-b border-neutral-10 last:border-b-0">
                      <td className="px-5 py-4 text-ink">{a.cls}</td>
                      <td className="px-5 py-4 text-ink font-mono tabular-nums text-right">{a.w}</td>
                      <td className="px-5 py-4 text-ink-65 font-mono tabular-nums text-right">{a.bench}</td>
                      <td className="px-5 py-4 text-ink-65 font-mono tabular-nums text-right">{a.window}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== 09 · NAVBAR · FOOTER ===================== */}
      <Section number="09" title="Navbar · Footer" desc="Navegação persistente e rodapé institucional. Sticky com backdrop; rodapé com navegação, contato e footnote.">
        <div className="flex flex-col gap-8">
          <div>
            <Eyebrow className="mb-4">Navbar — estado default</Eyebrow>
            <div className="border border-neutral-20 overflow-hidden">
              <div className="bg-paper/80 backdrop-blur-sm border-b border-transparent">
                <div className="mx-auto flex h-[4.5rem] items-center justify-between px-6">
                  <Logo variant="full" className="h-7 text-ink" />
                  <nav className="hidden md:flex items-center gap-8">
                    {['Estratégia', 'Identidade', 'UI Kit', 'Social Kit', 'Proposta', 'Papel Timbrado'].map((l, i) => (
                      <span key={l} className={`font-sans text-[0.875rem] ${i === 2 ? 'text-ink' : 'text-ink-65'}`}>
                        {l}
                      </span>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="h-16 bg-paper-50 flex items-center px-6">
                <span className="font-sans text-[0.75rem] text-neutral-50">
                  conteúdo da página começa aqui ↓
                </span>
              </div>
            </div>
          </div>

          <div>
            <Eyebrow className="mb-4">Navbar — scrolled (bg + border hairline)</Eyebrow>
            <div className="border border-neutral-20 overflow-hidden">
              <div className="bg-paper/95 border-b border-neutral-10">
                <div className="mx-auto flex h-[4.5rem] items-center justify-between px-6">
                  <Logo variant="full" className="h-7 text-ink" />
                  <nav className="hidden md:flex items-center gap-8">
                    {['Estratégia', 'Identidade', 'UI Kit', 'Social Kit', 'Proposta', 'Papel Timbrado'].map((l, i) => (
                      <span key={l} className={`font-sans text-[0.875rem] ${i === 2 ? 'text-ink' : 'text-ink-65'}`}>
                        {l}
                      </span>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Eyebrow className="mb-4">Footer institucional</Eyebrow>
            <div className="border border-neutral-20 overflow-hidden">
              <div className="bg-paper-50 p-8 md:p-10">
                <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
                  <div>
                    <Logo variant="full" className="h-8 text-ink mb-4" />
                    <p className="font-sans text-[0.875rem] leading-[1.6] text-ink-65 max-w-[36ch]">
                      Family office boutique independente para empresários pós-liquidez de 1ª geração.
                    </p>
                  </div>
                  <FooterColumn title="Navegação" items={['Estratégia', 'Identidade', 'UI Kit', 'Social Kit']} />
                  <FooterColumn title="Contato" items={['contato@magno.capital', 'Av. Brigadeiro Faria Lima', 'São Paulo · Brasil']} />
                  <FooterColumn title="Institucional" items={['Governança', 'Compliance', 'Privacidade']} />
                </div>
                <div className="flex flex-wrap justify-between gap-3 pt-8 mt-8 border-t border-neutral-20">
                  <span className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">
                    © 2026 MAGNO Gestão Patrimonial
                  </span>
                  <span className="font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-neutral-50">
                    Arquitetura antes de alocação
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===================== 10 · TYPOGRAPHY ===================== */}
      <Section number="10" title="Typography" desc="Display, Heading, Lead, Body, Eyebrow, Caption, Numeric, PullQuote — a hierarquia inteira em um só lugar.">
        <div className="flex flex-col gap-8">
          <div>
            <Eyebrow className="mb-4">Display</Eyebrow>
            <div className="flex flex-col gap-3">
              <Display size="2xl" as="h3">Display 2XL</Display>
              <Display size="xl" as="h3">Display XL</Display>
              <Display size="l" as="h3">Display L</Display>
              <Display size="m" as="h3">Display M</Display>
              <Display size="s" as="h3">Display S</Display>
            </div>
          </div>
          <div>
            <Eyebrow className="mb-4">Heading (Inter)</Eyebrow>
            <div className="flex flex-col gap-2">
              <Heading size="h4" as="h4">Heading H4</Heading>
              <Heading size="h5" as="h5">Heading H5</Heading>
              <Heading size="h6" as="h6">Heading H6</Heading>
            </div>
          </div>
          <div>
            <Eyebrow className="mb-3">Body</Eyebrow>
            <Lead>
              Lead — parágrafo de abertura. Para o empresário que construiu patrimônio do zero e
              acabou de virá-lo em dinheiro.
            </Lead>
            <Body className="mt-4">
              Body — corpo padrão. A primeira entrega de MAGNO não é uma carteira. É o desenho da
              arquitetura.
            </Body>
            <Body size="sm" className="mt-2" muted>
              Body SM muted — legendas e metadata em neutro.
            </Body>
          </div>
          <div>
            <Eyebrow className="mb-3">Numeric (Plex Mono)</Eyebrow>
            <div className="flex flex-wrap gap-8">
              <Numeric size="lg">R$ 82.400.000,00</Numeric>
              <Numeric>0,75 % a.a.</Numeric>
              <Numeric size="sm">45 bps</Numeric>
            </div>
          </div>
          <PullQuote cite="Jean-Noël Kapferer · The New Strategic Brand Management">
            A brand is not a product — it is the product&apos;s essence, its meaning, and its direction.
          </PullQuote>
        </div>
      </Section>
    </article>
  )
}

/* ============================================================
   Sub-componentes locais
   ============================================================ */

function Section({
  number,
  title,
  desc,
  children,
}: {
  number: string
  title: string
  desc: string
  children: React.ReactNode
}) {
  return (
    <section className="container-wide py-8 md:py-12 border-b border-neutral-10">
      <div className="grid gap-5 lg:grid-cols-[220px_1fr] lg:gap-10">
        <div className="lg:sticky lg:top-[calc(var(--navbar-h)+1.5rem)] lg:self-start">
          <Eyebrow className="mb-3">{number} · Componente</Eyebrow>
          <h2 className="font-serif text-[1.75rem] md:text-[2rem] font-medium leading-tight text-ink type-display-opsz-sm">
            {title}
          </h2>
          <p className="font-sans text-[0.9375rem] text-ink-65 leading-[1.55] mt-3">{desc}</p>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <Eyebrow>{label}</Eyebrow>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  )
}

function ToggleRow({
  label, hint, checked, onChange,
}: { label: string; hint?: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-start justify-between gap-5 py-3 border-b border-neutral-10 last:border-b-0 cursor-pointer">
      <div className="flex flex-col gap-1">
        <span className="font-sans text-[0.9375rem] text-ink">{label}</span>
        {hint && <span className="font-sans text-[0.8125rem] text-ink-65">{hint}</span>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={onChange}
        className={`relative h-[22px] w-[40px] shrink-0 border transition-colors ${
          checked ? 'bg-ink border-ink' : 'bg-paper border-neutral-20'
        }`}
      >
        <span
          className={`absolute top-[2px] h-[16px] w-[16px] transition-[left,background] duration-150 ${
            checked ? 'left-[21px] bg-paper' : 'left-[2px] bg-ink'
          }`}
        />
      </button>
    </label>
  )
}

function CheckRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <span
        onClick={onChange}
        className={`h-[18px] w-[18px] flex items-center justify-center border transition-colors ${
          checked ? 'bg-ink border-ink' : 'bg-paper border-neutral-35'
        }`}
      >
        {checked && (
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M1.5 5.5L4 8L9.5 2" stroke="#F4EFE6" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        )}
      </span>
      <span className="font-sans text-[0.9375rem] text-ink">{label}</span>
    </label>
  )
}

function RadioRow({
  label, hint, name, value, checked, onChange,
}: { label: string; hint?: string; name: string; value: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer py-2">
      <span
        onClick={onChange}
        className={`mt-[2px] h-[18px] w-[18px] shrink-0 rounded-full border flex items-center justify-center transition-colors ${
          checked ? 'border-ink' : 'border-neutral-35'
        }`}
      >
        {checked && <span className="h-[10px] w-[10px] rounded-full bg-ink" />}
      </span>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="sr-only" />
      <div className="flex flex-col">
        <span className="font-sans text-[0.9375rem] text-ink">{label}</span>
        {hint && <span className="font-sans text-[0.8125rem] text-ink-65 mt-0.5">{hint}</span>}
      </div>
    </label>
  )
}

function Stat({ label, value, suffix, delta, stroke }: { label: string; value: string; suffix?: string; delta?: string; stroke?: boolean }) {
  return (
    <div className={`p-5 md:p-6 flex flex-col gap-3 ${stroke ? 'border-l border-neutral-20' : ''}`}>
      <span className="font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-neutral-50">
        {label}
      </span>
      <div className="flex items-baseline gap-2 whitespace-nowrap">
        <span className="font-mono font-medium tabular-nums text-ink text-[clamp(1.5rem,0.6vw+1.35rem,1.875rem)] leading-[1.05]">
          {value}
        </span>
        {suffix && (
          <span className="font-mono text-[0.8125rem] tabular-nums text-ink-65">{suffix}</span>
        )}
      </div>
      {delta && (
        <span className="font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-neutral-50">
          {delta}
        </span>
      )}
    </div>
  )
}

function DarkStat({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="p-5 md:p-6 border-l border-paper/10 first:border-l-0 flex flex-col gap-3">
      <span className="font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-paper/50">
        {label}
      </span>
      <div className="flex items-baseline gap-2 whitespace-nowrap">
        <span className="font-mono font-medium tabular-nums text-paper text-[clamp(1.5rem,0.6vw+1.35rem,1.875rem)] leading-[1.05]">
          {value}
        </span>
        {suffix && (
          <span className="font-mono text-[0.8125rem] tabular-nums text-paper/70">{suffix}</span>
        )}
      </div>
    </div>
  )
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-neutral-50 mb-4">
        {title}
      </div>
      <ul className="flex flex-col gap-2">
        {items.map((i) => (
          <li key={i} className="font-sans text-[0.875rem] text-ink-65">{i}</li>
        ))}
      </ul>
    </div>
  )
}

/* ============================================================
   Data
   ============================================================ */

const tabs = [
  {
    id: 'arquitetura',
    label: 'Arquitetura',
    body: (
      <p>
        Holding, sucessão, offshore, tributário e governança. A primeira entrega é o desenho
        estrutural — não a carteira. Em média, 10–14 semanas entre diagnóstico e implementação,
        com um partner sênior conduzindo cada etapa.
      </p>
    ),
  },
  {
    id: 'alocacao',
    label: 'Alocação',
    body: (
      <p>
        Política de investimentos com bandas, benchmarks e janela de rebalanceamento. Zero
        rebate de produto, zero contrato de distribuição: a alocação é consequência da
        arquitetura, nunca ponto de partida.
      </p>
    ),
  },
  {
    id: 'governanca',
    label: 'Governança',
    body: (
      <p>
        Calendário de reuniões trimestrais, reporte anual, política de decisão patrimonial.
        MAGNO não assina por você — senta do seu lado da mesa e documenta cada decisão com
        rastreabilidade.
      </p>
    ),
  },
  {
    id: 'sucessao',
    label: 'Sucessão',
    body: (
      <p>
        Arquitetura de transmissão geracional. Trabalho conjunto com advogado de família e
        jurista tributário — MAGNO traduz a estrutura legal para o plano patrimonial sem
        conflito com o escritório externo.
      </p>
    ),
  },
]

const tariff = [
  { range: 'Até R$ 50M',      fee: '0,75 % a.a.', bps: '75 bps', case: 'R$ 375.000' },
  { range: 'R$ 50M–R$ 150M',  fee: '0,60 % a.a.', bps: '60 bps', case: 'R$ 180.000' },
  { range: 'Acima de R$ 150M', fee: '0,45 % a.a.', bps: '45 bps', case: '—' },
]

const allocation = [
  { cls: 'Pós-fixado BR',          w: '35 %', bench: 'CDI',          window: '30 d' },
  { cls: 'Crédito privado BR',     w: '18 %', bench: 'CDI + 2,5 %',  window: '90 d' },
  { cls: 'Equities BR',            w: '12 %', bench: 'IBX',          window: '90 d' },
  { cls: 'Equities globais',       w: '15 %', bench: 'MSCI ACWI',    window: '90 d' },
  { cls: 'Real assets',            w: '10 %', bench: 'IPCA + 6 %',   window: '360 d' },
  { cls: 'Alternativos (PE/VC)',   w: '10 %', bench: 'MSCI World × 1,3', window: '5–10 a' },
]

const accordionData = [
  {
    id: 'banco',
    question: 'Já tenho relação de 10+ anos com o private banking do meu banco. Por que adicionar MAGNO?',
    answer: (
      <div className="flex flex-col gap-4">
        <p>
          O <em>private banking</em> do banco é um bom canal de custódia e execução. A função dele,
          contudo, é distribuir os produtos que o banco precisa distribuir — não projetar a
          arquitetura do seu patrimônio.
        </p>
        <p>
          MAGNO não substitui o banco. Projetamos a estrutura ao redor: holding, sucessão,
          governança, tributário, <em>offshore</em>. O banco continua com custódia e execução — dentro
          de uma arquitetura auditada que elimina conflito de interesse.
        </p>
      </div>
    ),
  },
  {
    id: 'prazo',
    question: 'Quanto tempo leva a primeira estruturação completa?',
    answer: (
      <p>
        Entre 10 e 14 semanas, divididas em três fases: diagnóstico patrimonial (3–4 semanas),
        desenho da arquitetura (4–6 semanas), e implementação + política de investimentos (3–4 semanas).
      </p>
    ),
  },
  {
    id: 'ticket',
    question: 'Por que MAGNO não atende patrimônios abaixo de R$ 20M?',
    answer: (
      <p>
        Não é critério de status — é aritmética do modelo. Abaixo de R$ 20M, o setup fee e o AUM
        fee juntos deixam de ser economicamente viáveis contra o número máximo de famílias que
        uma boutique como MAGNO pode servir com senioridade real no client-facing.
      </p>
    ),
  },
  {
    id: 'cfo',
    question: 'Já contratei um CFO familiar. MAGNO substitui ou complementa?',
    answer: (
      <p>
        Complementa. O CFO familiar cuida do dia a dia — pagamentos, fluxo de caixa, acompanhamento
        de gestores. MAGNO desenha a arquitetura acima e, nos primeiros 12 meses, treina o CFO para
        operar dentro da estrutura. Depois, ele é autônomo e MAGNO fica como conselho estrutural.
      </p>
    ),
  },
]
