import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Hidden Costs of Traditional Medical Answering Services | Try MedReception',
  description: 'Discover the overlooked expenses and inefficiencies of traditional medical answering services, from missed calls to patient dissatisfaction, and explore modern alternatives.',
  openGraph: {
    title: 'The Hidden Costs of Traditional Medical Answering Services',
    description: 'Discover the overlooked expenses and inefficiencies of traditional medical answering services, from missed calls to patient dissatisfaction, and explore modern alternatives.',
    url: 'https://trymedreception.com/blog/the-hidden-costs-of-traditional-medical-answering-services',
    type: 'article',
    publishedTime: '2024-01-15T08:00:00Z',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
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
            Practice Management
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            The Hidden Costs of Traditional Medical Answering Services
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
      <article className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {/* Opening Hook */}
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Every missed call represents more than just a ringing phone—it's a patient seeking care, a family member desperate for answers, or an emergency that demands immediate attention. For decades, medical practices have relied on traditional answering services to bridge the communication gap, yet many remain unaware of the true costs lurking beneath their monthly invoices.
            </p>
            <p className="mb-6">
              While the line-item charge on your billing statement might seem straightforward, the reality is far more complex. From lost patients and compromised care coordination to staff burnout and compliance risks, traditional medical answering services carry hidden expenses that can significantly impact your practice's bottom line and, more importantly, the quality of patient care you deliver.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Obvious Costs: What You're Already Paying
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Most medical practices are familiar with the direct costs of traditional answering services. These typically include per-minute charges ranging from $0.75 to $1.50, monthly minimums between $200 and $500, and additional fees for after-hours coverage. For a mid-sized practice handling 500 calls monthly, these visible costs can easily reach $1,500 to $3,000 per month.
            </p>
            <p className="mb-6">
              Setup fees, training costs for new staff members, and charges for special services like bilingual support or holiday coverage add to the baseline expense. Many practices budget for these predictable costs, incorporating them into their operational planning without looking deeper into what they're actually receiving in return.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Patient Acquisition Cost: Lost Opportunities
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Perhaps the most significant hidden cost is the one that never appears on any invoice: the patients you never acquire. Studies show that 30-40% of first-time callers to medical practices will not leave a voicemail if they reach an answering service instead of speaking with someone who can immediately schedule them. In today's competitive healthcare landscape, where patient acquisition costs can range from $150 to $300 per new patient, every lost call represents substantial revenue left on the table.
            </p>
            <p className="mb-6">
              Traditional answering services often lack the medical knowledge necessary to triage calls effectively, answer basic questions, or convey the unique value proposition of your practice. When a potential patient calls three practices and two offer immediate, knowledgeable assistance while yours routes them through a generic operator, the choice becomes clear—and it's not in your favor.
            </p>
            <p className="mb-6">
              Consider this: if your practice loses just five new patients per month due to answering service inadequacies, and each patient represents an average lifetime value of $2,500, you're looking at an annual opportunity cost of $150,000. This single hidden expense often exceeds the entire visible cost of the answering service itself.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The true cost of a medical answering service isn't measured in minutes—it's measured in patient relationships, missed opportunities, and the cumulative toll on your practice's reputation."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Staff Time and Productivity Drains
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              The inefficiencies of traditional answering services create a ripple effect throughout your practice. Each morning, administrative staff spend 30-60 minutes sorting through message slips, many of which contain incomplete information, illegible notes, or outdated callback numbers. Nurses and medical assistants waste additional time tracking down patients to clarify symptoms or gather information that should have been collected during the initial call.
            </p>
            <p className="mb-6">
              These interruptions fragment workflows and reduce productivity across your entire team. When a physician must stop mid-appointment to clarify an urgent message that was inadequately documented, both current and future patients suffer delays. Research indicates that medical practices lose an average of 2-3 staff hours daily to these communication inefficiencies—time that could be spent on patient care, practice development, or revenue-generating activities.
            </p>
            <p className="mb-6">
              At an average fully-loaded cost of $30 per hour for medical administrative staff, this translates to $15,000 to $22,500 annually in lost productivity—another hidden cost that traditional answering services impose on your practice.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Patient Satisfaction and Retention Impact
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              In an era where patient experience drives healthcare decisions and online reviews can make or break a practice, the quality of every patient interaction matters. Traditional answering services, staffed by operators handling calls for dozens of different businesses, cannot provide the personalized, medically-informed service that patients expect from their healthcare providers.
            </p>
            <p className="mb-6">
              When patients experience long hold times, multiple transfers, or operators unfamiliar with medical terminology and practice protocols, their satisfaction plummets. A single negative experience with your answering service can erase months of positive interactions with your clinical team. Studies show that 70% of patients who have a poor experience with a practice's phone system rate their overall satisfaction lower—even if the clinical care they received was excellent.
            </p>
            <p className="mb-6">
              The cost of patient attrition is staggering. Replacing an existing patient costs five times more than retaining one, and practices typically lose 10-15% of their patient base annually due to non-clinical factors like poor communication. If improved phone accessibility could reduce your attrition rate by just 3%, a 2,000-patient practice would retain 60 additional patients annually, representing $150,000 or more in preserved revenue.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Compliance and Liability Risks
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              HIPAA compliance requires that all entities handling protected health information implement appropriate safeguards. Traditional answering services present several compliance vulnerabilities: operators may discuss patient information in open call centers, message delivery systems may lack adequate encryption, and documentation of communications may be insufficient for legal and regulatory purposes.
            </p>
            <p className="mb-6">
              A single HIPAA violation can result in fines ranging from $100 to $50,000 per incident, with annual maximums reaching $1.5 million. Beyond financial penalties, breaches damage your practice's reputation and erode patient trust. The administrative burden of investigating potential violations, implementing corrective actions, and managing the aftermath diverts resources from patient care.
            </p>
            <p className="mb-6">
              Additionally, inadequate call documentation creates liability exposure. When an answering service operator fails to properly triage an urgent call or accurately relay critical information, the consequences can be medically and legally significant. Malpractice claims related to communication failures are increasingly common, and the defense costs alone can exceed $50,000—far more than any savings from choosing an economy answering service.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Technology Gap: Integration and Efficiency
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Modern medical practices operate on integrated technology platforms—electronic health records, practice management systems, patient portals, and communication tools that work together to streamline workflows. Traditional answering services exist outside this ecosystem, creating information silos and manual workarounds that undermine efficiency.
            </p>
            <p className="mb-6">
              Messages must be manually entered into your EHR, appointments require double-entry into both the answering service system and your practice management software, and patient information cannot flow seamlessly between platforms. These manual processes introduce errors, consume staff time, and prevent your practice from realizing the full benefits of your technology investments.
            </p>
            <p className="mb-6">
              The opportunity cost of technological misalignment is substantial. Practices that achieve full integration of their communication systems report 20-30% improvements in administrative efficiency and 15-25% increases in appointment scheduling rates. For a practice generating $2 million annually, these improvements could translate to $300,000 or more in additional revenue—dwarfing the cost difference between traditional and modern communication solutions.
            </p>
          </div>

          {/* Actionable Tips Section */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Calculating Your True Cost: A Framework
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              To understand what your answering service truly costs, consider these factors:
            </p>
            <div className="space-y-4 my-8">
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <strong>Direct Costs:</strong> Monthly fees, per-minute charges, setup costs, and additional service fees
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <strong>Lost Patient Acquisition:</strong> Percentage of missed new patient calls multiplied by patient lifetime value
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <strong>Staff Productivity:</strong> Hours spent clarifying messages and correcting errors multiplied by hourly labor costs
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <strong>Patient Retention:</strong> Percentage of patients lost due to communication issues multiplied by annual patient value
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <strong>Compliance Risk:</strong> Potential for HIPAA violations, documentation failures, and associated remediation costs
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <strong>Technology Integration:</strong> Manual data entry time and missed opportunities from lack of system integration
                </div>
              </div>
            </div>
            <p className="mb-6">
              For many practices, this comprehensive calculation reveals that hidden costs exceed visible expenses by a factor of three to five. A service with a $2,000 monthly invoice may actually cost $8,000 to $12,000 when all factors are considered.
            </p>
          </div>

          {/* Conclusion */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Moving Forward: Evaluating Your Options
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Understanding the true cost of your medical answering service is the first step toward making informed decisions about your practice's communication infrastructure. Modern alternatives—including AI-powered virtual receptionists, integrated call management platforms, and specialized medical communication services—offer solutions that address many of the hidden costs plaguing traditional services.
            </p>
            <p className="mb-6">
              The goal isn't necessarily to eliminate your answering service, but to ensure that whatever solution you choose aligns with your practice's values, supports your patient care objectives, and delivers genuine value that justifies its total cost. As healthcare continues to evolve and patient expectations rise, the communication choices you make today will shape your practice's success tomorrow.
            </p>
            <p className="mb-6">
              If you're questioning whether your current answering service truly serves your practice and your patients, you're asking the right question. The hidden costs are real, measurable, and significant—but they're also addressable with the right approach and the right partner.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <div className="bg-[var(--color-cream)] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 flex gap-6 items-start shadow-sm">
            <div className="flex-shrink-0">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Try MedReception Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Board-certified providers and healthcare operations specialists dedicated to helping medical practices optimize patient communication, improve operational efficiency, and deliver exceptional care experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Communication
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  How AI Receptionists Are Transforming Medical Practices
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Explore how artificial intelligence is revolutionizing patient communication and front-office operations in healthcare.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{animationDelay: '100ms'}}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Patient Experience
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  Improving Patient Satisfaction Through Better Call Management
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Discover proven strategies to enhance patient satisfaction scores by optimizing your practice's phone system.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up" style={{animationDelay: '200ms'}}>
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">
                  Compliance
                </div>
                <h4 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  HIPAA Compliance in Medical Communication Systems
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                  Essential guidelines for ensuring your patient communication channels meet federal privacy and security requirements.
                </p>
                <div className="text-[var(--color-accent)] text-sm font-medium flex items-center gap-2">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our team is here to help you optimize your practice's communication systems and reduce hidden costs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}