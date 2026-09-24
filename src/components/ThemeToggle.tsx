import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

function getInitialIsDark() {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('dark')
}

/** Toggles the `.dark` class on <html> and persists the choice. */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialIsDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {
      // localStorage unavailable — ignore, theme just won't persist.
    }
  }, [isDark])

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative inline-flex size-10 items-center justify-center rounded-full border border-neutral-200/70 bg-neutral-100 text-neutral-600 transition-smooth duration-300 hover:bg-neutral-200 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-800/80 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
    >
      <Sun className="size-[18px] scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-[18px] scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
    </button>
  )
}
