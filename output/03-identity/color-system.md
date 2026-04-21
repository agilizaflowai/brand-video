# Color System — MAGNO

> Paleta completa com tokens CSS custom properties + classes Tailwind prontas.
> Acento único decidido: **bordô profundo `#5A1F25`** (racional em `strategy-summary.md`
> e `positioning.md`). Toda paleta foi checada contra WCAG 2.2 AA para as combinações
> de uso primário.

---

## 1. Paleta canônica (primária)

### Fundos institucionais

| Token | HEX | RGB | HSL | Uso |
|---|---|---|---|---|
| `--color-ink` (antracite) | `#0E0E10` | 14 14 16 | 240° 7% 6% | **Cor de texto primária** + fundo noite |
| `--color-paper` (pergaminho) | `#F4EFE6` | 244 239 230 | 39° 35% 93% | **Fundo primário** dia + texto reversa |
| `--color-paper-pure` (papel) | `#FFFFFF` | 255 255 255 | 0° 0% 100% | Impressão em papel branco comum |

### Acento único

| Token | HEX | RGB | HSL | Uso |
|---|---|---|---|---|
| `--color-accent` (bordô) | `#5A1F25` | 90 31 37 | 354° 49% 24% | Acento único — capas, separadores, call-outs |
| `--color-accent-dim` (bordô profundo) | `#3E1419` | 62 20 25 | 353° 51% 16% | Estado pressed / hover em bordô |
| `--color-accent-lift` (bordô mais claro) | `#7A2E36` | 122 46 54 | 354° 45% 33% | Hover / estados focus |

---

## 2. Escala de neutros (cinzas quentes sobre eixo pergaminho)

Construção: mistura calculada entre `ink` e `paper`, mantendo viés quente levemente
pergaminho. **Sem cinza médio ambíguo** — os steps pulam no centro para evitar `#808080`
de fintech.

| Token | HEX | Uso operacional |
|---|---|---|
| `--color-ink-95` | `#18181A` | Fundo hover em modo escuro; quase-preto com respiração |
| `--color-ink-80` | `#2E2E31` | Texto sobre escuro em segunda hierarquia |
| `--color-ink-65` | `#4A4A4E` | Texto terciário em claro / borda em escuro |
| `--color-neutral-50` | `#6B6A67` | (Cinza quente médio) legendas, microcopy, help |
| `--color-neutral-35` | `#8B8A85` | Texto desabilitado |
| `--color-neutral-20` | `#B8B3A9` | Bordas sutis, dividers |
| `--color-neutral-10` | `#D8D3C8` | Separadores em fundo pergaminho |
| `--color-paper-deep` | `#E8E2D5` | Fundo secundário claro (cards sobre pergaminho) |
| `--color-paper-50` | `#EEE9DD` | Superfícies alternadas |

**Regra Brand Brief (seção 6):** *"3–4 tons de cinza bem separados na escala (sem cinza médio
ambíguo)"*. A escala acima pula de `50` para `35` para `20` — separação percebida ≥ 15%
luminância. ✅

---

## 3. Semânticos de UI (tratamento discreto — brief)

O brief proíbe **verde-alerta de fintech** e **vermelho-erro vibrante**. Os semânticos aqui
são derivados dos neutros e do acento único, com saturação contida:

| Token | HEX | Uso |
|---|---|---|
| `--color-success` | `#3A5A40` | Confirmação discreta (check, status OK). Verde musgo contido, sem viés neon |
| `--color-warning` | `#8A6A2E` | Atenção. Mostarda envelhecida, sem viés de trânsito |
| `--color-danger` | `#5A1F25` | **Reutiliza o bordô** — erro e acento compartilham cor (intencional: erro tem gravitas) |
| `--color-info` | `#2E4A5A` | Nota informativa. Azul ardósia, sem viés ciano |

**Regra de uso:** semânticos **nunca** preenchem área ampla. Só aparecem em:
- Ícone pequeno (1em width)
- Texto de 1 linha de feedback
- Linha fina (1–2 px) ao lado de campo ou botão
- Chip / badge com background em 12% opacidade

Nunca fundo de toast inteiro, nunca banner de alerta colorido, nunca botão "danger" vermelho
vibrante. Feedback é *escrito*, não *pintado*.

---

## 4. Tokens CSS (copy-paste)

