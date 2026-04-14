import { benefits } from '../../data/landing'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { SectionHeading } from '../layout/SectionHeading'
import { Reveal } from '../ui/Reveal'

export const Benefits = () => {
  return (
    <Section id="benefits" className="relative">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Benefits"
                title="More clarity, less friction, better execution."
                description="FlowPilot helps teams move from scattered conversations to shared momentum. Instead of losing ideas across meetings, chats, and docs, teams can keep context attached to action and move forward with more confidence."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-slate-950 p-6">
                <p className="text-sm font-medium text-white">Why this matters</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Most teams do not struggle because they lack ideas. They struggle
                  because decisions, ownership, and follow-through get fragmented
                  across too many tools. FlowPilot is designed to reduce that gap.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.id} delay={index * 0.1}>
                <article className="rounded-[1.75rem] border border-white/10 bg-slate-950 p-6 transition-all duration-300 hover:border-white/20 hover:bg-slate-900/80">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-indigo-400/20 to-cyan-400/20 text-sm font-semibold text-cyan-200">
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
