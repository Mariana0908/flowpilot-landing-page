import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 sm:py-24', className)}>
      {children}
    </section>
  )
}