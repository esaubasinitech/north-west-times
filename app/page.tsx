import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ArticleCard from '@/components/ArticleCard'
import JobCard from '@/components/JobCard'
import BursaryCard from '@/components/BursaryCard'
import ApplicationCard from '@/components/ApplicationCard'
import Sidebar from '@/components/Sidebar'
import { articles, jobs, bursaries, applications, trendingArticles } from '@/lib/data'
import { BookOpen, Briefcase, GraduationCap, University } from 'lucide-react'

export default function HomePage() {
  const featuredArticle = articles.find((a) => a.featured) ?? articles[0]
  const latestArticles = articles.filter((a) => a.id !== featuredArticle.id).slice(0, 4)
  const featuredJobs = jobs.slice(0, 3)
  const featuredBursaries = bursaries.slice(0, 3)
  const featuredApplications = applications.slice(0, 3)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <HeroSection article={featuredArticle} />

        {/* Breaking news bar */}
        <div className="bg-[var(--gold)] text-[var(--gold-foreground)]">
          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3 text-sm">
            <span className="shrink-0 font-sans font-black uppercase tracking-wider text-xs bg-[var(--navy)] text-[var(--navy-foreground)] px-2 py-0.5 rounded">
              Latest
            </span>
            <span className="font-sans text-sm truncate">
              NWU 2027 Applications Open &nbsp;&bull;&nbsp; Platinum mines hiring 3 000 workers &nbsp;&bull;&nbsp; Aardklop Festival confirmed for September
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 flex flex-col gap-12">

              {/* Latest News */}
              <section aria-labelledby="latest-news-heading">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-primary pb-2">
                  <BookOpen className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h2 id="latest-news-heading" className="font-serif font-bold text-xl text-foreground">
                    Latest News
                  </h2>
                  <Link href="/news" className="ml-auto text-xs font-sans font-semibold text-primary hover:underline">
                    View all &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {latestArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>

              {/* Jobs */}
              <section aria-labelledby="jobs-heading">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-primary pb-2">
                  <Briefcase className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h2 id="jobs-heading" className="font-serif font-bold text-xl text-foreground">
                    Featured Jobs
                  </h2>
                  <Link href="/jobs" className="ml-auto text-xs font-sans font-semibold text-primary hover:underline">
                    View all jobs &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {featuredJobs.map((job) => (
                    <JobCard key={job.id} job={job} compact />
                  ))}
                </div>
              </section>

              {/* Applications */}
              <section aria-labelledby="applications-heading">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-[var(--gold)] pb-2">
                  <University className="w-5 h-5 text-[var(--gold)]" aria-hidden="true" />
                  <h2 id="applications-heading" className="font-serif font-bold text-xl text-foreground">
                    Tertiary Applications
                  </h2>
                  <Link href="/applications" className="ml-auto text-xs font-sans font-semibold text-primary hover:underline">
                    View all &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {featuredApplications.map((app) => (
                    <ApplicationCard key={app.id} application={app} />
                  ))}
                </div>
              </section>

              {/* Bursaries */}
              <section aria-labelledby="bursaries-heading">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-[var(--gold)] pb-2">
                  <GraduationCap className="w-5 h-5 text-[var(--gold)]" aria-hidden="true" />
                  <h2 id="bursaries-heading" className="font-serif font-bold text-xl text-foreground">
                    Bursary Opportunities
                  </h2>
                  <Link href="/bursaries" className="ml-auto text-xs font-sans font-semibold text-primary hover:underline">
                    View all &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {featuredBursaries.map((bursary) => (
                    <BursaryCard key={bursary.id} bursary={bursary} />
                  ))}
                </div>
              </section>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Sidebar trending={trendingArticles} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
