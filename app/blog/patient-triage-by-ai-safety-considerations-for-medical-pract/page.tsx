import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Patient Triage by AI: Safety Considerations for Medical Practices | Try MedReception',
  description: 'Explore the critical safety considerations medical practices must address when implementing AI-powered patient triage systems. Evidence-based guidance for healthcare providers.',
  openGraph: {
    title: 'Patient Triage by AI: Safety Considerations for Medical Practices',
    description: 'Explore the critical safety considerations medical practices must address when implementing AI-powered patient triage systems.',
    url: 'https://trymedreception.com/blog/patient-triage-by-ai-safety-considerations-for-medical-pract',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00Z',
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
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
            <span className="mx-2">›</span>
            <span>Article</span>
          </div>

          {/* Category Tag */}
          <div className="text-xs uppercase tracking-widest text-white/70 mb-4 text-center">
            Patient Safety
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center mb-8">
            Patient Triage by AI: Safety Considerations for Medical Practices
          </h1>

          {/* Meta Info */}
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
          <div className="text-[var(--color-ink)] leading-loose text-lg mb-8">
            <p className="mb-6">
              When a patient calls your practice at 2 AM with chest pain, every second counts. Increasingly, artificial intelligence is being deployed to help medical practices prioritize these urgent calls, route patients appropriately, and ensure critical cases receive immediate attention. But as AI takes on this crucial gatekeeping role in healthcare, a pressing question emerges: How do we ensure these systems are safe enough to entrust with potentially life-or-death decisions?
            </p>
            <p>
              The promise of AI-powered triage is compelling—faster response times, consistent application of clinical protocols, and the ability to handle high call volumes without compromising quality. Yet the stakes couldn't be higher. A missed symptom, a misinterpreted complaint, or an algorithmic bias could result in delayed care for a patient in crisis. As medical practices navigate this technological frontier, understanding the safety considerations isn't just important—it's essential.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Understanding AI Triage Systems: What They Can and Cannot Do
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              AI triage systems use natural language processing and machine learning algorithms to analyze patient complaints, extract relevant symptoms, and assign urgency levels based on clinical protocols. These systems can process verbal descriptions, written messages, or structured questionnaires to determine whether a patient needs emergency care, same-day appointment, or routine scheduling.
            </p>
            <p className="mb-4">
              However, it's crucial to understand that current AI triage tools are decision support systems, not autonomous diagnosticians. They excel at pattern recognition and protocol application but lack the clinical judgment, contextual understanding, and intuitive reasoning that experienced healthcare providers bring to patient assessment. An AI might flag fever and cough as routine, but a seasoned nurse would probe further, recognizing subtle cues that indicate respiratory distress in an elderly patient with COPD.
            </p>
            <p>
              The most effective implementations use AI as a first-line screening tool that enhances—rather than replaces—human clinical oversight. Understanding this fundamental limitation is the first step in implementing AI triage safely.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Critical Safety Protocols for AI Triage Implementation
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-6">
              Implementing AI triage without robust safety protocols is like performing surgery without sterilizing instruments—the risk of harm is unacceptably high. Medical practices must establish multiple layers of safety measures:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Clinical validation before deployment:</strong> AI algorithms must be tested against thousands of real patient scenarios and validated by clinical experts to ensure accuracy across diverse patient populations and complaint types.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Human override capability:</strong> Every AI triage decision should be reviewable by a clinical staff member, with clear escalation pathways when the AI recommendation doesn't align with clinical judgment.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Fail-safe mechanisms:</strong> When AI systems encounter ambiguous situations or detect potentially life-threatening symptoms, they must default to the highest urgency level and immediately flag for human review.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Continuous monitoring and auditing:</strong> Regular reviews of AI triage decisions compared to actual patient outcomes help identify algorithm drift, emerging biases, or systemic errors before they cause harm.</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Staff training on AI limitations:</strong> Clinical teams must understand how AI triage systems work, their known limitations, and when to trust versus question AI recommendations.</p>
              </div>
            </div>
          </div>

          {/* Pull Quote */}
          <blockquote className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
            "The goal isn't to replace clinical judgment with artificial intelligence—it's to augment human expertise with powerful pattern recognition tools while maintaining the safety net of professional oversight."
          </blockquote>

          {/* Section 3 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Addressing Algorithmic Bias and Health Equity Concerns
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              One of the most insidious risks in AI triage systems is algorithmic bias—systematic errors that lead to different quality of care for different patient populations. AI systems learn from historical data, and if that data reflects existing healthcare disparities, the AI will perpetuate and potentially amplify those inequities.
            </p>
            <p className="mb-4">
              Research has demonstrated that AI systems trained primarily on data from certain demographic groups may perform poorly when assessing patients from underrepresented populations. Symptom descriptions, pain thresholds, and communication styles can vary across cultural contexts, and AI systems may misinterpret or undervalue complaints from patients whose presentation differs from the training data norm.
            </p>
            <p className="mb-6">
              Medical practices implementing AI triage must actively work to identify and mitigate bias:
            </p>
            <ul className="space-y-2 mb-6 ml-6">
              <li className="text-[var(--color-ink)]">• Demand transparency from AI vendors about training data diversity and bias testing methodologies</li>
              <li className="text-[var(--color-ink)]">• Conduct stratified outcome analyses to identify disparities in triage accuracy across patient demographics</li>
              <li className="text-[var(--color-ink)]">• Maintain cultural competency standards that complement AI assessment with human cultural awareness</li>
              <li className="text-[var(--color-ink)]">• Provide multiple access pathways (phone, text, language options) so AI triage doesn't create barriers to care</li>
            </ul>
            <p>
              Equity isn't just an ethical imperative—it's a safety requirement. An AI triage system that works well for some patients but fails others is fundamentally unsafe.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Liability and Regulatory Considerations
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              The legal landscape surrounding AI in healthcare remains evolving, but one principle is clear: medical practices cannot abdicate responsibility for patient safety by delegating triage to an algorithm. From a liability perspective, practices using AI triage systems must demonstrate that they exercised reasonable care in selecting, implementing, and monitoring these tools.
            </p>
            <p className="mb-4">
              This includes documenting clinical validation studies, maintaining records of AI decision-making processes, ensuring appropriate clinical oversight, and having clear policies for when and how AI recommendations are overridden. If an AI system misclassifies an urgent condition and the practice fails to catch the error, both the technology vendor and the healthcare provider may face liability.
            </p>
            <p className="mb-6">
              Additionally, AI triage systems must comply with HIPAA regulations for patient data protection, FDA guidance on clinical decision support software (when applicable), and state medical practice acts regarding delegation of clinical assessment functions. Some jurisdictions have specific requirements about informed consent—patients may need to be notified when AI is involved in their care decisions.
            </p>
            <p>
              Medical practices should work with legal counsel familiar with healthcare AI to develop appropriate policies, consent procedures, and liability mitigation strategies before implementing AI triage systems.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Patient Communication and Informed Consent
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              Transparency with patients about AI involvement in triage decisions is both an ethical obligation and a practical necessity for maintaining trust. Patients have the right to understand how decisions about their care urgency are being made, and research suggests that most patients appreciate transparency about AI use when it's accompanied by reassurance of clinical oversight.
            </p>
            <p className="mb-6">
              Effective patient communication about AI triage should include:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Clear disclosure on websites, intake forms, and during initial contact that AI assists with triage assessment</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Explanation that clinical staff review AI recommendations and make final decisions</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>An easy pathway for patients to request human-only assessment if they're uncomfortable with AI involvement</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Reassurance about data privacy and how patient information is used and protected</p>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Clear instructions that patients should always call 911 for life-threatening emergencies rather than relying on triage systems</p>
              </div>
            </div>
            <p>
              This transparency builds trust and helps patients become active participants in ensuring their own safety when interacting with AI triage systems.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">
            Building a Safety-First Implementation Strategy
          </h2>
          <div className="text-[var(--color-ink)] leading-loose text-base mb-8">
            <p className="mb-4">
              For medical practices considering AI triage systems, a phased, safety-focused implementation approach minimizes risk while maximizing potential benefits. Start with low-risk applications—perhaps using AI to assist with routine appointment scheduling decisions before expanding to more acute triage scenarios.
            </p>
            <p className="mb-4">
              Establish a multidisciplinary oversight committee that includes clinicians, IT staff, quality assurance professionals, and patient representatives. This team should define clear safety metrics, review adverse events, analyze system performance data, and make recommendations for algorithm adjustments or process improvements.
            </p>
            <p className="mb-6">
              Most importantly, cultivate a safety culture where staff feel empowered to question AI recommendations, report concerns, and prioritize patient safety over technological efficiency. The most dangerous scenario isn't AI making an error—it's humans becoming so reliant on AI that they stop exercising clinical judgment.
            </p>
            <p>
              When implemented thoughtfully with robust safety protocols, AI triage systems can enhance patient access, improve consistency, and support clinical staff. But the technology should always serve as a tool to enhance—never replace—the human expertise and compassionate judgment that lie at the heart of quality medical care.
            </p>
          </div>

          {/* Closing Paragraph */}
          <div className="text-[var(--color-ink)] leading-loose text-base mt-12 p-6 bg-[var(--color-cream)] rounded-lg">
            <p className="mb-4">
              <strong>The integration of AI into patient triage represents both tremendous opportunity and significant responsibility.</strong> As medical practices navigate this evolving landscape, prioritizing safety isn't about resisting innovation—it's about ensuring that technological advancement genuinely serves patient welfare.
            </p>
            <p>
              If your practice is considering AI triage systems or wants to evaluate the safety of existing implementations, professional guidance is essential. At Try MedReception, our team stays at the forefront of healthcare technology developments, helping practices implement innovative solutions without compromising patient safety. <Link href="/contact" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors underline">Contact our team</Link> to discuss how to approach AI integration with confidence and care.
            </p>
          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="bg-white pb-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[var(--color-cream)] rounded-2xl p-8 flex gap-6 items-start animate-fade-up">
            <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <div>
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Written by the Try MedReception Clinical Team</h3>
              <p className="text-[var(--color-muted)] text-sm mb-3">Board-certified providers specializing in Other Medical</p>
              <p className="text-[var(--color-ink)] leading-relaxed">
                Our clinical team combines extensive medical expertise with deep knowledge of healthcare technology and patient safety. We're committed to helping medical practices navigate the complexities of modern healthcare delivery while maintaining the highest standards of patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl text-[var(--color-ink)] mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Link href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg p-4 mb-4 inline-flex">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                HIPAA Compliance in Virtual Reception Systems
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Essential privacy and security considerations when implementing digital patient communication platforms in your practice.
              </p>
            </Link>

            {/* Article 2 */}
            <Link href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg p-4 mb-4 inline-flex">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Improving Patient Access Through Technology
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                How modern communication tools can reduce barriers to care and improve health equity in diverse patient populations.
              </p>
            </Link>

            {/* Article 3 */}
            <Link href="/blog" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up">
              <div className="bg-[var(--color-light)] rounded-lg p-4 mb-4 inline-flex">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h4 className="font-cormorant text-xl text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Quality Assurance in Medical Reception Services
              </h4>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Best practices for monitoring, evaluating, and continuously improving patient communication quality in your practice.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you implement safe, effective patient communication solutions.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:gap-3"
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