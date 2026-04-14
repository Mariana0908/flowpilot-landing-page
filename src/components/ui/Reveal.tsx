import type { CSSProperties, ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export const Reveal = ({
  children,
  className,
  delay = 0,
  y = 24,
}: RevealProps) => {
  const style: CSSProperties = {
    animationDelay: `${delay}s`,
    ['--from-y' as any]: `${y}px`,
  }

  const classes = ['opacity-0', 'animate-fade-up', className].filter(Boolean).join(' ')

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}