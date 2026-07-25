import Link from 'next/link'

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6 animate-fade-up">
            Patient Reviews
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-up">
            Your experience matters to us as we build a better solution for medical practices and their patients.
          </p>
        </div>
      </section>

      {/* Invite Section */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-4 animate-fade-up">
            We'd Love Your Feedback
          </h2>
          <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-8 animate-fade-up">
            As a physician-founded company, we're committed to building a solution that truly serves both medical practices and their patients. If you've interacted with MedReception AI, we'd be grateful to hear about your experience. Your honest feedback helps us improve and better serve the healthcare community.
          </p>
          
          {/* TODO(optimize): drop in real Google/Healthgrades reviews here once available */}
          
          <div className="animate-fade-up">
            <Link 
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl text-white mb-6 animate-fade-up">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up">
            See how MedReception AI can help your practice never miss a patient call again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
            <Link 
              href="/how-it-works"
              className="bg-white text-[var(--color-primary)] hover:bg-[var(--color-cream)] px-8 py-4 rounded-lg font-medium transition-colors"
            >
              See How It Works
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] px-8 py-4 rounded-lg font-medium transition-all"
            >
              Talk to the Founder
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}