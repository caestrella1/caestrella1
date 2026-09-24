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
      {/* Positioning lives on this wrapper, untouched by the animation, so
          the rotation's off-center transform-origin (below) only ever
          pivots the shape in place — it can't also drag the whole thing
          off-screen the way combining both in one `transform` did. */}
      <div className="absolute left-1/2 top-1/2 h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2">
        <svg
          className="hero-gradient-spin h-full w-full opacity-60 dark:opacity-30"
          viewBox="0 0 600 600"
        >
          <circle cx="170" cy="170" r="220" fill="var(--color-accent-300)" />
          <circle cx="440" cy="190" r="200" fill="var(--color-accent-500)" />
          <circle cx="420" cy="440" r="230" fill="var(--color-accent-700)" />
          <circle cx="170" cy="430" r="190" fill="var(--color-accent-400)" />
        </svg>
      </div>
    </div>
  )
}
