import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { introductionData } from '../../data/introduction'
import type { BioSection } from '../../types'
import ScrollReveal from '../animations/ScrollReveal'
import { useScrollTo } from '../../hooks/useScrollTo'
import { useMediaQuery } from '../../hooks/useMediaQuery'

function SplitRevealCard({ section }: { section: BioSection }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [splitPct, setSplitPct] = useState<number | null>(null)
  const [closing, setClosing] = useState(false)
  const [locked, setLocked] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const isActive = splitPct !== null
  const hasImage = !!section.image
  const isMobile = useMediaQuery('(max-width: 767px)')

  // ═══ Desktop: hover split-reveal ═══
  const updateSplit = useCallback((e: React.MouseEvent) => {
    if (closing || locked || isMobile) return
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const pct = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSplitPct(pct)
  }, [closing, locked, isMobile])

  const handleEnter = (e: React.MouseEvent) => {
    if (isMobile) return
    clearTimeout(closeTimer.current)
    setLocked(false)
    setClosing(false)
    updateSplit(e)
  }

  const handleLeave = () => {
    if (isMobile) return
    setLocked(false)
    setClosing(true)
    setSplitPct(100)
    closeTimer.current = setTimeout(() => {
      setSplitPct(null)
      setClosing(false)
    }, 350)
  }

  // ═══ Mobile: click toggles fade ═══
  const handleClick = () => {
    if (!hasImage) return
    if (isMobile) {
      setShowImage((prev) => !prev)
      return
    }
    // Desktop: split-reveal lock
    if (locked) {
      setLocked(false)
      setClosing(true)
      setSplitPct(100)
      closeTimer.current = setTimeout(() => {
        setSplitPct(null)
        setClosing(false)
      }, 350)
    } else {
      clearTimeout(closeTimer.current)
      setClosing(false)
      setLocked(true)
      setSplitPct(50)
    }
  }

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  return (
    <div
      ref={cardRef}
      className="intro-card text-left relative overflow-hidden"
      style={{
        cursor: isMobile ? 'pointer' : isActive && !locked ? 'col-resize' : locked ? 'pointer' : undefined,
      }}
      onClick={handleClick}
      onMouseMove={!isMobile && hasImage ? updateSplit : undefined}
      onMouseEnter={!isMobile && hasImage ? handleEnter : undefined}
      onMouseLeave={!isMobile && hasImage ? handleLeave : undefined}
    >
      {/* Text layer */}
      <div
        className="relative z-10"
        style={{
          opacity: isMobile && showImage ? 0 : 1,
          transition: isMobile ? 'opacity 0.35s ease' : undefined,
        }}
      >
        <h4 className="text-zinc-200 font-semibold text-base mb-2 tracking-wide flex items-center gap-2">
          <span className="font-mono text-sm tracking-[0.05em]" style={{ color: '#ccff00' }}>[About Me {section.number}]</span> {section.heading}
        </h4>
        <p className="text-[#a1a1aa] text-[13px] leading-[1.6] tracking-[0.02em] font-normal">
          {section.body}
        </p>
      </div>

      {/* ═══ Desktop: split-reveal image ═══ */}
      {!isMobile && hasImage && isActive && (
        <div
          className="absolute inset-0 z-20"
          style={{ clipPath: `inset(0 0 0 ${splitPct}%)` }}
        >
          <div className="absolute inset-0 bg-[#141416]">
            <img src={section.image} alt="" className="w-full h-full object-cover opacity-60" />
            <div
              className="absolute top-0 bottom-0 w-3"
              style={{ left: 0, background: 'linear-gradient(to right, #141416, transparent)' }}
            />
          </div>
        </div>
      )}

      {/* ═══ Mobile: fade-in image overlay ═══ */}
      {isMobile && hasImage && (
        <div
          className="absolute inset-0 z-20 bg-[#141416]"
          style={{
            opacity: showImage ? 1 : 0,
            transition: 'opacity 0.35s ease',
            pointerEvents: showImage ? 'auto' : 'none',
          }}
        >
          <img src={section.image} alt="" className="w-full h-full object-cover opacity-60" />
        </div>
      )}

    </div>
  )
}

