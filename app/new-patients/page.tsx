import Link from 'next/link'

export const metadata = {
  title: 'New Patients | Try MedReception',
  description: 'Everything you need to know before your first visit. Schedule your appointment with our AI-powered medical reception system.',
}

export default function NewPatientsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 animate-fade-up">
            New Patients
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-up" style={{animationDelay: '0.1s'}}>
            Everything you need to know before your first visit
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16 animate-fade-up">
            Your First Visit
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="font-cormorant text-6xl text-[var(--color-accent)] mb-4">01</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Schedule</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Book your appointment online through our AI receptionist or call our office. Scheduling is available 24/7.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="font-cormorant text-6xl text-[var(--color-accent)] mb-4">02</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Complete Paperwork</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Arrive 15 minutes early to complete forms, or fill them out online before your visit to save time.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up" style={{animationDelay: '0.3s'}}>
              <div className="font-cormorant text-6xl text-[var(--color-accent)] mb-4">03</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Initial Evaluation</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Comprehensive assessment with your physician. Plan for 60-90 minutes for a thorough evaluation.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up" style={{animationDelay: '0.4s'}}>
              <div className="font-cormorant text-6xl text-[var(--color-accent)] mb-4">04</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Treatment Plan</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your personalized care plan is created together, ensuring your goals and needs are fully addressed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16 animate-fade-up">
            What to Bring
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Photo ID & Insurance */}
            <div className="flex gap-4 animate-fade-up" style={{animationDelay: '0.1s'}}>
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Photo ID & Insurance Card</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Bring a valid government-issued photo ID and your current insurance card (front and back) for verification and billing.
                </p>
              </div>
            </div>

            {/* Medication List */}
            <div className="flex gap-4 animate-fade-up" style={{animationDelay: '0.2s'}}>
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Current Medication List</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  A complete list of all medications, supplements, and vitamins you currently take, including dosages and frequency.
                </p>
              </div>
            </div>

            {/* Prior Records */}
            <div className="flex gap-4 animate-fade-up" style={{animationDelay: '0.3s'}}>
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Prior Medical Records</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Relevant medical records, imaging results, lab work, or specialist reports from other providers if applicable.
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="flex gap-4 animate-fade-up" style={{animationDelay: '0.4s'}}>
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-ink)] mb-2">Emergency Contact Information</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  Name and phone number of a trusted person we can contact in case of emergency during your care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Forms */}
      <section className="py-24 bg-[var(--color-cream)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 shadow-sm animate-fade-up">
            <h2 className="font-cormorant text-3xl md:text-4xl text-[var(--color-ink)] mb-6">
              Patient Forms
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
              Forms are available at our office or can be completed at your first appointment. Arriving 15 minutes early ensures time to complete all necessary paperwork.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-[var(--color-ink)]"><strong>Patient Registration Form:</strong> Basic demographic and contact information</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-[var(--color-ink)]"><strong>Medical History Questionnaire:</strong> Current and past health conditions</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-[var(--color-ink)]"><strong>Consent for Treatment:</strong> Authorization for medical care and procedures</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-[var(--color-ink)]"><strong>HIPAA Authorization:</strong> Privacy practices and information release</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-[var(--color-ink)]"><strong>Insurance & Financial Agreement:</strong> Payment responsibility and billing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telehealth Information */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-6 animate-fade-up">
            Telehealth Visits
          </h2>
          <p className="text-center text-xl text-[var(--color-muted)] mb-16 max-w-3xl mx-auto animate-fade-up" style={{animationDelay: '0.1s'}}>
            We offer secure telehealth appointments for your convenience. Connect with your physician from home or work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* How It Works */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{animationDelay: '0.1s'}}>
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">How It Works</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Schedule a telehealth visit through our AI receptionist. You'll receive a secure video link via email before your appointment. Join from any device with internet access.
              </p>
            </div>

            {/* Device Requirements */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">What You Need</h3>
              <ul className="text-[var(--color-muted)] leading-relaxed space-y-2">
                <li>• Computer, tablet, or smartphone</li>
                <li>• Reliable internet connection</li>
                <li>• Webcam and microphone</li>
                <li>• Quiet, private space for your visit</li>
                <li>• Updated web browser (Chrome, Safari, Firefox)</li>
              </ul>
            </div>

            {/* Privacy & Security */}
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{animationDelay: '0.3s'}}>
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Privacy Tips</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Our video platform is HIPAA-compliant and encrypted. Choose a private location, use headphones for confidentiality, and ensure others cannot overhear your conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Policies */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-[var(--color-ink)] mb-16 animate-fade-up">
            Office Policies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cancellation Policy */}
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up" style={{animationDelay: '0.1s'}}>
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Cancellation Policy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                We require 24-hour notice for appointment cancellations or rescheduling.
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Late cancellations or no-shows may result in a fee. We understand emergencies happen—please contact us as soon as possible.
              </p>
            </div>

            {/* Late Arrivals */}
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up" style={{animationDelay: '0.2s'}}>
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Late Arrivals</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Please arrive 15 minutes early for new patient appointments to complete paperwork.
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                If you arrive more than 15 minutes late, we may need to reschedule to ensure quality care for all patients.
              </p>
            </div>

            {/* No-Show Policy */}
            <div className="bg-white rounded-xl p-8 shadow-sm animate-fade-up" style={{animationDelay: '0.3s'}}>
              <svg className="w-12 h-12 text-[var(--color-accent)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">No-Show Policy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Missed appointments without notice may incur a no-show fee and limit future scheduling.
              </p>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Our AI receptionist is available 24/7 to help you cancel or reschedule—just give us a call anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6 animate-fade-up">
            Ready to Schedule Your First Visit?
          </h2>
          <p className="text-xl text-white/90 mb-10 animate-fade-up" style={{animationDelay: '0.1s'}}>
            Our AI receptionist is available 24/7 to help you book an appointment or answer any questions about becoming a new patient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{animationDelay: '0.2s'}}>
            <Link 
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Schedule Your Appointment
            </Link>
            <Link 
              href="/contact"
              className="inline-block bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              Contact Our Office
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}