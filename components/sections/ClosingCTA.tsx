import MaskReveal from "@/lib/motion/MaskReveal";

export default function ClosingCTA() {
  return (
    <div className="w-full border-t border-paper/10 px-[5vw] py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          Available for work
        </p>
        <MaskReveal
          as="h2"
          lineClassName="font-display font-extrabold tracking-tight leading-[0.9] gradient-text-closing text-[clamp(3rem,8vw,9rem)]"
          lines={["Kerala → Anywhere."]}
        />
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/30">
          FY 2024–25 · Leslin K Seemon
        </p>
      </div>
    </div>
  );
}
