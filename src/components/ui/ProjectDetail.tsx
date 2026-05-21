import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../../types'

interface ProjectDetailProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
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
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, handleKeyDown])

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[#0D0E10]/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <button
            onClick={onClose}
            aria-label="关闭"
            className="fixed right-6 top-6 z-[110] rounded-full border border-divider bg-[#161719] p-2.5 text-text-secondary transition-all hover:border-white/30 hover:text-white"
          >
            <FiX size={20} />
          </button>

          <div className="mx-6 my-16 w-full max-w-xl rounded-2xl border border-divider bg-[#0f1012] px-6 py-10 sm:mx-10 sm:my-20 sm:px-10 sm:py-14">
            <div className="mb-10 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-accent/30 px-2.5 py-1 text-xs text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mb-3 font-mono text-xs tracking-widest text-text-tertiary uppercase">
              {project.detail.pageTitle}
            </p>

            <h1 className="heading-lg mb-4 text-2xl leading-tight text-white sm:text-3xl">
              {project.detail.mainTitle}
            </h1>

            {project.detail.subtitle && (
              <p className="mb-12 text-base leading-relaxed text-text-secondary">
                {project.detail.subtitle}
              </p>
            )}

            <div className="space-y-12">
              {project.detail.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="mb-3 text-lg font-semibold text-white">
                      {section.heading}
                    </h2>
                  )}
                  <p className="text-sm leading-7 text-text-secondary sm:text-base">
                    {section.body}
                  </p>
                  {section.illustration && (
                    <figure className="mt-5 overflow-hidden rounded-xl border border-divider">
                      <img
                        src={section.illustration.src}
                        alt={section.illustration.alt}
                        className="w-full"
                        loading="lazy"
                      />
                      {section.illustration.caption && (
                        <figcaption className="border-t border-divider px-4 py-2.5 text-center text-xs text-text-tertiary">
                          {section.illustration.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
