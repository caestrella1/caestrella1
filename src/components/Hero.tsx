import type { CSSProperties } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Avatar } from './Avatar'
import { SocialLinks } from './SocialLinks'
import type { Profile } from '../types'
import wallpaper from '../assets/hero-wallpaper.jpg'

// Forest path photo by Johannes Plenio, sourced via the Openverse API
// (openverse.org), licensed CC0 1.0 (no attribution required).
// https://creativecommons.org/publicdomain/zero/1.0/

export function Hero({ profile }: { profile: Profile }) {
  return (
    <header className="relative isolate">
      <div
        aria-hidden="true"
        className="hero-wallpaper pointer-events-none absolute -top-16 left-1/2 -z-10 h-[704px] w-screen -translate-x-1/2 animate-fade-in sm:-top-24 sm:h-[736px]"
        style={{ '--hero-photo': `url(${wallpaper})` } as CSSProperties}
      />

      <div className="absolute right-0 top-0 animate-fade-in">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center pt-4 text-center">
        <div className="animate-fade-up">
          <Avatar name={profile.name} src={profile.avatarUrl} size={128} />
        </div>

        <h1 className="mt-6 animate-fade-up text-4xl font-semibold tracking-tight text-neutral-900 [animation-delay:80ms] sm:text-5xl dark:text-white">
          {profile.name}
        </h1>

        <p className="mt-3 animate-fade-up text-lg text-neutral-500 [animation-delay:140ms] dark:text-neutral-400">
          {profile.role} at{' '}
          {profile.companyHref ? (
            <a
              href={profile.companyHref}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-neutral-700 underline decoration-accent-500/40 decoration-2 underline-offset-4 transition-colors hover:text-accent-600 dark:text-neutral-200 dark:hover:text-accent-400"
            >
              {profile.company}
            </a>
          ) : (
            <span className="font-medium text-neutral-700 dark:text-neutral-200">{profile.company}</span>
          )}
        </p>

        <p className="mt-1 animate-fade-up text-sm text-neutral-400 [animation-delay:180ms] dark:text-neutral-500">
          {profile.location}
        </p>

        <div className="mt-6 animate-fade-up [animation-delay:220ms]">
          <SocialLinks links={profile.social} />
        </div>

        <p className="mt-8 max-w-xl animate-fade-up text-balance text-base leading-relaxed text-neutral-500 [animation-delay:260ms] dark:text-neutral-400">
          {profile.summary}
        </p>
      </div>
    </header>
  )
}
