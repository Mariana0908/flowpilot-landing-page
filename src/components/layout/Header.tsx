import { Container } from './Container'
import { Button } from '../ui/Button'
import { useState } from 'react'
import { MobileMenu } from '../ui/MobileMenu'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Trust', href: '#social-proof' },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container className="relative flex h-20 items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-[0.3em] text-cyan-300">
          FLOWPILOT
        </a>

        {/* Desktop nav */}
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

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button>Request access</Button>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          ☰
        </button>

        {/* Mobile menu */}
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </Container>
    </header>
  )
}