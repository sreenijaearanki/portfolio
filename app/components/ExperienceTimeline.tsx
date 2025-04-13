'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLaptopCode, FaBrain, FaUniversity, FaChalkboardTeacher, FaCode } from 'react-icons/fa';

type Experience = {
  title: string;
  company: string;
  date: string;
  description: string | string[];
  tech?: string[];
};


const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Retensa',
    date: 'Sept 2024 – Dec 2024',
    description: [
      'Improved SaaS UI for 1,000+ users.',
      'Automated CI/CD with Bitbucket.',
      'Developed front-end test suite using Playwright.',
      'Delivered 10+ workforce reports with SQL & SSRS.',
      'Migrated project tracking from Pivotal to Jira.'
    ],
    tech: ['JIRA', 'React.js', 'Playwright', 'CI/CD', 'Bitbucket', 'SQL', 'SQL Server Reporting Services (SSRS) '],
    icon: <FaLaptopCode className="text-indigo-500 text-lg" />,
  },
  {
    title: 'Machine Learning Intern',
    company: 'MyEdMaster',
    date: 'May 2024 – Aug 2024',
    description: [
      'Generated SAT questions using GPT models.',
      'Automated backend tasks using AWS services.'
    ],
    tech: ['Python', 'Backend', 'Large-language Models (LLMs)', 'Prompt Engineering', 'AWS DynamoDB' ],
    icon: <FaBrain className="text-indigo-500 text-lg" />,
  },
  {
    title: 'Research Assistant',
    company: 'Indiana University',
    date: 'Sept 2023 – Present',
    description: [
      'Built research infrastructure for large data ingestion.',
      'Created visualizations for behavioral study outcomes.'
    ],
    tech: ['Java', 'SQL', 'Selenium', 'JMeter', 'Jenkins', 'CI/CD', 'Automation testing', 'DevOps'],
    icon: <FaUniversity className="text-indigo-500 text-lg" />,
  },
  {
    title: 'Teaching Assistant',
    company: 'Indiana University',
    date: 'Jan 2023 – May 2023',
    description: [
      'Guided students in Software Engineering concepts.',
      'Assisted with debugging React and Java projects.'
    ],
    tech: ['React', 'Java'],
    icon: <FaChalkboardTeacher className="text-indigo-500 text-lg" />,
  },
  {
    title: 'Web Developer Intern',
    company: 'Web Student Designers',
    date: 'Aug 2022 – Dec 2022',
    description: [
      'Designed responsive UI with TailwindCSS.',
      'Integrated Firebase backend for dynamic content.'
    ],
    tech: ['TailwindCSS', 'Firebase', 'HTML/CSS'],
    icon: <FaCode className="text-indigo-500 text-lg" />,
  },
];

export default function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section id="experience" className="min-h-screen bg-sky-50 py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-16">Experience Timeline</h2>

      <div className="relative flex flex-col items-center">
        {/* Vertical timeline line */}
        <div className="absolute w-1 bg-indigo-500 h-full left-1/2 transform -translate-x-1/2 z-0" />

        <div className="flex flex-col gap-20 w-full max-w-6xl">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative flex justify-center items-center w-full">
                {/* Timeline dot with icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-8 h-8 bg-white border-4 border-indigo-500 rounded-full flex items-center justify-center">
                  {exp.icon}
                </div>

                {/* Connector line from center to card */}
                <div
                  className={`absolute top-1/2 h-1 bg-indigo-500 z-0 transition-all duration-500 ${isLeft
                      ? 'left-1/2 w-[100px] -translate-x-full'
                      : 'right-1/2 w-[100px] translate-x-full'
                    }`}
                />

                {/* Experience card */}
                <div
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  data-aos={isLeft ? 'fade-right' : 'fade-left'}
                  className={`bg-white shadow-lg p-6 rounded-lg max-w-md w-full cursor-pointer hover:scale-[1.02] transition-all duration-300 z-10 ${isLeft ? 'mr-auto ml-6' : 'ml-auto mr-6'
                    }`}
                >
                  <h3 className="font-bold text-lg">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-indigo-600 italic text-sm mb-2">{exp.date}</p>

                  {/* Description */}
                  {expandedIndex === index ? (
                    Array.isArray(exp.description) ? (
                      <ul className="list-disc list-inside text-gray-800 text-sm mb-2 space-y-1">
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-800 text-sm whitespace-pre-line mb-2">
                        {exp.description}
                      </p>
                    )
                  ) : (
                    <p className="text-gray-800 text-sm mb-2">
                      {Array.isArray(exp.description)
                        ? (exp.description[0] as string).slice(0, 60) + '...'
                        : (exp.description as string).slice(0, 60) + '...'}
                    </p>

                  )}

                  {/* Tech Stack Pills */}
                  {expandedIndex === index && exp.tech && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-indigo-100 text-indigo-700 px-2 py-1 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
