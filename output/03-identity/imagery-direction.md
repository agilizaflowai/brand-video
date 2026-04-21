# Imagery Direction — MAGNO

> Direção de fotografia, iconografia e ilustração. Moodboard textual (o squad não gera
> imagem; o cliente substitui placeholders por fotos reais produzidas).
> Arquétipo Ruler+Sage + restrições não-negociáveis do brief §6.

---

## 1. Princípios gerais

### O que MAGNO mostra

**Arquitetura, não atividade. Objetos, não pessoas sorrindo. Matéria, não metáfora.**

A imagética de MAGNO obedece a três princípios invertidos em relação ao mercado:

1. **Densidade sobre variedade.** Poucas imagens por peça, cada uma com peso. Nunca galeria
   "inspiracional" de stock.
2. **Silêncio sobre narrativa.** Uma imagem vale por si, não como ilustração de parágrafo.
3. **Materialidade sobre abstração.** Papel, tinta, pedra, madeira, vidro, couro envelhecido.
   Não gradiente, não ícone isométrico, não forma orgânica genérica.

---

## 2. Fotografia — diretrizes

### 2.1. Objetos e naturezas-mortas (90% dos usos)

**O que fotografar:**
- Livros encadernados em couro ou capa dura (Lazard, The Economist, relatório patrimonial
  antigo, *Principles* do Ray Dalio em edição capa dura)
- Papéis dobrados, pastas de dossiê, cartas manuscritas (parcialmente legíveis)
- Caneta-tinteiro em repouso sobre papel pergaminho
- Contrato com selo em cera
- Vinho tinto em taça sobre mesa de madeira escura (referência cultural adulta, sem
  hedonismo)
- Xícara de café expresso sobre *The Financial Times* dobrado
- Relógio mecânico sem marca visível (cuidado com marca)
- Arquitetura de interior: sala de reunião sem pessoas, biblioteca, escadaria de mármore,
  fachada de prédio histórico (Faria Lima dos anos 1960, Avenida Paulista edifício Itália,
  Copan em close)
- Detalhes de material: superfície de couro, textura de papel Arjowiggins Conqueror,
  superfície polida de mogno, mármore Carrara, latão envelhecido

**Direção estética:**
- **Paleta:** tons terrosos, sombras profundas, leves dourados ou vermelhos de madeira. Zero
  cor saturada. Se tiver flor, é branca ou preta.
- **Iluminação:** luz lateral natural de janela (direção Vermeer), contraste médio-alto,
  sombras rígidas permitidas, zero iluminação "chapada" de softbox
- **Composição:** assimétrica quando fizer sentido, respiro amplo à esquerda ou direita,
  nunca centralizado forçado
- **Profundidade de campo:** rasa (f/2.8 a f/4). Foco em um detalhe; resto em desfoque.
- **Granulação:** leve grão de filme aceitável (reforça analógico/institucional); zero ruído
  digital

### 2.2. Arquitetura e espaço (5% dos usos)

**O que fotografar:**
- Interiores de escritório silenciosos — sala de reunião vazia, biblioteca, corredor
- Fachadas de prédios institucionais brasileiros dos anos 1960-70 (Edifício Itália, Copan
  em close, Faria Lima antiga)
- Escadarias, mezaninos, detalhes estruturais
- Nunca: fachada de arranha-céu moderno, vista panorâmica de centro financeiro, prédio de
  vidro espelhado

**Direção:**
- Ângulo reto, perspectiva controlada (não tilt-shift dramático)
- Zero pessoas visíveis no frame
- Paleta neutra com acento ocasional mineral (madeira, mármore, bronze)

### 2.3. Retrato (raríssimo — apenas partners em contexto editorial)

**Quando aparece:** biografia de partner na página "Equipe" (se o fundador pedir), abertura
de carta trimestral.

**Direção rígida — não-negociável do brief:**
- **P&B apenas.** Nunca colorido.
- **Meio-corpo ou rosto** em composição editorial — nunca corpo inteiro, nunca "sentado ao
  lado do computador".
