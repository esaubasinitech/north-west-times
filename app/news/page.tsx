import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ArticleCard from '@/components/ArticleCard'
import Sidebar from '@/components/Sidebar'
import { articles, trendingArticles, type Category } from '@/lib/data'

export const metadata: Metadata = {
  title: 'News | North West Times',
  description: 'Browse the latest news from the North West Province - politics, community, business, education, and events.',
  openGraph: {
    title: 'News | North West Times',
    description: 'Browse the latest news from the North West Province.',
  },
}

const categories: Category[] = ['Politics', 'Community', 'Business', 'Education', 'Events']

const categoryColors: Record<Category, string> = {
  Politics: 'border-red-700 text-red-700 hover:bg-red-700',
  Community: 'border-green-700 text-green-700 hover:bg-green-700',
  Business: 'border-blue-700 text-blue-700 hover:bg-blue-700',
  Education: 'border-purple-700 text-purple-700 hover:bg-purple-700',
  Events: 'border-orange-600 text-orange-600 hover:bg-orange-600',
}

interface NewsPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  const params = await searchParams
  const activeCategory = params.category as Category | undefined

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="border-b-2 border-primary pb-3 mb-6">
          <h1 className="font-serif font-black text-3xl text-foreground">News</h1>
          <p className="font-sans text-muted-foreground text-sm mt-1">
            Latest news from across the North West Province
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by category">
          <Link
            href="/news"
            className={`px-4 py-1.5 rounded-full border text-sm font-sans font-semibold transition-colors
              ${!activeCategory
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border text-foreground hover:bg-muted'
              }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/news?category=${cat}`}
              className={`px-4 py-1.5 rounded-full border text-sm font-sans font-semibold transition-colors
                ${activeCategory === cat
                  ? `bg-current ${categoryColors[cat]} text-white border-current`
                  : `${categoryColors[cat]} border-current hover:text-white`
                }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {filtered.length === 0 ? (
              <p className="text-muted-foreground text-sm">No articles found in this category.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filtered.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>
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