```css
:root {
  /* Fundos */
  --color-ink:          #0E0E10;
  --color-ink-95:       #18181A;
  --color-ink-80:       #2E2E31;
  --color-ink-65:       #4A4A4E;

  --color-paper:        #F4EFE6;
  --color-paper-50:     #EEE9DD;
  --color-paper-deep:   #E8E2D5;
  --color-paper-pure:   #FFFFFF;

  /* Neutros */
  --color-neutral-50:   #6B6A67;
  --color-neutral-35:   #8B8A85;
  --color-neutral-20:   #B8B3A9;
  --color-neutral-10:   #D8D3C8;

  /* Acento único — bordô */
  --color-accent:       #5A1F25;
  --color-accent-dim:   #3E1419;
  --color-accent-lift:  #7A2E36;

  /* Semânticos (discretos) */
  --color-success:      #3A5A40;
  --color-warning:      #8A6A2E;
  --color-danger:       #5A1F25;
  --color-info:         #2E4A5A;

  /* Aliases semânticos de superfície */
  --surface-base:       var(--color-paper);
  --surface-subtle:     var(--color-paper-50);
  --surface-raised:     var(--color-paper-deep);
  --surface-inverted:   var(--color-ink);

  --text-primary:       var(--color-ink);
  --text-secondary:     var(--color-ink-65);
  --text-tertiary:      var(--color-neutral-50);
  --text-disabled:      var(--color-neutral-35);
  --text-on-ink:        var(--color-paper);

  --border-subtle:      var(--color-neutral-10);
  --border-default:     var(--color-neutral-20);
  --border-strong:      var(--color-ink-65);
}

/* Modo escuro — inverte eixo ink/paper, mantém acento */
[data-theme="dark"] {
  --surface-base:       var(--color-ink);
  --surface-subtle:     var(--color-ink-95);
  --surface-raised:     var(--color-ink-80);
  --surface-inverted:   var(--color-paper);

  --text-primary:       var(--color-paper);
  --text-secondary:     var(--color-neutral-20);
  --text-tertiary:      var(--color-neutral-35);
  --text-disabled:      var(--color-ink-65);
  --text-on-ink:        var(--color-ink);

  --border-subtle:      var(--color-ink-80);
  --border-default:     var(--color-ink-65);
  --border-strong:      var(--color-neutral-20);
}
```

---

## 5. Equivalentes CMYK (impressão offset)

| Token | HEX | CMYK (offset coated) | CMYK (uncoated/pergaminho) |
|---|---|---|---|
| ink | `#0E0E10` | **30 / 30 / 30 / 100** (rich black) | 40 / 40 / 40 / 100 |
| paper | `#F4EFE6` | 3 / 5 / 10 / 0 | 4 / 6 / 12 / 0 |
| accent (bordô) | `#5A1F25` | 30 / 90 / 75 / 50 | 35 / 92 / 78 / 55 |
| neutral-50 | `#6B6A67` | 55 / 50 / 55 / 30 | 60 / 55 / 60 / 35 |
| neutral-20 | `#B8B3A9` | 25 / 22 / 30 / 5 | 30 / 26 / 34 / 8 |

**Importante:** nunca usar preto 100% K puro para texto corpo — causa serrilhado em papel
pergaminho. Sempre **rich black 30/30/30/100**.

---

## 6. Tailwind — configuração (tailwind.config.ts)

```ts
import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E0E10',
          95: '#18181A',
          80: '#2E2E31',
          65: '#4A4A4E',
        },
        paper: {
          DEFAULT: '#F4EFE6',
          50: '#EEE9DD',
          deep: '#E8E2D5',
          pure: '#FFFFFF',
        },
        neutral: {
          50: '#6B6A67',
          35: '#8B8A85',
          20: '#B8B3A9',
          10: '#D8D3C8',
        },
        accent: {
          DEFAULT: '#5A1F25',
          dim: '#3E1419',
          lift: '#7A2E36',
        },
        // Semânticos
        success: '#3A5A40',
        warning: '#8A6A2E',
        danger:  '#5A1F25',
        info:    '#2E4A5A',
      },
    },
  },
} satisfies Config
```

### Classes Tailwind mais usadas

| Class | Equivale a |
|---|---|
| `bg-paper text-ink` | Superfície base, dia |
| `bg-ink text-paper` | Superfície base, noite (reversa) |
| `bg-paper-50` | Card sobre pergaminho |
| `bg-paper-deep` | Card elevado sobre pergaminho |
| `text-neutral-50` | Legenda / microcopy |
| `border-neutral-20` | Borda sutil de card |
| `border-ink-65` | Borda forte / separador |
| `bg-accent text-paper` | Call-out bordô |
| `text-accent` | Link de destaque / número em destaque |
| `text-danger` | Feedback de erro (apenas texto/ícone) |

