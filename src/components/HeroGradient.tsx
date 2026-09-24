// Edge-to-edge backdrop behind the whole intro: a handful of soft, blurred
// color fields that slowly rotate as one static SVG. Nothing about the
// gradient itself changes — the illusion of flowing color comes entirely
// from the slow rotation, which is cheap (one GPU transform) compared to
// animating gradient stops or loading a photo.
const LAYER_CLASSES =
  'pointer-events-none absolute -top-16 left-1/2 -z-10 h-[704px] w-screen -translate-x-1/2 overflow-hidden sm:-top-24 sm:h-[736px]'

export function HeroGradient() {
  return (
    <div aria-hidden="true" className={`${LAYER_CLASSES} hero-gradient-mask`}>
      <svg
        className="hero-gradient-spin absolute left-1/2 top-1/2 h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2 opacity-60 dark:opacity-30"
        viewBox="0 0 600 600"
      >
        <defs>
          <radialGradient id="blob-a" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-accent-300)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--color-accent-300)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="blob-b" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-accent-500)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--color-accent-500)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="blob-c" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-accent-700)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-accent-700)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="blob-d" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-accent-400)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--color-accent-400)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="150" r="175" fill="url(#blob-a)" />
        <circle cx="460" cy="180" r="150" fill="url(#blob-b)" />
        <circle cx="420" cy="450" r="195" fill="url(#blob-c)" />
        <circle cx="150" cy="440" r="140" fill="url(#blob-d)" />
      </svg>
    </div>
  )
}
