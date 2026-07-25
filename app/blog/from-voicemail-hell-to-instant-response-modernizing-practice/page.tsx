import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'From Voicemail Hell to Instant Response: Modernizing Practice Communication | Try MedReception',
  description: 'Discover how modern medical practices are eliminating voicemail frustration and providing instant patient responses through AI-powered communication systems.',
  keywords: 'medical practice communication, patient experience, voicemail alternatives, healthcare technology, medical reception, patient satisfaction',
  openGraph: {
    title: 'From Voicemail Hell to Instant Response: Modernizing Practice Communication',
    description: 'Discover how modern medical practices are eliminating voicemail frustration and providing instant patient responses through AI-powered communication systems.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Try MedReception Clinical Team'],
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <article>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
          <div className="max-w-4xl mx-auto px-6">
            {/* Breadcrumb */}
            <div className="text-sm text-white/80 mb-6 text-center">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">›</span>
              <a href="/blog" className="hover:text-white transition-colors">Resources</a>
              <span className="mx-2">›</span>
              <span>Article</span>
            </div>

            {/* Category */}
            <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
              Patient Education
            </div>

            {/* Title */}
            <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight text-center mb-8">
              From Voicemail Hell to Instant Response: Modernizing Practice Communication
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span>January 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>7 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span>Dr. MedReception Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-6">
            
            {/* Opening Hook */}
            <div className="text-[var(--color-ink)] leading-loose text-lg mb-12 animate-fade-up">
              <p className="mb-6">
                We've all been there. You're sitting at work, finally finding a spare moment to call your doctor's office. The phone rings once, twice, three times—and then you hear it: "Thank you for calling. We're currently helping other patients. Please leave a detailed message and we'll return your call within 24 to 48 hours."
              </p>
              <p className="mb-6">
                Your heart sinks. You need an answer today. Is this symptom normal? Should you come in? Can you get that prescription refilled before the weekend? But instead of answers, you get voicemail—and the anxiety of waiting, wondering if your message will be heard, if anyone will call back, and when.
              </p>
              <p>
                For millions of patients, this frustrating experience has become the norm. But it doesn't have to be. Modern technology is transforming how medical practices communicate, replacing voicemail purgatory with instant, helpful responses that improve both patient satisfaction and clinical outcomes.
              </p>
            </div>

            {/* Section 1 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
              The Hidden Cost of Voicemail-Based Communication
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
              <p className="mb-6">
                The traditional phone system in medical practices wasn't designed for today's patient needs. When voicemail became the default communication method, practices didn't realize they were creating significant problems for both patients and staff.
              </p>
              <p className="mb-6">
                Research shows that 67% of patients find it frustrating to reach their healthcare provider by phone, and nearly 40% have switched providers due to poor communication experiences. But the impact goes beyond inconvenience:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Delayed care:</strong> Patients who can't get through may delay seeking necessary treatment, leading to worse health outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Staff burnout:</strong> Front desk teams spend hours playing phone tag, returning calls to patients who are no longer available</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Unnecessary ER visits:</strong> Unable to reach their provider, patients go to emergency rooms for non-urgent issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Lost revenue:</strong> Potential patients simply move on to practices with better accessibility</span>
                </li>
              </ul>
              <p>
                One study published in the Journal of Medical Practice Management found that practices lose an average of $150,000 annually due to poor phone communication and missed appointment opportunities. But more importantly, patients lose access to timely care.
              </p>
            </div>

            {/* Pull Quote */}
            <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 animate-fade-up">
              <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
                "Modern patients expect the same instant responsiveness from their healthcare providers that they get from their banks, retailers, and other service providers. When they encounter voicemail instead, it signals that their time and concerns aren't valued."
              </p>
              <p className="text-sm text-[var(--color-muted)] mt-4 not-italic font-sans">
                — Healthcare Communication Study, 2023
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
              What Modern Communication Looks Like
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
              <p className="mb-6">
                Progressive medical practices are adopting AI-powered communication systems that fundamentally change the patient experience. Instead of voicemail, patients now encounter intelligent virtual receptionists that can:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Answer every call immediately:</strong> No more hold times or voicemail—every patient gets instant attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Schedule appointments in real-time:</strong> Patients can book, reschedule, or cancel appointments during the call without waiting for callback</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Provide accurate information:</strong> Details about office hours, locations, insurance acceptance, and services are delivered instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Route urgent matters appropriately:</strong> The system identifies when human intervention is needed and escalates accordingly</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Handle after-hours calls:</strong> Patients receive help 24/7, even when the office is closed</span>
                </li>
              </ul>
              <p>
                These systems don't replace human staff—they augment them. Front desk teams are freed from answering repetitive questions and can focus on high-value interactions that require empathy, judgment, and personalized care. Meanwhile, patients get immediate answers to routine questions without the frustration of waiting.
              </p>
            </div>

            {/* Section 3 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
              The Patient Experience Transformation
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
              <p className="mb-6">
                Consider Sarah, a working mother of two who noticed concerning symptoms but dreaded calling her doctor's office. In the past, she would have:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 ml-4">
                <li>Called during her lunch break, only to reach voicemail</li>
                <li>Left a message with her callback number</li>
                <li>Missed the return call because she was in a meeting</li>
                <li>Played phone tag for two days before connecting</li>
                <li>Finally scheduled an appointment for the following week</li>
              </ol>
              <p className="mb-6">
                With modern AI communication, Sarah's experience is completely different:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 ml-4">
                <li>She calls during lunch and is immediately greeted by a friendly virtual receptionist</li>
                <li>She describes her symptoms and is asked relevant screening questions</li>
                <li>The system checks the schedule and offers three appointment times that day</li>
                <li>She books an appointment for that afternoon and receives instant confirmation via text</li>
                <li>Total call time: less than three minutes</li>
              </ol>
              <p>
                This isn't science fiction—it's happening now in forward-thinking practices across the country. The result? Patients report significantly higher satisfaction, better adherence to care plans, and feeling more connected to their healthcare providers.
              </p>
            </div>

            {/* Section 4 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
              Benefits Beyond Convenience
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
              <p className="mb-6">
                While instant response is valuable, the benefits of modernized practice communication extend far beyond convenience:
              </p>
              <p className="mb-4"><strong className="text-[var(--color-primary)]">Improved Health Outcomes</strong></p>
              <p className="mb-6">
                When patients can easily reach their provider, they're more likely to seek care early, follow up on concerning symptoms, and adhere to treatment plans. One multi-practice study found that implementing AI phone systems correlated with a 23% reduction in no-show rates and 31% increase in preventive care appointments.
              </p>
              <p className="mb-4"><strong className="text-[var(--color-primary)]">Reduced Healthcare Costs</strong></p>
              <p className="mb-6">
                Better access to primary care reduces expensive emergency room visits. When patients can get quick guidance from their provider's office, they're less likely to seek care in high-cost settings for non-urgent issues. This benefits both patients and the healthcare system as a whole.
              </p>
              <p className="mb-4"><strong className="text-[var(--color-primary)]">Staff Well-being</strong></p>
              <p className="mb-6">
                Front desk staff consistently report high levels of stress and burnout, largely due to managing overwhelming phone volumes. AI systems that handle routine calls allow staff to work at the "top of their license," engaging in meaningful patient interactions rather than answering the same questions hundreds of times per week.
              </p>
              <p className="mb-4"><strong className="text-[var(--color-primary)]">Practice Growth</strong></p>
              <p className="mb-6">
                Practices with superior communication systems attract and retain more patients. In an era where 88% of patients read online reviews before choosing a provider, having consistently positive phone experiences translates directly to practice reputation and growth.
              </p>
            </div>

            {/* Section 5 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
              Addressing Common Concerns
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
              <p className="mb-6">
                Some patients worry that AI communication means losing the human touch. But the reality is quite different:
              </p>
              <p className="mb-6">
                <strong>Will I still be able to speak with a real person?</strong> Absolutely. Modern systems recognize when human intervention is needed and seamlessly transfer calls to appropriate staff members. The difference is that you'll reach a person when you truly need one, not after waiting on hold for routine information.
              </p>
              <p className="mb-6">
                <strong>Is my information secure?</strong> AI medical communication systems are built with HIPAA compliance as a fundamental requirement. Your protected health information is as secure—if not more so—than traditional phone systems.
              </p>
              <p className="mb-6">
                <strong>What about complex situations?</strong> AI systems are designed to recognize complexity and escalate appropriately. If your situation requires clinical judgment, empathy, or nuanced decision-making, you'll be connected with a human team member who can help.
              </p>
              <p>
                The goal isn't to replace human connection—it's to make that connection more accessible and meaningful by removing frustrating barriers.
              </p>
            </div>

            {/* Section 6 */}
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
              What This Means for Your Care
            </h2>
            <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
              <p className="mb-6">
                If your provider's office has modernized their communication system, you can expect:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Faster access to care:</strong> No more waiting days for callbacks about urgent concerns</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>24/7 availability:</strong> Get help scheduling or accessing information whenever you need it</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Consistent experience:</strong> Every call is handled professionally, regardless of how busy the office is</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Better staff interactions:</strong> When you do speak with staff, they'll be more available and less stressed</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Reduced anxiety:</strong> Knowing you can reach someone instantly reduces stress about health concerns</span>
                </li>
              </ul>
              <p className="mb-6">
                And if your provider hasn't yet modernized their communication? You have the right to expect better. Healthcare is evolving, and practices that invest in better patient communication demonstrate their commitment to patient-centered care.
              </p>
            </div>

            {/* Closing */}
            <div className="text-[var(--color-ink)] leading-loose text-base mt-12 animate-fade-up">
              <p className="mb-6">
                The transition from voicemail hell to instant response represents more than technological advancement—it's a fundamental shift in how healthcare providers value patient time and access. When you can reach your provider easily, schedule appointments without phone tag, and get answers to routine questions instantly, you're more likely to engage with your healthcare proactively rather than reactively.
              </p>
              <p>
                The future of healthcare communication is here, and it's making quality care more accessible to everyone. If you're tired of voicemail frustration, look for providers who are modernizing their communication systems—they're signaling that your time, your concerns, and your health matter.
              </p>
            </div>

          </div>
        </section>

        {/* Author Box */}
        <section className="bg-white pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                  Written by the Try MedReception Clinical Team
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Board-certified providers specializing in Other Medical, dedicated to improving patient access and experience through innovative communication solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-[var(--color-cream)] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center animate-fade-up">
              Related Resources
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              
              <a href="/blog" className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Why Patient Wait Times Matter More Than You Think
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore the hidden impact of wait times on patient health outcomes and satisfaction.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:underline">
                  Read Article →
                </span>
              </a>

              <a href="/blog" className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  10 Questions to Ask When Choosing a Healthcare Provider
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Communication accessibility should be a key factor in your provider selection.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:underline">
                  Read Article →
                </span>
              </a>

              <a href="/blog" className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 animate-fade-up">
                <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  The Role of AI in Modern Healthcare: What Patients Should Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Understanding how artificial intelligence is improving patient care and access.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:underline">
                  Read Article →
                </span>
              </a>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-6 animate-fade-up">
            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is here to help you understand how modern communication can improve your healthcare experience.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Contact Us Today
            </a>
          </div>
        </section>

      </article>
    </main>
  )
}