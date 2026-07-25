import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HIPAA Compliance for AI Medical Receptionists: What You Need to Know | Try MedReception',
  description: 'Understand HIPAA regulations for AI medical receptionists. Learn how healthcare practices ensure patient privacy and data security with automated front desk solutions.',
  keywords: 'HIPAA compliance, AI medical receptionist, patient privacy, healthcare data security, PHI protection, medical practice compliance',
  openGraph: {
    title: 'HIPAA Compliance for AI Medical Receptionists: What You Need to Know',
    description: 'Understand HIPAA regulations for AI medical receptionists. Learn how healthcare practices ensure patient privacy and data security with automated front desk solutions.',
    url: 'https://trymedreception.com/blog/hipaa-compliance-for-ai-medical-receptionists-what-you-need-to-know',
    type: 'article',
  },
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <div className="text-sm text-white/80 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:text-white transition-colors">Resources</a>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4">
            Healthcare Technology
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight mb-6">
            HIPAA Compliance for AI Medical Receptionists: What You Need to Know
          </h1>

          {/* Meta */}
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
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              As healthcare practices increasingly turn to artificial intelligence to streamline operations, one question surfaces repeatedly in consultation rooms and administrative offices alike: "How can we ensure patient privacy when using AI medical receptionists?" It's a question that keeps practice managers awake at night—and for good reason. The Health Insurance Portability and Accountability Act (HIPAA) isn't just regulatory red tape; it's the cornerstone of patient trust in an era where data breaches make daily headlines.
            </p>
            <p className="mb-6">
              If you're considering implementing an AI receptionist in your medical practice, understanding HIPAA compliance isn't optional—it's essential. The good news? With the right knowledge and safeguards, AI technology and patient privacy can coexist harmoniously. Let's explore what you need to know to protect your patients, your practice, and your peace of mind.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Understanding HIPAA in the Context of AI Technology
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              HIPAA was enacted in 1996, long before anyone imagined AI receptionists answering patient calls. Yet its core principles remain remarkably relevant: protecting Protected Health Information (PHI) from unauthorized access, use, or disclosure. PHI includes any information that can identify a patient—names, appointment dates, medical record numbers, even voice recordings from phone conversations.
            </p>
            <p className="mb-6">
              When an AI medical receptionist interacts with patients, it necessarily handles PHI. It schedules appointments (revealing when someone needs medical care), answers questions about services (indicating potential health concerns), and may even process insurance information. Under HIPAA, this makes the AI system—and the company providing it—a "business associate" of your practice, triggering specific compliance requirements.
            </p>
            <p className="mb-6">
              The HIPAA Security Rule mandates three types of safeguards for electronic PHI: administrative (policies and procedures), physical (facility and equipment security), and technical (technology-based protections). AI receptionist systems must address all three dimensions to achieve true compliance.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Critical HIPAA Requirements for AI Medical Receptionists
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Not all AI receptionist platforms are created equal when it comes to HIPAA compliance. Before implementing any system, your practice should verify these essential requirements:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Business Associate Agreement (BAA):</strong> This legally binding contract is non-negotiable. Any vendor handling PHI must sign a BAA that outlines their responsibilities for protecting patient data and their liability if a breach occurs.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>End-to-End Encryption:</strong> All patient data—whether in transit (being transmitted) or at rest (stored on servers)—must be encrypted using industry-standard protocols like AES-256 encryption.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Access Controls:</strong> The system must limit who can access PHI through unique user identifications, automatic logoffs, and role-based permissions that ensure staff only see information necessary for their job functions.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Audit Trails:</strong> HIPAA-compliant systems maintain detailed logs of who accessed what information and when, creating accountability and enabling breach investigations.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Data Minimization:</strong> The AI should only collect and process the minimum PHI necessary to perform its function—no more, no less.
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong>Secure Data Storage:</strong> Patient information must be stored on HIPAA-compliant servers, preferably in geographically distributed data centers with redundant backups and disaster recovery protocols.
                </div>
              </div>
            </div>
            <p className="mb-6">
              A reputable AI medical receptionist provider will not only meet these requirements but will be transparent about their compliance measures and willing to provide documentation upon request.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant animate-fade-up">
            "HIPAA compliance isn't just about avoiding fines—it's about honoring the trust patients place in your practice every time they share personal health information."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Common HIPAA Pitfalls with AI Receptionists (and How to Avoid Them)
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Even well-intentioned practices can stumble into compliance violations when implementing new technology. Here are the most common pitfalls we see—and how to sidestep them:
            </p>
            <p className="mb-4">
              <strong>Pitfall #1: Assuming "AI" automatically means "secure."</strong> Many AI platforms were designed for general business use, not healthcare. Just because a chatbot is sophisticated doesn't mean it's HIPAA-compliant. Always verify compliance certifications and never assume security based on marketing claims alone.
            </p>
            <p className="mb-4">
              <strong>Pitfall #2: Incomplete staff training.</strong> Your team needs to understand what PHI the AI system handles and how to use it properly. A secure system becomes vulnerable when staff inadvertently share login credentials or discuss patient information in earshot of the AI device without realizing it's recording.
            </p>
            <p className="mb-4">
              <strong>Pitfall #3: Neglecting to update your Notice of Privacy Practices.</strong> When you implement an AI receptionist, your practice's uses and disclosures of PHI change. Patients have a right to know how their information is being used, including automation and AI analysis.
            </p>
            <p className="mb-4">
              <strong>Pitfall #4: Overlooking vendor AI model training practices.</strong> Some AI companies improve their models by training on customer data—potentially exposing your patients' PHI to unauthorized uses. Ensure your BAA explicitly prohibits using your practice's data for AI training purposes.
            </p>
            <p className="mb-6">
              <strong>Pitfall #5: Failing to conduct a risk assessment.</strong> HIPAA requires periodic risk assessments when implementing new technologies that handle PHI. Document potential vulnerabilities and your mitigation strategies before going live with an AI receptionist.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            The Real-World Benefits of HIPAA-Compliant AI Receptionists
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              When implemented correctly, HIPAA-compliant AI receptionists offer security advantages that often exceed traditional staffing models. Unlike human receptionists who might accidentally leave patient records visible on a desk or discuss cases in the break room, properly configured AI systems provide consistent, rule-based privacy protection.
            </p>
            <p className="mb-6">
              These systems never forget to log out, never leave their workstation unsecured, and never succumb to social engineering attempts that exploit human psychology. They apply privacy rules uniformly to every interaction, eliminating the variability that comes with human fatigue or distraction.
            </p>
            <p className="mb-6">
              Moreover, the audit trails generated by AI systems provide unprecedented visibility into who accessed what information and when—making compliance audits significantly easier and breach investigations more conclusive. This transparency creates accountability that actually strengthens your overall security posture.
            </p>
            <p className="mb-6">
              Practices using compliant AI receptionists also report that patients appreciate the privacy of discussing sensitive topics with an AI during initial contact, particularly for mental health appointments or conditions carrying social stigma. The technology can provide a judgment-free first touchpoint while maintaining rigorous privacy standards.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Questions to Ask Before Choosing an AI Receptionist Provider
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              Selecting a HIPAA-compliant AI receptionist requires due diligence. Before signing any contract, ask potential vendors these critical questions:
            </p>
            <div className="space-y-4 my-6">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>Will you sign a Business Associate Agreement before we begin service?</div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>What specific encryption standards do you use for data in transit and at rest?</div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>Where is patient data physically stored, and what certifications do your data centers hold?</div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>Do you use our practice's patient data to train your AI models? If so, how is that data de-identified?</div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>What is your incident response procedure if a data breach occurs?</div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>Can you provide references from other healthcare practices using your system?</div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>What training and support do you provide to ensure our staff uses the system compliantly?</div>
              </div>
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>How do you handle patient requests to access, amend, or delete their information?</div>
              </div>
            </div>
            <p className="mb-6">
              Reputable vendors will answer these questions confidently and provide documentation. Evasive or vague responses should raise immediate red flags about their compliance readiness.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4 animate-fade-up">
            Looking Forward: The Future of AI and Patient Privacy
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8 animate-fade-up">
            <p className="mb-6">
              As AI technology evolves, so too will regulatory frameworks. The Office for Civil Rights (OCR), which enforces HIPAA, has signaled increased scrutiny of AI applications in healthcare. Recent guidance emphasizes that HIPAA's requirements apply regardless of the technology used—meaning practices can't hide behind "it's just AI" if violations occur.
            </p>
            <p className="mb-6">
              Forward-thinking practices are viewing HIPAA compliance not as a burden but as a competitive advantage. Patients increasingly care about data privacy, and demonstrating robust protection measures builds trust and differentiation in crowded healthcare markets.
            </p>
            <p className="mb-6">
              The integration of AI in healthcare is inevitable and, when done correctly, tremendously beneficial. By prioritizing HIPAA compliance from the outset, practices can harness AI's efficiency and accuracy while honoring their fundamental obligation to protect patient privacy.
            </p>
          </div>

          {/* Closing */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 pt-8 border-t border-[var(--color-border)] animate-fade-up">
            <p className="mb-6">
              Implementing an AI medical receptionist represents a significant opportunity to improve patient experience, reduce administrative burden, and enhance operational efficiency. But these benefits can only be realized on a foundation of rigorous privacy protection. HIPAA compliance isn't an obstacle to innovation—it's the framework that makes trustworthy innovation possible.
            </p>
            <p className="mb-6">
              If you're considering AI receptionist technology for your practice, take the time to evaluate vendors thoroughly, ask the hard questions, and insist on transparent compliance documentation. Your patients' trust—and your practice's reputation—depend on getting this right.
            </p>
            <p>
              <strong>Ready to explore HIPAA-compliant AI solutions for your practice?</strong> Our team specializes in helping healthcare providers navigate the complex intersection of technology and compliance. <a href="/contact" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">Contact us today</a> to discuss how we can support your practice's digital transformation while keeping patient privacy at the forefront.
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
                Board-certified providers specializing in Other Medical. Our team combines clinical expertise with technology insight to help practices navigate the evolving landscape of healthcare automation while maintaining the highest standards of patient care and privacy.
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
            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Security</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  5 Ways AI Receptionists Improve Patient Data Security
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Discover how modern AI systems provide security advantages over traditional front desk operations.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Compliance</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Understanding Business Associate Agreements for AI Technology
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  A practical guide to reviewing and negotiating BAAs with AI vendors in healthcare settings.
                </p>
              </div>
            </a>

            <a href="/blog" className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up">
              <div className="bg-gradient-to-br from-[var(--color-light)] to-[var(--color-cream)] p-8 flex items-center justify-center h-48">
                <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2">Training</div>
                <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  Staff Training Essentials for HIPAA-Compliant AI Implementation
                </h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  Key training topics to ensure your team uses AI receptionist technology safely and compliantly.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Our team is here to help you implement HIPAA-compliant AI solutions that protect patient privacy while transforming your practice operations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Schedule a Consultation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}