import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 sm:py-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.32em] text-cyan-300 sm:text-sm">
              FLOWPILOT
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              AI-powered workspace for modern teams built to connect ideas,
              tasks, and decisions in one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#benefits" className="transition hover:text-white">
              Benefits
            </a>
            <a href="#social-proof" className="transition hover:text-white">
              Trust
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}