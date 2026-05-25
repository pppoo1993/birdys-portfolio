import { useState } from 'react'
import ProjectDetail from '../ui/ProjectDetail'
import ScrollReveal from '../animations/ScrollReveal'
import FocusableCard from '../ui/FocusableCard'
import { projectData } from '../../data/projects'
import type { Project } from '../../types'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="w-full bg-[#0d0d0d]/30 backdrop-blur-sm py-24 border-t border-zinc-900/60">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
          <p className="heading-section mb-4 md:hidden">Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projectData.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
            <FocusableCard className="project-card h-full flex flex-col rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-white/5 p-4 transition-all duration-500 group hover:border-white/10 hover:bg-zinc-900/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)]">
              <div
                onClick={() => setSelectedProject(project)}
                className="h-full flex flex-col"
              >
              <div className="relative w-full h-56 rounded-xl overflow-hidden bg-zinc-950 flex-shrink-0">
                <img
                  src={project.imagePath}
                  alt={project.title}
                  className="card-image w-full h-full object-cover transition-all duration-500 ease-out grayscale contrast-[90%] opacity-40 md:grayscale md:contrast-125 md:brightness-75 md:opacity-100 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
                <span className="focus-label absolute top-3 right-3 font-mono text-[10px] tracking-wider text-accent bg-zinc-950/70 backdrop-blur-sm px-2 py-0.5 rounded">
                  {project.detail?.pageTitle || 'PROJECT'}
                </span>
              </div>

              <div className="flex-1 flex flex-col p-4">
                <h3 className="focus-title text-lg font-bold text-zinc-100 group-hover:text-accent transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-5 font-light line-clamp-2 h-10">
                  {project.description}
                </p>
                <div className="focus-tags mt-auto pt-4 text-xs text-zinc-500 font-mono tracking-wider">
                  {project.techStack.slice(0, 2).map((tech, i) => (
                    <span key={tech}>
                      {i > 0 && ' / '}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </FocusableCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
