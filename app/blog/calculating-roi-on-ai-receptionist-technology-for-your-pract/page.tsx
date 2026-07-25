import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculating ROI on AI Receptionist Technology for Your Practice | Try MedReception',
  description: 'Learn how to measure the return on investment of AI receptionist technology in your medical practice. Evidence-based analysis of cost savings, efficiency gains, and patient satisfaction improvements.',
  keywords: 'AI receptionist ROI, medical practice efficiency, healthcare automation costs, AI receptionist benefits, practice management technology',
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

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Practice Management
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Calculating ROI on AI Receptionist Technology for Your Practice
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
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
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Every day, medical practice administrators face the same challenge: how to reduce operational costs while maintaining or improving patient care quality. When considering AI receptionist technology, the question isn't just "Can we afford it?" but rather "Can we afford not to implement it?" Understanding the true return on investment goes beyond simple cost comparison—it reveals how technology can transform your practice's efficiency, patient satisfaction, and bottom line.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For practice managers and healthcare administrators, calculating ROI on AI receptionist technology requires looking at multiple dimensions: direct cost savings, operational efficiency gains, revenue capture improvements, and patient experience enhancements. This comprehensive approach reveals the full value proposition and helps justify the investment to stakeholders.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding Direct Cost Savings
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The most straightforward ROI calculation begins with direct labor costs. Traditional front desk staffing requires salaries, benefits, payroll taxes, training expenses, and overhead costs that typically range from $35,000 to $50,000 per full-time employee annually. For practices requiring multiple receptionists to cover extended hours or high call volumes, these costs multiply quickly.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            AI receptionist technology operates at a fraction of these costs—typically $200 to $500 monthly depending on call volume and features. This represents savings of 85-95% compared to traditional staffing models. For a practice with two full-time receptionists, the annual savings can exceed $70,000, delivering ROI in the first few months of implementation.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Beyond salary savings, consider the elimination of costs associated with employee turnover, sick days, vacation coverage, and training new staff. The healthcare industry experiences receptionist turnover rates exceeding 30% annually, with each replacement costing an estimated $3,000 to $5,000 in recruitment and training expenses. AI technology eliminates these unpredictable costs entirely.
          </p>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Measuring Operational Efficiency Gains
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Efficiency improvements represent a significant but often overlooked component of ROI. AI receptionists handle multiple calls simultaneously, eliminating wait times and reducing abandoned calls. Industry studies show that 30-40% of callers hang up after waiting on hold for more than two minutes, representing lost appointment opportunities and revenue.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Consider these operational metrics when calculating efficiency ROI:
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 mb-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Call handling capacity:</strong> AI systems manage unlimited concurrent calls versus 1-2 for human receptionists</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>After-hours availability:</strong> 24/7 service without overtime costs or staffing challenges</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Appointment booking accuracy:</strong> Reduction in scheduling errors that lead to gaps or double-bookings</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Data entry consistency:</strong> Automated patient information capture reduces administrative errors and rework</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Staff redeployment:</strong> Existing staff can focus on higher-value patient care activities</span>
              </li>
            </ul>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Quantifying these improvements requires baseline measurement. Track your current call abandonment rate, average hold time, after-hours missed calls, and scheduling errors for one month. Post-implementation, these metrics typically show 60-80% improvement, translating to tangible revenue gains and patient satisfaction increases.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The true value of AI receptionist technology isn't just what you save—it's what you gain: recovered revenue from missed calls, improved patient retention, and staff time redirected to care delivery."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Capturing Lost Revenue Opportunities
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Perhaps the most significant ROI component is revenue capture—converting inquiries that would otherwise be lost into booked appointments and retained patients. Research indicates that medical practices miss 20-30% of inbound calls during business hours and virtually all after-hours inquiries without automated systems.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Calculate your potential recovered revenue with this framework: First, determine your average patient lifetime value (typically $1,500 to $5,000 depending on specialty). Next, estimate how many potential new patients call your practice monthly but don't successfully book appointments due to busy signals, long hold times, or after-hours calling.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For a practice receiving 300 calls monthly with a 25% abandonment rate, that represents 75 lost opportunities. If just 30% of those abandoned callers would have become patients (22 patients), and average lifetime value is $2,500, the monthly lost revenue exceeds $55,000. AI receptionist technology that captures even half of these lost opportunities generates $27,500 monthly—over $330,000 annually.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Additionally, consider no-show reduction. AI systems can send automated appointment reminders, confirm appointments, and facilitate easy rescheduling, reducing no-show rates by 20-40%. For a practice with 20 daily appointments and a 15% no-show rate, recovering just half of those missed appointments represents 1-2 additional billable visits daily—$500 to $1,000 in additional daily revenue.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Evaluating Patient Experience and Retention Impact
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Patient satisfaction improvements deliver long-term ROI through increased retention and referrals. Studies show that acquiring new patients costs 5-7 times more than retaining existing ones, making patient experience a critical financial metric.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            AI receptionist technology enhances patient experience through immediate response times, 24/7 availability, consistent service quality, and multilingual support capabilities. Patient satisfaction surveys consistently show that appointment scheduling convenience ranks among the top three factors influencing provider choice and loyalty.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Measure patient experience ROI by tracking Net Promoter Score (NPS) before and after implementation. Healthcare practices using AI receptionist technology report NPS increases of 15-25 points. This improvement correlates with a 5-10% increase in patient retention rates. For a practice with 2,000 active patients and $200 average annual revenue per patient, a 7% retention improvement generates $28,000 in additional annual revenue.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Furthermore, satisfied patients generate referrals. If each retained patient refers just 0.5 new patients annually, improved retention generates an additional 70 new patient referrals, worth $105,000 to $350,000 depending on lifetime value calculations.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Creating Your ROI Calculation Framework
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            To build a comprehensive ROI model for your practice, follow this systematic approach:
          </p>

          <div className="bg-[var(--color-cream)] rounded-xl p-6 mb-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Document baseline costs:</strong> Current receptionist salaries, benefits, training, turnover expenses, and opportunity costs</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Track current performance metrics:</strong> Call volume, abandonment rate, after-hours missed calls, average hold time, no-show rate</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Calculate patient lifetime value:</strong> Average annual revenue per patient multiplied by average retention years</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Project implementation costs:</strong> Monthly subscription, integration setup, staff training time, and transition period adjustments</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Estimate conservative improvements:</strong> Use conservative conversion rates (capturing 30-40% of previously missed opportunities) rather than optimistic projections</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[var(--color-ink)] leading-relaxed"><strong>Calculate monthly and annual ROI:</strong> Sum all savings and revenue gains, subtract implementation costs, and divide by investment</span>
              </li>
            </ul>
          </div>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Most practices achieve positive ROI within 2-4 months, with annual returns exceeding 300-500% when all factors are included. However, the calculation becomes more compelling over multiple years as retained patients generate continued revenue and operational efficiencies compound.
          </p>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Implementation Considerations and Timeline
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Understanding implementation timelines helps set realistic ROI expectations. Modern AI receptionist systems typically deploy within 2-4 weeks, including integration with existing practice management software, call routing configuration, and staff training.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Initial implementation costs are minimal—primarily staff time for system configuration and process adjustment. Most practices run AI receptionist technology alongside existing staff for 1-2 weeks to ensure smooth transition and build confidence before fully transitioning.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            During the transition period, monitor key performance indicators daily: call handling volume, appointment booking accuracy, patient feedback, and system response quality. This data validates your ROI projections and identifies areas for optimization.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Consider a phased approach for larger practices or those with complex workflows. Start with after-hours call management or appointment scheduling only, then expand to additional functions once initial success is demonstrated. This reduces implementation risk and builds organizational buy-in through proven results.
          </p>

          {/* Closing Section */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Making the Investment Decision
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The financial case for AI receptionist technology is compelling across practices of all sizes and specialties. Direct cost savings alone typically justify the investment, but the combination of efficiency gains, recovered revenue, and improved patient experience creates ROI that substantially exceeds traditional technology investments.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Beyond financial metrics, consider qualitative benefits: reduced staff stress and burnout, improved work-life balance for practice owners, scalability to accommodate growth, and competitive positioning in an increasingly technology-driven healthcare marketplace.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If you're evaluating AI receptionist technology for your practice, we encourage you to develop a customized ROI model using your specific operational data. The investment in thorough analysis pays dividends in confident decision-making and stakeholder support. Our team specializes in helping medical practices assess their unique situations and develop implementation strategies that maximize return on investment while maintaining the high-quality patient experience your practice is known for.
          </p>
        </div>
      </article>

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
              <p className="text-[var(--color-muted)] leading-relaxed">
                Board-certified providers specializing in Other Medical, dedicated to delivering evidence-based insights and practical guidance for healthcare practice management.
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
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">
                Key Metrics for Measuring Practice Efficiency
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Discover the essential performance indicators that reveal opportunities for operational improvement and cost reduction.
              </p>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">
                Improving Patient Satisfaction Through Technology
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Learn evidence-based strategies for enhancing patient experience while reducing administrative burden on your staff.
              </p>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg w-full h-48 mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2">
                Reducing No-Shows and Late Cancellations
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Practical approaches to minimizing appointment gaps and maximizing schedule utilization for improved revenue capture.
              </p>
            </a>
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
            Our team is here to help you calculate your practice's specific ROI and develop an implementation plan.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </main>
  )
}