import { FaChevronDown, FaTheaterMasks } from "react-icons/fa"
import Image from 'next/image'
import { FaLinkedin, FaCocktail } from 'react-icons/fa'
import { MdBarChart } from "react-icons/md";
import { RiFileExcel2Fill } from "react-icons/ri";
import {
  SiGo,
  SiSpringboot,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiFlask,
  SiDjango,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiSelenium,
  SiMysql,
  SiGithub,
  SiSpring,
  SiNeo4J,
  SiApachecassandra,
  SiPrisma,
  SiJenkins,
  SiKubernetes,
  SiVercel,
  SiStreamlit,
  SiGrafana,
  SiApachekafka,
  SiRabbitmq,
  SiApachemaven,
} from "react-icons/si";

import {
  DiJava,
  DiMysql,
  DiPython,
  DiAws,
  DiNodejs,
  DiJavascript1,
  DiGit,
  DiDocker,
  DiMongodb,
  DiPostgresql,
  DiVisualstudio,
} from "react-icons/di";



export default function Home() {
  return (
    <main className="text-center">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Hey, I'm Sreenija Earanki👋</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          A passionate developer building web apps & cloud solutions.
        </p>

        {/* 👇 Scroll Down Arrow */}
        <a href="#about" className="absolute bottom-8 text-indigo-600 animate-bounce">
          <FaChevronDown size={24} />
        </a>

      </section>

      {/* CTA Section */}
      <section className="h-screen flex flex-col justify-center items-center px-4 bg-green-50 text-center">
        <h2 className="text-3xl font-semibold mb-4">Checkout My Work</h2>
        <div className="space-x-4">
          <a href="/resume" className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700">View Resume</a>
          <a href="/projects" className="px-6 py-3 bg-gray-100 text-gray-800 rounded hover:bg-gray-200">View Projects</a>
        </div>
      </section>


      {/* 🔽 Add these anchor-linked sections below 🔽 */}

      <section id="about" className="h-screen flex flex-col justify-center items-center px-6 text-center bg-white">

        <h2 className="text-4xl font-bold mb-6">About</h2>

        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-20 animate-fade-in">

          {/* Profile Picture */}
          <a
            href="https://www.linkedin.com/in/sreenija-earanki/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block"
          >
            {/* Wrapper for sizing and rounding */}
            <div className="w-80 h-80 rounded-full overflow-hidden relative shadow-lg">

              {/* Profile Image */}
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
              />

              {/* LinkedIn Overlay */}
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaLinkedin className="text-white text-4xl group-hover:animate-bounce" />

              </div>
            </div>
          </a>

          <p className="max-w-3xl text-lg md:text-xl text-gray-700 leading-relaxed">
            I'm a passionate full stack developer currently focused on building cloud-native applications using Java, Spring Boot, and frontend frameworks like React and Next.js. I'm also exploring AWS to scale my applications and deepen my cloud expertise.
            <br /><br />
            I love solving real-world problems end-to-end—whether it's crafting clean APIs or building intuitive UIs. I'm excited about opportunities where I can learn fast, build with impact, and grow with a great team.
          </p>

        </div>
      </section>


      {/* Skills section with icons */}

      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center bg-green-50 px-6 py-16"
      >
        {/* min-h-screen flex flex-col justify-center items-center bg-green-50 px-6 */}
        {/* h-screen flex flex-col justify-center items-center bg-green-50 px-6 */}
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 text-center text-gray-700 text-sm"> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-10 text-center text-gray-700 text-sm max-w-screen-xl mx-auto place-items-center">
   
          {/* Repeatable Skill Icon Block */}
          <div className="flex flex-col items-center">
            <DiJava className="text-6xl text-[#f89820]" />
            <span>Java</span>
          </div>
          <div className="flex flex-col items-center">
            <DiAws className="text-6xl text-[#FF9900]" />
            <span>AWS</span>
          </div>
          <div className="flex flex-col items-center">
            <DiPython className="text-6xl text-[#3776AB]" />
            <span>Python</span>
          </div>
          <div className="flex flex-col items-center">
            <DiJavascript1 className="text-5xl text-yellow-400" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiGo className="text-5xl text-blue-500" />
            <span>Go</span>
          </div>
          <div className="flex flex-col items-center">
            <SiSpringboot className="text-5xl text-green-600" />
            <span>Spring Boot</span>
          </div>
          <div className="flex flex-col items-center">
            <SiReact className="text-5xl text-sky-400" />
            <span>React</span>
          </div>

          <div className="flex flex-col items-center">
            <DiMongodb className="text-5xl text-green-700" />
            <span>MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <SiReact className="text-5xl text-sky-400" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript className="text-5xl text-blue-600" />
            <span>TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs className="text-5xl" />
            <span>Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <DiNodejs className="text-5xl text-green-700" />
            <span>Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiFirebase className="text-5xl text-orange-500" />
            <span>Firebase</span>
          </div>
          <div className="flex flex-col items-center">
            <DiMysql className="text-5xl text-blue-500" />
            <span>MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiFlask className="text-5xl text-gray-700" />
            <span>Flask</span>
          </div>
          <div className="flex flex-col items-center">
            <SiDjango className="text-5xl text-green-700" />
            <span>Django</span>
          </div>
          <div className="flex flex-col items-center">
            <FaTheaterMasks className="text-5xl text-blue-600" />
            <span>Playwright.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiBootstrap className="text-5xl text-purple-600" />
            <span>Bootstrap</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-5xl text-sky-500" />
            <span>TailwindCSS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiSelenium className="text-5xl text-green-600" />
            <span>Selenium</span>
          </div>
          <div className="flex flex-col items-center">
            <SiSpring className="text-5xl text-green-600" />
            <span>Spring</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-5xl text-red-600" />
            <span>MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <DiPostgresql className="text-5xl text-blue-700" />
            <span>PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center">
            <DiVisualstudio className="text-5xl text-blue-700" />
            <span>Visual Studio</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNeo4J className="text-5xl text-cyan-600" />
            <span>Neo4j</span>
          </div>
          <div className="flex flex-col items-center">
            <SiApachecassandra className="text-5xl text-indigo-600" />
            <span>Cassandra</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPrisma className="text-5xl text-gray-600" />
            <span>Prisma</span>
          </div>
          <div className="flex flex-col items-center">
            <MdBarChart className="text-5xl text-yellow-500" />
            <span>Power BI</span>
          </div>
          <div className="flex flex-col items-center">
            <RiFileExcel2Fill className="text-5xl text-green-700" />
            <span>Excel</span>
          </div>
          <div className="flex flex-col items-center">
            <DiGit className="text-5xl text-red-500" />
            <span>Git</span>
          </div>
          <div className="flex flex-col items-center">
            <SiGithub className="text-5xl text-black" />
            <span>GitHub</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJenkins className="text-5xl text-red-600" />
            <span>Jenkins</span>
          </div>
          <div className="flex flex-col items-center">
            <DiDocker className="text-5xl text-blue-500" />
            <span>Docker</span>
          </div>
          <div className="flex flex-col items-center">
            <SiKubernetes className="text-5xl text-blue-400" />
            <span>Kubernetes</span>
          </div>
          <div className="flex flex-col items-center">
            <SiVercel className="text-5xl" />
            <span>Vercel</span>
          </div>
          <div className="flex flex-col items-center">
            <SiStreamlit className="text-5xl text-pink-500" />
            <span>Streamlit</span>
          </div>
          <div className="flex flex-col items-center">
            <SiGrafana className="text-5xl text-orange-500" />
            <span>Grafana</span>
          </div>
          <div className="flex flex-col items-center">
            <SiApachekafka className="text-5xl text-black" />
            <span>Kafka</span>
          </div>
          <div className="flex flex-col items-center">
            <SiRabbitmq className="text-5xl text-orange-600" />
            <span>RabbitMQ</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCocktail className="text-5xl text-green-600" />
            <span>Mockito</span>
          </div>
          <div className="flex flex-col items-center">
            <SiApachemaven className="text-5xl text-red-700" />
            <span>Maven</span>
          </div>
          <div className="flex flex-col items-center">
            <MdBarChart className="text-5xl text-yellow-500" />
            <span>Power BI</span>
          </div>

        </div>
      </section>




      {/* Experience section with brief */}
      <section id="experience" className="h-screen flex flex-col justify-center items-center px-4 text-center py-20">
        <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
        <div className="text-center text-gray-700">
          <p>Intern @ Retensa – Built XYZ...</p>
          <p>Research Assistant @ IU – Worked on ABC...</p>
        </div>
      </section>
    </main>
  )
}
