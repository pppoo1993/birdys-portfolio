import { useState, useRef, useEffect, useCallback } from 'react'
import ProjectDetail from '../ui/ProjectDetail'
import ScrollReveal from '../animations/ScrollReveal'
import { projectData } from '../../data/projects'
import type { Project } from '../../types'

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
    <div ref={wrapperRef} className="mt-3 md:mt-8 pt-3 md:pt-5 overflow-hidden relative">
      {/* Visible row */}
      <div className="font-mono text-[11px] text-[#71717a] whitespace-nowrap group-hover:text-[#a1a1aa] transition-colors duration-300">
        {tags.slice(0, count).map((tag, idx) => (
          <span key={tag}>
            {tag}{idx < Math.min(count, tags.length) - 1 ? <span className="text-[#3f3f46]"> / </span> : ''}
          </span>
        ))}
      </div>
      {/* Hidden measurement row */}
      <div ref={measureRef} className="font-mono text-[11px] absolute invisible whitespace-nowrap pointer-events-none top-0 left-0" aria-hidden="true">
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
  'project-2': '商业化转化率 +35%',
  'project-1': '操作效率提升 57%',
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section id="projects" className="w-full bg-[#0d0d0d]/30 backdrop-blur-sm py-16 md:py-20 border-t border-zinc-900/60">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="heading-section mb-4 md:hidden">Projects</p>

        <div className="flex flex-col gap-10 md:gap-14">
          {projectData.map((project, i) => {
            const isHovered = hoveredIdx === i
            const isDimmed = hoveredIdx !== null && hoveredIdx !== i

            return (
            <ScrollReveal key={project.id} delay={i * 0.05}>
              <div
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                data-cursor-interactive
                className="group cursor-pointer border border-[#1f1f23] rounded-lg overflow-visible min-h-[320px] md:min-h-[340px]"
                style={{
                  boxShadow: isHovered
                    ? '0 30px 60px rgba(0, 0, 0, 0.6)'
                    : '0 20px 40px rgba(0, 0, 0, 0.4)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  background: isHovered ? '#1a1a1c' : '#161618',
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
                      {/* Title */}
                      <h3 className="text-2xl md:text-[32px] font-semibold text-white tracking-wider mb-1">
                        {project.title}
                      </h3>
                      {project.detail?.subtitle && (
                        <p className="text-[15px] text-[#a1a1aa] font-semibold mb-2">
                          {project.detail.subtitle}
                        </p>
                      )}
                      <div className="w-10 h-px mb-2" style={{ background: '#333333' }} />
                      <p className="text-[13px] text-[#a1a1aa] leading-relaxed mb-0 md:mb-2 font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <TagsRow tags={project.techStack} />
                  </div>

                  {/* Right: 3D Phone Mockups */}
                  <div className="w-full md:w-[50%] flex-shrink-0 relative overflow-visible bg-transparent order-1 md:order-2 flex justify-center items-center pt-8 pb-2 md:pb-8"
                    style={{ perspective: '1000px' }}
                  >
                    {/* Achievement tag */}
                    <span
                      className="absolute top-8 right-7 md:right-10 z-20 font-mono text-[10px] font-medium tracking-[0.05em] rounded px-2.5 py-1"
                      style={{
                        background: 'rgba(0, 0, 0, 0.55)',
                        color: '#C7FF00',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      {achievementTags[project.id]}
                    </span>

                    <div className="relative" style={{ width: '200px', aspectRatio: '200/310' }}>
                      {/* Background phone */}
                      <div
                        className="phone-bg absolute w-[135px] h-[270px] bg-[#121214] border-[3px] border-[#27272a] rounded-[18px] overflow-hidden opacity-50 transition-all duration-500 group-hover:opacity-70"
                        style={{
                          top: '50%', left: '50%',
                          marginTop: '-135px', marginLeft: '-67px',
                          transform: 'rotateY(-25deg) rotateX(15deg) translateZ(0px) translateX(-40px) scale(0.9)',
                          boxShadow: '-10px 15px 30px rgba(0,0,0,0.7)',
                        }}
                      >
                        <div className="p-2 grid grid-cols-2 gap-1.5">
                          <div className="h-[90px] bg-[#1f1f23] rounded-md" />
                          <div className="h-[120px] bg-[#1f1f23] rounded-md" />
                          <div className="h-[110px] bg-[#1f1f23] rounded-md" />
                          <div className="h-[75px] bg-[#1f1f23] rounded-md" />
                        </div>
                      </div>

                      {/* Foreground phone */}
                      <div
                        className="phone-fg absolute w-[145px] h-[290px] bg-[#16161a] border-[3px] border-[#3f3f46] rounded-[20px] overflow-hidden z-5 transition-all duration-500 group-hover:border-[#6b7280]"
                        style={{
                          top: '50%', left: '50%',
                          marginTop: '-145px', marginLeft: '-72px',
                          transform: 'rotateY(-25deg) rotateX(15deg) translateZ(50px) translateX(30px) scale(0.9)',
                          boxShadow: '-20px 25px 40px rgba(0,0,0,0.8)',
                        }}
                      >
                        <div className="h-[140px] opacity-30" style={{ background: 'linear-gradient(to bottom, #222, #16161a)' }} />
                        <div className="px-2.5 grid grid-cols-2 gap-1.5 -mt-10">
                          <div className="h-[45px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.05)] rounded-md flex items-center justify-center text-[8px] text-[#71717a]">画画</div>
                          <div className="h-[45px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.05)] rounded-md flex items-center justify-center text-[8px] text-[#71717a]">台词</div>
                          <div className="h-[45px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.05)] rounded-md flex items-center justify-center text-[8px] text-[#71717a]">接龙</div>
                          <div className="h-[45px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.05)] rounded-md flex items-center justify-center text-[8px] text-[#71717a]">MV</div>
                        </div>
                        <div className="mx-2.5 mt-3 h-8 rounded-2xl flex items-center justify-center"
                          style={{
                            background: 'linear-gradient(90deg, #0099ff, #0066cc)',
                            boxShadow: '0 4px 12px rgba(0,102,204,0.4)',
                          }}
                        >
                          <span className="text-white text-[9px] font-bold tracking-wider">AI 创作视频</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
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
          border-color: #6b7280 !important;
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
