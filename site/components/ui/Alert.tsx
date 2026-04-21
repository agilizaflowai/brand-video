import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

type AlertVariant = 'info' | 'success' | 'warning' | 'danger' | 'neutral'

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  title?: string
  icon?: ReactNode
}

const variantClasses: Record<AlertVariant, { border: string; indicator: string; text: string }> = {
  info: {
    border: 'border-info/40',
    indicator: 'bg-info',
    text: 'text-info',
  },
  success: {
    border: 'border-success/40',
    indicator: 'bg-success',
    text: 'text-success',
  },
  warning: {
    border: 'border-warning/40',
    indicator: 'bg-warning',
    text: 'text-warning',
  },
  danger: {
    border: 'border-accent/40',
    indicator: 'bg-accent',
    text: 'text-accent',
  },
  neutral: {
    border: 'border-neutral-20',
    indicator: 'bg-ink',
    text: 'text-ink',
  },
}

export function Alert({
  variant = 'neutral',
  title,
  icon,
  children,
  className,
  ...rest
}: AlertProps) {
  const style = variantClasses[variant]
  return (
    <div
      role="alert"
      className={cn(
        'relative flex gap-4 border bg-paper px-5 py-4',
        style.border,
        className,
      )}
      {...rest}
    >
      <span
        aria-hidden="true"
        className={cn('absolute left-0 top-0 h-full w-[2px]', style.indicator)}
      />
      {icon && <span className={cn('flex shrink-0 pt-[2px]', style.text)}>{icon}</span>}
      <div className="flex flex-1 flex-col gap-1">
        {title && (
          <h4 className={cn('font-sans text-[0.9375rem] font-medium', style.text)}>{title}</h4>
        )}
        <div className="font-sans text-[0.875rem] leading-[1.55] text-ink-65">{children}</div>
      </div>
    </div>
  )
}
