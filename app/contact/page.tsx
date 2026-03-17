'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, Phone, Facebook, Twitter, Youtube, Send } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="border-b-2 border-primary pb-3 mb-8">
          <h1 className="font-serif font-black text-3xl text-foreground">Contact Us</h1>
          <p className="font-sans text-muted-foreground text-sm mt-1">
            Reach the North West Times editorial and advertising teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact info */}
          <aside className="md:col-span-1 flex flex-col gap-6">
            <div>
              <h2 className="font-serif font-bold text-base mb-3 text-foreground">Get in Touch</h2>
              <ul className="space-y-4 text-sm font-sans">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">Editorial</p>
                    <a href="mailto:news@northwesttimes.co.za" className="text-primary hover:underline">
                      news@northwesttimes.co.za
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">Advertising</p>
                    <a href="mailto:ads@northwesttimes.co.za" className="text-primary hover:underline">
                      ads@northwesttimes.co.za
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-foreground">Telephone</p>
                    <a href="tel:+27145551234" className="text-primary hover:underline">
                      +27 14 555 1234
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif font-bold text-base mb-3 text-foreground">Follow Us</h2>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter / X"
                  className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-[var(--navy)] rounded-xl p-4 text-[var(--navy-foreground)] text-sm font-sans">
              <p className="font-semibold mb-1">News tips?</p>
              <p className="text-[oklch(0.75_0.02_255)] leading-relaxed text-xs">
                If you have a story tip, send an email to our newsroom at{' '}
                <a href="mailto:tips@northwesttimes.co.za" className="text-[var(--gold)] hover:underline">
                  tips@northwesttimes.co.za
                </a>
              </p>
            </div>
          </aside>

          {/* Contact form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h2 className="font-serif font-bold text-lg text-green-900 mb-2">Message Sent!</h2>
                <p className="text-sm text-green-700 leading-relaxed">
                  Thank you for reaching out. Our team will respond within 1–2 business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                aria-label="Contact form"
                className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4"
              >
                <h2 className="font-serif font-bold text-lg text-foreground">Send us a Message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-sans font-semibold text-foreground mb-1">
                      Full Name <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-sans font-semibold text-foreground mb-1">
                      Email <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-sans font-semibold text-foreground mb-1">
                    Subject <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-sans font-semibold text-foreground mb-1">
                    Message <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    placeholder="Your message..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start flex items-center gap-2 bg-primary text-primary-foreground font-sans font-bold text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" aria-hidden="true" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
