import { useEffect, useRef } from 'react'
import { Button } from './Button'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Trust', href: '#social-proof' },
]

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  return (
    <div
      ref={ref}
      aria-hidden={!isOpen}
      className={[
        'absolute top-full left-0 w-full border-b border-white/10 bg-slate-950/98 backdrop-blur-md md:hidden',
        'transition-all duration-300 ease-out overflow-hidden',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none',
      ].join(' ')}
    >
      <div className="flex flex-col gap-6 px-6 py-8">
        <nav className="space-y-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="block text-base font-medium text-slate-300 transition hover:text-white focus:outline-none focus-visible:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="pt-2">
          <Button className="w-full" onClick={onClose}>
            Request access
          </Button>
        </div>
      </div>
    </div>
  )
}
