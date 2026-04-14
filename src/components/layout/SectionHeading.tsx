import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  centered?: boolean
  className?: string
  children?: ReactNode
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = false,
  className,
  children,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        centered ? 'mx-auto max-w-2xl text-center' : '',
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>

      {children}
    </div>
  )
}
