'use client'
import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaTheaterMasks } from "react-icons/fa"
import Image from 'next/image'
import { FaLinkedin, FaCocktail } from 'react-icons/fa'
import { MdBarChart } from "react-icons/md";
import { RiFileExcel2Fill } from "react-icons/ri";
import { TbPrompt } from "react-icons/tb";
import {
    SiGo,
    SiOpenai,
    SiJupyter,
    SiHuggingface,
    SiTensorflow,
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


{/* Skills section with icons */ }
export default function Skills() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (

        <section
            id="skills"
            className="min-h-screen flex flex-col justify-center items-center bg-blue-50 px-6 py-16"
        >
            <h2 className="text-4xl font-bold mb-12 font-quantico text-center">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-10 text-center text-gray-700 text-sm max-w-screen-xl mx-auto place-items-center font-helvetica">

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
                    <SiOpenai className="text-5xl text-yellow-500" />
                    <span>Open AI API</span>
                </div>
                <div className="flex flex-col items-center">
                    <SiTensorflow className="text-5xl text-yellow-500" />
                    <span>Tensorflow</span>
                </div>
                <div className="flex flex-col items-center">
                    <SiHuggingface className="text-5xl text-yellow-500" />
                    <span>Tensorflow</span>
                </div>
                <div className="flex flex-col items-center">
                    <TbPrompt className="text-5xl text-yellow-500" />
                    <span>Prompt Engineering</span>
                </div>
                <div className="flex flex-col items-center">
                    <SiJupyter className="text-5xl text-yellow-500" />
                    <span>Jupyter</span>
                </div>


            </div>
        </section>

    );
}