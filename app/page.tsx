import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[90vh] bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] flex items-center text-white">
        <div className="max-w-5xl mx-auto px-6 text-center py-20">
          <h1 className="font-cormorant text-6xl sm:text-7xl font-light tracking-tight leading-tight">
            An AI Receptionist for Medical Practices, Built by a Surgeon
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6 leading-relaxed">
            MedReception AI answers calls, books appointments, and never misses a patient. A physician-built solution that understands the real workflow of medical practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Link href="/contact" className="bg-white text-[var(--color-dark)] px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all">
              See How It Works
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              Talk to the Founder
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-[var(--color-ink)] text-sm sm:text-base">Physician-Founded and Operated</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-[var(--color-ink)] text-sm sm:text-base">HIPAA-Compliant Infrastructure</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-[var(--color-ink)] text-sm sm:text-base">Designed for Medical Practices</span>
            </div>
            <div className="flex items-center gap-3">
              <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-[var(--color-ink)] text-sm sm:text-base">Real-Time Appointment Scheduling</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center text-[var(--color-ink)] mb-4">
            How We Can Help
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Comprehensive AI-powered solutions designed to streamline your medical practice operations
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: 24/7 Call Answering */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                24/7 Call Answering
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Never miss a patient call again. Our AI receptionist answers every call instantly, day or night, ensuring patients always reach your practice when they need care.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline transition-all">
                Learn More →
              </Link>
            </div>

            {/* Service 2: Appointment Scheduling */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Appointment Scheduling
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Automated booking that syncs with your existing calendar. Patients can schedule, reschedule, and confirm appointments without staff intervention.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline transition-all">
                Learn More →
              </Link>
            </div>

            {/* Service 3: Patient Intake & Triage */}
            <div className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-[var(--color-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-5">
                Patient Intake & Triage
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                Collect essential patient information and route urgent cases appropriately. Streamline your front-office workflow while maintaining clinical quality.
              </p>
              <Link href="/services" className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 hover:underline transition-all">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">
                Built by a Surgeon Who Understands Your Practice
              </h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                MedReception AI was founded by Paul Toomey, MD, a practicing surgeon who experienced firsthand the challenges of managing patient communications while delivering excellent clinical care. After seeing too many patients fall through the cracks due to missed calls and scheduling bottlenecks, he set out to build a solution that would work seamlessly within the real constraints of medical practice.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                Unlike generic chatbots or overseas call centers, MedReception AI speaks the language of healthcare and integrates naturally with your existing systems. The result feels like an extension of your practice, not a corporate workaround. We understand the nuances of medical terminology, the importance of patient confidentiality, and the complexity of clinical workflows because we live them every day.
              </p>
              <Link href="/about" className="inline-block text-[var(--color-primary)] font-semibold hover:underline transition-all">
                Meet Our Team →
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[var(--color-light)] rounded-2xl h-80 w-full flex items-center justify-center">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-20 h-20 text-[var(--color-primary)] opacity-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v.008" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[var(--color-ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16">
            Getting Started Is Simple
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">01</div>
              <h3 className="font-cormorant text-2xl mb-4">Quick Integration</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We connect MedReception AI to your phone system and calendar in under 48 hours. No complex installs or staff training, just a simple setup that works with your existing infrastructure.
              </p>
            </div>

            {/* Step 2 */}
            <div className="animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">02</div>
              <h3 className="font-cormorant text-2xl mb-4">Custom Configuration</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We tailor the AI to your practice's specific needs, protocols, and scheduling preferences. Your receptionist learns your terminology, hours, insurance requirements, and triage protocols.
              </p>
            </div>

            {/* Step 3 */}
            <div className="animate-fade-up">
              <div className="font-cormorant text-7xl text-[var(--color-primary)] opacity-60 mb-4">03</div>
              <h3 className="font-cormorant text-2xl mb-4">Launch and Support</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Go live with confidence knowing our physician-led team monitors performance and continuously optimizes responses. We provide ongoing support to ensure seamless integration with your clinical workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-light mb-6">
            AI Receptionist Built by Physicians for Physicians
          </h2>
          <Link href="/contact" className="inline-block bg-white text-[var(--color-dark)] font-bold px-12 py-5 rounded-2xl shadow-2xl hover:-translate-y-1 transition-all text-lg">
            See How It Works
          </Link>
        </div>
      </section>
    </main>
  )
}