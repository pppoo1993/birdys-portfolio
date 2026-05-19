import { useRef, useState, useEffect, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionWrapper from '../layout/SectionWrapper'
import ProjectCard from '../ui/ProjectCard'
import ScrollReveal from '../animations/ScrollReveal'
import { projectData } from '../../data/projects'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
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
      const width = container.clientWidth
      const index = Math.round(scrollLeft / width)
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

  return (
    <SectionWrapper id="projects" className="section-dark">
      <div className="mx-auto max-w-4xl">
        {/* Section title — mobile only */}
        <p className="heading-section mb-10 sm:hidden">项目作品</p>
        <ScrollReveal>
          <div className="relative">
            <div ref={containerRef} className="scroll-snap-container gap-4 lg:gap-0">
              {projectData.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  activeIndex={activeIndex}
                  onSelect={(idx) => scrollToIndex(idx)}
                />
              ))}
            </div>

            {isDesktop && (
              <>
                <button
                  onClick={handlePrev}
                  aria-label="上一个项目"
                  className="absolute top-[30%] left-4 -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-3 text-white/60 backdrop-blur transition-all hover:border-accent hover:text-accent"
                >
                  <FiChevronLeft size={22} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="下一个项目"
                  className="absolute top-[30%] right-4 -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-3 text-white/60 backdrop-blur transition-all hover:border-accent hover:text-accent"
                >
                  <FiChevronRight size={22} />
                </button>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  )
}
