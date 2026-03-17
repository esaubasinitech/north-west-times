import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import Sidebar from '@/components/Sidebar'
import { articles, trendingArticles } from '@/lib/data'
import { User, Calendar, Tag, ArrowLeft } from 'lucide-react'

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return { title: 'Article Not Found | North West Times' }
  return {
    title: `${article.title} | North West Times`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.imageUrl }],
    },
  }
}

const categoryColors: Record<string, string> = {
  Politics: 'bg-red-700 text-white',
  Community: 'bg-green-700 text-white',
  Business: 'bg-blue-700 text-white',
  Education: 'bg-purple-700 text-white',
  Events: 'bg-orange-600 text-white',
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const related = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Article */}
          <article className="lg:col-span-2" aria-label={article.title}>
            <Link href="/news" className="inline-flex items-center gap-1 text-xs font-sans text-muted-foreground hover:text-primary mb-4 transition-colors">
              <ArrowLeft className="w-3 h-3" aria-hidden="true" /> Back to News
            </Link>

            <div className="mb-3 flex items-center gap-2">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded ${categoryColors[article.category] ?? 'bg-muted'}`}>
                <Tag className="w-3 h-3 inline mr-1" aria-hidden="true" />
                {article.category}
              </span>
            </div>

            <h1 className="font-serif font-black text-2xl md:text-4xl leading-tight text-balance mb-4">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 pb-4 border-b border-border">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{article.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{article.publishDate}</span>
            </div>

            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
              <Image
                src={article.imageUrl}
                alt={article.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>

            <div className="prose prose-lg max-w-none font-sans">
              {article.body.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <section aria-labelledby="related-heading" className="mt-12">
                <h2 id="related-heading" className="font-serif font-bold text-xl mb-4 border-b-2 border-primary pb-2">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {related.map((a) => (
                    <ArticleCard key={a.id} article={a} />
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar trending={trendingArticles} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
