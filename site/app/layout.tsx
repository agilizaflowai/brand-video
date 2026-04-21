import type { Metadata } from 'next'
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google'
import { Navbar, Footer } from '@/components/ui'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://magno.capital'),
  title: {
    default: 'MAGNO — Arquitetura antes de alocação.',
    template: '%s · MAGNO',
  },
  description:
    'Family office boutique independente para empresários brasileiros de 1ª geração em fase pós-liquidez. Fee-only, sem rebate, sem produto de terceiros. Partners com 15+ anos de mercado no client-facing.',
  keywords: [
    'family office',
    'wealth management Brasil',
    'gestão patrimonial',
    'fee-only',
    'arquitetura patrimonial',
    'pós-liquidez',
    'holding patrimonial',
    'sucessão',
  ],
  openGraph: {
    title: 'MAGNO — Arquitetura antes de alocação.',
    description:
      'Family office boutique independente. Fee-only, partners no client-facing, zero rebate.',
    url: 'https://magno.capital',
    siteName: 'MAGNO',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="min-h-screen bg-paper text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
