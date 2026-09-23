import type { Project } from '../types'

// Sample data to showcase the layout — replace with your own projects.
// Items marked `status: 'Sample'` are placeholders demonstrating the grid;
// swap them out (or add more) as you like.
export const projects: Project[] = [
  {
    id: 'den',
    name: 'Den',
    description:
      'An iPhone app that helps families, couples, roommates, or anyone else who shares a space manage their shared tasks together.',
    tags: ['iOS', 'Swift', 'Product'],
    href: 'https://dentasks.com',
    linkLabel: 'dentasks.com',
    status: 'Live',
    featured: true,
  },
  {
    id: 'sample-dashboard',
    name: 'Realtime Analytics Dashboard',
    description:
      'A sample project card — a data visualization dashboard with live charts, filters, and exportable reports.',
    tags: ['React', 'TypeScript', 'WebSockets'],
    href: 'https://github.com/caestrella1',
    linkLabel: 'View on GitHub',
    status: 'Sample',
  },
  {
    id: 'sample-api',
    name: 'Serverless API Toolkit',
    description:
      'A sample project card — a lightweight toolkit for building and deploying serverless APIs with typed request validation.',
    tags: ['Node.js', 'TypeScript', 'AWS'],
    href: 'https://github.com/caestrella1',
    linkLabel: 'View on GitHub',
    status: 'Sample',
  },
]
