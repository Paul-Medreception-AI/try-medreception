import Link from 'next/link';

export const metadata = {
  title: 'Other Medical Near Chicago, IL | Try MedReception',
  description: 'Expert Other Medical care serving Chicago, IL and surrounding communities. Convenient location, telehealth options, and personalized psychiatric treatment.',
};

export default function ChicagoLocationPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Chicago, IL</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light text-white mb-6 animate-fade-up">
            Other Medical Near Chicago, IL
          </h1>
          
          <p className="text-xl text-white/90 mb-10 max-w-3xl leading-relaxed animate-fade-up">
            Serving patients from Chicago and surrounding IL communities. Expert psychiatric care is closer than you think.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 animate-fade-up"
          >
            Schedule in Chicago
          </Link>
        </div>
      </section>

      {/* SERVING CHICAGO AREA */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-8 text-center animate-fade-up">
            Serving the Chicago Area
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-ink)]/80 leading-relaxed mb-12 animate-fade-up">
            <p>
              Located conveniently for Chicago residents, Try MedReception provides comprehensive Other Medical services to patients throughout the greater Chicago metropolitan area. Whether you're commuting from the Loop, Lincoln Park, Wicker Park, or surrounding IL suburbs like Evanston, Oak Park, or Cicero, our practice is easily accessible and offers flexible appointment scheduling to fit your busy lifestyle.
            </p>
            
            <p>
              Chicago patients choose Try MedReception for our personalized approach to mental health care, experienced providers, and commitment to evidence-based treatment. We understand the unique stressors of urban living and offer both in-person consultations and convenient telehealth options, ensuring you receive the care you need without the hassle of long commutes or parking challenges.
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

      {/* SERVICES IN CHICAGO */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-4 text-center animate-fade-up">
            Services Available to Chicago Patients
          </h2>
          <p className="text-center text-[var(--color-muted)] text-lg mb-16 animate-fade-up">
            Comprehensive mental health care tailored to your needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Psychiatric Evaluations
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6 leading-relaxed">
                Comprehensive diagnostic assessments to understand your mental health needs and develop personalized treatment plans.
              </p>
              <Link href="/services/evaluations" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Medication Management
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6 leading-relaxed">
                Expert psychiatric medication services with ongoing monitoring and adjustments to ensure optimal outcomes.
              </p>
              <Link href="/services/medication-management" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 hover:shadow-lg transition-all animate-fade-up">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Telepsychiatry Services
              </h3>
              <p className="text-[var(--color-ink)]/70 mb-6 leading-relaxed">
                Convenient virtual appointments that bring quality mental health care directly to Chicago residents.
              </p>
              <Link href="/services/telehealth" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors">
                Learn More →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* TELEHEALTH FOR CHICAGO */}
      <section className="bg-white py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <div className="mb-6 flex justify-center">
            <svg className="w-16 h-16 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          
          <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-primary)] mb-6 text-center">
            Can't Make the Drive? We Offer Telehealth
          </h2>
          
          <div className="space-y-4 text-lg text-[var(--color-ink)]/80 leading-relaxed">
            <p>
              For Chicago residents who prefer the convenience of virtual care or have scheduling constraints, Try MedReception offers comprehensive telehealth services. Receive the same quality psychiatric care from the comfort of your home, office, or anywhere with a secure internet connection.
            </p>
            
            <p>
              Our telepsychiatry appointments are HIPAA-compliant, easy to use, and accepted by most major insurance plans. Whether you're dealing with Chicago traffic, working from home, or simply prefer virtual consultations, we're here to provide flexible care options that fit your lifestyle.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/services/telehealth" 
              className="inline-block text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors"
            >
              Learn More About Telehealth →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-primary)] mb-12 text-center animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            
            {/* FAQ 1 */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                How far is Try MedReception from Chicago?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Try MedReception is conveniently located to serve Chicago residents, with easy access via major highways and public transportation. Most patients from downtown Chicago can reach our office within 30-45 minutes, depending on traffic conditions. We also offer flexible scheduling including early morning and evening appointments to accommodate your commute.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                What are the best directions from Chicago?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Detailed directions are provided upon scheduling your appointment. Our office is accessible from Chicago via I-90, I-94, and the Kennedy Expressway. For those using public transit, CTA and Metra connections are available nearby. We recommend calling our office at the time of booking for personalized directions based on your starting location in Chicago.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Do you offer telehealth for Chicago patients?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes! We offer comprehensive telepsychiatry services for all Chicago residents. Virtual appointments provide the same quality care as in-person visits and are ideal for follow-up medication management, ongoing therapy, and consultations. Telehealth is covered by most insurance plans and eliminates travel time and parking hassles.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                Is parking available for Chicago visitors?
              </h3>
              <p className="text-[var(--color-ink)]/70 leading-relaxed">
                Yes, we provide ample free parking for all patients. Our facility is fully accessible with wheelchair ramps, elevators, and ADA-compliant restrooms. We understand that accessibility is important, and we've designed our space to be welcoming and easy to navigate for all Chicago-area patients.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6 animate-fade-up">
            Get Expert Care from Chicago
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-up">
            Join hundreds of Chicago residents who trust Try MedReception for their mental health care. Schedule your consultation today.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-12 py-4 rounded-full text-lg font-medium transition-all hover:scale-105 animate-fade-up"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section>

    </main>
  );
}