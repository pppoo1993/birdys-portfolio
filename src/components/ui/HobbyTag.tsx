interface HobbyTagProps {
  label: string
  index: number
}

export default function HobbyTag({ label }: HobbyTagProps) {
  return (
    <span className="inline-block border border-accent bg-accent-muted px-3 py-1 text-xs font-medium text-accent">
      {label}
    </span>
  )
}
