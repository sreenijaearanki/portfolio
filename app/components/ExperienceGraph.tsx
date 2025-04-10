'use client'
import React, { useEffect, useState } from 'react'

const experiences = [
  { title: 'Software Engineer', org: 'Accenture' },
  { title: 'Machine Learning Intern', org: 'MyEdMaster' },
  { title: 'Teaching Assistant', org: 'Indiana University Bloomington' },
  { title: 'Co-founder', org: 'Aquart' },
  { title: 'Software Engineer Intern', org: 'Retensa' },
  { title: 'Web Developer Intern', org: 'Web Student Designers' }
]

type Position = {
  x: number
  y: number
}

export default function ExperienceGraph() {
  const [positions, setPositions] = useState<Position[]>([])

  useEffect(() => {
    const radius = 220 // consistent radius
    const centerX = 400
    const centerY = 400
  
    const calculatedPositions = experiences.map((_, i) => {
      const angle = (i / experiences.length) * 2 * Math.PI
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      return { x, y }
    })
  
    setPositions(calculatedPositions)
  }, [])
  

  return (
   
<section id="experience" className="bg-gray-100 py-20">
  <h2 className="text-4xl font-bold mb-16 text-center">Experience Tree</h2>
  
  <div className="relative w-full flex flex-col items-center">

    {/* Top Circle */}
    <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold z-10">You</div>

    {/* Vertical line from top circle to horizontal line */}
    <div className="w-1 h-16 bg-indigo-400"></div>

    {/* Horizontal line */}
    <div className="w-5/6 h-1 bg-indigo-400 relative flex justify-around items-start">

      {/* Vertical lines and cards below */}
      {experiences.map((exp, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-1 h-16 bg-indigo-400"></div>
          <div className="bg-white shadow-md rounded-lg p-4 w-48 mt-4 text-center">
            <h3 className="font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-500">{exp.org}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



  )
}
