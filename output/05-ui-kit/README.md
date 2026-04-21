# UI Kit — MAGNO

> Componentes React + Tailwind construídos sobre os tokens da Fase 3.
> Código de produção em `site/components/ui/`.
> Este documento é o **showcase** — documenta cada componente, props tipadas, e variantes.

---

## Princípios do kit

1. **Radius 0 como padrão.** Cantos retos em tudo — botão, input, card, modal. A sobriedade
   vem disso. `radius-sm` (2px) só em ícones interativos micro.
2. **Stroke fino.** Borders 1 px padrão, 1.5 px em estados fortes. Ícones 1.25 pt.
3. **Cores travadas.** Apenas antracite, pergaminho, bordô, neutros quentes. Zero gradiente.
4. **Tipografia semântica.** Fraunces em display, Inter em UI, Plex Mono em números.
   Componentes não misturam — cada um usa sua família.
5. **Sem animação decorativa.** Apenas transições de cor (150 ms ease-out) em estados.
   Zero micro-interação "delightful".
6. **Acessibilidade não é opcional.** `aria-*` obrigatório, `role` explícito em Alert/Modal,
   focus visible com `ring-1 ring-ink ring-offset-2 ring-offset-paper`.

---

## Componentes (inventário)

| Componente | Arquivo | Variantes |
|---|---|---|
| Logo | `Logo.tsx` | `full` · `wordmark` · `monogram` · `monogram-simple` |
| Button | `Button.tsx` | `primary` · `secondary` · `ghost` · `destructive` × `sm` / `md` / `lg` |
| Input | `Input.tsx` | padrão · com label · com hint · com error · mono (números) |
| Textarea | `Input.tsx` | padrão · com label · com hint · com error |
| Card | `Card.tsx` | `default` · `bordered` · `elevated` · `accent` · `inverted` |
| Accordion | `Accordion.tsx` | single open · allow multiple |
| Modal | `Modal.tsx` | `sm` · `md` · `lg` |
| Badge | `Badge.tsx` | `neutral` · `accent` · `inverted` · `success` · `warning` · `info` × `sm` / `md` |
| Alert | `Alert.tsx` | `neutral` · `info` · `success` · `warning` · `danger` |
| Navbar | `Navbar.tsx` | desktop · mobile (colapsado) |
| Footer | `Footer.tsx` | institucional 4-col |
| Typography | `Typography.tsx` | `Display` · `Heading` · `Lead` · `Body` · `Eyebrow` · `Caption` · `Numeric` · `PullQuote` |

---

## 1. Logo

```tsx
import { Logo } from '@/components/ui'

// Lockup horizontal completo (monograma + wordmark)
<Logo variant="full" className="h-10" />

// Apenas wordmark
<Logo variant="wordmark" className="h-8" />

// Monograma com círculo (selo)
<Logo variant="monogram" className="h-12 w-12" />

// Monograma sem círculo (16px / favicon)
<Logo variant="monogram-simple" className="h-4 w-4" />

// Em reversa (sobre antracite)
<div className="bg-ink p-6">
  <Logo variant="full" className="h-10 text-paper" />
</div>

// Em acento bordô
<Logo variant="full" className="h-10 text-accent" />
```

**Props:** `variant` (`'full' | 'wordmark' | 'monogram' | 'monogram-simple'`) · `className` · `title`

---

## 2. Button

```tsx
import { Button } from '@/components/ui'
import { ArrowRight } from 'lucide-react'

// Primary (CTA principal)
<Button>Agendar primeira conversa</Button>
<Button icon={<ArrowRight size={16} strokeWidth={1.25} />}>Agendar</Button>

// Secondary (ação secundária — borda, fundo transparente)
<Button variant="secondary">Saber mais</Button>

// Ghost (ação terciária — sem borda)
<Button variant="ghost">Cancelar</Button>

// Destructive (apenas em contexto de perda de dado; usa bordô)
<Button variant="destructive">Remover</Button>

// Tamanhos
<Button size="sm">Pequeno</Button>
<Button size="md">Médio (padrão)</Button>
<Button size="lg">Grande</Button>

// Desabilitado
<Button disabled>Indisponível</Button>
```

