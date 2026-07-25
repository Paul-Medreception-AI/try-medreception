import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Patient Acquisition: First Impressions in the Digital Age | Try MedReception',
  description: 'Learn how digital-first experiences shape patient decisions and discover evidence-based strategies to create welcoming, trustworthy first impressions that convert prospects into long-term patients.',
  keywords: 'new patient acquisition, digital patient experience, healthcare marketing, patient first impressions, medical practice growth, online patient engagement, healthcare digital strategy',
  openGraph: {
    title: 'New Patient Acquisition: First Impressions in the Digital Age',
    description: 'Evidence-based strategies to create welcoming digital first impressions that convert prospects into long-term patients.',
    url: 'https://trymedreception.com/blog/new-patient-acquisition-first-impressions-in-the-digital-age',
    type: 'article',
    images: [
      {
        url: 'https://trymedreception.com/og-blog-patient-acquisition.jpg',
        width: 1200,
        height: 630,
        alt: 'New Patient Acquisition: First Impressions in the Digital Age',
      },
    ],
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
            Practice Growth
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            New Patient Acquisition: First Impressions in the Digital Age
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
            Before a prospective patient ever walks through your door, they've likely spent hours researching you online. They've read reviews, compared your website to competitors, and formed an opinion about your practice based entirely on digital interactions. In today's healthcare landscape, the first impression no longer happens in your waiting room—it happens on a smartphone screen at 11 PM.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            For medical practices, this fundamental shift presents both a challenge and an opportunity. The practices that thrive are those that recognize the digital experience as the new front door—and invest accordingly in making that first impression count. Let's explore the evidence behind digital-first patient acquisition and practical strategies to turn online visitors into loyal patients.
          </p>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The New Patient Journey Begins Online
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Research from the National Research Corporation shows that 77% of patients use search engines prior to booking an appointment, and 72% of patients read online reviews as their first step in finding a new healthcare provider. This digital-first behavior has fundamentally changed the patient acquisition funnel.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Unlike traditional marketing channels, digital touchpoints allow prospective patients to evaluate your practice on their own terms and timeline. They're comparing your online presence to competitors, reading about your approach to care, and forming judgments about whether your practice aligns with their needs—all before making contact.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This means your website, search presence, online reviews, and digital communication channels aren't supplementary marketing tools—they are the primary determinants of whether someone chooses your practice or moves on to the next option.
          </p>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            What Makes a Strong Digital First Impression
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Studies on user experience and healthcare website effectiveness reveal several critical factors that influence a prospective patient's decision to move forward with a practice. These elements work together to build trust, demonstrate competence, and reduce friction in the journey from visitor to scheduled patient.
          </p>

          <div className="my-8 space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-1">Mobile-Optimized Experience</h3>
                <p className="text-[var(--color-ink)] leading-loose text-base">Over 60% of healthcare searches occur on mobile devices. If your site isn't responsive, loads slowly, or requires excessive zooming and scrolling, you're losing patients before they ever learn about your services.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-1">Clear, Accessible Information</h3>
                <p className="text-[var(--color-ink)] leading-loose text-base">Patients want to know who you are, what services you offer, whether you accept their insurance, and how to schedule. This information should be immediately visible and easy to navigate—not buried under multiple clicks.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-1">Humanized Provider Profiles</h3>
                <p className="text-[var(--color-ink)] leading-loose text-base">Professional headshots, detailed bios, and information about your approach to care help prospective patients feel they're choosing a person, not just a facility. This human connection is especially important in healthcare decisions.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-ink)] mb-1">Streamlined Appointment Scheduling</h3>
                <p className="text-[var(--color-ink)] leading-loose text-base">Practices with online booking options see significantly higher conversion rates than those requiring phone calls during business hours. The easier you make it to schedule, the more patients will follow through.</p>
              </div>
            </div>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The practices that thrive are those that recognize the digital experience as the new front door—and invest accordingly in making that first impression count."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            The Role of Online Reviews and Reputation
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Online reviews have become one of the most influential factors in patient decision-making. According to Software Advice, 94% of patients use online reviews to evaluate healthcare providers, and practices with higher ratings see measurably higher appointment volumes.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            But reputation management isn't simply about accumulating five-star reviews. Prospective patients are savvy enough to recognize patterns—they look for authenticity, read both positive and negative feedback, and pay attention to how practices respond to criticism.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The most effective practices actively encourage satisfied patients to share their experiences, respond professionally and empathetically to negative reviews, and use feedback as a tool for continuous improvement. They understand that online reputation is an extension of patient care, not a separate marketing function.
          </p>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Speed and Responsiveness Matter
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            In the digital age, patience is in short supply. Research from Harvard Business Review shows that companies that respond to customer inquiries within an hour are seven times more likely to qualify leads than those who wait even two hours. This principle applies equally to healthcare.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            When a prospective patient fills out a contact form, sends an email, or leaves a voicemail, the speed of your response signals how much you value their time and business. Practices that implement automated acknowledgment messages, prioritize new patient inquiries, and aim for same-day responses see significantly higher conversion rates.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This doesn't mean every question must be answered instantly—but it does mean acknowledging receipt of inquiries quickly and setting clear expectations about when the prospective patient will hear back. In an era of instant communication, radio silence is interpreted as disinterest.
          </p>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Creating Continuity from Digital to In-Person
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The digital first impression is only the beginning. The true test of an effective patient acquisition strategy is whether the in-person experience lives up to the promises made online. Inconsistency between your digital presence and actual practice erodes trust and leads to patient attrition.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            This means ensuring your front desk staff understands the importance of new patient experiences, your intake processes are smooth and welcoming, and the atmosphere and quality of care reflect the professionalism and warmth conveyed in your online materials.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Consider the entire patient journey: from the first Google search to the follow-up after their initial appointment. Each touchpoint should reinforce the message that your practice is organized, caring, and committed to excellent patient experiences.
          </p>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Practical Steps to Improve Your Digital First Impression
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            Enhancing your practice's digital presence doesn't require a massive budget or technical expertise. Many of the most impactful improvements are straightforward to implement and deliver measurable returns on investment.
          </p>

          <div className="my-8 space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Audit your online presence</strong> from a patient's perspective. Google your practice, navigate your website on a smartphone, read your reviews, and identify friction points in the patient journey.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Invest in professional photography</strong> and updated provider bios. Authenticity and professionalism aren't mutually exclusive—both are essential.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Implement online scheduling</strong> if you haven't already. Even a basic booking system dramatically improves conversion rates compared to phone-only scheduling.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Develop a review management strategy</strong> that includes requesting feedback from satisfied patients and responding thoughtfully to all reviews.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Create standard operating procedures</strong> for responding to new patient inquiries within specific time frames, and ensure all staff understand these expectations.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[var(--color-ink)] leading-loose text-base"><strong>Track your digital metrics</strong>—website traffic, conversion rates, time to first contact, and sources of new patients—so you can make data-informed improvements.</p>
              </div>
            </div>
          </div>

          {/* Closing Paragraph */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Moving Forward in the Digital Age
          </h2>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The shift to digital-first patient acquisition isn't a temporary trend—it represents a fundamental change in how people find, evaluate, and choose healthcare providers. Practices that adapt to this reality by creating strong digital first impressions, maintaining consistency across touchpoints, and prioritizing responsiveness will have a significant competitive advantage.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            The good news is that most improvements in digital patient acquisition don't require massive investments or technical expertise. They require a commitment to seeing your practice through your patients' eyes, removing friction from their journey, and ensuring that every digital touchpoint reflects the quality of care you provide in person.
          </p>

          <p className="text-[var(--color-ink)] leading-loose text-base mb-6">
            If your practice is ready to strengthen its digital presence and turn more online visitors into loyal patients, professional guidance can accelerate the process. The right partners can help you identify opportunities, implement proven strategies, and measure results—ensuring your first impressions convert into lasting patient relationships.
          </p>

        </div>
      </article>

      {/* Author Box */}
      <div className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="flex-shrink-0">
              <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Written by the Try MedReception Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm mb-3">Board-certified providers specializing in Other Medical</p>
              <p className="text-[var(--color-ink)] leading-relaxed text-sm">
                Our team of experienced healthcare professionals is dedicated to helping medical practices thrive through evidence-based strategies, patient-centered care approaches, and innovative practice management solutions.
              </p>
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
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Practice Management</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Optimizing Patient Communication for Better Outcomes
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how strategic communication practices improve patient satisfaction, adherence, and long-term health results.
                </p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Digital Strategy</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Building a Strong Online Presence for Your Practice
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Learn the essential elements of an effective digital presence that attracts and retains the right patients.
                </p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/blog" className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-12 flex items-center justify-center">
                <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-primary)] mb-2">Patient Experience</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Creating a Welcoming Environment for New Patients
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Practical strategies to ensure every new patient feels valued, heard, and confident in their choice of provider.
                </p>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you strengthen your practice's digital presence and create first impressions that convert.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>

    </main>
  )
}