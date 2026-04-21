# Grid & Spacing — MAGNO

> Sistema de grid de 8 pt, tokens de spacing, breakpoints e larguras de container.
> Arquitetura editorial: margens generosas, colunas amplas, respiro como ativo (brief §6).
> Construído por Brad Frost (atomic grid) com validação de Dan Mall (hierarquia editorial).

---

## 1. Unidade base — 8 pt grid

Todas as medidas de layout em MAGNO derivam da **unidade base de 8 pixels**. Subunidades de
4 px são permitidas em elementos micro (ícone, border, pequenos ajustes ópticos).

**Por que 8 pt e não 4 pt:**
- 8 pt é o múltiplo padrão de dispositivos (iOS, Android, macOS, Windows)
- Permite divisão limpa em 2, 4, 8, 16 para hierarquia aninhada
- Evita "falsa-precisão" de 1 px que desestabiliza em retina vs non-retina

**Exceções permitidas (4 pt):**
- Borders (1 px, 2 px)
- Ícones (16, 20, 24 px — múltiplos de 4)
- Gaps dentro de botão/input (4 px entre ícone e texto)

---

## 2. Spacing tokens

Escala baseada em múltiplos de 4 (para micro) e 8 (para macro):

| Token | rem | px | Uso |
|---|---|---|---|
| `--space-0` | 0 | 0 | Reset |
| `--space-1` | 0.25 | 4 | Gap entre ícone e texto; borders |
| `--space-2` | 0.5 | 8 | Padding interno de chip, badge |
| `--space-3` | 0.75 | 12 | Gap entre itens relacionados em lista |
| `--space-4` | 1 | 16 | **Padding padrão** de card, input |
| `--space-5` | 1.5 | 24 | Gap entre card e card; padding de seção compacta |
| `--space-6` | 2 | 32 | Gap entre grupos dentro de seção |
| `--space-7` | 2.5 | 40 | — (uso limitado, só se nada acima couber) |
| `--space-8` | 3 | 48 | Margem top de h2 dentro de artigo |
| `--space-10` | 4 | 64 | Gap entre seções pequenas |
| `--space-12` | 5 | 80 | Padding vertical de seção média |
| `--space-16` | 6 | 96 | Padding vertical de seção grande / hero |
| `--space-20` | 8 | 128 | Gap entre grandes blocos de página |
| `--space-24` | 10 | 160 | Padding vertical de hero de landing |
| `--space-32` | 14 | 224 | Espaços ritualísticos (capa de livro, abertura) |

**Regra de uso:** se uma medida não está nos tokens, **não use**. Se você se encontrar
precisando de 18 px ou 36 px, reconsidere — provavelmente há um token certo acima ou abaixo.

---

## 3. Tokens CSS

```css
:root {
  --space-0:  0;
  --space-1:  0.25rem;   /*  4 px */
  --space-2:  0.5rem;    /*  8 px */
  --space-3:  0.75rem;   /* 12 px */
  --space-4:  1rem;      /* 16 px */
  --space-5:  1.5rem;    /* 24 px */
  --space-6:  2rem;      /* 32 px */
  --space-7:  2.5rem;    /* 40 px */
  --space-8:  3rem;      /* 48 px */
  --space-10: 4rem;      /* 64 px */
  --space-12: 5rem;      /* 80 px */
  --space-16: 6rem;      /* 96 px */
  --space-20: 8rem;      /* 128 px */
  --space-24: 10rem;     /* 160 px */
  --space-32: 14rem;     /* 224 px */

  /* Radius — ver §7 */
  --radius-none: 0;
  --radius-sm:   2px;
  --radius-md:   4px;
  --radius-lg:   8px;
  --radius-pill: 999px;

  /* Borders */
  --border-hair:   0.5px;
  --border-thin:   1px;
  --border-medium: 1.5px;
  --border-thick:  2px;
}
```

---

## 4. Breakpoints

MAGNO não tem "mobile-first" nem "desktop-first" — tem **content-first**. A leitura editorial
densa é o diretor.

| Nome | Min width | Target device | Comportamento |
|---|---|---|---|
| `--bp-xs` | 0 | Phone portrait (< 480 px) | Single column, compact padding |
| `--bp-sm` | 640 px | Phone landscape / small tablet | Single column, padding medium |
| `--bp-md` | 768 px | Tablet portrait | 2-col onde fizer sentido |
| `--bp-lg` | 1024 px | Tablet landscape / laptop pequeno | Layout primário 2-3 col |
| `--bp-xl` | 1280 px | Laptop / desktop | **Layout canônico** |
| `--bp-2xl` | 1536 px | Desktop amplo | Max width ativo (container não cresce mais) |

