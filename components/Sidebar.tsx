'use client'

import Link from 'next/link'
import type { Article } from '@/lib/data'
import { TrendingUp, Mail } from 'lucide-react'
import ArticleCard from './ArticleCard'

interface SidebarProps {
  trending: Article[]
}

export default function Sidebar({ trending }: SidebarProps) {
  return (
    <aside aria-label="Sidebar" className="flex flex-col gap-8">
      {/* Trending */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="bg-primary px-4 py-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[var(--gold)]" aria-hidden="true" />
          <h2 className="font-sans font-bold text-sm text-primary-foreground uppercase tracking-wide">
            Trending Now
          </h2>
        </div>
        <div className="px-4 py-2">
          {trending.map((article) => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[var(--navy)] rounded-lg p-5 text-[var(--navy-foreground)]">
        <div className="flex items-center gap-2 mb-2">
          <Mail className="w-5 h-5 text-[var(--gold)]" aria-hidden="true" />
          <h2 className="font-serif font-bold text-base">Newsletter</h2>
        </div>
        <p className="text-sm text-[oklch(0.75_0.02_255)] leading-relaxed mb-4">
          Get the latest North West news delivered to your inbox every morning.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          aria-label="Newsletter signup"
          className="flex flex-col gap-2"
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            aria-label="Email address"
            className="w-full rounded border border-[oklch(0.35_0.07_255)] bg-[oklch(0.28_0.07_255)] text-[var(--navy-foreground)] placeholder:text-[oklch(0.55_0.02_255)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
          />
          <button
            type="submit"
            className="w-full bg-[var(--gold)] text-[var(--gold-foreground)] font-sans font-bold text-sm py-2 rounded hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Ad / CTA */}
      <div className="border-2 border-dashed border-[var(--gold)] rounded-lg p-5 text-center">
        <p className="text-xs font-sans font-semibold text-muted-foreground uppercase tracking-wide mb-1">Advertise With Us</p>
        <p className="font-serif font-bold text-sm text-foreground">Reach 50 000+ readers in the North West Province</p>
        <Link
          href="/contact"
          className="mt-3 inline-block text-xs text-[var(--gold)] font-semibold hover:underline"
        >
          Contact our advertising team
        </Link>
      </div>
    </aside>
  )
}
