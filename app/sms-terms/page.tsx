import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SMS Terms & Conditions | MedReception AI',
  description: 'SMS messaging terms and conditions for MedReception AI. A2P 10DLC compliance information.',
}

export default function SMSTermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-bold mb-6">
            SMS Terms & Conditions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Important information about our text messaging program
          </p>
          
          <div className="bg-[var(--color-light)] border border-[var(--color-border)] rounded-2xl p-6 max-w-xl mx-auto mt-8 text-[var(--color-ink)] animate-fade-up">
            <p className="font-semibold mb-2">Quick Reference</p>
            <p className="text-sm leading-relaxed">
              Text <strong>STOP</strong> to unsubscribe | Text <strong>HELP</strong> for help | Message & data rates may apply | Frequency varies
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          
          <div className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
              Program Description
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed">
              MedReception AI offers SMS text messaging services to provide appointment reminders, confirmation requests, practice updates, and customer service communications to patients and healthcare providers who opt in to receive such messages.
            </p>
          </div>

          <div className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
              Opt-In and Consent
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              By providing your mobile phone number and opting in to receive SMS messages from MedReception AI, you expressly consent to receive automated text messages at the phone number you provided. Consent is not a condition of purchase.
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed">
              You may opt in by:
            </p>
            <ul className="list-disc list-inside text-[var(--color-ink)] leading-relaxed ml-4 mt-2 space-y-2">
              <li>Checking an opt-in box during account registration</li>
              <li>Providing consent through our web forms</li>
              <li>Responding affirmatively to an initial SMS message</li>
              <li>Texting a keyword to our designated short code or number</li>
            </ul>
          </div>

          <div className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
              Message Frequency
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Message frequency varies and depends on your appointment schedule and practice communications. You may receive up to 4 messages per month. Additional messages may be sent during periods of high activity or urgent notifications.
            </p>
          </div>

          <div className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
              Message and Data Rates
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Standard message and data rates may apply based on your mobile carrier plan. Please contact your wireless provider for details on your specific plan and applicable charges. MedReception AI is not responsible for any charges incurred from your mobile carrier.
            </p>
          </div>

          <div className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
              Opt-Out Instructions
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              You may opt out of receiving SMS messages at any time by:
            </p>
            <ul className="list-disc list-inside text-[var(--color-ink)] leading-relaxed ml-4 space-y-2">
              <li>Replying <strong>STOP</strong>, <strong>END</strong>, <strong>CANCEL</strong>, <strong>UNSUBSCRIBE</strong>, or <strong>QUIT</strong> to any message</li>
              <li>Updating your preferences in your account settings</li>
              <li>Contacting our support team directly</li>
            </ul>
            <p className="text-[var(--color-ink)] leading-relaxed mt-4">
              After opting out, you will receive one final confirmation message. You will not receive further messages unless you opt in again.
            </p>
          </div>

          <div className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
              Help and Support
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              For assistance with SMS messages, you may:
            </p>
            <ul className="list-disc list-inside text-[var(--color-ink)] leading-relaxed ml-4 space-y-2">
              <li>Reply <strong>HELP</strong> to any message for automated assistance</li>
              <li>Email us at <a href="mailto:support@trymedreception.com" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">support@trymedreception.com</a></li>
              <li>Visit our website at <a href="https://trymedreception.com" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">trymedreception.com</a></li>
            </ul>
          </div>

          <div className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
              Supported Carriers
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              Our SMS service is available on the following participating carriers:
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed">
              AT&T, Verizon Wireless, T-Mobile, Sprint, Boost Mobile, US Cellular, and other major US carriers. Service availability may vary by carrier and location.
            </p>
          </div>

          <div className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
              Privacy and Data Protection
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              Your privacy is important to us. We collect and use your mobile phone number solely for the purpose of sending you SMS messages you have consented to receive. We do not sell, rent, or share your phone number with third parties for marketing purposes.
            </p>
            <p className="text-[var(--color-ink)] leading-relaxed">
              For complete information about how we collect, use, and protect your personal information, please review our <a href="/privacy" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">Privacy Policy</a>.
            </p>
          </div>

          <div className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
              Liability and Disclaimer
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed">
              MedReception AI is not liable for delayed or undelivered messages. SMS delivery is dependent on your mobile carrier and network conditions. We recommend not relying solely on SMS for time-sensitive or critical communications.
            </p>
          </div>

          <div className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
              Changes to Terms
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed">
              We reserve the right to modify these SMS Terms at any time. Changes will be effective immediately upon posting to our website. Your continued participation in the SMS program after changes are posted constitutes acceptance of the modified terms.
            </p>
          </div>

          <div className="mb-12 animate-fade-up">
            <h2 className="font-cormorant text-3xl font-bold text-[var(--color-primary)] mb-4">
              Contact Information
            </h2>
            <p className="text-[var(--color-ink)] leading-relaxed mb-4">
              For questions about these SMS Terms or our text messaging program, please contact us:
            </p>
            <div className="bg-[var(--color-light)] border border-[var(--color-border)] rounded-xl p-6">
              <p className="text-[var(--color-ink)] mb-2">
                <strong>Email:</strong> <a href="mailto:support@trymedreception.com" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">support@trymedreception.com</a>
              </p>
              <p className="text-[var(--color-ink)] mb-2">
                <strong>Website:</strong> <a href="https://trymedreception.com" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">trymedreception.com</a>
              </p>
              <p className="text-[var(--color-ink)]">
                <strong>Service:</strong> MedReception AI SMS Program
              </p>
            </div>
          </div>

          <div className="border-t border-[var(--color-border)] pt-8 animate-fade-up">
            <p className="text-sm text-[var(--color-muted)] text-center">
              Last updated: January 2025
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}