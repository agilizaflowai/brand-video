'use client'

import { forwardRef, useId, type InputHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface FieldShellProps {
  label?: string
  hint?: string
  error?: string
  eyebrow?: string
  required?: boolean
  className?: string
  children: ReactNode
  id: string
}

function FieldShell({ label, hint, error, eyebrow, required, className, children, id }: FieldShellProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {eyebrow && (
        <span className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-neutral-50">
          {eyebrow}
        </span>
      )}
      {label && (
        <label htmlFor={id} className="font-sans text-[0.875rem] font-medium text-ink">
          {label}
          {required && <span className="ml-1 text-accent" aria-hidden="true">*</span>}
        </label>
      )}
      {children}
      {hint && !error && (
        <span className="font-sans text-[0.8125rem] text-neutral-50">{hint}</span>
      )}
      {error && (
        <span role="alert" className="font-sans text-[0.8125rem] text-danger">{error}</span>
      )}
    </div>
  )
}

const fieldClasses = [
  'w-full bg-paper text-ink font-sans',
  'border border-neutral-20',
  'px-4 py-3',
  'transition-colors duration-150 ease-out',
  'placeholder:text-neutral-35',
  'focus:outline-none focus:border-ink',
  'disabled:cursor-not-allowed disabled:bg-paper-50 disabled:opacity-70',
  'aria-[invalid=true]:border-danger',
].join(' ')

// ============================================================================
// Input
// ============================================================================

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  eyebrow?: string
  mono?: boolean
  wrapperClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, hint, error, eyebrow, required, mono, className, wrapperClassName, ...rest },
  ref,
) {
  const autoId = useId()
  const inputId = id || `input-${autoId}`
  const describedBy = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
  return (
    <FieldShell
      id={inputId}
      label={label}
      hint={hint}
      error={error}
      eyebrow={eyebrow}
      required={required}
      className={wrapperClassName}
    >
      <input
        ref={ref}
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        className={cn(fieldClasses, mono && 'font-mono text-[0.9375rem]', className)}
        required={required}
        {...rest}
      />
    </FieldShell>
  )
})

// ============================================================================
// Textarea
// ============================================================================

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  hint?: string
  error?: string
  eyebrow?: string
  wrapperClassName?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { id, label, hint, error, eyebrow, required, rows = 4, className, wrapperClassName, ...rest },
  ref,
) {
  const autoId = useId()
  const textareaId = id || `textarea-${autoId}`
  return (
    <FieldShell
      id={textareaId}
      label={label}
      hint={hint}
      error={error}
      eyebrow={eyebrow}
      required={required}
      className={wrapperClassName}
    >
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        aria-invalid={!!error}
        className={cn(fieldClasses, 'resize-y leading-relaxed', className)}
        required={required}
        {...rest}
      />
    </FieldShell>
  )
})
