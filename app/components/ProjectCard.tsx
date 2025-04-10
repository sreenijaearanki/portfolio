interface ProjectProps {
    title: string
    description: string
    github: string
  }
  
  export default function ProjectCard({ title, description, github }: ProjectProps) {
    return (
      <div className="bg-white shadow-md rounded p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={github} target="_blank" className="text-indigo-600 hover:underline">View on GitHub</a>
      </div>
    )
  }
  