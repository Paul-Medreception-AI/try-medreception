import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Offshore Call Centers vs. AI Receptionists for Medical Practices | Try MedReception',
  description: 'Compare offshore call centers and AI receptionists for medical practices. Cost, effectiveness, HIPAA compliance, and patient satisfaction analyzed.',
}

export default function ComparePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all cursor-pointer">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all cursor-pointer">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Offshore Call Centers vs. AI Receptionists for Medical Practices
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            A comprehensive comparison to help you choose the right patient communication solution for your practice
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Criteria</div>
              <div className="p-6 font-semibold border-l border-white/20">Offshore Call Centers</div>
              <div className="p-6 font-semibold border-l border-white/20">AI Receptionists</div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost per Month</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">$3,000–$8,000+ for dedicated team</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">$200–$800 for unlimited calls</div>
            </div>

            {/* Availability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Availability</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Business hours or premium for 24/7</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">True 24/7/365 with no breaks</div>
            </div>

            {/* Response Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Response Time</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Variable (30 sec–5 min wait)</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Instant (0 seconds)</div>
            </div>

            {/* Consistency */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Consistency</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Variable (staff turnover, training)</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">100% consistent every call</div>
            </div>

            {/* HIPAA Compliance */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">HIPAA Compliance</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Requires BAA, audit trails vary</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Built-in compliance, full audit logs</div>
            </div>

            {/* Scalability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Scalability</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Limited by staff size, hiring lag</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Infinite (handles 100 or 10,000 calls)</div>
            </div>

            {/* Integration */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">EHR Integration</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Manual data entry, error-prone</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Direct API integration, real-time</div>
            </div>

            {/* Training Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Training Time</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">2–4 weeks per staff member</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">24–48 hours initial setup</div>
            </div>

            {/* Accent Use */}
            <div className="grid grid-cols-3 bg-[var(--color-cream)]">
              <div className="p-6 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Language & Accent</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Non-native speakers, variable clarity</div>
              <div className="p-6 text-[var(--color-muted)] border-l border-[var(--color-border)]">Natural US voices, perfect clarity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Offshore Call Centers */}
          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)]">
                Offshore Call Centers: The Traditional Approach
              </h2>
            </div>
            
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                Offshore call centers have been a cost-reduction strategy for medical practices for over two decades. Typically located in countries like the Philippines, India, or Central America, these centers provide trained staff who handle appointment scheduling, patient inquiries, and basic administrative tasks at a fraction of domestic labor costs.
              </p>
              <p>
                The primary appeal is human interaction—patients speak with real people who can handle nuanced conversations and complex situations. However, this comes with significant trade-offs. Staff turnover rates in offshore centers often exceed 40% annually, leading to constant retraining cycles and inconsistent patient experiences. Time zone differences can create coverage gaps, and language barriers remain a persistent challenge despite training investments.
              </p>
              <p>
                Cost-wise, practices typically pay $3,000–$8,000 monthly for dedicated teams, with additional fees for 24/7 coverage, quality assurance, and management oversight. Hidden costs include time spent on training, quality monitoring, and resolving communication errors. HIPAA compliance requires robust Business Associate Agreements and regular audits, adding administrative burden.
              </p>
            </div>
          </div>

          {/* AI Receptionists */}
          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-primary)] flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
              <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)]">
                AI Receptionists: The Modern Solution
              </h2>
            </div>
            
            <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
              <p>
                AI receptionists represent a paradigm shift in medical practice communication. Powered by advanced natural language processing and trained on millions of healthcare conversations, modern AI systems like Try MedReception deliver human-like interactions with zero wait times, perfect consistency, and true 24/7 availability—all at a fraction of offshore center costs.
              </p>
              <p>
                Unlike offshore teams, AI receptionists never experience fatigue, never call in sick, and never require retraining when protocols change. They instantly access patient history, insurance information, and provider schedules through direct EHR integration, eliminating manual data entry and reducing errors by over 90%. Every conversation is automatically logged with complete HIPAA-compliant audit trails, and the system learns from each interaction to continuously improve performance.
              </p>
              <p>
                The economics are compelling: practices typically pay $200–$800 monthly for unlimited calls, with no hidden fees for nights, weekends, or holidays. Implementation takes 24–48 hours instead of weeks, and the system scales instantly to handle call volume spikes during flu season or emergencies. Patient satisfaction often improves due to instant response times and consistent, professional interactions delivered in natural US voices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12">
            How to Decide: Decision Framework
          </h2>

          <div className="space-y-10">
            {/* Choose Offshore */}
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                Choose Offshore Call Centers If:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You handle extremely complex multi-step conversations that require significant human judgment beyond protocol</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Your patient demographic strongly prefers human interaction and is resistant to technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You have capacity to invest significant time in training, quality monitoring, and ongoing management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Budget allows $3,000–$8,000+ monthly and you accept inconsistency as a trade-off for human touch</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-[var(--color-accent)]"></div>

            {/* Choose AI */}
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6">
                Choose AI Receptionists If:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You need true 24/7/365 coverage with zero wait times and perfect consistency</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Cost efficiency is important—you want to reduce overhead by 70–90% while improving service quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Direct EHR integration and automated workflows are priorities for reducing manual data entry errors</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You want instant scalability without hiring lag—handle 10 calls or 1,000 calls with no infrastructure changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Predictable pricing and rapid deployment (24–48 hours) are important for your practice operations</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
            <p className="text-[var(--color-muted)] leading-relaxed">
              <strong className="text-[var(--color-ink)]">Reality Check:</strong> Most modern medical practices find AI receptionists superior for 90%+ of patient interactions—appointment scheduling, basic inquiries, prescription refills, and insurance verification. For the rare complex edge cases, calls can be seamlessly escalated to human staff.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-all">
                Will patients know they're talking to an AI receptionist?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Modern AI voices are virtually indistinguishable from human receptionists. Most patients never realize they're speaking with AI—they simply notice faster service and shorter wait times. Practices can choose to disclose AI usage transparently or let the system speak for itself through quality performance.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-all">
                How does HIPAA compliance compare between the two options?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Both require Business Associate Agreements, but AI systems offer superior compliance infrastructure. AI platforms provide encrypted communications, automatic audit logs for every interaction, and no human error risk from staff mishandling PHI. Offshore centers require constant monitoring, staff training on HIPAA protocols, and manual audit processes that increase risk exposure.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-all">
                What happens when the AI can't handle a complex situation?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                AI receptionists recognize when situations exceed their capabilities and seamlessly escalate to human staff. The system captures all context from the conversation and transfers it along with the call, so patients never need to repeat information. In practice, AI handles 90–95% of calls independently, with only truly complex edge cases requiring human intervention.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-all">
                How long does it take to switch from an offshore center to AI?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Implementation typically takes 24–48 hours. The AI system integrates with your existing EHR, phone system, and scheduling software, then undergoes brief testing with your protocols. Many practices run parallel systems for a week to ensure smooth transition before fully switching over. There's no lengthy training period or knowledge transfer—the AI learns your workflows immediately.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all">
              <summary className="p-6 cursor-pointer font-semibold text-[var(--color-ink)] list-none flex items-center justify-between hover:bg-[var(--color-light)] transition-all">
                What's the real total cost difference over a year?
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Offshore centers cost $36,000–$96,000 annually plus hidden costs for training, quality monitoring, and error correction—often totaling $50,000–$120,000. AI receptionists run $2,400–$9,600 annually with no hidden fees. Most practices save $40,000–$100,000 per year while improving service quality, patient satisfaction, and staff efficiency. The ROI is typically realized within the first month.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center text-white animate-fade-up">
          <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 opacity-90">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6">
            Ready to Make Your Decision?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your practice's specific needs and see how Try MedReception compares to your current solution.
          </p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
            Discuss Your Options
          </a>
        </div>
      </section>
    </main>
  )
}