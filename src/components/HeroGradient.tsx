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

// The rect that carries the gradients is a hard-edged square — nothing
// fades at ITS boundary, only within it. Making the wrapper bigger doesn't
// fix that on its own: we tuned the gradients for full coverage, so the
// rect is opaque-ish all the way to its own corners, and wherever that
// edge rotates into view (inevitable on a wide viewport, at some angle)
// it shows as a hard line. The real fix is a transparent BUFFER: extend
// the canvas well past where the color falls off to true zero, so the
// rect's edge always sits in dead space that matches the page background
// — invisible regardless of viewport width or rotation angle.
const NEAR = 90
const FAR = 510
const RADIUS = 420
const COLOR_SPAN = 600
// >= RADIUS guarantees zero opacity by the time you reach the buffer's
// own outer edge (see the coverage check in the falloff comment below).
const BUFFER = RADIUS
const VIEWBOX = COLOR_SPAN + 2 * BUFFER

// Scale (px per viewBox unit) is what actually determines how much of the
// tuned color layout is visible in the ~710px-tall crop — keep it at the
// value this layout was designed and verified against.
const SCALE = 4
const WRAPPER_SIZE = VIEWBOX * SCALE

interface Corner {
  id: string
  cx: number
  cy: number
  color: string
}

// Clockwise from top-left: green, blue, green, blue — each pair a
// lighter and a deeper shade. Shifted by BUFFER so the color region sits
// in the middle of the padded viewBox.
const CORNERS: Corner[] = [
  { id: 'mesh-tl', cx: NEAR + BUFFER, cy: NEAR + BUFFER, color: 'var(--color-hero-green-light)' },
  { id: 'mesh-tr', cx: FAR + BUFFER, cy: NEAR + BUFFER, color: 'var(--color-hero-blue-light)' },
  { id: 'mesh-br', cx: FAR + BUFFER, cy: FAR + BUFFER, color: 'var(--color-hero-green-dark)' },
  { id: 'mesh-bl', cx: NEAR + BUFFER, cy: FAR + BUFFER, color: 'var(--color-hero-blue-dark)' },
]

export function HeroGradient() {
  return (
    <div aria-hidden="true" className={`${LAYER_CLASSES} hero-gradient-mask`}>
      {/* Positioning lives on this wrapper, untouched by the animation, so
          the rotation's off-center transform-origin (below) only ever
          pivots the shape in place — it can't also drag the whole thing
          off-screen the way combining both in one `transform` did. */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: WRAPPER_SIZE, height: WRAPPER_SIZE }}
      >
        <svg
          className="hero-gradient-spin h-full w-full opacity-95 dark:opacity-70"
          viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
        >
          <defs>
            {CORNERS.map((c) => (
              <radialGradient key={c.id} id={c.id} gradientUnits="userSpaceOnUse" cx={c.cx} cy={c.cy} r={RADIUS}>
                {/* These four gradients stack with normal alpha
                    compositing, so whichever is painted last would
                    otherwise dominate everywhere it has meaningful
                    opacity — including at other corners. Opacity hits 0
                    right around the adjacent-corner distance (FAR-NEAR,
                    which equals RADIUS) so neighboring corners don't
                    bleed into each other; the ~70%-radius stop lands
                    close to dead center, where the real blend happens. By
                    the outer BUFFER ring (>= RADIUS past the color
                    region), every corner's gradient has already fully
                    reached 0 — that's what keeps the rect's own edge
                    invisible. */}
                <stop offset="0%" stopColor={c.color} stopOpacity="1" />
                <stop offset="50%" stopColor={c.color} stopOpacity="0.6" />
                <stop offset="70%" stopColor={c.color} stopOpacity="0.35" />
                <stop offset="100%" stopColor={c.color} stopOpacity="0" />
              </radialGradient>
            ))}
          </defs>
          {/* Every rect covers the full canvas — only the gradient each
              references differs — so they layer via alpha blending
              instead of each shape occluding the ones beneath it. */}
          {CORNERS.map((c) => (
            <rect key={c.id} width={VIEWBOX} height={VIEWBOX} fill={`url(#${c.id})`} />
          ))}
        </svg>
      </div>
    </div>
  )
}
