import { useEffect, useRef } from 'react'

interface DottedSurfaceProps {
  className?: string
}

export default function DottedSurface({ className }: DottedSurfaceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let raf = 0
    let t = 0

    const resize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const render = () => {
      raf = requestAnimationFrame(render)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      ctx.clearRect(0, 0, w, h)

      ctx.fillStyle = '#c8c8c8'

      const cols = 44
      const rows = 26
      const horizon = h * 0.28

      for (let r = 0; r < rows; r++) {
        const depth = r / (rows - 1) // 0 = near/bottom, 1 = far/horizon
        const rowY = horizon + (h - horizon) * Math.pow(depth, 1.7)
        const size = 0.5 + (1 - depth) * 2.3
        const alpha = 0.08 + (1 - depth) * 0.32

        for (let c = 0; c < cols; c++) {
          const waveX =
            Math.sin(c * 0.32 + t * 0.9) * 5 * (0.5 + depth * 0.5) +
            Math.sin((c + r) * 0.2 - t * 0.6) * 4
          const waveY = Math.sin(r * 0.55 + t * 0.8) * 4 * (1 - depth)
          const x = (c / (cols - 1)) * w + waveX
          const y = rowY + waveY

          if (y < 0 || y > h || x < -10 || x > w + 10) continue

          ctx.globalAlpha = alpha
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      t += 0.05
    }
    render()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 h-full w-full ${className || ''}`}
    />
  )
}
