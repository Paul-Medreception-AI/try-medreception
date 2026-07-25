import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'In-House Receptionist vs. AI Automation: Cost and Efficiency Comparison | Try MedReception',
  description: 'Comprehensive comparison of in-house medical receptionists versus AI automation. Compare costs, efficiency, scalability, and ROI to make the best decision for your practice.',
  keywords: 'medical receptionist cost, AI receptionist comparison, practice automation, healthcare staffing costs, virtual receptionist vs in-house',
  openGraph: {
    title: 'In-House Receptionist vs. AI Automation: Cost & Efficiency',
    description: 'Compare the real costs and efficiency of traditional receptionists vs. AI automation for medical practices.',
    url: 'https://trymedreception.com/compare/in-house-receptionist-vs-ai-automation',
  },
}

export default function ComparePage() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm mb-8 opacity-90">
            <a href="/" className="hover:underline transition-all">Home</a>
            <span>›</span>
            <a href="/resources" className="hover:underline transition-all">Resources</a>
            <span>›</span>
            <span>Comparison</span>
          </nav>
          
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight text-center mb-6">
            In-House Receptionist vs. AI Automation: Cost and Efficiency Comparison
          </h1>
          
          <p className="text-xl text-center max-w-3xl mx-auto opacity-95">
            A comprehensive analysis to help medical practices make informed staffing decisions based on cost, efficiency, scalability, and patient satisfaction.
          </p>
        </div>
      </section>

      {/* Quick Summary Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          
          <div className="border-2 border-[var(--color-border)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-all">
            <div className="flex items-start gap-4 mb-4">
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-2">In-House Receptionist</h3>
                <p className="text-[var(--color-muted)] mb-4">Traditional staffing with direct employee presence</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                    <span><strong>Cost:</strong> $35,000–$45,000/year + benefits</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                    <span><strong>Availability:</strong> 40 hours/week typical</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                    <span><strong>Scalability:</strong> Limited by hours/capacity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-[var(--color-border)] rounded-2xl p-8 animate-fade-up hover:shadow-lg transition-all" style={{animationDelay: '0.1s'}}>
            <div className="flex items-start gap-4 mb-4">
              <svg className="w-8 h-8 text-[var(--color-accent)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-2">AI Automation</h3>
                <p className="text-[var(--color-muted)] mb-4">Intelligent virtual receptionist technology</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                    <span><strong>Cost:</strong> $200–$500/month typical</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                    <span><strong>Availability:</strong> 24/7/365 coverage</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                    <span><strong>Scalability:</strong> Unlimited simultaneous calls</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-center text-[var(--color-ink)] mb-4">
            Side-by-Side Comparison
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto">
            A comprehensive breakdown of key factors to help you evaluate the best solution for your practice
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-up">
            
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white">
              <div className="p-6 font-semibold">Factor</div>
              <div className="p-6 font-semibold border-l border-white/20">In-House Receptionist</div>
              <div className="p-6 font-semibold border-l border-white/20">AI Automation</div>
            </div>

            {/* Annual Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Annual Cost</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-ink)] mb-2">$50,000–$65,000</p>
                <p className="text-sm text-[var(--color-muted)]">Includes salary ($35k–$45k), benefits (20–30%), payroll taxes, training, sick/vacation coverage</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]/30">
                <p className="font-semibold text-[var(--color-ink)] mb-2">$2,400–$6,000</p>
                <p className="text-sm text-[var(--color-muted)]">Flat monthly subscription, no benefits, taxes, or HR overhead. 90–95% cost reduction</p>
              </div>
            </div>

            {/* Availability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Availability</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-ink)] mb-2">40 hours/week</p>
                <p className="text-sm text-[var(--color-muted)]">Standard business hours. After-hours, weekends, and holidays require additional staff or answering service</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]/30">
                <p className="font-semibold text-[var(--color-ink)] mb-2">24/7/365</p>
                <p className="text-sm text-[var(--color-muted)]">Continuous coverage including nights, weekends, holidays. Never misses a call or requires time off</p>
              </div>
            </div>

            {/* Call Capacity */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Call Capacity</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-ink)] mb-2">1 call at a time</p>
                <p className="text-sm text-[var(--color-muted)]">Busy signals or hold times during peak hours. Multitasking reduces quality. May need multiple staff</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]/30">
                <p className="font-semibold text-[var(--color-ink)] mb-2">Unlimited simultaneous</p>
                <p className="text-sm text-[var(--color-muted)]">Handles multiple calls concurrently with no wait times. Perfect for high-volume practices or seasonal spikes</p>
              </div>
            </div>

            {/* Consistency */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Consistency</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-ink)] mb-2">Variable</p>
                <p className="text-sm text-[var(--color-muted)]">Dependent on mood, training, experience, workload. Errors increase with fatigue. Turnover requires retraining</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]/30">
                <p className="font-semibold text-[var(--color-ink)] mb-2">100% uniform</p>
                <p className="text-sm text-[var(--color-muted)]">Same professional experience every call. Protocol-driven responses. No variability based on time or workload</p>
              </div>
            </div>

            {/* Scalability */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Scalability</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-ink)] mb-2">Limited & expensive</p>
                <p className="text-sm text-[var(--color-muted)]">Must hire, train, and manage additional staff. Takes weeks. Adds $50k+ per person. Space constraints</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]/30">
                <p className="font-semibold text-[var(--color-ink)] mb-2">Instant & unlimited</p>
                <p className="text-sm text-[var(--color-muted)]">Scales immediately to demand. Handle practice growth, new locations, or seasonal volume without new hires</p>
              </div>
            </div>

            {/* Setup Time */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Setup & Training</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-ink)] mb-2">2–6 weeks</p>
                <p className="text-sm text-[var(--color-muted)]">Recruitment, interviewing, background checks, training on systems, policies, HIPAA. Ongoing supervision needed</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]/30">
                <p className="font-semibold text-[var(--color-ink)] mb-2">1–3 days</p>
                <p className="text-sm text-[var(--color-muted)]">Quick integration with EHR and phone system. Pre-configured for medical practices. Minimal staff training required</p>
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Data & Analytics</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-ink)] mb-2">Manual tracking</p>
                <p className="text-sm text-[var(--color-muted)]">Limited insights. Call logs must be manually recorded. Hard to measure performance or identify trends</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]/30">
                <p className="font-semibold text-[var(--color-ink)] mb-2">Real-time dashboard</p>
                <p className="text-sm text-[var(--color-muted)]">Call volume, peak times, appointment conversion, patient satisfaction. Actionable insights for practice optimization</p>
              </div>
            </div>

            {/* HIPAA Compliance */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 font-semibold text-[var(--color-ink)]">HIPAA Compliance</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="font-semibold text-[var(--color-ink)] mb-2">Training required</p>
                <p className="text-sm text-[var(--color-muted)]">Staff must be trained and monitored. Risk of human error. Violations can lead to fines and liability</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]/30">
                <p className="font-semibold text-[var(--color-ink)] mb-2">Built-in by design</p>
                <p className="text-sm text-[var(--color-muted)]">Encrypted communications, secure data storage, audit logs. Automatic compliance with healthcare regulations</p>
              </div>
            </div>

            {/* Best For */}
            <div className="grid grid-cols-3">
              <div className="p-6 font-semibold text-[var(--color-ink)]">Best For</div>
              <div className="p-6 border-l border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-muted)]">Practices requiring in-person front desk presence, complex patient interactions needing human judgment, or those with sufficient budget and management capacity</p>
              </div>
              <div className="p-6 border-l border-[var(--color-border)] bg-[var(--color-light)]/30">
                <p className="text-sm text-[var(--color-muted)]">Practices seeking cost reduction, 24/7 availability, scalability, consistent quality, reduced administrative burden, and data-driven insights</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Deep Dive: In-House Receptionist */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="mb-16 animate-fade-up">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-10 h-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)]">In-House Receptionist: The Traditional Approach</h2>
            </div>

            <div className="space-y-6 text-[var(--color-muted)] leading-relaxed">
              <p>
                For decades, the in-house medical receptionist has been the cornerstone of practice operations. These professionals handle patient scheduling, phone triage, check-in/check-out, insurance verification, and serve as the human face of the practice. Their interpersonal skills and ability to read patient emotions provide valuable support, particularly for anxious or elderly patients who may need extra assistance navigating healthcare systems.
              </p>
              
              <p>
                <strong className="text-[var(--color-ink)]">True Cost Analysis:</strong> While base salaries typically range from $35,000 to $45,000 annually depending on location and experience, the total cost of employment extends significantly beyond wages. Factor in payroll taxes (7.65% FICA), health insurance ($6,000–$12,000 annually), paid time off (10–15 days), sick leave, training time, recruitment costs, and potential turnover expenses. Many practices also require backup coverage when the primary receptionist is absent, necessitating additional part-time staff or expensive answering services. When fully loaded, a single full-time receptionist typically costs $50,000–$65,000 per year.
              </p>
              
              <p>
                <strong className="text-[var(--color-ink)]">Operational Limitations:</strong> Human limitations inherently constrain capacity. A receptionist can handle only one phone call at a time, leading to busy signals or extended hold times during peak morning hours when appointment requests surge. Multi-location practices require proportional staffing increases. Quality and consistency vary based on experience level, workload stress, and daily variables like illness or personal issues. The learning curve for new hires typically spans 2–4 weeks before they reach full productivity, during which errors and inefficiencies are common.
              </p>
              
              <p>
                <strong className="text-[var(--color-ink)]">Who Benefits Most:</strong> In-house receptionists remain optimal for practices where physical front desk presence is essential—those with high walk-in traffic, complex insurance environments requiring frequent human judgment calls, or patient demographics (such as elderly populations) who strongly prefer human interaction for all communications. Practices with sufficient management infrastructure to handle HR functions, payroll, benefits administration, and ongoing training also see better ROI from traditional staffing models.
              </p>
            </div>
          </div>

          <div className="h-px bg-[var(--color-border)] my-16"></div>

          {/* Deep Dive: AI Automation */}
          <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-10 h-10 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
              <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)]">AI Automation: The Modern Solution</h2>
            </div>

            <div className="space-y-6 text-[var(--color-muted)] leading-relaxed">
              <p>
                Modern AI receptionist systems leverage natural language processing, machine learning, and healthcare-specific training to handle the full spectrum of front office tasks traditionally performed by human staff. These systems answer calls with natural-sounding voice AI, schedule appointments directly into your EHR, send confirmations and reminders, answer common patient questions, route urgent matters appropriately, and maintain HIPAA-compliant records of all interactions—all without human intervention.
              </p>
              
              <p>
                <strong className="text-[var(--color-ink)]">Economic Transformation:</strong> At $200–$500 per month depending on call volume and feature set, AI automation delivers a 90–95% cost reduction compared to traditional staffing. There are no benefits to manage, no payroll taxes, no recruitment costs, no training time, and no coverage gaps for sick days or vacations. The system operates 24/7/365, meaning a patient calling at 11 PM on Sunday receives the same professional, efficient service as one calling Tuesday at 10 AM. For practices operating on thin margins or looking to open additional locations, this cost structure fundamentally changes the economics of growth.
              </p>
              
              <p>
                <strong className="text-[var(--color-ink)]">Performance & Scalability:</strong> AI systems handle unlimited simultaneous calls, eliminating busy signals and hold times entirely. During seasonal flu surges or when your practice is featured in local media, the system scales instantly without additional cost. Consistency is perfect—every patient receives protocol-compliant, professional interactions regardless of call volume or time of day. Real-time dashboards provide unprecedented visibility into call patterns, appointment conversion rates, common patient questions, and operational bottlenecks. This data enables evidence-based practice management decisions impossible with manual tracking.
              </p>
              
              <p>
                <strong className="text-[var(--color-ink)]">Implementation & Integration:</strong> Modern AI receptionist platforms integrate seamlessly with major EHR systems (Epic, Cerner, athenahealth, DrChrono, etc.) and existing phone infrastructure. Setup typically takes 1–3 days, during which the system is trained on your specific scheduling protocols, insurance requirements, provider schedules, and common patient scenarios. Most practices run parallel systems briefly during transition, then switch over completely once confidence is established. Staff training is minimal—primarily learning to review call logs and adjust scheduling rules as needed.
              </p>
              
              <p>
                <strong className="text-[var(--color-ink)]">Ideal Use Cases:</strong> AI automation excels for practices seeking after-hours coverage without expensive answering services, multi-location groups needing standardized patient experience across sites, high-growth practices where hiring can't keep pace with demand, specialties with high call volume (dermatology, urgent care, women's health), and any practice looking to reduce administrative overhead while improving patient access and satisfaction. Solo practitioners and small groups benefit most dramatically from the cost savings and operational flexibility.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="bg-[var(--color-light)] rounded-2xl p-12 animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-4">
              How to Decide: A Practical Framework
            </h2>
            <p className="text-center text-[var(--color-muted)] mb-12">
              Choose the solution that aligns with your practice priorities, patient demographics, and operational goals
            </p>

            <div className="space-y-10">
              
              {/* Choose In-House */}
              <div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  Choose an In-House Receptionist If...
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[var(--color-muted)]"><strong className="text-[var(--color-ink)]">High physical front desk demands:</strong> You have significant walk-in traffic, need someone to manage waiting room flow, process physical paperwork, or handle complex in-person check-in/check-out procedures</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[var(--color-muted)]"><strong className="text-[var(--color-ink)]">Patient demographic preference:</strong> Your patient base skews elderly or technologically hesitant, and strongly prefers human interaction for all communications regardless of efficiency gains</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[var(--color-muted)]"><strong className="text-[var(--color-ink)]">Complex judgment calls:</strong> Your specialty involves frequent nuanced patient triage or insurance scenarios that require experienced human judgment and cannot be protocol-driven</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[var(--color-muted)]"><strong className="text-[var(--color-ink)]">Sufficient resources:</strong> You have the budget for $50k–$65k annual cost per FTE, management bandwidth for HR functions, and capacity to handle scheduling, training, and coverage during absences</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[var(--color-muted)]"><strong className="text-[var(--color-ink)]">Limited hours acceptable:</strong> Your practice operates standard business hours only, and you're comfortable with after-hours calls going to voicemail or an answering service</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-[var(--color-border)]"></div>

              {/* Choose AI Automation */}
              <div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                  <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                  Choose AI Automation If...
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[var(--color-muted)]"><strong className="text-[var(--color-ink)]">Cost efficiency is critical:</strong> You need to reduce overhead by 90%+, reinvest savings into clinical staff or equipment, or improve practice margins without sacrificing patient experience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[var(--color-muted)]"><strong className="text-[var(--color-ink)]">24/7 availability required:</strong> You want to capture after-hours appointment requests, serve patients across time zones, or provide superior access compared to competitors limited to business hours</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[var(--color-muted)]"><strong className="text-[var(--color-ink)]">Scaling or multi-location:</strong> You're opening new locations, expanding services, or experiencing growth that would require hiring multiple new receptionists—an expensive and time-intensive process</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[var(--color-muted)]"><strong className="text-[var(--color-ink)]">High call volume:</strong> You frequently experience busy signals, long hold times, or missed calls during peak hours, leading to patient frustration and lost appointment opportunities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[var(--color-muted)]"><strong className="text-[var(--color-ink)]">Consistency matters:</strong> You want every patient to receive the same high-quality, protocol-compliant experience regardless of staff mood, experience level, or workload stress</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[var(--color-muted)]"><strong className="text-[var(--color-ink)]">Data-driven optimization:</strong> You want real-time analytics on call patterns, conversion rates, patient questions, and operational metrics to make evidence-based practice management decisions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[var(--color-muted)]"><strong className="text-[var(--color-ink)]">Reduced admin burden:</strong> You want to eliminate HR management, payroll administration, benefits coordination, training programs, and coverage planning for front desk staff</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-12 p-6 bg-white rounded-xl border-2 border-[var(--color-accent)]">
              <p className="text-[var(--color-ink)] font-semibold mb-2">Hybrid Approach:</p>
              <p className="text-[var(--color-muted)] text-sm">
                Many practices benefit from a hybrid model: a part-time in-house receptionist for physical front desk duties during peak hours, complemented by AI automation for after-hours coverage, overflow calls, and routine scheduling. This combines human presence when most valuable with 24/7 availability and cost efficiency of automation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          <h2 className="font-cormorant text-4xl font-light text-center text-[var(--color-ink)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--color-muted)] mb-12">
            Common questions about comparing in-house and AI receptionist solutions
          </p>

          <div className="space-y-4">
            
            <details className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group animate-fade-up">
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>Can AI really handle complex medical scheduling and patient questions?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4">
                <p>Modern medical AI systems are specifically trained on healthcare workflows and can handle 80–90% of routine front desk tasks: appointment scheduling across multiple providers, insurance verification, basic patient questions (office hours, location, accepted insurance, preparation instructions), appointment reminders, cancellations, and rescheduling. For complex or unusual scenarios outside their training, they route to human staff with detailed context. The AI continuously learns from your practice patterns, improving accuracy over time. Most practices find AI handles the high-volume repetitive tasks perfectly, freeing human staff to focus on cases requiring judgment and empathy.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group animate-fade-up" style={{animationDelay: '0.1s'}}>
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>What happens during the transition from in-house to AI? Will we lose calls?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4">
                <p>Most practices use a phased rollout approach to ensure smooth transition. Week 1: AI is configured and tested with your EHR, protocols, and provider schedules in a sandbox environment. Week 2: AI handles after-hours calls only while in-house staff manages business hours, allowing you to review AI performance with low risk. Week 3–4: Gradually expand AI coverage to overflow calls during peak times, then business hours for routine scheduling. Your existing receptionist can be reassigned to higher-value tasks (patient coordination, insurance follow-up, complex cases) or reduced to part-time for specialized duties. Implementation teams typically provide hands-on support during the transition, and you can revert to previous workflows anytime if needed. Most practices see zero call loss and often capture previously missed after-hours calls.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group animate-fade-up" style={{animationDelay: '0.2s'}}>
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>How do patients react to AI receptionists? Will this hurt patient satisfaction?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4">
                <p>Patient satisfaction data consistently shows AI receptionists meet or exceed satisfaction with human receptionists for routine tasks. Key factors: (1) Immediate answer—no hold times or busy signals, which is patients' top frustration; (2) 24/7 availability—patients can schedule at their convenience, not just during business hours; (3) Consistency—every caller gets professional, accurate service without variability based on staff workload or mood; (4) Efficiency—faster scheduling with instant confirmation. Some elderly or technologically hesitant patients may initially prefer human interaction, but many change their minds after experiencing the convenience. Best practice: maintain an option to speak with staff for patients who specifically request it, while defaulting to AI for the majority who simply want quick, efficient service. Practices typically see improved satisfaction scores within 2–3 months as patients experience the benefits.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group animate-fade-up" style={{animationDelay: '0.3s'}}>
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>What if our practice grows significantly? Can AI scale, or will we need to hire eventually?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4">
                <p>AI systems scale infinitely without proportional cost increases—one of their most significant advantages over human staffing. Whether you receive 100 calls or 1,000 calls monthly, handle one provider or ten providers across multiple locations, the AI handles all simultaneously with consistent quality. Seasonal volume spikes (flu season, back-to-school physicals) or sudden growth from marketing campaigns require zero planning or additional hiring. As you add new locations, the AI extends seamlessly to all sites with unified protocols and centralized management. Contrast this with traditional staffing: each new location requires dedicated receptionist(s), each volume increase necessitates more FTEs, each addition involves recruitment, training, and management overhead. Practices using AI report that scalability and the elimination of staffing constraints are often more valuable than even the direct cost savings.</p>
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all group animate-fade-up" style={{animationDelay: '0.4s'}}>
              <summary className="font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                <span>Is HIPAA compliance guaranteed with AI systems handling patient information?</span>
                <svg className="w-5 h-5 text-[var(--color-accent)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4">
                <p>Reputable medical AI platforms are built with HIPAA compliance as a foundational requirement, not an afterthought. They use end-to-end encryption for all communications (voice and data), maintain Business Associate Agreements (BAAs) with healthcare clients, store data in HIPAA-compliant cloud infrastructure with strict access controls, provide detailed audit logs of all patient interactions, and undergo regular third-party security audits. In many ways, AI systems are more consistently HIPAA-compliant than human staff—they never accidentally discuss patient information in public areas, leave patient records visible, or fall victim to social engineering. Human error remains the leading cause of HIPAA violations; AI eliminates this risk category entirely. When evaluating vendors, confirm they provide a signed BAA, maintain SOC 2 Type II certification, and have documented security policies specific to healthcare. Try MedReception and similar enterprise platforms meet all these standards as core features.</p>
              </div>
            </details>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          
          <svg className="w-16 h-16 text-white mx-auto mb-6 opacity-90" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
          </svg>
          
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Explore AI Automation for Your Practice?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Discuss your specific needs, patient volume, and operational goals with our team. We'll help you determine whether AI automation, a hybrid approach, or traditional staffing best serves your practice and patients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-semibold transition-all hover:gap-3 shadow-lg"
            >
              Schedule a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            
            <a 
              href="/demo" 
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold transition-all"
            >
              See AI Demo
            </a>
          </div>

          <p className="text-white/70 text-sm mt-8">
            Free consultation • No obligation • Custom analysis for your practice
          </p>

        </div>
      </section>

    </main>
  )
}