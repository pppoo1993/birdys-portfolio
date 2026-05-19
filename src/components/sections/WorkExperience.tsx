import SectionWrapper from '../layout/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'
import { experienceData } from '../../data/experience'

function formatDate(iso: string): string {
  const [y, m] = iso.split('-')
  return `${y}.${m}`
}

export default function WorkExperience() {
  return (
    <SectionWrapper id="experience" className="section-darker border-b border-divider">
      <div className="mx-auto max-w-xl">
        <p className="heading-section mb-10 sm:hidden">工作经历</p>
        {experienceData.map((exp, i) => {
          const isFirst = i === 0
          return (
            <ScrollReveal key={exp.id}>
              <div className="relative flex gap-4">
                {/* Timeline: dot + line */}
                <div className="flex w-6 shrink-0 flex-col items-center">
                  <div
                    className={`z-10 mt-[7px] h-2 w-2 rounded-full ${
                      isFirst ? 'bg-accent ring-4 ring-accent-muted' : 'bg-divider'
                    }`}
                  />
                  {i < experienceData.length - 1 && (
                    <div className="w-px flex-1 bg-divider" />
                  )}
                </div>

                {/* Date + Card */}
                <div className={`flex-1 ${i < experienceData.length - 1 ? 'pb-8' : ''}`}>
                  <p className="mb-3 text-sm font-medium text-white">
                    <span>
                      {formatDate(exp.startDate)}
                      <span className="text-text-tertiary">—</span>
                      {exp.endDate ? formatDate(exp.endDate) : '至今'}
                    </span>
                    <span className="mx-1.5 text-text-tertiary hidden sm:inline">|</span>
                    <br className="sm:hidden" />
                    <span className="font-semibold">{exp.role}</span>
                    <span className="mx-1 text-text-tertiary">·</span>
                    <span className="text-text-secondary">{exp.company}</span>
                  </p>
                  <div className="card p-5 sm:p-6">
                    <ul className="space-y-1.5">
                      {exp.description.map((item, j) => (
                        <li key={j} className="text-xs leading-relaxed text-text-secondary sm:text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="bg-accent-muted px-2.5 py-0.5 text-xs font-medium text-accent">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
