import { useEffect, useRef, useCallback } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default function Cursor() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const rafRef = useRef(0)
  const hovered = useRef(false)
  const frameCount = useRef(0)

  const checkHover = useCallback(() => {
    const el = document.elementFromPoint(mouseRef.current.x, mouseRef.current.y)
    if (!el) return
    const interactive = el.closest(
      '[data-cursor-hover], .project-card, .cursor-hover, [data-cursor-interactive], [data-goto], [data-preview]',
    )
    hovered.current = !!interactive
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    // Hide system cursor within the page
    document.documentElement.style.cursor = 'none'
    // Re-show on interactive elements if needed (handled by our custom cursor)
    const style = document.createElement('style')
    style.textContent = 'html, body, a, button, div, span, p, h1, h2, h3, h4, h5, h6, img, nav, aside, section, ul, li, svg { cursor: none !important; }'
    document.head.appendChild(style)

    // Animation loop
    const animate = () => {
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      // Dot: instant follow with GPU transform
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`
        // Scale down on hover
        dotRef.current.style.opacity = hovered.current ? '0' : '1'
        dotRef.current.style.transform += hovered.current ? ' scale(0)' : ' scale(1)'
      }

      // Ring: smooth lerp
      ringPos.current.x += (mx - ringPos.current.x) * 0.12
      ringPos.current.y += (my - ringPos.current.y) * 0.12

      if (ringRef.current) {
        const size = hovered.current ? 48 : 24
        const halfSize = size / 2
        ringRef.current.style.transform = `translate3d(${ringPos.current.x - halfSize}px, ${ringPos.current.y - halfSize}px, 0)`
        ringRef.current.style.width = `${size}px`
        ringRef.current.style.height = `${size}px`
        ringRef.current.style.borderColor = hovered.current
          ? 'rgba(204,255,0,0.8)'
          : 'rgba(204,255,0,0.4)'
        ringRef.current.style.backgroundColor = 'transparent'
      }

      // Check hover every 4 frames for performance
      frameCount.current++
      if (frameCount.current % 4 === 0) {
        checkHover()
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafRef.current)
      document.documentElement.style.cursor = ''
      if (style.parentNode) style.parentNode.removeChild(style)
    }
  }, [isDesktop, checkHover])

  if (!isDesktop) return null

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          width: 6,
          height: 6,
          backgroundColor: '#ccff00',
          boxShadow: '0 0 6px rgba(204,255,0,0.6)',
          willChange: 'transform, opacity',
          transition: 'opacity 0.15s ease',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          width: 24,
          height: 24,
          border: '1.5px solid rgba(204,255,0,0.4)',
          willChange: 'transform, width, height',
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background-color 0.25s ease',
        }}
      />
    </>
  )
}
