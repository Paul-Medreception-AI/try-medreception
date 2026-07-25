import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: 'Try MedReception | AI Receptionist Built by Physicians for Physicians',
  description: 'MedReception AI answers calls, books appointments, and never misses a patient. A physician-built solution that understands the real workflow of medical practice.',
  metadataBase: new URL('https://trymedreception.com'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png'
  },
  openGraph: {
    title: 'Try MedReception | AI Receptionist Built by Physicians for Physicians',
    description: 'MedReception AI answers calls, books appointments, and never misses a patient. A physician-built solution that understands the real workflow of medical practice.',
    url: 'https://trymedreception.com',
    siteName: 'Try MedReception',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Try MedReception'
      }
    ],
    locale: 'en_US',
    type: 'website'
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
            <a href="/" className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">
              Try MedReception
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/services" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Services
              </a>
              <a href="/how-it-works" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                How It Works
              </a>
              <a href="/about" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                About
              </a>
              <a href="/pricing" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Pricing
              </a>
              <a href="/contact" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Contact
              </a>
              <a href="/contact" className="ml-8 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors">
                See How It Works
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
                <a href="/" className="font-cormorant text-xl font-semibold text-white inline-block mb-4">
                  Try MedReception
                </a>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Physician-built AI receptionist solutions that never miss a patient call.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/services" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-4">Contact</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li>[Address to be added]</li>
                  <li>[Phone to be added]</li>
                  <li>[Email to be added]</li>
                  <li>[Hours to be added]</li>
                </ul>
              </div>
            </div>

            {/* TODO(optimize): fill real footer NAP before launch */}

            <div className="pt-8 border-t border-gray-700">
              <p className="text-xs text-gray-400 mb-4">
                This website does not collect protected health information. All clinical intake is handled through a secure patient portal.
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                <p>&copy; {new Date().getFullYear()} Try MedReception. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms-of-service" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                  <a href="/sms-terms" className="hover:text-white transition-colors">
                    SMS Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}