type StatCardProps = {
  value: string
  label: string
}

export const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.07] hover:-translate-y-1">
      <p className="text-4xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{label}</p>
    </div>
  )
}
