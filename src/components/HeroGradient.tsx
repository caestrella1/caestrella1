// Edge-to-edge backdrop behind the whole intro: a genuine four-corner
// mesh — green, blue, green, blue clockwise, each pair a different shade —
// meeting and blending at the center. Each corner is a radial gradient
// fading to transparent, stacked with normal alpha compositing so the
// overlap in the middle is an actual color blend, not one shape occluding
// another. The illusion of flowing color comes from slowly rotating that
// shape, one cheap GPU transform instead of animating gradient stops or
// loading a photo.
const LAYER_CLASSES =
  'pointer-events-none absolute -top-16 left-1/2 -z-10 h-[704px] w-screen -translate-x-1/2 overflow-hidden sm:-top-24 sm:h-[736px]'

// The rotating shape is much taller (1400px) than the visible crop
// (~710px), so only the *middle* band of the viewBox — roughly y 148 to
// 452 out of 0–600 — is ever actually on screen. Corners planted at the
// literal 0/600 viewBox extremes are never seen at all; every visible
// pixel just sees a nearly-equal blend of all four, which reads as a flat
// wash instead of a mesh. Insetting the four color sources to a smaller
// square keeps them within (or just past) that visible band, so a corner's
// own hue is still clearly dominant near itself.
const MARGIN = 130
const NEAR = MARGIN
const FAR = 600 - MARGIN

// NEAR-to-FAR is 340 (adjacent corners), NEAR-to-center is ~240 (half the
// 340×340 square's diagonal). RADIUS is tuned against those, not the full
// viewBox, so the falloff stops below actually land where they're aimed.
const RADIUS = 520

interface Corner {
  id: string
  cx: number
  cy: number
  color: string
}

// Clockwise from top-left: green, blue, green, blue — each pair a
// lighter and a deeper shade.
const CORNERS: Corner[] = [
  { id: 'mesh-tl', cx: NEAR, cy: NEAR, color: 'var(--color-hero-green-light)' },
  { id: 'mesh-tr', cx: FAR, cy: NEAR, color: 'var(--color-hero-blue-light)' },
  { id: 'mesh-br', cx: FAR, cy: FAR, color: 'var(--color-hero-green-dark)' },
  { id: 'mesh-bl', cx: NEAR, cy: FAR, color: 'var(--color-hero-blue-dark)' },
]

export function HeroGradient() {
  return (
    <div aria-hidden="true" className={`${LAYER_CLASSES} hero-gradient-mask`}>
      {/* Positioning lives on this wrapper, untouched by the animation, so
          the rotation's off-center transform-origin (below) only ever
          pivots the shape in place — it can't also drag the whole thing
          off-screen the way combining both in one `transform` did. */}
      <div className="absolute left-1/2 top-1/2 h-[1400px] w-[1400px] -translate-x-1/2 -translate-y-1/2">
        <svg
          className="hero-gradient-spin h-full w-full opacity-90 dark:opacity-60"
          viewBox="0 0 600 600"
        >
          <defs>
            {CORNERS.map((c) => (
              <radialGradient key={c.id} id={c.id} gradientUnits="userSpaceOnUse" cx={c.cx} cy={c.cy} r={RADIUS}>
                {/* These four gradients stack with normal alpha
                    compositing, so whichever is painted last would
                    otherwise dominate everywhere it has meaningful
                    opacity — including at other corners. Falling off to
                    ~0.15 by the adjacent-corner distance (~65% of RADIUS)
                    keeps each corner's own hue clearly dominant near
                    itself; the ~50%-radius stop is roughly dead center,
                    where the real blend happens. */}
                <stop offset="0%" stopColor={c.color} stopOpacity="1" />
                <stop offset="46%" stopColor={c.color} stopOpacity="0.5" />
                <stop offset="65%" stopColor={c.color} stopOpacity="0.15" />
                <stop offset="95%" stopColor={c.color} stopOpacity="0" />
              </radialGradient>
            ))}
          </defs>
          {/* Every rect covers the full canvas — only the gradient each
              references differs — so they layer via alpha blending
              instead of each shape occluding the ones beneath it. */}
          {CORNERS.map((c) => (
            <rect key={c.id} width="600" height="600" fill={`url(#${c.id})`} />
          ))}
        </svg>
      </div>
    </div>
  )
}
