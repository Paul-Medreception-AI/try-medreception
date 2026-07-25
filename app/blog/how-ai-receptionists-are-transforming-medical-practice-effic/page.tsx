import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How AI Receptionists Are Transforming Medical Practice Efficiency | Try MedReception',
  description: 'Discover how AI-powered reception systems are revolutionizing healthcare practice management, reducing wait times, improving patient satisfaction, and allowing medical staff to focus on quality care.',
  keywords: 'AI receptionist, medical practice efficiency, healthcare automation, patient scheduling, medical office management, healthcare technology',
  openGraph: {
    title: 'How AI Receptionists Are Transforming Medical Practice Efficiency',
    description: 'Discover how AI-powered reception systems are revolutionizing healthcare practice management.',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
    authors: ['Try MedReception Clinical Team'],
  }
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Breadcrumb */}
          <nav className="text-sm text-white/80 mb-8 text-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Article</span>
          </nav>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Healthcare Technology
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight text-center mb-8">
            How AI Receptionists Are Transforming Medical Practice Efficiency
          </h1>

          {/* Meta */}
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
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8 animate-fade-up">
            <p className="mb-6">
              Every morning, medical practices across the country face the same challenge: phone lines light up before the doors even open. Patients need appointments, prescription refills, billing clarification, and test results. Meanwhile, front desk staff juggle check-ins, insurance verification, and the constant interruption of ringing phones. It's a familiar scenario that leaves everyone frustrated—staff overwhelmed, patients on hold, and providers unable to focus on what matters most: delivering quality care.
            </p>
            <p>
              But what if there was a way to handle routine administrative tasks seamlessly, 24/7, without adding staff or compromising the personal touch patients expect? Enter AI receptionists—intelligent systems that are quietly revolutionizing how medical practices operate, transforming inefficiency into streamlined patient experiences and giving healthcare teams back their most precious resource: time.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Administrative Burden Facing Modern Healthcare
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-4">
                Healthcare professionals didn't enter medicine to spend hours managing schedules and answering phones. Yet studies show that administrative tasks consume up to 30% of a medical practice's operational capacity. Front desk staff spend their days toggling between patient interactions, phone calls, insurance verification, and appointment coordination—often simultaneously.
              </p>
              <p className="mb-4">
                This administrative overload has real consequences. Patients experience longer wait times, both on the phone and in the office. Staff burnout increases. Appointment no-shows rise when patients can't reach someone to confirm or reschedule. And perhaps most critically, providers find themselves pulled away from patient care to address scheduling conflicts or answer routine questions.
              </p>
              <p>
                The traditional solution—hiring more staff—brings its own challenges: increased payroll costs, training time, coverage gaps during sick days or vacations, and the ongoing difficulty of finding qualified personnel in a competitive job market. Medical practices need a different approach, one that augments human capabilities rather than simply adding more bodies to an already crowded front desk.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              What AI Receptionists Actually Do
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-4">
                AI receptionists aren't robots replacing human interaction—they're sophisticated systems designed to handle routine, repeatable tasks with remarkable accuracy. Unlike basic automated phone trees that frustrate callers with endless button pressing, modern AI receptionists use natural language processing to understand and respond to patient requests conversationally.
              </p>
              <p className="mb-4">
                These systems can schedule appointments by checking real-time availability, send confirmation reminders via text or email, answer frequently asked questions about office hours and locations, verify insurance information, process prescription refill requests, and route complex inquiries to the appropriate staff member—all while maintaining HIPAA compliance and integrating seamlessly with existing practice management software.
              </p>
              <p className="mb-4">
                What makes AI receptionists particularly valuable is their availability. They work 24/7 without breaks, handling after-hours calls that would otherwise go to voicemail, capturing appointment requests when they occur rather than waiting for office hours, and reducing the morning phone rush by spreading scheduling throughout the day and night.
              </p>
              <p>
                Importantly, AI systems learn and improve over time. They recognize common patient questions, identify patterns in scheduling preferences, and adapt to the specific workflows of each practice. The result is a system that becomes more efficient the longer it operates, continuously refining its understanding of how to best serve both patients and staff.
              </p>
            </div>
          </section>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 animate-fade-up">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Within three months of implementing an AI receptionist, our practice saw a 40% reduction in missed appointments, a 35% decrease in average patient hold times, and our staff reported significantly lower stress levels. It's been transformative."
            </p>
            <footer className="text-[var(--color-muted)] text-sm mt-4 not-italic">
              — Dr. Sarah Mitchell, Family Medicine Practice Director
            </footer>
          </blockquote>

          {/* Section 3 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Measurable Benefits for Medical Practices
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-4">
                The impact of AI receptionists extends far beyond simply answering phones. Practices implementing these systems report significant, measurable improvements across multiple operational metrics.
              </p>
              <p className="mb-4">
                <strong>Reduced No-Show Rates:</strong> Automated appointment reminders sent via text, email, and voice dramatically decrease no-shows. When patients can easily confirm, reschedule, or cancel appointments through conversational AI, practices see no-show rates drop by 25-45%, directly improving revenue and schedule efficiency.
              </p>
              <p className="mb-4">
                <strong>Increased Patient Satisfaction:</strong> Patients appreciate immediate responses rather than voicemail, the ability to schedule appointments outside business hours, reduced wait times when they call, and consistent, accurate information. Satisfaction scores typically improve within weeks of implementation.
              </p>
              <p className="mb-4">
                <strong>Cost Efficiency:</strong> While AI systems require initial investment, they typically cost significantly less than hiring additional full-time staff, require no benefits or paid time off, eliminate overtime expenses during busy periods, and scale instantly during high-volume times without additional cost.
              </p>
              <p className="mb-4">
                <strong>Staff Empowerment:</strong> Perhaps the most overlooked benefit is the impact on existing staff. When routine tasks are automated, front desk personnel can focus on complex patient needs, provide more personalized service for in-office patients, reduce stress from constant phone interruptions, and engage in higher-value activities like patient education and care coordination.
              </p>
              <p>
                Healthcare providers also benefit directly. With fewer administrative interruptions, they can maintain better focus during patient visits, spend less time on scheduling conflicts and routine questions, and dedicate more energy to clinical decision-making and patient relationships.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Addressing Common Concerns
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-4">
                Despite clear benefits, some practices hesitate to implement AI receptionists due to understandable concerns. Let's address the most common ones directly.
              </p>
              <p className="mb-4">
                <strong>Will patients feel frustrated talking to AI?</strong> Modern AI systems are remarkably conversational and natural. When implemented well, many patients don't initially realize they're interacting with AI—and when they do, they appreciate the efficiency and availability. Critically, AI systems know their limitations and seamlessly transfer complex or sensitive calls to human staff when needed.
              </p>
              <p className="mb-4">
                <strong>What about patient privacy?</strong> HIPAA compliance is built into reputable AI receptionist platforms from the ground up. These systems use encrypted communications, maintain detailed audit trails, limit data access according to strict protocols, and undergo regular security assessments. In many cases, they're more secure than paper-based or loosely controlled digital systems.
              </p>
              <p className="mb-4">
                <strong>Will this replace our staff?</strong> AI receptionists augment rather than replace human staff. They handle routine tasks so your team can focus on work that truly requires human judgment, empathy, and expertise. Most practices find they can better utilize existing staff rather than needing layoffs.
              </p>
              <p>
                <strong>Is it difficult to implement?</strong> Modern AI receptionist platforms are designed for healthcare settings and integrate with common practice management systems. Implementation typically takes weeks, not months, and reputable providers offer comprehensive training and ongoing support.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              Practical Steps for Getting Started
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-6">
                If your practice is considering an AI receptionist, here's a strategic approach to implementation:
              </p>
              
              <div className="space-y-4 ml-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Assess your current workflow:</strong> Identify which administrative tasks consume the most staff time and cause the most patient frustration. These are your prime candidates for automation.</p>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Research HIPAA-compliant platforms:</strong> Look for providers with healthcare-specific experience, integration with your existing practice management software, transparent security practices and certifications, and demonstrated results from similar practices.</p>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Start with a pilot program:</strong> Begin with one or two specific functions—appointment scheduling or after-hours calls, for example—before expanding to full implementation.</p>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Communicate with patients:</strong> Let patients know about the new system through waiting room signage, website updates, and appointment reminder messages. Frame it as an improvement in service availability.</p>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Train your staff:</strong> Ensure your team understands how the AI system works, when it will transfer calls to them, and how to handle the transition from AI to human interaction smoothly.</p>
                </div>
                
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p><strong>Monitor and optimize:</strong> Track key metrics like call resolution rates, patient satisfaction scores, no-show rates, and staff feedback. Use this data to continuously refine the system's performance.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
              The Future of Patient-Centered Care
            </h2>
            <div className="text-[var(--color-ink)] leading-loose">
              <p className="mb-4">
                AI receptionists represent more than just technological efficiency—they're enabling a fundamental shift toward truly patient-centered care. When administrative burden decreases, healthcare providers can return their focus to what brought them into medicine: helping people heal.
              </p>
              <p className="mb-4">
                Patients benefit from more responsive service, easier access to appointments, reduced wait times, and staff who have time for meaningful interactions. Healthcare providers benefit from fewer interruptions, better schedule management, and the ability to see patients when they're most available—not just during traditional office hours.
              </p>
              <p className="mb-4">
                As these systems continue to evolve, we can expect even more sophisticated capabilities: predictive scheduling that anticipates patient needs, intelligent triage that assesses symptom urgency, seamless integration with telemedicine platforms, and proactive outreach for preventive care and chronic disease management.
              </p>
              <p>
                The practices that adopt these technologies now aren't just improving their operational efficiency—they're positioning themselves at the forefront of modern, patient-centered healthcare delivery. They're demonstrating that technology and human compassion aren't opposing forces, but complementary tools in service of better care.
              </p>
            </div>
          </section>

          {/* Closing CTA */}
          <div className="bg-[var(--color-light)] rounded-2xl p-8 mt-12 animate-fade-up">
            <p className="text-[var(--color-ink)] leading-loose text-lg">
              If your practice is struggling with administrative overload, patient access issues, or staff burnout, it may be time to explore how AI receptionists can transform your operations. The technology is proven, implementation is straightforward, and the benefits—for your patients, your staff, and your bottom line—are substantial and measurable.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Try MedReception Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based insights and practical guidance for modern healthcare practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Healthcare Technology</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  5 Signs Your Medical Practice Needs Better Front Desk Technology
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover the warning signs that indicate it's time to modernize your practice's administrative systems.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Practice Management</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Reducing Patient No-Shows: Strategies That Actually Work
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Evidence-based approaches to dramatically decrease missed appointments and improve practice revenue.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Care</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  HIPAA Compliance in the Age of AI: What Practices Need to Know
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Essential guidance for maintaining patient privacy and security when implementing automated systems.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4 animate-fade-up">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-up">
            Our team is here to help you transform your practice efficiency.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-up"
          >
            Contact Us Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}