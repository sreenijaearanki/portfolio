'use client'
import React, { useEffect, useState } from 'react'

export default function Education() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    useEffect(() => {
     
    }, []);
  

    return (
<section id="education" className="min-h-screen px-4 py-16 text-center bg-blue-50">
  <h2 className="text-4xl font-bold mb-12 text-black dark:text-white">Education</h2>

  <div className="mx-auto max-w-2xl space-y-10">
    {/* Education Card */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-left border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
        Master of Science in Computer Science
      </h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
        Indiana University Bloomington • Aug 2023 – May 2025
      </p>

  <span className="font-semibold text-teal-600 mt-4"> GPA: 3.8/4.0</span>

      <div className="mt-4">
        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Courses:</h4>
        <ul className="flex flex-wrap gap-2 text-sm">
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
            Cloud Computing
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
            AI & Machine Learning
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
            Web Development
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
          Advanced Database technologies
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
          Applied algorithms
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
          Software engineering
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
          Information visualization 
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
          Applied machine learning
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
          System protocol security and information assurance
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
          Computer Networks
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
          Pervasive Computing- Mobile app development using React Native
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
          Security for Network Systems
          </li>
        </ul>
      </div>
    </div>

    {/* Education Card */}
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-left border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
        Bachelor of Technology in Electrical and Electronics Engineering
      </h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
        Sreenidhi Institute of Science and Technology • July 2017 – July 2021
      </p>
      <span className="font-semibold text-teal-600 mt-4"> GPA: 8.73/10</span>
      <div className="mt-4">
        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Courses:</h4>
        <ul className="flex flex-wrap gap-2 text-sm">
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
            Python prograaming
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
            Computer Networks
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
            Operating Systems
          </li>
          <li className="bg-indigo-100 dark:bg-indigo-600 dark:text-white text-indigo-800 px-3 py-1 rounded-full">
            Database Management Systems
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

    );
}