- **Expressão contida.** Leve sorriso ou neutra. **Nunca sorriso aberto, nunca dente.**
- **Fundo neutro:** parede lisa (pergaminho, antracite) ou biblioteca desfocada. Zero
  "escritório corporativo de stock".
- **Figurino:** terno escuro, camisa branca, gravata opcional (se usada, escura sólida).
  Mulheres: blazer escuro, blusa sóbria, joalheria mínima.
- **Iluminação:** Rembrandt ou *split lighting* — lateral com sombra pronunciada
- **Grão:** leve grão de filme (reforça editorial serious)
- **Referências:** retratos do New York Times Style Magazine, retratos de Mario Testino
  editorial sóbrio, retratos de Platon para The New Yorker
- **NUNCA:** linkedin-profile photo, "equipe sorrindo em foto de grupo", "partner rindo com
  braços cruzados"

### 2.4. Paisagem cultural (2% dos usos)

- Biblioteca de mansão, museu, arquivo antigo, arquitetura brutalista brasileira silenciosa
- Sem pessoas

### 2.5. Ações proibidas em fotografia

- ❌ "Aperto de mão" de negócios
- ❌ Pessoas em reunião com post-it na parede
- ❌ Laptop aberto em café
- ❌ Família feliz com filhos (nem em social)
- ❌ "Investidor em frente ao pregão"
- ❌ Moedas / cédulas / cifrões
- ❌ Gráfico de mercado em tela
- ❌ Globo terrestre, avião, mapa-múndi (visual wealth-guy)
- ❌ Relógio com marca visível (Rolex, Patek, Audemars) — cliché
- ❌ Carro (nunca)
- ❌ Barco, jet, mansão genérica
- ❌ Coleção de vinhos tipo "adega luxo"

---

## 3. Iconografia

### 3.1. Sistema de ícones

**Estilo travado:**
- **Stroke:** 1.25 pt (digital: 1.25 px em 16 px viewport; escalona proporcional)
- **Terminais:** retos (`stroke-linecap: butt` ou `square`)
- **Cantos internos:** retos ou com arredondamento de no máximo 2 px
- **Geometria:** linear, sem preenchimento sólido exceto em casos muito específicos
- **Peso:** uniforme (não "duotone" com partes mais grossas)
- **Grid:** 24 × 24 px com padding interno de 2 px — ícone preenche 20 × 20 central

### 3.2. Biblioteca base recomendada

