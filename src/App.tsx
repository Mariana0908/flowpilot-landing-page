// import './App.css'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { Benefits } from './components/sections/Benefits'
import { Features } from './components/sections/Features'
import { FinalCTA } from './components/sections/FinalCTA'
import { SocialProof } from './components/sections/SocialProof'

function App() {

  return (
   <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
