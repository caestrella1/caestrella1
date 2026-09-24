import { Mail } from 'lucide-react'
import type { SocialLink } from '../types'
import { GithubIcon, LinkedinIcon } from './icons'

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
} as const

export function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex items-center gap-3">
      {links.map((link) => {
        const Icon = ICONS[link.icon]
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.icon === 'mail' ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={link.label}
            title={link.label}
            className="inline-flex size-11 items-center justify-center rounded-full border border-neutral-200/70 bg-neutral-100 text-neutral-600 transition-smooth duration-300 hover:-translate-y-0.5 hover:border-accent-500 hover:bg-accent-500 hover:text-white dark:border-neutral-800 dark:bg-neutral-800/80 dark:text-neutral-300 dark:hover:border-accent-500 dark:hover:bg-accent-500 dark:hover:text-white"
          >
            <Icon className="size-[19px]" />
          </a>
        )
      })}
    </div>
  )
}