**Primeira escolha: Lucide Icons** ([lucide.dev](https://lucide.dev))
- Open source, 1.25pt stroke padrão, 24×24 grid — já alinhado à direção
- Usado em React via `lucide-react` (1 dependência, tree-shakeable)
- Cobre 95% das necessidades (navegação, ação, status)

**Segunda escolha (complemento): Tabler Icons** (para ícones específicos não cobertos)

### 3.3. Customizações MAGNO

Criar **no máximo 6 ícones próprios** para conceitos específicos da firma — e apenas quando
nenhum ícone genérico servir:

1. `architecture` — linha estrutural de planta baixa
2. `holding-structure` — diagrama simples de holding (caixa + 2 filhas)
3. `succession` — linha geracional
4. `offshore` — globo com ponto-âncora
5. `zero-commission` — círculo com diagonal sobre símbolo de cifrão (uso raro)
6. `independent-advisor` — não-vínculo (duas linhas paralelas que não se tocam)

**Diretrizes para ícones customizados:**
- Stroke 1.25pt — idêntico ao Lucide
- Viewbox 24 × 24
- Exportar SVG otimizado (SVGO) + path único quando possível
- Naming: `magno-{conceito}.svg`

### 3.4. O que NÃO fazer em iconografia

- ❌ Ícone "flat duotone" com color fill
- ❌ Ícone colorido (cinza-claro + cor-de-marca juntos)
- ❌ Ícone 3D / com profundidade
- ❌ Ícone emoji-style (sorrisinho, coração, fogo)
- ❌ Ícone de "cena" (pessoa + mesa + laptop dentro de 24 × 24)
- ❌ Ícone com sombra
- ❌ Mais de 2 pesos de stroke na mesma peça

---

## 4. Ilustração

### 4.1. Posicionamento

**MAGNO evita ilustração.** A regra: se há como expressar sem ilustrar, não ilustra. Quando
inevitável (ex: explicação estrutural de holding, diagrama de sucessão):

### 4.2. Tipos permitidos

1. **Diagramas técnicos** — fluxogramas, organogramas, linhas de sucessão — renderizados com
   **linhas finas (1.25 pt)**, caixas com stroke, texto em Inter pequeno. Zero decoração.
2. **Linhas explicativas** — exemplo: linha do tempo de carreira de um partner, com marcos
   discretos em stroke fino
3. **Diagramas editoriais** — *mapa mental* de arquitetura patrimonial, com tipografia
   dominante e linhas finas

### 4.3. Ilustrações proibidas

- ❌ **Ilustração "flat" de pessoas** (estilo Notion, Figma marketing, flat design 2020)
- ❌ Isométrica 3D (estilo "startup SaaS")
- ❌ Aquarela, sketch à mão, estilo editorial The Atlantic (muito caloroso)
- ❌ "Gradient blob" abstrato
- ❌ Característica humanoide (mão, olho, silhueta) estilizada

### 4.4. Exceção editorial (futura)

Em fase 2 da marca (pós-lançamento), pode-se considerar **encomendar ilustração editorial
a um ilustrador autoral** — com direção rígida para estilo tipo Tom Haugomat ou Malika
Favre (geometria rígida, paleta de 3 cores, figuração abstrata). **Não fazer agora.**

---

## 5. Data visualization (gráficos)

Os clientes de MAGNO recebem relatórios com gráficos de desempenho, alocação, composição
patrimonial. **A diretriz visual é explícita:**

### 5.1. Paleta de gráfico

- **Cor primária:** antracite `#0E0E10` (linha/barra protagonista)
- **Cor secundária:** bordô `#5A1F25` (comparação, highlight)
- **Terciária (quando necessária):** `neutral-50` `#6B6A67` (série de referência)
- **Fundo:** pergaminho `#F4EFE6` ou transparente

**Nunca:** verde lucro + vermelho prejuízo (cliché). Preferir seta ou sinal textual
(`+ 4,2 %` vs `− 1,8 %`) com cor só em seta, não em área/valor.

### 5.2. Tipo de gráfico por caso

| Dado | Tipo recomendado |
|---|---|
| Evolução de patrimônio ao longo do tempo | **Linha simples** (1 série primária + 1 benchmark) |
| Composição de carteira | **Barra horizontal empilhada** (evitar pizza — pizza perde precisão) |
| Distribuição por tipo de ativo | **Treemap discreto** ou tabela com barras inline |
| Comparação de períodos | **Barras lado a lado** |
| Risco × retorno | **Scatter plot** com labels sóbrias |

### 5.3. Estilo de eixo

- Eixos em `neutral-20` (cinza quente claro)
- Gridlines em `neutral-10` (ainda mais sutis), horizontais apenas
- Labels em Inter 12 px ou 14 px
- Números em IBM Plex Mono 14 px com `tnum` ativo
- **Sem borda no plot area**
- **Sem sombra em nenhum elemento**

### 5.4. Proibições

- ❌ Gradiente em área sob linha (mesmo sutil)
- ❌ Pizza 3D
- ❌ Cor arco-íris para múltiplas séries
- ❌ Marcadores chamativos (círculos grandes coloridos)
- ❌ Tooltip pesado com sombra e borda arredondada

---

## 6. Moodboard textual (referência mental)

Leituras e referências visuais que o squad de design (Fase 5-8) deve consultar:

| Categoria | Referência | O que olhar |
|---|---|---|
| **Fotografia institucional** | Lazard.com, Vontobel.com | Paleta terrosa, densidade editorial, zero stock |
| **Retrato editorial** | NYTimes Style Magazine, The New Yorker portraits | P&B rígido, pose contida, luz lateral |
| **Paleta/textura** | Fedrigoni paper samples, Arjowiggins Conqueror | Pergaminho, bordô, latão envelhecido |
| **Layout editorial** | The Economist, Financial Times Weekend, Monocle | Tipografia protagonista, margens amplas |
| **Data viz** | FT visual journalism, Bloomberg Graphics | Mínimo, sóbrio, alinhamento decimal |
| **Arquitetura de referência** | Copan em close, Edifício Itália SP, escadarias brutalistas | Materialidade, sombra, verticalidade |
| **Objetos** | Aesop flagship store, Hermès Paris visual merchandising | Minimalismo institucional luxuoso, sem hedonismo óbvio |
| **Naturezas-mortas** | Paolo Roversi (serious), Irving Penn still life | Luz lateral, densidade, peso |

---

## 7. Placeholders para substituição (produção)

Enquanto o fundador produz fotos reais, usar placeholders com **descrição textual da imagem
pretendida**, em caixa com borda fina (1 px neutral-20) e texto em Inter 14 px neutral-50:

```
┌─────────────────────────────────────────┐
│                                         │
│  [ PLACEHOLDER FOTOGRÁFICO ]            │
│                                         │
│  Natureza-morta: caderno encadernado    │
│  em couro + caneta-tinteiro + papel     │
│  pergaminho dobrado. Luz lateral        │
│  direita. Preto-e-branco com leve       │
│  viés quente. Grão de filme sutil.      │
│                                         │
│  Produção: fotógrafo editorial, mesa    │
│  de madeira escura, 1 dia de sessão.    │
│                                         │
└─────────────────────────────────────────┘
```

Em site (Next.js), criar componente `<ImagePlaceholder>` que renderiza essa caixa com a
descrição passada como prop (ver Fase 5 — UI Kit).

---

## 8. Proposta de produção fotográfica inicial (para o fundador)

Uma vez a identidade aprovada, orçar **uma sessão de 1 dia** com fotógrafo editorial
(referência: fotógrafos que trabalham para *Piauí*, *Vogue Brasil* editorial, *Serafina*
FSP — não fotógrafo corporate) para produzir o pacote mínimo:

- **20–30 imagens de natureza-morta** (objetos, papéis, texturas, materiais)
- **4–6 imagens de arquitetura de interior** (sala de reunião, biblioteca, corredor)
- **Retrato individual de cada partner** em P&B editorial (se houver 3–4 partners, 12–16
  frames finais selecionados)
- **Pacote de texturas soltas** (para composição em capa, carta, proposta)

**Orçamento estimado:** R$ 18k–35k (SP, fotógrafo sênior editorial), 1 dia de sessão + 2
dias de pós. Entrega em alta resolução + contrato de uso institucional perpétuo.

---

## 9. Banco de imagens (enquanto produção não roda)

Se **absolutamente** precisar de imagem antes da produção própria, usar **apenas**:

- **Unsplash** — filtrar por: objetos, materiais, arquitetura, sem pessoas. Recomendados:
  Annie Spratt (still life), Brigitte Tohm (objetos), Tom Pumford (arquitetura)
- **Pexels** — seleção cirúrgica, zero "business meeting", zero "handshake"
- **Public domain museums** — Rijksmuseum, Met Museum, LACMA — para referências históricas
  (retratos de época, gravuras, documentos)

**Zero uso de:** Shutterstock genérico, Getty corporate, Adobe Stock business.

---

## 10. Checklist imagético

Antes de aprovar qualquer imagem em qualquer peça:

- [ ] Zero pessoas sorrindo?
- [ ] Zero stock corporativo?
- [ ] Preto-e-branco (retratos) ou paleta terrosa (objetos)?
- [ ] Zero handshake, zero meeting, zero laptop-em-café?
- [ ] Foto produzida ou placeholder documentado?
- [ ] Resolução mínima 2× para retina (quando aplicável)?
- [ ] Alt text preciso e sóbrio (não "equipe MAGNO sorrindo")?
- [ ] Ícone do Lucide (ou custom) com stroke 1.25pt?
- [ ] Zero emoji?
- [ ] Zero ilustração "flat de pessoas"?
- [ ] Se gráfico: paleta antracite + bordô + neutro, sem gradiente, com `tnum`?
