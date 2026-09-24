interface AvatarProps {
  name: string
  src?: string
  size?: number
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

/** Profile photo with an initials fallback when no image is provided. */
export function Avatar({ name, src, size = 128 }: AvatarProps) {
  const style = { width: size, height: size }

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        style={style}
        className="rounded-full object-cover shadow-lg shadow-black/10 ring-1 ring-black/5 dark:shadow-black/40 dark:ring-white/10"
      />
    )
  }

  return (
    <div
      style={style}
      role="img"
      aria-label={name}
      className="flex items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-accent-700 text-4xl font-semibold text-white shadow-lg shadow-black/10 ring-1 ring-black/5 dark:shadow-black/40 dark:ring-white/10"
    >
      {getInitials(name)}
    </div>
  )
}