**Props:** `variant` (`'primary' | 'secondary' | 'ghost' | 'destructive'` — padrão `primary`)
· `size` (`'sm' | 'md' | 'lg'` — padrão `md`) · `icon` · `iconPosition` (`'left' | 'right'`)
· todas as props nativas de `<button>`.

**Estados:** hover (muda bg-color), active (mais escuro), focus-visible (ring fino em antracite),
disabled (opacity 40 %, cursor-not-allowed).

---

## 3. Input / Textarea

```tsx
import { Input, Textarea } from '@/components/ui'

<Input
  label="Nome completo"
  placeholder="Ex: Maria Silva"
  required
/>

<Input
  label="Patrimônio aproximado"
  hint="Valor líquido em reais, sem incluir imóveis residenciais"
  mono
  placeholder="R$ 0,00"
/>

<Input
  label="E-mail"
  type="email"
  error="Formato de e-mail inválido"
/>

<Input
  eyebrow="Opcional"
  label="LinkedIn"
  placeholder="linkedin.com/in/..."
/>

<Textarea
  label="Contexto"
  hint="Conte brevemente o momento atual do seu patrimônio. Máximo 500 caracteres."
  maxLength={500}
  rows={5}
/>
```

**Props Input:** `label` · `hint` · `error` · `eyebrow` · `mono` (usa IBM Plex Mono para
números) · `wrapperClassName` · todas as props nativas de `<input>`.
**Props Textarea:** idem, sem `mono`, com `rows`.

---

## 4. Card

```tsx
import { Card, CardEyebrow, CardTitle, CardBody, CardMetric } from '@/components/ui'

// Card padrão (sobre pergaminho profundo)
<Card>
  <CardEyebrow>Persona 01</CardEyebrow>
  <CardTitle>O Fundador</CardTitle>
  <CardBody>
    Empresário 1ª geração, 45–62 anos, pós-evento de liquidez entre R$ 20M e R$ 200M.
  </CardBody>
</Card>

// Card com borda (sobre pergaminho)
<Card variant="bordered" padding="lg">
  <CardTitle as="h2">Arquitetura antes de alocação</CardTitle>
  <CardBody>...</CardBody>
</Card>

// Card elevado (sombra hairline)
<Card variant="elevated">...</Card>

// Card acento (bordô)
<Card variant="accent">
  <CardEyebrow className="text-paper/70">Call-out</CardEyebrow>
  <CardTitle>Setup fee explícito</CardTitle>
  <CardBody className="text-paper/90">
    R$ 120k–R$ 300k conforme complexidade. Separado do AUM fee.
  </CardBody>
</Card>

// Card reversa (antracite)
<Card variant="inverted">
  <CardTitle>...</CardTitle>
</Card>

// Métricas em grid
<Card variant="bordered">
  <CardEyebrow>Modelo de remuneração</CardEyebrow>
  <div className="grid gap-6 md:grid-cols-3">
    <CardMetric label="Até R$ 50M" value="0,75 % a.a." />
    <CardMetric label="R$ 50M–R$ 150M" value="0,60 % a.a." />
    <CardMetric label="Acima de R$ 150M" value="0,45 % a.a." />
  </div>
</Card>
```

**Props Card:** `variant` (`'default' | 'bordered' | 'elevated' | 'accent' | 'inverted'`) ·
`padding` (`'none' | 'sm' | 'md' | 'lg'`) · `as` (`'div' | 'article' | 'section'`)

---

## 5. Accordion (FAQ)

