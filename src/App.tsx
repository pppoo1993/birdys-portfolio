import { useEffect } from 'react'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Introduction from './components/sections/Introduction'
import WorkExperience from './components/sections/WorkExperience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Cursor from './components/ui/Cursor'
import { useSpotlight } from './hooks/useSpotlight'

export default function App() {
  const spotlightRef = useSpotlight()
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Global mouse glow - topmost layer */}
      <div className="hero-bg-glow fixed inset-0 z-[100] pointer-events-none" />

      <Navigation />
      <main ref={spotlightRef} className="spotlight md:pl-[240px]">
        <Introduction />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* Custom cursor (desktop only) */}
      <Cursor />
    </div>
  )
}
