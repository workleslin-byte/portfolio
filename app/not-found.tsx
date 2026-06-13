import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
        404
      </p>

      <h1
        className="font-display font-extrabold tracking-tight leading-[1.0] text-paper"
        style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
      >
        Page not found.
      </h1>

      <p
        className="mt-6 max-w-md font-sans leading-relaxed text-paper/60"
        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
      >
        The page you&rsquo;re looking for doesn&rsquo;t exist, or has been moved.
      </p>

      <Link
        href="/"
        className="mt-12 inline-flex items-center border border-paper/30 px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-paper transition-colors duration-200 hover:bg-paper hover:text-ink"
      >
        ← Back to home
      </Link>
    </div>
  );
}
