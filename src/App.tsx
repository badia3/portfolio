import { About } from './components/About'
import { Background } from './components/Background'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Preloader } from './components/Preloader'
import { Projects } from './components/Projects'
import { SignalStrip } from './components/SignalStrip'
import { Skills } from './components/Skills'
import { useEffect } from 'react'
import { initializeLanguage } from './i18n'

export default function App() {
  useEffect(() => initializeLanguage(), [])

  return (
    <>
      <Preloader />
      <Background />
      <Nav />

      <main className="relative z-10">
        <Hero />
        <SignalStrip />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
