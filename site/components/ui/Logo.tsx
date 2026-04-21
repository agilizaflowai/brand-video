import { cn } from '@/lib/cn'

type LogoVariant = 'full' | 'wordmark' | 'monogram' | 'monogram-simple'

interface LogoProps {
  variant?: LogoVariant
  className?: string
  title?: string
}

const MGlyph = () => (
  <g fill="currentColor">
    <rect x="22.5" y="26" width="7.5" height="48" />
    <rect x="19" y="26" width="14.5" height="1.6" />
    <rect x="19" y="72.4" width="14.5" height="1.6" />
    <rect x="70" y="26" width="7.5" height="48" />
    <rect x="66.5" y="26" width="14.5" height="1.6" />
    <rect x="66.5" y="72.4" width="14.5" height="1.6" />
    <polygon points="30,26 33.2,26 51.6,61 48.4,61" />
    <polygon points="66.8,26 70,26 51.6,61 48.4,61" />
  </g>
)

const MGlyphSimple = () => (
  <g fill="currentColor">
    <rect x="22.5" y="26" width="7.5" height="48" />
    <rect x="70" y="26" width="7.5" height="48" />
    <polygon points="30,26 33.2,26 51.6,61 48.4,61" />
    <polygon points="66.8,26 70,26 51.6,61 48.4,61" />
  </g>
)

export function Logo({ variant = 'full', className, title = 'MAGNO' }: LogoProps) {
  if (variant === 'monogram' || variant === 'monogram-simple') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        role="img"
        aria-label={title}
        className={cn('shrink-0', className)}
      >
        <title>{title}</title>
        {variant === 'monogram' && (
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.1" />
        )}
        {variant === 'monogram-simple' ? <MGlyphSimple /> : <MGlyph />}
      </svg>
    )
  }

  if (variant === 'wordmark') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 720 130"
        role="img"
        aria-label={title}
        className={cn('shrink-0', className)}
      >
        <title>{title}</title>
        <text
          x="360"
          y="100"
          textAnchor="middle"
          fontSize="104"
          fontWeight="500"
          letterSpacing="13"
          fill="currentColor"
          fontFamily="var(--font-fraunces), Fraunces, 'GT Sectra', 'Tiempos Headline', Georgia, serif"
        >
          MAGNO
        </text>
      </svg>
    )
  }

  // Full lockup: monograma + wordmark
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 760 130"
      role="img"
      aria-label={title}
      className={cn('shrink-0', className)}
    >
      <title>{title}</title>
      <svg x="5" y="15" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.1" />
        <MGlyph />
      </svg>
      <line x1="140" y1="28" x2="140" y2="102" stroke="currentColor" strokeWidth="0.6" opacity="0.45" />
      <text
        x="175"
        y="100"
        textAnchor="start"
        fontSize="96"
        fontWeight="500"
        letterSpacing="12"
        fill="currentColor"
        fontFamily="var(--font-fraunces), Fraunces, 'GT Sectra', 'Tiempos Headline', Georgia, serif"
      >
        MAGNO
      </text>
    </svg>
  )
}
