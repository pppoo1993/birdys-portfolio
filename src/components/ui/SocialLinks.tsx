import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import type { SocialLink } from '../../types'

interface SocialLinksProps {
  links: SocialLink[]
  size?: 'sm' | 'lg'
}

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  FiGithub,
  FiLinkedin,
  FiMail,
}

export default function SocialLinks({ links, size = 'lg' }: SocialLinksProps) {
  const iconSize = size === 'sm' ? 16 : 20

  return (
    <div className="flex items-center gap-3">
      {links.map((link) => {
        const Icon = iconMap[link.icon] ?? FiMail
        return (
          <a
            key={link.platform}
            href={link.url}
            target={link.url.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`inline-flex items-center gap-2 border border-divider transition-colors hover:border-accent hover:text-accent ${size === 'sm' ? 'px-3 py-2 text-xs' : 'px-4 py-2.5 text-sm'} text-text-secondary`}
          >
            <Icon size={iconSize} />
            {size === 'lg' && <span>{link.platform}</span>}
          </a>
        )
      })}
    </div>
  )
}
