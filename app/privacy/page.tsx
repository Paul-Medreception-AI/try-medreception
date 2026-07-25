import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | MedReception AI',
  description: 'Privacy Policy for MedReception AI',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-white/90">Last Updated: January 2025</p>
        </div>
      </div>

      <div className="bg-white max-w-4xl mx-auto px-6 py-16 my-12 rounded-lg shadow-sm">
        <div className="prose prose-lg max-w-none">
          <p className="text-[var(--color-muted)] leading-relaxed">
            At MedReception AI, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            Who We Are
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            MedReception AI (trymedreception.com) provides virtual medical reception services to healthcare practices. We help medical offices manage patient communications, appointment scheduling, and administrative tasks.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            Information We Collect
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            When you contact us through our website or request information about our services, we may collect:
          </p>
          <ul className="list-disc list-inside text-[var(--color-muted)] leading-relaxed mb-4 space-y-2">
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Practice name and type</li>
            <li>Service interest and inquiry details</li>
          </ul>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            <strong className="text-[var(--color-ink)]">Important:</strong> We do NOT collect Protected Health Information (PHI) or patient medical records through our website forms or general communications.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            SMS Messaging
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            If you opt in to receive SMS messages from MedReception AI:
          </p>
          <ul className="list-disc list-inside text-[var(--color-muted)] leading-relaxed mb-4 space-y-2">
            <li>You consent to receive text messages about our services, updates, and promotional offers</li>
            <li>Message frequency varies based on your preferences</li>
            <li>Message and data rates may apply from your mobile carrier</li>
            <li>You can opt out at any time by replying <strong className="text-[var(--color-ink)]">STOP</strong> to any message</li>
            <li>Reply <strong className="text-[var(--color-ink)]">HELP</strong> for assistance</li>
          </ul>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            For complete SMS messaging terms, please see our <Link href="/sms-terms" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] underline transition-colors">SMS Terms of Service</Link>.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            How We Use Your Information
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-[var(--color-muted)] leading-relaxed mb-4 space-y-2">
            <li>Respond to your inquiries and service requests</li>
            <li>Provide information about our services</li>
            <li>Schedule consultations and demonstrations</li>
            <li>Send service updates and marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            Data Security
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes:
          </p>
          <ul className="list-disc list-inside text-[var(--color-muted)] leading-relaxed mb-4 space-y-2">
            <li>Encrypted data transmission (SSL/TLS)</li>
            <li>Secure data storage with access controls</li>
            <li>Regular security audits and updates</li>
            <li>Employee training on data privacy and security</li>
          </ul>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            HIPAA Notice
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            For healthcare practices that become our clients: Any Protected Health Information (PHI) or patient data is handled exclusively through secure, HIPAA-compliant patient portals and systems that are separate from this website. All PHI handling is governed by our Business Associate Agreement (BAA) and complies with HIPAA regulations.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            This website and its contact forms are <strong className="text-[var(--color-ink)]">not</strong> intended for the transmission of PHI or patient medical information.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            Third-Party Services
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            We may use third-party service providers to help us operate our website and deliver our services. These providers have access to your personal information only to perform specific tasks on our behalf and are obligated to protect your information.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            Cookies and Tracking
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            Your Rights
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-[var(--color-muted)] leading-relaxed mb-4 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
            <li>Withdraw consent for SMS messaging</li>
          </ul>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            Changes to This Policy
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>

          <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mt-10 mb-4 font-semibold">
            Contact Us
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            If you have questions about this Privacy Policy or how we handle your information, please contact us:
          </p>
          <div className="bg-[var(--color-cream)] p-6 rounded-lg">
            <p className="text-[var(--color-ink)] font-semibold mb-2">MedReception AI</p>
            <p className="text-[var(--color-muted)]">Contact us: https://www.medreception.ai/book</p>
            <p className="text-[var(--color-muted)]">Website: trymedreception.com</p>
          </div>
        </div>
      </div>

      <footer className="bg-[var(--color-ink)] text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sms-terms" className="text-white/80 hover:text-white transition-colors">
              SMS Terms
            </Link>
          </div>
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} MedReception AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}