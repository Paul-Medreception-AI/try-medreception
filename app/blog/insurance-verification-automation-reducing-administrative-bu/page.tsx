import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insurance Verification Automation: Reducing Administrative Burden | Try MedReception',
  description: 'Discover how insurance verification automation reduces administrative burden, improves accuracy, and frees up staff time in medical practices.',
  keywords: 'insurance verification automation, medical billing automation, healthcare administrative burden, eligibility verification, medical practice efficiency',
  openGraph: {
    title: 'Insurance Verification Automation: Reducing Administrative Burden',
    description: 'Learn how automation transforms insurance verification workflows and reduces staff workload.',
    url: 'https://trymedreception.com/blog/insurance-verification-automation-reducing-administrative-bu',
    type: 'article',
    publishedTime: '2025-01-15T09:00:00Z',
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
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>
          
          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Healthcare Operations
          </div>
          
          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Insurance Verification Automation: Reducing Administrative Burden
          </h1>
          
          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>January 15, 2025</span>
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="text-xl font-light leading-relaxed mb-6">
              Every day, medical practices across the country face the same frustrating reality: staff members spend hours on hold with insurance companies, manually verifying patient coverage, checking copays, and confirming benefits. This tedious, time-consuming process pulls valuable team members away from patient care and creates bottlenecks that slow down the entire practice. But what if there was a better way?
            </p>
            <p>
              Insurance verification automation is transforming how medical practices handle one of their most burdensome administrative tasks. By leveraging technology to streamline eligibility checks and benefit verification, practices are discovering they can reduce staff workload, improve accuracy, and create a better experience for both team members and patients. Let's explore how this technology works and why it's becoming essential for modern healthcare operations.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Hidden Cost of Manual Insurance Verification
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Manual insurance verification isn't just time-consuming—it's expensive. Studies show that administrative staff spend an average of 10-15 minutes per patient verifying insurance eligibility, checking deductibles, and confirming copayments. For a practice seeing 50 patients per day, that translates to 12-15 hours of staff time dedicated solely to insurance verification.
            </p>
            <p className="mb-4">
              Beyond the time investment, manual verification introduces significant risk for errors. Phone representatives may provide incorrect information, coverage details change without notice, and transcription mistakes lead to billing problems down the line. Research indicates that up to 30% of claim denials stem from eligibility and registration issues—many of which could be prevented with accurate, real-time verification.
            </p>
            <p>
              The financial impact extends beyond labor costs. When verification errors lead to denied claims, practices must invest additional resources in appeals and resubmissions. Patients receive unexpected bills, leading to satisfaction issues and collection challenges. The cumulative effect creates a cycle of inefficiency that drains both financial and human resources.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            How Insurance Verification Automation Works
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Insurance verification automation connects directly to payer systems through standardized electronic data interchange (EDI) transactions, specifically the 270/271 eligibility inquiry and response. When a patient schedules an appointment, the system automatically queries the insurance carrier to retrieve real-time eligibility information, benefit details, copayment amounts, and deductible status.
            </p>
            <p className="mb-4">
              Modern automation platforms integrate seamlessly with practice management systems and electronic health records, eliminating the need for duplicate data entry. The verification process happens in seconds rather than minutes, and results populate directly into the patient's account. Staff members receive clear, standardized reports showing coverage status, financial responsibility estimates, and any authorization requirements.
            </p>
            <p>
              Advanced systems go beyond basic eligibility checks. They can identify coverage changes, flag patients with inactive policies before their appointments, verify benefits for specific procedures, and even check for secondary insurance coverage. Automated alerts notify staff of issues requiring attention, allowing them to proactively address problems rather than discovering them at check-in.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Automation doesn't replace the human touch—it enhances it by freeing staff to focus on meaningful patient interactions rather than repetitive administrative tasks."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Measurable Benefits for Medical Practices
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Practices implementing insurance verification automation consistently report significant operational improvements. Time savings rank among the most immediate benefits—staff reclaim 8-10 hours per day previously spent on phone calls and manual lookups. This newfound capacity allows teams to focus on patient care, appointment scheduling, and other high-value activities that improve the overall practice experience.
            </p>
            <p className="mb-4">
              Accuracy improvements translate directly to financial performance. Automated systems reduce eligibility-related claim denials by 40-60%, accelerating revenue cycle performance and decreasing accounts receivable aging. Clean claims percentage increases, and practices see faster payment from payers due to fewer resubmissions and appeals.
            </p>
            <p className="mb-6">
              Patient satisfaction improves as well. Accurate upfront cost estimates reduce billing surprises, and faster check-in processes create a more professional experience. When staff aren't overwhelmed with verification calls, they have more time for patient questions and concerns, strengthening the therapeutic relationship that's central to quality care.
            </p>
            
            <div className="bg-[var(--color-cream)] rounded-xl p-6 my-6">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-4">Key Performance Improvements:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Time Savings:</strong> 10-15 hours per day recovered for higher-value activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Accuracy Boost:</strong> 40-60% reduction in eligibility-related denials</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Revenue Impact:</strong> Faster collections and improved cash flow</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Patient Experience:</strong> Reduced wait times and billing surprises</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Staff Satisfaction:</strong> Less repetitive work, more meaningful interactions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Overcoming Implementation Concerns
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Despite clear benefits, some practices hesitate to adopt automation due to concerns about cost, complexity, or disruption. However, modern verification solutions are designed with small to mid-sized practices in mind, offering cloud-based platforms that require minimal IT infrastructure and integrate easily with existing systems.
            </p>
            <p className="mb-4">
              Implementation timelines have shortened dramatically. Most practices complete setup and staff training within 2-4 weeks, with minimal disruption to daily operations. Vendors typically provide comprehensive onboarding support, training materials, and ongoing technical assistance to ensure smooth adoption.
            </p>
            <p className="mb-4">
              Cost concerns often dissolve when practices calculate their return on investment. The labor hours saved typically offset subscription fees within the first few months, while reduced claim denials and faster collections provide ongoing financial benefits. Many practices report that automation pays for itself several times over within the first year.
            </p>
            <p>
              Data security and HIPAA compliance are built into reputable verification platforms. Look for vendors that maintain SOC 2 certification, use encrypted data transmission, and undergo regular third-party security audits. These protections ensure patient information remains secure throughout the verification process.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Choosing the Right Automation Solution
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Not all insurance verification platforms offer the same capabilities or value. When evaluating solutions, prioritize integration capabilities with your existing practice management system and EHR. Seamless data flow eliminates duplicate entry and ensures verification results are accessible where staff need them.
            </p>
            <p className="mb-4">
              Consider payer coverage—the best platforms connect to hundreds of insurance carriers, including Medicare, Medicaid, and major commercial payers. Real-time verification is essential, as batch processing delays defeat the purpose of automation. Look for solutions that return results in seconds rather than hours.
            </p>
            <p className="mb-6">
              User experience matters significantly for staff adoption. Intuitive interfaces with clear, actionable information help team members trust and utilize the system effectively. Automated alerts for coverage issues, authorization requirements, or patient responsibility estimates guide staff through next steps without requiring extensive training.
            </p>
            
            <div className="bg-[var(--color-cream)] rounded-xl p-6 my-6">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-4">Essential Features to Seek:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Direct integration with your PM system and EHR</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Real-time verification with comprehensive payer coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Automated patient responsibility estimates and benefit details</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Intelligent alerts for coverage issues requiring attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Reporting and analytics to track performance improvements</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Robust security measures and HIPAA compliance certification</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Future of Administrative Efficiency
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Insurance verification automation represents just one piece of a larger transformation in healthcare administration. As technology continues to advance, we're seeing artificial intelligence enhance verification with predictive analytics—identifying patterns that suggest coverage changes before they occur and flagging high-risk claims before submission.
            </p>
            <p className="mb-4">
              Integration is expanding beyond verification into related processes like prior authorization, benefit investigation, and patient payment estimation. Comprehensive revenue cycle platforms are emerging that automate the entire financial workflow from scheduling through final payment, creating unprecedented efficiency gains.
            </p>
            <p className="mb-4">
              For medical practices, the question is no longer whether to adopt automation, but when and how. Early adopters are already experiencing competitive advantages through improved efficiency, higher staff satisfaction, and better patient experiences. As automation becomes standard practice, those without it will find themselves at a significant disadvantage in an increasingly competitive healthcare landscape.
            </p>
            <p>
              The administrative burden that has long plagued medical practices doesn't have to be permanent. With the right technology and implementation approach, practices can transform insurance verification from a time-consuming frustration into a streamlined, automated process that supports better care delivery and business performance.
            </p>
          </div>

          {/* Closing CTA */}
          <div className="bg-[var(--color-light)] rounded-xl p-8 mt-12 text-center">
            <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
              Ready to Reduce Your Administrative Burden?
            </h3>
            <p className="text-[var(--color-ink)] leading-relaxed mb-6">
              Our team specializes in helping medical practices implement automation solutions that deliver real results. We can help you evaluate options, plan implementation, and optimize your revenue cycle operations.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Schedule a Consultation
            </a>
          </div>

        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">
                Written by the Try MedReception Clinical Team
              </h3>
              <p className="text-[var(--color-muted)] text-sm mb-3">
                Board-certified providers specializing in Other Medical
              </p>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Our clinical team brings decades of combined experience in medical practice operations, healthcare technology, and revenue cycle management. We're committed to sharing evidence-based insights that help practices thrive in an evolving healthcare landscape.
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
            
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Revenue Cycle</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Reducing Claim Denials: A Comprehensive Guide for Medical Practices
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn proven strategies to minimize claim denials and accelerate your revenue cycle performance.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Practice Management</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Key Performance Metrics Every Medical Practice Should Track
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover which KPIs matter most for measuring and improving your practice's operational efficiency.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Experience</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Improving Patient Financial Communication: Best Practices
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Build trust and improve collections through transparent, empathetic financial conversations.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you transform your practice operations.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-xl"
          >
            Contact Us Today
          </a>
        </div>
      </section>

    </main>
  )
}