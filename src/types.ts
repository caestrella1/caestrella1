export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail'
}

export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  href: string
  linkLabel?: string
  /** Optional accent shown as a small pill, e.g. "Live", "iOS", "Sample" */
  status?: string
  featured?: boolean
}

export interface Profile {
  name: string
  role: string
  company: string
  companyHref?: string
  location: string
  avatarUrl: string
  summary: string
  social: SocialLink[]
}
