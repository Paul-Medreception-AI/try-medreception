import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Practice Growth Metrics: Leading Indicators from Communication Data | Try MedReception',
  description: 'Discover how to track and analyze communication data to predict practice growth, improve patient satisfaction, and make data-driven decisions for your medical practice.',
  keywords: 'practice growth metrics, medical practice analytics, communication data, patient satisfaction, practice management, leading indicators, healthcare metrics',
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="text-sm text-white/70 mb-6 text-center">
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
            Practice Growth Metrics: Leading Indicators from Communication Data
          </h1>

          {/* Meta */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span>Published January 2025</span>
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
          <p className="text-[var(--color-ink)] leading-loose text-lg mb-6">
            Every phone call, every appointment confirmation, and every patient inquiry contains valuable information about your practice's trajectory. Yet most medical practices treat these interactions as transactional moments rather than strategic data points. The truth is, your communication data holds powerful leading indicators—early warning signs and growth signals that can predict your practice's future months before traditional metrics like revenue or patient volume reveal trends.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            While most practices focus exclusively on lagging indicators like monthly revenue or year-over-year patient counts, forward-thinking practices are discovering that communication patterns offer something far more valuable: the ability to see around corners. Understanding and tracking these leading indicators transforms reactive management into proactive strategy, allowing you to address challenges before they become crises and capitalize on opportunities while competitors are still analyzing last quarter's numbers.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Why Communication Data Matters More Than You Think
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Communication data represents the earliest point of contact in your patient journey—the moment when someone decides whether to engage with your practice or look elsewhere. Unlike financial metrics that report on decisions already made, communication patterns reveal decision-making in real time.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Consider this: when a potential patient calls your practice and experiences a long hold time, gets transferred multiple times, or reaches voicemail during business hours, that negative experience precedes—and often prevents—an appointment booking. Traditional metrics won't capture this lost opportunity. You'll never see a record of "almost-patients" who chose competitors after poor phone experiences. But communication data reveals these invisible losses before they impact your bottom line.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research consistently shows that 75% of patients consider phone accessibility a critical factor in choosing a healthcare provider. Furthermore, studies indicate that practices lose up to 30% of potential new patients due to communication failures—missed calls, slow response times, or difficulty scheduling appointments. These aren't minor operational hiccups; they're significant revenue leaks that communication metrics can identify and help you address.
          </p>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "Communication patterns are the canary in the coal mine for practice health—they signal opportunities and challenges months before they appear in financial reports."
          </blockquote>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Key Leading Indicators to Track
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Not all communication metrics are created equal. Leading indicators—those that predict future performance—differ fundamentally from lagging indicators that simply report past results. Here are the most powerful leading indicators your practice should monitor:
          </p>

          <div className="space-y-6 my-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">First-Call Resolution Rate</h3>
                <p className="text-[var(--color-ink)] leading-loose text-base">The percentage of calls where patient needs are fully addressed without callbacks or transfers. High rates correlate strongly with patient satisfaction and retention. When this metric declines, patient churn typically follows within 60-90 days.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">Speed to Answer</h3>
                <p className="text-[var(--color-ink)] leading-loose text-base">Average time before a live person answers incoming calls. Data shows that answer times over 60 seconds result in 35% higher abandonment rates. This metric predicts new patient acquisition rates with remarkable accuracy.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">Appointment Request to Booking Conversion</h3>
                <p className="text-[var(--color-ink)] leading-loose text-base">The percentage of scheduling inquiries that result in confirmed appointments. This reveals friction in your booking process and directly predicts schedule fill rates weeks in advance.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">After-Hours Contact Attempts</h3>
                <p className="text-[var(--color-ink)] leading-loose text-base">Volume and timing of calls, messages, or portal inquiries outside business hours. Rising after-hours contact attempts often signal growing demand or scheduling constraints that will impact capacity within 30-45 days.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">Referral Source Communication Patterns</h3>
                <p className="text-[var(--color-ink)] leading-loose text-base">How patients learned about your practice when they first contact you. Tracking referral source trends helps predict which marketing channels will drive growth and which are declining before you've spent next quarter's budget.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-2">Patient-Initiated Contact Frequency</h3>
                <p className="text-[var(--color-ink)] leading-loose text-base">How often existing patients reach out between appointments. Declining contact frequency often precedes patient attrition, while increasing frequency may indicate growing needs you can address with expanded services.</p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Turning Data Into Actionable Intelligence
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Collecting communication data accomplishes nothing without analysis and action. The most successful practices establish regular review cycles—weekly for operational metrics, monthly for trends, quarterly for strategic planning—where stakeholders examine communication data alongside traditional business metrics.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Start by establishing baseline measurements for each key indicator. Your practice's "normal" will differ from others based on specialty, location, and patient population. Track these baselines for at least 30 days to understand typical patterns, including day-of-week and time-of-day variations.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Once you understand your baseline, set thresholds for action. For example: "If speed-to-answer exceeds 90 seconds for three consecutive days, we'll evaluate staffing levels and call routing." Or: "If appointment request conversion falls below 75% for one week, we'll review scheduling availability and booking processes." These predetermined triggers prevent reactive crisis management and enable proactive problem-solving.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Consider implementing dashboard reporting that visualizes trends over time. Seeing that first-call resolution has declined from 85% to 72% over six weeks tells a much more compelling story than individual daily numbers. Visualization helps identify patterns that raw data might obscure.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Common Communication Patterns That Signal Growth Opportunities
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Certain communication patterns reliably indicate untapped growth potential. Learning to recognize these signals allows you to capitalize on opportunities competitors miss:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Increasing call volume with stable booking rates</strong> suggests demand is growing faster than your capacity to convert inquiries. This pattern often precedes schedule congestion and increased patient frustration. The solution isn't necessarily hiring more clinical staff immediately; often, optimizing scheduling processes or extending booking access solves the problem at lower cost.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Rising after-hours contact attempts</strong> indicate patients struggling to reach you during standard hours—either because they work during your business hours or because your lines are consistently busy. This represents low-hanging fruit: extended phone coverage or callback systems can capture these patients without expanding clinical capacity.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Questions about specific services you don't emphasize</strong> reveal unmet demand. When multiple callers ask about particular treatments or specialties, even if those represent smaller parts of your practice, you've identified potential growth areas worth developing and marketing more aggressively.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Geographic patterns in new patient inquiries</strong> can guide expansion decisions. If you're receiving increasing calls from a particular neighborhood or suburb, that location-based demand might justify a satellite office or targeted marketing investment before competitors establish presence.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Warning Signs in Communication Data
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Just as communication patterns reveal opportunities, they also provide early warning of problems. Recognizing these signals early enables corrective action before damage becomes severe:
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Declining callback request follow-through</strong>—when patients request callbacks but don't answer or reschedule when you return calls—often indicates they've already found care elsewhere. This pattern suggests your competitors are more accessible, signaling an urgent need to improve responsiveness.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Increasing billing or insurance inquiries</strong> may indicate confusion about costs or insurance acceptance. Left unaddressed, this confusion creates friction that deters new patients and frustrates existing ones. Clear proactive communication about financial policies can prevent this problem from escalating.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Rising complaint or concern calls</strong> represent your most valuable feedback, even though they're uncomfortable. Track complaint themes systematically—specific staff members, particular processes, certain times of day. These patterns identify fixable problems before they damage your reputation publicly through online reviews.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            <strong>Declining new patient inquiry volume</strong> predicts revenue decreases 60-90 days out. When new patient calls drop, investigate immediately: Has a competitor opened nearby? Has your search ranking declined? Are your phones forwarding correctly? Early detection allows time for corrective marketing or operational adjustments.
          </p>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Implementing Communication Analytics in Your Practice
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            You don't need sophisticated technology to begin tracking communication metrics. Start with basic call logs, noting volume, duration, and outcomes. Even simple spreadsheet tracking reveals patterns over time.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            As you develop comfort with communication analytics, consider tools that automate data collection. Modern phone systems offer built-in analytics. Patient communication platforms track digital interactions. Automated systems eliminate manual tracking burden while providing more comprehensive data.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The most important element isn't the sophistication of your tools—it's consistency of measurement and commitment to acting on insights. A simple system used consistently outperforms complex analytics that generate reports no one reads or acts upon.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Assign responsibility for monitoring communication metrics to specific team members. Without clear ownership, data collection becomes sporadic and insights go unnoticed. Schedule regular review meetings where the team examines trends, discusses implications, and agrees on action items.
          </p>

          {/* Practical Tips Section */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Steps to Get Started
          </h2>

          <div className="bg-[var(--color-cream)] rounded-xl p-8 my-8">
            <div className="space-y-4">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Begin with three core metrics: speed to answer, first-call resolution, and appointment booking conversion. Master these before expanding to additional indicators.</p>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Establish 30-day baseline measurements before making changes, so you can accurately assess impact of improvements.</p>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Create simple weekly scorecards that track trends visually—arrows indicating improvement or decline are more actionable than raw numbers alone.</p>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Schedule brief weekly team huddles to review communication metrics and identify one improvement focus for the coming week.</p>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Compare communication metrics to business outcomes quarterly—track how changes in communication patterns preceded changes in patient volume, revenue, or satisfaction scores.</p>
              </div>

              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[var(--color-ink)] leading-relaxed">Celebrate improvements publicly with your team—when communication metrics improve, recognize the staff members whose efforts drove results.</p>
              </div>
            </div>
          </div>

          {/* Closing */}
          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Communication data offers a window into your practice's future that traditional metrics cannot provide. By treating every call, message, and inquiry as both a service moment and a data point, you gain predictive insights that enable proactive management rather than reactive firefighting.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The practices that thrive in increasingly competitive healthcare markets aren't necessarily those with the most advanced clinical capabilities—they're practices that consistently deliver excellent patient experiences from the very first point of contact. Communication analytics helps you measure, understand, and optimize that critical first impression while identifying growth opportunities and operational challenges early enough to address them strategically.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If your practice is ready to transform communication data into strategic advantage, or if you're struggling with phone accessibility and patient communication challenges, professional support can accelerate your progress. Specialized communication solutions can capture, analyze, and help you act on the insights hidden in your daily patient interactions.
          </p>

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
              <p className="text-[var(--color-muted)] leading-relaxed">Board-certified providers specializing in Other Medical, dedicated to helping practices optimize patient communication and operational excellence.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Practice Management</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Understanding Patient Communication Analytics</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">Learn how to interpret communication data to improve patient satisfaction and operational efficiency.</p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Patient Experience</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">The ROI of Excellent Phone Accessibility</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">Discover how improving phone accessibility directly impacts patient acquisition and practice revenue.</p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)] opacity-50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">Operations</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">Building Data-Driven Practice Management Systems</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">Transform operational data into strategic insights for sustainable practice growth and efficiency.</p>
                <span className="text-[var(--color-accent)] text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is here to help you optimize your practice communication and unlock growth insights.</p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--color-cream)] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </section>

    </main>
  )
}