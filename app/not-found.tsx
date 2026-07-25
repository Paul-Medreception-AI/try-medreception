import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-[var(--color-cream)] min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="font-cormorant text-9xl text-[var(--color-primary)] opacity-20 font-bold leading-none">
          404
        </div>
        <h1 className="font-cormorant text-4xl text-[var(--color-ink)] mt-4 font-semibold">
          Page Not Found
        </h1>
        <p className="text-[var(--color-muted)] mt-2 text-lg">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Link
            href="/"
            className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Go Home
          </Link>
          <a
            href="https://www.medreception.ai/book?utm_source=trymedreception&utm_medium=outreach"
            className="bg-white hover:bg-[var(--color-light)] text-[var(--color-primary)] px-8 py-3 rounded-lg font-semibold border border-[var(--color-border)] transition-colors"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </div>
  )
}