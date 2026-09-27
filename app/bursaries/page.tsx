import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BursaryCard from '@/components/BursaryCard'
import { bursaries } from '@/lib/data'
import { GraduationCap, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bursaries | North West Times',
  description:
    'Discover bursary opportunities available to students from the North West Province - from mining companies, government, and financial institutions.',
  openGraph: {
    title: 'Bursaries | North West Times',
    description: 'Bursary opportunities for North West Province students.',
  },
}

export default function BursariesPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="border-b-2 border-[var(--gold)] pb-3 mb-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-[var(--gold)]" aria-hidden="true" />
            <div>
              <h1 className="font-serif font-black text-3xl text-foreground">Bursary Opportunities</h1>
              <p className="font-sans text-muted-foreground text-sm mt-0.5">
                Funding opportunities for students in the North West Province
              </p>
            </div>
          </div>
        </div>

        {/* Info banner */}
        <div className="bg-secondary border border-border rounded-lg p-4 flex gap-3 mb-8">
          <Info className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm font-sans">
            <p className="font-semibold text-foreground">Applying for a bursary?</p>
            <p className="text-muted-foreground leading-relaxed mt-0.5">
              Always apply directly through the bursary sponsor&apos;s official website or contact them directly. Early applications are recommended as many bursaries close ahead of their advertised deadline.
            </p>
          </div>
        </div>

        {/* Bursary grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bursaries.map((bursary) => (
            <BursaryCard key={bursary.id} bursary={bursary} />
          ))}
        </div>

        {/* NSFAS callout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-primary rounded-xl p-6 text-primary-foreground">
            <h2 className="font-serif font-bold text-lg mb-2">NSFAS Funding</h2>
            <p className="text-sm leading-relaxed opacity-90 mb-4">
              The National Student Financial Aid Scheme (NSFAS) provides financial aid to eligible students at public universities and TVET colleges. Apply before the deadline at nsfas.org.za.
            </p>
            <a
              href="https://www.nsfas.org.za"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--gold)] text-[var(--gold-foreground)] font-sans font-bold text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
            >
              Visit NSFAS
            </a>
          </div>
          <div className="bg-secondary border border-border rounded-xl p-6">
            <h2 className="font-serif font-bold text-lg mb-2 text-foreground">Missing a bursary?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Do you know of a bursary opportunity available to North West Province students that we have not listed? Let us know and we will publish it for free.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground font-sans font-bold text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
            >
              Submit a Bursary
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
