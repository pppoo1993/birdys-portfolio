import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-divider bg-[#161719] transition-all hover:border-white/20 hover:bg-[#1a1b1e]"
    >
      <div className="aspect-[4/3] w-full shrink-0 overflow-hidden">
        <img
          src={project.imagePath}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold text-white transition-colors group-hover:text-accent sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
          {project.description}
        </p>
        <div className="mt-auto pt-3">
          <div className="flex flex-nowrap gap-1.5 overflow-hidden">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="shrink-0 rounded border border-divider px-2 py-0.5 text-[0.65rem] text-text-tertiary sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
