type FeatureCardProps = {
  title: string
  description: string
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="mb-5 h-10 w-10 rounded-2xl bg-linear-to-br from-indigo-400/30 to-cyan-400/30 ring-1 ring-white/10" />

      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </article>
  )
}