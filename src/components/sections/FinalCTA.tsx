import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'

export function FinalCTA() {
  return (
    <Section className="pb-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-500/15 via-slate-900 to-cyan-500/10 p-8 sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Final call
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Bring clarity to the way your team works.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Start organizing ideas, decisions, and tasks in one AI-powered
              workspace built to help teams move with more focus and less friction.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Request access</Button>
              <Button variant="secondary">Book a demo</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}