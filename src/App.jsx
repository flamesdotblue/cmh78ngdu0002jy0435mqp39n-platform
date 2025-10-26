import React from 'react'
import Navbar from './components/Navbar'
import HomeHero from './components/HomeHero'
import Sections from './components/Sections'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-inter">
      <Navbar />
      <main>
        <HomeHero />
        <Sections />
      </main>
      <Footer />
    </div>
  )
}
