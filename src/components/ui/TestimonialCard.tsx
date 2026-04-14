type TestimonialCardProps = {
  quote: string
  name: string
  role: string
}

export const TestimonialCard = ({ quote, name, role }: TestimonialCardProps) => {
  return (
    <article className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:p-7">
      <svg
        className="mb-4 h-6 w-6 text-cyan-400/60"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
      </svg>

      <p className="text-base leading-8 text-slate-200">"{quote}"</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-indigo-400/30 to-cyan-400/30 text-xs font-semibold text-cyan-200 ring-1 ring-white/10">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="mt-0.5 text-sm text-slate-400">{role}</p>
        </div>
      </div>
    </article>
  )
}
