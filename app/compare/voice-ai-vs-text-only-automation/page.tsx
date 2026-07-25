import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voice AI vs. Text-Only Automation: Best Channels for Patient Communication | Try MedReception',
  description: 'Compare voice AI and text-only automation for patient communication. Expert analysis of effectiveness, cost, implementation, and best use cases for your medical practice.',
  openGraph: {
    title: 'Voice AI vs. Text-Only Automation: Best Channels for Patient Communication',
    description: 'Compare voice AI and text-only automation for patient communication. Expert analysis of effectiveness, cost, implementation, and best use cases for your medical practice.',
    url: 'https://trymedreception.com/compare/voice-ai-vs-text-only-automation',
    siteName: 'Try MedReception',
    type: 'article',
  },
}

export default function VoiceAIvsTextOnlyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center animate-fade-up">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline transition-all">Home</a>
            <span>›</span>
            <a href="/resources" className="hover:underline transition-all">Resources</a>
            <span>›</span>
            <span>Comparison</span>
          </div>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Voice AI vs. Text-Only Automation: Best Channels for Patient Communication
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A comprehensive comparison to help you choose the right communication technology for your medical practice and patient population.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24 animate-fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] text-center mb-12">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold text-center">
              <div className="p-4 border-r border-white/20">Category</div>
              <div className="p-4 border-r border-white/20">Voice AI</div>
              <div className="p-4">Text-Only Automation</div>
            </div>
            
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Patient Engagement</div>
              <div className="p-4 border-l border-[var(--color-border)]">High — natural conversation feels personal and accommodating</div>
              <div className="p-4 border-l border-[var(--color-border)]">Moderate — efficient but less personal interaction</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Accessibility</div>
              <div className="p-4 border-l border-[var(--color-border)]">Excellent for elderly, visually impaired, and tech-averse patients</div>
              <div className="p-4 border-l border-[var(--color-border)]">Best for younger, tech-savvy patients; may exclude some demographics</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Complexity Handling</div>
              <div className="p-4 border-l border-[var(--color-border)]">Handles nuanced questions, multi-step scheduling, insurance verification</div>
              <div className="p-4 border-l border-[var(--color-border)]">Best for simple reminders, confirmations, and structured forms</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Implementation Time</div>
              <div className="p-4 border-l border-[var(--color-border)]">2-4 weeks for full integration and training</div>
              <div className="p-4 border-l border-[var(--color-border)]">1-2 weeks for basic setup</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Cost (Monthly)</div>
              <div className="p-4 border-l border-[var(--color-border)]">$500–$2,000 depending on call volume</div>
              <div className="p-4 border-l border-[var(--color-border)]">$200–$800 depending on message volume</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)] bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">HIPAA Compliance</div>
              <div className="p-4 border-l border-[var(--color-border)]">Requires secure voice processing and encrypted call recording</div>
              <div className="p-4 border-l border-[var(--color-border)]">End-to-end encrypted messaging platforms required</div>
            </div>

            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Staff Time Saved</div>
              <div className="p-4 border-l border-[var(--color-border)]">70–90% reduction in inbound call handling</div>
              <div className="p-4 border-l border-[var(--color-border)]">40–60% reduction in routine messaging</div>
            </div>

            <div className="grid grid-cols-3 bg-[var(--color-cream)]">
              <div className="p-4 font-semibold text-[var(--color-ink)] bg-[var(--color-light)]">Best For</div>
              <div className="p-4 border-l border-[var(--color-border)]">High call volume practices, senior patient populations, complex scheduling</div>
              <div className="p-4 border-l border-[var(--color-border)]">Appointment reminders, form collection, post-visit follow-ups</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 animate-fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
              <div>
                <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-4">
                  Voice AI: Natural Conversations at Scale
                </h2>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
                  Voice AI receptionists handle inbound calls with conversational intelligence that mimics human interaction. They can answer complex questions, navigate multi-step appointment scheduling, verify insurance information, and transfer calls to appropriate staff members when needed. The technology uses natural language processing to understand patient intent, context, and emotion.
                </p>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
                  For practices with high call volume—particularly those serving elderly populations, rural communities, or patients with limited literacy—voice AI provides an accessibility advantage. Patients can communicate in their natural style without learning new technology or navigating digital interfaces. The system works 24/7, eliminating wait times and missed calls outside business hours.
                </p>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                  Implementation requires integration with your phone system, EHR, and scheduling software. Training the AI on your practice's specific protocols, insurance panels, and common patient questions takes 2-4 weeks. The investment pays off through dramatic reductions in front desk workload and improved patient satisfaction scores, especially for practices handling 100+ calls per day.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0 mt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <div>
                <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-4">
                  Text-Only Automation: Efficient Asynchronous Communication
                </h2>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
                  Text-only automation excels at structured, asynchronous communication. Automated SMS or secure messaging handles appointment reminders, confirmation requests, post-visit instructions, form collection, and simple FAQs. Patients respond on their schedule, and the system processes replies using keyword recognition or button-based interactions.
                </p>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-4">
                  The efficiency advantage is significant: text automation reduces no-show rates by 30-40% through timely reminders, collects intake forms before visits, and delivers lab results or prescription refill confirmations without staff intervention. It's particularly effective for younger patient demographics who prefer text communication and can follow structured prompts.
                </p>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                  However, text automation struggles with nuanced questions, complex scheduling scenarios, or patients who need explanatory conversations. It works best as part of a multi-channel strategy: automated texts handle routine touchpoints, while voice channels (human or AI) manage exceptions and complex interactions. Implementation is faster and less expensive than voice AI, making it an accessible starting point for practices new to automation.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-8 text-center">
              Evidence and Outcomes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--color-cream)] rounded-xl p-8">
                <h3 className="font-semibold text-xl text-[var(--color-ink)] mb-4">Voice AI Performance Data</h3>
                <ul className="space-y-3 text-[var(--color-muted)]">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>85-92% call resolution without human handoff</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Average 2.5-minute call handling time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>4.2/5 average patient satisfaction rating</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>70% reduction in front desk phone time</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--color-cream)] rounded-xl p-8">
                <h3 className="font-semibold text-xl text-[var(--color-ink)] mb-4">Text Automation Performance Data</h3>
                <ul className="space-y-3 text-[var(--color-muted)]">
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>98% message delivery rate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>30-40% reduction in no-show rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>60-75% patient response rate within 1 hour</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>50% reduction in routine messaging workload</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20 animate-fade-up">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12">
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-8">
              How to Decide: Decision Framework
            </h2>
            
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
                Choose Voice AI if...
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Your practice handles 100+ calls per day and staff is overwhelmed</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You serve elderly, visually impaired, or tech-averse patient populations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Scheduling requires multi-step logic, insurance verification, or complex protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You need 24/7 availability for urgent care or after-hours access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Patients frequently have questions that require explanatory conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You can invest $500-$2,000/month for significant staff time savings</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-4 flex items-center gap-3">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                Choose Text-Only Automation if...
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Your primary need is appointment reminders and confirmation requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You serve a younger, tech-comfortable patient demographic</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Most patient interactions follow simple, structured workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You want to start with lower investment and prove ROI before expanding</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">You need faster implementation (1-2 weeks vs. 2-4 weeks)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[var(--color-muted)]">Budget is limited to $200-$800/month for automation</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 pt-10 border-t border-[var(--color-border)]">
              <p className="text-[var(--color-muted)] text-center mb-6">
                <strong className="text-[var(--color-ink)]">Hybrid Approach:</strong> Many practices use both technologies together—text automation for routine touchpoints and voice AI for complex inquiries. This maximizes efficiency while maintaining accessibility for all patient demographics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 animate-fade-up">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-lg text-[var(--color-ink)]">Can voice AI handle multiple languages?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, modern voice AI platforms support 50+ languages and can detect language preference automatically. Spanish, Mandarin, Tagalog, Vietnamese, and other common languages are typically available. Text automation also supports multilingual messaging, though setup requires translation of all message templates.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-lg text-[var(--color-ink)]">How do these systems handle emergencies or urgent medical questions?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Both systems are configured with safety protocols. Voice AI detects urgency keywords and immediately transfers to on-call staff or directs patients to 911. Text automation includes emergency disclaimers and escalation instructions. Neither system provides medical advice—they triage and route appropriately.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-lg text-[var(--color-ink)]">What happens if the AI doesn't understand a patient?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Voice AI systems use clarification questions ("Did you mean...?") and after 2-3 failed attempts, transfer to a human staff member. Text automation prompts patients to rephrase or offers menu options. All unclear interactions are logged for system improvement. Quality voice AI handles 85-92% of calls without handoff.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-lg text-[var(--color-ink)]">Are there compliance risks with automated patient communication?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                HIPAA-compliant platforms encrypt all communications, log access, and sign Business Associate Agreements (BAAs). Voice calls require encrypted recording and secure storage. Text messages must use secure messaging platforms, not standard SMS for PHI. Reputable vendors handle compliance infrastructure—verify BAA coverage before implementation.
              </div>
            </details>

            <details className="group bg-[var(--color-cream)] rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold text-lg text-[var(--color-ink)]">Can I use both systems together, and how do they integrate?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, a hybrid approach is common and highly effective. Text automation handles appointment reminders, confirmations, and forms, while voice AI manages inbound calls and complex scheduling. Both integrate with your EHR and scheduling system, creating a unified patient communication experience. The systems share data to avoid duplicate outreach.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20 animate-fade-up">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6">
            Ready to Choose Your Communication Strategy?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Schedule a consultation to discuss your patient demographics, call volume, and communication goals. We'll recommend the right technology mix for your practice.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Discuss Your Options
          </a>
        </div>
      </section>
    </main>
  )
}