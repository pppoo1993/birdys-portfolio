import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { siteConfig } from '../../data/site-config'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrollTo } from '../../hooks/useScrollTo'

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const sectionIds = siteConfig.navLinks.map((l) => l.sectionId)
  const activeId = useActiveSection(sectionIds)
  const scrollTo = useScrollTo()

  const handleNav = (sectionId: string) => {
    scrollTo(sectionId)
    setMobileOpen(false)
  }

  const navLinks = (
    <ul className="flex flex-col gap-0.5">
      {siteConfig.navLinks.map((link) => (
        <li key={link.sectionId}>
          <button
            onClick={() => handleNav(link.sectionId)}
            className={`block w-full px-4 py-2 text-left text-sm transition-all ${
              activeId === link.sectionId
                ? 'text-xl font-bold text-accent'
                : 'text-sm text-white/40 hover:text-white/70'
            }`}
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      {/* Mobile: top bar */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-divider bg-bg-primary md:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <button onClick={() => scrollTo('intro')} className="text-sm font-semibold text-white/80">
            {siteConfig.name}
          </button>
          <button
            className="text-white/80"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-divider px-4 pb-4 pt-2">
            {navLinks}
          </div>
        )}
      </nav>

      {/* Desktop: fixed left sidebar */}
      <aside className="fixed top-0 left-0 z-40 hidden h-screen w-[240px] flex-col border-r border-divider bg-bg-primary md:flex">
        <div className="px-4 pb-8" style={{ paddingTop: '15vh' }}>
          <button onClick={() => scrollTo('intro')} className="text-sm font-medium tracking-wide text-white/60">
            {siteConfig.name}
          </button>
        </div>
        <nav className="flex-1">{navLinks}</nav>
        <div className="px-4 pb-8">
          <p className="text-[0.6rem] text-text-tertiary">
            &copy; birdydesign {new Date().getFullYear()}
          </p>
        </div>
      </aside>
    </>
  )
}
