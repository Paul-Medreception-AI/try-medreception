import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Try MedReception',
  description: 'MedReception AI was founded by Paul Toomey, MD, a practicing surgeon who experienced firsthand the challenges of managing patient communications.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-sm mb-6 text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span>About</span>
          </div>
          <h1 className="font-cormorant text-6xl font-light leading-tight">
            Built by a Surgeon Who Understands Your Practice
          </h1>
          <p className="text-xl text-white/80 mt-4 max-w-3xl">
            A physician-founded solution designed for the real challenges of medical communication and patient care coordination.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Text Content */}
            <div className="lg:col-span-3 lg:pr-12 space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
              <p>
                MedReception AI was founded by Paul Toomey, MD, a practicing surgeon who experienced firsthand the challenges of managing patient communications while delivering excellent clinical care. After seeing too many patients fall through the cracks due to missed calls and scheduling bottlenecks, he set out to build a solution that would work seamlessly within the real constraints of medical practice.
              </p>
              <p>
                Unlike generic chatbots or overseas call centers, MedReception AI speaks the language of healthcare and integrates naturally with your existing systems. The result feels like an extension of your practice, not a corporate workaround. We understand the nuances of medical terminology, the importance of patient confidentiality, and the complexity of clinical workflows because we live them every day.
              </p>
              <p>
                Our mission is to help medical practices focus on what matters most: delivering exceptional patient care. By handling the communication burden with intelligent automation, we free your staff to work at the top of their license while ensuring no patient is ever left waiting. This is healthcare technology built by clinicians, for clinicians.
              </p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up">
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-primary)] mb-6">
                  Our Credentials
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Physician-Founded and Operated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">HIPAA-Compliant Infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Built for Medical Practice Workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Real-Time Appointment Scheduling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">Designed by Clinicians for Clinicians</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-ink)]">24/7 Continuous Patient Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-cormorant text-4xl text-center text-[var(--color-primary)] mb-16">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Clinical Excellence */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up hover:shadow-lg transition-shadow">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-primary)] mb-3">
                Clinical Excellence First
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Every feature is designed with patient safety and clinical accuracy at the forefront. We never compromise on quality to chase convenience or cost savings.
              </p>
            </div>

            {/* Physician Understanding */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up hover:shadow-lg transition-shadow">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-primary)] mb-3">
                Built by Physicians
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                We understand medical workflows because we live them. Our solutions reflect the real challenges and priorities of practicing clinicians, not tech stereotypes.
              </p>
            </div>

            {/* Seamless Integration */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] animate-fade-up hover:shadow-lg transition-shadow">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="font-cormorant text-xl font-semibold text-[var(--color-primary)] mb-3">
                Effortless Integration
              </h3>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Technology should enhance your practice, not disrupt it. We integrate with your existing systems quickly and transparently, with minimal staff training required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let us show you how MedReception AI can transform your practice communications and improve patient access.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-cream)] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}