import { useState, useEffect, useRef } from 'react'
import { introductionData } from '../../data/introduction'
import ScrollReveal from '../animations/ScrollReveal'

export default function Introduction() {
  const [typed, setTyped] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const indexRef = useRef(0)

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

  return (
    <section
      id="intro"
      className="relative w-full overflow-hidden bg-[#0d0d0d] text-white flex flex-col justify-center min-h-screen px-6 py-14 md:px-24 md:pt-24 md:pb-36 md:justify-between font-sans"
    >
      <div className="fixed inset-0 z-0 opacity-10 md:opacity-20 pointer-events-none mix-blend-screen filter blur-[1px] saturate-50">
        <img
          src="/images/hero-bg.jpg"
          alt="code mesh background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0d0d0d]/80 to-[#0d0d0d]" />

      <div className="relative z-20 mx-auto my-auto flex w-full max-w-4xl flex-col gap-3 lg:gap-8 text-left">
        {/* Split layout: lg+ side-by-side, mobile stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:items-center mb-4 lg:mb-12">
          {/* Left column: title + subtitle + quote */}
          <div className="space-y-2 lg:space-y-4">
            <div className="space-y-1 md:space-y-2">
              <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tight">
                {introductionData.name}
              </h1>
              <p className="text-[11px] md:text-sm font-mono text-accent tracking-wide md:tracking-widest uppercase">
                {introductionData.title}
              </p>
            </div>

            <div className="h-[3.5rem] md:h-[5.5rem]">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-zinc-100 leading-tight">
                {typed
                  ? (() => {
                      const parts = typed.split('，')
                      return parts.length > 1
                        ? <>{parts[0]}，<br />{parts.slice(1).join('，')}</>
                        : typed
                    })()
                  : <>Next-gen AI，<br />做点更酷的体验。</>
                }
                <span className="animate-cursor-blink text-accent text-xl md:text-2xl relative -top-1">|</span>
              </h2>
            </div>
          </div>

          {/* Right column: avatar */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="avatar-cyber w-32 h-32 md:w-40 md:h-40 lg:w-[260px] lg:h-[260px]">
              <img
                src={introductionData.avatarPath}
                alt="Birdy"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>
        </div>

        {/* Cards — tighter top margin on desktop for improved screen efficiency */}
        <div className="hero-intro-grid gap-6 md:gap-6 border-t border-zinc-800/60 mt-1 lg:mt-4 pt-3 lg:pt-6">
          {introductionData.bioSections.map((section, i) => (
            <ScrollReveal key={section.number}>
            <div className="intro-card">
              <h4 className="text-zinc-200 font-medium text-base mb-2 tracking-wide flex items-center gap-2">
                <span className="text-accent font-mono text-sm">[{section.number}]</span> {section.heading}
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
