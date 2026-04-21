'use client'

import { useState, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface AccordionItem {
  id: string
  question: string
  answer: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  className?: string
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([])

  const toggle = (id: string) => {
    setOpenIds((current) => {
      if (current.includes(id)) return current.filter((i) => i !== id)
      return allowMultiple ? [...current, id] : [id]
    })
  }

  return (
    <div className={cn('divide-y divide-neutral-20 border-y border-neutral-20', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        const panelId = `accordion-panel-${item.id}`
        const headerId = `accordion-header-${item.id}`
        return (
          <div key={item.id} className="py-0">
            <h3 className="m-0">
              <button
                type="button"
                id={headerId}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => toggle(item.id)}
                className={cn(
                  'group flex w-full items-center justify-between gap-6 py-6',
                  'text-left font-sans font-medium text-[1.0625rem] text-ink',
                  'transition-colors duration-150',
                  'hover:text-accent focus-visible:outline-none focus-visible:bg-paper-50',
                )}
              >
                <span className="flex-1">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'flex h-6 w-6 shrink-0 items-center justify-center transition-transform duration-200',
                    isOpen && 'rotate-45',
                  )}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1.5V14.5M1.5 8H14.5"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="square"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className="pb-6 pr-10 font-sans text-[1rem] leading-[1.65] text-ink-65"
            >
              {item.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
