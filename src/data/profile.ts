import type { Profile } from '../types'

// Edit this file with your own details.
// `avatarUrl` points at your GitHub avatar (a public asset URL, no auth
// needed: https://github.com/<user>.png or the avatars.githubusercontent.com
// form below both work). Swap it for a local import from `src/assets/` if
// you'd rather ship your own photo. Leave it empty to fall back to initials.
export const profile: Profile = {
  name: 'Carlos Estrella',
  role: 'Senior Software Engineer',
  company: 'LinkedIn',
  companyHref: 'https://linkedin.com',
  location: 'California, USA',
  avatarUrl: 'https://avatars.githubusercontent.com/u/33430624?v=4',
  summary:
    "I build high-traffic, user-facing web products. Lately I'm focused on frontend architecture, TypeScript, and experimentation-driven development — and increasingly working across the full stack.",
  social: [
    { label: 'GitHub', href: 'https://github.com/caestrella1', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/caestrella', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:hello@example.com', icon: 'mail' },
  ],
}
