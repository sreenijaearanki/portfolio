'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollOrNavigate = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === '/') {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  // Scroll to section after route change (for cross-page navigation)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100); // wait for route to load
      }
    }
  }, [pathname]);

  return (
    <nav className="bg-sky-100 shadow-md p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-600">My Portfolio</Link>
        <div className="space-x-6">
          <a href="#about" onClick={handleScrollOrNavigate('about')} className="text-gray-700 hover:text-indigo-600">About</a>
          <a href="#education" onClick={handleScrollOrNavigate('education')} className="text-gray-700 hover:text-indigo-600">Education</a>
          <Link href="/projects" className="text-gray-700 hover:text-indigo-600">Projects</Link>
          <a href="#skills" onClick={handleScrollOrNavigate('skills')} className="text-gray-700 hover:text-indigo-600">Skills</a>
          <a href="#experience" onClick={handleScrollOrNavigate('experience')} className="text-gray-700 hover:text-indigo-600">Experience</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-indigo-600"
          >
            Resume
          </a>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
