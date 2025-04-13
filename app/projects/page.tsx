'use client'

import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

type Project = {
  title: string;
  description: string[];
  github: string;
  demo?: string;
  tech: string[];
};

const projects = [
  {
    title: 'SummarAIze: AI-Powered Meeting Companion',
    description: [
      'Developed a full-stack ML application that transcribed live and recorded meetings with 90%+ accuracy using AssemblyAI and Whisper AI, enabling real-time audio processing from YouTube links.',
'Integrated a sentiment analysis pipeline using OpenAI APIs to classify meeting tone, enhancing emotional insight for users with 85%+ consistency across varied input.',
'Delivered an intuitive web dashboard using Streamlit, boosting meeting documentation efficiency and reducing manual note-taking by 70%.',
    ],
    github: 'https://github.com/sreenijaearanki/summarise',
    // demo: 'https://aimeeting.vercel.app/',
    tech: ['Streamlit', 'Python', 'GPT-4o', 'AssemblyAI', 'Whisper AI'],
  },
  {
    title: 'Folklore',
    description: [
      'Designed and developed a mobile app for women to share pregnancy experiences using Figma, Android Studio and React Native; implemented Firebase authentication and real-time content moderation for seamless engagement.',
      'Optimized app performance with React Native’s state management, reducing load times by 40%, crashes by 70%.', 
      'Conducted automated UI testing using Espresso (Android), XCUITest and UIAutomation (iOS), ensuring a 95% bug-free user experience by identifying and resolving critical UI/UX issues before deployment.'
    ],
    github: 'https://github.com/sreenijaearanki/folklore',
    tech: ['React Native', 'Android Studio', 'Espresso', 'UIAutomation', 'Figma'],
  },
  {
    title: 'Museum booking app',
    description: [
      'Engineered a full-stack web application with a team of 4 members for museum ticket booking using the Vercel stack (Next.js) for efficient server-side rendering and Prisma for database management.',
    ],
    github: 'https://github.com/sreenijaearanki/booking-management-system',
    tech: ['Next.js', 'Prisma', 'TailwindCSS', 'MantineDev', 'Vercel'],
  },
  {
    title: 'Book Inventory Management System',
    description: [
      'Collaborated with a team of 3 to engineer a CRUD application to optimize bookstore data management, enabling user interactions that allow access of critical bookstore data, handling 10,000+ records.',
    ],
    github: 'https://github.com/sreenijaearanki/bookinventory',
    demo: 'https://bookinventory-frontend.vercel.app/',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vercel', 'MySQL'],
  },
{
  title: 'E-mail spam classifier using NLTK for text pre-processing',
  description: [
    ' Developed an Email Spam Classifier with NLTK, enhancing text preprocessing for a 95% precision rate in spam detection.',
'Analyzed and managed over 50,000 emails using Pandas, increasing data handling efficiency.',
'Utilized Scikit-learn for effective feature extraction and model accuracy, achieving a 98% success rate in identifying spam.',
  ],
  github: 'https://github.com/sreenijaearanki/email-classifier',
  tech: [' NLTK', 'Scikit-learn', 'Pandas'],
},
{
  title: 'End-to-end machine learning project',
  description: [ 
'Implemented an end-to-end machine learning project, implementing linear regression with regularization (L1, L2), logistic regression, SVM, and random forest classifiers achieving an accuracy of 80%.',
'Implemented ensemble model of the 3 classifiers for enhanced accuracy (95%) and applied PCA to reduce dimensionality by 70% while retaining 95%.',
  ],
  github: 'https://github.com/sreenijaearanki/end-to-end-machine-learning-project',
  tech: [' Regression', 'Classification', 'Clustering', 'PC'],
},
{
  title: 'Weather Application',
  description: [ 
'Designed a sophisticated weather information platform, developed RESTful APIs with Flask and Python and delivered real-time weather data in JSON format for 30 selected cities.',
'Used the Google Maps API to obtain exact locations with up to 90% accuracy in results.',
  ],
  github: 'https://github.com/sreenijaearanki/weather-app',
  tech: [' Python', 'Flask', 'SQLAlchemy',' GitHub'],
},


]

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
      <section className="min-h-screen bg-aqua-mint py-20 bg-sky-50 px-4" id="projects">
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

              
              {isExpanded ? (
  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 transition-all duration-300 ease-in-out">
    {(project.description as string[]).map((line: string, i: number) => (
      <li key={i}>{line}</li>
    ))}
  </ul>
) : (
  <p className="text-gray-600 text-sm transition-all duration-300 ease-in-out">
    {project.description[0]}...
  </p>
)}



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


{/* <p className="text-gray-600 text-sm transition-all duration-300 ease-in-out">
{isExpanded
  ? project.description
  : project.description.slice(0, 120) + '...'}
</p> */}