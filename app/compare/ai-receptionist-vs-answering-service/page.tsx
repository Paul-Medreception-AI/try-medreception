import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Receptionist vs. Traditional Answering Service: Which is Right for Your Practice? | Try MedReception',
  description: 'Compare AI receptionists and traditional answering services for medical practices. Cost, effectiveness, features, and which solution fits your practice best.',
}

export default function ComparisonPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <span className="hover:underline transition-all">Home</span>
            <span className="mx-2">›</span>
            <span className="hover:underline transition-all">Resources</span>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            AI Receptionist vs. Traditional Answering Service:<br />
            Which is Right for Your Practice?
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A comprehensive comparison to help medical practices make an informed decision about their patient communication solution.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-6 border-r border-white/20">Feature</div>
              <div className="p-6 border-r border-white/20">AI Receptionist</div>
              <div className="p-6">Traditional Answering Service</div>
            </div>
            
            {/* Effectiveness */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 border-r border-[var(--color-border)] font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">
                Effectiveness
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">24/7 instant response, 100% consistency, handles multiple calls simultaneously, integrates with EHR systems</p>
              </div>
              <div className="p-6">
                <p className="text-[var(--color-ink)]">Human touch, limited hours, queue times during peak periods, quality varies by operator</p>
              </div>
            </div>
            
            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 border-r border-[var(--color-border)] font-semibold text-[var(--color-ink)]">
                Cost
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">$149-499/month flat rate, unlimited calls, predictable billing</p>
              </div>
              <div className="p-6">
                <p className="text-[var(--color-ink)]">$800-2,500/month, per-minute or per-call charges, costs increase with volume</p>
              </div>
            </div>
            
            {/* Setup Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 border-r border-[var(--color-border)] font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">
                Setup & Training
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">2-5 business days, digital onboarding, instant updates to protocols</p>
              </div>
              <div className="p-6">
                <p className="text-[var(--color-ink)]">2-4 weeks, manual training required, retraining for staff turnover</p>
              </div>
            </div>
            
            {/* Scalability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 border-r border-[var(--color-border)] font-semibold text-[var(--color-ink)]">
                Scalability
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Handles unlimited concurrent calls, no capacity constraints, instant scaling</p>
              </div>
              <div className="p-6">
                <p className="text-[var(--color-ink)]">Limited by operator availability, must plan for peak periods, additional costs for scaling</p>
              </div>
            </div>
            
            {/* Accuracy */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 border-r border-[var(--color-border)] font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">
                Accuracy & Compliance
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">99.9% accuracy, HIPAA-compliant by design, automatic call logging, consistent protocol adherence</p>
              </div>
              <div className="p-6">
                <p className="text-[var(--color-ink)]">Human error possible, HIPAA training required, manual note-taking, protocol drift over time</p>
              </div>
            </div>
            
            {/* Integration */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-6 border-r border-[var(--color-border)] font-semibold text-[var(--color-ink)]">
                Technology Integration
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">Direct EHR integration, automated appointment booking, SMS confirmations, analytics dashboard</p>
              </div>
              <div className="p-6">
                <p className="text-[var(--color-ink)]">Manual message relay, limited system integration, basic call logs</p>
              </div>
            </div>
            
            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 border-r border-[var(--color-border)] font-semibold text-[var(--color-ink)] bg-[var(--color-cream)]">
                Best For
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                <p className="text-[var(--color-ink)]">High-volume practices, after-hours coverage, routine inquiries, appointment scheduling, cost-conscious practices</p>
              </div>
              <div className="p-6">
                <p className="text-[var(--color-ink)]">Low-volume practices, complex patient needs, practices requiring extensive personalization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive - AI Receptionist */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-10 h-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-4">
                  AI Receptionist: The Modern Solution
                </h2>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
                  AI receptionists represent a fundamental shift in how medical practices manage patient communication. Powered by advanced natural language processing and machine learning, these systems provide consistent, accurate, and instant responses to patient inquiries 24 hours a day, 7 days a week. Unlike traditional solutions that require human operators, AI receptionists can handle unlimited concurrent calls without degradation in quality or increase in cost.
                </p>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
                  The technology has evolved significantly beyond simple phone trees and automated messages. Modern AI receptionists understand natural speech, context, and intent. They can navigate complex conversations, access appointment availability in real-time, verify insurance information, and even triage urgent medical concerns according to practice-specific protocols. Integration with electronic health record systems enables them to pull patient information, update records, and coordinate care seamlessly.
                </p>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                  From a business perspective, AI receptionists offer predictable flat-rate pricing regardless of call volume, making them particularly attractive for growing practices. The system learns and improves over time, identifying patterns in patient inquiries and optimizing responses. Analytics dashboards provide insights into call volumes, common questions, and operational bottlenecks that would be difficult or impossible to track with traditional answering services.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-10 h-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div>
                <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-4">
                  Traditional Answering Service: The Human Touch
                </h2>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
                  Traditional answering services have served medical practices for decades, providing human operators who answer calls on behalf of the practice. These services typically operate during specific hours (often extended or 24/7 for medical practices) and employ trained staff who follow scripts and protocols provided by the practice. The human element can be particularly valuable for patients who prefer speaking with a real person, especially during stressful medical situations.
                </p>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed mb-4">
                  Quality traditional answering services invest heavily in operator training, HIPAA compliance, and customer service skills. Operators can demonstrate empathy, pick up on emotional cues, and escalate complex situations appropriately. For practices with complex needs or highly personalized patient relationships, this human judgment can be invaluable. The service typically takes messages, screens calls according to urgency protocols, and relays information to on-call providers.
                </p>
                <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                  However, traditional services face inherent scalability challenges. During peak call times, patients may experience hold times or go to voicemail. Cost structures are typically volume-based—per minute or per call—which can become expensive for high-volume practices. Staff turnover requires ongoing retraining, and maintaining consistency across multiple operators can be challenging. Integration with practice management systems is often manual, requiring operators to relay information that staff must then enter into the EHR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-10">
              How to Decide: A Practical Framework
            </h2>
            
            <div className="mb-12">
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-6">
                Choose an AI Receptionist if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] text-lg">You handle more than 200 calls per month and need consistent quality at scale</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] text-lg">After-hours and weekend coverage is critical for your patient population</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] text-lg">Most calls are routine: appointment scheduling, prescription refills, general information</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] text-lg">You want predictable monthly costs that don't increase with practice growth</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] text-lg">Integration with your EHR and practice management system is a priority</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] text-lg">You need detailed analytics on call patterns and patient inquiry trends</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] text-lg">Your practice is growing and you need a solution that scales without adding overhead</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-6">
                Choose a Traditional Answering Service if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] text-lg">You have fewer than 100 calls per month and prefer per-use pricing</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] text-lg">Your patient population strongly prefers human interaction over automated systems</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] text-lg">Call complexity requires nuanced human judgment beyond protocol-based responses</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] text-lg">You're comfortable with manual processes and don't require system integration</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] text-lg">Your practice specializes in highly sensitive or emotionally charged situations requiring empathy</span>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--color-ink)] text-lg">You need bilingual support with cultural nuances that current AI may not fully capture</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] text-lg leading-relaxed">
                <strong className="text-[var(--color-primary)]">Hybrid Approach:</strong> Many practices find success using an AI receptionist for routine calls and after-hours coverage while maintaining a human receptionist for complex situations during business hours. This maximizes efficiency while preserving the human touch where it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden transition-all">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex items-center justify-between">
                <span>Can AI receptionists handle emergency situations appropriately?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Yes. Modern AI receptionists are programmed with sophisticated triage protocols that recognize emergency keywords and situations. When an emergency is detected, the system immediately connects the caller to 911 or your designated emergency contact according to your practice protocols. The AI can identify chest pain, difficulty breathing, severe bleeding, and other urgent symptoms, ensuring patient safety is never compromised. All emergency calls are flagged and logged for quality assurance review.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden transition-all">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex items-center justify-between">
                <span>What happens if a patient asks a question the AI doesn't understand?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>AI receptionists are designed to recognize the limits of their understanding. When faced with a complex or unclear inquiry, the system will offer to take a detailed message for callback, transfer to a live staff member during business hours, or provide alternative contact methods. The system learns from these interactions, and our team reviews flagged conversations to continuously improve the AI's capabilities. You'll never have a patient stuck in a loop—there's always a clear escalation path.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden transition-all">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex items-center justify-between">
                <span>How do patients react to speaking with an AI instead of a human?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Patient acceptance has been remarkably high across all demographics. Most patients appreciate the immediate response time (no hold music or waiting), 24/7 availability, and efficiency in handling routine tasks like appointment scheduling. The AI's natural conversational style makes interactions feel personal rather than robotic. Practices report that patient satisfaction scores often increase after implementing AI receptionists, primarily due to reduced wait times and improved access to after-hours scheduling. The system can also be customized with your practice's specific language and tone preferences.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden transition-all">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex items-center justify-between">
                <span>Can I customize the AI to match my practice's specific protocols and personality?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Absolutely. During onboarding, we work with your team to configure the AI according to your specific protocols, call flows, and communication style. You can customize greetings, responses to common questions, triage protocols, emergency procedures, and even the conversational tone. The system can be updated instantly as your protocols change—no retraining period required. You can also set different behaviors for different types of calls or times of day, ensuring the AI represents your practice exactly as you envision.</p>
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden transition-all">
              <summary className="cursor-pointer p-6 font-semibold text-lg text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors list-none flex items-center justify-between">
                <span>What's the ROI timeline for switching to an AI receptionist?</span>
                <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-ink)] leading-relaxed">
                <p>Most practices see positive ROI within 2-3 months. The primary savings come from reduced answering service costs (typically $800-2,500/month reduced to $149-499/month), decreased missed appointments through automated reminders and easier rescheduling, and improved staff efficiency as admin teams are freed from routine phone tasks. Additionally, practices often capture revenue from after-hours calls that previously went to voicemail. For a typical 3-physician practice, annual savings range from $15,000 to $30,000 while simultaneously improving patient access and satisfaction.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Discuss Your Options?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Let's evaluate your practice's specific needs and determine whether an AI receptionist, traditional answering service, or hybrid approach is the right fit.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
          <p className="text-white/80 mt-6 text-sm">
            No commitment required • Free practice assessment • Custom recommendations
          </p>
        </div>
      </section>

    </main>
  )
}