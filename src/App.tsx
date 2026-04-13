import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
   <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-300">
          FlowPilot
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          From scattered ideas to aligned execution.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          FlowPilot is an AI-powered workspace that helps teams capture ideas,
          organize tasks, and connect decisions to action in one place.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-indigo-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-indigo-400">
            Request early access
          </button>

          <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
            See how it works
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
