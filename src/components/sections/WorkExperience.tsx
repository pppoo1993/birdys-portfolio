import SectionWrapper from '../layout/SectionWrapper'
import ScrollReveal from '../animations/ScrollReveal'
import { experienceData } from '../../data/experience'

function formatDate(iso: string): string {
  const [y, m] = iso.split('-')
  return `${y}.${m}`
}

export default function WorkExperience() {
  return (
    <SectionWrapper id="experience" className="section-darker border-b border-divider !py-12 md:!py-16">
      <div className="mx-auto max-w-xl">
        <p className="heading-section mb-10 sm:hidden">工作经历</p>
        {experienceData.map((exp, i) => {
          const isFirst = i === 0
          const isLast = i === experienceData.length - 1
          return (
            <ScrollReveal key={exp.id}>
              <div className="relative flex w-full gap-x-6">
                {/* Timeline: dot + line */}
                <div className="mt-1 flex flex-col items-center">
                  {isFirst && (
                    <div
                      className="w-px min-h-[0.5rem] shrink-0 flex-1"
                      style={{
                        background: 'linear-gradient(to bottom, var(--color-accent), transparent)',
                      }}
                    />
                  )}
                  <div
                    className={`z-10 shrink-0 rounded-full ${
                      isFirst
                        ? 'h-3 w-3 bg-accent shadow-[0_0_8px_rgba(232,255,10,0.5)]'
                        : 'h-2 w-2 bg-divider'
                    }`}
                  />
                  {!isLast && <div className="mt-2 w-px flex-1 bg-divider" />}
                </div>

                {/* Content */}
                <div className={`flex flex-1 flex-col ${isLast ? '' : 'pb-12'}`}>
                  <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-xl font-bold text-white leading-none">
                      {exp.role}
                      <span className="mx-2 font-normal text-text-tertiary">·</span>
                      <span className="font-medium text-text-secondary">
                        {exp.company}
                      </span>
                    </h3>
                    <span className="font-mono text-sm text-text-tertiary">
                      {formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : '至今'}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="rounded-xl border border-divider bg-[#161719] p-5 sm:p-6">
                    <ul className="list-disc space-y-2 pl-4 text-sm leading-relaxed text-text-secondary">
                      {exp.description.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>

                    {/* Outlined tags with hover fill */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="cursor-default rounded-md border border-accent/30 px-2.5 py-1 text-xs text-accent transition-all hover:bg-accent hover:text-black"
                        >
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
