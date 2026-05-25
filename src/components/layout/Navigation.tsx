import { useState, useEffect, useRef, useCallback } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { siteConfig } from '../../data/site-config'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrollTo } from '../../hooks/useScrollTo'

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [indicatorY, setIndicatorY] = useState(0)
  const sectionIds = siteConfig.navLinks.map((l) => l.sectionId)
  const activeId = useActiveSection(sectionIds)
  const scrollTo = useScrollTo()
  const btnRefs = useRef<Map<string, HTMLButtonElement>>(new Map())

  const handleNav = (sectionId: string) => {
    scrollTo(sectionId)
    setMobileOpen(false)
  }

  const listRef = useRef<HTMLUListElement>(null)

  // Update indicator Y position relative to the <ul>
  const updateIndicator = useCallback(() => {
    // Small delay to ensure DOM has settled after React render
    requestAnimationFrame(() => {
      const btn = btnRefs.current.get(activeId)
      if (btn && listRef.current) {
        const btnRect = btn.getBoundingClientRect()
        const listRect = listRef.current.getBoundingClientRect()
        setIndicatorY(btnRect.top - listRect.top + btnRect.height / 2)
      }
    })
  }, [activeId])

  // Update on mount and when active section changes
  useEffect(() => {
    updateIndicator()
  }, [updateIndicator])

  const setBtnRef = (sectionId: string) => (el: HTMLButtonElement | null) => {
    if (el) btnRefs.current.set(sectionId, el)
  }

  const NavButtons = () => (
    <>
      {siteConfig.navLinks.map((link) => (
        <li key={link.sectionId}>
          <button
            ref={setBtnRef(link.sectionId)}
            onClick={() => handleNav(link.sectionId)}
            className={`block w-full px-6 py-2 text-left text-base transition-colors ${
              activeId === link.sectionId
                ? 'font-bold text-accent'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            {link.label}
          </button>
        </li>
      ))}
    </>
  )

  const navLinks = (
    <ul className="flex flex-col gap-0.5">
      <NavButtons />
    </ul>
  )

  const desktopNavLinks = (
    <ul ref={listRef} className="flex flex-col gap-0.5 relative">
      {/* Sliding indicator — desktop only */}
      <li
        className="absolute left-0 w-3 h-px bg-accent pointer-events-none"
        style={{
          transform: `translateY(${indicatorY}px)`,
          transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
      <NavButtons />
    </ul>
  )

  return (
    <>
      {/* Mobile: top bar */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-divider bg-bg-primary md:hidden">
        <div className="flex items-center justify-between px-6 py-2.5">
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
          <div className="border-t border-divider px-6 pb-4 pt-2">
            {navLinks}
          </div>
        )}
      </nav>

      {/* Desktop: fixed left sidebar */}
      <aside className="fixed top-0 left-0 z-40 hidden h-screen w-[240px] flex-col border-r border-divider bg-bg-primary md:flex">
        <div className="px-6 pb-3 space-y-4" style={{ paddingTop: '6vh' }}>
          <button onClick={() => scrollTo('intro')} className="block">
            <img src={import.meta.env.BASE_URL + 'images/logo.png'} alt="Logo" className="w-10 h-10 object-contain" />
          </button>
          <button onClick={() => scrollTo('intro')} className="block text-sm font-medium tracking-wide text-white/60">
            {siteConfig.name}
          </button>
        </div>
        <nav className="flex-1">{desktopNavLinks}</nav>
        <div className="px-6 pb-4">
          <p className="text-[0.6rem] text-text-tertiary">
            &copy; birdydesign 2026. ALL RIGHTS RESERVED.
          </p>
        </div>
      </aside>
    </>
  )
}
