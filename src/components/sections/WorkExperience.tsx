import { useState } from 'react'
import { experienceData } from '../../data/experience'

function formatDate(iso: string): string {
  const [y, m] = iso.split('-')
  return `${y}.${m}`
}

const ordered = [
  { ...experienceData[0], idx: 1 },
  { ...experienceData[1], idx: 2 },
  { ...experienceData[2], idx: 3 },
]

export default function WorkExperience() {
  const [active, setActive] = useState(0)
  const exp = ordered[active]

  const groups = (() => {
    const g: { header?: string; items: string[] }[] = []
    for (const item of exp.description) {
      if (item.startsWith('##')) {
        g.push({ header: item.slice(2), items: [] })
      } else if (g.length > 0) {
        g[g.length - 1].items.push(item)
      } else {
        g.push({ items: [item] })
      }
    }
    return g
  })()

  return (
    <section
      id="experience"
      className="relative w-full section-darker border-b border-divider py-16 md:py-20"
    >
      <p className="heading-section mb-6 md:hidden px-4">Work Experience</p>

      {/* ════ MOBILE: Horizontal timeline top + detail below ════ */}
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 md:hidden">
        <div
          className="flex flex-row gap-0 mb-4 overflow-x-auto scrollbar-none"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {ordered.map((item, i) => {
            const isActive = active === i
            const t = `${formatDate(item.startDate)} — ${(item.endDate ? formatDate(item.endDate) : '至今')}`

            const setRef = (el: HTMLDivElement | null) => {
              if (el && isActive) {
                el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: i === 0 ? 'start' : i === 1 ? 'center' : 'end' })
              }
            }

            return (
              <div
                key={item.id}
                ref={setRef}
                onClick={() => setActive(i)}
                data-cursor-interactive
                className={`cursor-pointer flex-shrink-0 min-w-[110px] px-3 py-2 text-center transition-all duration-300 ${
                  isActive
                    ? 'opacity-100 bg-[#C7FF00]/[0.06] border-b-[3px] border-[#C7FF00]'
                    : 'opacity-60 border-b-[3px] border-transparent bg-white/[0.02]'
                }`}
              >
                <span className={`font-mono block text-[10px] ${isActive ? 'text-[#C7FF00] font-bold' : 'text-zinc-500'}`}>
                  {t}
                </span>
                <span className={`block truncate text-sm mt-0.5 ${isActive ? 'text-[#C7FF00] font-bold' : 'text-white'}`}>
                  {item.company}
                </span>
                <span className={`block truncate text-xs mt-0.5 ${isActive ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {item.role}
                </span>
              </div>
            )
          })}
        </div>
        <div className="pt-2">
          <div className="space-y-3">
            {groups.map((group, gi) => (
              <div key={gi}>
                {group.header && (
                  <h4 className="text-[12px] font-semibold text-white mb-1.5">{group.header}</h4>
                )}
                <ul className="space-y-1.5">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-[#a1a1aa] text-[12px] leading-[1.6] tracking-[0.02em] font-light">
                      <span className="text-[#C7FF00]/60 mt-[6px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C7FF00]/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════ DESKTOP: Left timeline + right detail ════ */}
      <div className="w-full max-w-5xl mx-auto hidden md:flex flex-row gap-0 px-6 md:px-12" style={{ minHeight: '320px' }}>
        <div className="w-[280px] flex-shrink-0">
          {ordered.map((item, i) => {
            const isActive = active === i
            const t = `${formatDate(item.startDate)} — ${(item.endDate ? formatDate(item.endDate) : '至今')}`
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActive(i)}
                data-cursor-interactive
                className={`cursor-pointer pl-6 pr-0 transition-all duration-300 ${
                  isActive
                    ? 'bg-[#C7FF00]/[0.06] border-l-[3px] border-l-[#C7FF00] py-4 md:py-5'
                    : 'border-l-[3px] border-l-transparent bg-white/[0.015] hover:bg-white/[0.03] py-2 md:py-3'
                }`}
              >
                <span className={`font-mono transition-all duration-300 ${isActive ? 'text-sm md:text-base text-[#C7FF00]' : 'text-xs text-zinc-500'}`}>
                  {t}
                </span>
                <p className={`font-semibold truncate mt-0.5 transition-all duration-300 ${isActive ? 'text-lg md:text-xl text-[#C7FF00]' : 'text-sm md:text-base text-white'}`}>
                  {item.company}
                </p>
                <p className={`font-light truncate mt-0.5 transition-all duration-300 ${isActive ? 'text-sm md:text-base text-zinc-300' : 'text-xs text-zinc-500'}`}>
                  {item.role}
                </p>
              </div>
            )
          })}
        </div>
        <div className="flex-1 pl-10 pr-0 pt-0 pb-4 border-l border-zinc-800/50" style={{ minHeight: '320px' }}>
          <div className="space-y-4">
            {groups.map((group, gi) => (
              <div key={gi}>
                {group.header && (
                  <h4 className="text-[13px] font-semibold text-white mb-2">{group.header}</h4>
                )}
                <ul className="space-y-1.5">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[#a1a1aa] text-[13px] leading-[1.6] tracking-[0.02em] font-light">
                      <span className="text-[#C7FF00]/60 mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C7FF00]/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
