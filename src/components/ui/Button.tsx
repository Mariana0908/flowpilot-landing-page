import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: ButtonVariant
}

export function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ease-out'

  const variants = {
    primary:
      'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5 hover:bg-indigo-400',
    secondary:
      'border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:-translate-y-0.5',
  }

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}