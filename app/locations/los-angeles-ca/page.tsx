import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Other Medical Near Los Angeles, CA | Try MedReception',
  description: 'Expert Other Medical care serving Los Angeles, CA and surrounding communities. Schedule your appointment today with Try MedReception.',
  openGraph: {
    title: 'Other Medical Near Los Angeles, CA | Try MedReception',
    description: 'Expert Other Medical care serving Los Angeles, CA and surrounding communities.',
    url: 'https://trymedreception.com/locations/los-angeles-ca',
    siteName: 'Try MedReception',
    locale: 'en_US',
    type: 'website',
  },
}

export default function LosAngelesCAPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-white/80 text-sm mb-8 flex items-center gap-2">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>›</span>
            <a href="/locations" className="hover:text-white transition-colors">Locations</a>
            <span>›</span>
            <span className="text-white">Los Angeles, CA</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-white mb-6 animate-fade-up">
            Other Medical Near Los Angeles, CA
          </h1>
          
          <p className="text-xl text-white/90 mb-10 max-w-3xl leading-relaxed animate-fade-up">
            Serving patients from Los Angeles and surrounding CA communities. Expert psychiatric care is closer than you think.
          </p>
          
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 animate-fade-up"
          >
            Schedule in Los Angeles
          </a>
        </div>
      </section>

      {/* Serving Los Angeles Section */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-8 animate-fade-up">
            Serving the Los Angeles Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed mb-12 animate-fade-up">
            <p>
              Located conveniently for Los Angeles residents, our practice offers expert Other Medical care to patients throughout the greater Los Angeles area. Whether you're commuting from downtown Los Angeles, nearby neighborhoods like Santa Monica, Beverly Hills, Pasadena, or surrounding communities in Los Angeles County, our office is easily accessible via major highways and public transportation routes. Most Los Angeles patients find us within a comfortable 20-40 minute drive depending on traffic and location.
            </p>
            
            <p>
              Patients from Los Angeles choose Try MedReception because we combine clinical excellence with personalized attention that's often hard to find in larger metropolitan practices. Our team understands the unique stressors of living and working in the Los Angeles area, and we tailor our psychiatric services to meet the specific needs of our community. For those with demanding schedules or transportation challenges, we also offer comprehensive telehealth services that bring expert care directly to your home.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-[var(--color-light)] rounded-2xl h-64 flex items-center justify-center animate-fade-up border border-[var(--color-border)]">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[var(--color-muted)] font-medium">Map: Try MedReception serving Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Services Available to Los Angeles Patients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Psychiatric Evaluations
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed mb-6">
                Comprehensive diagnostic assessments to understand your mental health needs and develop personalized treatment plans for Los Angeles patients.
              </p>
              <a href="/services/psychiatric-evaluations" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed mb-6">
                Expert psychiatric medication services with ongoing monitoring and adjustments to ensure optimal outcomes for Los Angeles area residents.
              </p>
              <a href="/services/medication-management" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 animate-fade-up border border-[var(--color-border)]">
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Telehealth Services
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed mb-6">
                Virtual psychiatric appointments from the comfort of your Los Angeles home with the same quality care as in-person visits.
              </p>
              <a href="/services/telehealth" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors inline-flex items-center gap-2">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Telehealth Callout */}
      <section className="px-6 my-20">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up border border-[var(--color-border)]">
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          <div className="space-y-4 text-lg text-[var(--color-ink)]/80 leading-relaxed">
            <p>
              We understand that Los Angeles traffic and busy schedules can make it challenging to attend in-person appointments. That's why we offer comprehensive telehealth services to all Los Angeles residents. Our virtual appointments provide the same expert psychiatric care through secure, HIPAA-compliant video sessions.
            </p>
            <p>
              Telehealth appointments are covered by most insurance plans and allow you to receive treatment from anywhere—your home, office, or wherever you feel most comfortable. Whether you're in downtown Los Angeles or the surrounding suburbs, quality mental health care is just a click away.
            </p>
          </div>
          <a 
            href="/contact" 
            className="inline-block mt-8 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Schedule Telehealth Appointment
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mb-12 text-center animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            
            {/* FAQ 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                How far is your practice from Los Angeles?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Our practice is conveniently located to serve Los Angeles patients, typically within a 20-40 minute drive from most Los Angeles neighborhoods depending on your specific location and traffic conditions. We're accessible via major highways and well-served by public transportation options. Many patients from downtown Los Angeles, Santa Monica, Pasadena, and surrounding areas regularly visit our office.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                What are the best directions from Los Angeles?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                When you schedule your appointment, we'll provide detailed directions tailored to your starting point in Los Angeles. Most patients use major highways including the 405, 101, 5, or 10 freeways depending on their location. We recommend allowing extra time during peak traffic hours (typically 7-9 AM and 4-7 PM weekdays). GPS directions to our office are reliable, and we're happy to provide additional guidance when you call to schedule.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Do you offer telehealth for Los Angeles residents?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes! We offer comprehensive telehealth services to all Los Angeles patients through secure, HIPAA-compliant video appointments. Telehealth is perfect for follow-up visits, medication management appointments, or when you can't make the drive due to traffic, scheduling conflicts, or personal preference. Most insurance plans cover telehealth visits the same as in-person appointments. You can receive expert psychiatric care from anywhere in Los Angeles County without leaving your home or office.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 animate-fade-up border border-[var(--color-border)]">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Is parking available for Los Angeles patients?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes, we provide convenient parking options for all our patients traveling from Los Angeles. Our facility offers ample parking space close to the entrance, and our office is fully accessible for individuals with mobility needs. We understand that easy parking is important when you're driving from Los Angeles, and we've made sure our location offers stress-free access. Detailed parking instructions will be provided when you schedule your appointment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6 animate-fade-up">
            Get Expert Care from Los Angeles
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up">
            Quality psychiatric care is within reach. Schedule your appointment today and experience personalized treatment from providers who understand the Los Angeles community.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 animate-fade-up"
          >
            Schedule Your Appointment
          </a>
        </div>
      </section>

    </main>
  )
}