import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near San Francisco, CA | Try MedReception',
  description: 'Serving patients from San Francisco and surrounding CA communities. Expert psychiatric care is closer than you think. Telehealth available.',
  openGraph: {
    title: 'Other Medical Near San Francisco, CA | Try MedReception',
    description: 'Serving patients from San Francisco and surrounding CA communities. Expert psychiatric care is closer than you think.',
    url: 'https://trymedreception.com/locations/san-francisco-ca',
  },
}

export default function SanFranciscoPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm opacity-90">
            <span className="hover:underline transition-all">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all">Locations</span>
            <span className="mx-2">›</span>
            <span>San Francisco, CA</span>
          </nav>

          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 animate-fade-up">
            Other Medical Near San Francisco, CA
          </h1>
          <p className="text-xl mb-8 opacity-95 max-w-3xl animate-fade-up leading-relaxed">
            Serving patients from San Francisco and surrounding CA communities. Expert psychiatric care is closer than you think.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium hover:scale-105 animate-fade-up"
          >
            Schedule in San Francisco
          </a>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center animate-fade-up">
            Serving the San Francisco Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12 animate-fade-up">
            <p>
              Our practice is conveniently accessible to San Francisco residents, with easy freeway access and flexible appointment scheduling. Whether you're commuting from the Financial District, Mission Bay, or Pacific Heights, our location is designed to minimize travel time while maximizing your access to quality psychiatric care. Many of our San Francisco patients appreciate the short drive and ample parking availability compared to crowded downtown medical facilities.
            </p>
            <p>
              Patients from San Francisco choose Try MedReception for our comprehensive approach to mental health care, extended appointment times, and personalized treatment plans. We understand the unique stressors of Bay Area living and offer both in-person visits and secure telehealth options to fit your busy lifestyle. Our team is experienced in treating the full spectrum of psychiatric conditions with evidence-based practices and compassionate care.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <svg 
              className="w-16 h-16 text-[var(--color-primary)]" 
              stroke="currentColor" 
              strokeWidth={1.5} 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Services Available to San Francisco Patients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg 
                className="w-12 h-12 text-[var(--color-accent)] mb-6" 
                stroke="currentColor" 
                strokeWidth={1.5} 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Comprehensive diagnostic assessments to understand your mental health needs and develop personalized treatment plans for optimal outcomes.
              </p>
              <a 
                href="/services/psychiatric-evaluation" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center group"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg 
                className="w-12 h-12 text-[var(--color-accent)] mb-6" 
                stroke="currentColor" 
                strokeWidth={1.5} 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Expert psychopharmacology services with ongoing monitoring, adjustments, and support to ensure safe and effective treatment outcomes.
              </p>
              <a 
                href="/services/medication-management" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center group"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up">
              <svg 
                className="w-12 h-12 text-[var(--color-accent)] mb-6" 
                stroke="currentColor" 
                strokeWidth={1.5} 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Therapy & Counseling
              </h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                Evidence-based psychotherapy including CBT, DBT, and supportive counseling tailored to your individual needs and treatment goals.
              </p>
              <a 
                href="/services/therapy" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors inline-flex items-center group"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
            We understand that San Francisco traffic and busy schedules can make in-person visits challenging. That's why we offer secure, HIPAA-compliant telehealth appointments for California residents. Connect with our providers from the comfort of your home, office, or anywhere with a private internet connection.
          </p>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed">
            Our telehealth services are covered by most major insurance plans and provide the same quality care as in-person visits. Whether you need medication management, therapy sessions, or follow-up consultations, virtual care offers convenience without compromising clinical excellence.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {/* FAQ 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                How far is your practice from San Francisco?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is easily accessible from San Francisco via major freeways. Most patients report a comfortable commute of 20-40 minutes depending on traffic and your specific neighborhood. We offer flexible scheduling including early morning and evening appointments to help you avoid peak traffic hours.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                What's the best route from San Francisco?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Detailed directions are provided when you schedule your appointment. We're accessible from major San Francisco corridors and offer clear signage and parking instructions. Our staff is happy to help with specific route recommendations based on your starting location—just give us a call.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Do you offer telehealth for San Francisco residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We provide secure telehealth appointments for all California residents, including those in San Francisco. Virtual visits are ideal for medication management follow-ups, therapy sessions, and consultations. You'll receive the same personalized care through our encrypted video platform, and most insurance plans cover telehealth services.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Is parking available for San Francisco patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, we offer convenient on-site parking at no charge—a welcome change from San Francisco parking challenges. Our facility is fully accessible with ground-level entry, and we're located in a comfortable, professional setting designed with patient convenience in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6 animate-fade-up">
            Get Expert Care from San Francisco
          </h2>
          <p className="text-xl mb-8 opacity-95 animate-fade-up">
            Schedule your consultation today and experience compassionate, comprehensive psychiatric care.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium hover:scale-105 animate-fade-up"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  )
}