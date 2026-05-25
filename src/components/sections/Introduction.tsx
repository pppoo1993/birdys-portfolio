import { useState, useEffect, useRef } from 'react'
import { introductionData } from '../../data/introduction'
import ScrollReveal from '../animations/ScrollReveal'

export default function Introduction() {
  const [typed, setTyped] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const indexRef = useRef(0)
  const avatarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const text = introductionData.quote
    indexRef.current = 0
    setTyped('')

    const interval = setInterval(() => {
      indexRef.current += 1
      if (indexRef.current > text.length) {
        clearInterval(interval)
        return
      }
      setTyped(text.slice(0, indexRef.current))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.5)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Avatar parallax on mouse move
  useEffect(() => {
    const el = avatarRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / 20
      const dy = (e.clientY - cy) / 20
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`
    }
    const onLeave = () => {
      el.style.transform = 'translate3d(0, 0, 0)'
    }
    el.addEventListener('mousemove', onMove, { passive: true })
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section
      id="intro"
      className="relative w-full bg-[#0d0d0d] text-white flex flex-col justify-center px-6 py-24 md:px-24 md:py-28 font-sans" style={{ minHeight: '100dvh' }}
    >
      <div className="fixed inset-0 z-0 opacity-25 md:opacity-20 pointer-events-none mix-blend-screen filter blur-[1px] saturate-50">
        <img
          src={import.meta.env.BASE_URL + 'images/hero-bg.jpg'}
          alt="code mesh background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0d0d0d]/50 md:via-[#0d0d0d]/80 to-[#0d0d0d]" />

      <div className="relative z-20 mx-auto flex w-full max-w-4xl flex-col items-center text-center gap-5 md:gap-8 overflow-visible">
        {/* 1. Title */}
        <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tight">
          {introductionData.name}
        </h1>

        {/* 2. Subtitle */}
        <p className="text-[11px] md:text-sm font-mono text-accent tracking-wide md:tracking-widest uppercase">
          {introductionData.title}
        </p>

        {/* 3. Avatar — w-40 h-40, mirrored, subtle border, parallax + pulse */}
        <div
          ref={avatarRef}
          className="avatar-parallax w-40 h-40 rounded-2xl overflow-hidden border border-white/20 flex-shrink-0 bg-[#0d0d0d] transition-all duration-500"
        >
          <img
            src={import.meta.env.BASE_URL + introductionData.avatarPath.replace(/^\//, '')}
            alt="Birdy"
            className="w-full h-full object-cover grayscale contrast-125 -scale-x-100 pointer-events-none"
          />
        </div>

        {/* 4. Typewriter — always 2 lines on mobile, fixed height prevents layout shift */}
        <div className="md:min-h-0 pb-2 md:pb-0">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-wide text-zinc-100 leading-loose md:leading-tight -mt-1 md:-mt-2 md:whitespace-normal">
            {(() => {
              const displayText = typed || introductionData.quote
              const commaIdx = introductionData.quote.indexOf('，')
              const beforeComma = displayText.slice(0, Math.min(displayText.length, commaIdx + 1))
              const afterComma = displayText.length > commaIdx + 1
                ? displayText.slice(commaIdx + 1)
                : ' '
              const cursor = <span className="animate-cursor-blink text-accent text-xl md:text-2xl relative -top-1">|</span>
              // Cursor follows typing: on line 1 if still typing before comma, else line 2
              const stillOnLine1 = displayText.length <= commaIdx + 1
              return <>
                <span className="whitespace-nowrap">{beforeComma}{stillOnLine1 && cursor}</span>
                <br className="md:hidden" />
                <span className="md:hidden" />
                {' '}
                <span className="whitespace-nowrap">{afterComma}{!stillOnLine1 && cursor}</span>
              </>
            })()}
          </h2>
        </div>

        {/* 5. Cards — aligned with title edges, wider gap, translucent bg */}
        <div className="hero-intro-grid gap-6 md:gap-6 w-full border-t border-zinc-800/60 pt-8 md:pt-10">
          {introductionData.bioSections.map((section) => (
            <ScrollReveal key={section.number}>
            <div className="intro-card text-left">
              <h4 className="text-zinc-200 font-medium text-base mb-2 tracking-wide flex items-center gap-2">
                <span className="text-accent font-mono text-sm">[About Me {section.number}]</span> {section.heading}
              </h4>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                {section.body}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div
        className={`absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 transition-all duration-500 sm:flex md:bottom-8 ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="flex animate-bounce flex-col items-center gap-1 text-white/25">
          <span className="text-2xs tracking-widest uppercase">Scroll</span>
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <rect x="1" y="1" width="10" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="6" cy="6" r="1.5" fill="currentColor" />
          </svg>
        </div>
      </div>

    </section>
  )
}
