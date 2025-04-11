'use client';

import dynamic from 'next/dynamic';
const FaLinkedin = dynamic(() => import('react-icons/fa').then(mod => mod.FaLinkedin), { ssr: false });
const FaGithub = dynamic(() => import('react-icons/fa').then(mod => mod.FaGithub), { ssr: false });
const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
const FaEnvelope = dynamic(() => import('react-icons/fa').then(mod => mod.FaEnvelope), { ssr: false });
const FaPhone = dynamic(() => import('react-icons/fa').then(mod => mod.FaPhone), { ssr: false });
const FaMedium = dynamic(() => import('react-icons/fa').then(mod => mod.FaMedium), { ssr: false });


export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white px-6 py-14 border-t-2 border-indigo-500 shadow-[0_-3px_20px_#4f46e5]">
    
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-400 mb-4 drop-shadow-[0_0_8px_#6366f1]">
            Let’s Build Something Together
          </h2>
          <p className="text-gray-300 mb-4">
            Whether it's a project, collaboration, or just a hello—I'd love to hear from you.
          </p>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <span className="font-semibold text-white">📞 Phone:</span>{' '}
              <a
                href="tel:+1 9303332273"
                className="hover:underline text-indigo-400 hover:drop-shadow-[0_0_6px_#6366f1]"
              >
                +1 9303332273
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">📧 Email:</span>{' '}
              <a
                href="mailto:sreenijaearanki08@gmail.com"
                className="hover:underline text-indigo-400 hover:drop-shadow-[0_0_6px_#6366f1]"
              >
                sreenijaearanki08@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">📍 Location:</span> Bloomington, Indiana
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-3xl font-bold text-indigo-400 mb-4 drop-shadow-[0_0_8px_#6366f1]">
            Say Hello 👋
          </h2>
          <p className="text-gray-300 mb-6 text-center md:text-right">
            Let’s innovate, collaborate, and create something extraordinary together.
          </p>

          <div className="flex gap-5 text-2xl">
            <a
              href="https://www.linkedin.com/in/sreenija-earanki/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-gray-300 hover:text-indigo-400 hover:drop-shadow-[0_0_6px_#6366f1]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sreenijaearanki"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-gray-300 hover:text-indigo-400 hover:drop-shadow-[0_0_6px_#6366f1]"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/sreenija_earanki/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-gray-300 hover:text-indigo-400 hover:drop-shadow-[0_0_6px_#6366f1]"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:sreenijaearanki08@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-gray-300 hover:text-indigo-400 hover:drop-shadow-[0_0_6px_#6366f1]"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel: +1 9303332273"
              className="transition-all text-gray-300 hover:text-indigo-400 hover:drop-shadow-[0_0_6px_#6366f1]"
            >
              <FaPhone />
            </a>
            <a
              href="https://medium.com/@sreenijaearanki"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-gray-300 hover:text-indigo-400 hover:drop-shadow-[0_0_6px_#6366f1]"
            >
              <FaMedium />
            </a>
          </div>
        </div>
      </div>

      {/* Separator */}
      <hr className="my-10 border-gray-700" />

      {/* Bottom Tagline */}
      <div className="text-center text-sm text-gray-400">
        <span className="drop-shadow-[0_0_6px_#6366f1]">
        Built with caffeine & clean commits ☕ 🖥️ <br />
        </span>
        <span className="text-white font-semibold not-italic">Crafted by Sreenija © 2025</span>
      </div>
    </footer>
  );
}
