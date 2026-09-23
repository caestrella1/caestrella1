import type { Project } from '../../types'
import { ProjectCard } from './ProjectCard'

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="mt-20">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}
