import Link from 'next/link'

export default function BlogPage() {
  const articles = [
    {
      category: "Patient Care",
      title: "Why Medical Practices Are Switching to AI Receptionists",
      excerpt: "Discover how physician-led AI solutions are transforming front-office operations while maintaining the personal touch patients expect from their healthcare providers."
    },
    {
      category: "Practice Management",
      title: "The Real Cost of Missed Patient Calls",
      excerpt: "Analysis of how unanswered calls impact patient retention, practice revenue, and clinical outcomes—and what forward-thinking practices are doing about it."
    },
    {
      category: "Technology",
      title: "HIPAA Compliance in AI Medical Communication",
      excerpt: "Understanding the security requirements for AI-powered patient interactions and how MedReception maintains the highest standards of data protection."
    },
    {
      category: "Workflow",
      title: "Streamlining Appointment Scheduling in Busy Practices",
      excerpt: "How automated scheduling reduces no-shows, optimizes provider time, and improves patient satisfaction without adding administrative burden."
    },
    {
      category: "Patient Experience",
      title: "After-Hours Care: Meeting Patient Expectations",
      excerpt: "Why 24/7 availability is becoming standard in medical practice, and how AI receptionists provide consistent care coordination around the clock."
    },
    {
      category: "Case Study",
      title: "From Overwhelmed to Optimized: A Surgeon's Story",
      excerpt: "How the founder's own practice challenges led to building MedReception, and the lessons learned from implementing AI in a real clinical setting."
    },
    {
      category: "Integration",
      title: "Connecting AI to Your Existing Practice Systems",
      excerpt: "A technical overview of how MedReception integrates with EHR platforms, phone systems, and scheduling software—without disrupting daily operations."
    },
    {
      category: "Best Practices",
      title: "Training Your AI Receptionist for Your Specialty",
      excerpt: "Custom configuration strategies that help AI understand your practice's unique terminology, protocols, and patient population needs."
    },
    {
      category: "Industry Trends",
      title: "The Future of Medical Front Office Operations",
      excerpt: "Expert predictions on how AI, automation, and physician-designed tools will reshape patient access and practice efficiency over the next decade."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-6">
            Resources & Insights
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Evidence-based guidance on practice optimization, AI integration, and modern medical front-office management
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 md:p-12 border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-all animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">Featured Article</span>
              <div className="h-px flex-1 bg-[var(--color-border)]"></div>
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-[var(--color-ink)] mb-6 leading-tight">
              How a Surgeon Built the AI Receptionist He Wished He Had
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--color-muted)] space-y-4 mb-8">
              <p>
                After years of watching talented front-office staff struggle with overwhelming call volumes, missed appointments, and after-hours patient needs, I realized the problem wasn't people—it was an impossible workload. As a practicing surgeon, I saw firsthand how administrative burden affects both patient care and practice sustainability.
              </p>
              <p>
                Traditional answering services didn't understand medical workflows. Generic AI tools weren't built with HIPAA compliance or clinical triage in mind. So I assembled a team of physicians and engineers to build what medical practices actually need: an AI receptionist that understands the real demands of patient care.
              </p>
              <p>
                MedReception isn't just technology—it's a physician-designed solution that respects the complexity of medical practice while making front-office operations seamless. This is the story of why we built it, how it works, and what we've learned from practices using it every day.
              </p>
            </div>
            <Link 
              href="/blog/founder-story" 
              className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors group"
            >
              Read Full Story
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {articles.map((article, index) => (
              <article 
                key={index}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-all animate-fade-up group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
                    {article.category}
                  </span>
                </div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4 leading-tight group-hover:text-[var(--color-primary)] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors text-sm group">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-dark)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            See how MedReception AI can reduce administrative burden and improve patient access
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl"
            >
              Schedule a Demo
            </Link>
            <Link 
              href="/how-it-works"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full font-medium transition-all border border-white/30"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}