import type { Metadata } from 'next'
import Image from 'next/image'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })

// NOTE: This is a cold-OUTREACH domain page, not a marketing site. It must be
// credible to a human visitor but INVISIBLE to search — an indexed cold-sending
// domain accumulating backlinks reads as less legitimate to spam filters. So:
// robots: noindex/nofollow, no sitemap, no analytics/pixels. Do not "SEO-optimize."
export const metadata: Metadata = {
  metadataBase: new URL('https://trymedreception.com'),
  title: 'MedReception AI | AI Receptionist Built by a Practicing Surgeon',
  description: 'MedReception AI answers calls, books appointments, and never misses a patient — a physician-built solution for medical practices.',
  robots: { index: false, follow: false, nocache: true },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)] antialiased">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="/" className="flex items-center" aria-label="MedReception AI">
              <Image
                src="/medreception-logo.png"
                alt="MedReception AI"
                width={356}
                height={40}
                priority
                className="h-9 w-auto sm:h-10"
              />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="https://www.medreception.ai" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                MedReception.ai
              </a>
              <a href="https://www.medreception.ai/book?utm_source=trymedreception&utm_medium=outreach" className="ml-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors">
                Talk to the Founder
              </a>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <a href="https://www.medreception.ai?utm_source=trymedreception&utm_medium=outreach" className="inline-block mb-4" aria-label="MedReception AI">
                  <Image
                    src="/medreception-logo-light.png"
                    alt="MedReception AI"
                    width={182}
                    height={32}
                    className="h-8 w-auto"
                  />
                </a>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Physician-built AI reception for medical practices that never miss a patient.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.medreception.ai" className="text-sm text-gray-300 hover:text-[var(--color-accent)] transition-colors">
                      MedReception.ai
                    </a>
                  </li>
                  <li>
                    <a href="https://www.medreception.ai/book?utm_source=trymedreception&utm_medium=outreach" className="text-sm text-gray-300 hover:text-[var(--color-accent)] transition-colors">
                      Book a demo
                    </a>
                  </li>
                </ul>
              </div>

              {/* CAN-SPAM: a real physical mailing address + contact must appear on
                  a page tied to commercial email. Do not remove or placeholder. */}
              <div>
                <h3 className="font-semibold text-white mb-4">Contact</h3>
                {/* No email on the page — CAN-SPAM requires a physical postal
                    address (present below), not an email. Omitting it gives
                    scrapers nothing to harvest against the warmed sending mailbox. */}
                <address className="not-italic space-y-1 text-sm text-gray-300">
                  <p>MedReception AI</p>
                  <p>802 11th Street West</p>
                  <p>Bradenton, Florida 34205</p>
                </address>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-xs text-gray-400 mb-4">
                This website does not collect protected health information. All clinical intake is handled through a secure patient portal.
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                <p>© {new Date().getFullYear()} MedReception AI. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="/privacy" className="hover:text-[var(--color-accent)] transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="hover:text-[var(--color-accent)] transition-colors">
                    Terms of Service
                  </a>
                  <a href="/sms-terms" className="hover:text-[var(--color-accent)] transition-colors">
                    SMS Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
