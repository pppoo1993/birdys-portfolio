import { useEffect, useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../../types'

interface ProjectDetailProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [previewSrc, setPreviewSrc] = useState<string | null>(null)
  const [previewHtml, setPreviewHtml] = useState<string | null>(null)
  const scrollingLock = useRef(false)
  const activeIndexRef = useRef(0)

  const sections = project?.detail.sections || []

  // Keep refs in sync so callbacks always read latest values without
  // causing re-render cascades (e.g. body-lock effect resetting activeIndex)
  activeIndexRef.current = activeIndex
  const sectionsLen = sections.length
  const sectionsLenRef = useRef(sectionsLen)
  sectionsLenRef.current = sectionsLen
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  // ── Navigate to a specific section ──
  const goTo = useCallback(
    (index: number) => {
      const el = sectionRefs.current[index]
      if (!el || scrollingLock.current) return
      if (index < 0 || index >= sectionsLen) return
      scrollingLock.current = true
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveIndex(index)
      setTimeout(() => {
        scrollingLock.current = false
      }, 400)
    },
    [sectionsLen],
  )

  // ── Track active section via scroll position ──
  useEffect(() => {
    if (!project || !scrollRef.current) return
    const container = scrollRef.current

    const handleScroll = () => {
      if (scrollingLock.current) return
      const scrollTop = container.scrollTop

      let closestIdx = 0
      let closestDist = Infinity

      sectionRefs.current.forEach((el, idx) => {
        if (!el) return
        const dist = Math.abs(el.offsetTop - scrollTop)
        if (dist < closestDist) {
          closestDist = dist
          closestIdx = idx
        }
      })

      if (closestIdx !== activeIndexRef.current) {
        setActiveIndex(closestIdx)
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [project])

  // ── Keyboard: Esc / ↑↓ ──
  // Uses refs to avoid depending on activeIndex — prevents body-lock effect
  // from re-running (and resetting to page 0) on every scroll.
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseRef.current()
        return
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        goTo(Math.min(activeIndexRef.current + 1, sectionsLenRef.current - 1))
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        goTo(Math.max(activeIndexRef.current - 1, 0))
      }
    },
    [goTo],
  )

  // ── Native wheel listener for responsive page switching ──
  // Using native addEventListener (passive: false) is more reliable than React's onWheel,
  // which can be passive in some browsers — preventDefault() would be silently ignored.
  useEffect(() => {
    if (!project) return
    const container = scrollRef.current
    if (!container) return

    const onWheel = (e: WheelEvent) => {
      if (scrollingLock.current) return

      const scrollTop = container.scrollTop
      const maxScroll = container.scrollHeight - container.clientHeight
      const atTop = scrollTop <= 2
      const atBottom = scrollTop >= maxScroll - 2

      // Switch pages only when at section boundary.
      // If content overflows → scroll within page first,
      // then switch on next tick at bottom/top edge.
      if (e.deltaY > 0 && atBottom) {
        e.preventDefault()
        goTo(Math.min(activeIndexRef.current + 1, sections.length - 1))
      } else if (e.deltaY < 0 && atTop) {
        e.preventDefault()
        goTo(Math.max(activeIndexRef.current - 1, 0))
      }
      // Otherwise let native scroll handle within-page overflow
    }

    container.addEventListener('wheel', onWheel, { passive: false })
    return () => container.removeEventListener('wheel', onWheel)
  }, [project, goTo, sections.length])

  // ── Body scroll lock ──
  const blockScroll = useCallback((e: Event) => {
    const target = e.target as HTMLElement | null
    if (target?.closest('[data-modal-scroll]')) return
    e.preventDefault()
  }, [])

  useEffect(() => {
    if (!project) return

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('wheel', blockScroll, { passive: false })
    document.addEventListener('touchmove', blockScroll, { passive: false })
    document.documentElement.style.overflow = 'hidden'

    const line = document.getElementById('scroll-progress-line')
    if (line) line.style.display = 'none'

    setActiveIndex(0)
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    })

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('wheel', blockScroll)
      document.removeEventListener('touchmove', blockScroll)
      document.documentElement.style.overflow = ''

      if (line) line.style.display = ''
    }
  }, [project, handleKeyDown, blockScroll])

  return createPortal(
    <>
    <AnimatePresence>
      {project && (
        <motion.div
          data-modal-backdrop
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0D0E10]/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            className="relative w-full h-full md:w-[80vw] md:max-h-[85vh] mx-auto bg-[#121212] border border-zinc-800/60 md:rounded-2xl md:shadow-[0_30px_100px_rgba(0,0,0,0.8)] md:overflow-hidden flex flex-col"
            style={{ aspectRatio: '16 / 9' }}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* ════ Fixed top bar ════ */}
            <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-3.5 bg-gradient-to-b from-[#121212] via-[#121212]/95 to-transparent pointer-events-none">
              <p className="text-[18px] md:text-[24px] text-white font-bold tracking-tight line-clamp-2 md:truncate max-w-[88%] md:max-w-[65%]">
                {activeIndex > 0 ? sections[activeIndex]?.heading : ''}
              </p>
              <div className="flex items-center gap-5 pointer-events-auto">
                <nav className="hidden md:flex items-center gap-1.5" aria-label="章节导航">
                  {sections.map((_, i) => (
                    <button
                      key={i}
                      data-cursor-hover
                      onClick={() => goTo(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? 'w-5 h-1.5 bg-accent'
                          : 'w-1.5 h-1.5 bg-zinc-700 hover:bg-zinc-500'
                      }`}
                      aria-label={`第 ${i + 1} 章`}
                      aria-current={i === activeIndex ? 'true' : undefined}
                    />
                  ))}
                </nav>
                <button
                  data-cursor-hover
                  onClick={(e) => {
                    e.stopPropagation()
                    onClose()
                  }}
                  className="absolute top-3.5 right-3 md:static group flex items-center justify-center w-8 h-8 border border-zinc-800 hover:border-accent rounded-lg transition-all duration-300 bg-zinc-900/50"
                  aria-label="关闭"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-400 group-hover:text-accent transform group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* ════ Scroll pages ════ */}
            <div
              ref={scrollRef}
              data-modal-scroll
              className="flex-1 overflow-y-auto snap-y snap-mandatory"
              style={{ overscrollBehavior: 'contain', scrollBehavior: 'smooth' }}
            >
              {sections.map((section, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    sectionRefs.current[i] = el
                  }}
                  data-page={i}
                  className="snap-start min-h-full flex flex-col relative"
                  style={{
                    background: i % 2 === 0 ? '#121212' : '#121212',
                  }}
                >
                  {/* Watermark number — top right */}
                  <div
                    className="absolute select-none pointer-events-none font-mono font-extrabold text-[140px] md:text-[180px] leading-none tracking-tighter z-0"
                    style={{
                      color: 'rgba(255,255,255,0.012)',
                      right: '12px',
                      top: '8px',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 py-14 md:py-16">
                    {/* Page 0: split layout — text left, image right */}
                    {i === 0 ? (
                      <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-center md:items-stretch">
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h2 className="text-[24px] md:text-[28px] font-bold text-white tracking-tight leading-tight mb-1">
                              {project.title}
                              <span className="text-zinc-500 font-normal"> · {project.detail.mainTitle}</span>
                            </h2>
                            <p className="text-sm text-zinc-500 font-light tracking-wide mb-3">
                              {project.detail.subtitle}
                            </p>
                            <div className="w-12 h-px bg-zinc-700 mb-4" />
                            {section.body && (
                              <div
                                className="font-light whitespace-pre-wrap mb-5 [&_b]:text-white [&_b]:font-semibold"
                                style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: '1.8' }}
                                dangerouslySetInnerHTML={{ __html: section.body }}
                              />
                            )}
                            {section.html && (
                              <div dangerouslySetInnerHTML={{ __html: section.html }} onClick={(e) => { const t = e.target as HTMLElement; const el = t.closest('[data-preview]') as HTMLElement | null; if (el) { setPreviewHtml(el.outerHTML) } else if (t.tagName === "IMG") { setPreviewSrc((t as HTMLImageElement).src) } }} className="[&_img]:cursor-pointer [&_[data-preview]]:cursor-pointer" />
                            )}
                          </div>
                          {/* Tech tags — align to bottom */}
                          <div className="text-xs font-mono font-medium text-zinc-400 mt-4">
                            {project.techStack.join(' / ')}
                          </div>
                        </div>
                        {/* Image placeholder */}
                        <div className="w-full md:w-[42%] flex-shrink-0">
                          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#141416] border border-[#222226] flex items-center justify-center transition-all duration-300 hover:border-[#3f3f46] hover:scale-[1.02] group cursor-pointer">
                            <span className="text-zinc-600 text-sm font-mono group-hover:text-[#C7FF00] transition-colors duration-300">封面图</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Page 0 intro (non-first-page variant not used for i===0) */}

                        {/* Body */}
                        {section.body && (
                          <div
                            className="font-light whitespace-pre-wrap mb-5 [&_b]:text-white [&_b]:font-semibold"
                            style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: '1.8' }}
                            dangerouslySetInnerHTML={{ __html: section.body }}
                          />
                        )}

                        {/* HTML content */}
                        {section.html && (
                          <div dangerouslySetInnerHTML={{ __html: section.html }} onClick={(e) => { const t = e.target as HTMLElement; const el = t.closest('[data-preview]') as HTMLElement | null; if (el) { setPreviewHtml(el.outerHTML) } else if (t.tagName === "IMG") { setPreviewSrc((t as HTMLImageElement).src) } }} className="[&_img]:cursor-pointer [&_[data-preview]]:cursor-pointer" />
                        )}
                      </>
                    )}

                    {/* Illustration */}
                    {section.illustration && (
                      <figure className="mt-6 overflow-hidden rounded-xl border border-zinc-800/60">
                        <img
                          src={section.illustration.src}
                          alt={section.illustration.alt}
                          className="w-full cursor-pointer"
                          loading="lazy"
                          onClick={() => section.illustration && setPreviewSrc(section.illustration.src)}
                        />
                        {section.illustration.caption && (
                          <figcaption className="border-t border-zinc-800/60 px-4 py-2.5 text-center text-xs text-zinc-500">
                            {section.illustration.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}

                  </div>

                  {/* Gradient divider between pages */}
                  {i < sections.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pointer-events-none">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C7FF00]/25 to-transparent" />
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C7FF00]/08 to-transparent mt-[1px]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Keyboard hint */}
            <div
              className="absolute bottom-4 right-8 text-[10px] text-zinc-600 hidden md:block transition-opacity duration-500 pointer-events-none"
              style={{ opacity: activeIndex === 0 ? 1 : 0 }}
            >
              ↑↓ 切页 · Esc 关闭
            </div>

            {/* Mobile: indicator dots at bottom center */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 py-3 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-transparent md:hidden pointer-events-auto z-50">
              {sections.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? 'w-5 h-1.5 bg-accent'
                      : 'w-1.5 h-1.5 bg-zinc-700'
                  }`}
                  aria-label={`第 ${i + 1} 章`}
                />
              ))}
            </div>

            {/* Page counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] font-mono text-zinc-600 hidden md:block pointer-events-none">
              {String(activeIndex + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    {/* ════ Unified Preview Overlay ════ */}
    {(previewSrc || previewHtml) && (
      <div
        className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center cursor-pointer"
        onClick={() => { setPreviewSrc(null); setPreviewHtml(null) }}
      >
        {previewSrc ? (
          <img
            src={previewSrc}
            alt="预览"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-[0_0_60px_rgba(0,0,0,0.8)]"
          />
        ) : (
          <div
            className="rounded-lg shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden"
            style={{ width: 'min(50vw, 360px)', maxHeight: '90vh', aspectRatio: '1/2.168', background: 'linear-gradient(135deg, #141416 0%, #1A1A1A 100%)', border: '1px solid #222226', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 30%, rgba(199,255,0,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <span style={{ fontSize: '14px', color: '#71717a', fontFamily: 'monospace', letterSpacing: '0.06em', position: 'relative', zIndex: 1 }}>
              {(previewHtml || '').match(/<span[^>]*class="[^"]*-label[^"]*"[^>]*>([^<]*)<\/span>/)?.[1] || '预览'}
            </span>
          </div>
        )}
        <button
          onClick={() => { setPreviewSrc(null); setPreviewHtml(null) }}
          className="absolute top-6 right-6 group flex items-center justify-center w-8 h-8 border border-zinc-800 hover:border-accent rounded-lg transition-all duration-300 bg-zinc-900/50"
          aria-label="关闭"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-400 group-hover:text-accent transform group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    )}
    </>,
    document.body,
  )
}
