'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Newspaper } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'News', href: '/news' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Applications', href: '/applications' },
  { label: 'Bursaries', href: '/bursaries' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top ticker bar */}
      <div className="bg-[var(--navy)] text-[var(--navy-foreground)] text-xs py-1.5 px-4 hidden md:flex items-center justify-between">
        <span className="font-sans tracking-wide uppercase text-[oklch(0.75_0.15_75)]">Breaking News</span>
        <span className="truncate max-w-xl">
          Road upgrades announced in Mahikeng · NWU 2027 applications open · Platinum mines to create 3 000 jobs
        </span>
        <span className="text-muted-foreground">12 March 2026</span>
      </div>

      {/* Main navbar */}
      <header className="sticky top-0 z-50 bg-primary shadow-md">
        <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="North West Times home">
            <Newspaper className="text-[var(--gold)] w-7 h-7" aria-hidden="true" />
            <span className="font-serif text-primary-foreground text-xl font-bold tracking-tight leading-none">
              North West <span className="text-[var(--gold)]">Times</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded text-sm font-sans font-semibold transition-colors
                      ${active
                        ? 'bg-[var(--gold)] text-[var(--gold-foreground)]'
                        : 'text-primary-foreground hover:text-[var(--gold)]'
                      }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[var(--navy)] border-t border-[oklch(0.35_0.09_255)] px-4 pb-4">
            <ul className="flex flex-col gap-1 mt-2" role="list">
              {navLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2.5 rounded text-sm font-sans font-semibold transition-colors
                        ${active
                          ? 'bg-[var(--gold)] text-[var(--gold-foreground)]'
                          : 'text-primary-foreground hover:text-[var(--gold)]'
                        }`}
                      aria-current={active ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </header>
    </>
  )
}
