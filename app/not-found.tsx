import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-[var(--color-cream)] min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="font-cormorant text-9xl text-[var(--color-primary)] opacity-20 font-bold leading-none">
          404
        </div>
        <h1 className="font-cormorant text-4xl md:text-5xl text-[var(--color-ink)] mt-4 font-semibold">
          Page Not Found
        </h1>
        <p className="text-[var(--color-muted)] mt-2 text-lg">
          The page you're looking for doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-medium px-8 py-3 rounded-md transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] text-[var(--color-ink)] font-medium px-8 py-3 rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}