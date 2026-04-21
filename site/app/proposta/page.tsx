import Link from 'next/link'
import { ArrowUpRight, Download } from 'lucide-react'
import {
  Display,
  Eyebrow,
  Body,
  Lead,
  Card,
  CardEyebrow,
  CardTitle,
  CardBody,
  CardMetric,
  Numeric,
  PullQuote,
} from '@/components/ui'

export const metadata = { title: 'Proposta comercial' }

export default function PropostaPage() {
  return (
    <article className="pb-14 md:pb-20">
      <header className="container-wide py-14 md:py-20 border-b border-neutral-10">
        <Eyebrow className="mb-6">Fase 07 — Proposta comercial</Eyebrow>
        <Display as="h1" size="xl" className="max-w-[22ch]">
          Dez páginas A4, pronta para imprimir em PDF.
        </Display>
        <Lead className="mt-8 max-w-[60ch]">
          Estrutura de dossiê institucional — capa em antracite, manifesto em pergaminho,
          modelo econômico em tabela auditável com tiers de AUM. Sem pitch de Silicon Valley.
        </Lead>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/commercial-proposal.html"
            className="inline-flex items-center gap-2 font-sans text-[0.9375rem] text-ink underline underline-offset-4 decoration-neutral-20 hover:decoration-accent hover:text-accent transition-colors"
          >
            Abrir proposta (.html) <ArrowUpRight size={16} strokeWidth={1.25} />
          </Link>
        </div>
      </header>

      {/* ESTRUTURA */}
      <section className="container-wide py-12 md:py-20">
        <Eyebrow className="mb-4">01 · Estrutura</Eyebrow>
        <Display as="h2" size="m" className="mb-8 md:mb-10 max-w-[24ch]">
          Dez páginas em sequência narrativa.
        </Display>

        <ol className="grid gap-0 divide-y divide-neutral-20 border-y border-neutral-20">
          {pages.map((page) => (
            <li key={page.num} className="grid grid-cols-[60px_1fr] gap-6 py-6 md:grid-cols-[100px_240px_1fr] md:gap-10 md:py-8">
              <span className="font-mono text-[1rem] font-medium text-neutral-50 tabular-nums">
                {page.num}
              </span>
              <h3 className="font-serif text-[1.375rem] leading-tight font-medium text-ink col-span-2 md:col-span-1">
                {page.title}
              </h3>
              <p className="font-sans text-[0.9375rem] text-ink-65 leading-[1.6] max-w-[60ch] col-span-2 md:col-span-1">
                {page.desc}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* MODELO ECONÔMICO */}
      <section className="bg-paper-50 border-y border-neutral-10 py-12 md:py-20">
        <div className="container-wide">
          <div className="grid gap-6 lg:gap-12 lg:grid-cols-[1fr_1.6fr] mb-8 md:mb-10">
            <div>
              <Eyebrow className="mb-4">02 · Modelo econômico</Eyebrow>
              <Display as="h2" size="m">Uma só conta. Do cliente.</Display>
            </div>
            <Body size="lg">
              Duas linhas, ambas registradas em contrato e auditáveis: um setup fee único na
              implementação, e uma taxa sobre AUM a partir da operação. Nenhuma outra forma de
              remuneração — direta ou indireta — é aceita.
            </Body>
          </div>

          <div className="grid gap-5 md:grid-cols-3 mb-8 md:mb-12">
            <Card variant="bordered" padding="lg" className="gap-3">
              <CardEyebrow>Baixa complexidade</CardEyebrow>
              <Numeric size="lg" className="text-[2rem]">R$ 120.000</Numeric>
              <CardBody>Holding simples, sucessão direta, sem offshore.</CardBody>
            </Card>
            <Card variant="bordered" padding="lg" className="gap-3">
              <CardEyebrow>Média complexidade</CardEyebrow>
              <Numeric size="lg" className="text-[2rem]">R$ 180k – R$ 240k</Numeric>
              <CardBody>Múltiplas empresas, sucessão entre 3+ herdeiros, offshore simples.</CardBody>
            </Card>
            <Card variant="bordered" padding="lg" className="gap-3">
              <CardEyebrow>Alta complexidade</CardEyebrow>
              <Numeric size="lg" className="text-[2rem]">até R$ 300.000</Numeric>
              <CardBody>M&A em aberto, multi-jurisdição offshore, governança familiar densa.</CardBody>
            </Card>
          </div>

          <Eyebrow className="mb-4">Taxa sobre AUM — tiers</Eyebrow>
          <div className="border border-neutral-20 bg-paper overflow-x-auto">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="border-b border-neutral-20">
                  <th className="text-left font-sans text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-neutral-50 px-5 py-4">
                    Faixa de AUM
                  </th>
                  <th className="text-right font-sans text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-neutral-50 px-5 py-4">
                    Taxa a.a.
                  </th>
                  <th className="text-right font-sans text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-neutral-50 px-5 py-4">
                    Exemplo · R$ 80M
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-10">
                  <td className="px-5 py-4 font-sans text-ink-65">Até R$ 50M</td>
                  <td className="px-5 py-4 text-right font-mono tabular-nums text-ink">0,75 %</td>
                  <td className="px-5 py-4 text-right font-mono tabular-nums text-ink">R$ 375.000</td>
                </tr>
                <tr className="border-b border-neutral-10">
                  <td className="px-5 py-4 font-sans text-ink-65">R$ 50M – R$ 150M</td>
                  <td className="px-5 py-4 text-right font-mono tabular-nums text-ink">0,60 %</td>
                  <td className="px-5 py-4 text-right font-mono tabular-nums text-ink">R$ 180.000</td>
                </tr>
                <tr className="border-b border-neutral-10">
                  <td className="px-5 py-4 font-sans text-ink-65">Acima de R$ 150M</td>
                  <td className="px-5 py-4 text-right font-mono tabular-nums text-ink">0,45 %</td>
                  <td className="px-5 py-4 text-right font-mono tabular-nums text-neutral-50">—</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-sans font-medium text-ink">Total anual — R$ 80M de AUM</td>
                  <td className="px-5 py-4"></td>
                  <td className="px-5 py-4 text-right font-mono tabular-nums font-medium text-accent text-[1.125rem]">
                    R$ 555.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-sans text-[0.8125rem] text-neutral-50 mt-3">
            Faturamento trimestral antecipado. Ajuste anual por IPCA.
          </p>
        </div>
      </section>

      {/* PULL */}
      <section className="container-prose py-12 md:py-20">
        <PullQuote cite="Fecho da proposta — página 10">
          A primeira firma patrimonial da sua vida. A última que você vai precisar contratar.
        </PullQuote>
      </section>
    </article>
  )
}

const pages = [
  { num: '01', title: 'Capa', desc: 'Logo + tagline + identificação do cliente + data. Fundo antracite.' },
  { num: '02', title: 'Manifesto', desc: 'Variante 140 palavras do manifesto. Abertura narrativa que enquadra todo o documento.' },
  { num: '03', title: 'Posicionamento', desc: 'Os dois inimigos (private banking de prateleira, wealth advisor IG) + a palavra que MAGNO reivindica.' },
  { num: '04', title: 'Modelo de atendimento', desc: 'As quatro linhas do kernel explicadas — cliente no centro, arquitetura, partners, fee-only.' },
  { num: '05', title: 'Escopo de atuação', desc: 'Estrutura patrimonial · Sucessão · Tributação/offshore · Alocação. Mais: o que MAGNO não faz.' },
  { num: '06', title: 'Fases da entrega', desc: 'Roteiro de 10 a 14 semanas em três fases: diagnóstico → arquitetura → implementação + IPS.' },
  { num: '07', title: 'Modelo econômico', desc: 'Setup fee explícito por complexidade + tiers de AUM fee. Tabela auditável com exemplo R$ 80M.' },
  { num: '08', title: 'Time e governança', desc: 'Lead partner + second partner. Investment Committee com consultor externo sênior.' },
  { num: '09', title: 'Escopo contratado', desc: 'Página personalizada com variáveis do cliente específico — valores, frentes, próximos passos.' },
  { num: '10', title: 'Fecho e assinatura', desc: 'Capa final em acento bordô. Campos de assinatura. Tagline institucional.' },
]
