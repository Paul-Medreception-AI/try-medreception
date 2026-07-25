import Link from 'next/link'

export default function ConditionsPage() {
  const conditions = [
    {
      name: "24/7 Call Coverage",
      slug: "call-coverage",
      description: "Never miss a patient call with our AI receptionist that answers instantly, day and night. Reduce after-hours burden on staff while maintaining professional patient communication.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
    },
    {
      name: "Appointment Scheduling",
      slug: "appointment-scheduling",
      description: "Automated booking synced with your calendar system. Patients schedule, reschedule, and confirm appointments without staff intervention, reducing administrative burden.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
    },
    {
      name: "Patient Intake & Triage",
      slug: "patient-intake",
      description: "Collect essential patient information and route urgent cases appropriately. Streamline front-office workflow while maintaining clinical accuracy and patient safety.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>
    },
    {
      name: "Insurance Verification",
      slug: "insurance-verification",
      description: "Automated insurance eligibility checks and benefit verification. Reduce claim denials and administrative overhead while improving revenue cycle efficiency.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
    },
    {
      name: "Prescription Refill Requests",
      slug: "prescription-refills",
      description: "Handle routine refill requests efficiently with automated routing to your pharmacy and clinical team. Reduce phone tag and streamline medication management.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
    },
    {
      name: "After-Hours Support",
      slug: "after-hours-support",
      description: "Provide consistent patient care outside office hours without staff burnout. Our AI handles routine inquiries and escalates urgent cases according to your protocols.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
    },
    {
      name: "Multi-Location Coordination",
      slug: "multi-location",
      description: "Seamlessly manage calls across multiple practice locations. Route patients to the right office based on provider availability, specialty, and location preferences.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
    },
    {
      name: "New Patient Onboarding",
      slug: "new-patient-onboarding",
      description: "Streamline new patient registration with automated intake forms and appointment scheduling. Collect insurance, medical history, and consent forms before the first visit.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>
    },
    {
      name: "Billing & Payment Inquiries",
      slug: "billing-inquiries",
      description: "Answer common billing questions and process payments over the phone. Reduce collections time and improve patient satisfaction with transparent financial communication.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>
    },
    {
      name: "Specialist Referral Management",
      slug: "specialist-referrals",
      description: "Coordinate specialist referrals with automated scheduling and documentation. Track referral status and ensure continuity of care across your network.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
    },
    {
      name: "Lab & Test Results",
      slug: "lab-results",
      description: "Field patient inquiries about pending lab results and test scheduling. Route to appropriate clinical staff while maintaining HIPAA compliance and patient privacy.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
    },
    {
      name: "Emergency Protocol Management",
      slug: "emergency-protocols",
      description: "Implement custom triage protocols for urgent and emergency situations. Our physician-designed system escalates appropriately while documenting every interaction.",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
    }
  ]

  const warningSignsCategories = [
    {
      title: "Practice Capacity Issues",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      signs: [
        "Missed calls during peak hours",
        "Staff overwhelmed with phone duties",
        "Patient complaints about hold times",
        "Appointment slots going unfilled"
      ]
    },
    {
      title: "Revenue Cycle Gaps",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
      signs: [
        "High no-show rates",
        "Insurance verification delays",
        "Unbilled appointments",
        "Slow collections on outstanding balances"
      ]
    },
    {
      title: "Operational Inefficiencies",
      icon: <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>,
      signs: [
        "Manual scheduling consuming staff time",
        "After-hours coverage gaps",
        "Inconsistent patient communication",
        "Multiple systems not integrated"
      ]
    }
  ]

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6">Medical Practice Solutions We Address</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Physician-designed AI receptionist technology that solves the real operational challenges facing modern medical practices
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-4">Comprehensive Practice Support</h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-3xl mx-auto">
            From 24/7 call coverage to complex multi-location coordination, MedReception AI handles the full spectrum of front-office operations with physician-level understanding
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              >
                <div className="stroke-[var(--color-primary)]">
                  {condition.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-4">
                  {condition.name}
                </h3>
                <p className="text-[var(--color-muted)] text-sm mt-3 leading-relaxed">
                  {condition.description}
                </p>
                <Link
                  href={`/solutions/${condition.slug}`}
                  className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-4 hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-4">When to Consider MedReception AI</h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-3xl mx-auto">
            Recognize the signs that your practice could benefit from intelligent automation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {warningSignsCategories.map((category, index) => (
              <div key={index} className="text-center animate-fade-up">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-light)] stroke-[var(--color-primary)] mb-6">
                  {category.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
                  {category.title}
                </h3>
                <ul className="text-left space-y-3">
                  {category.signs.map((sign, signIndex) => (
                    <li key={signIndex} className="flex items-start gap-3 text-[var(--color-muted)] text-sm">
                      <svg className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[var(--color-light)] to-white rounded-2xl p-12 border border-[var(--color-border)] text-center animate-fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white stroke-[var(--color-accent)] mb-6">
              <svg strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="font-cormorant text-3xl font-semibold text-[var(--color-ink)] mb-4">
              Ready to Transform Your Practice Operations?
            </h3>
            <p className="text-[var(--color-muted)] mb-8 leading-relaxed">
              Schedule a consultation with our physician founder to discuss your specific practice challenges. We'll show you how MedReception AI can integrate seamlessly with your existing workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
              >
                Talk to the Founder
              </Link>
              <Link
                href="/how-it-works"
                className="inline-block bg-white hover:bg-gray-50 text-[var(--color-primary)] font-semibold px-8 py-4 rounded-lg border-2 border-[var(--color-primary)] transition-colors duration-300"
              >
                See How It Works
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-[var(--color-border)] text-center">
            <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-4">
              For Urgent Technical Support
            </h3>
            <p className="text-[var(--color-muted)] mb-6 max-w-2xl mx-auto">
              If you're an existing client experiencing a critical system issue, our physician-led support team is available 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
              <div className="flex items-center gap-2">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span className="text-[var(--color-ink)] font-semibold">Call your dedicated support line</span>
              </div>
              <div className="flex items-center gap-2">
                <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-5 h-5 text-[var(--color-accent)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="text-[var(--color-ink)] font-semibold">Email support@trymedreception.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="font-cormorant text-4xl font-light mb-6">
            Built by Physicians Who Understand Your Challenges
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            MedReception AI was designed by a practicing surgeon who lived these operational challenges firsthand. Let's discuss how our solution can work for your practice.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-50 text-[var(--color-primary)] font-semibold px-10 py-4 rounded-lg transition-colors duration-300"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}