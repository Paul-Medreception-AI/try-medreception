import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Front Desk Staffing Crisis: Technology as Part of the Solution | Try MedReception',
  description: 'Medical practices face unprecedented staffing challenges at the front desk. Explore how technology solutions can help address shortages while maintaining quality patient care.',
  keywords: 'medical front desk staffing, healthcare staffing crisis, medical reception technology, healthcare automation, patient scheduling solutions',
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
            Healthcare Management
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight text-center mb-8">
            The Front Desk Staffing Crisis: Technology as Part of the Solution
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
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
              <span>Try MedReception Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Opening */}
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8 animate-fade-up">
            <p className="mb-6">
              It's 8:45 AM on a Monday morning. The phone is ringing off the hook. Three patients are standing at the window with questions. Two insurance verification calls are on hold. And your front desk receptionist just called in sick—again. If this scenario sounds familiar, you're not alone. Medical practices across the country are facing an unprecedented staffing crisis at the front desk, and it's affecting patient care, provider satisfaction, and practice profitability.
            </p>
            <p>
              The challenge isn't just about filling positions—it's about maintaining quality patient experiences while managing rising labor costs, burnout, and the increasing complexity of healthcare administration. While technology can't replace the human touch entirely, it's emerging as a critical part of the solution for practices struggling to keep their front offices running smoothly.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Understanding the Scope of the Problem
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-4">
              The healthcare staffing shortage isn't limited to clinical roles. Front desk positions have become increasingly difficult to fill and even harder to retain. According to recent healthcare workforce studies, administrative turnover rates in medical practices have climbed to 30-40% annually, with some practices experiencing even higher rates.
            </p>
            <p className="mb-4">
              Several factors contribute to this crisis:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Competitive job market:</strong> Other industries offer similar wages with less stress and more predictable hours</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Burnout and stress:</strong> Front desk staff face demanding patients, complex insurance issues, and constant multitasking</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Training challenges:</strong> New hires require significant training time, and practices lose that investment when employees leave quickly</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Increasing complexity:</strong> Healthcare administration has become more complicated with changing regulations, multiple insurance portals, and patient expectations for digital service</span>
              </li>
            </ul>
            <p>
              The impact extends beyond the front desk. When reception is understaffed, providers are interrupted more frequently, patient wait times increase, scheduling errors multiply, and revenue cycle management suffers from delayed insurance verification and coding issues.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            The Real Cost of Understaffing
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-4">
              When practices operate with inadequate front desk coverage, the costs accumulate quickly—and they're not always obvious on a balance sheet.
            </p>
            <p className="mb-4">
              <strong>Direct financial costs</strong> include overtime pay for remaining staff, temporary staffing agency fees, recruitment expenses, and lost revenue from scheduling gaps and billing delays. Many practices estimate that replacing a front desk employee costs 50-75% of their annual salary when factoring in recruitment, training, and lost productivity.
            </p>
            <p className="mb-4">
              <strong>Indirect costs</strong> may be even more significant: patient dissatisfaction leading to practice switches, provider burnout from administrative interruptions, decreased staff morale affecting the entire team, and compliance risks from rushed or inadequate documentation.
            </p>
            <p>
              One practice administrator described the cascade effect: "When we're short-staffed at the desk, everything falls apart. Patients get frustrated with long hold times. Our medical assistants get pulled away from clinical duties to answer phones. Providers stay late completing administrative tasks. It's not sustainable."
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
            "Technology should handle the routine and repetitive, freeing humans to focus on the complex and compassionate."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            How Technology Can Help Address Staffing Gaps
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-4">
              Technology isn't a complete replacement for front desk staff, but it can significantly reduce the burden on your team by automating routine tasks and providing 24/7 availability for basic patient needs.
            </p>
            <p className="mb-4">
              <strong>Automated appointment scheduling</strong> allows patients to book, reschedule, or cancel appointments online without calling the office. Modern systems can check real-time availability, send confirmation texts, and even handle basic rescheduling requests through conversational AI. This alone can eliminate 40-60% of routine phone calls.
            </p>
            <p className="mb-4">
              <strong>AI-powered phone systems</strong> can answer common questions, route calls appropriately, collect information before transferring to staff, and even handle prescription refill requests that don't require clinical judgment. These systems work after hours and during lunch breaks, ensuring patients can always reach your practice.
            </p>
            <p className="mb-4">
              <strong>Patient portals and messaging</strong> give patients self-service options for appointment requests, billing questions, form completion, and non-urgent clinical questions. When patients have convenient digital options, they're less likely to call for information they can access themselves.
            </p>
            <p>
              <strong>Automated reminders and follow-up</strong> systems reduce no-shows and eliminate the staff time previously spent making reminder calls. They can also automate post-visit follow-up, satisfaction surveys, and review requests.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Implementing Technology Without Losing the Human Touch
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-4">
              The goal isn't to eliminate human interaction—it's to make better use of your staff's time and skills. Patients still need and want human connection, especially when dealing with complex medical issues or emotional concerns.
            </p>
            <p className="mb-4">
              The most successful implementations follow a hybrid model: technology handles the routine and repetitive (appointment scheduling, basic information, reminders), while staff focus on complex situations (insurance complications, anxious patients, coordination of care, relationship building).
            </p>
            <p className="mb-4">
              When implementing new technology, consider these principles:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Always provide an easy option to reach a human when needed</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ensure technology is user-friendly for all patient demographics</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Train staff thoroughly so they're comfortable with new systems</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Communicate changes clearly to patients with multiple channels and support</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Monitor patient feedback and adjust based on their experience</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Making the Business Case for Technology Investment
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-4">
              Practice administrators and owners often hesitate to invest in front desk technology, concerned about costs and implementation complexity. However, the return on investment can be substantial when calculated correctly.
            </p>
            <p className="mb-4">
              Consider these potential savings and benefits:
            </p>
            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Reduced overtime costs:</strong> When routine tasks are automated, existing staff can manage workload within regular hours</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Lower recruitment costs:</strong> Better work-life balance improves retention, reducing turnover expenses</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Increased capacity:</strong> Same staff can manage higher patient volume with technology support</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Fewer no-shows:</strong> Automated reminders typically reduce no-shows by 20-30%, directly improving revenue</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Better patient satisfaction:</strong> 24/7 availability and shorter wait times improve patient experience and retention</span>
              </li>
            </ul>
            <p>
              Many practices find that technology investments pay for themselves within 6-12 months through a combination of these factors. More importantly, they create a more sustainable work environment that helps retain experienced staff and attract new talent.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Moving Forward: A Balanced Approach
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-4">
              The front desk staffing crisis won't resolve quickly, and practices need sustainable solutions now. Technology offers a practical way to maintain quality patient care while managing staffing challenges.
            </p>
            <p className="mb-4">
              The most successful practices adopt a balanced approach: investing in technology to handle routine tasks while recognizing that human staff remain essential for complex situations and relationship building. They view technology as a tool that empowers their team rather than replaces it.
            </p>
            <p className="mb-4">
              If your practice is struggling with front desk staffing, consider starting small. Implement one or two technologies that address your biggest pain points—perhaps automated appointment reminders or online scheduling. Measure the impact, gather feedback from staff and patients, and expand from there.
            </p>
            <p>
              The goal is to create a front office that runs smoothly even during staffing challenges, provides excellent patient experience, and offers your team a sustainable work environment. With the right combination of technology and human touch, that goal is achievable even in today's challenging healthcare landscape.
            </p>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Written by the Try MedReception Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers and healthcare administrators specializing in practice management and patient care optimization. Our team combines clinical expertise with real-world experience helping medical practices thrive.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center animate-fade-up">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            
            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Reducing Patient No-Shows: Strategies That Work
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Practical approaches to minimize missed appointments and optimize your schedule efficiency.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:underline">
                  Read Article →
                </span>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Improving Patient Communication in Your Practice
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Build stronger patient relationships through effective communication strategies and technology.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:underline">
                  Read Article →
                </span>
              </div>
            </Link>

            <Link href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div className="p-6">
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Healthcare Technology ROI: Measuring What Matters
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Learn how to evaluate technology investments and demonstrate value in your medical practice.
                </p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:underline">
                  Read Article →
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team is here to help you find the right solutions for your practice's staffing challenges.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span>Contact Our Team</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}