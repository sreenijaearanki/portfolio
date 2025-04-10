import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'AI Meeting Companion',
    description: 'Summarizes meetings using Whisper + GPT-4, built with Streamlit.',
    github: 'https://github.com/yourname/ai-meeting-companion'
  },
  {
    title: 'Order Microservice',
    description: 'Cloud-native order processor using Java, Spring Boot, and AWS.',
    github: 'https://github.com/yourname/order-microservice'
  }
]

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </main>
  )
}
