import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Newspaper, Target, Eye, Users, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | North West Times',
  description:
    'Learn about North West Times - our mission, our values, and our commitment to serving the North West Province community.',
  openGraph: {
    title: 'About North West Times',
    description: 'Community-focused news for the North West Province, South Africa.',
  },
}

const pillars = [
  {
    icon: <Target className="w-6 h-6 text-[var(--gold)]" aria-hidden="true" />,
    title: 'Our Mission',
    description:
      'To inform, educate, and empower the residents of the North West Province with timely, accurate, and relevant news and opportunities.',
  },
  {
    icon: <Eye className="w-6 h-6 text-[var(--gold)]" aria-hidden="true" />,
    title: 'Our Vision',
    description:
      'A North West Province where every resident has access to quality information about local developments, economic opportunities, and educational pathways.',
  },
  {
    icon: <Users className="w-6 h-6 text-[var(--gold)]" aria-hidden="true" />,
    title: 'Community First',
    description:
      'We prioritise stories that matter to ordinary people - from road upgrades in Mahikeng to bursary deadlines for students in Potchefstroom.',
  },
  {
    icon: <MapPin className="w-6 h-6 text-[var(--gold)]" aria-hidden="true" />,
    title: 'Local Coverage',
    description:
      'With journalists embedded across Rustenburg, Klerksdorp, Mahikeng, and Potchefstroom, we provide on-the-ground coverage you will not find elsewhere.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="bg-[var(--navy)] text-[var(--navy-foreground)] py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Newspaper className="w-12 h-12 text-[var(--gold)]" aria-hidden="true" />
            </div>
            <h1 className="font-serif font-black text-3xl md:text-5xl text-balance mb-4">
              About North West <span className="text-[var(--gold)]">Times</span>
            </h1>
            <p className="font-sans text-[oklch(0.78_0.02_255)] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              North West Times is the North West Province&apos;s dedicated digital news platform, covering local politics, community affairs, business, education, and events.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Pillars */}
          <section aria-labelledby="pillars-heading" className="mb-14">
            <h2 id="pillars-heading" className="font-serif font-bold text-2xl text-center mb-8 text-foreground">
              What Drives Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="bg-card border border-border rounded-xl p-6 flex gap-4">
                  <div className="shrink-0 mt-0.5">{pillar.icon}</div>
                  <div>
                    <h3 className="font-serif font-bold text-base mb-1">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About text */}
          <section aria-labelledby="about-story-heading" className="prose max-w-none font-sans mb-14">
            <h2 id="about-story-heading" className="font-serif font-bold text-2xl text-foreground mb-4">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                North West Times was founded with a simple but powerful belief: residents of the North West Province deserve a dedicated, reliable, and accessible news platform that understands their communities and their challenges.
              </p>
              <p>
                Too often, major national publications overlook the stories that matter most to people living in Mahikeng, Rustenburg, Klerksdorp, and Potchefstroom. Road upgrades, local elections, school infrastructure, mining employment, and university applications - these are the stories that shape daily life in the province, and they are the stories we tell.
              </p>
              <p>
                Beyond news, we recognise that access to economic and educational opportunities is life-changing. That is why North West Times dedicates equal prominence to job listings, bursary opportunities, and tertiary application information. We believe that information is empowerment.
              </p>
              <p>
                We are committed to editorial independence, accuracy, and fairness. Our journalists adhere to the Press Code of South Africa and are proud members of the South African National Editors Forum.
              </p>
            </div>
          </section>

          {/* Coverage areas */}
          <section aria-labelledby="coverage-heading" className="bg-secondary rounded-xl p-8">
            <h2 id="coverage-heading" className="font-serif font-bold text-xl text-foreground mb-4">
              Coverage Areas
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                'Mahikeng / Mmabatho',
                'Rustenburg',
                'Klerksdorp',
                'Potchefstroom',
                'Brits',
                'Zeerust',
                'Lichtenburg',
                'Vryburg',
              ].map((area) => (
                <div key={area} className="flex items-center gap-2 text-sm font-sans">
                  <MapPin className="w-3.5 h-3.5 text-[var(--gold)] shrink-0" aria-hidden="true" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