```css
:root {
  --bp-sm:  40rem;   /* 640  px */
  --bp-md:  48rem;   /* 768  px */
  --bp-lg:  64rem;   /* 1024 px */
  --bp-xl:  80rem;   /* 1280 px */
  --bp-2xl: 96rem;   /* 1536 px */
}

@media (min-width: 40rem)  { /* sm */ }
@media (min-width: 48rem)  { /* md */ }
@media (min-width: 64rem)  { /* lg */ }
@media (min-width: 80rem)  { /* xl */ }
@media (min-width: 96rem)  { /* 2xl */ }
```

---

## 5. Containers e larguras máximas

Sistema de 3 containers — cada um para uma densidade de conteúdo:

| Container | Max width | Uso |
|---|---|---|
| `.container-tight` | **640 px** | Parágrafo longo editorial (medida 65ch) — artigo, manifesto, carta |
| `.container-prose` | **768 px** | Artigo com imagem ocasional + corpo |
| `.container-wide` | **1200 px** | **Padrão institucional** — home, página de seção, proposta |
| `.container-page` | **1440 px** | Uso raro — hero pictórico, dashboard |
| `.container-edge` | sem limite | Elementos que tocam a borda (background color, linha horizontal, imagem panorâmica) |

```css
.container-tight  { max-width: 40rem; margin-inline: auto; padding-inline: var(--space-4); }
.container-prose  { max-width: 48rem; margin-inline: auto; padding-inline: var(--space-4); }
.container-wide   { max-width: 75rem; margin-inline: auto; padding-inline: var(--space-4); }
.container-page   { max-width: 90rem; margin-inline: auto; padding-inline: var(--space-6); }
```

### Padding horizontal por breakpoint

```css
.container-wide {
  padding-inline: 1rem;              /* xs: 16 px */
}
@media (min-width: 40rem) {
  .container-wide { padding-inline: 1.5rem; }   /* sm: 24 px */
}
@media (min-width: 48rem) {
  .container-wide { padding-inline: 2rem; }     /* md: 32 px */
}
@media (min-width: 64rem) {
  .container-wide { padding-inline: 3rem; }     /* lg: 48 px */
}
@media (min-width: 80rem) {
  .container-wide { padding-inline: 4rem; }     /* xl: 64 px */
}
```

---

## 6. Grid de 12 colunas (institucional)

Layout canônico usa **12 colunas** com gaps proporcionais. Alternativa: **6 colunas** para
landing simples, **3 colunas** para listagem de cards.

```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--space-5);  /* 24 px padrão */
}

@media (min-width: 64rem) {
  .grid-12 { gap: var(--space-6); }  /* 32 px em lg+ */
}

@media (min-width: 80rem) {
  .grid-12 { gap: var(--space-8); }  /* 48 px em xl+ */
}
```

### Patterns comuns

```css
/* Editorial 8+4 (texto + sidebar) */
.layout-editorial .main    { grid-column: span 8; }
.layout-editorial .sidebar { grid-column: span 4; }

/* Centro 8 de 12 (artigo centralizado) */
.layout-article .prose { grid-column: 3 / span 8; }

/* 3 cards iguais */
.cards-3 > * { grid-column: span 4; }

/* 2 cards iguais */
.cards-2 > * { grid-column: span 6; }

/* Mobile: colapsa para 1 coluna */
@media (max-width: 48rem) {
  .layout-editorial .main,
  .layout-editorial .sidebar,
  .cards-3 > *,
  .cards-2 > *,
  .layout-article .prose {
    grid-column: 1 / -1;
  }
}
```

---

## 7. Radius (corner rounding)

MAGNO é **anti-fintech-rounded**. Cantos são retos ou com arredondamento mínimo.

| Token | Valor | Uso |
|---|---|---|
| `--radius-none` | 0 | **Padrão institucional** — cards, buttons, inputs, tudo |
| `--radius-sm` | 2 px | Ícones interativos (eye, copy, edit) |
| `--radius-md` | 4 px | Raro — tag/badge pequeno (opcional) |
| `--radius-lg` | 8 px | Extremamente raro — só em modal em mobile, onde radius ajuda percepção |
| `--radius-pill` | 999px | **Proibido** na marca principal. Reservado para tag de categoria em post social, e apenas se pedido |

**Regra dominante:** **radius 0** em botão, input, card, dialog. A sobriedade vem disso —
cantos retos = editorial = institucional.

---

## 8. Shadows (elevação)

Sombras são **discretas, neutras, funcionais** — nunca decorativas, nunca coloridas.

