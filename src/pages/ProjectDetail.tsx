import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowLeft } from 'lucide-react'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="max-w-2xl">
        <p className="text-gray-500">Project not found.</p>
        <Link to="/projects" className="text-sm text-gray-700 underline mt-4 inline-block">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl">
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>
      <h2 className="text-3xl font-bold text-gray-900 mb-3">{project.title}</h2>
      <p className="text-gray-500 leading-relaxed">{project.summary}</p>
    </div>
  )
}
