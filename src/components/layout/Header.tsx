import { Container } from './Container'
import { Button } from '../ui/Button'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Trust', href: '#social-proof' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-[0.3em] text-cyan-300">
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
      </Container>
    </header>
  )
}