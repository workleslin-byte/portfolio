import Link from "next/link";
import Grain from "@/components/shell/Grain";
import Smear from "@/components/motion/Smear";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-[var(--gutter)] text-center">
      <Grain />

      <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.35em] text-[color:var(--accent)]">
        404
      </p>

      <Smear
        as="h1"
        eager
        className="text-[clamp(3rem,11vw,8rem)] font-semibold leading-[0.9]"
      >
        Lost the <em>thread.</em>
      </Smear>

      <p className="mt-8 max-w-md font-sans text-[1.0625rem] leading-relaxed text-ink/80">
        This page doesn&apos;t exist, or it moved. Even a good filing system
        loses a card now and then.
      </p>

      <Link
        href="/"
        className="pill mt-12"
      >
        ← Back to the index
      </Link>
    </main>
  );
}