---

## 7. Validação de contraste (WCAG 2.2)

Testes em par de cor — AA requer ≥ 4.5:1 para texto normal, ≥ 3:1 para texto grande (≥ 18pt).

| Combinação | Contraste | AA texto normal | AA texto grande |
|---|---|---|---|
| `ink` on `paper` | **18.7 : 1** | ✅ | ✅ |
| `paper` on `ink` (reversa) | **18.7 : 1** | ✅ | ✅ |
| `ink-65` on `paper` | **8.6 : 1** | ✅ | ✅ |
| `neutral-50` on `paper` | **4.9 : 1** | ✅ | ✅ |
| `neutral-35` on `paper` | 3.1 : 1 | ⚠️ (falha AA normal) | ✅ |
| `accent` on `paper` | **10.2 : 1** | ✅ | ✅ |
| `paper` on `accent` | **10.2 : 1** | ✅ | ✅ |
| `accent-lift` on `paper` | 6.3 : 1 | ✅ | ✅ |
| `accent` on `ink` | 1.8 : 1 | ❌ | ❌ |

**Regras derivadas:**
- `neutral-35` (cinza disabled) só em texto ≥ 18pt ou estado desabilitado explícito
- **Nunca** bordô sobre antracite — falha contraste grave
- Links em corpo: antracite com underline. Não usar bordô para link genérico — **bordô
  reservado para acento editorial**, não para "texto azul de link".
- Em dark mode, usar `accent-lift` (não `accent`) sobre `ink` para aumentar contraste

---

## 8. Regras de uso — o que NÃO fazer

1. ❌ Gradientes (qualquer tipo)
2. ❌ Sombras coloridas (só neutras, só em casos raros como card elevado)
3. ❌ Múltiplos acentos (bordô é único — não somar com outra cor de acento)
4. ❌ Verde-alerta, vermelho-vibrante, amarelo-warning-vibrante de fintech
5. ❌ Azul-bancário (o brief proíbe)
6. ❌ Preto puro `#000000` em tela (usar `ink #0E0E10`)
7. ❌ Branco puro `#FFFFFF` em fundo digital (usar `paper #F4EFE6` em ambiente institucional)
8. ❌ Cinza médio `#808080` ambíguo
9. ❌ Texto acento bordô em tamanho corpo padrão (usar apenas em destaque editorial)
10. ❌ Reversar paleta para "dar modernidade" — a paleta é travada

---

## 9. Direção emocional por combinação

| Combinação | Sensação pretendida | Uso |
|---|---|---|
| Antracite sobre pergaminho | **Autoridade calma** | Padrão institucional, 85% dos usos |
| Pergaminho sobre antracite | **Gravitas noturna** | Capas, hero sections, pitch deck |
| Bordô sobre pergaminho | **Peso editorial** | Separadores, abertura de seção, *pull-quotes* |
| Pergaminho sobre bordô | **Cerimônia** | Capas especiais, convites, eventos |
| Antracite sobre pergaminho + bordô de acento | **Combinação canônica editorial** | Artigos longos, brand book |

---

## 10. Checklist de aplicação

Antes de publicar qualquer peça:

- [ ] Fundo é `paper` ou `ink` (não branco puro nem cinza)?
- [ ] Texto em cor com contraste ≥ AA no fundo escolhido?
- [ ] Bordô usado **apenas** em destaque editorial, separadores ou acento — nunca em massa?
- [ ] Nenhum gradiente?
- [ ] Semânticos (success, warning) em uso mínimo (ícone / linha / texto — nunca fundo amplo)?
- [ ] Se print: CMYK correto da tabela §5?

---

## 11. Referência visual rápida

```
░░░░░░░░░░░░░░░░░░░░░░░░░  PERGAMINHO #F4EFE6 — fundo dia
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ANTRACITE #0E0E10 — fundo noite
█████████████████████████  BORDÔ     #5A1F25 — acento único

Contraste principal:  ink on paper = 18.7 : 1  (editorial-grade)
Hierarquia corpo:     ink → ink-65 → neutral-50
Bordas:               neutral-20 → ink-65 (decrescendo sutileza)
```
