interface TimelineItemProps {
  company: string
  role: string
  startDate: string
  endDate: string | null
  description: string[]
  techStack: string[]
  isLast: boolean
}

function formatDate(iso: string): string {
  const [y, m] = iso.split('-')
  return `${y}.${m}`
}

export default function TimelineItem({
  company,
  role,
  startDate,
  endDate,
  description,
  techStack,
  isLast,
}: TimelineItemProps) {
  const start = formatDate(startDate)
  const end = endDate ? formatDate(endDate) : '至今'

  return (
    <div className="relative flex gap-4 md:gap-8">
      {/* Date column */}
      <div className="flex w-24 shrink-0 flex-col items-end pt-1 md:w-32">
        <span className="accent-text text-xs font-medium sm:text-sm">
          {start} — {end}
        </span>
      </div>

      {/* Timeline line + dot */}
      <div className="relative flex flex-col items-center">
        <div className="z-10 mt-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
        {!isLast && <div className="w-px flex-1 bg-divider" />}
      </div>

      {/* Content */}
      <div className={`flex-1 ${isLast ? '' : 'pb-10'}`}>
        <div className="card mb-6 p-5 sm:p-6">
          <h3 className="heading-lg text-xl">{role}</h3>
          <p className="caption mt-1 mb-4">{company}</p>
          <ul className="mb-4 space-y-1.5">
            {description.map((item, i) => (
              <li key={i} className="text-xs leading-relaxed text-text-secondary sm:text-sm">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-accent-muted px-2.5 py-0.5 text-xs font-medium text-accent"
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
