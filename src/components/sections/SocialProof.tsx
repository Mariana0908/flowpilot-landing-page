import { stats, testimonials, trustedLogos } from '../../data/landing'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { SectionHeading } from '../layout/SectionHeading'
import { StatCard } from '../ui/StatCard'
import { TestimonialCard } from '../ui/TestimonialCard'
import { Reveal } from '../ui/Reveal'

export const SocialProof = () => {
  return (
    <Section id="social-proof">
      <Container>
        <Reveal>
          <SectionHeading
            centered
            eyebrow="Trust & momentum"
            title="Built to feel credible from the first interaction."
            description="Even as a concept, FlowPilot is presented as a product that teams could trust. This section combines believable signals, outcomes, and real-world scenarios."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedLogos.map((logo) => (
              <span
                key={logo}
                className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500 transition-colors duration-200 hover:text-slate-300 cursor-default select-none"
              >
                {logo}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 0.08}>
              <StatCard value={stat.value} label={stat.label} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.1}>
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
