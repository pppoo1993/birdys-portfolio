import { useEffect, useRef } from 'react'

/**
 * Mobile-only IntersectionObserver that adds/removes `.is-focused`
 * when the element enters the center 40% of the viewport.
 */
export function useScrollFocus() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Only active on mobile (md = 768px)
    const mql = window.matchMedia('(max-width: 767px)')
    if (!mql.matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-focused')
        } else {
          el.classList.remove('is-focused')
        }
      },
      {
        // Only trigger when element is in the center 40% of viewport
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0,
      },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}
