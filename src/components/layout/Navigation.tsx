import { useState, useEffect, useRef, useCallback } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { siteConfig } from '../../data/site-config'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrollTo } from '../../hooks/useScrollTo'

function NavEasterEgg() {
  const [flying, setFlying] = useState(false)
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([])
  const [label, setLabel] = useState('')

  const launch = () => {
    if (flying) return
    setLabel('fly, birdy!')
    setTimeout(() => {
      setFlying(true)
      const p = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: 50 + Math.random() * 40,
        y: 90 - i * 12,
      }))
      setParticles(p)
      setTimeout(() => {
        setFlying(false)
        setParticles([])
        setLabel('')
      }, 1400)
    }, 200)
  }

  return (
    <div className="px-6 pb-1 -translate-y-[50px] cursor-pointer select-none group" data-cursor-hover onClick={launch}>
      <div className="relative h-10 flex items-center justify-center overflow-visible">
        {/* Perched bird — cleaner silhouette */}
        <div className={`transition-all duration-500 ${flying ? 'opacity-0 -translate-y-10' : 'opacity-100 group-hover:-translate-y-0.5'}`}>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            {/* Tail */}
            <path d="M2 9 L5 7 L5 10 Z" fill={flying ? '#C7FF00' : '#52525b'} opacity="0.6" />
            {/* Body */}
            <ellipse cx="10" cy="8" rx="5" ry="3.5" fill={flying ? '#C7FF00' : '#52525b'} opacity="0.8" />
            {/* Head */}
            <circle cx="15" cy="6" r="2.5" fill={flying ? '#C7FF00' : '#52525b'} />
            {/* Beak */}
            <path d="M17.5 6 L20 5.5 L17.5 5" fill="none" stroke={flying ? '#C7FF00' : '#52525b'} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            {/* Eye */}
            <circle cx="16" cy="5.5" r="0.8" fill="#121212" />
            {/* Wing */}
            <path d="M9 7 Q11 3 13 6" fill="none" stroke={flying ? '#C7FF00' : '#52525b'} strokeWidth="1.2" strokeLinecap="round" />
            {/* Legs */}
            <line x1="9" y1="11.5" x2="9" y2="14" stroke={flying ? '#C7FF00' : '#52525b'} strokeWidth="0.8" />
            <line x1="11" y1="11.5" x2="11" y2="14" stroke={flying ? '#C7FF00' : '#52525b'} strokeWidth="0.8" />
          </svg>
        </div>

        {flying && (
          <>
            {particles.map((p) => (
              <span key={p.id} className="absolute w-1 h-1 rounded-full bg-[#C7FF00]/60 animate-ping"
                style={{ left: `${p.x}%`, bottom: `${p.y}%`, animationDuration: '0.6s' }} />
            ))}
            <div className="absolute" style={{ animation: 'fly-up 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' }}>
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <ellipse cx="10" cy="8" rx="5" ry="3.5" fill="#C7FF00" opacity="0.8" />
                <circle cx="15" cy="6" r="2.5" fill="#C7FF00" />
                <path d="M17.5 6 L20 5.5 L17.5 5" fill="none" stroke="#C7FF00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="16" cy="5.5" r="0.8" fill="#121212" />
                <g style={{ animation: 'flap 0.12s infinite steps(2)', transformOrigin: '10px 8px' }}>
                  <path d="M6 3 L11 6 L6 7" fill="#C7FF00" opacity="0.5" />
                </g>
                <path d="M2 9 L5 7 L5 10 Z" fill="#C7FF00" opacity="0.6" />
              </svg>
            </div>
          </>
        )}

        <span className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 font-mono text-[9px] transition-all duration-300 whitespace-nowrap ${
          label ? 'text-[#C7FF00] opacity-100' : 'text-[#52525b] opacity-0 group-hover:opacity-100'
        }`}>
          {label || 'click me'}
        </span>
      </div>
    </div>
  )
}

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
    requestAnimationFrame(() => {
      const list = listRef.current
      const btn = btnRefs.current.get(activeId)
      if (!btn || !list) return
      const btnRect = btn.getBoundingClientRect()
      const listRect = list.getBoundingClientRect()
      setIndicatorY(btnRect.top - listRect.top + btnRect.height / 2)
    })
  }, [activeId])

  // Update on mount and when active section changes
  useEffect(() => {
    updateIndicator()
  }, [updateIndicator])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return
    const preventScroll = (e: TouchEvent) => e.preventDefault()
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    document.addEventListener('touchmove', preventScroll, { passive: false })
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.removeEventListener('touchmove', preventScroll)
    }
  }, [mobileOpen])

  const setBtnRef = (sectionId: string) => (el: HTMLButtonElement | null) => {
    if (el) btnRefs.current.set(sectionId, el)
  }

  const NavButtons = () => (
    <>
      {siteConfig.navLinks.map((link) => (
        <li key={link.sectionId}>
          <button
            ref={setBtnRef(link.sectionId)}
            data-cursor-interactive onClick={() => handleNav(link.sectionId)}
            className={`block w-full py-2 text-left text-base transition-colors md:px-6 ${
              activeId === link.sectionId
                ? 'font-bold text-accent text-lg'
                : 'font-normal text-white/50 hover:text-white/80'
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
          <button onClick={() => scrollTo('intro')} className="flex items-center gap-2">
            <img src={import.meta.env.BASE_URL + 'images/logo.png'} alt="Logo" className="w-7 h-7 object-contain" />
            <span className="text-sm font-semibold text-white/80">{siteConfig.name}</span>
          </button>
          <button
            className="text-white/80"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile: half-screen overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          onTouchMove={(e) => e.preventDefault()}
        >
          <div
            className="absolute inset-0 bg-black/15"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 left-0 right-0 bg-[#161618] border-b border-[#1f1f23] rounded-b-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] px-6 pt-16 pb-8">
            {navLinks}
          </div>
        </div>
      )}

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

        {/* ════ Easter Egg: Flying Bird ════ */}
        <NavEasterEgg />

        <div className="px-6 pb-4">
          <p className="text-[0.6rem] text-text-tertiary">
            &copy; birdydesign 2026. ALL RIGHTS RESERVED.
          </p>
        </div>
      </aside>
    </>
  )
}
