import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Introduction from './components/sections/Introduction'
import WorkExperience from './components/sections/WorkExperience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen" style={{ fontFamily: 'var(--font-sans)' }}>
      <Navigation />
      <main className="md:ml-[240px]">
        <Introduction />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
