import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type BadgeVariant = 'neutral' | 'accent' | 'inverted' | 'success' | 'warning' | 'info'
type BadgeSize = 'sm' | 'md'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  uppercase?: boolean
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral: 'bg-paper-deep text-ink-65 border-neutral-20',
  accent: 'bg-accent/10 text-accent border-accent/30',
  inverted: 'bg-ink text-paper border-ink',
  success: 'bg-success/10 text-success border-success/30',
  warning: 'bg-warning/10 text-warning border-warning/30',
  info: 'bg-info/10 text-info border-info/30',
}

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'h-5 px-2 text-[0.6875rem]',
  md: 'h-6 px-3 text-[0.75rem]',
}

export function Badge({
  variant = 'neutral',
  size = 'sm',
  uppercase = true,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center border font-sans font-medium',
        uppercase && 'uppercase tracking-[0.12em]',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  )
}
