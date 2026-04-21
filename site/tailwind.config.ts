import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      sm:  '640px',
      md:  '768px',
      lg:  '1024px',
      xl:  '1280px',
      '2xl': '1536px',
    },
    spacing: {
      0: '0',
      px: '1px',
      0.5: '0.125rem',   //  2 px
      1:   '0.25rem',    //  4 px
      1.5: '0.375rem',   //  6 px
      2:   '0.5rem',     //  8 px
      2.5: '0.625rem',   // 10 px
      3:   '0.75rem',    // 12 px
      3.5: '0.875rem',   // 14 px
      4:   '1rem',       // 16 px
      5:   '1.5rem',     // 24 px — escala institucional a partir daqui
      6:   '2rem',       // 32 px
      7:   '2.5rem',     // 40 px
      8:   '3rem',       // 48 px
      10:  '4rem',       // 64 px
      12:  '5rem',       // 80 px
      14:  '5.5rem',     // 88 px
      16:  '6rem',       // 96 px
      20:  '8rem',       // 128 px
      24:  '10rem',      // 160 px
      28:  '12rem',      // 192 px
      32:  '14rem',      // 224 px
    },
    borderRadius: {
      none: '0',
      DEFAULT: '0',
      sm: '2px',
      md: '4px',
      lg: '8px',
      full: '9999px',
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E0E10',
          95: '#18181A',
          80: '#2E2E31',
          65: '#4A4A4E',
        },
        paper: {
          DEFAULT: '#F4EFE6',
          50: '#EEE9DD',
          deep: '#E8E2D5',
          pure: '#FFFFFF',
        },
        neutral: {
          50: '#6B6A67',
          35: '#8B8A85',
          20: '#B8B3A9',
          10: '#D8D3C8',
        },
        accent: {
          DEFAULT: '#5A1F25',
          dim: '#3E1419',
          lift: '#7A2E36',
        },
        success: '#3A5A40',
        warning: '#8A6A2E',
        danger:  '#5A1F25',
        info:    '#2E4A5A',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Fraunces', 'GT Sectra', 'Tiempos Headline', 'Bodoni Moda', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono:  ['var(--font-plex-mono)', '"IBM Plex Mono"', '"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight:   '-0.01em',
        wide:    '0.05em',
        wider:   '0.12em',
        widest:  '0.2em',
      },
      maxWidth: {
        tight:  '40rem',
        prose:  '48rem',
        wide:   '75rem',
        page:   '90rem',
      },
    },
  },
  plugins: [],
}

export default config