export default function Introduction() {
  const [typed, setTyped] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const indexRef = useRef(0)
  const avatarRef = useRef<HTMLDivElement>(null)
  const scrollTo = useScrollTo()

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
      className="relative w-full text-white flex flex-col justify-center py-16 md:py-28 font-sans noise-overlay"
      style={{ minHeight: '100vh', background: 'radial-gradient(circle at 50% 40%, rgba(204, 255, 0, 0.04) 0%, rgba(0, 0, 0, 0) 60%), #0a0a0c' }}
    >
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none mix-blend-screen filter blur-[1px] saturate-50 overflow-hidden"
        initial={{ opacity: 0, scale: 1.15, y: '10%', rotateX: -15 }}
        animate={{ opacity: 0.22, scale: 0.85, y: '0%', rotateX: 0 }}
        transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ transformOrigin: 'center top' }}
      >
        <img
          src={import.meta.env.BASE_URL + 'images/hero-bg.jpg'}
          alt="code mesh background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0a0a0c]/50 md:via-[#0a0a0c]/80 to-[#0a0a0c]" />

      <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center text-center gap-5 md:gap-8 overflow-visible px-6 md:px-12">
        {/* 1. Title */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          {introductionData.name}
        </h1>

        {/* 2. Subtitle */}
        <p className="text-[11px] md:text-sm text-accent tracking-wide md:tracking-widest uppercase font-semibold">
          {introductionData.title}
        </p>

        {/* 3. Avatar — borderless, mirrored, parallax, plus-lighter blend for seamless bg fusion */}
        <div
          ref={avatarRef}
          className="avatar-parallax group w-48 md:w-60 h-48 md:h-60 rounded-2xl overflow-hidden flex-shrink-0"
          style={{ isolation: 'isolate' }}
        >
          <img
            src={import.meta.env.BASE_URL + introductionData.avatarPath.replace(/^\//, '')}
            alt="Birdy"
            className="w-full h-full object-cover pointer-events-none"
            style={{
              mixBlendMode: 'plus-lighter',
              filter: 'contrast(1.08) brightness(0.95)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </div>

        {/* 4. Typewriter — animated on all devices, overlaps avatar slightly */}
        <div className="pb-0 -mt-4 md:-mt-6 relative z-10">
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-wide leading-normal md:leading-tight text-white"
          >
            {(() => {
              const displayText = typed || introductionData.quote
              const commaIdx = introductionData.quote.indexOf('，')
              const beforeComma = displayText.slice(0, Math.min(displayText.length, commaIdx + 1))
              const afterComma = displayText.length > commaIdx + 1
                ? displayText.slice(commaIdx + 1)
                : ' '
              const cursor = <span className="animate-cursor-blink relative -top-1 text-xl md:text-3xl" style={{ color: '#ccff00', WebkitTextFillColor: '#ccff00' }}>|</span>
              const stillOnLine1 = displayText.length <= commaIdx + 1
              return <>
                <span className="md:hidden">
                  {beforeComma}{stillOnLine1 && cursor}
                  <br />
                  {afterComma}{!stillOnLine1 && cursor}
                </span>
                <span className="hidden md:inline">
                  {beforeComma}{stillOnLine1 && cursor}
                  {' '}
                  {afterComma}{!stillOnLine1 && cursor}
                </span>
              </>
            })()}
          </h2>
        </div>

        {/* 5. Cards — aligned with title edges, wider gap, translucent bg */}
        <div className="hero-intro-grid gap-6 md:gap-6 w-full pt-2 md:pt-4">
          {introductionData.bioSections.map((section) => (
            <ScrollReveal key={section.number}>
              <SplitRevealCard section={section} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div
        onClick={() => scrollTo('experience')}
        className={`absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 transition-all duration-500 sm:flex md:bottom-8 cursor-pointer ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="flex animate-bounce flex-col items-center gap-1 text-white/40">
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
