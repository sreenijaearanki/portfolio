'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 absolute top-0 left-0 w-full z-50">

    {/* <nav className="bg-white shadow-md p-4 sticky top-0 z-50"> */}
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-600">My Portfolio</Link>
        <div className="space-x-6">
          <Link href="#about" className="text-gray-700 hover:text-indigo-600">About</Link>
          <Link href="#projects" className="text-gray-700 hover:text-indigo-600">Projects</Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
          <Link href="/resume" className="text-gray-700 hover:text-indigo-600">Skills</Link>
          <Link href="/resume" className="text-gray-700 hover:text-indigo-600">Experience</Link>
          <Link href="/resume" className="text-gray-700 hover:text-indigo-600">Resume</Link>       
        </div>
      </div>
    </nav>
  )
}