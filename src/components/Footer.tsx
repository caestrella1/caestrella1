export function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200/70 py-8 text-center text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
      <p>&copy; {new Date().getFullYear()}. Built with React, TypeScript &amp; Tailwind CSS.</p>
    </footer>
  )
}
