# Typography — MAGNO

> Sistema tipográfico: **Fraunces** (display serif, eixo óptico ajustado) + **Inter** (corpo
> sans-serif de alta legibilidade) + **IBM Plex Mono** (dados, tabelas, numerário).
> Todas disponíveis gratuitamente via Google Fonts. Pareamento aprovado por
> Dan Mall (pairing) e Brad Frost (escala modular para tokens).

---

## 1. As três famílias

### 1.1. Display — **Fraunces**

- **Fonte:** Fraunces (Google Fonts · variável · [fonts.google.com/specimen/Fraunces](https://fonts.google.com/specimen/Fraunces))
- **Classificação:** Serifa contemporânea, eixos variáveis (weight 100–900, optical size
  9–144, softness 0–100)
- **Por que:** *High-contrast serif* com personalidade. Alta autoridade em tamanhos grandes,
  sem escorregar para "tipografia de livro didático". Design por Undercase Type (Phaedra
  Charles + David Jonathan Ross), 2020 — fonte jovem para um cliente que precisa parecer
  centenário sem sê-lo.
- **Parentesco com o brief:** irmã espiritual de GT Sectra, Tiempos Headline, Canela (todas
  pagas). Fraunces entrega 90% do mesmo efeito editorial, grátis e com eixo variável.

**Configuração travada para MAGNO:**

| Variável Fraunces | Valor MAGNO | Motivo |
|---|---|---|
| `wght` (weight) | **500** (medium) em display; 400–600 em corpo serifado | Peso médio carrega contraste óptico sem agressividade |
| `opsz` (optical size) | **48–96** em hero; **18–24** em corpo serifado | Ajuste óptico é o que distingue — não usar o default |
| `SOFT` (softness) | **0** (hard, cortes retos) | Ruler arquetípico pede cortes precisos, não terminais arredondados |
| `slnt` | 0 (nunca itálico mecânico; itálico só quando desenhado) | — |

**Fallbacks em CSS:**
```css
font-family:
  'Fraunces',
  'GT Sectra',
  'Tiempos Headline',
  'Bodoni Moda',
  Georgia,
  'Times New Roman',
  serif;
```

### 1.2. Corpo — **Inter**

- **Fonte:** Inter (Google Fonts · variável · [fonts.google.com/specimen/Inter](https://fonts.google.com/specimen/Inter))
- **Classificação:** Sans-serif neutra humanista de tela, alta legibilidade em todos
  tamanhos
- **Por que:** padrão-ouro para UI contemporânea sóbria. Cobre cirílico, latino-estendido,
  grego — sustenta expansão internacional. Design por Rasmus Andersson, 2016. Inter é
  *invisível* na melhor acepção: não chama atenção, carrega texto.
- **Alternativas consideradas:** Manrope (mais quente, mais "friendly" — risco para MAGNO),
  Archivo (mais industrial — muito duro). Inter vence por neutralidade.

**Configuração:**

| Uso | Weight | Tracking |
|---|---|---|
| Corpo padrão (body) | 400 | 0 |
| Corpo em destaque | 500 | 0 |
| Headline sans (secundária) | 600 | -0.01em |
| Caption / microcopy | 400 | +0.01em |
| ALL CAPS (eyebrow / label) | 500 | +0.12em |

**Fallbacks:**
```css
font-family:
  'Inter',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
```

### 1.3. Monoespaçada — **IBM Plex Mono**

- **Fonte:** IBM Plex Mono (Google Fonts · [fonts.google.com/specimen/IBM+Plex+Mono](https://fonts.google.com/specimen/IBM+Plex+Mono))
- **Classificação:** Monoespaçada com personalidade contida; variante da família Plex de IBM
- **Por que:** usado exclusivamente para **números patrimoniais, tabelas financeiras, fichas
  técnicas de fundos, basis points, códigos de instrumento**. Transmite **deferência aos
  números** (brief §6). Alinhamento decimal limpo. Design por Mike Abbink + Bold Monday, 2017.
- **Alternativa considerada:** JetBrains Mono (boa também, mais técnica/code-oriented).
  IBM Plex Mono tem melhor peso institucional.

**Configuração:**

| Uso | Weight | Tracking |
|---|---|---|
| Números em tabela | 400 | 0 |
| Valores em destaque (proposta, relatório) | 500 | -0.01em |
| Números inline em corpo (R$ 120M) | 500 | 0 |
| Código / ticker | 400 | 0 |

**Fallbacks:**
```css
font-family:
  'IBM Plex Mono',
  'JetBrains Mono',
  Menlo,
  Monaco,
  Consolas,
  'Courier New',
  monospace;
```

---

## 2. Escala tipográfica

Baseada em **razão 1.250 (major third)** para display, truncada em passos seguros. Unidade
base: **16 px = 1 rem**.

| Token | rem | px | Fonte | Weight | Line-height | Tracking | Uso |
|---|---|---|---|---|---|---|---|
| `--text-display-2xl` | 5.625 | 90 | Fraunces | 500 | 0.95 | -0.02em | Hero único de landing |
| `--text-display-xl` | 4.5 | 72 | Fraunces | 500 | 1.00 | -0.015em | H1 de página |
| `--text-display-l` | 3.5 | 56 | Fraunces | 500 | 1.05 | -0.01em | Abertura de seção |
| `--text-display-m` | 2.75 | 44 | Fraunces | 500 | 1.10 | -0.005em | H2 |
| `--text-display-s` | 2.125 | 34 | Fraunces | 500 | 1.15 | 0 | H3 |
| `--text-h4` | 1.625 | 26 | Fraunces | 500 | 1.25 | 0 | H4 editorial |
| `--text-h5` | 1.25 | 20 | Inter | 600 | 1.35 | -0.005em | H5 (transição para sans) |
| `--text-h6` | 1.0625 | 17 | Inter | 600 | 1.45 | 0 | H6 |
| `--text-lead` | 1.25 | 20 | Inter | 400 | 1.55 | 0 | Parágrafo de abertura (lead) |
| `--text-body` | 1.0 | 16 | Inter | 400 | 1.60 | 0 | **Corpo padrão** |
| `--text-body-sm` | 0.875 | 14 | Inter | 400 | 1.55 | 0 | Legenda / body secundário |
| `--text-caption` | 0.8125 | 13 | Inter | 400 | 1.45 | +0.005em | Microcopy, nota de rodapé |
| `--text-eyebrow` | 0.75 | 12 | Inter | 500 | 1.30 | +0.12em | Label ALL CAPS (eyebrow) |
| `--text-overline` | 0.6875 | 11 | Inter | 500 | 1.20 | +0.2em | Tag / categoria em caps |
| `--text-mono-lg` | 1.125 | 18 | IBM Plex Mono | 500 | 1.40 | 0 | Número destaque (R$ 120M) |
| `--text-mono` | 0.9375 | 15 | IBM Plex Mono | 400 | 1.55 | 0 | Tabela de dados |
| `--text-mono-sm` | 0.8125 | 13 | IBM Plex Mono | 400 | 1.50 | 0 | Nota técnica, ticker |

---

## 3. Tokens CSS (copy-paste)

```css
:root {
  /* Famílias */
  --font-serif: 'Fraunces', 'GT Sectra', 'Tiempos Headline', 'Bodoni Moda', Georgia, serif;
  --font-sans:  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono:  'IBM Plex Mono', 'JetBrains Mono', Menlo, Consolas, monospace;

  /* Escala display (serif) */
  --text-display-2xl: 5.625rem;
  --text-display-xl:  4.5rem;
  --text-display-l:   3.5rem;
  --text-display-m:   2.75rem;
  --text-display-s:   2.125rem;

  /* Escala headings */
  --text-h4:     1.625rem;
  --text-h5:     1.25rem;
  --text-h6:     1.0625rem;

  /* Escala corpo */
  --text-lead:    1.25rem;
  --text-body:    1rem;
  --text-body-sm: 0.875rem;
  --text-caption: 0.8125rem;
  --text-eyebrow: 0.75rem;
  --text-overline: 0.6875rem;

  /* Escala mono */
  --text-mono-lg: 1.125rem;
  --text-mono:    0.9375rem;
  --text-mono-sm: 0.8125rem;

  /* Line heights */
  --lh-tight:   0.95;
  --lh-snug:    1.10;
  --lh-normal:  1.45;
  --lh-relaxed: 1.60;
  --lh-loose:   1.70;

  /* Tracking */
  --tracking-tighter: -0.02em;
  --tracking-tight:   -0.01em;
  --tracking-normal:  0em;
  --tracking-wide:    +0.05em;
  --tracking-wider:   +0.12em;
  --tracking-widest:  +0.2em;
}
```

---

## 4. Responsive scale (fluid typography)

Usar `clamp()` para escalonamento fluido entre mobile (375 px) e desktop (1440 px):

```css
/* Exemplo: display XL fluido */
.display-xl {
  font-size: clamp(2.5rem, 5vw + 1rem, 4.5rem);
  /* 40 px em 375 px → 72 px em 1440 px+ */
}

.display-l {
  font-size: clamp(2rem, 4vw + 0.75rem, 3.5rem);
}

.display-m {
  font-size: clamp(1.625rem, 3vw + 0.5rem, 2.75rem);
}

.h1-body {
  font-size: clamp(1.125rem, 1vw + 0.875rem, 1.375rem);
}
```

**Regra geral:** tamanhos display (Fraunces) usam fluid scale. Tamanhos de corpo (Inter)
e mono (Plex Mono) mantêm-se **fixos em rem** — legibilidade absoluta ganha de harmonia
visual.

---

## 5. Pares de uso (type pairings)

### Par 1 — Editorial (padrão MAGNO)

**Display:** Fraunces 500, `opsz=72`, line-height 1.05
**Corpo:** Inter 400, 1 rem, line-height 1.60
**Números inline:** IBM Plex Mono 500 (só quando aparece valor patrimonial)

Exemplo:
```
[FRAUNCES 56px]
Arquitetura antes de alocação.

[INTER 16px]
A primeira entrega de MAGNO não é uma carteira. É o desenho da holding,
da sucessão, da governança. A alocação é consequência da estrutura —
não o ponto de partida.

Taxa de gestão: [PLEX MONO 18] 0,75 % a.a. [FIM PLEX MONO]
```

### Par 2 — Eyebrow + Headline (abertura de seção)

**Eyebrow:** Inter 500, 0.75 rem, tracking +0.12em, ALL CAPS, `color: neutral-50`
**Headline:** Fraunces 500, 2.75–3.5 rem, line-height 1.05

Exemplo:
```
[INTER CAPS] 02 · ESTRATÉGIA
[FRAUNCES] Posicionamento e diferenciação
```

### Par 3 — Dado patrimonial (proposta, relatório)

**Label:** Inter 500, 0.75 rem, CAPS, tracking +0.12em, `color: neutral-50`
**Valor:** IBM Plex Mono 500, 1.125 rem, tracking 0

Exemplo:
```
[LABEL CAPS]         PATRIMÔNIO SOB GESTÃO
[PLEX MONO 18]       R$ 82.400.000,00
```

### Par 4 — Pull-quote editorial

**Quote:** Fraunces 500, 2–2.5 rem, italic true (desenhado), line-height 1.2
**Atribuição:** Inter 500, 0.875 rem, tracking 0

---

## 6. Hierarquia em texto longo (artigo editorial)

Estrutura mínima:

```css
.article h1 { /* raramente em artigo — usar abertura de seção h2 */ }
.article h2 { font: 500 2.75rem/1.10 var(--font-serif); margin-top: 3rem; }
.article h3 { font: 500 1.625rem/1.25 var(--font-serif); margin-top: 2rem; }
.article h4 { font: 600 1.125rem/1.35 var(--font-sans); margin-top: 1.5rem;
              letter-spacing: -0.005em; }

.article p {
  font: 400 1.0625rem/1.65 var(--font-sans);
  max-width: 65ch;  /* medida editorial */
  margin-bottom: 1.25em;
}

.article p.lead {
  font: 400 1.25rem/1.55 var(--font-sans);
  color: var(--text-secondary);
}

.article blockquote {
  font: 500 1.5rem/1.35 var(--font-serif);
  font-style: italic;
  border-left: 2px solid var(--color-accent);
  padding-left: 1.5rem;
  margin: 2rem 0;
  max-width: 55ch;
}

.article code,
.article .numeric {
  font-family: var(--font-mono);
  font-feature-settings: 'tnum' 1;  /* tabular numerals */
}
```

---

## 7. Font features (OpenType)

Features habilitadas por contexto:

```css
/* Corpo Inter — padrão */
body {
  font-family: var(--font-sans);
  font-feature-settings:
    'ss01' 1,  /* alternate letters set 1 */
    'cv11' 1;  /* single-storey a (optional) */
}

/* Fraunces display */
.display {
  font-family: var(--font-serif);
  font-variation-settings:
    'opsz' 72,
    'SOFT' 0,
    'wght' 500;
  font-feature-settings:
    'lnum' 1,     /* lining numerals */
    'liga' 1,     /* ligatures */
    'dlig' 1;     /* discretionary ligatures quando disponíveis */
}

/* Números em tabela e dados */
.numeric,
table {
  font-family: var(--font-mono);
  font-feature-settings:
    'tnum' 1,     /* tabular numerals — alinhamento coluna */
    'zero' 1;     /* slashed zero */
  font-variant-numeric: tabular-nums;
}
```

**Regra:** em tabelas de patrimônio, `tnum` é **obrigatório**. Sem `tnum`, proporcional
numerals quebram alinhamento decimal.

---

## 8. Medidas editoriais

| Elemento | Largura máxima | Comentário |
|---|---|---|
| Parágrafo de corpo (artigo) | **65 ch** | ≈ 600 px em 1 rem. Padrão editorial clássico |
| Parágrafo em hero/landing | **55 ch** | Mais curto — impacto visual |
| Pull-quote | **50 ch** | Dentro do parágrafo maior |
| Headline de hero | **18 palavras** | Máximo absoluto |
| Caption / legenda | **40 ch** | Abaixo de imagem |
| Nota de rodapé | **full width do container** | Densa é esperada |

---

## 9. O que NÃO fazer (anti-padrões tipográficos)

1. ❌ Fraunces em peso ≥ 700 em tamanhos ≥ 40 px — vira "tipografia de cassino"
2. ❌ Fraunces em peso ≤ 300 em qualquer tamanho — fica anêmica, perde o contraste característico
3. ❌ Inter italic em material institucional — italic em Inter é pobre; usar Fraunces italic
4. ❌ Inter em tamanhos ≥ 40 px — Inter é invisível, não é protagonista; use Fraunces
5. ❌ Mono para texto corrido longo — Plex Mono é para número, não para parágrafo
6. ❌ Mais de 3 tamanhos diferentes em uma mesma peça sem razão hierárquica clara
7. ❌ Tracking negativo forte (< -0.03em) em tamanhos de corpo
8. ❌ Line-height < 1.4 em corpo — compromete legibilidade
9. ❌ Line-height > 1.2 em display — perde densidade editorial
10. ❌ Justificar texto sem hyphenation — deixar ragged-right em ≥ 90% dos casos
11. ❌ Underline decorativo — underline é reservado para link ativo
12. ❌ ALL CAPS para texto > 3 palavras — cansa; usar só em eyebrow curta

---

## 10. Carregamento (web performance)

### Google Fonts — implementação recomendada

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style"
      href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
```

### Alternativa — self-hosted com `@font-face`

Para produção, preferir **self-hosted** (sem tracking Google, CSP mais limpa):

```css
@font-face {
  font-family: 'Fraunces';
  src: url('/fonts/Fraunces[SOFT,WONK,opsz,wght].woff2') format('woff2-variations');
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
}
/* ... idem Inter, Plex Mono ... */
```

### font-display

Sempre `swap` — previne FOIT (flash of invisible text) que o brief rejeita implicitamente
(sistema não deve "travar" em nada).

---

## 11. Tailwind — configuração

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'GT Sectra', 'Tiempos Headline', 'Bodoni Moda', 'Georgia', 'serif'],
        sans:  ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono:  ['"IBM Plex Mono"', '"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['5.625rem', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-xl':  ['4.5rem',   { lineHeight: '1.00', letterSpacing: '-0.015em' }],
        'display-l':   ['3.5rem',   { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-m':   ['2.75rem',  { lineHeight: '1.10', letterSpacing: '-0.005em' }],
        'display-s':   ['2.125rem', { lineHeight: '1.15', letterSpacing: '0' }],
        'eyebrow':     ['0.75rem',  { lineHeight: '1.30', letterSpacing: '0.12em' }],
        'overline':    ['0.6875rem',{ lineHeight: '1.20', letterSpacing: '0.2em' }],
      },
    },
  },
}
```

---

## 12. Checklist tipográfico

Antes de aprovar qualquer peça:

- [ ] Display em Fraunces 500, opsz ajustado ao tamanho?
- [ ] Corpo em Inter 400, line-height ≥ 1.50?
- [ ] Números patrimoniais em IBM Plex Mono 500 com `tnum` ativado?
- [ ] Tracking correto por tamanho (display negativo, eyebrow positivo)?
- [ ] Medida do parágrafo de corpo ≤ 65 ch?
- [ ] Hierarquia clara (máximo 3 níveis display em uma peça)?
- [ ] Sem italic mecânico — apenas italic desenhado do Fraunces?
- [ ] Zero uso de Inter em tamanhos display (> 40 px)?
- [ ] Sem ALL CAPS em texto > 3 palavras?
- [ ] Nenhum negrito decorativo — apenas hierarquia semântica?
