import { useState, useEffect, useRef } from 'react'
import { introductionData } from '../../data/introduction'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default function Introduction() {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 640px)')
  const indexRef = useRef(0)

  useEffect(() => {
    const text = introductionData.quote
    indexRef.current = 0
    setTyped('')
    setDone(false)

    const interval = setInterval(() => {
      indexRef.current += 1
      if (indexRef.current > text.length) {
        clearInterval(interval)
        setDone(true)
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
      className={`relative flex min-h-screen w-full flex-col overflow-hidden py-0 pl-6 sm:pl-8 lg:pl-12 ${
        isDesktop && !scrolled
          ? 'pr-36 sm:pr-36 lg:pr-44'
          : 'pr-6 sm:pr-8 lg:pr-12'
      }`}
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-[#0D0E10]/50" />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col pt-[15vh]">
        {/* Name + Title */}
        <h1 className="heading-xl mb-3 text-3xl text-white sm:text-3xl md:text-4xl">
          {introductionData.name}
        </h1>
        <p className="mb-8 font-sans text-xl font-medium tracking-wider text-accent sm:mb-10 sm:text-lg">
          {introductionData.title}
        </p>

        {/* Avatar + Slogan */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
          {/* 3D Flip Avatar — rounded square */}
          <div
            className="group h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-[#E0FF00]/40 shadow-[0_0_15px_rgba(224,255,0,0.1)] sm:h-28 sm:w-28"
            style={{ perspective: '1000px' }}
          >
            <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <img
                  src="images/avatar_front.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <img
                  src="images/avatar_back.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Slogan + Cursor */}
          <div className="group flex items-center text-center sm:text-left">
            <div className="text-xl font-bold leading-relaxed text-white/90 sm:text-2xl sm:whitespace-nowrap">
              {(() => {
                const breakAt = introductionData.quote.indexOf('，') + 1
                const line1 = typed.slice(0, breakAt)
                const line2 = typed.slice(breakAt)
                const cursor = (
                  <span
                    className={`ml-0.5 inline-block w-[0.35em] text-center text-[#E0FF00] select-none ${
                      done ? 'animate-cursor-blink' : 'opacity-100'
                    }`}
                  >
                    ▏
                  </span>
                )
                return (
                  <>
                    <span>
                      {line1}
                      {typed.length <= breakAt && cursor}
                    </span>
                    <br className="sm:hidden" />
                    <span className="sm:hidden">{line2}</span>
                    <span className="hidden sm:inline">
                      {typed.length > breakAt ? typed.slice(breakAt) : ''}
                    </span>
                    {typed.length > breakAt && (
                      <span className="hidden sm:inline">{cursor}</span>
                    )}
                  </>
                )
              })()}
            </div>
          </div>
        </div>

        {/* Bio sections */}
        <div className="mt-8 max-w-xl space-y-3 sm:mt-10 sm:space-y-4">
          {introductionData.bioSections.map((section, i) => (
            <div key={i}>
              <p className="text-sm text-white/60 sm:text-sm">
                <span className="accent-text font-semibold">{section.heading}</span>
                <span className="hidden text-text-tertiary sm:inline"> | </span>
                <span className="block text-white/60 sm:inline">{section.body}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Scroll hint — fixed bottom-right */}
        <div
          className={`fixed bottom-12 right-12 z-20 hidden transition-all duration-500 sm:flex md:bottom-16 lg:right-16 ${
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
      </div>
    </section>
  )
}
