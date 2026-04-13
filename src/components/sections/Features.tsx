import { features } from '../../data/landing'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { FeatureCard } from '../ui/FeatureCard'

export function Features() {
  return (
    <Section id="features">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Features
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built to keep ideas, tasks, and decisions connected.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            FlowPilot is designed for modern teams that need structure without
            losing speed. Every feature helps reduce friction and move work forward.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}