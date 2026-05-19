import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { useScrollTo } from '../../hooks/useScrollTo'

export default function Footer() {
  const [visible, setVisible] = useState(false)
  const scrollTo = useScrollTo()

  useEffect(() => {
    const check = () => setVisible(window.scrollY > 400)
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  return (
    <button
      onClick={() => scrollTo('intro')}
      aria-label="回到顶部"
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/50 backdrop-blur transition-all hover:border-accent hover:text-accent ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <FiArrowUp size={18} />
    </button>
  )
}
