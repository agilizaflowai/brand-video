# Projeto: Brand + Brand Book + Navegável — Xquads Squads

Este repositório contém 12 squads de agentes IA (pasta `brand-squad/`, `design-squad/`, etc).
Normalmente eles rodariam pelo Synkra AIOS Core. Neste projeto **você (Claude Code) é o runtime**:
lê as definições em `agents/`, `tasks/`, `workflows/`, `data/`, e executa as etapas
sequencialmente, salvando todos os entregáveis em `./output/`.

---

## Regras do projeto

1. **Brief é a fonte da verdade.** Antes de qualquer execução, leia `BRAND_BRIEF.md` por completo.
   Se algo estiver marcado `[PREENCHER]`, pare e peça ao usuário para preencher.

2. **Use os squads indicados, não reinvente.** Para cada fase em `ORCHESTRATION_PLAN.md`:
   - Leia os arquivos dos agentes relevantes em `<squad>/agents/` para absorver a persona e foco
   - Leia as tasks em `<squad>/tasks/` para seguir inputs/outputs esperados
   - Leia os workflows em `<squad>/workflows/` quando existirem e seguir a sequência multi-agente
   - Consulte `<squad>/data/` para frameworks e catálogos de referência

3. **Toda saída vai para `./output/<fase>/`**, em markdown estruturado. Nada de output solto no chat.
   Ao fim de cada fase, faça um resumo de 5 linhas do que foi produzido e diga o nome dos arquivos.

4. **Orquestração multi-agente:** quando uma fase envolve vários agentes (ex: brand-squad tem 15),
   rode-os em sequência, cada um lendo o output do anterior. Use sub-headings no arquivo de saída
   para separar a contribuição de cada agente.

5. **Visuais são código, não imagem.** Logo, paleta, tipografia, UI kit, posts sociais,
   papel timbrado, proposta comercial — tudo renderizado em **SVG inline** ou **HTML/React + Tailwind**.
   Não tente gerar imagem. Se precisar de imagem fotográfica, use placeholder com descrição
   do que deveria estar ali (o usuário substitui depois).

6. **Navegável final:** a fase 7 constrói um site Next.js em `./site/` consolidando todos os
   entregáveis em páginas navegáveis. Use App Router, Tailwind, e componentes do UI Kit criados
   na fase 5. Deve rodar com `npm install && npm run dev`.

7. **Não quebre o formato dos squads originais.** Eles ficam read-only como referência.
   Tudo que você gera vai em `./output/` ou `./site/`.

8. **Disagreement é bem-vindo.** Se o brief tiver uma escolha fraca (ex: nome genérico,
   posicionamento raso), aponte no output e proponha alternativa, mas execute o brief como está
   na primeira passada. O usuário decide se itera.

---

## Estrutura esperada após execução

```
./
├── brand-squad/            # squads originais (read-only)
├── design-squad/
├── ... outros squads
├── BRAND_BRIEF.md          # input do usuário
├── ORCHESTRATION_PLAN.md   # plano de fases
├── PROMPTS.md              # prompts por fase (referência para o usuário)
├── CLAUDE.md               # este arquivo
└── output/
    ├── 01-strategy/        # posicionamento, arquétipo, persona, tom de voz
    ├── 02-naming/          # nome, tagline, manifesto
    ├── 03-identity/        # logo SVG, paleta, tipografia, grid
    ├── 04-brand-book/      # consolidado
    ├── 05-ui-kit/          # componentes React
    ├── 06-social-kit/      # templates de posts, content pillars
    ├── 07-sales-assets/    # proposta comercial, papel timbrado
    └── 08-site/ -> ../site # link para site navegável
```

---

## Modelo mental para cada fase

Para cada fase:
1. Anunciar: "Iniciando Fase X — <nome>. Agentes envolvidos: A, B, C."
2. Ler brief + contexto + output das fases anteriores
3. Ler definições dos agentes da fase
4. Executar agente por agente, encadeando outputs
5. Consolidar em arquivo único da fase
6. Confirmar com o usuário antes de ir para próxima fase (a menos que ele tenha dito "execute tudo até o fim")
