interface BadgeProps {
  children: string
  tone?: 'neutral' | 'accent'
}

/** Small pill used for tech tags and status labels. */
export function Badge({ children, tone = 'neutral' }: BadgeProps) {
  const tones: Record<string, string> = {
    neutral:
      'bg-neutral-100 text-neutral-600 dark:bg-neutral-800/70 dark:text-neutral-300',
    accent: 'bg-accent-100 text-accent-700 dark:bg-accent-500/15 dark:text-accent-300',
  }

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  )
}