```tsx
import { Accordion } from '@/components/ui'

const faqItems = [
  {
    id: 'banco',
    question: 'Já tenho relação de 10+ anos com o private banking do meu banco. Por que adicionar MAGNO?',
    answer: (
      <>
        <p>
          O <em>private banking</em> do banco é um bom canal de custódia e execução. A função dele, contudo,
          é distribuir os produtos que o banco precisa distribuir — não projetar a arquitetura do seu
          patrimônio.
        </p>
        <p className="mt-4">
          MAGNO não substitui o banco. Projetamos a estrutura ao redor.
        </p>
      </>
    ),
  },
  {
    id: 'prazo',
    question: 'Quanto tempo leva a primeira estruturação completa?',
    answer: <p>Entre 10 e 14 semanas, divididas em três etapas...</p>,
  },
]

<Accordion items={faqItems} />

// Permitir múltiplos abertos simultaneamente
<Accordion items={faqItems} allowMultiple />
```

**Props:** `items` (`AccordionItem[]` com `id`, `question`, `answer`) · `allowMultiple`
(padrão `false`).

**A11y:** `aria-expanded` no header, `aria-controls` apontando para o painel, `role="region"`
no painel com `aria-labelledby`.

---

## 6. Modal

```tsx
'use client'
import { useState } from 'react'
import { Modal, Button } from '@/components/ui'

function Example() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Abrir modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow="Agendamento"
        title="Primeira conversa"
        footer={
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button onClick={() => setOpen(false)}>Confirmar</Button>
          </div>
        }
      >
        <p className="font-sans text-[1rem] leading-[1.65] text-ink-65">
          Reunião de 90 minutos, sem custo e sem compromisso...
        </p>
      </Modal>
    </>
  )
}
```

**Props:** `open` (boolean) · `onClose` (callback) · `title` · `eyebrow` · `footer` ·
`size` (`'sm' | 'md' | 'lg'`).

**Comportamento:** fecha em Escape, clique fora no backdrop, ou botão X. Trava scroll do body
enquanto aberto. Focus inicial no dialog container.

---

## 7. Badge

```tsx
import { Badge } from '@/components/ui'

<Badge>Persona 01</Badge>
<Badge variant="accent">Kernel</Badge>
<Badge variant="inverted">MAGNO</Badge>
<Badge variant="success">Aprovado</Badge>
<Badge variant="warning">Em revisão</Badge>
<Badge variant="info">Informativo</Badge>

<Badge size="md" variant="accent">Fase 3 · Identidade</Badge>

// Sem uppercase
<Badge uppercase={false}>Mixed Case</Badge>
```

---

## 8. Alert

```tsx
import { Alert } from '@/components/ui'
import { Info, AlertTriangle, Check } from 'lucide-react'

<Alert variant="info" title="Nota de produção" icon={<Info size={18} strokeWidth={1.25} />}>
  As imagens são placeholders documentados. Substituir por fotos produzidas antes da publicação.
</Alert>

<Alert variant="success" title="Salvo">
  Alterações aplicadas ao kernel da marca.
</Alert>

<Alert variant="warning" title="Atenção" icon={<AlertTriangle size={18} strokeWidth={1.25} />}>
  Acento bordô reservado para destaque editorial. Evitar em massa de fundo.
</Alert>

<Alert variant="danger" title="Erro">
  Não foi possível enviar o formulário. Verifique os campos destacados.
</Alert>
```

**Regra de uso:** Alert é **linha colorida lateral** + texto. **Nunca fundo colorido inteiro**.
Feedback é escrito, não pintado.

---

## 9. Navbar

Navegação principal. Sticky top, backdrop blur suave, colapsa em mobile para menu hamburger.

```tsx
import { Navbar } from '@/components/ui'

<Navbar />

// Custom items
<Navbar items={[
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]} />
```

---

## 10. Footer

Rodapé institucional de 4 colunas. Logo + descrição curta à esquerda; três colunas de links.
Copyright e tagline no rodapé inferior com separador hairline.

