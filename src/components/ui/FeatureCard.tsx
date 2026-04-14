import type { ReactNode } from 'react'

type FeatureCardProps = {
  title: string
  description: string
  icon: ReactNode
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <article className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07] hover:-translate-y-1">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-400/30 to-cyan-400/30 ring-1 ring-white/10 text-cyan-300 transition-colors duration-300 group-hover:from-indigo-400/40 group-hover:to-cyan-400/40">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </article>
  )
}
