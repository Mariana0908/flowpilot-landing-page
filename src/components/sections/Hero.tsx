import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { heroContent } from '../../data/landing'
import { Reveal } from '../ui/Reveal'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <Section className="pt-16 sm:pt-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-300">
                {heroContent.badge}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                {heroContent.title}
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                {heroContent.description}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button>{heroContent.primaryAction}</Button>
                <Button variant="secondary">{heroContent.secondaryAction}</Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={32}>
            <motion.div
              className="relative"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-indigo-500/10 blur-3xl" />
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm font-medium text-white">Weekly product sync</p>
                      <p className="mt-1 text-xs text-slate-400">
                        Ideas, tasks, and decisions — connected
                      </p>
                    </div>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                      Live summary
                    </span>
                  </div>

                  <div className="grid gap-4 pt-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Key decision
                      </p>
                      <p className="mt-2 text-sm text-white">
                        Launch onboarding v2 for design and engineering teams this month.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                          Tasks
                        </p>
                        <ul className="mt-3 space-y-2 text-sm text-slate-200">
                          <li>• Finalize hero copy</li>
                          <li>• Align onboarding flow</li>
                          <li>• Assign product review</li>
                        </ul>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                          Momentum
                        </p>
                        <div className="mt-4 space-y-3">
                          <div>
                            <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                              <span>Alignment</span>
                              <span>84%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/10">
                              <motion.div
                                className="h-2 rounded-full bg-indigo-400"
                                initial={{ width: 0 }}
                                whileInView={{ width: '84%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                              <span>Execution</span>
                              <span>72%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/10">
                              <motion.div
                                className="h-2 rounded-full bg-cyan-400"
                                initial={{ width: 0 }}
                                whileInView={{ width: '72%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.55 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}