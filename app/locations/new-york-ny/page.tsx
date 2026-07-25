import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near New York, NY | Try MedReception',
  description: 'Expert Other Medical care serving New York, NY and surrounding communities. Schedule your appointment today with Try MedReception.',
  openGraph: {
    title: 'Other Medical Near New York, NY | Try MedReception',
    description: 'Expert Other Medical care serving New York, NY and surrounding communities.',
    url: 'https://trymedreception.com/locations/new-york-ny',
    siteName: 'Try MedReception',
    locale: 'en_US',
    type: 'website',
  },
}

export default function NewYorkNYPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/locations" className="hover:underline">Locations</a>
            <span className="mx-2">›</span>
            <span>New York, NY</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 leading-tight">
            Other Medical Near New York, NY
          </h1>
          <p className="text-xl mb-8 max-w-3xl opacity-95 leading-relaxed">
            Serving patients from New York and surrounding NY communities. Expert psychiatric care is closer than you think.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105"
          >
            Schedule in New York
          </a>
        </div>
      </section>

      {/* Serving Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 text-center">
            Serving the New York Area
          </h2>
          <div className="space-y-6 text-lg text-[var(--color-ink)] leading-relaxed mb-12">
            <p>
              Located conveniently for New York residents, our practice offers comprehensive Other Medical services to patients throughout Manhattan, Brooklyn, Queens, the Bronx, Staten Island, and surrounding NY communities. Whether you're commuting from Midtown, the Upper East Side, Williamsburg, or any neighborhood in the greater New York metropolitan area, our accessible location and flexible scheduling make quality psychiatric care easy to reach.
            </p>
            <p>
              Patients from New York choose Try MedReception for our personalized approach, experienced providers, and commitment to compassionate care. We understand the unique pressures of life in New York City and offer both in-person appointments and secure telehealth visits to accommodate your busy schedule. Insurance accepted, with evening and weekend availability for your convenience.
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up">
            <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Services Available to New York Patients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Psychiatric Evaluation
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Comprehensive diagnostic assessments for New York patients seeking clarity on mental health conditions and personalized treatment planning.
              </p>
              <a href="/services/psychiatric-evaluation" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Medication Management
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Expert psychiatric medication management for New York patients, with careful monitoring and adjustments to optimize your treatment outcomes.
              </p>
              <a href="/services/medication-management" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-up">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Therapy & Counseling
              </h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Evidence-based therapy approaches tailored to New York residents, including CBT, DBT, and supportive counseling for various mental health concerns.
              </p>
              <a href="/services/therapy" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium inline-flex items-center group">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Section */}
      <section className="py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-6">
            For New York residents who prefer the convenience of care from home, Try MedReception offers secure telehealth appointments. Whether you're managing a busy Manhattan schedule, dealing with unpredictable subway commutes, or simply prefer virtual visits, our HIPAA-compliant video platform delivers the same high-quality psychiatric care from anywhere in New York State.
          </p>
          <p className="text-lg text-[var(--color-ink)] leading-relaxed">
            Most major insurance plans cover telehealth services for New York patients. Schedule your virtual consultation today and experience expert psychiatric care without leaving your neighborhood—whether you're in SoHo, Park Slope, Astoria, or anywhere in the five boroughs.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                How far is your practice from New York, NY?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our practice is conveniently accessible to New York City residents across all five boroughs. We're easily reachable via multiple subway lines, bus routes, and major thoroughfares. Travel times typically range from 15-45 minutes depending on your specific neighborhood. We also offer telehealth for those who prefer virtual appointments.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                What are the best directions from New York?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Detailed directions are provided upon scheduling your appointment. We're accessible via public transportation (multiple subway and bus lines nearby) and by car with parking options available. Our staff will provide specific route guidance based on your starting location in New York to ensure an easy commute to your appointment.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Do you offer telehealth appointments for New York residents?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes! We offer secure, HIPAA-compliant telehealth appointments for all New York State residents. This is an excellent option if you have scheduling constraints, prefer the comfort of home, or want to avoid travel time. Our virtual visits provide the same comprehensive psychiatric care as in-person appointments, with most insurance plans covering telehealth services.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">
                Is parking available for New York patients?
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Yes, convenient parking options are available for patients driving from New York. We're also accessible via public transportation, with several subway and bus lines stopping within walking distance. Our facility is ADA-compliant with accessible entrances and accommodations for patients with mobility needs. Contact our office for specific parking and accessibility details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6 font-light">
            Get Expert Care from New York
          </h2>
          <p className="text-xl mb-8 opacity-95 leading-relaxed">
            Quality psychiatric care is within reach. Schedule your appointment today and take the first step toward better mental health.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-lg"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>
    </main>
  )
}