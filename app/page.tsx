import React from "react";
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';
import About from './components/About';
import { FaChevronDown, FaTheaterMasks } from "react-icons/fa"
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function Home() {
  return (
    <main className="text-center font-figtree">

      {/* Hero Section */}

  <section className="min-h-screen bg-cyan-50 relative flex flex-col items-center justify-center px-6 text-center">

  {/* <div className="absolute w-72 h-72 bg-indigo-300 opacity-30 rounded-full -z-10 top-10 left-10 blur-3xl animate-pulse"></div> */}

  <h1 className="text-5xl font-figtree text-gray-800 mb-6">
    Hey, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Sreenija Earanki</span> 👋
  </h1>

  <p className="max-w-5xl mx-auto text-lg font-figtree text-gray-700 leading-relaxed animate-fade-in">
  A software engineer who thrives on solving problems and crafting scalable solutions. I believe great software begins with curiosity, grows with intention, and delivers when it truly helps someone.
Whether building from scratch or improving what already exists, I approach every project with an engineer’s precision and a builder’s mindset. To me, software isn’t just code — it’s a way to design systems that make the complex feel simple.
  </p>

  {/* CTA Buttons */}
  <div className="mt-20 flex flex-wrap gap-6 justify-center">
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-transform hover:scale-105"
    >
      📄 View Resume
    </a>
    <a
      href="/projects"
      className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-transform hover:scale-105"
    >
      💼 View Projects
    </a>
  </div>


        {/* 👇 Scroll Down Arrow */}
        <a href="#about" className="absolute bottom-8 text-indigo-600 animate-bounce">
          <FaChevronDown size={24} />
        </a>
      </section>




      {/* About section */}
      <About />
      <div className="flex justify-center bg-sky-50">
  <div className="flex space-x-2">
    {[...Array(6)].map((_, i) => (
      <span key={i} className="w-2 h-2 rounded-full bg-gray-400"></span>
    ))}
  </div>
</div>

      {/* Education section */}
      <Education />

      <div className="flex justify-center bg-sky-50">
  <div className="flex space-x-2">
    {[...Array(6)].map((_, i) => (
      <span key={i} className="w-2 h-2 rounded-full bg-gray-400"></span>
    ))}
  </div>
</div>

      

      {/* Experience section with cards and timeline*/}
      <ExperienceTimeline />

      
      <div className="flex justify-center bg-sky-50">
  <div className="flex space-x-2">
    {[...Array(6)].map((_, i) => (
      <span key={i} className="w-2 h-2 rounded-full bg-gray-400"></span>
    ))}
  </div>
</div>


{/* Skills section with icons */}
<Skills />

      {/* Footer section */}
      <Footer />

    </main>
  )
}
