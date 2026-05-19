import { FiChevronDown } from 'react-icons/fi'

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="flex flex-col items-center gap-1 text-white/60">
        <span className="text-xs">向下滚动</span>
        <FiChevronDown size={20} />
      </div>
    </div>
  )
}
