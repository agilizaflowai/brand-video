import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type CardVariant = 'default' | 'bordered' | 'elevated' | 'accent' | 'inverted'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  as?: 'div' | 'article' | 'section'
  padding?: 'sm' | 'md' | 'lg' | 'none'
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-paper-50 text-ink border border-transparent',
  bordered: 'bg-paper text-ink border border-neutral-20',
  elevated: 'bg-paper text-ink border border-neutral-10 shadow-[0_1px_2px_rgba(14,14,16,0.05)]',
  accent: 'bg-accent text-paper border border-accent',
  inverted: 'bg-ink text-paper border border-ink',
}

const paddingClasses = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({
  variant = 'default',
  padding = 'md',
  as: Component = 'div',
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <Component
      className={cn(variantClasses[variant], paddingClasses[padding], 'flex flex-col gap-3', className)}
      {...rest}
    >
      {children}
    </Component>
  )
}

// ----------------------------------------------------------------------------
// Sub-composições editoriais
// ----------------------------------------------------------------------------

interface CardEyebrowProps extends HTMLAttributes<HTMLSpanElement> {}
export function CardEyebrow({ className, children, ...rest }: CardEyebrowProps) {
  return (
    <span
      className={cn(
        'font-sans text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-neutral-50',
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  )
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h2' | 'h3' | 'h4'
}
export function CardTitle({ as: Tag = 'h3', className, children, ...rest }: CardTitleProps) {
  return (
    <Tag
      className={cn(
        'font-serif text-[1.75rem] font-medium leading-[1.18] tracking-tight text-pretty',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}

interface CardBodyProps extends HTMLAttributes<HTMLParagraphElement> {}
export function CardBody({ className, children, ...rest }: CardBodyProps) {
  return (
    <p className={cn('font-sans text-[1rem] leading-[1.65] text-ink-65', className)} {...rest}>
      {children}
    </p>
  )
}

interface CardMetricProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  value: ReactNode
}
export function CardMetric({ label, value, className, ...rest }: CardMetricProps) {
  return (
    <div className={cn('flex flex-col gap-1', className)} {...rest}>
      <span className="font-sans text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-neutral-50">
        {label}
      </span>
      <span className="font-mono text-[1.125rem] font-medium tabular-nums text-ink">
        {value}
      </span>
    </div>
  )
}
