import { FiExternalLink, FiGithub } from 'react-icons/fi'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
  index: number
  activeIndex: number
  onSelect: (index: number) => void
}

export default function ProjectCard({ project, index, activeIndex, onSelect }: ProjectCardProps) {
  const isActive = index === activeIndex

  return (
    <div className="scroll-snap-card w-full px-2">
      <div className="card overflow-hidden p-0">
        <div className="relative">
          <img
            src={project.imagePath}
            alt={project.title}
            className="aspect-[21/9] w-full object-cover sm:aspect-[21/9]"
            loading="lazy"
          />
          {/* Dot indicator — desktop only */}
          <button
            onClick={() => onSelect(index)}
            aria-label={`项目 ${index + 1}`}
            className={`absolute bottom-3 left-1/2 hidden -translate-x-1/2 rounded-full transition-all sm:block ${
              isActive
                ? 'h-2.5 w-8 bg-accent'
                : 'h-2.5 w-2.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="heading-lg text-xl">{project.title}</h3>
          <p className="body-text mt-2 text-xs sm:text-sm">{project.description}</p>

          <div className="mt-4 flex gap-5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:underline"
              >
                <FiExternalLink size={14} />
                在线预览
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-accent hover:underline"
              >
                <FiGithub size={14} />
                源代码
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
