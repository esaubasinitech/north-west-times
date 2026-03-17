import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ApplicationCard from '@/components/ApplicationCard'
import { applications } from '@/lib/data'
import { University, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tertiary Applications | North West Times',
  description:
    'Find application deadlines and links for universities and TVET colleges relevant to North West Province students.',
  openGraph: {
    title: 'Tertiary Applications | North West Times',
    description: 'Application deadlines for NWU, VUT, SPU, Orbit TVET, Taletso TVET and more.',
  },
}

export default function ApplicationsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="border-b-2 border-primary pb-3 mb-6">
          <div className="flex items-center gap-3">
            <University className="w-7 h-7 text-primary" aria-hidden="true" />
            <div>
              <h1 className="font-serif font-black text-3xl text-foreground">Tertiary Applications</h1>
              <p className="font-sans text-muted-foreground text-sm mt-0.5">
                Application windows and deadlines for universities and colleges serving North West Province students
              </p>
            </div>
          </div>
        </div>

        {/* Info banner */}
        <div className="bg-secondary border border-border rounded-lg p-4 flex gap-3 mb-8">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm font-sans">
            <p className="font-semibold text-foreground">Important Note</p>
            <p className="text-muted-foreground leading-relaxed mt-0.5">
              Application dates are updated as institutions announce them. Always verify directly on the institution&apos;s official website before applying. NSFAS applications run concurrently — visit{' '}
              <a href="https://www.nsfas.org.za" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                nsfas.org.za
              </a>{' '}
              to apply for financial aid.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {applications.map((app) => (
            <ApplicationCard key={app.id} application={app} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-[var(--navy)] rounded-xl p-8 text-center text-[var(--navy-foreground)]">
          <h2 className="font-serif font-bold text-xl mb-2">Need help with your application?</h2>
          <p className="text-sm text-[oklch(0.75_0.02_255)] max-w-lg mx-auto leading-relaxed">
            North West Times publishes guides, tips, and announcements to help you navigate the application process. Subscribe to our newsletter for updates.
          </p>
          <a
            href="#newsletter"
            className="mt-4 inline-block bg-[var(--gold)] text-[var(--gold-foreground)] font-sans font-bold text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Subscribe to Updates
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
