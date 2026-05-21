import { useRef, useState, useEffect, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionWrapper from '../layout/SectionWrapper'
import ProjectCard from '../ui/ProjectCard'
import ProjectDetail from '../ui/ProjectDetail'
import ScrollReveal from '../animations/ScrollReveal'
import { projectData } from '../../data/projects'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import type { Project } from '../../types'

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const scrollToIndex = useCallback(
    (index: number) => {
      const container = containerRef.current
      if (!container) return
      const card = container.children[index] as HTMLElement
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      }
    },
    [],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container || !isDesktop) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const cardWidth = container.children[0]?.clientWidth ?? 0
      const gap = 16
      const index = Math.round(scrollLeft / (cardWidth + gap))
      setActiveIndex(index)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [isDesktop])

  const handlePrev = () => {
    const next = (activeIndex - 1 + projectData.length) % projectData.length
    scrollToIndex(next)
  }

  const handleNext = () => {
    const next = (activeIndex + 1) % projectData.length
    scrollToIndex(next)
  }

  const isAtStart = activeIndex === 0

  return (
    <SectionWrapper id="projects" className="section-dark !py-12 md:!py-16">
      <div className="mx-auto max-w-5xl">
        <p className="heading-section mb-10 sm:hidden">项目作品</p>
        <ScrollReveal>
          <div className="relative">
            <div
              ref={containerRef}
              className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-smooth"
              style={{ scrollbarWidth: 'none' }}
            >
              {projectData.map((project) => (
                <div
                  key={project.id}
                  className="w-[38vw] min-w-[260px] max-w-[420px] shrink-0 snap-start"
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </div>

            {isDesktop && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="上一个项目"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-3 text-white/60 backdrop-blur transition-all duration-300 hover:border-accent hover:text-accent"
                  style={{
                    opacity: isAtStart ? 0 : 1,
                    pointerEvents: isAtStart ? 'none' : 'auto',
                  }}
                >
                  <FiChevronLeft size={22} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="下一个项目"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-3 text-white/60 backdrop-blur transition-all hover:border-accent hover:text-accent"
                >
                  <FiChevronRight size={22} />
                </button>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>

      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SectionWrapper>
  )
}
