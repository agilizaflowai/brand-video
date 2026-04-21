# Variáveis da Proposta Comercial

> Campos `{{VARIAVEL}}` a substituir em `commercial-proposal.html` e `letterhead.html`
> antes de cada envio. Padrão seco, denso, sem espaço para hedge.

---

## 1. Variáveis da proposta comercial (`commercial-proposal.html`)

### Metadados do documento

| Variável | Descrição | Exemplo |
|---|---|---|
| `{{DATA_PROPOSTA}}` | Data de emissão no cabeçalho da capa e rodapé da página 10 | `Abril de 2026` ou `2026-04-20` |
| `{{MÊS_ANO}}` | Mês + ano formatado | `Abril de 2026` |
| `{{CIDADE}}` | Cidade do cliente (capa) | `São Paulo` · `Curitiba` · `Rio de Janeiro` |

### Identificação do cliente

| Variável | Descrição | Exemplo |
|---|---|---|
| `{{NOME_CLIENTE}}` | Nome do cliente-alvo da proposta — capa e cabeçalho da pg 9 | `Carlos Monteiro` |
| `{{SOBRENOME_FAMILIA}}` | Sobrenome para referência "Família X" | `Monteiro` |
| `{{DATAS_REUNIOES}}` | Datas das reuniões de diagnóstico que precederam a proposta | `12/03, 27/03 e 09/04/2026` |
| `{{DATA_ASSINATURA}}` | Data de assinatura prevista do contrato | `30/04/2026` |
| `{{DATA_KICKOFF}}` | Data da primeira reunião formal da Fase 01 | `08/05/2026` |
| `{{URL_PORTAL}}` | URL do portal do cliente (se houver) | `magno.capital/cliente/monteiro` |

### Complexidade e valores

| Variável | Descrição | Exemplo |
|---|---|---|
| `{{COMPLEXIDADE}}` | Nível de complexidade avaliado | `Baixa` · `Média` · `Alta` |
| `{{AUM_INICIAL}}` | Patrimônio financeiro inicial sob MAGNO (em R$) | `82.400.000` |
| `{{SETUP_FEE}}` | Valor do setup fee acordado | `180.000` · `240.000` · `300.000` |
| `{{FEE_AUM_ANO1}}` | Estimativa da taxa sobre AUM no ano 1 | `555.000` |
| `{{PRAZO_SEMANAS}}` | Prazo estimado da primeira estruturação | `12` |

### Frentes ativadas (página 9)

| Variável | Descrição |
|---|---|
| `{{FRENTE_01}}`, `{{FRENTE_02}}`, etc | Nome da frente |
| `{{DESCRICAO_01}}`, `{{DESCRICAO_02}}`, etc | 1 linha descritiva da frente |

**Opções típicas de frente:**
- `Reestruturação societária pós-M&A` — *Consolidação de quotas, revisão de pacto societário, reorganização de holding existente*
- `Desenho de holding patrimonial` — *Nova holding com patrimônio financeiro + veículo para sucessão*
- `Sucessão multi-geracional` — *Regulamento familiar, testamentos, doações com reserva de usufruto vidente*
- `Estrutura offshore (EUA + Jersey)` — *LLC em Delaware para liquidez em USD + trust em Jersey para sucessão internacional*
- `Planejamento tributário de longo prazo` — *Revisão de IRPF, regime de distribuição de dividendos, alocação fiscal intra-família*
- `Governança familiar` — *Conselho de família, regimento, fluxos de decisão entre 3 gerações*

### Time e partners (páginas 8 e 10)

| Variável | Descrição |
|---|---|
| `{{NOME_PARTNER_LEAD}}` | Lead partner responsável pela relação |
| `{{BIO_PARTNER_LEAD}}` | Biografia curta (máx 40 palavras) |
| `{{NOME_PARTNER_2}}` | Second partner (apoio estrutural) |
| `{{BIO_PARTNER_2}}` | Biografia curta (máx 40 palavras) |
| `{{XX}}` | Anos de mercado (ex: `18`) |
| `{{BANCO_OU_FIRMA_ANTERIOR}}` | Firma anterior — padrão de referência |

**Padrão de bio de partner (exemplo):**

> *"Partner-fundador da MAGNO. 22 anos de mercado. Estruturou patrimônios familiares em
> BTG Private e Itaú Private ao longo de duas décadas, com foco em M&A family-owned e
> sucessão multi-geracional. Graduação em Administração pela FGV-SP e MBA pela Wharton.
> Membro do CFA Institute."*

---

## 2. Variáveis do letterhead (`letterhead.html`)

### Variante 01 — Carta formal

| Variável | Descrição | Exemplo |
|---|---|---|
| `{{REF_CARTA}}` | Referência do documento interno | `2026-Q1-0142` |
| `{{DIA}}` / `{{MES}}` / `{{ANO}}` | Data por extenso | `20` / `abril` / `2026` |
| `{{NOME_DESTINATARIO}}` | Nome completo | `Carlos Monteiro Sampaio` |
| `{{CARGO_DESTINATARIO}}` | Cargo/posição | `Founder & CEO` |
| `{{EMPRESA}}` | Empresa | `Monteiro Holdings Ltda.` |
| `{{ENDERECO_LINHA_1}}` | Endereço linha 1 | `Rua dos Pinheiros, 1201` |
| `{{ENDERECO_LINHA_2}}` | Endereço linha 2 | `Pinheiros · São Paulo · SP · 05422-010` |
| `{{PRIMEIRO_NOME}}` | Primeiro nome para saudação | `Carlos` |
| `{{FIM_TRIMESTRE}}` | Fim do trimestre de referência | `31 de março de 2026` |
| `{{NOME_PARTNER}}` | Nome do partner que assina | `Cecília Bueno` |

