import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.3em] text-cyan-300">
            FLOWPILOT
          </p>
          <p className="mt-2 text-sm text-slate-400">
            AI-powered workspace for modern teams.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-slate-400">
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
      </Container>
    </footer>
  )
}