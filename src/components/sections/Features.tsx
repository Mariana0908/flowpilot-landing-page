import { features } from '../../data/landing'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { FeatureCard } from '../ui/FeatureCard'
import { Reveal } from '../ui/Reveal'

export function Features() {
  return (
    <Section id="features">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
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
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <FeatureCard title={feature.title} description={feature.description} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}