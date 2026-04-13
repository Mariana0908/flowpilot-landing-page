import { Container } from './Container'
import { Button } from '../ui/Button'
import { useState, useEffect } from 'react'
import { MobileMenu } from '../ui/MobileMenu'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Trust', href: '#social-proof' },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container className="relative flex h-18 min-h-18 items-center justify-between sm:h-20">
        <a
          href="#"
          className="text-xs font-semibold tracking-[0.32em] text-cyan-300 sm:text-sm"
        >
          FLOWPILOT
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>Request access</Button>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className="text-lg leading-none">{isOpen ? '×' : '☰'}</span>
        </button>

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </Container>
    </header>
  )
}