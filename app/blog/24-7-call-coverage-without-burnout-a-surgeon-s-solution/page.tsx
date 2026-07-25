import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '24/7 Call Coverage Without Burnout: A Surgeon\'s Solution | Try MedReception',
  description: 'Discover how surgeons maintain 24/7 call coverage without sacrificing wellbeing. Evidence-based strategies to protect your health while providing excellent patient care.',
  keywords: 'surgeon burnout, call coverage, physician wellness, medical call management, surgeon mental health, healthcare burnout prevention',
  openGraph: {
    title: '24/7 Call Coverage Without Burnout: A Surgeon\'s Solution',
    description: 'Evidence-based strategies for maintaining 24/7 call coverage without sacrificing your wellbeing.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Try MedReception Clinical Team'],
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Mental Health & Wellness
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            24/7 Call Coverage Without Burnout: A Surgeon's Solution
          </h1>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
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
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              It's 2 a.m. on a Tuesday. Your phone rings for the third time tonight. You've been operating since 7 a.m. yesterday, and you're scheduled for a full slate of surgeries in five hours. This isn't an emergency—it's a routine call that could have waited until morning. Sound familiar?
            </p>
            <p className="mb-6">
              For surgeons, 24/7 call coverage isn't just part of the job—it's a sacred responsibility to patients. But when that responsibility comes at the cost of your own health, relationships, and mental wellbeing, something has to change. The good news? It can change, without compromising patient care.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Hidden Cost of Always Being "On"
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Research published in the Journal of the American College of Surgeons reveals that more than 40% of surgeons experience symptoms of burnout, with call coverage being identified as a primary contributing factor. Unlike other medical specialties, surgical call often means immediate action—returning to the hospital, performing emergency procedures, and making critical decisions under pressure.
            </p>
            <p className="mb-6">
              The physiological impact is profound. Chronic sleep disruption affects cognitive function, decision-making ability, and manual dexterity—all critical for surgical performance. Studies show that surgeons working after 24 hours without sleep perform at levels comparable to those with a blood alcohol content of 0.10%, well above the legal driving limit.
            </p>
            <p className="mb-6">
              Beyond the operating room, the personal toll is staggering. Missed family dinners, interrupted vacations, and the constant anxiety of waiting for the next call create a persistent state of stress that erodes quality of life and strains relationships.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The expectation that surgeons should be perpetually available isn't sustainable. We owe it to our patients to be at our best, and that requires protecting our own wellbeing."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Call Coverage Challenges
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Not all calls are created equal. A Mayo Clinic analysis of surgical call patterns found that approximately 60% of after-hours calls don't require immediate surgical intervention. Many are routine questions that could be handled by trained staff, prescription refills that could wait until morning, or patient concerns that need reassurance more than a surgeon's expertise.
            </p>
            <p className="mb-6">
              The challenge lies in filtering these calls without missing the genuine emergencies. Traditional answering services simply forward everything, leaving surgeons to triage each call personally. This "better safe than sorry" approach means interrupted sleep for non-urgent matters, while true emergencies sometimes get delayed in the queue.
            </p>
            <p className="mb-6">
              Geographic and practice-specific factors compound the challenge. Solo practitioners and small group practices face the most intense pressure, often covering call 24/7 with minimal backup. Rural surgeons may serve entire regions, making call coverage even more demanding.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Smart Call Management: A Systems Approach
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The solution isn't working harder—it's working smarter through intelligent call management systems. Leading surgical practices are implementing multi-tiered approaches that protect surgeon availability for true emergencies while addressing routine matters appropriately.
            </p>
            <p className="mb-6">
              Modern medical reception services act as clinical triage partners, not just message-takers. Staffed by trained medical professionals who understand surgical protocols, these services can:
            </p>
            
            <ul className="space-y-4 my-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Accurately triage urgent versus non-urgent calls</strong> using established clinical protocols and your practice's specific guidelines</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Handle routine matters independently</strong> such as appointment scheduling, prescription refill requests (with protocols), and general practice information</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Provide appropriate patient reassurance</strong> for post-operative concerns that don't require immediate surgeon intervention</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Escalate genuine emergencies immediately</strong> with complete clinical information, enabling you to prepare before you even answer the phone</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Document all interactions</strong> in your EHR system, maintaining continuity of care and medicolegal protection</span>
              </li>
            </ul>

            <p className="mb-6">
              A orthopedic surgery group in the Pacific Northwest implemented this approach and reduced after-hours surgeon contacts by 63% while maintaining patient satisfaction scores above 95%. The key was establishing clear protocols that empowered the reception team to handle appropriate calls while immediately connecting surgeons to true emergencies.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Building Your Sustainable Call Strategy
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Implementing effective call coverage requires more than just outsourcing your phone line. It demands a thoughtful strategy tailored to your practice's specific needs and patient population.
            </p>
            
            <p className="mb-4"><strong>Start with protocol development:</strong></p>
            <p className="mb-6">
              Work with your medical reception partner to create detailed triage protocols. What constitutes a true emergency in your specialty? Which post-operative symptoms require immediate attention versus next-day follow-up? What routine matters can be handled by trained staff? Document these clearly, and update them based on real-world experience.
            </p>

            <p className="mb-4"><strong>Establish call volume baselines:</strong></p>
            <p className="mb-6">
              Track your current after-hours call patterns for at least one month. How many calls do you receive? What percentage are true emergencies? What's the distribution across time of day and day of week? This data helps you design an efficient system and measure improvement.
            </p>

            <p className="mb-4"><strong>Create escalation pathways:</strong></p>
            <p className="mb-6">
              Not every urgent matter requires the attending surgeon. Can your physician assistant or nurse practitioner handle certain situations? Should some calls route to emergency departments with your consultation available? Build a tiered response system that matches urgency to appropriate resources.
            </p>

            <p className="mb-4"><strong>Invest in technology integration:</strong></p>
            <p className="mb-6">
              Modern call management systems should integrate seamlessly with your EHR, scheduling system, and communication tools. Real-time documentation, secure messaging, and data analytics transform call coverage from a burden into a manageable process.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Business Case for Better Call Management
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Beyond personal wellbeing, effective call management makes strong financial sense. Burnout costs the healthcare system an estimated $4.6 billion annually in turnover and reduced productivity. For individual surgeons, burnout contributes to early retirement, reduced surgical volume, and medical errors that carry both human and financial costs.
            </p>
            <p className="mb-6">
              Professional call management services typically cost a fraction of what practices lose to inefficiency. Consider: if poor call coverage causes you to lose just one surgical day per month due to fatigue or burnout symptoms, the lost revenue far exceeds the cost of a comprehensive reception solution.
            </p>
            <p className="mb-6">
              Moreover, improved call management enhances patient satisfaction. Patients receive faster, more appropriate responses to their concerns. They're not waiting for exhausted surgeons to return non-urgent calls, and genuine emergencies get expedited attention. This translates to better outcomes, fewer complications from delayed care, and stronger patient loyalty.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Taking the First Step Toward Balance
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              If you're reading this at 2 a.m. after another interrupted night, know that change is possible. Thousands of surgeons have successfully implemented smarter call coverage strategies without compromising patient care. The key is recognizing that being available for true emergencies requires protecting yourself from unnecessary interruptions.
            </p>
            <p className="mb-6">
              Start by auditing your current call patterns. Track every after-hours contact for two weeks—what was it about, did it require immediate surgeon attention, could it have been handled differently? This data provides the foundation for meaningful change.
            </p>
            <p className="mb-6">
              Next, have honest conversations with your partners, hospital administrators, and patients about realistic call expectations. Most patients don't want to bother their surgeon at 2 a.m. for routine questions—they simply don't know there's another option. Clear communication about when and how to reach appropriate help improves everyone's experience.
            </p>
            <p className="mb-6">
              Finally, consider partnering with a medical reception service that specializes in surgical practices. Look for providers with clinical training, 24/7 availability, EHR integration capabilities, and a track record in your specialty. The right partner becomes an extension of your care team, not just an answering service.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="mb-6">
              Your commitment to patient care brought you to surgery. That same commitment should extend to protecting your ability to provide excellent care long-term. Burnout doesn't just affect you—it affects every patient you'll treat for the rest of your career.
            </p>
            <p className="mb-6">
              Smart call coverage isn't about shirking responsibility. It's about marshaling resources effectively so you're genuinely available when patients need a surgeon's expertise, while ensuring all their concerns receive appropriate attention.
            </p>
            <p className="text-lg font-semibold">
              If you're ready to explore more sustainable call coverage solutions, we're here to help. Our team specializes in supporting surgical practices with clinical-grade call management that protects both patient care and physician wellbeing.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <aside className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <div className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Try MedReception Clinical Team
              </div>
              <div className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers and healthcare professionals specializing in Other Medical. Our team is dedicated to supporting physician wellness and practice efficiency through evidence-based solutions.
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Physician Wellness
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Recognizing Early Signs of Physician Burnout
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn to identify burnout symptoms before they become critical, with actionable strategies for prevention and recovery.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Practice Management
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  How Medical Answering Services Improve Patient Outcomes
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover the clinical and operational benefits of professional medical reception services for specialty practices.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">
                  Work-Life Balance
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Setting Boundaries: A Guide for Solo Practitioners
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Practical strategies for establishing healthy professional boundaries without compromising patient care quality.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you implement sustainable call coverage solutions that protect both your wellbeing and your patients.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all hover:gap-3 hover:shadow-xl"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}