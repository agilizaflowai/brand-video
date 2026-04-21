import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'inverse'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

const baseClasses = [
  'inline-flex items-center justify-center gap-2.5',
  'font-sans font-medium',
  'border relative',
  'transition-all duration-200 ease-out',
  'focus-visible:outline-none',
  'disabled:cursor-not-allowed disabled:opacity-40',
  'select-none whitespace-nowrap',
  '[&>svg]:transition-transform [&>svg]:duration-200',
  'hover:[&_.btn-icon-right]:translate-x-0.5',
  'hover:[&_.btn-icon-left]:-translate-x-0.5',
].join(' ')

const sizeClasses: Record<Size, string> = {
  sm: 'h-[36px] px-4 text-[0.8125rem] tracking-[0.01em]',
  md: 'h-[44px] px-6 text-[0.875rem] tracking-[0.005em]',
  lg: 'h-[56px] px-8 text-[0.9375rem]',
}

const variantClasses: Record<Variant, string> = {
  primary: [
    'bg-ink text-paper border-ink',
    'hover:bg-ink-95',
    'active:bg-ink-80',
  ].join(' '),
  secondary: [
    'bg-transparent text-ink border-ink',
    'hover:bg-ink hover:text-paper',
    'active:bg-ink-95',
  ].join(' '),
  ghost: [
    'bg-transparent text-ink border-transparent',
    'hover:bg-paper-deep',
    'active:bg-neutral-10',
  ].join(' '),
  destructive: [
    'bg-accent text-paper border-accent',
    'hover:bg-accent-dim hover:border-accent-dim',
    'active:bg-accent-dim',
  ].join(' '),
  inverse: [
    'bg-paper text-ink border-paper',
    'hover:bg-paper-50',
    'active:bg-paper-deep',
  ].join(' '),
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', icon, iconPosition = 'right', children, className, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...rest}
    >
      {icon && iconPosition === 'left' && <span className="btn-icon-left -ml-1 flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon-right -mr-1 flex shrink-0">{icon}</span>}
    </button>
  )
})
