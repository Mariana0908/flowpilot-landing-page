type HireMeModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const HireMeModal = ({ isOpen, onClose }: HireMeModalProps) => {
  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-300 ${
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="flex min-h-screen items-center justify-center px-6">
        <div
          className={`relative z-[101] w-full max-w-md rounded-[1.75rem] border border-white/10 bg-slate-900/95 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 ${
            isOpen ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
                Quick message
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Hire me as your Frontend Developer :)
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Thanks for reviewing my project. I’d love to bring this same
                level of product thinking, UI care, and frontend execution to
                your team.
              </p>
            </div>

            <button
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          <div className="mt-6">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-400 hover:shadow-xl hover:shadow-indigo-500/30"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}