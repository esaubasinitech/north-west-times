import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['300', '400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'North West Times — Your Trusted Regional News Source',
  description:
    'North West Times covers local news, jobs, bursaries, and tertiary applications for residents of the North West Province, South Africa.',
  generator: 'v0.app',
  openGraph: {
    title: 'North West Times',
    description: 'Local news, jobs, bursaries and applications for North West Province, South Africa.',
    type: 'website',
    locale: 'en_ZA',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
