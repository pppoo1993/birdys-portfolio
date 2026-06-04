import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right'
  delay?: number
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: ScrollRevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  const directionMap = {
    up: { y: 24 },
    left: { x: 24 },
    right: { x: -24 },
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}
