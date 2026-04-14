import { useState, useEffect } from 'react'
import { Container } from './Container'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'
import { MobileMenu } from '../ui/MobileMenu'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Trust', href: '#social-proof' },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b border-white/10 transition-all duration-300',
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-slate-950/95 backdrop-blur-sm',
      ].join(' ')}
    >
      <Container className="relative flex h-18 min-h-18 items-center justify-between sm:h-20">
        <a
          href="#"
          className="flex items-center gap-3 text-xs font-semibold tracking-[0.32em] text-cyan-300 transition hover:text-cyan-200 sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
          aria-label="FlowPilot — go to top"
        >
          <Logo className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
          FLOWPILOT
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline"
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
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="text-lg leading-none" aria-hidden="true">
            {isOpen ? '×' : '☰'}
          </span>
        </button>

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </Container>
    </header>
  )
}
