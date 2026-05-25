import { useEffect, useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../../types'

const COLLAPSE_THRESHOLD = 60

interface ProjectDetailProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (project) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      const mainLine = document.getElementById('scroll-progress-line')
      if (mainLine) mainLine.style.display = 'none'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      const mainLine = document.getElementById('scroll-progress-line')
      if (mainLine) mainLine.style.display = ''
    }
  }, [project, handleKeyDown])


  // Modal scroll progress
  const modalScrollProgress = scrollY > 0 && contentRef.current
    ? (scrollY / (contentRef.current.scrollHeight - contentRef.current.clientHeight)) * 100
    : 0

  useEffect(() => {
    setScrollY(0)
  }, [project])

  const handleScroll = () => {
    if (contentRef.current) {
      setScrollY(contentRef.current.scrollTop)
    }
  }

  const progress = Math.min(scrollY / COLLAPSE_THRESHOLD, 1)
  const collapsed = progress >= 1

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          data-modal-backdrop
          className="fixed inset-0 z-[100] flex items-start justify-center bg-[#0D0E10]/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <div className="relative w-full max-w-3xl mx-auto bg-[#0d0d0d] border border-zinc-800 md:rounded-2xl md:shadow-[0_30px_100px_rgba(0,0,0,0.8)] md:my-8 md:mx-6 overflow-hidden flex flex-col h-full md:max-h-[85vh]">
            {/* Modal scroll progress line — absolute on card right edge */}
            <div
              className="absolute right-0 top-0 w-[2px] bg-accent/50 z-30 pointer-events-none"
              style={{ height: `${Math.min(modalScrollProgress, 100)}%` }}
            />

            {/* Scrollable area */}

            {/* Scrollable area */}
            <div
              ref={contentRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto custom-scrollbar overscroll-contain"
            >
              {/* Sticky header bar */}
              <div
                className="sticky top-0 z-20 flex items-center justify-end transition-all duration-200 pt-6 pr-6"
                style={{
                  background: collapsed ? '#0d0d0d' : 'transparent',
                  borderBottom: collapsed ? '1px solid #27272a' : '1px solid transparent',
                  paddingBottom: collapsed ? '0.625rem' : '0px',
                }}
              >
                <h2
                  className="absolute left-8 md:left-10 font-medium tracking-tight text-zinc-100 transition-opacity duration-300 pointer-events-none truncate"
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.25rem',
                    opacity: progress,
                    maxWidth: 'calc(100% - 6rem)',
                  }}
                >
                  {project.detail.mainTitle}
                </h2>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onClose()
                  }}
                  className="group flex items-center justify-center w-8 h-8 border border-zinc-800 hover:border-accent rounded-lg transition-all duration-300 bg-zinc-900/40 flex-shrink-0"
                  aria-label="关闭"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-400 group-hover:text-accent transform group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Top fade group */}
              <div
                className="px-8 md:px-10 transition-all duration-200"
                style={{
                  opacity: 1 - progress,
                  maxHeight: `${(1 - progress) * 200}px`,
                  overflow: 'hidden',
                }}
              >
                <div className="space-y-6">
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="cursor-pointer font-mono text-[11px] text-zinc-400 border border-zinc-800 px-2.5 py-1 rounded bg-zinc-950/50 hover:border-accent hover:text-accent transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Header */}
                  <div className="space-y-2">
                    <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
                      {project.detail.pageTitle}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100">
                      {project.detail.mainTitle}
                    </h2>
                    {project.detail.subtitle && (
                      <p className="text-zinc-400 text-sm font-light">{project.detail.subtitle}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-10 border-t border-zinc-900 pt-8 px-8 md:px-10 pb-10">
                {project.detail.sections.map((section, i) => (
                  <div key={i} className="space-y-3 group">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-accent tracking-wider">
                        {String(i + 1).padStart(2, '0')} //
                      </span>
                      {section.heading && (
                        <h4 className="text-sm font-medium uppercase tracking-wider text-zinc-400 group-hover:text-zinc-200 transition-colors">
                          {section.heading}
                        </h4>
                      )}
                    </div>
                    <div className="text-zinc-300 text-sm leading-relaxed font-light pl-7 whitespace-pre-wrap">
                      {section.body}
                    </div>
                    {section.illustration && (
                      <figure className="mt-5 overflow-hidden rounded-xl border border-zinc-800 ml-7">
                        <img
                          src={section.illustration.src}
                          alt={section.illustration.alt}
                          className="w-full"
                          loading="lazy"
                        />
                        {section.illustration.caption && (
                          <figcaption className="border-t border-zinc-800 px-4 py-2.5 text-center text-xs text-zinc-500">
                            {section.illustration.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
