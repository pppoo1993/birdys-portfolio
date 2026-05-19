interface TabIndicatorProps {
  total: number
  activeIndex: number
  onSelect: (index: number) => void
}

export default function TabIndicator({ total, activeIndex, onSelect }: TabIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          aria-label={`项目 ${i + 1}`}
          className={`rounded-full transition-all duration-300 ${
            i === activeIndex
              ? 'h-2.5 w-8 bg-accent'
              : 'h-2.5 w-2.5 bg-white/40 hover:bg-white/60'
          }`}
        />
      ))}
    </div>
  )
}
