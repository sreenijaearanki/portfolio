export default function ResumePage() {
    return (
      <main className="h-screen flex flex-col justify-center items-center px-4 text-center max-w-3xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="mb-6">Click below to view or download my resume.</p>
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-6 py-3 bg-indigo-600 text-white justify-center items-center rounded hover:bg-indigo-700"
        >
          {/* h-screen flex flex-col justify-center items-center px-4 bg-green-50 text-center */}
          View Resume
        </a>
      </main>
    )
  }
  