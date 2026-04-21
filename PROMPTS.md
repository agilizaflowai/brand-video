# Prompts — copie e cole no Claude Code, em ordem

> Uso: abra Claude Code na raiz da pasta Xquads (onde estão `brand-squad/`, `design-squad/`, etc).
> Coloque nesta raiz os 4 arquivos: `CLAUDE.md`, `BRAND_BRIEF.md`, `ORCHESTRATION_PLAN.md`, `PROMPTS.md`.
> Preencha o `BRAND_BRIEF.md` antes do Prompt 0.

---

## Prompt 0 — Bootstrap e sanity check

```
Leia CLAUDE.md, ORCHESTRATION_PLAN.md e BRAND_BRIEF.md.
Depois, liste a estrutura das pastas brand-squad/ e design-squad/ (somente 2 níveis).
Me diga:
1. Se há algum campo [PREENCHER] ou [DECIDIR COM SQUAD] no BRAND_BRIEF que precisa atenção.
2. Quais agentes do brand-squad você pretende usar na Fase 1 e por quê (máx 6).
3. Quais agentes do design-squad você pretende usar na Fase 3 e por quê.
4. Qualquer inconsistência no brief que deva ser resolvida antes de prosseguir.
Não execute nenhuma fase ainda. Só confirme que entendeu o plano.
```

---

## Prompt 1 — Fase 1 (Estratégia)

```
Execute a Fase 1 do ORCHESTRATION_PLAN.md (Estratégia de Marca).
Leia as personas dos agentes do brand-squad que você selecionou.
Para cada agente, escreva a contribuição dele sob um sub-heading próprio.
Gere os 5 arquivos em output/01-strategy/ conforme o plano.
Ao terminar, faça um resumo de 5 linhas e liste os arquivos. Espere minha confirmação antes da Fase 2.
```

---

## Prompt 2 — Fase 2 (Naming, Tagline, Manifesto)

```
Execute a Fase 2. Se o BRAND_BRIEF já tem nome definido, pule naming-exploration,
valide o nome existente contra os critérios dos agentes, e aponte fraquezas + alternativas.
Caso contrário, gere as 20 opções por abordagem e recomende 3 finalistas com justificativa.
Salve tudo em output/02-naming/. Resuma e aguarde confirmação.
```

---

## Prompt 3 — Fase 3 (Identidade Visual)

```
Execute a Fase 3. Três coisas críticas:
1. O logo.svg deve ser inline SVG limpo, sem <image>, e funcionar em 16px (favicon) e 200px.
Gere 3 propostas distintas e escolha a melhor com justificativa visual e estratégica.
2. A paleta deve vir como (a) tabela com HEX/RGB/HSL/nome, (b) tokens CSS custom properties,
(c) config de tailwind.config.js pronto para copiar.
3. Tipografia: pares de fonte com fallbacks, pesos usados, escala modular (1.25 ou 1.333),
tracking recomendado em headings. Use fontes Google Fonts ou sistema (não fontes pagas).
Salve tudo em output/03-identity/. Resuma e aguarde.
```

---

## Prompt 4 — Fase 4 (Brand Book)

```
Execute a Fase 4. Consolide em output/04-brand-book/brand-book.md as 7 seções do plano,
com TOC no topo e anchor links para cada seção. Escreva em pt-BR, tom de voz alinhado à marca criada.
Inclua os SVGs da Fase 3 inline. Resuma e aguarde.
```

---

## Prompt 5 — Fase 5 (UI Kit)

```
Execute a Fase 5. Crie os componentes React (.tsx) na pasta site/components/ui/
(ainda não inicialize o Next.js, só crie os arquivos .tsx para serem usados depois).
Use:
- Tailwind (assumindo config da Fase 3)
- Props tipadas com TypeScript
- clsx ou cn helper para variantes
- Sem dependência de shadcn — componentes próprios com a identidade da marca

Lista obrigatória: Button, Input, Textarea, Card, Accordion/FAQ, Modal, Badge, Alert,
Navbar, Footer, Typography. Para cada um, crie também um showcase.mdx em output/05-ui-kit/
demonstrando todas as variantes e estados. Resuma e aguarde.
```

---

## Prompt 6 — Fase 6 (Social Kit)

```
Execute a Fase 6. Para os templates em output/06-social-kit/templates.html:
- Páginas HTML separadas ou uma só com âncoras, com dimensões exatas inline
(feed 1:1 = 1080x1080, feed 4:5 = 1080x1350, story = 1080x1920, reels cover = 1080x1920)
- Use a paleta e tipografia da Fase 3
- 3 variações de template por formato (texto dominante, mista, imagem dominante)
- Placeholder de imagem com descrição do que deveria estar ali
Resuma e aguarde.
```

---

## Prompt 7 — Fase 7 (Ativos Comerciais)

```
Execute a Fase 7.
- commercial-proposal.html: proposta comercial paginada A4, seções (capa, sobre, diagnóstico,
proposta, investimento, prazo, próximos passos, contato), pronta pra exportar em PDF.
- letterhead.html: papel timbrado A4 com header + footer fixos, área central livre.
- email-signature.html: assinatura compacta com logo SVG inline, funciona em clientes de email.
Todas com variáveis marcadas {{CLIENTE}}, {{VALOR}}, etc, listadas em proposal-variables.md.
Resuma e aguarde.
```

---

## Prompt 8 — Fase 8 (Site navegável)

```
Execute a Fase 8. Inicialize um projeto Next.js em ./site/ com:
- App Router
- TypeScript
- Tailwind (config da Fase 3 já aplicada)
- Sem src/ folder
- Sem ESLint se for travar

Depois, implemente as rotas listadas no plano. Importante:
- O site é o vitrine final — use todos os componentes do UI Kit e aplique a identidade completa
- /ui-kit deve ter blocos interativos (clique em botão, abre modal, expande accordion — tudo vivo)
- /identidade deve ter interação: hover na cor mostra HEX, clique na fonte mostra escala
- Adicione rota /indice ou /sumario com navegação completa

Ao final, rode `cd site && npm install` para validar, e me diga se há warnings.
Execute `npm run build` e reporte.
Depois disso, instruções de como rodar local e gravar.
```

---

## Prompt extra — Polimento para vídeo

```
Antes de eu gravar o vídeo, revise o site/ com olhar de diretor de arte:
- Ritmo das páginas (hero forte, respiração, fechamento claro)
- Microanimações (fade/slide sutis, nada de exagero)
- Transições entre rotas se fizer sentido
- Dark mode: funciona? As cores semânticas fazem sentido?
- Print no mobile: quebra em algum lugar?
- Performance: Lighthouse rápido?

Liste 5 melhorias de maior impacto visual e aplique as 3 mais fortes.
Não adicione libs novas a não ser que seja inevitável.
```

---

## Dica final

Se em qualquer fase você sentir que a saída ficou genérica, pare e rode:

```
Essa saída está genérica. Identifique os 3 momentos onde você tomou o caminho seguro e
reescreva-os com posicionamento forte, contradição interessante, ou tensão. Aplique só quando eu aprovar.
```

Isso força o Claude Code a sair do modo "consenso corporativo" que os agentes de branding
tendem a cair quando o brief é genérico demais.
