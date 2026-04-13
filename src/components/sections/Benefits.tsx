import { benefits } from '../../data/landing'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

export function Benefits() {
  return (
    <Section id="benefits" className="relative">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Benefits
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              More clarity, less friction, better execution.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              FlowPilot is not just about organizing information. It helps teams
              work with more focus, accountability, and momentum by keeping context
              attached to action.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-indigo-400/30 hover:bg-white/[0.07]"
              >
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}