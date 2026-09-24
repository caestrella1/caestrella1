import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../types'
import { Badge } from '../ui/Badge'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/70 bg-white p-6 transition-smooth duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-xl hover:shadow-black/10 dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-accent-500/40 dark:hover:shadow-black/30 ${
        project.featured ? 'sm:col-span-2' : ''
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{project.name}</h3>
          <div className="flex items-center gap-2">
            {project.status && (
              <Badge tone={project.status === 'Sample' ? 'neutral' : 'accent'}>{project.status}</Badge>
            )}
            <ArrowUpRight className="size-4 shrink-0 text-neutral-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-500" />
          </div>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          {project.description}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        {project.linkLabel && (
          <span className="text-sm font-medium text-neutral-400 group-hover:text-accent-600 dark:group-hover:text-accent-400">
            {project.linkLabel}
          </span>
        )}
      </div>
    </a>
  )
}
