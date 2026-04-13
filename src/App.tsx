// import './App.css'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'


function App() {

  return (
   <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
