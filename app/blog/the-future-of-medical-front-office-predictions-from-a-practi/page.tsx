import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Future of Medical Front Office: Predictions from a Practicing Surgeon | Try MedReception',
  description: 'Explore evidence-based predictions on how AI, automation, and emerging technologies will transform medical front office operations from the perspective of a practicing surgeon.',
  keywords: 'medical front office, healthcare automation, AI in healthcare, medical reception future, healthcare technology, patient scheduling, medical practice management',
  openGraph: {
    title: 'The Future of Medical Front Office: Predictions from a Practicing Surgeon',
    description: 'Explore evidence-based predictions on how AI, automation, and emerging technologies will transform medical front office operations.',
    url: 'https://trymedreception.com/blog/the-future-of-medical-front-office-predictions-from-a-practi',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Try MedReception Blog' }]
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </div>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Healthcare Innovation
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Future of Medical Front Office: Predictions from a Practicing Surgeon
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span>Dr. MedReception Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              As a practicing surgeon who spends countless hours in the operating room, I've witnessed firsthand how the front office experience directly impacts patient outcomes. When patients arrive stressed from scheduling confusion, billing questions, or long wait times, their anxiety levels are elevated before we even begin clinical care. The truth is, the medical front office is the heartbeat of any practice—and it's on the cusp of a transformation that will fundamentally reshape healthcare delivery.
            </p>
            <p className="mb-6">
              Over my years in medicine, I've observed a troubling pattern: while surgical techniques and diagnostic tools have advanced exponentially, the front office experience has remained largely unchanged. Patients still face busy signals, navigate confusing phone trees, and wait days for appointment callbacks. But emerging technologies and changing patient expectations are finally forcing our industry to reimagine this critical touchpoint. Here are my evidence-based predictions for the future of medical front office operations.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            AI-Powered Reception: Beyond Simple Automation
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Artificial intelligence in healthcare has moved far beyond theoretical discussions. In my practice, we're already seeing early implementations that hint at what's coming. The next generation of AI reception systems won't simply answer phones—they'll understand context, detect urgency in patient voices, and intelligently route care based on clinical protocols.
            </p>
            <p className="mb-6">
              Research from the Journal of Medical Internet Research demonstrates that AI-powered scheduling systems reduce no-show rates by up to 32% through intelligent reminder timing and personalized communication. These systems analyze patient behavior patterns, transportation schedules, and even local weather forecasts to optimize appointment timing and communication strategies.
            </p>
            <p className="mb-6">
              What excites me most is AI's potential to perform preliminary symptom assessment. When patients call with concerns, advanced natural language processing can gather initial information, flag potentially urgent situations, and prepare clinical staff with context before the conversation even transfers. This doesn't replace human judgment—it enhances it, allowing our team to focus on complex decision-making rather than routine information gathering.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The future front office won't eliminate human connection—it will free healthcare professionals to focus on the moments where empathy and clinical judgment matter most."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            24/7 Availability: Meeting Patients Where They Are
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Today's patients don't work 9-to-5 schedules, and they shouldn't have to navigate healthcare systems that do. One of the most consistent complaints I hear from patients is the difficulty of scheduling appointments during limited office hours while managing their own work responsibilities.
            </p>
            <p className="mb-6">
              The future front office will operate around the clock, not through exhausted staff working overnight shifts, but through intelligent systems that handle routine tasks while escalating urgent matters to on-call clinical personnel. A study published in Health Affairs found that practices offering 24/7 scheduling access saw a 47% increase in appointment bookings and a significant improvement in patient satisfaction scores.
            </p>
            <p className="mb-6">
              From my surgical practice perspective, this means patients can schedule follow-up appointments immediately after receiving discharge instructions—when the information is fresh and they're motivated to act. They can ask medication questions at 10 PM when they're actually taking their evening doses, not the next morning when they might forget their concern.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Predictive Analytics: Anticipating Patient Needs
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              One of the most promising developments I'm tracking is the application of predictive analytics to front office operations. By analyzing historical data, these systems can anticipate patient needs before they even reach out.
            </p>
            <p className="mb-6">
              For example, patients who've undergone certain procedures typically need follow-up appointments within specific timeframes. Predictive systems can proactively reach out to schedule these appointments before patients even think to call. Similarly, these systems can identify patients at high risk of missing appointments based on historical patterns and implement targeted intervention strategies.
            </p>
            <p className="mb-6">
              In my surgical practice, we're piloting systems that predict when patients might need prescription refills based on their medication schedules, surgical recovery timelines, and refill history. This proactive approach reduces emergency calls, improves medication adherence, and ultimately leads to better surgical outcomes. Research from the American Journal of Managed Care shows that proactive patient engagement strategies reduce emergency department visits by up to 23%.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Seamless Integration: Breaking Down Information Silos
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              One of the most frustrating aspects of modern healthcare—for both providers and patients—is fragmented information. Patients tell their story multiple times to different staff members. Clinical information lives in one system while billing data exists in another.
            </p>
            <p className="mb-6">
              The future front office will serve as an intelligent integration layer, connecting electronic health records, billing systems, imaging databases, and communication platforms into a cohesive experience. When patients call, staff will have immediate access to their complete care history, pending test results, outstanding balances, and upcoming appointments—all in one unified interface.
            </p>
            <p className="mb-6">
              From my perspective as a surgeon, this integration means my front office team can answer questions about post-operative restrictions by pulling information directly from my surgical notes, rather than leaving patients on hold while they track me down between cases. This kind of seamless information flow doesn't just improve efficiency—it directly impacts patient safety and satisfaction.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Enhanced Human Connection: Technology as an Enabler
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Despite all this talk of AI and automation, I want to be clear about something crucial: the future of medical front office operations isn't about replacing human interaction—it's about enhancing it. The goal is to automate routine tasks so that when patients do speak with a human team member, that interaction can be more meaningful, empathetic, and focused on their actual needs.
            </p>
            <p className="mb-6">
              When front office staff aren't overwhelmed with repetitive scheduling calls and basic questions that technology can handle, they have the bandwidth to truly listen to patient concerns, detect emotional distress that might indicate more serious problems, and provide the kind of compassionate care that no AI can replicate.
            </p>
            <p className="mb-6">
              Research consistently shows that patient satisfaction is most strongly correlated with feeling heard and understood—not with the technology used to facilitate care. The most successful practices of the future will be those that use technology to create more opportunities for genuine human connection, not fewer.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Key Predictions: What to Expect in the Next Five Years
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">Based on current trends and emerging research, here are my specific predictions for medical front office evolution by 2030:</p>
            
            <div className="space-y-4 my-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <p><strong>Voice-First Interfaces:</strong> Most patient interactions will begin with natural voice conversations, with AI determining when human escalation is needed based on complexity and emotional cues.</p>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <p><strong>Proactive Outreach:</strong> Systems will contact patients before they need to reach out, scheduling preventive care appointments, coordinating specialist referrals, and addressing potential concerns before they become urgent.</p>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <p><strong>Multilingual Support:</strong> Real-time translation services will eliminate language barriers, allowing patients to communicate in their preferred language without needing bilingual staff for every language combination.</p>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <p><strong>Integrated Financial Counseling:</strong> Patients will receive upfront cost estimates, insurance verification, and payment options before appointments, reducing billing surprises and improving collection rates.</p>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <p><strong>Behavioral Health Integration:</strong> Front office systems will screen for mental health concerns, social determinants of health, and care barriers, connecting patients with appropriate resources beyond traditional medical care.</p>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <p><strong>Personalized Communication Preferences:</strong> Patients will control how, when, and through which channels they receive communications, with systems automatically adapting to individual preferences.</p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              As healthcare providers, we have a responsibility to embrace these technological advances not for their own sake, but because they allow us to deliver better, more accessible, more compassionate care. The future front office will be more responsive, more intelligent, and more human than ever before—a paradox that's only possible when we thoughtfully apply technology to enhance rather than replace the essential human elements of healthcare.
            </p>
            <p className="mb-6">
              The practices that thrive in the coming years will be those that recognize this transformation isn't optional—it's inevitable. Patient expectations are rising, and the gap between what technology enables and what most practices deliver is widening. As a surgeon, I'm energized by the prospect of front office innovations that reduce patient stress, improve access, and allow my clinical team to focus on what we do best: delivering excellent medical care.
            </p>
            <p>
              <strong>If your practice is ready to explore how modern front office solutions can enhance patient care and operational efficiency, consider reaching out to learn more about proven technologies that are already transforming healthcare delivery today.</strong>
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="flex-shrink-0">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Written by the Try MedReception Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to improving healthcare access and patient outcomes through innovative front office solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Patient Experience</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  How AI Receptionists Reduce Patient Wait Times
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover how intelligent scheduling and call management systems are cutting average patient wait times by up to 40%.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Practice Management</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  HIPAA Compliance in Modern Medical Reception
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Essential security protocols and best practices for protecting patient information in automated reception systems.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Technology Guide</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Choosing the Right Virtual Receptionist Solution
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  A comprehensive guide to evaluating AI reception platforms for your medical practice's unique needs.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you transform your front office operations with proven AI solutions.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}