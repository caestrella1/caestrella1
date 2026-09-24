// Edge-to-edge backdrop behind the whole intro: a four-corner mesh —
// green, blue, green, blue clockwise, each pair a different shade — softened
// into color fields by a single CSS blur (no gradient fills — stacking a
// radial gradient *and* a blur would soften the same edges twice for no
// benefit). The illusion of flowing color comes entirely from slowly
// rotating that blurred shape, one cheap GPU transform instead of
// animating gradient stops or loading a photo.
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
          {/* Clockwise from top-left: green, blue, green, blue — each pair
              a lighter and a deeper shade. */}
          <circle cx="0" cy="0" r="380" fill="var(--color-accent-300)" />
          <circle cx="600" cy="0" r="380" fill="var(--color-hero-blue-light)" />
          <circle cx="600" cy="600" r="380" fill="var(--color-accent-700)" />
          <circle cx="0" cy="600" r="380" fill="var(--color-hero-blue-dark)" />
        </svg>
      </div>
    </div>
  )
}
