import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`card p-5 sm:p-6 lg:p-8 ${className}`}>
      {children}
    </div>
  )
}
