import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
}

/** Rounded pill link styled as a button. */
export function Button({ children, variant = 'primary', icon, className = '', ...rest }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-smooth duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950'

  const variants: Record<string, string> = {
    primary:
      'bg-accent-600 text-white shadow-sm shadow-black/10 hover:bg-accent-500 hover:shadow-md hover:shadow-black/15',
    secondary:
      'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800/80 dark:text-neutral-100 dark:hover:bg-neutral-800',
  }

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {icon}
    </a>
  )
}
