import Link from 'next/link'

export const metadata = {
  title: 'Frequently Asked Questions | Try MedReception',
  description: 'Get answers to common questions about MedReception AI receptionist for medical practices, including integration, HIPAA compliance, pricing, and more.',
}

export default function FAQPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-sm mb-4 opacity-90">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <span>FAQ</span>
          </div>
          <h1 className="font-cormorant text-5xl font-light mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Everything you need to know about MedReception AI and how it works for your medical practice
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-3">
            
            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                What is MedReception AI and how does it work?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                MedReception AI is an artificial intelligence receptionist specifically designed for medical practices by a practicing surgeon. Our AI system answers incoming calls 24/7, schedules appointments directly into your existing calendar system, collects patient information, and appropriately triages urgent cases. Unlike generic answering services, MedReception understands medical terminology, HIPAA requirements, and the unique workflow demands of healthcare practices. The system integrates seamlessly with your existing phone and scheduling infrastructure, requiring no special equipment or extensive staff training.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Is MedReception HIPAA compliant?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, MedReception AI is fully HIPAA compliant and built on secure healthcare-grade infrastructure. We sign Business Associate Agreements (BAAs) with all clients, maintain encrypted data transmission and storage, conduct regular security audits, and follow strict protocols for handling protected health information (PHI). Our system was designed from the ground up with healthcare privacy requirements in mind, not retrofitted from consumer technology. All conversations and patient data are handled with the same security standards required of electronic health records systems.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                How quickly can MedReception be set up for my practice?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Most practices are fully operational with MedReception within 48 hours of signing up. Our integration process involves connecting to your existing phone system (usually through call forwarding or VoIP integration), syncing with your calendar and scheduling software, and configuring the AI with your practice-specific protocols, hours, and preferences. We handle the technical setup remotely, so there's no need for on-site visits or installation of new hardware. Your staff receives a brief orientation call, but no extensive training is required since the system works autonomously.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                What types of medical practices does MedReception work with?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                MedReception AI is designed to work with virtually any outpatient medical practice, including primary care, specialty practices (cardiology, orthopedics, dermatology, etc.), mental health providers, dental offices, physical therapy clinics, and multi-provider group practices. We customize the AI's knowledge base and protocols to match your specialty's specific terminology, common appointment types, and clinical workflows. Whether you're a solo practitioner or a multi-location practice, our system scales to meet your needs. We've successfully deployed in practices ranging from single-physician offices to 20+ provider groups.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Can patients tell they're speaking with an AI?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                MedReception AI uses natural, conversational language that many patients find indistinguishable from human receptionists, though we can configure the system to disclose its AI nature if you prefer. Patient satisfaction surveys show that most callers care more about getting their needs met quickly and accurately than whether they're speaking with AI or human staff. The system handles complex conversations, understands context, and responds appropriately to emotional cues. For situations beyond its capability, it seamlessly transfers to your human staff with a full summary of the conversation.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Does MedReception replace my front desk staff?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                MedReception is designed to augment your staff, not replace them. The AI handles routine calls like appointment scheduling, prescription refill requests, and basic inquiries, freeing your staff to focus on in-person patient care, complex issues, and tasks requiring human judgment. Many practices find that MedReception allows them to handle increased call volume without adding staff, or lets existing staff work more efficiently without burnout. Your team remains essential for nuanced patient interactions, clinical coordination, and situations requiring empathy and complex problem-solving that AI cannot replicate.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                What scheduling systems does MedReception integrate with?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                MedReception integrates with most major medical scheduling and EHR platforms including Epic, Cerner, Athenahealth, NextGen, eClinicalWorks, Practice Fusion, DrChrono, and many others through secure API connections. For systems without direct API access, we offer alternatives like shared calendar integration (Google Calendar, Office 365) or our proprietary scheduling interface that syncs with your existing system. During the setup process, our technical team evaluates your specific software environment and implements the most seamless integration method. If your system isn't listed, contact us—we likely have a solution or can build one.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                How does MedReception handle new patient calls?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Our AI is specifically trained to handle new patient intake efficiently and thoroughly. It can verify insurance eligibility in real-time, collect necessary demographic and medical history information, explain your practice policies, answer common new patient questions, and schedule initial appointments according to your preferences. The system can be configured to screen for specific conditions, apply your new patient acceptance criteria, and route certain cases to staff review before confirming appointments. All collected information is automatically entered into your system, eliminating duplicate data entry and reducing the administrative burden on your team.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                What happens with emergency or urgent calls?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                MedReception AI is trained to recognize urgent and emergency situations based on protocols you define. For true emergencies, the system advises patients to call 911 or go to the emergency department immediately. For urgent but non-emergency situations, it can immediately connect the caller to your on-call provider, send priority alerts to designated staff via text or phone, or follow your practice's specific triage protocols. The AI documents all urgent calls comprehensively and flags them in your system for follow-up. You maintain complete control over how different urgency levels are handled and can adjust protocols at any time.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex inquiry-between items-center">
                How much does MedReception cost?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                MedReception pricing is based on call volume and practice size, typically ranging from $500 to $2,000 per month depending on your needs. This is significantly less expensive than hiring additional receptionist staff (which typically costs $3,000-$4,000 per month per full-time employee including benefits), while providing 24/7 coverage that human staff cannot match. We offer transparent pricing with no hidden fees, and most practices see positive ROI within the first month through increased appointment bookings and reduced missed calls. Contact us for a customized quote based on your practice's specific requirements and call patterns.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Can I customize what MedReception says to patients?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Absolutely. During setup, we configure MedReception to reflect your practice's specific language, policies, and preferences. You can specify exactly how the AI should greet callers, what information to collect, which questions to ask, how to describe your services, and what policies to communicate about cancellations, payments, insurance, and more. The system learns your practice's terminology and tone. You can update these configurations at any time through a simple web interface, or request changes through our support team. Many practices provide us with scripts or policy documents that we incorporate directly into the AI's knowledge base.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                What if MedReception doesn't know how to handle a call?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                When MedReception encounters a situation beyond its training or your configured protocols, it gracefully transfers the call to your staff with a complete summary of the conversation so the patient doesn't need to repeat themselves. You can set specific triggers for human escalation based on keywords, topics, or caller frustration. Our physician-led team continuously monitors these escalated calls to improve the system's capabilities. Over time, as the AI learns from these interactions, the escalation rate decreases. Most practices see escalation rates below 5% after the first month of operation.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Does MedReception work after hours and on weekends?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, MedReception provides true 24/7/365 coverage with no additional cost for after-hours service. The AI can handle calls during lunch breaks, evenings, weekends, and holidays—times when patients often need to reach your practice but find it closed. You configure how after-hours calls should be handled: some practices allow full scheduling anytime, others restrict after-hours calls to urgent triage and message-taking, with routine appointments deferred to the next business day. This ensures patients can always reach your practice when they need care, dramatically reducing missed opportunities and improving patient satisfaction.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Can MedReception handle prescription refill requests?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, MedReception can efficiently process routine prescription refill requests according to your protocols. The AI collects necessary information including patient identification, medication name and dosage, pharmacy details, and any relevant symptoms or concerns. This information is organized and routed to the appropriate provider or staff member for review and processing. The system can be configured to handle simple refills automatically for chronic medications while flagging requests that require clinical review. This streamlines a time-consuming task while ensuring appropriate clinical oversight and documentation.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                How do I monitor what MedReception is doing?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                You have complete visibility into all MedReception activity through a comprehensive web dashboard. View call logs, listen to recordings, read transcripts, track appointment bookings, monitor call volume patterns, and review performance metrics in real-time. The system generates regular reports on key metrics like call answer rates, appointment conversion rates, and common caller questions. You can set up alerts for specific events or patterns that need your attention. Our physician-led support team also proactively monitors your system's performance and reaches out with optimization recommendations based on the data we observe.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                What happens if I want to cancel or change my service?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                MedReception operates on flexible month-to-month contracts with no long-term commitment required. If you decide the service isn't right for your practice, you can cancel with 30 days' notice. We'll help you transition smoothly by providing all call records, transcripts, and data for your archives. We can also assist with reconfiguring your phone system back to its previous setup. That said, our retention rate exceeds 95% because practices quickly realize the value of never missing a patient call. We're confident enough in our service that we don't need to lock you into lengthy contracts.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Can MedReception handle multiple languages?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Yes, MedReception supports multiple languages including Spanish, Mandarin, and several others, with more being added regularly. The AI can detect the caller's language and switch seamlessly, or offer language options upfront. For practices serving diverse communities, multilingual support dramatically improves access and patient satisfaction without requiring bilingual staff. The system maintains the same level of sophistication and medical terminology accuracy across all supported languages. If your patient population speaks a language we don't yet support, contact us—we prioritize adding languages based on customer needs.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                Why was MedReception built by a physician?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                MedReception was created by a practicing surgeon who experienced firsthand the frustration of missed patient calls, overwhelmed front desk staff, and the operational inefficiencies that plague medical practices. Generic AI phone systems don't understand the unique demands of healthcare: HIPAA compliance, medical terminology, appointment types, insurance verification, clinical triage, and the workflow realities of busy practices. By building MedReception from a physician's perspective, we created a solution that actually solves real problems rather than creating new ones. Our physician-led team continues to guide product development based on actual clinical practice needs, not tech industry assumptions about healthcare.
              </div>
            </details>

            <details className="border border-[var(--color-border)] rounded-xl bg-white group">
              <summary className="cursor-pointer p-6 font-semibold text-[var(--color-ink)] font-cormorant text-xl list-none flex justify-between items-center">
                How do I get started with MedReception?
                <span className="text-[var(--color-accent)] transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                Getting started is simple. Schedule a demo to see the system in action and discuss your practice's specific needs. We'll provide a customized proposal and pricing based on your call volume and requirements. Once you decide to proceed, our team handles all technical setup remotely—you don't need to do anything except provide access to your scheduling system and phone configuration. Within 48 hours, MedReception is answering calls for your practice. We provide ongoing support and optimization to ensure the system continues to meet your evolving needs. Contact us today to schedule your personalized demo.
              </div>
            </details>

          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Talk directly with our physician founder to discuss how MedReception can work for your practice
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  )
}