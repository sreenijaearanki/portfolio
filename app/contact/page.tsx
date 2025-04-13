'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
  
    if (res.ok) {
      alert('Message sent!')
      setForm({ firstName: '', lastName: '', email: '', contact: '', message: '' })
    } else {
      alert('Failed to send message')
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-sky-50 text-black ">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="input" required />
            <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="input" required />
          </div>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="input" required />
          <input name="contact" placeholder="Contact (Optional)" value={form.contact} onChange={handleChange} className="input" />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} className="input h-32 resize-none" required />
          <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Send Message</button>
        </form>
      </div>
    </main>
  )
}
