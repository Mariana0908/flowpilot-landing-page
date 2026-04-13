import { stats, testimonials, trustedLogos } from '../../data/landing'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { StatCard } from '../ui/StatCard'
import { TestimonialCard } from '../ui/TestimonialCard'

export function SocialProof() {
  return (
    <Section id="social-proof">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Trust & momentum
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Designed to feel credible from day one.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            To validate the concept, the page combines believable social proof,
            lightweight trust signals, and outcome-focused messaging.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium tracking-[0.18em] text-slate-400">
          {trustedLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
