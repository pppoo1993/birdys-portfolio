import { useState } from 'react'
import ProjectDetail from '../ui/ProjectDetail'
import ScrollReveal from '../animations/ScrollReveal'
import { projectData } from '../../data/projects'
import type { Project } from '../../types'

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

        <div className="flex flex-col gap-6 md:gap-8">
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
                className="group cursor-pointer bg-[#161618] border border-[#1f1f23] rounded-lg overflow-hidden"
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
                  {/* Left: text — 42% */}
                  <div className="w-full md:w-[50%] flex flex-col justify-between pl-7 md:pl-10 pr-7 md:pr-0 pt-0 md:pt-10 pb-7 md:pb-10 order-2 md:order-1">
                    <div>
                      <h3 className="text-2xl md:text-[26px] font-bold text-white group-hover:text-[#C7FF00] transition-colors duration-300 mb-1.5">
                        {project.title}
                      </h3>
                      {project.detail?.mainTitle && (
                        <p className="text-sm md:text-base text-zinc-400 font-medium mb-3">
                          {project.detail.mainTitle}
                        </p>
                      )}
                      <div className="w-10 h-px bg-zinc-700 mb-3" />
                      <p className="text-[#a1a1aa] text-[13px] leading-[1.6] tracking-[0.02em] font-light mb-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Metadata row */}
                    <p className="text-[11px] font-mono font-medium text-[#71717a] tracking-[0.06em] mt-auto" style={{ display: "flex", flexWrap: "wrap", maxHeight: "1.4em", overflow: "hidden", gap: "0 2px" }}>
                      {project.techStack.map((t, i) => (
                        <span key={t} style={{ whiteSpace: "nowrap" }}>
                          {t}{i < project.techStack.length - 1 ? <span style={{ color: "#52525b" }}> /</span> : ''}
                        </span>
                      ))}
                    </p>
                  </div>

                  {/* Right: image — 58% */}
                  <div className="w-full md:w-[50%] flex-shrink-0 relative overflow-hidden bg-[#161618] order-1 md:order-2 min-h-[220px] md:min-h-[280px]">
                    {/* Achievement tag */}
                    <span
                      className="absolute top-3 right-3 z-20 font-mono text-[10px] font-semibold tracking-[0.05em] rounded px-2.5 py-1"
                      style={{
                        background: 'rgba(0, 0, 0, 0.55)',
                        color: '#C7FF00',
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      {achievementTags[project.id]}
                    </span>
                    {/* Ambient dark gradient mask */}
                    <div
                      className="absolute inset-0 z-10 pointer-events-none project-mask"
                    />
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                      style={{
                        filter: 'grayscale(100%) brightness(0.65) contrast(0.9)',
                        opacity: 1,
                        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      }}
                    />
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

      {/* ════ Hover image reveal styles ════ */}
      <style>{`
        .group:hover img {
          filter: grayscale(20%) brightness(0.85) contrast(1) !important;
          opacity: 0.75 !important;
        }
        .project-mask {
          background: linear-gradient(to top, rgba(22,22,24,1) 0%, rgba(22,22,24,1) 15%, rgba(22,22,24,0.3) 50%, transparent 100%) !important;
        }
        .group:hover .project-mask {
          background: linear-gradient(to top, rgba(26,26,28,1) 0%, rgba(26,26,28,1) 15%, rgba(26,26,28,0.3) 50%, transparent 100%) !important;
        }
        @media (min-width: 768px) {
          .project-mask {
            background: linear-gradient(to right, rgba(22,22,24,1) 0%, rgba(22,22,24,1) 15%, rgba(22,22,24,0.3) 50%, transparent 100%) !important;
          }
          .group:hover .project-mask {
            background: linear-gradient(to right, rgba(26,26,28,1) 0%, rgba(26,26,28,1) 15%, rgba(26,26,28,0.3) 50%, transparent 100%) !important;
          }
        }
      `}</style>
    </section>
  )
}
