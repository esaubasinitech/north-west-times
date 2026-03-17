import Link from 'next/link'
import Image from 'next/image'
import type { Article } from '@/lib/data'
import { Calendar, User, Tag } from 'lucide-react'

const categoryColors: Record<string, string> = {
  Politics: 'bg-red-700 text-white',
  Community: 'bg-green-700 text-white',
  Business: 'bg-blue-700 text-white',
  Education: 'bg-purple-700 text-white',
  Events: 'bg-orange-600 text-white',
}

interface ArticleCardProps {
  article: Article
  variant?: 'default' | 'compact' | 'horizontal'
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  if (variant === 'compact') {
    return (
      <article className="flex gap-3 py-3 border-b border-border last:border-0">
        <Link href={`/news/${article.slug}`} className="shrink-0">
          <div className="relative w-20 h-16 rounded overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          <Link href={`/news/${article.slug}`}>
            <h4 className="font-sans font-semibold text-sm text-foreground leading-snug hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h4>
          </Link>
          <p className="text-xs text-muted-foreground mt-1">{article.publishDate}</p>
        </div>
      </article>
    )
  }

  if (variant === 'horizontal') {
    return (
      <article className="flex gap-4 bg-card rounded-lg overflow-hidden border border-border hover:shadow-md transition-shadow">
        <Link href={`/news/${article.slug}`} className="shrink-0">
          <div className="relative w-40 h-full min-h-[120px]">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt}
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
        </Link>
        <div className="flex-1 p-4">
          <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded mb-2 ${categoryColors[article.category] ?? 'bg-muted text-foreground'}`}>
            {article.category}
          </span>
          <Link href={`/news/${article.slug}`}>
            <h3 className="font-serif font-bold text-base leading-snug hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">{article.excerpt}</p>
          <div className="flex gap-3 mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><User className="w-3 h-3" />{article.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{article.publishDate}</span>
          </div>
        </div>
      </article>
    )
  }

  // Default card
  return (
    <article className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-md transition-shadow flex flex-col">
      <Link href={`/news/${article.slug}`}>
        <div className="relative w-full aspect-video">
          <Image
            src={article.imageUrl}
            alt={article.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded ${categoryColors[article.category] ?? 'bg-muted text-foreground'}`}>
            <Tag className="w-3 h-3 inline mr-1" aria-hidden="true" />
            {article.category}
          </span>
        </div>
        <Link href={`/news/${article.slug}`}>
          <h3 className="font-serif font-bold text-base leading-snug hover:text-primary transition-colors line-clamp-3">
            {article.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed flex-1">{article.excerpt}</p>
        <div className="flex gap-3 mt-3 text-xs text-muted-foreground border-t border-border pt-3">
          <span className="flex items-center gap-1"><User className="w-3 h-3" aria-hidden="true" />{article.author}</span>
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" aria-hidden="true" />{article.publishDate}</span>
        </div>
      </div>
    </article>
  )
}
