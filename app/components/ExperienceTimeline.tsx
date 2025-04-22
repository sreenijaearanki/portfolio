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
    title: 'Research Assistant',
    company: 'Indiana University',
    date: 'April 2024 – Present',
    description: [
      'Implemented few-shot classification with GPT-4 and Hugging Face models to analyze the impact of AI in music through sentiment analysis and audience perception studies.'
    ],
    tech: ['Java', 'SQL', 'Selenium', 'JMeter', 'Jenkins', 'CI/CD', 'Automation testing', 'DevOps'],
    icon: <FaUniversity className="text-indigo-500 text-lg" />,
  },
  {
    title: 'Software Engineering Intern',
    company: 'Retensa LLC',
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
    company: 'MyEdMaster LLC',
    date: 'May 2024 – Aug 2024',
    description: [
      'Implemented an AWS Lambda-driven backend workflow, deployed using CloudFormation, to automatically parse LLM-generated JSON files from Amazon S3, reducing manual processing time by 85%.',
'Fine-tuned the OpenAI API to generate over 2,500 SAT questions, using prompt engineering, and led the migration from Amazon RDS to DynamoDB, improving query response times by 50%, reducing costs by $5,000, and scaling the platform to handle 10x more data, reducing deployment times by 80% with automated IaC.',
'Integrated generative AI models to create personalized SAT prep content, using few-shot prompting and dynamic templates, which improved content variety and student engagement by 35%.'
    ],
    tech: ['Python', 'Backend', 'Large-language Models (LLMs)', 'Prompt Engineering', 'AWS DynamoDB' ],
    icon: <FaBrain className="text-indigo-500 text-lg" />,
  },
  {
    title: 'Teaching Assistant',
    company: 'Indiana University',
    date: 'Jan 2024 – Present',
    description: [
      'Mentored and collaborated with over 200 students, enhancing their understanding of key advanced database concepts.'
    ],
    tech: ['Neo4j', 'MySQL', 'PostgreSQL', 'MongoDB', 'Python', 'AstraDB', 'Cassandra'],
    icon: <FaUniversity className="text-indigo-500 text-lg" />,
  },
  {
    title: 'Software Engineer',
    company: 'Accenture',
    date: 'Aug 2021 – Jun 2023',
    description: [
      'Automated ETL process for Market Risk Warehouse using Python and Ansible, reducing data loading time by 30%, eliminating 10+ weekly manual hours, increasing data accessibility to downstream applications.',
'Configured IBM DB2 Warehouse and implemented data warehousing solutions on IBM Sailfish retrieving data from NoSQL databases(Cassandra), enhancing system performance and data scalability by 80%, and resulting in a 40% reduction in query execution time.',
'Applied modern DevOps practices by implementing CI/CD pipelines aligned with Agile methodologies, automating the deployment of market risk reporting and monitoring tools using Jenkins.',
'Refactored sequential job execution logic by implementing multithreading in Python, enabling multiple scripts to run in parallel; reduced overall execution time by 50% and improved system efficiency during peak processing hours.',
'Led software validation efforts for market risk systems by expanding automation testing, implemented defect triage, boosting code coverage through test-driven development and reducing manual regression time by 75%.'
    ],
    tech: ['Python', 'SQL', 'NoSQL', 'Flask', 'Jenkins', 'CI/CD', 'React.js', 'DevOps ', 'Firebase', 'HTML/CSS'],
    icon: <FaCode className="text-indigo-500 text-lg" />,
  },
  {
    title: 'Co-Founder',
    company: 'Startup (Aquart)',
    date: 'Jan 2019 – Mar 2020',
    description: [
      'Founded AQUART, an IoT-based smart water conservation system; designed and launched a mobile app enabling remote monitoring, control, and billing.',
      'Secured seed funding, obtained a patent, and attracted early market interest.',
      'Integrated Firebase backend for dynamic content.'
    ],
    tech: ['TailwindCSS', 'Firebase', 'HTML/CSS', 'React-native', 'XCode', 'jQuery', 'Android Studio'],
    icon: <FaChalkboardTeacher className="text-indigo-500 text-lg" />,
  },  
  {
    title: 'Web Developer Intern',
    company: 'Web Student Designers',
    date: 'April 2020 – July 2020',
    description: [
      'Designed responsive UI with TailwindCSS.',
      'Integrated Firebase backend for dynamic content.'
    ],
    tech: ['TailwindCSS', 'Firebase', 'HTML/CSS'],
    icon: <FaLaptopCode className="text-indigo-500 text-lg" />,
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
