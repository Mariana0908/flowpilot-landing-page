// import './App.css'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { Benefits } from './components/sections/Benefits'
import { Features } from './components/sections/Features'
import { FinalCTA } from './components/sections/FinalCTA'
import { SocialProof } from './components/sections/SocialProof'
import { HireMeModal } from './components/ui/HireMeModal'
import { useState } from 'react'

function App() {
  const [isHireMeModalOpen, setIsHireMeModalOpen] = useState(false)

  const openHireMeModal = () => setIsHireMeModalOpen(true)
  const closeHireMeModal = () => setIsHireMeModalOpen(false)

  return (
   <div className="min-h-screen">
      <Header onRequestAccess={openHireMeModal} />
      <main>
        <Hero onRequestAccess={openHireMeModal} />
        <Features />
        <Benefits />
        <SocialProof />
        <FinalCTA onRequestAccess={openHireMeModal} />
      </main>
      <Footer />
      <HireMeModal
        isOpen={isHireMeModalOpen}
        onClose={closeHireMeModal}
      />
    </div>
  )
}

export default App
