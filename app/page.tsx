import React from "react";
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';
import About from './components/About';
import { FaChevronDown, FaTheaterMasks } from "react-icons/fa"
import Skills from "./components/Skills";


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

      {/* About section */}
      <About />

      {/* CTA Section */}
      <section className="h-screen flex flex-col justify-center items-center px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Checkout My Work</h2>
        <div className="space-x-4">
          <a href="/resume" className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700">View Resume</a>
          <a href="/projects" className="px-6 py-3 bg-gray-100 text-gray-800 rounded hover:bg-gray-200">View Projects</a>
        </div>
      </section>


      {/* Skills section with icons */}
      <Skills />

      {/* Experience section with cards and timeline*/}
      <ExperienceTimeline />

      {/* Footer section */}
      <Footer />

    </main>
  )
}
