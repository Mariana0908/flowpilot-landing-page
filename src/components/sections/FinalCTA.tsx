import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { SectionHeading } from '../layout/SectionHeading'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export const FinalCTA = () => {
  return (
   <Section className="pb-24">
      <Container>
          <div className="overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-indigo-500/15 via-slate-900/95 to-cyan-500/10 p-8 sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <Reveal>
                <SectionHeading
                  className="max-w-3xl"
                  eyebrow="Final call"
                  title="Bring clarity to the way your team works."
                  description="FlowPilot helps teams organize ideas, decisions, and tasks in one AI-powered workspace built for momentum, alignment, and faster execution."
                />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button>Request access</Button>
                  <Button variant="secondary">Book a demo</Button>
                </div>
              </Reveal>
            </div>
          </div>
      </Container>
    </Section>
  )
}
