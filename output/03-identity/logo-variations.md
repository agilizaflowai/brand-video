# Logo — Variações e Regras de Uso

> Regras operacionais do sistema de logo MAGNO. Referência visual em `logo.svg`.
> Tipografia do wordmark: Fraunces (ver `typography.md`). Cores: antracite + pergaminho
> + bordô de acento (ver `color-system.md`).

---

## 1. Inventário de variações

| # | Variação | Arquivo/ID | Uso primário |
|---|---|---|---|
| 01 | **Lockup horizontal primário** (monograma + wordmark) | `logo.svg#monograma + #wordmark` | Hero de site, cabeçalho de proposta, letterhead |
| 02 | **Wordmark isolado** | `logo.svg#wordmark` | Assinatura em material textual denso |
| 03 | **Monograma isolado** (em círculo) | `logo.svg#monograma` | Favicon, avatar social, selo de rodapé, marca d'água |
| 04 | **Lockup vertical** (monograma acima do wordmark) | composição | Cartão retrato, placa, rodapé vertical |
| 05 | **Aplicação em bordô** | `color="#5A1F25"` | Capas, separadores, call-outs |
| 06 | **Reversa** (pergaminho sobre antracite) | `color="#F4EFE6"` | Modo escuro, sobre foto com overlay |
| 07 | **Favicon 16 px** (M sem círculo) | path simplificado | Aba de navegador, favicon |
| 08 | **Assinatura extensa** (MAGNO GESTÃO PATRIMONIAL) | wordmark + modificador | Letterhead legal, rodapé de contrato, razão social visual |

---

## 2. Área de respiro (clear space)

A unidade de respiro é **`x`** — altura do M do wordmark.

**Regra:** em nenhuma circunstância outro elemento visual (texto, imagem, linha, borda)
invade a margem `x` ao redor do lockup.

```
         ┌── x ──┐
     ┌─────────────┐
     │   ┌──┬───┐  │
  x  │   │M │MAGNO│ │ x
     │   └──┴───┘  │
     └─────────────┘
         └── x ──┘
```

Em lockup horizontal:
- Distância entre monograma e wordmark: **0,5 x** (separador vertical fino opcional)
- Margem externa ao redor: **x** mínimo

Em material impresso A4 (210×297 mm) com wordmark em 32 mm de altura:
- `x` ≈ 9 mm → margens mínimas de 9 mm ao redor do lockup

---

## 3. Tamanhos mínimos

| Variação | Tamanho mínimo (digital px) | Tamanho mínimo (impresso mm) |
|---|---|---|
| Lockup horizontal | 180 px (largura) | 40 mm |
| Lockup vertical | 120 px (largura) | 28 mm |
| Wordmark isolado | 120 px (largura) | 28 mm |
| Monograma em círculo | 32 px | 8 mm |
| **Monograma simplificado (M sem círculo)** | 16 px | 4 mm |

Abaixo do tamanho mínimo do monograma em círculo (32 px), substituir por **M simplificado sem
círculo** — o stroke fino do círculo sofre aliasing e vira borrão cinza.

---

## 4. Regras de proporção

- **Tracking do wordmark:** +120 (thousandths of em) em Fraunces 500. Valor travado.
  Nunca aumentar para "dar peso" — a serifa já carrega peso suficiente. Nunca reduzir.
- **Relação monograma × wordmark no lockup horizontal:**
  altura do monograma = 1.85 × altura da caixa do wordmark (maior que o M do wordmark,
  menor que a altura total com ascendente/descendente).
- **Relação vertical:**
  espaço entre monograma e wordmark no lockup vertical = 0.5 × altura do monograma.

---

## 5. Cores permitidas

### Combinações canônicas (única escolha por contexto)

| Fundo | Cor do logo | Uso |
|---|---|---|
| Pergaminho `#F4EFE6` | Antracite `#0E0E10` | **Canônica dia** — 90% dos usos |
| Antracite `#0E0E10` | Pergaminho `#F4EFE6` | **Canônica noite** — modo escuro, capas, hero |
| Pergaminho | Bordô `#5A1F25` | Acento em capas, separadores |
| Bordô `#5A1F25` | Pergaminho | Raro — apenas em capas especiais |
| Branco puro `#FFFFFF` | Antracite | Impressão em papel branco comum (sem pergaminho) |

### Combinações proibidas

- ❌ Logo colorido (qualquer cor que não seja antracite, pergaminho, bordô ou branco)
- ❌ Logo sobre gradiente
- ❌ Logo sobre foto sem overlay sólido (mínimo 40% opacidade)
- ❌ Logo com contorno (outline ao redor do wordmark ou do monograma)
- ❌ Logo com sombra (drop-shadow, inner-shadow, glow — zero)
- ❌ Logo em baixo contraste (ex: cinza claro sobre cinza médio)

---

## 6. O que NÃO fazer (anti-padrões)

1. **Não distorcer proporção.** Nunca esticar horizontal ou verticalmente.
2. **Não trocar a tipografia.** Wordmark usa **apenas** Fraunces 500 com tracking +120. Nenhum
   outro peso, nenhuma outra fonte.
3. **Não trocar o tracking.** +120 é travado.
4. **Não rotacionar.** Logo sempre na horizontal (exceto em spine de livro se houver).
5. **Não adicionar elementos.** Nenhum ícone, selo de certificação, texto descritivo extra
   dentro do lockup.
6. **Não encher o círculo do monograma.** O círculo é stroke fino (1.1). Nunca preencher.
7. **Não usar outline no M.** O M é sempre fill sólido.
8. **Não remover o círculo do monograma** (exceto em 16 px, onde a regra explícita é remover).
9. **Não substituir MAGNO por Magno ou magno.** Caixa alta travada.
10. **Não reduzir abaixo do tamanho mínimo** definido na tabela §3.
11. **Não colocar o logo em cima do ponto focal de fotografia.** Logo precisa de cor sólida
    atrás.