| Token | Valor | Uso |
|---|---|---|
| `--shadow-none` | none | **Padrão** — maioria dos elementos |
| `--shadow-hairline` | `0 0 0 1px var(--border-subtle)` | Separação por borda em vez de sombra |
| `--shadow-sm` | `0 1px 2px rgba(14, 14, 16, 0.06)` | Dropdown discreto, tooltip |
| `--shadow-md` | `0 2px 8px rgba(14, 14, 16, 0.08)` | Card elevado em hover (raro) |
| `--shadow-lg` | `0 8px 32px rgba(14, 14, 16, 0.12)` | Modal overlay, só em modal |

**Regra dominante:** preferir **borda fina** (`--border-subtle`) em vez de sombra para
separar superfícies. Sombra é exceção, borda é regra.

---

## 9. Vertical rhythm (ritmo vertical em artigo)

Padrão de espaçamento vertical em texto corrido:

```css
.article h2 { margin-top: var(--space-12); margin-bottom: var(--space-5); } /* 80 + 24 */
.article h3 { margin-top: var(--space-8);  margin-bottom: var(--space-4); } /* 48 + 16 */
.article h4 { margin-top: var(--space-6);  margin-bottom: var(--space-3); } /* 32 + 12 */
.article p  { margin-bottom: var(--space-5); }                              /* 24 */
.article ul,
.article ol { margin-block: var(--space-5); padding-left: var(--space-6); }
.article li { margin-bottom: var(--space-2); }
.article blockquote { margin-block: var(--space-8); }
.article hr {
  border: none;
  border-top: 1px solid var(--border-subtle);
  margin-block: var(--space-10);   /* 64 — separador majestoso */
}
```

---

## 10. Seções de página

Padding vertical padrão para seções em landing / página institucional:

| Tipo de seção | Padding vertical | Comentário |
|---|---|---|
| Hero primário | `var(--space-24)` → `var(--space-32)` | 160–224 px — ritual de abertura |
| Seção grande | `var(--space-20)` | 128 px — separação forte |
| Seção média | `var(--space-16)` | 96 px — padrão |
| Seção compacta | `var(--space-12)` | 80 px |
| Sub-seção | `var(--space-8)` | 48 px |
| Rodapé | `var(--space-16)` vertical | 96 px — rodapé respira |

```css
.section { padding-block: var(--space-16); }
.section--large { padding-block: var(--space-20); }
.section--hero { padding-block: clamp(var(--space-16), 10vh, var(--space-32)); }
.section--compact { padding-block: var(--space-12); }
```

---

## 11. Tailwind — configuração

```ts
// tailwind.config.ts
export default {
  theme: {
    spacing: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.5rem',
      6: '2rem',
      7: '2.5rem',
      8: '3rem',
      10: '4rem',
      12: '5rem',
      16: '6rem',
      20: '8rem',
      24: '10rem',
      32: '14rem',
    },
    borderRadius: {
      none: '0',
      sm:   '2px',
      DEFAULT: '0',        // CANTOS RETOS como default
      md:   '4px',
      lg:   '8px',
      pill: '999px',
    },
    screens: {
      sm:  '640px',
      md:  '768px',
      lg:  '1024px',
      xl:  '1280px',
      '2xl': '1536px',
    },
    maxWidth: {
      tight:  '40rem',     /* 640  */
      prose:  '48rem',     /* 768  */
      wide:   '75rem',     /* 1200 */
      page:   '90rem',     /* 1440 */
    },
  },
}
```

---

## 12. Checklist de layout

Antes de aprovar qualquer peça:

- [ ] Toda medida é múltipla de 8 (ou 4 em micro)?
- [ ] Container correto usado? (`tight` para prosa, `wide` para institucional)
- [ ] Largura máxima de parágrafo ≤ 65ch?
- [ ] Gap vertical entre seções usa tokens `space-12` a `space-24`?
- [ ] Radius default = 0?
- [ ] Sombra discreta (preferir border hairline)?
- [ ] Breakpoints respeitados (sm → md → lg → xl)?
- [ ] Em mobile, layout colapsa limpo para 1 coluna?
- [ ] Padding horizontal de container escala por breakpoint?

---

## 13. Anti-padrões de layout

1. ❌ Cards com border-radius grande (≥ 12 px) — fintech
2. ❌ Centralização excessiva sem razão hierárquica
3. ❌ Grid "asimmétrico aleatório" sem princípio editorial
4. ❌ Gap entre cards < 16 px (fica sufocado)
5. ❌ Padding de seção < 64 px em desktop
6. ❌ Overlap de elementos com sombra decorativa (caixas flutuando)
7. ❌ Grid invisível que não se sustenta no mobile (desalinha tudo)
8. ❌ Background alternado de listras claras/escuras (wealthtech)
9. ❌ Container com max-width ≥ 1600 px (perde densidade editorial)
10. ❌ Parágrafos com largura > 75ch — leitura se perde ao fim da linha
