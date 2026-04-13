import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function FinalCTA() {
  return (
   <Section className="pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-indigo-500/15 via-slate-900 to-cyan-500/10 p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.16),transparent_30%)]" />

            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
                Final call
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Bring clarity to the way your team works.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                FlowPilot helps teams organize ideas, decisions, and tasks in one
                AI-powered workspace built for momentum, alignment, and faster
                execution.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button>Request access</Button>
                <Button variant="secondary">Book a demo</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}