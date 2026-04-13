type TestimonialCardProps = {
  quote: string
  name: string
  role: string
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <p className="text-base leading-7 text-slate-200">“{quote}”</p>

      <div className="mt-6">
        <p className="font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-slate-400">{role}</p>
      </div>
    </article>
  )
}