12. **Não combinar dois lockups na mesma peça.** Uma peça = um lockup.

---

## 7. Co-branding (parcerias)

Em peças de co-branding (ex: documento conjunto com parceiro offshore em Zurique):

- Logo MAGNO à **esquerda**, logo do parceiro à **direita**
- Separador vertical fino (1 px / 0.3 mm) em antracite 30% opacidade entre os dois
- Distância entre separador e cada logo: **0.5 x**
- Alturas das duas marcas **equalizadas pela altura do monograma**, não pela altura do wordmark
  (pois parceiros podem ter proporções diferentes)
- Se o parceiro insistir em mais destaque: rejeitar. Em MAGNO, parceria é par — nunca hierárquica.

---

## 8. Favicon e aplicações web

### Favicon (`favicon.ico`, `favicon.svg`)

Usar **monograma simplificado sem círculo**, em antracite sobre transparente:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <g fill="#0E0E10">
    <rect x="22.5" y="26" width="7.5" height="48"/>
    <rect x="70" y="26" width="7.5" height="48"/>
    <polygon points="30,26 33.2,26 51.6,61 48.4,61"/>
    <polygon points="66.8,26 70,26 51.6,61 48.4,61"/>
  </g>
</svg>
```

Exportar também como PNG 32×32, 48×48, 64×64, 180×180 (iOS touch icon).

### Apple Touch Icon (180×180)

Usar **monograma em círculo completo**, em pergaminho sobre antracite, com padding interno
de 20%:

```
background: #0E0E10
M circle: #F4EFE6
padding interno: 36px de cada lado em 180px
```

### Open Graph / Twitter Card (1200×630)

Imagem padrão para compartilhamento social:
- Fundo antracite `#0E0E10`
- Monograma centralizado verticalmente à esquerda (tamanho 180 px)
- Wordmark ao lado do monograma, seguido da tagline "Arquitetura antes de alocação."
- Proporção ocupa cerca de 65% da largura, alinhado à esquerda com margem de 80 px

---

## 9. SVG snippets prontos (copy-paste)

### Lockup horizontal em antracite (padrão)

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 120" role="img" aria-label="MAGNO"
     style="color:#0E0E10">
  <g transform="translate(0, 0)">
    <svg x="0" y="0" width="120" height="120" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="1.1"/>
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
  </g>
  <line x1="160" y1="22" x2="160" y2="98" stroke="currentColor" stroke-width="0.6" opacity="0.45"/>
  <text x="380" y="88" text-anchor="middle" fill="currentColor"
        font-family="Fraunces, 'GT Sectra', 'Tiempos Headline', Georgia, serif"
        font-size="96" font-weight="500" letter-spacing="12">MAGNO</text>
</svg>
```

### Monograma isolado em antracite

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120"
     role="img" aria-label="MAGNO" style="color:#0E0E10">
  <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="1.1"/>
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
```

### Favicon (monograma simplificado)

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="color:#0E0E10">
  <g fill="currentColor">
    <rect x="22.5" y="26" width="7.5" height="48"/>
    <rect x="70" y="26" width="7.5" height="48"/>
    <polygon points="30,26 33.2,26 51.6,61 48.4,61"/>
    <polygon points="66.8,26 70,26 51.6,61 48.4,61"/>
  </g>
</svg>
```

---

## 10. Workflow de produção

### Para designers

1. Abrir `logo.svg` em Figma / Illustrator / Inkscape
2. Instalar Fraunces (Google Fonts — gratuito) localmente
3. Exportar variações em: SVG (master), PDF (impressão), PNG @1x/@2x (digital)
4. **Antes de entregar fora do sistema:** converter texto em path ("outline text")
5. Nomenclatura de arquivos:
   `magno_logo-horizontal_antracite-on-pergaminho_v1.svg`
   `magno_logo-monograma_bordo-on-pergaminho_v1.svg`

### Para devs

1. Importar SVG inline no HTML/JSX (não `<img>`) — permite herdar `color` via CSS
2. Setar `currentColor` no SVG e controlar cor via CSS parent:
   ```css
   .logo { color: #0E0E10; }
   .logo--reverse { color: #F4EFE6; }
   .logo--accent { color: #5A1F25; }
   ```
3. Para acessibilidade: `role="img"` + `aria-label="MAGNO"` no `<svg>` raiz
4. Sem `<title>` ou `<desc>` visíveis — atributo `aria-label` é suficiente para screen readers

### Para print

1. Sempre usar PDF com fontes embutidas ou texto convertido em path
2. CMYK equivalentes estão em `color-system.md` §5
3. Para papel premium (Arjowiggins Conqueror, Fedrigoni Tatami, Favini Curious Matter),
   evitar preto total: usar CMYK 30/30/30/100 (antracite rico) para preservar detalhe
   do stroke fino do círculo

---

## 11. Checklist antes de publicar peça com o logo

- [ ] Logo em uma das 5 combinações de cor canônicas?
- [ ] Área de respiro `x` preservada em todos os lados?
- [ ] Tamanho ≥ mínimo da variação usada?
- [ ] Nenhum efeito (sombra, outline, gradiente, rotação)?
- [ ] Proporção 100% (não esticada)?
- [ ] Fraunces 500 + tracking +120 no wordmark?
- [ ] MAGNO em caixa alta?
- [ ] Nenhum outro logo / ícone dentro da área de respiro?
- [ ] Se impresso: CMYK correto + texto convertido em path?

Se qualquer "não" → **não publicar**. Corrigir e revalidar.
