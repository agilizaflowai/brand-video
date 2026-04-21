# MAGNO — Site Institucional

> Next.js 14 (App Router) + Tailwind CSS + TypeScript. Site navegável que consolida todas
> as fases do projeto de marca em um único produto rodável.

---

## Rodar localmente

```bash
cd site
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

### Build de produção

```bash
npm run build
npm start
```

---

## Estrutura

```
site/
├── app/
│   ├── layout.tsx               — Root layout com fontes + Navbar + Footer
│   ├── page.tsx                 — Home (hero, kernel, personas, análise, manifesto)
│   ├── globals.css              — Tailwind base + prose-magno + utilities
│   ├── estrategia/page.tsx      — Posicionamento, personas, voz, inimigos
│   ├── identidade/page.tsx      — Logo, cor, tipografia, grid
│   ├── ui-kit/page.tsx          — Showcase vivo de todos os componentes
│   ├── social-kit/page.tsx      — 4 pilares, 20 ideias, 10 templates
│   ├── proposta/page.tsx        — Estrutura da proposta comercial
│   └── papel-timbrado/page.tsx  — Letterhead + assinatura de e-mail
├── components/ui/
│   ├── index.ts                 — Re-exports de todos os componentes
│   ├── Logo.tsx                 — Logo em 4 variantes
│   ├── Button.tsx               — Button (primary, secondary, ghost, destructive)
│   ├── Input.tsx                — Input + Textarea
│   ├── Card.tsx                 — Card + sub-composições editoriais
│   ├── Accordion.tsx            — FAQ accordion (WAI-ARIA)
│   ├── Modal.tsx                — Dialog com foco, escape, trava scroll
│   ├── Badge.tsx                — Badge neutro / acento / semânticos
│   ├── Alert.tsx                — Alert com barra lateral colorida
│   ├── Navbar.tsx               — Navbar sticky com menu mobile
│   ├── Footer.tsx               — Footer 4-col institucional
│   └── Typography.tsx           — Display, Heading, Lead, Body, Eyebrow, Caption, Numeric, PullQuote
├── lib/
│   └── cn.ts                    — Utility classnames
├── public/
│   └── favicon.svg              — Monograma M simplificado
├── tailwind.config.ts           — Tokens de cor, tipografia, spacing, radius
├── tsconfig.json                — TS strict + alias @/
├── next.config.mjs
├── postcss.config.js
└── package.json                 — next 14, react 18, lucide-react, tailwind 3
```

---

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Home — hero, kernel, personas, análise destaque, manifesto, navegação |
| `/estrategia` | Onlyness, personas, 7 princípios de voz, inimigos simbólicos |
| `/identidade` | Logo em 6 variações, paleta, pares tipográficos, grid tokens |
| `/ui-kit` | Showcase vivo: Button, Input, Card, Accordion, Modal, Badge, Alert, Typography |
| `/social-kit` | 4 pilares, banco de ideias, 6 previews de template, cadência |
| `/proposta` | Estrutura de 10 páginas, tabela de tiers AUM, pull quote |
| `/papel-timbrado` | Preview de letterhead (duas variantes) + assinatura de e-mail |

---

## Tokens

Todos os tokens da Fase 3 estão implementados em `tailwind.config.ts` e `app/globals.css`:

- **Cores:** `ink`, `paper`, `accent`, `neutral-*`, semânticos discretos
- **Tipografia:** Fraunces (via `next/font/google`), Inter, IBM Plex Mono
- **Spacing:** 8pt grid, tokens 1–32
- **Breakpoints:** sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536
- **Radius:** 0 padrão (cantos retos)

---

## Princípios de código

1. **Radius 0 padrão.** Toda border-radius diferente de 0 é explícita e documentada.
2. **Tipografia semântica.** Serif (Fraunces) só em display; sans (Inter) em UI; mono (Plex) em números.
3. **Sem animação decorativa.** Apenas `transition-colors 150ms`.
4. **A11y:** ARIA roles, keyboard navigation, focus-visible em todo interativo.
5. **Server Components por padrão.** `'use client'` apenas em componentes com estado ou eventos.
6. **Tokens em Tailwind config.** Zero cor/espaço hardcoded fora dos tokens.
7. **Imports:** alias `@/` — `import { Button } from '@/components/ui'`.

---

## Próximos passos de produção

- **Imagens reais:** substituir placeholders por sessão fotográfica (ver `output/03-identity/imagery-direction.md` §7)
- **Nomes e bios de partners:** substituir `[Nome do Partner]` por nomes reais em `app/proposta/page.tsx` e nos HTMLs de assets
- **Conteúdo dinâmico:** cartas trimestrais, análises publicadas, eventos — podem entrar como MDX em `app/cartas/[slug]/page.tsx`
- **CMS ou estático:** site permite ficar 100% estático (export) — para publicar em Vercel, Cloudflare Pages, ou Netlify sem backend
- **Analytics:** Plausible (privacy-first), não Google Analytics
- **CNAME:** apontar `magno.capital` para o host escolhido

---

## Dogfooding

Este site é a primeira aplicação em produção do brand system MAGNO. Todo desvio do sistema
que for notado aqui indica problema no sistema, não no site — **corrigir no sistema e
propagar**.
