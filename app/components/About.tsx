'use client'
import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaTheaterMasks } from "react-icons/fa"
import Image from 'next/image'
import { FaLinkedin, FaCocktail } from 'react-icons/fa'
import { MdBarChart } from "react-icons/md";
import { RiFileExcel2Fill } from "react-icons/ri";

export default function About() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (

        < section id="about" className="h-screen flex flex-col justify-center items-center bg-sky-50 px-6 text-center" >

            <h2 className="text-4xl font-figtree font-bold mb-6">About</h2>

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

        </section >

    );
}