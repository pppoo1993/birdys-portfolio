import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import ProjectDetail from '../ui/ProjectDetail'
import { projectData } from '../../data/projects'
import type { Project } from '../../types'
import MockupChijing from '../ui/MockupChijing'
import MockupLive from '../ui/MockupLive'
import MockupPad from '../ui/MockupPad'

function TagsRow({ tags }: { tags: string[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(tags.length)

  const measure = useCallback(() => {
    const wrapper = wrapperRef.current
    const measureEl = measureRef.current
    if (!wrapper || !measureEl) return
    const maxW = wrapper.clientWidth
    let acc = 0
    const children = measureEl.children
    let visible = 0
    for (let i = 0; i < children.length; i++) {
      acc += (children[i] as HTMLElement).offsetWidth
      if (acc <= maxW) visible++
      else break
    }
    setCount(visible || 1)
  }, [])

  useEffect(() => {
    measure()
    const ro = new ResizeObserver(measure)
    if (wrapperRef.current) ro.observe(wrapperRef.current)
    return () => ro.disconnect()
  }, [tags, measure])

  return (
    <div ref={wrapperRef} className="mt-3 md:mt-8 overflow-hidden relative">
      <div className="w-full h-px mb-3 md:mb-5" style={{ background: '#27272a' }} />
      {/* Visible row */}
      <div className="text-[12px] text-[#8a8a8a] font-light whitespace-nowrap group-hover:text-[#a1a1aa] transition-colors duration-300">
        {tags.slice(0, count).map((tag, idx) => (
          <span key={tag}>
            {tag}{idx < Math.min(count, tags.length) - 1 ? <span className="text-[#52525b]"> &nbsp;/&nbsp; </span> : ''}
          </span>
        ))}
      </div>
      {/* Hidden measurement row */}
      <div ref={measureRef} className="text-[12px] font-light absolute invisible whitespace-nowrap pointer-events-none top-0 left-0" aria-hidden="true">
        {tags.map((tag, idx) => (
          <span key={tag}>
            {tag}{idx < tags.length - 1 ? <span className="text-[#3f3f46]"> / </span> : ''}
          </span>
        ))}
      </div>
    </div>
  )
}

const achievementTags: Record<string, string> = {
  'project-3': 'AI 架构从 0 到 1',
  'project-2': '直播间转化率 +35%',
  'project-1': 'Pad端体验重构',
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [autoIdx, setAutoIdx] = useState(0)
  const [inView, setInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  // IntersectionObserver — start auto-cycle when section enters viewport
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])



  // When user manually hovers, pause auto-cycle
  const handleMouseEnter = (i: number) => setHoveredIdx(i)
  const handleMouseLeave = () => setHoveredIdx(null)

  // Active index: manual hover takes priority, otherwise auto-cycle
  const activeIdx = hoveredIdx !== null ? hoveredIdx : (inView ? autoIdx : null)
  
  // Track scroll: activate cards based on which is closest to viewport center
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  useEffect(() => {
    if (!inView) return
    const onScroll = () => {
      const vh = window.innerHeight
      const center = vh / 2
      let best = 0
      let bestDist = Infinity
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cardCenter = rect.top + rect.height / 2
        const dist = Math.abs(cardCenter - center)
        if (dist < bestDist) { bestDist = dist; best = i }
      })
      setAutoIdx(best)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [inView])

  return (
    <section ref={sectionRef} id="projects" className="w-full bg-[#0d0d0d]/30 backdrop-blur-sm py-16 md:py-20 border-t border-zinc-900/60">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="heading-section mb-4 md:hidden">Projects</p>

        <div className="flex flex-col gap-12 md:gap-20" >
          {projectData.map((project, i) => {
            const isHovered = activeIdx === i
            const isDimmed = activeIdx !== null && activeIdx !== i

            return (
            <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 1.08, filter: 'blur(6px)', y: 30, rotate: 1.5 }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              >
              <div
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave()}
                data-cursor-interactive
                ref={(el) => { cardRefs.current[i] = el }}
                className="group cursor-pointer border border-[#1f1f23] rounded-lg overflow-visible min-h-[320px] md:min-h-[340px]"
                style={{
                  boxShadow: isHovered
                    ? '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)'
                    : '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  background: isHovered ? 'rgba(26,26,28,0.85)' : 'rgba(22,22,24,0.75)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderColor: isHovered ? '#27272a' : '#1f1f23',
                  opacity: isDimmed ? 0.4 : 1,
                  filter: isDimmed ? 'blur(0.5px)' : 'none',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    willChange: 'transform, opacity',
                }}
              >
                <div className="flex flex-col md:flex-row gap-0 items-stretch">
                  {/* Left: text */}
                  <div className="w-full md:w-[50%] flex flex-col justify-between pl-7 md:pl-10 pr-7 md:pr-10 pt-2 md:pt-8 pb-5 md:pb-8 order-2 md:order-1">
                    <div>
                      {/* Title + logo */}
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#1a1a1e] border border-[#27272a] flex items-center justify-center shrink-0">
                          <span className="text-xs md:text-sm text-[#52525b] font-mono">App</span>
                        </div>
                        <h3 className="text-2xl md:text-[32px] font-semibold text-white tracking-wider">
                          {project.title}
                        </h3>
                      </div>
                      {project.detail?.subtitle && (
                        <p className="text-base md:text-lg text-[#d4d4d8] font-normal mb-3">
                          {project.detail.subtitle}
                        </p>
                      )}
                      <p className="text-[#A0A0A0] text-[13px] leading-[1.6] tracking-[0.02em] font-light mb-0">
                        {project.description}
                      </p>

                      {/* CTA Button */}
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedProject(project) }}
                        className="mt-5 px-5 py-2 text-[13px] font-medium text-[#a1a1aa] rounded-full transition-all duration-300 hover:text-white"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                          border: '1px solid rgba(255,255,255,0.08)',
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                        }}
                      >
                        查看详情
                      </button>
                    </div>

                    {/* Tags */}
                    <TagsRow tags={project.techStack} />
                  </div>

                  {/* Right: Phone Mockups — unique container per project */}
                  <div className="w-full md:w-[50%] flex-shrink-0 relative overflow-visible bg-transparent order-1 md:order-2 flex justify-center items-center pt-6 pb-2 md:pb-6"
                    style={{ perspective: project.id === 'project-3' ? '600px' : project.id === 'project-2' ? 'none' : '1000px' }}
                  >
                    {/* Achievement tag */}
                    <span
                      className="absolute top-6 right-7 md:right-10 z-20 font-mono text-[10px] font-medium tracking-[0.05em] rounded px-2.5 py-1"
                      style={{ background: 'rgba(0, 0, 0, 0.55)', color: '#C7FF00', backdropFilter: 'blur(4px)' }}
                    >
                      {achievementTags[project.id]}
                    </span>

                    {project.id === 'project-3' && (
                      <div className="relative" style={{ width: '200px', aspectRatio: '200/310' }}>
                        {/* 吃鲸AI — dual phone stacked */}
                        <div className="phone-bg absolute w-[148px] h-[296px] bg-[#111114] rounded-[20px] overflow-hidden opacity-40 transition-all duration-500 group-hover:opacity-60"
                          style={{
                            top: '50%', left: '50%',
                            marginTop: '-148px', marginLeft: '-74px',
                            transform: isHovered ? 'rotateX(33deg) rotateZ(-13deg) translateZ(-20px) translateX(-40px) scale(0.9)' : 'rotateX(35deg) rotateZ(-10deg) translateZ(-15px) translateX(-35px) scale(0.9)',
                            border: '2px solid #242427',
                            boxShadow: isHovered ? '0 20px 50px rgba(0,0,0,0.95)' : '0 15px 40px rgba(0,0,0,0.85)',
                          }}>
                          <div className="p-2 grid grid-cols-2 gap-1.5 h-full">
                            <div className="h-[90px] bg-[#1f1f23] rounded-md" />
                            <div className="h-[120px] bg-[#1f1f23] rounded-md" />
                            <div className="h-[110px] bg-[#1f1f23] rounded-md" />
                            <div className="h-[75px] bg-[#1f1f23] rounded-md" />
                          </div>
                        </div>
                        <div className="phone-fg absolute w-[148px] h-[296px] rounded-[20px] overflow-hidden z-5 transition-all duration-500"
                          style={{
                            top: '50%', left: '50%',
                            marginTop: '-148px', marginLeft: '-74px',
                            transform: isHovered ? 'rotateX(28deg) rotateZ(-8deg) translateZ(70px) translateX(15px) translateY(20px) scale(0.92)' : 'rotateX(35deg) rotateZ(-10deg) translateZ(50px) translateX(10px) translateY(15px) scale(0.9)',
                            boxShadow: isHovered ? '0 20px 50px rgba(0,0,0,0.95)' : '0 15px 40px rgba(0,0,0,0.85)',
                            background: '#161a1e',
                            border: isHovered ? '2px solid #3f3f46' : '2px solid #27272a',
                          }}>
                          <MockupChijing />
                        </div>
                      </div>
                    )}

                    {project.id === 'project-2' && (
                      <div className="relative" style={{ width: '200px', aspectRatio: '200/310' }}>
                        {/* 明星陪看 — dual phone stacked */}
                        <div className="phone-bg absolute w-[148px] h-[296px] bg-[#111114] rounded-[20px] overflow-hidden opacity-40 transition-all duration-500 group-hover:opacity-60"
                          style={{
                            top: '50%', left: '50%',
                            marginTop: '-148px', marginLeft: '-74px',
                            transform: isHovered ? 'rotateY(-15deg) translateZ(-15px) translateX(-35px) scale(0.9)' : 'rotateY(-10deg) translateZ(-10px) translateX(-30px) scale(0.9)',
                            border: '2px solid #242427',
                            boxShadow: isHovered ? '0 20px 50px rgba(0,0,0,0.95)' : '0 15px 40px rgba(0,0,0,0.85)',
                          }}>
                          <div className="p-2.5 flex flex-col gap-1.5">
                            <div className="h-[15px] bg-[#222] rounded w-[40%]" />
                            <div className="h-[100px] bg-[#1a1a1f] rounded-md" />
                            <div className="h-[80px] bg-[#1a1a1f] rounded-md" />
                          </div>
                        </div>
                        <div className="phone-fg absolute w-[148px] h-[296px] rounded-[20px] overflow-hidden z-5 transition-all duration-500"
                          style={{
                            top: '50%', left: '50%',
                            marginTop: '-148px', marginLeft: '-74px',
                            transform: isHovered ? 'rotateY(-10deg) translateZ(60px) translateX(30px) scale(0.92)' : 'rotateY(-5deg) translateZ(40px) translateX(25px) scale(0.9)',
                            boxShadow: isHovered ? '0 20px 50px rgba(0,0,0,0.95)' : '0 15px 40px rgba(0,0,0,0.85)',
                            background: '#17151a',
                            border: isHovered ? '2px solid #3f3f46' : '2px solid #27272a',
                          }}>
                          <MockupLive />
                        </div>
                      </div>
                    )}

                    {project.id === 'project-1' && (
                      <div className="relative" style={{ width: '240px', aspectRatio: '240/190' }}>
                        {/* Pad — stacked 3D dual tablets, landscape */}
                        <div className="phone-bg absolute w-[210px] h-[148px] bg-[#111114] rounded-[16px] overflow-hidden opacity-40 transition-all duration-500 group-hover:opacity-60"
                          style={{
                            top: '50%', left: '50%',
                            marginTop: '-74px', marginLeft: '-105px',
                            transform: isHovered ? 'rotateY(12deg) rotateX(8deg) translateZ(-20px) translateX(-20px) scale(0.88)' : 'rotateY(10deg) rotateX(6deg) translateZ(-15px) translateX(-15px) scale(0.9)',
                            border: '2px solid #242427',
                            boxShadow: isHovered ? '0 20px 50px rgba(0,0,0,0.95)' : '0 15px 40px rgba(0,0,0,0.85)',
                          }}>
                          <div className="p-3 flex gap-2">
                            <div className="w-[100px] h-[100px] bg-[#1a1a1f] rounded-md" />
                            <div className="flex-1 flex flex-col gap-1.5">
                              <div className="h-[12px] bg-[#222] rounded w-[60%]" />
                              <div className="h-[8px] bg-[#222] rounded w-[80%]" />
                              <div className="h-[8px] bg-[#222] rounded w-[40%]" />
                            </div>
                          </div>
                        </div>
                        <div className="phone-fg absolute w-[220px] h-[155px] rounded-[18px] overflow-hidden z-5 transition-all duration-500"
                          style={{
                            top: '50%', left: '50%',
                            marginTop: '-77px', marginLeft: '-110px',
                            transform: isHovered ? 'rotateY(8deg) rotateX(5deg) translateZ(50px) translateX(15px) scale(0.94)' : 'rotateY(6deg) rotateX(3deg) translateZ(35px) translateX(10px) scale(0.92)',
                            boxShadow: isHovered ? '0 20px 50px rgba(0,0,0,0.95)' : '0 15px 40px rgba(0,0,0,0.85)',
                            background: '#161a18',
                            border: isHovered ? '2px solid #3f3f46' : '2px solid #27272a',
                          }}>
                          <MockupPad />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>

      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* ════ 3D Phone hover tilt + tag color ════ */}
      <style>{`
        .group:hover .phone-fg {
          transform: rotateY(-20deg) rotateX(10deg) translateZ(70px) translateX(35px) scale(0.9) !important;
          border-color: #52525b !important;
        }
        .group:hover .phone-bg {
          transform: rotateY(-28deg) rotateX(18deg) translateZ(-10px) translateX(-45px) scale(0.9) !important;
          opacity: 0.7 !important;
        }
        .group:hover .project-tag-line {
          color: #a1a1aa;
        }
      `}</style>
    </section>
  )
}