### Variante 02 — Convite para mesa redonda

| Variável | Descrição | Exemplo |
|---|---|---|
| `{{NOME_CONVIDADO}}` | Nome completo | `Isabela Câmara` |
| `{{DATA_EVENTO}}` | Data do evento | `15 de maio de 2026` |
| `{{MES_EVENTO}}` | Mês do evento por extenso | `maio` |
| `{{HORA_INICIO}}` / `{{HORA_FIM}}` | Horário | `18h30` / `22h` |
| `{{DATA_RSVP}}` | Data-limite de confirmação | `08 de maio` |

### Variáveis institucionais (compartilhadas)

| Variável | Descrição | Valor padrão |
|---|---|---|
| `{{CNPJ}}` | CNPJ da firma | `00.000.000/0001-00` (substituir quando constituída) |
| `{{NUM}}` | Número do endereço | `4700` (exemplo) |
| `{{CEP}}` | CEP | `04538-132` (exemplo Faria Lima) |
| `{{TELEFONE}}` | Telefone institucional | `3000-0000` |

---

## 3. Protocolo de preenchimento

### Antes de enviar qualquer proposta

1. **Copy do arquivo mestre** (`commercial-proposal.html`) para arquivo com nome do cliente:
   `commercial-proposal__monteiro-2026-04.html`.
2. **Substituir todas as `{{VARIAVEIS}}`** usando find-and-replace do editor. Nunca editar a
   template mestre.
3. **Checar visualmente** no navegador — a diagramação deve estar idêntica à referência.
4. **Exportar em PDF** via *Print → Save as PDF* no Chrome, com formato A4, **sem margens
   extras** (já estão definidas no CSS).
5. **Renomear o PDF** seguindo o padrão `magno_proposta_{SOBRENOME}_{YYYY-MM}.pdf`.
6. **Arquivar versão final** em pasta do cliente + pasta institucional de propostas.

### Validação antes do envio

- [ ] Todas as `{{VARIAVEIS}}` foram substituídas? (buscar `{{` no arquivo — não deve encontrar)
- [ ] Valores financeiros usam IBM Plex Mono com separação decimal correta?
- [ ] Nome do cliente grafado corretamente (com acentos) em todas as páginas?
- [ ] Datas em formato brasileiro (DD de MÊS de AAAA)?
- [ ] Partners com bios atualizadas?
- [ ] Página 9 (escopo contratado) reflete escopo real mapeado?
- [ ] Setup fee coerente com complexidade real?
- [ ] Taxa sobre AUM calculada corretamente por tiers?

### Após o envio

- Proposta enviada em PDF + link para versão web (opcional, hospedada privadamente)
- Contrato formal gerado pela área jurídica com base nos valores da proposta
- Kickoff agendado na semana seguinte à assinatura

---

## 4. Regras de conteúdo (não-negociáveis)

1. **Zero erro de digitação em nome de cliente.** Verificar pelo menos duas vezes.
2. **Zero valor aproximado.** Todos os valores devem ser exatos (não "cerca de R$ 180k",
   sim "R$ 180.000,00").
3. **Nenhum cliente identificável em estudo de caso** na página 8 (governança).
4. **Setup fee e AUM fee SEMPRE em linhas separadas.** Nunca consolidar em "total".
5. **Tabela de AUM fee com exemplo de cálculo** — o cliente precisa ver como se forma o valor.
6. **Se o cliente pedir desconto:** redirecionar para redução de escopo. **Nunca descontar
   taxa** — o modelo fee-only perde integridade se admitir barganha.
7. **Complexidade é sempre julgamento do partner lead + second.** Não negociar por telefone.

---

## 5. Como exportar para PDF

### Opção A — Chrome / Edge (recomendada)

1. Abrir `commercial-proposal.html` ou `letterhead.html` no navegador
2. `Ctrl+P` (Windows) ou `Cmd+P` (Mac)
3. **Destino:** Salvar como PDF
4. **Papel:** A4
5. **Margens:** Nenhuma (o CSS já contém as margens corretas de impressão)
6. **Escala:** Padrão 100%
7. **Mais configurações → Gráficos em segundo plano:** ativado
8. Salvar

### Opção B — Playwright (automação em batch)

```js
// scripts/export-proposal-pdf.js
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const file = 'file://' + path.resolve(__dirname, '../output/07-sales-assets/commercial-proposal.html');
  await page.goto(file);
  await page.waitForLoadState('networkidle');

  await page.pdf({
    path: 'output/07-sales-assets/exports/commercial-proposal.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });

  await browser.close();
  console.log('✓ PDF exportado.');
})();
```

```bash
mkdir -p output/07-sales-assets/exports
node scripts/export-proposal-pdf.js
```

---

## 6. Versionamento

Proposta mestre segue versionamento semântico:

- `v1.0` — Lançamento inicial (abril 2026)
- `v1.1` — Ajuste de texto sem mudança estrutural
- `v2.0` — Revisão estrutural (ex: adição de nova seção, mudança de modelo econômico)

Arquivos gerados a partir da mestre herdam a versão da mestre no momento da emissão.
Propostas antigas não são retroativamente atualizadas — cada cliente tem a versão que foi
enviada.
