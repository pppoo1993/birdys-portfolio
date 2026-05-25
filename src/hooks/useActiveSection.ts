import { useState, useEffect, useRef } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')
  const activeRef = useRef(activeId)
  activeRef.current = activeId

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const ratios = new Map<string, number>()

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      ratios.set(id, 0)

      const observer = new IntersectionObserver(
        ([entry]) => {
          ratios.set(id, entry.intersectionRatio)
          // Pick section with highest visible ratio
          let best = ''
          let bestRatio = 0
          ratios.forEach((r, sid) => {
            if (r > bestRatio) { bestRatio = r; best = sid }
          })
          if (best) setActiveId(best)
        },
        { threshold: [0, 0.5] },
      )

      observer.observe(el)
      observers.push(observer)
    })

    // Fallback: force first/last section at page edges
    const onScroll = () => {
      if (sectionIds.length === 0) return
      if (window.scrollY < 80) {
        setActiveId(sectionIds[0])
        return
      }
      const bottomGap = document.documentElement.scrollHeight - window.innerHeight - window.scrollY
      if (bottomGap < 40) {
        setActiveId(sectionIds[sectionIds.length - 1])
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observers.forEach((o) => o.disconnect())
      window.removeEventListener('scroll', onScroll)
    }
  }, [sectionIds])

  return activeId
}
