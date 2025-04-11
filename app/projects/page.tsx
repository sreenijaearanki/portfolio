'use client'

import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'AI Meeting Companion',
    description:
      'Summarizes meetings using Whisper + GPT-4, built with Streamlit. Streamlined AI pipelines for transcription and summarization. Used OpenAI APIs, Whisper, Streamlit, and deployed with Docker. Implemented error handling and logging.Summarizes meetings using Whisper + GPT-4, built with Streamlit. Streamlined AI pipelines for transcription and summarization. Used OpenAI APIs, Whisper, Streamlit, and deployed with Docker. Implemented error handling and logging.',
    github: 'https://github.com/yourusername/ai-meeting-companion',
    demo: 'https://aimeeting.vercel.app/',
    tech: ['Python', 'Streamlit', 'OpenAI', 'Whisper'],
  },
  {
    title: 'Order Microservice',
    description:
      'Cloud-native order processor using Java, Spring Boot, and AWS. Designed scalable RESTful APIs, integrated with DynamoDB and deployed via Elastic Beanstalk. Monitored using CloudWatch. CI/CD pipeline using GitHub Actions.',
    github: 'https://github.com/yourusername/order-microservice',
    tech: ['Java', 'Spring Boot', 'AWS'],
  },
]

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="min-h-screen py-20 bg-gray-50 px-4" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index

          return (
            <div
              key={index}
              onClick={() =>
                setExpandedIndex(isExpanded ? null : index)
              }
              className={`bg-white rounded-xl shadow-md p-6 border hover:shadow-xl transition duration-300 cursor-pointer group ${
                isExpanded ? 'ring-2 ring-indigo-400' : ''
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-indigo-600 hover:underline"
                  onClick={(e) => e.stopPropagation()} // prevent expand on link click
                >
                  {project.title}
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="text-2xl text-gray-600 hover:text-black" />
                </a>
              </div>

              <p className="text-gray-600 text-sm transition-all duration-300 ease-in-out">
                {isExpanded
                  ? project.description
                  : project.description.slice(0, 120) + '...'}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 mb-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Demo Button */}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center text-sm text-indigo-600 font-medium hover:underline"
                >
                  Live Demo <FaExternalLinkAlt className="ml-1" />
                </a>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
