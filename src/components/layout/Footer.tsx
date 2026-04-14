import { Container } from './Container'
import { Logo } from '../ui/Logo'

const footerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Trust', href: '#social-proof' },
]

const legalLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
]

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-10 sm:py-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <a
              href="#"
              className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
              aria-label="FlowPilot — go to top"
            >
              <Logo className="h-7 w-7" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.32em] text-cyan-300 sm:text-sm">
                FLOWPILOT
              </p>
            </a>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              AI-powered workspace for modern teams built to connect ideas,
              tasks, and decisions in one place.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navigation
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-white focus:outline-none focus-visible:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Legal
            </p>
            <nav className="flex flex-col gap-2" aria-label="Legal links">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-white focus:outline-none focus-visible:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500">
            © {year} FlowPilot. All rights reserved. Built as a prototype concept.
          </p>
        </div>
      </Container>
    </footer>
  )
}
