import { type HTMLAttributes, type ReactNode, createElement } from 'react'
import { cn } from '@/lib/cn'

// ============================================================================
// Display (Fraunces serif — use para H1, H2, hero)
// ============================================================================

type DisplaySize = '2xl' | 'xl' | 'l' | 'm' | 's'

interface DisplayProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p'
  size?: DisplaySize
  balance?: boolean
}

const displaySizeClasses: Record<DisplaySize, string> = {
  '2xl': 'text-[clamp(2.75rem,6vw_+_1rem,5.625rem)] leading-[0.95] tracking-[-0.02em] type-display-opsz-xl',
  xl:    'text-[clamp(2.5rem,5vw_+_1rem,4.5rem)] leading-[1.00] tracking-[-0.015em] type-display-opsz-lg',
  l:     'text-[clamp(2rem,4vw_+_0.75rem,3.5rem)] leading-[1.03] tracking-[-0.01em] type-display-opsz-lg',
  m:     'text-[clamp(1.625rem,3vw_+_0.5rem,2.75rem)] leading-[1.08] tracking-[-0.005em] type-display-opsz-md',
  s:     'text-[2.125rem] leading-[1.15] type-display-opsz-sm',
}

export function Display({ as = 'h1', size = 'xl', balance = true, className, children, ...rest }: DisplayProps) {
  return createElement(
    as,
    {
      className: cn('font-serif font-medium text-ink', displaySizeClasses[size], balance && 'text-balance', className),
      ...rest,
    },
    children,
  )
}

// ============================================================================
// Heading (Inter — H5, H6, sans-heading transitions)
// ============================================================================

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'h4' | 'h5' | 'h6'
}

const headingSizeClasses = {
  h4: 'font-serif text-[1.625rem] leading-[1.25] font-medium type-display-opsz-sm',
  h5: 'font-sans text-[1.25rem] leading-[1.35] font-semibold tracking-[-0.005em]',
  h6: 'font-sans text-[1.0625rem] leading-[1.45] font-semibold',
}

export function Heading({ as = 'h4', size, className, children, ...rest }: HeadingProps) {
  const computed = size ?? (as === 'h3' || as === 'h4' ? 'h4' : as)
  return createElement(
    as,
    {
      className: cn('text-ink text-balance', headingSizeClasses[computed as keyof typeof headingSizeClasses], className),
      ...rest,
    },
    children,
  )
}

// ============================================================================
// Lead (parágrafo de abertura)
// ============================================================================

export function Lead({ className, children, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'font-sans text-[clamp(1.0625rem,0.75vw_+_0.95rem,1.25rem)] leading-[1.55] text-ink-65 max-w-[62ch] text-pretty',
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  )
}

// ============================================================================
// Body
// ============================================================================

type BodySize = 'default' | 'sm' | 'lg'

interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: BodySize
  muted?: boolean
}

const bodySizeClasses: Record<BodySize, string> = {
  default: 'text-[1rem] leading-[1.65]',
  sm:      'text-[0.875rem] leading-[1.55]',
  lg:      'text-[1.125rem] leading-[1.65]',
}

export function Body({ size = 'default', muted, className, children, ...rest }: BodyProps) {
  return (
    <p
      className={cn(
        'font-sans max-w-[65ch] text-pretty',
        bodySizeClasses[size],
        muted ? 'text-neutral-50' : 'text-ink-65',
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  )
}

// ============================================================================
// Eyebrow (label ALL CAPS tracking amplo)
// ============================================================================

export function Eyebrow({ className, children, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-sans text-[0.75rem] font-medium uppercase tracking-[0.14em] text-neutral-50',
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  )
}

// ============================================================================
// Caption / microcopy
// ============================================================================

export function Caption({ className, children, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn('font-sans text-[0.8125rem] leading-[1.45] text-neutral-50', className)}
      {...rest}
    >
      {children}
    </span>
  )
}

// ============================================================================
// Numeric (IBM Plex Mono — números patrimoniais)
// ============================================================================

type NumericSize = 'sm' | 'md' | 'lg'

interface NumericProps extends HTMLAttributes<HTMLSpanElement> {
  size?: NumericSize
  children: ReactNode
}

const numericSizeClasses: Record<NumericSize, string> = {
  sm: 'text-[0.8125rem]',
  md: 'text-[0.9375rem]',
  lg: 'text-[1.125rem]',
}

export function Numeric({ size = 'md', className, children, ...rest }: NumericProps) {
  return (
    <span
      className={cn(
        'font-mono font-medium tabular-nums text-ink',
        numericSizeClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  )
}

// ============================================================================
// Pull-quote editorial — com aspa ornamental
// ============================================================================

interface PullQuoteProps {
  className?: string
  children: ReactNode
  cite?: string
  ornament?: boolean
}

export function PullQuote({ className, children, cite, ornament = true }: PullQuoteProps) {
  return (
    <figure className={cn('relative my-12 max-w-[58ch]', className)}>
      {ornament && (
        <span
          aria-hidden="true"
          className="absolute -top-4 -left-1 font-serif text-[4.5rem] leading-none italic text-accent/70 select-none pointer-events-none"
        >
          &ldquo;
        </span>
      )}
      <blockquote className="border-l-2 border-accent pl-6 pt-2">
        <p className="font-serif text-[clamp(1.375rem,1vw_+_1.125rem,1.625rem)] leading-[1.35] italic text-ink type-display-opsz-sm">
          {children}
        </p>
      </blockquote>
      {cite && (
        <figcaption className="mt-4 font-sans text-[0.8125rem] text-neutral-50 tracking-[0.01em] pl-6">
          — {cite}
        </figcaption>
      )}
    </figure>
  )
}