```tsx
import { Footer } from '@/components/ui'

<Footer />
```

---

## 11. Typography

```tsx
import { Display, Heading, Lead, Body, Eyebrow, Caption, Numeric, PullQuote } from '@/components/ui'

// Display (Fraunces serif)
<Display as="h1" size="2xl">Arquitetura antes de alocação.</Display>
<Display as="h2" size="xl">Posicionamento</Display>
<Display as="h2" size="l">Personas e público</Display>
<Display as="h3" size="m">O Fundador</Display>
<Display as="h3" size="s">A Herdeira Operadora</Display>

// Heading (Inter ou Fraunces secundário)
<Heading as="h4">Arquétipo Ruler+Sage</Heading>
<Heading as="h5">Kernel da marca</Heading>
<Heading as="h6">Sub-item</Heading>

// Lead (parágrafo de abertura)
<Lead>
  Para o empresário que construiu patrimônio do zero e acabou de virá-lo em dinheiro —
  e que precisa de estrutura, não de prateleira.
</Lead>

// Body (corpo padrão)
<Body>
  A primeira entrega de MAGNO não é uma carteira. É o desenho da arquitetura.
</Body>

<Body size="lg">Maior, para parágrafos iniciais.</Body>
<Body size="sm">Menor, para legendas e metadata.</Body>
<Body muted>Com cor mais clara (neutral-50).</Body>

// Eyebrow (ALL CAPS label)
<Eyebrow>02 · Estratégia</Eyebrow>

// Caption (microcopy)
<Caption>Atualizado em abril de 2026.</Caption>

// Numeric (IBM Plex Mono com tabular nums)
<Numeric size="lg">R$ 82.400.000,00</Numeric>
<Numeric>0,75 % a.a.</Numeric>

// PullQuote (editorial)
<PullQuote cite="Jean-Noël Kapferer">
  A brand is not a product — it is the product's essence, its meaning, and its direction.
</PullQuote>
```

---

## Showcase

Para ver todos os componentes vivos, rodar o site local (Fase 8) e navegar para `/ui-kit`:

```bash
cd site
npm install
npm run dev
# → http://localhost:3000/ui-kit
```

---

## Convenções de código

- **Imports:** usar alias `@/` — `import { Button } from '@/components/ui'`
- **Server vs Client Components:** componentes com estado (`Accordion`, `Modal`, `Navbar`)
  têm `'use client'` no topo. Os demais são Server Components por padrão.
- **Forwards refs:** `Button` e `Input` usam `forwardRef` para integrar com libraries de
  form (react-hook-form, formik).
- **Não reinventar lógica acessível:** keyboard navigation dos componentes segue
  [WAI-ARIA 1.2](https://www.w3.org/WAI/ARIA/apg/patterns/) — Accordion, Modal, Button já
  implementam os patterns.

---

## Tokens mapeados para Tailwind

Todos os componentes usam **apenas** classes derivadas da configuração Tailwind da Fase 3
(`color-system.md`, `typography.md`, `grid-spacing.md`). Nenhuma cor, tamanho ou espaçamento
hardcoded fora dos tokens.

Se precisar adicionar um novo token, **atualizar `tailwind.config.ts` primeiro** — nunca
um valor arbitrário em componente.

---

## Checklist antes de adicionar componente novo

- [ ] Usa apenas cores tokens (ink, paper, accent, neutral-*, semantic-*)?
- [ ] Radius 0 (ou sm em micro elementos)?
- [ ] Stroke/border 1 px padrão?
- [ ] Tipografia na família correta (serif=display, sans=UI, mono=números)?
- [ ] Focus visible com `ring-1 ring-ink`?
- [ ] A11y: ARIA roles e labels apropriados?
- [ ] Responsive em `sm/md/lg/xl` sem quebrar?
- [ ] Zero animação decorativa (só `transition-colors 150ms`)?
- [ ] Sem emoji, sem gradient, sem sombra colorida?
