import { useEffect } from 'react'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Introduction from './components/sections/Introduction'
import WorkExperience from './components/sections/WorkExperience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Cursor from './components/ui/Cursor'
import { useSpotlight } from './hooks/useSpotlight'

function ScrollProgress() {
  useEffect(() => {
    const el = document.getElementById('scroll-progress-line')
    if (!el) return
    const update = () => {
      const scrollH = document.documentElement.scrollHeight - window.innerHeight
      const pct = scrollH > 0 ? (window.scrollY / scrollH) * 100 : 0
      el.style.height = `${Math.min(pct, 100)}%`
      el.style.transform = `scaleY(${Math.min(pct / 100, 1)})`
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return null
}

export default function App() {
  const spotlightRef = useSpotlight()

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen" style={{ fontFamily: 'var(--font-sans)' }}>
      <Navigation />
      <main ref={spotlightRef} className="spotlight xl:pl-[226px]">
        <Introduction />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* Custom cursor (desktop only) */}
      <Cursor />
      <ScrollProgress />
    </div>
  )
}
