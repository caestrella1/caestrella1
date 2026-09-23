import type { Profile } from '../types'

// Edit this file with your own details.
// `avatarUrl` is left empty on purpose — drop a photo into `src/assets/`
// (e.g. `avatar.jpg`), import it above, and set it here. Until then the
// <Avatar> component falls back to your initials.
export const profile: Profile = {
  name: 'Carlos',
  role: 'Senior Software Engineer',
  company: 'LinkedIn',
  companyHref: 'https://linkedin.com',
  location: 'California, USA',
  avatarUrl: '',
  summary:
    "I build high-traffic, user-facing web products. Lately I'm focused on frontend architecture, TypeScript, and experimentation-driven development — and increasingly working across the full stack.",
  social: [
    { label: 'GitHub', href: 'https://github.com/caestrella1', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/caestrella', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:hello@example.com', icon: 'mail' },
  ],
}
