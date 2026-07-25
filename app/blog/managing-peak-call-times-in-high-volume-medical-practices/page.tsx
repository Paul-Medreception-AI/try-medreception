import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Managing Peak Call Times in High-Volume Medical Practices | Try MedReception',
  description: 'Learn effective strategies for managing high call volumes during peak times in medical practices. Expert insights on staffing, technology, and patient communication.',
  keywords: 'medical practice management, call volume management, peak call times, medical reception, patient communication, healthcare operations',
  openGraph: {
    title: 'Managing Peak Call Times in High-Volume Medical Practices',
    description: 'Learn effective strategies for managing high call volumes during peak times in medical practices.',
    url: 'https://trymedreception.com/blog/managing-peak-call-times-in-high-volume-medical-practices',
    type: 'article',
    publishedTime: '2024-01-15T09:00:00Z',
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

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Practice Management
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            Managing Peak Call Times in High-Volume Medical Practices
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70">
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
              It's 8:30 AM on a Monday morning. Your phone lines are already lighting up like a switchboard from the 1950s. Patients are calling to schedule appointments, ask about test results, request prescription refills, and inquire about billing. Your reception staff is overwhelmed, hold times are stretching beyond acceptable limits, and you know that somewhere in that queue is a patient with a genuinely urgent concern who can't get through.
            </p>
            <p className="mb-6">
              If this scenario sounds familiar, you're not alone. High-volume medical practices across the country face this challenge daily. Peak call times can create bottlenecks that frustrate patients, stress staff, and potentially compromise care quality. But with the right strategies and systems in place, you can transform chaos into coordination.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Understanding Peak Call Patterns
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8 animate-fade-up">
            <p className="mb-4">
              The first step in managing peak call times is understanding when and why they occur. Most medical practices experience predictable patterns:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Monday mornings (8:00-10:00 AM)</strong> — Patients calling after weekend symptoms or to schedule appointments for the week</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Lunch hours (12:00-1:00 PM)</strong> — Working patients calling during their break</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Post-appointment rushes</strong> — Patients calling with follow-up questions after morning or afternoon clinic sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Seasonal spikes</strong> — Flu season, allergy season, or back-to-school periods</span>
              </li>
            </ul>
            <p className="mb-4">
              Track your call data for at least two months to identify your practice's specific patterns. Most phone systems can generate reports showing call volume by day, hour, and even call type. This data becomes the foundation for all your optimization efforts.
            </p>
          </div>

          {/* Pull Quote */}
          <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 animate-fade-up">
            <p className="text-[var(--color-ink)] italic text-xl font-cormorant">
              "Effective call management isn't about answering every call instantly — it's about ensuring every patient receives appropriate, timely assistance while maintaining staff wellbeing and practice efficiency."
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Strategic Staffing Solutions
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8 animate-fade-up">
            <p className="mb-4">
              Once you understand your call patterns, align your staffing accordingly. This doesn't necessarily mean hiring more full-time staff — it means deploying your team strategically:
            </p>
            <p className="mb-4">
              <strong>Staggered schedules:</strong> Instead of having all reception staff arrive at 8:00 AM, stagger start times. Have your first shift begin at 7:30 AM to handle early callers, with additional staff starting at 8:30 AM to handle the peak, and a later shift beginning at 10:00 AM to cover through closing and catch up on administrative tasks.
            </p>
            <p className="mb-4">
              <strong>Cross-training:</strong> Train clinical staff to handle basic reception duties during extreme peaks. A medical assistant who can verify insurance or schedule routine follow-ups can be invaluable during Monday morning rushes.
            </p>
            <p className="mb-4">
              <strong>Dedicated triage lines:</strong> Assign at least one staff member specifically to handle potential urgent calls during peak times. This ensures that time-sensitive medical concerns don't get lost in the scheduling queue.
            </p>
            <p className="mb-4">
              <strong>Virtual reception support:</strong> Consider partnering with professional medical reception services that can handle overflow during peak times or provide after-hours coverage. This hybrid approach gives you flexibility without the overhead of additional full-time employees.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Technology as a Force Multiplier
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8 animate-fade-up">
            <p className="mb-4">
              Modern technology can dramatically reduce call volume while improving patient satisfaction. The key is implementing systems that genuinely help patients rather than creating frustrating barriers:
            </p>
            <p className="mb-4">
              <strong>Patient portals:</strong> A well-designed portal allows patients to schedule appointments, request prescription refills, view test results, and message providers — all without picking up the phone. Studies show that practices with active patient portals see a 20-30% reduction in routine call volume.
            </p>
            <p className="mb-4">
              <strong>Online scheduling:</strong> Offering 24/7 online appointment booking not only reduces calls but also captures patients when it's convenient for them, potentially increasing your schedule fill rate.
            </p>
            <p className="mb-4">
              <strong>SMS appointment reminders:</strong> Text reminders with confirmation options reduce no-shows and eliminate confirmation calls. Include a link for rescheduling so patients can make changes without calling.
            </p>
            <p className="mb-4">
              <strong>Intelligent call routing:</strong> Modern phone systems can route calls based on reason (scheduling, billing, medical questions) and even offer callbacks when hold times exceed a certain threshold. Patients appreciate not having to wait on hold, and your staff can return calls during slower periods.
            </p>
            <p className="mb-4">
              <strong>AI-assisted scheduling:</strong> Some practices are now using AI chatbots that can handle routine scheduling through the practice website, integrating directly with the EHR system to offer real-time availability.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Process Optimization Strategies
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8 animate-fade-up">
            <p className="mb-4">
              Sometimes the solution isn't more staff or better technology — it's streamlining the processes themselves:
            </p>
            <p className="mb-4">
              <strong>Standardize call scripts:</strong> Develop clear protocols for common call types. When staff know exactly what information to collect for a new patient appointment versus an urgent care visit, calls move faster and more smoothly.
            </p>
            <p className="mb-4">
              <strong>Implement call-back policies:</strong> For non-urgent matters that require research (insurance questions, prior authorization status), take the patient's information and commit to calling back within a specific timeframe. This frees up the line for other callers and gives staff time to gather accurate information.
            </p>
            <p className="mb-4">
              <strong>Batch similar tasks:</strong> Dedicate specific times for returning patient calls, processing prescription refills, or handling administrative tasks. This allows staff to work more efficiently than constantly switching between tasks.
            </p>
            <p className="mb-4">
              <strong>Expand "self-service" options:</strong> Record detailed voicemail menu options for common questions (office hours, location, parking, fax number). Update your website FAQ section regularly based on common call topics.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Measuring Success and Continuous Improvement
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8 animate-fade-up">
            <p className="mb-4">
              Managing peak call times is not a "set it and forget it" challenge. Establish key performance indicators and review them regularly:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Average wait time</strong> — Target under 2 minutes during peak times</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Call abandonment rate</strong> — Percentage of callers who hang up before reaching staff</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>First-call resolution rate</strong> — How often issues are resolved without callbacks</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Staff satisfaction</strong> — Regular check-ins about workload and stress levels</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Patient feedback</strong> — Surveys about ease of reaching the office</span>
              </li>
            </ul>
            <p className="mb-4">
              Hold monthly team meetings to review these metrics, celebrate improvements, and brainstorm solutions to persistent challenges. Your front-line staff often have the best insights into what's working and what's not.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            The Human Element: Supporting Your Team
          </h2>
          <div className="text-[var(--color-ink)] leading-loose mb-8 animate-fade-up">
            <p className="mb-4">
              Even with perfect systems, managing high call volumes is stressful work. Support your reception team by:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Providing clear escalation protocols for difficult calls</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ensuring adequate break time, especially during peak periods</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Recognizing and rewarding excellent patient service</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Offering training in stress management and difficult conversation techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Creating a culture where it's okay to ask for help during overwhelming periods</span>
              </li>
            </ul>
            <p className="mb-4">
              Remember that your reception staff are often the first point of contact for anxious, frustrated, or ill patients. Supporting their wellbeing directly impacts patient experience and retention.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose mt-12 pt-8 border-t border-[var(--color-border)] animate-fade-up">
            <p className="mb-6">
              Managing peak call times in high-volume medical practices requires a multifaceted approach combining data analysis, strategic staffing, smart technology, streamlined processes, and genuine support for your team. No single solution will eliminate the challenge entirely, but a thoughtful combination of these strategies can transform overwhelming call volumes into manageable workflows.
            </p>
            <p className="mb-6">
              The practices that excel at call management share a common trait: they view every phone interaction as an opportunity to serve patients well, not as an interruption to be minimized. When you approach call management with that mindset, the improvements you make will benefit everyone — patients receive better service, staff experience less stress, and your practice operates more efficiently.
            </p>
            <p className="text-lg font-semibold">
              If your practice is struggling with overwhelming call volumes and you need expert support, Try MedReception offers professional medical reception services designed to seamlessly integrate with your team and systems. Our experienced staff can handle overflow during your peak times or provide comprehensive coverage, allowing your in-house team to focus on in-person patient care.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
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
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to improving patient access and practice efficiency through professional medical reception services.
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
            
            {/* Article 1 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Reducing No-Shows Through Better Patient Communication
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn proven strategies to decrease appointment no-shows and improve practice efficiency through effective communication.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-semibold flex items-center gap-2">
                  <span>Read More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Training Medical Reception Staff for Excellence
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Essential training protocols and best practices for building a world-class medical reception team.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-semibold flex items-center gap-2">
                  <span>Read More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Implementing Patient Portals for Better Access
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  How digital patient portals can reduce call volume while improving patient satisfaction and engagement.
                </p>
                <div className="text-[var(--color-primary)] text-sm font-semibold flex items-center gap-2">
                  <span>Read More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team is here to help you optimize your medical practice reception.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Contact Us Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}