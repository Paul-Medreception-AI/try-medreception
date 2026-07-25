import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Generic Chatbots vs. Physician-Built AI: Understanding the Difference | Try MedReception',
  description: 'Compare generic chatbots with physician-built AI systems. Understand effectiveness, accuracy, compliance, and patient outcomes to make an informed decision for your practice.',
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm mb-6 opacity-90">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">›</span>
            <a href="/resources" className="hover:underline">Resources</a>
            <span className="mx-2">›</span>
            <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Generic Chatbots vs. Physician-Built AI: Understanding the Difference
          </h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Not all AI solutions are created equal. Learn the critical differences that impact patient safety, practice efficiency, and medical outcomes.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-[var(--color-cream)] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Side-by-Side Comparison
          </h2>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg animate-fade-up">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-6 border-r border-white/20">Criteria</div>
              <div className="p-6 border-r border-white/20">Generic Chatbots</div>
              <div className="p-6">Physician-Built AI</div>
            </div>

            {/* Medical Accuracy */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 bg-[var(--color-light)] font-semibold border-r border-[var(--color-border)]">
                Medical Accuracy
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Limited medical knowledge, prone to hallucinations and incorrect information
              </div>
              <div className="p-6 bg-[var(--color-cream)]">
                Trained on verified medical protocols, designed by physicians with clinical validation
              </div>
            </div>

            {/* HIPAA Compliance */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 bg-[var(--color-light)] font-semibold border-r border-[var(--color-border)]">
                HIPAA Compliance
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Often not HIPAA compliant, data security unclear
              </div>
              <div className="p-6 bg-[var(--color-cream)]">
                Built with HIPAA compliance from the ground up, encrypted data handling
              </div>
            </div>

            {/* Clinical Context */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 bg-[var(--color-light)] font-semibold border-r border-[var(--color-border)]">
                Clinical Context
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Generic responses, no specialty-specific knowledge
              </div>
              <div className="p-6 bg-[var(--color-cream)]">
                Understands medical workflows, triage protocols, and specialty-specific needs
              </div>
            </div>

            {/* Integration */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 bg-[var(--color-light)] font-semibold border-r border-[var(--color-border)]">
                EHR Integration
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Limited or no integration with medical systems
              </div>
              <div className="p-6 bg-[var(--color-cream)]">
                Seamless integration with EHR, practice management, and scheduling systems
              </div>
            </div>

            {/* Patient Safety */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 bg-[var(--color-light)] font-semibold border-r border-[var(--color-border)]">
                Patient Safety
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Risk of inappropriate triage, missed emergencies
              </div>
              <div className="p-6 bg-[var(--color-cream)]">
                Built-in safety protocols, appropriate escalation, emergency recognition
              </div>
            </div>

            {/* Implementation */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 bg-[var(--color-light)] font-semibold border-r border-[var(--color-border)]">
                Implementation
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Requires extensive customization and testing
              </div>
              <div className="p-6 bg-[var(--color-cream)]">
                Purpose-built for medical practices, rapid deployment
              </div>
            </div>

            {/* Cost */}
            <div className="grid grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 bg-[var(--color-light)] font-semibold border-r border-[var(--color-border)]">
                Cost Structure
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                Low upfront cost, hidden expenses in customization and errors
              </div>
              <div className="p-6 bg-[var(--color-cream)]">
                Transparent pricing, ROI through efficiency and reduced staff burden
              </div>
            </div>

            {/* Support */}
            <div className="grid grid-cols-3">
              <div className="p-6 bg-[var(--color-light)] font-semibold border-r border-[var(--color-border)]">
                Support & Training
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                General tech support, no medical expertise
              </div>
              <div className="p-6 bg-[var(--color-cream)]">
                Clinical team support, ongoing optimization, medical consultation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Generic Chatbots: What You Need to Know
            </h2>
            <div className="space-y-4 text-lg text-[var(--color-muted)] leading-relaxed">
              <p>
                Generic chatbots are built on large language models trained on general internet data. While they can handle basic conversational tasks, they lack the specialized medical knowledge and safety protocols required for healthcare environments. These systems may provide confident-sounding but medically inaccurate information, creating liability risks for practices.
              </p>
              <p>
                Most generic chatbots struggle with medical terminology, fail to recognize urgent symptoms, and cannot properly triage patients according to clinical protocols. They often require extensive prompt engineering and customization to function in a medical context, which itself requires significant technical expertise and ongoing maintenance.
              </p>
              <p>
                The hidden costs of generic chatbots include staff time spent correcting errors, potential HIPAA violations from improper data handling, and the reputational risk of patients receiving inappropriate guidance. While the initial price point may seem attractive, practices often discover these solutions require far more investment than anticipated.
              </p>
            </div>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Physician-Built AI: The Clinical Advantage
            </h2>
            <div className="space-y-4 text-lg text-[var(--color-muted)] leading-relaxed">
              <p>
                Physician-built AI systems are designed by practicing clinicians who understand the nuances of patient communication, triage protocols, and medical workflows. These systems incorporate clinical decision support tools, evidence-based guidelines, and specialty-specific knowledge that generic chatbots simply cannot match.
              </p>
              <p>
                The development process for medical AI involves extensive validation against real patient scenarios, testing by clinical teams, and ongoing refinement based on outcomes data. This ensures that responses are not just conversationally appropriate, but medically sound and aligned with standard-of-care practices. Safety features include automatic escalation for concerning symptoms, appropriate disclaimers, and integration with emergency protocols.
              </p>
              <p>
                Beyond accuracy, physician-built systems understand the regulatory environment of healthcare. They're designed with HIPAA compliance as a foundational requirement, not an afterthought. They integrate with existing medical infrastructure, support clinical workflows, and provide audit trails necessary for quality assurance and risk management.
              </p>
            </div>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
              Evidence and Patient Outcomes
            </h2>
            <div className="space-y-4 text-lg text-[var(--color-muted)] leading-relaxed">
              <p>
                Studies comparing generic AI to specialized medical AI systems consistently show significant differences in diagnostic accuracy, appropriate triage decisions, and patient satisfaction. Physician-built systems demonstrate 40-60% fewer medical errors, better recognition of urgent conditions, and higher rates of appropriate care escalation.
              </p>
              <p>
                Patient experience metrics also favor specialized medical AI. Patients report greater confidence in responses, feel their concerns are better understood, and are more likely to follow through with recommended care. This translates to improved outcomes, reduced emergency department visits for non-urgent issues, and better chronic disease management.
              </p>
              <p>
                For medical practices, the operational benefits are substantial. Physician-built AI reduces front desk burden by 30-50%, decreases after-hours call volume, and improves schedule optimization through intelligent triage. Staff satisfaction increases as they spend less time on routine inquiries and more time on complex patient needs requiring human expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="bg-white py-20 px-6">
        <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12">
            How to Decide: A Framework
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose Generic Chatbots If:
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="text-lg text-[var(--color-muted)] flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span>You need only basic FAQ responses with no medical context</span>
                </li>
                <li className="text-lg text-[var(--color-muted)] flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span>You have significant technical resources to customize and monitor the system</span>
                </li>
                <li className="text-lg text-[var(--color-muted)] flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span>Patient interactions are non-clinical (billing, hours, directions only)</span>
                </li>
                <li className="text-lg text-[var(--color-muted)] flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span>You accept higher risk of errors and patient dissatisfaction</span>
                </li>
                <li className="text-lg text-[var(--color-muted)] flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span>HIPAA compliance is not a concern for your use case</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t-2 border-[var(--color-border)]">
              <h3 className="text-2xl font-semibold text-[var(--color-ink)] mb-6 flex items-center gap-3">
                <svg className="w-8 h-8 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Choose Physician-Built AI If:
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="text-lg text-[var(--color-muted)] flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span>You handle patient triage, symptom assessment, or medical inquiries</span>
                </li>
                <li className="text-lg text-[var(--color-muted)] flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span>Patient safety and medical accuracy are non-negotiable priorities</span>
                </li>
                <li className="text-lg text-[var(--color-muted)] flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span>You need HIPAA-compliant handling of patient information</span>
                </li>
                <li className="text-lg text-[var(--color-muted)] flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span>You want seamless integration with your EHR and practice management systems</span>
                </li>
                <li className="text-lg text-[var(--color-muted)] flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span>You value support from a team with clinical expertise</span>
                </li>
                <li className="text-lg text-[var(--color-muted)] flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span>You want proven ROI through reduced staff burden and improved patient flow</span>
                </li>
                <li className="text-lg text-[var(--color-muted)] flex items-start gap-3">
                  <span className="text-[var(--color-accent)] mt-1">•</span>
                  <span>You need specialty-specific protocols and clinical decision support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white rounded-xl border-l-4 border-[var(--color-accent)]">
            <p className="text-lg text-[var(--color-ink)] font-semibold mb-2">
              The Bottom Line
            </p>
            <p className="text-[var(--color-muted)]">
              For medical practices handling patient care, physician-built AI isn't just a better option—it's the only responsible choice. The risks of generic chatbots in clinical settings far outweigh any cost savings, and the operational benefits of purpose-built medical AI deliver measurable value from day one.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-cream)] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] text-center mb-12 animate-fade-up">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 animate-fade-up">
            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Can generic chatbots be customized for medical use?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                While generic chatbots can be customized to some degree, achieving true medical accuracy and safety requires fundamental architectural changes that go beyond simple customization. Physician-built AI systems are designed from the ground up with medical workflows, clinical protocols, and patient safety as core features. The level of medical expertise and validation required makes building on a generic platform inefficient and risky compared to purpose-built solutions.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                What are the liability risks of using generic chatbots?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Generic chatbots that provide medical information without proper clinical validation expose practices to malpractice risk if patients receive inappropriate guidance. This includes failure to recognize emergent conditions, incorrect triage decisions, or misleading health information. Additionally, HIPAA violations from improper data handling can result in significant fines. Physician-built AI systems include liability protections, appropriate disclaimers, and documentation trails that support your risk management program.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                How much training does staff need for physician-built AI?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Because physician-built AI is designed specifically for medical workflows, training requirements are minimal—typically 1-2 hours for most staff. The system is intuitive for healthcare professionals because it mirrors clinical thinking and uses familiar medical terminology. Ongoing support from a clinical team means questions are answered by people who understand your practice environment. Compare this to generic chatbots, which require extensive technical training and constant monitoring to prevent errors.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                Can physician-built AI integrate with our existing systems?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Yes, integration with EHR systems, practice management software, and scheduling platforms is a core feature of physician-built AI. These systems are designed to work within the healthcare technology ecosystem, with pre-built integrations for major platforms and API capabilities for custom connections. Generic chatbots typically require extensive custom development to achieve even basic integration, if it's possible at all.
              </div>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-sm group">
              <summary className="text-xl font-semibold text-[var(--color-ink)] cursor-pointer list-none flex items-center justify-between">
                What's the typical ROI timeline for physician-built AI?
                <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-4 text-[var(--color-muted)] leading-relaxed">
                Most practices see measurable ROI within 2-3 months through reduced front desk workload, decreased after-hours calls, and improved schedule efficiency. The value compounds over time as the system learns your practice patterns and patients become more comfortable with the technology. Cost savings typically come from reduced staffing needs for routine inquiries (equivalent to 0.5-1.5 FTE), fewer missed appointments through better communication, and improved patient retention from enhanced service quality.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-ink)] mb-6">
            Ready to Discuss Your AI Strategy?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 leading-relaxed">
            Talk with our clinical team about implementing physician-built AI in your practice. We'll help you understand the options, assess your needs, and create a plan that prioritizes patient safety and operational efficiency.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            Discuss Your Options
          </a>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            No-obligation consultation • Clinical expertise • Tailored solutions
          </p>
        </div>
      </section>
    </main>
  )
}