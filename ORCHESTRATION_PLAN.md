# Plano de Orquestração — Brand + Book + Navegável

Referência do runtime (você, Claude Code): siga estas 7 fases em ordem. Cada fase tem input,
squads/agentes chamados, e entregável salvo em `./output/<fase>/`.

Os squads do pacote Xquads usados aqui são **`brand-squad`** (15 agentes) e **`design-squad`**
(8 agentes). Opcionalmente, `copy-squad` para copy de proposta e `storytelling` para manifesto.

---

## Fase 1 — Estratégia de Marca

**Squad:** brand-squad
**Agentes chave a consultar:** os focados em posicionamento (David Aaker, Marty Neumeier,
Al Ries), arquétipos, e personas. Leia `brand-squad/agents/` e selecione os 4–6 mais relevantes
para posicionamento estratégico.
**Input:** `BRAND_BRIEF.md`
**Tasks:** `brand-squad/tasks/` relacionadas a positioning, archetype, persona, voice.
**Output:** `output/01-strategy/`
  - `positioning.md` (promessa, inimigo, categoria, diferencial)
  - `archetype.md` (arquétipo primário + secundário, implicações)
  - `personas.md` (2–3 personas detalhadas com JTBD)
  - `voice-tone.md` (princípios de voz, do/don't, 10 exemplos)
  - `strategy-summary.md` (consolidação de 1 página)

## Fase 2 — Naming, Tagline e Manifesto

**Squad:** brand-squad + (opcional) storytelling
**Agentes:** os focados em naming e brand narrative
**Input:** output da Fase 1
**Tasks:** naming exploration, tagline generation, manifesto writing
**Output:** `output/02-naming/`
  - `naming-exploration.md` (20 opções por abordagem: descritivo, evocativo, cunhado, composto)
  - `naming-final.md` (3 finalistas com análise de domínio, pronúncia, marca, conotação)
  - `tagline.md` (5 opções alinhadas ao posicionamento)
  - `manifesto.md` (manifesto de marca, 150–300 palavras)

> Se o brief já tem nome, pule naming-exploration e vá direto para validação do nome existente
> contra os critérios. Aponte fraquezas se houver.

## Fase 3 — Identidade Visual

**Squad:** design-squad (primário) + brand-squad (validação)
**Agentes chave:** Brad Frost, Dan Mall e os design leads do design-squad
**Input:** outputs das Fases 1–2
**Tasks:** logo concept, color system, typography, grid, imagery direction
**Output:** `output/03-identity/`
  - `logo.svg` (logo principal, inline SVG limpo, variações: horizontal, vertical, símbolo)
  - `logo-variations.md` (regras de uso, áreas de respiro, tamanhos mínimos)
  - `color-system.md` (paleta primária, secundária, neutros, semânticos — com HEX/RGB/HSL + tokens Tailwind)
  - `typography.md` (pares de fonte com fallbacks web, escala tipográfica, pesos, tracking)
  - `grid-spacing.md` (grid de 8px, tokens de spacing, breakpoints)
  - `imagery-direction.md` (fotografia, iconografia, ilustração — direção + moodboard textual)

> Para o logo: gere SVG inline no arquivo. Teste em tamanho favicon (16px) e hero (200px).
> Paleta: crie tokens CSS custom properties + classes Tailwind prontas para copiar.

## Fase 4 — Brand Book Consolidado

**Squad:** brand-squad + design-squad (revisão)
**Input:** Fases 1–3
**Output:** `output/04-brand-book/brand-book.md` (documento único navegável com TOC)

Estrutura obrigatória:
1. Intro + manifesto
2. Posicionamento e estratégia
3. Personas e público
4. Voz e tom
5. Sistema visual (logo, cor, tipografia, grid)
6. Uso e aplicação — do's e don'ts
7. Exemplos aplicados (mock headlines, mock sinalização, mock digital)

> Este arquivo vira a Home do site navegável na Fase 7.

## Fase 5 — UI Kit

**Squad:** design-squad
**Input:** Fase 3 (tokens visuais)
**Output:** `output/05-ui-kit/` + componentes React em `site/components/ui/`

Componentes a entregar (React + Tailwind, usando os tokens da Fase 3):
  - Button (primary, secondary, ghost, destructive — 3 tamanhos, estados)
  - Input + Textarea
  - Card (padrão + variantes)
  - FAQ / Accordion (a "caixa de perguntas" mencionada no vídeo)
  - Modal / Dialog
  - Badge / Tag
  - Alert / Toast
  - Navigation bar + Footer
  - Typography showcase (H1–H6, body, caption)

Cada componente com arquivo `.tsx`, props tipadas, e um `showcase.mdx` demonstrando variantes.

## Fase 6 — Social Kit

**Squad:** brand-squad (conteúdo) + design-squad (templates)
**Input:** Fases 1–3
**Output:** `output/06-social-kit/`
  - `content-pillars.md` (4–5 pilares com ratio sugerida)
  - `post-ideas.md` (20 ideias específicas com hook + formato sugerido)
  - `templates.html` (feed 1:1 e 4:5, story 9:16, capa de reels — HTML/CSS pronto para print em PNG via Playwright)
  - `captions-template.md` (estruturas de legenda por pilar)

> Templates devem ser HTML+CSS com dimensões exatas (1080x1080, 1080x1350, 1080x1920).
> Usuário exporta via print/screenshot ou Playwright headless.

## Fase 7 — Ativos Comerciais

**Squad:** copy-squad + design-squad
**Input:** Fases 1–3
**Output:** `output/07-sales-assets/`
  - `commercial-proposal.html` (proposta em HTML paginada, pronta pra imprimir em PDF)
  - `letterhead.html` (papel timbrado A4, versão digital + print)
  - `proposal-variables.md` (campos a substituir: cliente, valor, prazo, escopo)
  - `email-signature.html` (assinatura de e-mail inline com logo SVG)

## Fase 8 — Site Navegável (Next.js)

**Squad:** design-squad
**Input:** Tudo de 1–7
**Output:** `site/` (Next.js App Router + Tailwind)

Rotas:
  - `/` — hero com logo, manifesto, navegação para todas as seções
  - `/estrategia` — posicionamento + personas
  - `/identidade` — logo + paleta + tipografia interativas
  - `/ui-kit` — showcase de componentes vivos (clica, testa)
  - `/social-kit` — grid de templates com preview
  - `/proposta` — preview da proposta comercial
  - `/papel-timbrado` — preview do letterhead

Requisitos:
  - Rodar com `cd site && npm install && npm run dev`
  - Design da própria marca (dogfooding): usa a paleta, tipografia e UI kit criados
  - Responsivo
  - Dark mode se o brand system prever
  - Zero dependências pesadas além de next, react, tailwind, lucide-react

> Este site é o que o usuário vai gravar. Capriche na hierarquia, nas transições, e no polish.
