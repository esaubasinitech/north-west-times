import Link from 'next/link'
import Image from 'next/image'
import type { Article } from '@/lib/data'

interface HeroSectionProps {
  article: Article
}

export default function HeroSection({ article }: HeroSectionProps) {
  return (
    <section aria-label="Featured story" className="relative w-full bg-[var(--navy)] overflow-hidden">
      <div className="relative w-full h-[480px] md:h-[580px]">
        <Image
          src={article.imageUrl}
          alt={article.imageAlt}
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[oklch(0.22_0.09_255/0.6)] to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-4xl">
          <span className="inline-block bg-[var(--gold)] text-[var(--gold-foreground)] text-xs font-sans font-bold px-3 py-1 rounded uppercase tracking-wide mb-3">
            {article.category}
          </span>
          <h1 className="font-serif font-black text-white text-2xl md:text-4xl lg:text-5xl leading-tight text-balance">
            {article.title}
          </h1>
          <p className="font-sans text-[oklch(0.82_0.02_255)] text-sm md:text-base mt-3 leading-relaxed line-clamp-2 max-w-2xl">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link
              href={`/news/${article.slug}`}
              className="inline-block bg-[var(--gold)] text-[var(--gold-foreground)] font-sans font-bold text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              Read Full Story
            </Link>
            <span className="font-sans text-xs text-[oklch(0.65_0.02_255)]">
              By {article.author} &middot; {article.publishDate}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
