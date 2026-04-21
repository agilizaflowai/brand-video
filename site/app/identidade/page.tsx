import { Display, Eyebrow, Body, Logo, Numeric } from '@/components/ui'

export const metadata = { title: 'Identidade' }

export default function IdentidadePage() {
  return (
    <article className="pb-14 md:pb-20">
      <header className="container-wide py-14 md:py-20 border-b border-neutral-10">
        <Eyebrow className="mb-6">Fase 03 — Identidade visual</Eyebrow>
        <Display as="h1" size="xl" className="max-w-[22ch]">
          Sistema visual — logo, cor, tipografia, ícone e imagem.
        </Display>
        <Body size="lg" className="mt-8 max-w-[60ch]">
          Cinco decisões canônicas que, juntas, fazem com que qualquer peça de MAGNO seja
          reconhecível mesmo sem logo. Nenhuma é exagerada — a soma é o que constrói o tom.
        </Body>

        <dl className="grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-5 mt-8 md:mt-10 border-t border-neutral-10 pt-6 md:pt-8">
          {[
            { n: '01', label: 'Logo' },
            { n: '02', label: 'Paleta' },
            { n: '03', label: 'Tipografia' },
            { n: '04', label: 'Grid & Space' },
            { n: '05', label: 'Ícone & Imagem' },
          ].map((item) => (
            <div key={item.n} className="flex flex-col gap-1">
              <dt className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">{item.n}</dt>
              <dd className="font-serif text-[1.125rem] leading-tight text-ink type-display-opsz-body">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      {/* ==================== 01 · LOGO ==================== */}
      <section className="container-wide py-12 md:py-20">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow className="mb-4">01 · Logo</Eyebrow>
            <Display as="h2" size="m">Wordmark serifado + monograma em selo.</Display>
            <Body className="mt-6">
              Fraunces 500 com tracking +120. Monograma M construído em paths vetoriais com
              serifas-brackets, dentro de círculo fino — referência ao selo de cera editorial.
              Três variações canônicas; qualquer uso fora dessas é exceção documentada.
            </Body>
            <div className="mt-8 grid gap-3 font-mono text-[0.8125rem] tabular-nums text-ink-65">
              <div className="flex justify-between"><span>Clearspace mínimo</span><span>= altura de X</span></div>
              <div className="flex justify-between"><span>Tamanho mín. wordmark</span><span>18 px</span></div>
              <div className="flex justify-between"><span>Tamanho mín. monograma</span><span>24 px</span></div>
              <div className="flex justify-between"><span>Radius do selo</span><span>50 %</span></div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-paper-50 border border-neutral-20 p-12 flex items-center justify-center">
              <Logo variant="full" className="h-14 text-ink" />
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-paper-50 border border-neutral-20 p-8 flex items-center justify-center">
                <Logo variant="wordmark" className="h-8 text-ink" />
              </div>
              <div className="bg-paper-50 border border-neutral-20 p-8 flex items-center justify-center">
                <Logo variant="monogram" className="h-16 w-16 text-ink" />
              </div>
              <div className="bg-ink border border-ink p-8 flex items-center justify-center">
                <Logo variant="monogram" className="h-16 w-16 text-paper" />
              </div>
            </div>
            <div className="bg-accent p-10 flex items-center justify-center">
              <Logo variant="full" className="h-12 text-paper" />
            </div>
          </div>
        </div>

      </section>

      {/* ==================== 02 · PALETA ==================== */}
      <section className="bg-paper-50 border-y border-neutral-10 py-12 md:py-20">
        <div className="container-wide">
          <div className="grid gap-6 lg:gap-12 lg:grid-cols-[1fr_2fr] mb-8 md:mb-10">
            <div>
              <Eyebrow className="mb-4">02 · Paleta</Eyebrow>
              <Display as="h2" size="m">Antracite, pergaminho e um acento único.</Display>
            </div>
            <Body size="lg">
              Três cores canônicas e uma escala quente de neutros. Zero gradiente. Zero
              semântico de fintech. Contraste principal — ink sobre paper — chega a
              18,7 : 1 (editorial-grade).
            </Body>
          </div>

          {/* Swatches principais — formato RAXO-grande, editorial */}
          <div className="grid gap-3 md:grid-cols-3 mb-10 md:mb-14">
            <BigSwatch color="#0E0E10" name="Antracite" token="ink" hex="#0E0E10" usage="Texto + fundo noite. 70–80 % da composição escura." mode="dark" />
            <BigSwatch color="#F4EFE6" name="Pergaminho" token="paper" hex="#F4EFE6" usage="Fundo dia. Base editorial; 70–80 % da composição clara." mode="light" />
            <BigSwatch color="#5A1F25" name="Bordô profundo" token="accent" hex="#5A1F25" usage="Acento único. ≤ 5 % da peça. Nunca em massa." mode="dark" />
          </div>

          {/* Regra de uso — tipo RAXO */}
          <div className="bg-paper border-l-2 border-accent pl-6 py-5 mb-10 md:mb-14 max-w-[68ch]">
            <div className="font-sans text-[0.8125rem] uppercase tracking-[0.22em] text-accent mb-1">
              Regra crítica
            </div>
            <p className="font-sans text-[1rem] leading-[1.6] text-ink">
              O bordô é escasso por desenho. Quando aparece em algum lugar, deixa de ser especial.
              Use-o para guiar o olhar ao elemento mais importante de cada peça — nada mais.
            </p>
          </div>

          {/* Ratios de contraste */}
          <Eyebrow className="mb-4">Contraste WCAG</Eyebrow>
          <div className="grid gap-3 md:grid-cols-3 mb-10 md:mb-14">
            <ContrastCard bg="#F4EFE6" fg="#0E0E10" label="ink / paper" ratio="18.7 : 1" grade="AAA" />
            <ContrastCard bg="#0E0E10" fg="#F4EFE6" label="paper / ink" ratio="18.7 : 1" grade="AAA" />
            <ContrastCard bg="#F4EFE6" fg="#5A1F25" label="accent / paper" ratio="8.9 : 1" grade="AAA" />
          </div>

          {/* Escala de neutros */}
          <Eyebrow className="mb-4">Escala de neutros quentes</Eyebrow>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {[
              { hex: '#0E0E10', label: 'ink' },
              { hex: '#4A4A4E', label: 'ink-65' },
              { hex: '#6B6A67', label: 'neutral-50' },
              { hex: '#8B8A85', label: 'neutral-35' },
              { hex: '#B8B3A9', label: 'neutral-20' },
              { hex: '#D8D3C8', label: 'neutral-10' },
              { hex: '#F4EFE6', label: 'paper' },
            ].map((sw) => (
              <div key={sw.label} className="flex flex-col gap-2">
                <div className="aspect-square border border-neutral-20" style={{ background: sw.hex }} />
                <div className="font-mono text-[0.6875rem] text-neutral-50 tabular-nums">{sw.hex}</div>
                <div className="font-sans text-[0.75rem] text-ink">{sw.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 03 · TIPOGRAFIA ==================== */}
      <section className="container-wide py-12 md:py-20">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow className="mb-4">03 · Tipografia</Eyebrow>
            <Display as="h2" size="m">Fraunces + Inter + IBM Plex Mono.</Display>
            <Body className="mt-6">
              Uma serifa com personalidade para título. Uma neo-grotesca invisível para corpo.
              Uma monoespaçada para qualquer número — porque número é ativo auditável, não
              decoração.
            </Body>
          </div>

          <div className="grid gap-10">
            {/* Fraunces */}
            <div>
              <div className="flex items-baseline justify-between border-b border-neutral-10 pb-3 mb-6">
                <Eyebrow>Display · Fraunces</Eyebrow>
                <span className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">
                  500 · opsz 72 · SOFT 0
                </span>
              </div>
              <div className="font-serif text-[5rem] leading-[0.95] font-medium tracking-tight text-ink type-display-opsz-lg">
                Arquitetura
              </div>
              <div className="font-serif text-[2rem] leading-[1.1] font-medium text-ink mt-6 type-display-opsz-sm max-w-[28ch]">
                Para o empresário que construiu patrimônio do zero — e precisa de estrutura, não
                de prateleira.
              </div>
              <div className="font-sans text-[0.8125rem] text-neutral-50 mt-4 max-w-[60ch]">
                Eixos variáveis. <code className="font-mono">opsz</code> escala de 48 a 144.{' '}
                <code className="font-mono">SOFT</code> sempre em 0 — terminações secas, sem
                "wonky".
              </div>
            </div>

            {/* Inter */}
            <div>
              <div className="flex items-baseline justify-between border-b border-neutral-10 pb-3 mb-6">
                <Eyebrow>Corpo · Inter</Eyebrow>
                <span className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">
                  400 · 16–20 px · 65 ch
                </span>
              </div>
              <p className="font-sans text-[1.125rem] leading-[1.65] text-ink max-w-[55ch]">
                A primeira entrega de MAGNO a um novo cliente não é uma carteira. É o desenho
                da arquitetura: holding, sucessão, governança, tributário, <em>offshore</em>.
                A alocação é consequência — não o ponto de partida.
              </p>
              <p className="font-sans text-[0.9375rem] leading-[1.65] text-ink-65 mt-3 max-w-[55ch]">
                Parágrafo secundário em 15 px / 1.65. Usado em legendas, notas e metadata.
                A escala de corpo tem apenas três passos — 14, 16, 20 — para evitar hierarquia
                ambígua.
              </p>
            </div>

            {/* Plex Mono */}
            <div>
              <div className="flex items-baseline justify-between border-b border-neutral-10 pb-3 mb-6">
                <Eyebrow>Números · IBM Plex Mono</Eyebrow>
                <span className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">
                  500 · tabular-nums · decimal-align
                </span>
              </div>
              <div className="font-mono text-[1.5rem] font-medium tabular-nums text-ink space-y-1">
                <div>R$ 82.400.000,00</div>
                <div>0,75 % a.a. &nbsp; 45 bps</div>
                <div className="text-accent">+ 12,8 %</div>
              </div>
              <div className="font-sans text-[0.8125rem] text-neutral-50 mt-4">
                Usada em tabelas de patrimônio, propostas, fichas técnicas e qualquer número
                auditável. Nunca usada para texto corrido.
              </div>
            </div>

            {/* Escala tipográfica */}
            <div>
              <div className="flex items-baseline justify-between border-b border-neutral-10 pb-3 mb-6">
                <Eyebrow>Escala canônica</Eyebrow>
                <span className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">9 degraus</span>
              </div>
              <div className="grid gap-3 font-mono text-[0.8125rem] tabular-nums">
                {[
                  ['Display 2XL', '96 px', '1.00', 'Fraunces 500'],
                  ['Display XL',  '72 px', '1.02', 'Fraunces 500'],
                  ['Display L',   '56 px', '1.05', 'Fraunces 500'],
                  ['Display M',   '44 px', '1.10', 'Fraunces 500'],
                  ['Display S',   '32 px', '1.18', 'Fraunces 500'],
                  ['Heading',     '24 px', '1.30', 'Inter 500'],
                  ['Lead',        '20 px', '1.55', 'Inter 400'],
                  ['Body',        '16 px', '1.65', 'Inter 400'],
                  ['Caption',     '13 px', '1.50', 'Inter 500 · uppercase'],
                ].map(([name, size, lh, family]) => (
                  <div key={name} className="grid grid-cols-[1.2fr_0.6fr_0.6fr_1.6fr] gap-4 text-ink-65 py-2 border-b border-neutral-10">
                    <span className="text-ink">{name}</span>
                    <span>{size}</span>
                    <span>lh {lh}</span>
                    <span>{family}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 04 · GRID & SPACING ==================== */}
      <section className="bg-ink text-paper py-12 md:py-20">
        <div className="container-wide">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <Eyebrow className="mb-4 text-paper/60">04 · Grid &amp; Spacing</Eyebrow>
              <Display as="h2" size="m" className="text-paper">Unidade base 8 pt. Radius 0.</Display>
              <p className="font-sans text-[0.9375rem] leading-[1.65] text-paper/75 mt-6 max-w-[42ch]">
                O espaço em branco é ativo da marca. Toda medida é múltipla de 8 (ou 4 em micro).
                Radius zero em qualquer elemento — exceção documentada, não liberdade diária.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <DarkMetric title="Grid" value="8 pt" note="Toda medida é múltipla de 8 (ou 4 em micro)." />
              <DarkMetric title="Radius" value="0 px" note="Cantos retos em tudo — radius > 0 é exceção documentada." />
              <DarkMetric title="Container canônico" value="1200 px" note="Padrão institucional. Prose máxima 640–768 px." />
              <DarkMetric title="Medida de parágrafo" value="65 ch" note="Clássica editorial. Acima de 75 ch o olho se perde." />
              <DarkMetric title="Stroke hairline" value="1 px" note="Linhas finas neutral-10 em 70 % dos divisores." />
              <DarkMetric title="Transição padrão" value="150 ms" note="Color-only, ease-out. Sem animação decorativa." />
            </div>
          </div>

          {/* Escala de espaçamento visual */}
          <div className="mt-10 md:mt-14">
            <div className="flex items-baseline justify-between border-b border-paper/15 pb-3 mb-6">
              <span className="eyebrow-wide text-paper/60">Escala de espaçamento</span>
              <span className="font-mono text-[0.75rem] text-paper/50 tabular-nums">base 8</span>
            </div>
            <div className="grid grid-cols-6 md:grid-cols-9 gap-3">
              {[4, 8, 12, 16, 24, 32, 48, 64, 96].map((px) => (
                <div key={px} className="flex flex-col gap-2">
                  <div className="bg-paper" style={{ height: Math.max(px * 0.6, 4) }} />
                  <span className="font-mono text-[0.6875rem] text-paper/60 tabular-nums">{px} px</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 05 · ÍCONE & IMAGEM ==================== */}
      <section className="container-wide py-12 md:py-20">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow className="mb-4">05 · Ícone &amp; Imagem</Eyebrow>
            <Display as="h2" size="m">Linhas finas. Retratos duros.</Display>
            <Body className="mt-6">
              Iconografia linear de 1.25 pt, cantos retos. Imagem é retrato P&amp;B de alta
              direção ou objeto patrimonial — nunca stock de pessoas sorrindo, nunca cena flat.
            </Body>
          </div>

          <div className="flex flex-col gap-10 md:gap-14">
            {/* Iconografia */}
            <div>
              <div className="flex items-baseline justify-between border-b border-neutral-10 pb-3 mb-6">
                <Eyebrow>Iconografia linear</Eyebrow>
                <span className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">
                  stroke 1.25 · 24 × 24
                </span>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-0 border border-neutral-20">
                {icons.map((icon) => (
                  <div
                    key={icon.name}
                    className="aspect-square flex flex-col items-center justify-center gap-3 border-r border-b border-neutral-20 -mb-px -mr-px p-4"
                  >
                    <div className="text-ink">{icon.svg}</div>
                    <span className="font-mono text-[0.6875rem] text-neutral-50">{icon.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagery direction */}
            <div>
              <div className="flex items-baseline justify-between border-b border-neutral-10 pb-3 mb-6">
                <Eyebrow>Direção fotográfica</Eyebrow>
                <span className="font-mono text-[0.75rem] text-neutral-50 tabular-nums">
                  P&amp;B · grão leve · 4:5
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {imagery.map((img) => (
                  <div key={img.label} className="flex flex-col gap-3">
                    <div
                      className="relative aspect-[4/5] bg-ink overflow-hidden"
                      style={{ backgroundImage: img.pattern, backgroundSize: 'cover' }}
                    >
                      <div className="absolute inset-0 bg-ink/40" />
                      <div className="absolute inset-0 flex items-end p-5">
                        <div className="flex flex-col gap-1">
                          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-paper/60">
                            {img.code}
                          </span>
                          <span className="font-serif text-[1.125rem] leading-tight text-paper type-display-opsz-body">
                            {img.label}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="font-sans text-[0.8125rem] leading-[1.5] text-ink-65">{img.desc}</p>
                  </div>
                ))}
              </div>
              <p className="font-sans text-[0.8125rem] italic text-neutral-50 mt-6 max-w-[60ch]">
                As três imagens acima são placeholders de direção. Produção real é curadoria
                — fotógrafo de retrato editorial, nunca banco de imagens.
              </p>
            </div>

            {/* Do / Don't */}
            <div>
              <div className="flex items-baseline justify-between border-b border-neutral-10 pb-3 mb-6">
                <Eyebrow>Do &amp; Don't — referência rápida</Eyebrow>
              </div>
              <div className="grid gap-0 md:grid-cols-2 border border-neutral-20">
                <div className="p-6 border-b md:border-b-0 md:border-r border-neutral-20">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="font-mono text-[0.875rem] text-ink">✓</span>
                    <span className="font-sans text-[0.75rem] uppercase tracking-[0.22em] text-ink">Do</span>
                  </div>
                  <ul className="flex flex-col gap-3 font-sans text-[0.9375rem] leading-[1.55] text-ink-65">
                    {dos.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className="font-mono text-[0.875rem] text-ink mt-[1px]">—</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="font-mono text-[0.875rem] text-accent">×</span>
                    <span className="font-sans text-[0.75rem] uppercase tracking-[0.22em] text-accent">Don't</span>
                  </div>
                  <ul className="flex flex-col gap-3 font-sans text-[0.9375rem] leading-[1.55] text-ink-65">
                    {donts.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className="font-mono text-[0.875rem] text-accent mt-[1px]">—</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

/* ============================================================
   Subcomponentes locais
   ============================================================ */

function BigSwatch({
  color,
  name,
  token,
  hex,
  usage,
  mode,
}: {
  color: string
  name: string
  token: string
  hex: string
  usage: string
  mode: 'light' | 'dark'
}) {
  const fg = mode === 'dark' ? '#F4EFE6' : '#0E0E10'
  return (
    <div className="flex flex-col">
      <div
        className="aspect-[4/3] flex flex-col justify-between p-6 border border-neutral-20"
        style={{ background: color, color: fg }}
      >
        <div className="font-mono text-[0.75rem] tabular-nums opacity-70">{hex.toUpperCase()}</div>
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] opacity-70">
            {token}
          </span>
          <span className="font-serif text-[2rem] leading-[1.05] font-medium type-display-opsz-sm">
            {name}
          </span>
        </div>
      </div>
      <p className="font-sans text-[0.875rem] leading-[1.5] text-ink-65 mt-3">{usage}</p>
    </div>
  )
}

function ContrastCard({ bg, fg, label, ratio, grade }: { bg: string; fg: string; label: string; ratio: string; grade: string }) {
  return (
    <div className="border border-neutral-20">
      <div
        className="aspect-[16/9] flex items-center justify-center p-6"
        style={{ background: bg, color: fg }}
      >
        <span className="font-serif text-[2rem] font-medium tracking-tight type-display-opsz-sm">
          MAGNO
        </span>
      </div>
      <div className="bg-paper px-4 py-3 flex items-baseline justify-between border-t border-neutral-20">
        <span className="font-mono text-[0.75rem] text-ink-65 tabular-nums">{label}</span>
        <span className="font-mono text-[0.8125rem] font-medium tabular-nums text-ink">
          {ratio} · {grade}
        </span>
      </div>
    </div>
  )
}

function DarkMetric({ title, value, note }: { title: string; value: string; note: string }) {
  return (
    <div className="border-l-2 border-accent pl-5">
      <div className="font-sans text-[0.6875rem] uppercase tracking-[0.22em] text-paper/55 mb-2">
        {title}
      </div>
      <div className="font-serif text-[2.25rem] leading-[1.05] font-medium text-paper type-display-opsz-sm">
        {value}
      </div>
      <p className="font-sans text-[0.8125rem] leading-[1.5] text-paper/65 mt-3 max-w-[34ch]">
        {note}
      </p>
    </div>
  )
}

/* ============================================================
   Sets
   ============================================================ */

const iconStroke = 'stroke-[1.25] fill-none'

const icons = [
  {
    name: 'arquitetura',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" className={iconStroke} stroke="currentColor">
        <path d="M3 20V9l9-5 9 5v11" />
        <path d="M9 20v-6h6v6" />
        <path d="M3 20h18" />
      </svg>
    ),
  },
  {
    name: 'holding',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" className={iconStroke} stroke="currentColor">
        <path d="M12 3v18" />
        <path d="M6 9h12" />
        <path d="M4 21h16" />
        <path d="M7 9v12" />
        <path d="M17 9v12" />
      </svg>
    ),
  },
  {
    name: 'sucessao',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" className={iconStroke} stroke="currentColor">
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <circle cx="6" cy="15" r="2" />
        <circle cx="18" cy="15" r="2" />
        <path d="M12 11l-6 2" />
        <path d="M12 11l6 2" />
      </svg>
    ),
  },
  {
    name: 'governanca',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" className={iconStroke} stroke="currentColor">
        <path d="M4 20V6l8-3 8 3v14" />
        <path d="M8 20v-8h8v8" />
        <path d="M10 12v8" />
        <path d="M14 12v8" />
      </svg>
    ),
  },
  {
    name: 'tributario',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" className={iconStroke} stroke="currentColor">
        <rect x="4" y="4" width="16" height="16" />
        <path d="M8 9h8" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </svg>
    ),
  },
  {
    name: 'offshore',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" className={iconStroke} stroke="currentColor">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c3 3 4 6 4 9s-1 6-4 9" />
        <path d="M12 3c-3 3-4 6-4 9s1 6 4 9" />
      </svg>
    ),
  },
  {
    name: 'alocacao',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" className={iconStroke} stroke="currentColor">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v9l7 4" />
      </svg>
    ),
  },
  {
    name: 'diagnostico',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" className={iconStroke} stroke="currentColor">
        <circle cx="10" cy="10" r="6" />
        <path d="M15 15l5 5" />
      </svg>
    ),
  },
  {
    name: 'relatorio',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" className={iconStroke} stroke="currentColor">
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v3h3" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </svg>
    ),
  },
  {
    name: 'conselho',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" className={iconStroke} stroke="currentColor">
        <circle cx="8" cy="10" r="2.5" />
        <circle cx="16" cy="10" r="2.5" />
        <path d="M3 20c1-3 3-5 5-5s4 2 5 5" />
        <path d="M11 20c1-3 3-5 5-5s4 2 5 5" />
      </svg>
    ),
  },
  {
    name: 'risco',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" className={iconStroke} stroke="currentColor">
        <path d="M12 3l10 17H2z" />
        <path d="M12 10v5" />
        <circle cx="12" cy="17.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'arquivo',
    svg: (
      <svg width="26" height="26" viewBox="0 0 24 24" className={iconStroke} stroke="currentColor">
        <rect x="3" y="4" width="18" height="6" />
        <path d="M5 10v10h14V10" />
        <path d="M10 14h4" />
      </svg>
    ),
  },
]

const imagery = [
  {
    code: 'IMG 01',
    label: 'Retrato P&B — founder',
    desc: 'Retrato editorial em P&B, luz direcional, sem sorriso. Pose frontal ou 3/4. Grão leve.',
    pattern:
      'linear-gradient(135deg, #0E0E10 0%, #1a1a1e 35%, #2a2a2e 55%, #16161a 75%, #0E0E10 100%)',
  },
  {
    code: 'IMG 02',
    label: 'Arquitetura — interior sóbrio',
    desc: 'Sala de reunião, madeira escura, pedra, luz lateral. Nunca open-office genérico.',
    pattern:
      'linear-gradient(180deg, #2c2723 0%, #1e1a17 45%, #0c0a09 100%)',
  },
  {
    code: 'IMG 03',
    label: 'Objeto patrimonial',
    desc: 'Documento, livro, caneta, relógio mecânico, carta-papel. Sempre P&B. Nunca stock.',
    pattern:
      'radial-gradient(circle at 70% 40%, #3a342c 0%, #1a1612 45%, #0a0807 100%)',
  },
]

const dos = [
  'Espaço em branco como ativo — composições respiram.',
  'Tipografia como protagonista — o título carrega mais peso que qualquer outro elemento.',
  'Números em monoespaçada com alinhamento decimal.',
  'Linhas hairline para divisão — nunca sombra.',
  'Um acento bordô por peça — no máximo.',
  'Imagem é decisão editorial. Cada uma é curadoria, não ilustração.',
]

const donts = [
  'Gradiente colorido — nem que seja sutil.',
  'Emoji em material institucional.',
  'Exclamação em qualquer copy de marca.',
  'Ícone flat-amigável com cena ilustrada.',
  'Stock de pessoas sorrindo, aperto de mão, equipe comemorando.',
  'Buzzword: ecossistema, jornada, revolução, experiência, democratizar.',
]
