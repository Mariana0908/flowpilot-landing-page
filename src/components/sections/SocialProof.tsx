import { stats, testimonials, trustedLogos } from '../../data/landing'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { StatCard } from '../ui/StatCard'
import { TestimonialCard } from '../ui/TestimonialCard'
import { Reveal } from '../ui/Reveal'

export function SocialProof() {
  return (
    <Section id="social-proof">
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
              Trust & momentum
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Built to feel credible from the first interaction.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Even as a concept, FlowPilot is presented as a product that teams
              could trust. This section combines believable signals, outcomes,
              and real-world scenarios.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium tracking-[0.18em] text-slate-500">
            {trustedLogos.map((logo) => (
              <span key={logo} className="transition hover:text-white">
                {logo}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <StatCard value={stat.value} label={stat.label} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}