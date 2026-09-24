import { Hero } from './components/Hero'
import { ProjectsGrid } from './components/Projects/ProjectsGrid'
import { Footer } from './components/Footer'
import { profile } from './data/profile'
import { projects } from './data/projects'

function App() {
  return (
    <div className="min-h-svh bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-4 sm:pt-24">
        <Hero profile={profile} />
        <ProjectsGrid projects={projects} />
        <Footer />
      </div>
    </div>
  )
}

export default App
