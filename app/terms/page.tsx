import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Try MedReception',
  description: 'Terms of Service for Try MedReception',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-white/90">Last updated: January 2025</p>
        </div>
      </section>

      <section className="bg-white max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-[var(--color-muted)] text-lg mb-8">
            Please read these Terms of Service carefully before using Try MedReception services. By accessing or using our website and services, you agree to be bound by these terms.
          </p>

          <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            By accessing and using Try MedReception ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use the Service.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            We reserve the right to update and change these Terms of Service at any time without notice. Continued use of the Service after any such changes constitutes your consent to such changes.
          </p>

          <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
            2. Description of Services
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            Try MedReception provides virtual receptionist and administrative support services for medical practices. Our website describes these services and provides information about our offerings.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            The information provided on our website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. We are not a healthcare provider and do not provide medical services.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            All service descriptions, features, and pricing are subject to change without notice. We reserve the right to modify or discontinue any aspect of our services at any time.
          </p>

          <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
            3. Not Emergency Care
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            Try MedReception is not an emergency service. Our services are not designed for, and should not be used for, emergency medical situations.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            If you are experiencing a medical emergency, call 911 or go to the nearest emergency room immediately. Do not use our services or contact our team for emergency medical assistance.
          </p>

          <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
            4. Insurance and Billing
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            Try MedReception does not process insurance claims or provide insurance billing services. We are not responsible for verifying insurance coverage, submitting claims, or handling insurance-related matters.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            Payment for our services is the responsibility of the contracting medical practice. All fees and payment terms will be outlined in separate service agreements.
          </p>

          <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
            5. HIPAA Compliance
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            Try MedReception is committed to protecting the privacy and security of protected health information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA).
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            We enter into Business Associate Agreements (BAAs) with covered entities and implement appropriate administrative, physical, and technical safeguards to protect PHI. Our staff receives regular HIPAA training and follows strict protocols for handling sensitive information.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            However, we cannot guarantee absolute security. By using our services, you acknowledge that electronic transmission of information carries inherent risks and we cannot be held liable for unauthorized access beyond our reasonable control.
          </p>

          <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
            6. Limitation of Liability
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            To the maximum extent permitted by law, Try MedReception shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            Our total liability in any matter arising out of or related to these terms is limited to the aggregate amount paid by you for the services during the three months prior to the event giving rise to the liability.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            We provide our services "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
            7. Governing Law
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            Any disputes arising out of or relating to these terms or the services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>

          <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-10 mb-4">
            8. Contact Information
          </h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-[var(--color-cream)] p-6 rounded-lg border border-[var(--color-border)] mt-4">
            <p className="text-[var(--color-ink)] font-medium mb-2">Try MedReception</p>
            <p className="text-[var(--color-muted)]">Website: trymedreception.com</p>
            <p className="text-[var(--color-muted)]">Email: contact@trymedreception.com</p>
          </div>
        </div>
      </section>
    </main>
  )
}