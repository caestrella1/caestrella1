import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import fallbackPhoto from '../assets/hero-wallpaper.jpg'
import { fetchRandomWallpaper } from '../lib/wallpaper'

// Shared position/sizing for both layers: pulled up past the page's own
// top padding so the photo reaches the true edge of the viewport, and
// tall enough (padding included) to fade out just before the projects grid.
const LAYER_CLASSES =
  'hero-wallpaper pointer-events-none absolute -top-16 left-1/2 -z-10 h-[704px] w-screen -translate-x-1/2 sm:-top-24 sm:h-[736px]'

/**
 * Edge-to-edge hero backdrop. Always shows the bundled forest photo
 * immediately, then — on every visit — tries to fetch a different random
 * green-nature photo from the Openverse API and crossfades it in once
 * loaded. If that fetch fails (offline, blocked, API down) the bundled
 * photo just stays put, so the hero never breaks or flashes empty.
 */
export function HeroWallpaper() {
  const [randomPhoto, setRandomPhoto] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    fetchRandomWallpaper(controller.signal).then((url) => {
      if (!url || controller.signal.aborted) return
      // Preload before swapping in, so the crossfade never shows a
      // half-loaded or broken image.
      const img = new window.Image()
      img.onload = () => setRandomPhoto(url)
      img.src = url
    })

    return () => controller.abort()
  }, [])

  return (
    <>
      <div
        aria-hidden="true"
        className={LAYER_CLASSES}
        style={{ '--hero-photo': `url(${fallbackPhoto})` } as CSSProperties}
      />
      {randomPhoto && (
        <div
          aria-hidden="true"
          className={`${LAYER_CLASSES} animate-fade-in`}
          style={{ '--hero-photo': `url(${randomPhoto})` } as CSSProperties}
        />
      )}
    </>
  )
}
