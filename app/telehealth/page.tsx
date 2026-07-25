import Link from 'next/link'

export default function TelehealthPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Telehealth Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Expert medical care from the comfort of your home
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-16">
            How Telehealth Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl p-8 text-center animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div className="text-5xl font-cormorant text-[var(--color-primary)] mb-4">01</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Schedule</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Book your telehealth appointment online or by phone at a time that works for you
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <div className="text-5xl font-cormorant text-[var(--color-primary)] mb-4">02</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Connect</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Join your secure video visit from any device using our HIPAA-compliant platform
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="text-5xl font-cormorant text-[var(--color-primary)] mb-4">03</div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Get Care</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Receive expert medical care, prescriptions, and follow-up plans just like an in-person visit
              </p>
            </div>
          </div>

          {/* What's Available */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-6">Available via Telehealth</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Initial consultations and evaluations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Follow-up appointments</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Medication management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Treatment plan reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">General medical consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Prescription refills</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-6">Best In-Person</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Physical examinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Laboratory tests and diagnostics</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Procedures requiring hands-on care</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Acute medical emergencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Complex initial assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-muted)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Imaging studies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-4">
            Benefits of Telehealth
          </h2>
          <p className="text-[var(--color-muted)] text-center max-w-2xl mx-auto mb-16">
            Quality medical care that fits your lifestyle and schedule
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">No Commute Required</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Save time and eliminate travel. Connect from home, work, or anywhere with internet access.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">Same-Day Availability</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Get care when you need it with flexible scheduling and often same-day appointments.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">Complete Privacy</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Discuss sensitive health matters from the privacy and comfort of your own space.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">Works on Any Device</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Join visits from your computer, tablet, or smartphone with our easy-to-use platform.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">Insurance Accepted</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Most insurance plans cover telehealth visits the same as in-person appointments.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">HIPAA-Compliant Platform</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your health information is protected with bank-level encryption and secure technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h2 className="font-cormorant text-3xl font-light text-[var(--color-ink)] text-center mb-12">
              What You Need for Your Telehealth Visit
            </h2>

            <div className="space-y-10">
              <div>
                <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  Device Requirements
                </h3>
                <ul className="space-y-2 ml-9">
                  <li className="text-[var(--color-muted)]">Computer, tablet, or smartphone with camera and microphone</li>
                  <li className="text-[var(--color-muted)]">Updated web browser (Chrome, Safari, Firefox, or Edge)</li>
                  <li className="text-[var(--color-muted)]">Speakers or headphones for audio</li>
                </ul>
              </div>

              <div>
                <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                  Internet Connection
                </h3>
                <ul className="space-y-2 ml-9">
                  <li className="text-[var(--color-muted)]">Stable high-speed internet (minimum 1.5 Mbps download/upload)</li>
                  <li className="text-[var(--color-muted)]">Wired connection or strong WiFi signal recommended</li>
                  <li className="text-[var(--color-muted)]">Test your connection before your appointment</li>
                </ul>
              </div>

              <div>
                <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Private Space
                </h3>
                <ul className="space-y-2 ml-9">
                  <li className="text-[var(--color-muted)]">Quiet room where you can speak privately</li>
                  <li className="text-[var(--color-muted)]">Good lighting so your provider can see you clearly</li>
                  <li className="text-[var(--color-muted)]">Comfortable seating where you can relax during your visit</li>
                </ul>
              </div>

              <div>
                <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Supported Platforms
                </h3>
                <div className="ml-9 grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-medium text-[var(--color-ink)] mb-1">Desktop/Laptop</p>
                    <p className="text-sm text-[var(--color-muted)]">Windows, macOS, Chrome OS</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-medium text-[var(--color-ink)] mb-1">Mobile</p>
                    <p className="text-sm text-[var(--color-muted)]">iOS 12+, Android 8+</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-medium text-[var(--color-ink)] mb-1">Tablets</p>
                    <p className="text-sm text-[var(--color-muted)]">iPad, Android tablets</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-medium text-[var(--color-ink)] mb-1">Browsers</p>
                    <p className="text-sm text-[var(--color-muted)]">Chrome, Safari, Firefox, Edge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-[var(--color-muted)] text-lg mb-10 max-w-2xl mx-auto">
            Schedule your first telehealth appointment and experience convenient, quality care from wherever you are.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            Schedule Your Visit
          </Link>
        </div>
      </section>
    </main>
  )
}