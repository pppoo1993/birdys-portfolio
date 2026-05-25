import type { ReactNode } from 'react'
import { useScrollFocus } from '../../hooks/useScrollFocus'

interface FocusableCardProps {
  children: ReactNode
  className?: string
}

export default function FocusableCard({ children, className = '' }: FocusableCardProps) {
  const ref = useScrollFocus()

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
