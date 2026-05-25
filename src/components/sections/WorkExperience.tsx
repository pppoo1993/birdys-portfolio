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
      <div className="mx-auto py-12">
        <p className="heading-section mb-4 md:hidden">Work Experience</p>
        <div>
          {experienceData.map((exp, i) => {
            const isLast = i === experienceData.length - 1
            return (
              <ScrollReveal key={exp.id}>
                <div className={`relative flex gap-4 md:gap-6 pb-16 ${isLast ? 'last:pb-0' : ''} group`}>
                  <div className="relative z-10 flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent/30 animate-pulse" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent shadow-[0_0_10px_rgba(204,255,0,1)]" />
                  </div>

                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-100">
                        {exp.role}
                      </h3>
                      <span className="text-zinc-500 font-light">·</span>
                      <span className="text-zinc-400 font-medium">{exp.company}</span>
                    </div>
                    <span className="font-mono text-xs md:text-sm tracking-wider text-zinc-500">
                      {formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : '至今'}
                    </span>
                  </div>

                  <div className="relative overflow-hidden rounded-xl bg-zinc-900/40 border border-zinc-800/60 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                      <ul className="flex-1 space-y-3 text-zinc-300 text-sm leading-relaxed font-light list-none">
                        {exp.description.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="text-accent mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex lg:flex-col gap-4 border-t lg:border-t-0 lg:border-l border-zinc-700/40 pt-4 lg:pt-0 lg:pl-8 min-w-[120px] justify-around">
                        <div>
                          <div className="text-2xl font-mono font-bold text-accent tracking-tight">+30%</div>
                          <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono mt-0.5">Collab Efficiency</div>
                        </div>
                        <div>
                          <div className="text-2xl font-mono font-bold text-accent tracking-tight">+25%</div>
                          <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono mt-0.5">Conversion Rate</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-zinc-700/30">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono font-light rounded-md bg-zinc-950/80 text-zinc-400 border border-zinc-850 transition-colors duration-200 hover:text-accent hover:border-accent/40"
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
      </div>
    </SectionWrapper>
  )
}
