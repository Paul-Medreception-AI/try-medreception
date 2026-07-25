import Link from 'next/link'

export const metadata = {
  title: 'Insurance & Billing | Try MedReception',
  description: 'Transparent pricing and billing information for MedReception AI receptionist services.',
}

export default function InsurancePage() {
  const insuranceProviders = [
    'Aetna',
    'BlueCross BlueShield',
    'Cigna',
    'United Healthcare',
    'Humana',
    'Medicare',
    'Medicaid',
    'Tricare',
    'Anthem',
    'Magellan',
    'Kaiser Permanente',
    'Oscar Health'
  ]

  const billingSteps = [
    {
      title: 'Verify Coverage',
      description: 'We confirm your insurance benefits and eligibility before service begins.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Service Provided',
      description: 'MedReception AI handles your practice calls with physician-built intelligence.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      )
    },
    {
      title: 'Claim Submitted',
      description: 'We submit claims to your insurance company with all required documentation.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    {
      title: 'You Pay Remainder',
      description: 'After insurance processes, you receive a clear statement for any remaining balance.',
      icon: (
        <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      )
    }
  ]

  const faqs = [
    {
      question: 'Do you accept my insurance?',
      answer: 'We work with most major insurance providers. Contact us with your insurance information and we will verify your coverage and explain your benefits in detail.'
    },
    {
      question: 'What is a copay and when do I pay it?',
      answer: 'A copay is a fixed amount you pay for services, determined by your insurance plan. Copays are typically collected at the time of service or when you sign up for MedReception AI.'
    },
    {
      question: 'How do deductibles work?',
      answer: 'A deductible is the amount you pay out-of-pocket before your insurance starts covering costs. Once you meet your annual deductible, your insurance covers services according to your plan benefits, often with just a copay or coinsurance.'
    },
    {
      question: 'What is an Explanation of Benefits (EOB)?',
      answer: 'An EOB is a statement from your insurance company explaining what they paid and what you owe. It is not a bill. After we receive the EOB, we will send you a statement for any remaining balance.'
    },
    {
      question: 'What if I do not have insurance?',
      answer: 'We offer self-pay options with transparent pricing, sliding scale fees based on income, and flexible payment plans. We are committed to making MedReception AI accessible regardless of insurance status.'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6 animate-fade-up">
            Insurance & Billing
          </h1>
          <p className="text-xl text-white/90 animate-fade-up">
            Transparent pricing and billing information
          </p>
        </div>
      </section>

      {/* Accepted Insurance */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-4 text-[var(--color-ink)]">
            Accepted Insurance Plans
          </h2>
          <p className="text-center text-[var(--color-muted)] text-lg mb-16 max-w-2xl mx-auto">
            We work with most major insurance providers to ensure accessible AI receptionist services for your medical practice
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {insuranceProviders.map((provider, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-[var(--color-border)] font-semibold text-[var(--color-ink)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {provider}
              </div>
            ))}
          </div>

          <p className="text-center text-[var(--color-muted)] mt-12 max-w-2xl mx-auto">
            Don't see your insurance provider listed? Contact us to verify your coverage. We are continuously expanding our network of accepted insurance plans.
          </p>
        </div>
      </section>

      {/* Billing Process */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-4 text-[var(--color-ink)]">
            How Billing Works
          </h2>
          <p className="text-center text-[var(--color-muted)] text-lg mb-16 max-w-2xl mx-auto">
            Our straightforward billing process ensures transparency every step of the way
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {billingSteps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center text-[var(--color-accent)] mb-6">
                  {step.icon}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold mb-4 text-[var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Billing Terms Explained */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl font-semibold mb-4 text-[var(--color-ink)]">
                Copays
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                A fixed amount you pay for covered services, as defined by your insurance plan. Copay amounts vary by plan and service type.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <h3 className="font-cormorant text-2xl font-semibold mb-4 text-[var(--color-ink)]">
                Deductibles
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                The amount you pay out-of-pocket before your insurance begins to pay. Deductibles reset annually according to your plan year.
              </p>
            </div>

            <div className="bg-[var(--color-cream)] rounded-xl p-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <h3 className="font-cormorant text-2xl font-semibold mb-4 text-[var(--color-ink)]">
                EOB Statements
              </h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Your Explanation of Benefits shows what your insurance paid and what you owe. Review it carefully before paying any bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Pay Options */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto animate-fade-up">
            <h3 className="font-cormorant text-3xl md:text-4xl font-semibold mb-6 text-[var(--color-ink)]">
              Self-Pay Options
            </h3>
            <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-8">
              We believe every medical practice deserves access to physician-built AI receptionist technology, regardless of insurance coverage. That's why we offer flexible self-pay options designed to fit your practice budget.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Sliding Scale Fees</h4>
                  <p className="text-[var(--color-muted)]">
                    Income-based pricing to ensure accessibility for practices of all sizes, from solo practitioners to multi-location clinics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Flexible Payment Plans</h4>
                  <p className="text-[var(--color-muted)]">
                    Interest-free monthly payment options that spread costs over time, helping you manage cash flow while improving patient access.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-ink)] mb-2">Good Faith Estimate</h4>
                  <p className="text-[var(--color-muted)]">
                    We provide a clear, written estimate of costs before service begins, as required by the No Surprises Act. No hidden fees or unexpected charges.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-white rounded-lg border border-[var(--color-border)]">
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                <strong className="text-[var(--color-ink)]">No Surprises Act Compliance:</strong> Under federal law, you have the right to receive a Good Faith Estimate explaining how much your medical services will cost. We provide transparent pricing information upfront so you can make informed decisions about your practice technology investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center mb-4 text-[var(--color-ink)]">
            Billing Questions
          </h2>
          <p className="text-center text-[var(--color-muted)] text-lg mb-16">
            Common questions about insurance and billing
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden group animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <summary className="px-8 py-6 cursor-pointer font-semibold text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors duration-300 list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <svg
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[var(--color-accent)] transition-transform duration-300 group-open:rotate-180"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-6 text-[var(--color-muted)] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <p className="text-center text-[var(--color-muted)] mt-12">
            Have more questions about billing or insurance coverage?{' '}
            <Link href="/contact" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-semibold transition-colors duration-300">
              Contact our team
            </Link>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-6 animate-fade-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-10 animate-fade-up">
            Contact us to verify your insurance coverage or discuss self-pay options
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl"
            >
              Get Pricing Information
            </Link>
            <Link
              href="/about"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30"
            >
              Learn About Our Practice
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}