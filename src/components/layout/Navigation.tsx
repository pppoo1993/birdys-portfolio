import { useState, useEffect, useRef, useCallback } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { siteConfig } from '../../data/site-config'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrollTo } from '../../hooks/useScrollTo'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function NavEasterEgg() {
  const [phase, setPhase] = useState<'idle' | 'flap' | 'fly'>('idle')
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([])
  const [label, setLabel] = useState('')

  const launch = () => {
    if (phase !== 'idle') return
    setPhase('flap')
    setLabel('fly, birdy!')
    setTimeout(() => {
      setPhase('fly')
      const p = Array.from({ length: 10 }, (_, i) => ({
        id: Date.now() + i,
        x: 50 + Math.random() * 40,
        y: 90 - i * 10,
      }))
      setParticles(p)
      setTimeout(() => {
        setPhase('idle')
        setParticles([])
        setLabel('')
      }, 1600)
    }, 400)
  }

  const color = phase === 'idle' ? '#52525b' : '#C7FF00'
  const birdPath = "M342.8 255s52.5-16.8 94.6-0.6c0 0 116.8 50.8 142.6 37.1 0 0 47.5-43-21.5-88.1 0 0-162.8-68.4-195-194.2 0 0-14.9-29.9-24 18.5a90 90 0 0 0 13.2 61.1s-75.2-21.3-17.6 43.3c0 0-66.6-1 8.3 47.6 0 0-74.4 12.7 3.8 44.1 0 0-62 39.8-4.4 31.2z m-1.7 704.4c-3.9 70.5 51 27.1 51 27.1 15.6 67.9 57.7 9.4 57.7 9.4 37 64.6 58-2.6 58-2.6 53.5-138.7 63-237.7 63-237.7 3.5-63.9 37.2-74.7 37.2-74.7 193.6-103.1 157.7-293.7 157.7-293.7-21.3-133.3 87.5-174.1 87.5-174.1a336.8 336.8 0 0 0-53.8-4c-21.4-36.7-54.1-33.2-54.1-33.2-48.1 3.6-132.5 110.6-132.5 110.6-48.6 55.6-90.4 31.4-90.4 31.4-119.7-63.6-170.2-48.7-170.2-48.7-122.4 33-213.1-3.6-213.1-3.6-115.2-18.7 31.5 51.7 31.5 51.7-79 27.2 65.7 44.4 65.7 44.4-93.9 55.3 39.8 42.7 39.8 42.7-90.5 52.2 46.7 35 46.7 35-62.4 67.1 45 27.6 45 27.6-58.2 81.2 34.1 32.5 34.1 32.5-34.8 80.1 42 18.9 42 18.9-44.5 73.7 40.6 22.7 40.6 22.7-31.6 83.5 33.5 31.8 33.5 31.8-28.2 25-28 95.7-28 95.7 12.5 60.4-215.9 206.3-215.9 206.3-55.8 52 22.2 51.4 22.2 51.4-31.8 68.2 44.8 32.9 44.8 32.9z m414.1-743.8s18.8-4.7 12.8 12.5c0 0-17.5 6-12.8-12.5z"

  return (
    <div className="cursor-pointer select-none group" data-cursor-hover onClick={launch}>
      <div className="relative h-8 flex items-center overflow-visible">
        <div className={`transition-all duration-500 ${
          phase === 'fly' ? 'opacity-0 scale-50' :
          'opacity-100 group-hover:-translate-y-0.5'
        }`} style={phase === 'flap' ? { animation: 'wing-flap-body 0.25s ease-in-out infinite' } : undefined}>
          <svg width="28" height="28" viewBox="0 0 1024 1024" fill="none">
            <path d={birdPath} fill={color} opacity={phase === 'idle' ? 0.5 : 1} />
            {phase === 'flap' && (
              <g>
                <path className="wing-upper" d="M180 400 Q400 200 620 420" fill="none" stroke={color} strokeWidth="10" strokeLinecap="round" opacity="0.5"
                  style={{ animation: 'wing-beat-up 0.2s ease-in-out infinite', transformOrigin: '400px 400px' }} />
                <path className="wing-lower" d="M180 600 Q400 800 620 580" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" opacity="0.3"
                  style={{ animation: 'wing-beat-down 0.2s ease-in-out infinite', transformOrigin: '400px 600px' }} />
              </g>
            )}
          </svg>
        </div>

        {phase === 'fly' && (
          <>
            {particles.map((p) => (
              <span key={p.id} className="absolute w-1.5 h-1.5 rounded-full bg-[#C7FF00]/40"
                style={{ left: `${p.x}%`, bottom: `${p.y}%`, animation: `particle-fade 0.8s ease-out ${p.id % 3 * 0.1}s forwards` }} />
            ))}
            <div style={{ animation: 'bird-soar 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}>
              <svg width="24" height="24" viewBox="0 0 1024 1024" fill="none">
                <path d={birdPath} fill="#C7FF00" />
                <g>
                  <path d="M150 400 Q380 180 640 400" fill="none" stroke="#C7FF00" strokeWidth="10" strokeLinecap="round" opacity="0.5"
                    style={{ animation: 'wing-beat-up 0.15s ease-in-out infinite', transformOrigin: '380px 400px' }} />
                  <path d="M150 600 Q380 820 640 600" fill="none" stroke="#C7FF00" strokeWidth="8" strokeLinecap="round" opacity="0.3"
                    style={{ animation: 'wing-beat-down 0.15s ease-in-out infinite', transformOrigin: '380px 600px' }} />
                </g>
              </svg>
            </div>
          </>
        )}

        <span className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 font-mono text-[9px] transition-all duration-300 whitespace-nowrap ${
          label ? 'text-[#C7FF00] opacity-100' : 'text-[#52525b] opacity-0 group-hover:opacity-100'
        }`}>
          {label || 'click me'}
        </span>
      </div>

      <style>{`
        @keyframes wing-flap {
          0%, 100% { transform: translateY(0); }
          40% { transform: translateY(-3px); }
          70% { transform: translateY(1px); }
        }
        @keyframes wing-beat {
          0% { d: path("M180 400 Q400 200 620 420"); opacity: 0.5; }
          50% { d: path("M180 350 Q400 500 620 380"); opacity: 0.15; }
          100% { d: path("M180 400 Q400 200 620 420"); opacity: 0.5; }
        }
        @keyframes wing-beat-lower {
          0% { d: path("M180 600 Q400 800 620 580"); opacity: 0.3; }
          50% { d: path("M180 650 Q400 550 620 620"); opacity: 0.08; }
          100% { d: path("M180 600 Q400 800 620 580"); opacity: 0.3; }
        }
        @keyframes bird-soar {
          0% { transform: translateY(0) scale(0.9); opacity: 1; }
          25% { transform: translateY(-30px) scale(0.75) translateX(-8px); opacity: 1; }
          60% { transform: translateY(-90px) scale(0.5) translateX(15px); opacity: 0.6; }
          100% { transform: translateY(-150px) scale(0.25) translateX(30px); opacity: 0; }
        }
        @keyframes particle-fade {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(0) translateY(-40px); opacity: 0; }
        }
      `}</style>
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
            className={`nav-link block w-full py-2 text-left text-sm transition-colors ${
              activeId === link.sectionId
                ? 'nav-active font-bold text-accent text-xl'
                : 'font-normal text-[#8a8a8a] hover:text-white/80'
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
        className="absolute -left-4 w-3 h-px bg-accent pointer-events-none"
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

      {/* Desktop: fixed left sidebar card */}
      <aside className="fixed top-3 left-3 bottom-3 z-40 hidden md:flex w-[220px] flex-col bg-[#121214] border border-[#1f1f23] rounded-2xl shadow-[4px_0_30px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="px-5 pb-4 space-y-3" style={{ paddingTop: '4vh' }}>
          <div className="flex items-center justify-between">
            <button onClick={() => scrollTo('intro')} className="block">
              <img src={import.meta.env.BASE_URL + 'images/logo.png'} alt="Logo" className="w-9 h-9 object-contain" />
            </button>
            {/* <NavEasterEgg /> */}
          </div>
          <button onClick={() => scrollTo('intro')} className="nav-site-name block text-sm font-normal tracking-wide text-white/60">
            {siteConfig.name}
          </button>
        </div>
        <nav className="flex-1 px-5">{desktopNavLinks}</nav>

        <div className="px-5 pb-4">
          <p className="text-[0.6rem] text-text-tertiary text-left">
            &copy; BIRDY DESIGN 2026.<br />ALL RIGHTS RESERVED.
          </p>
        </div>
      </aside>
    </>
  )
}
