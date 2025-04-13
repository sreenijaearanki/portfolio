import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Sreenija\'s Portfolio',
  description: 'Showcasing my work and experience',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
        <Navbar />
        {children}
      </body>
    </html>
)
}