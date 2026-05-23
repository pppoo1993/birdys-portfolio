import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
}

export default function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden px-6 md:px-24 ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-4xl">{children}</div>
    </section>
  )
}
