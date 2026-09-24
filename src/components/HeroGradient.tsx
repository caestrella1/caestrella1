// Edge-to-edge backdrop behind the whole intro: solid flat-color circles,
// softened into color fields by a single CSS blur (no gradient fills —
// stacking a radial gradient *and* a blur would soften the same edges
// twice for no benefit). The illusion of flowing color comes entirely
// from slowly rotating that blurred shape, which is one cheap GPU
// transform instead of animating gradient stops or loading a photo.
const LAYER_CLASSES =
  'pointer-events-none absolute -top-16 left-1/2 -z-10 h-[704px] w-screen -translate-x-1/2 overflow-hidden sm:-top-24 sm:h-[736px]'

export function HeroGradient() {
  return (
    <div aria-hidden="true" className={`${LAYER_CLASSES} hero-gradient-mask`}>
      <svg
        className="hero-gradient-spin absolute left-1/2 top-1/2 h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2 opacity-60 dark:opacity-30"
        viewBox="0 0 600 600"
      >
        <circle cx="150" cy="150" r="175" fill="var(--color-accent-300)" />
        <circle cx="460" cy="180" r="150" fill="var(--color-accent-500)" />
        <circle cx="420" cy="450" r="195" fill="var(--color-accent-700)" />
        <circle cx="150" cy="440" r="140" fill="var(--color-accent-400)" />
      </svg>
    </div>
  )
}
