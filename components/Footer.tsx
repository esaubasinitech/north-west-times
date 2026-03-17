import Link from 'next/link'
import { Newspaper, Facebook, Twitter, Youtube, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--navy)] text-[var(--navy-foreground)] mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Newspaper className="text-[var(--gold)] w-6 h-6" aria-hidden="true" />
              <span className="font-serif text-xl font-bold">
                North West <span className="text-[var(--gold)]">Times</span>
              </span>
            </Link>
            <p className="text-sm text-[oklch(0.75_0.02_255)] leading-relaxed">
              Your trusted source for news, opportunities, and community information in the North West Province.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook" className="text-[oklch(0.65_0.02_255)] hover:text-[var(--gold)] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter / X" className="text-[oklch(0.65_0.02_255)] hover:text-[var(--gold)] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-[oklch(0.65_0.02_255)] hover:text-[var(--gold)] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-[var(--gold)] uppercase tracking-wider text-xs mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Latest News', href: '/news' },
                { label: 'Job Listings', href: '/jobs' },
                { label: 'Applications', href: '/applications' },
                { label: 'Bursaries', href: '/bursaries' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[oklch(0.75_0.02_255)] hover:text-[var(--gold)] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-sans font-semibold text-[var(--gold)] uppercase tracking-wider text-xs mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              {['Politics', 'Community', 'Business', 'Education', 'Events'].map((cat) => (
                <li key={cat}>
                  <Link href={`/news?category=${cat}`} className="text-[oklch(0.75_0.02_255)] hover:text-[var(--gold)] transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-semibold text-[var(--gold)] uppercase tracking-wider text-xs mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-[oklch(0.75_0.02_255)]">
                <Mail className="w-4 h-4 text-[var(--gold)] shrink-0" aria-hidden="true" />
                <a href="mailto:news@northwesttimes.co.za" className="hover:text-[var(--gold)] transition-colors">
                  news@northwesttimes.co.za
                </a>
              </li>
              <li className="flex items-center gap-2 text-[oklch(0.75_0.02_255)]">
                <Phone className="w-4 h-4 text-[var(--gold)] shrink-0" aria-hidden="true" />
                <a href="tel:+27145551234" className="hover:text-[var(--gold)] transition-colors">
                  +27 14 555 1234
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-block bg-[var(--gold)] text-[var(--gold-foreground)] text-xs font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity"
              >
                Send us a message
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[oklch(0.28_0.07_255)] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[oklch(0.55_0.02_255)]">
          <p>&copy; {year} North West Times. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[var(--gold)] transition-colors">Contact</Link>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
