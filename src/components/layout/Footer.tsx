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
      className={`fixed bottom-[calc(1rem_+_env(safe-area-inset-bottom))] right-4 sm:bottom-[calc(1.5rem_+_env(safe-area-inset-bottom))] sm:right-6 z-50 flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-800 bg-zinc-900/40 text-zinc-400 backdrop-blur transition-all hover:border-accent hover:text-accent ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <FiArrowUp size={18} />
    </button>
  )
}
