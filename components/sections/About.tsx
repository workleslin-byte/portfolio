"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CREDENTIALS = [
  { label: "( 07 YEARS )", body: "Professional content & growth work" },
  { label: "( ₹16.8Cr )", body: "Email revenue attributed, FY25" },
  { label: "( 170K+ )", body: "Long-form reads, 9 articles" },
  { label: "( FOUNDER )", body: "Pocket Notes — pocketnotes.in" },
];

const CARD_ROTATIONS = [-2, 1, -1, 0.5];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Stamp initial rotations onto cards via GSAP so transforms compose correctly
      cardsRef.current.forEach((card, i) => {
        if (card) gsap.set(card, { rotation: CARD_ROTATIONS[i] });
      });

      // Left column — fade up on scroll enter
      gsap.fromTo(
        leftColRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      // Right column cards — staggered
      const cards = cardsRef.current.filter((c): c is HTMLDivElement => !!c);
      if (cards.length) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            delay: 0.25,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-linen px-6 py-24 md:px-12 md:py-36 text-ink"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 md:grid-cols-[1fr_0.6fr] lg:grid-cols-[1.4fr_1fr]">
        {/* ── Left column ── */}
        <div ref={leftColRef}>
          {/* Label */}
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.35em] text-ink/35">
            ( ON WHO I AM )
          </p>

          {/* Headline */}
          <h2
            className="font-display font-extrabold uppercase leading-[0.9] text-ink"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Coastal boy.
          </h2>
          <h2
            className="font-serif italic leading-[0.9] text-gold"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Mountain thinker.
          </h2>

          {/* Body */}
          <div className="mt-10 space-y-5 font-sans leading-[1.8] text-ink/80"
            style={{ fontSize: "1.125rem" }}>
            <p>
              I grew up by the backwaters in Kochi, which means the water has
              always felt like background — present, unremarkable, mine. But
              the mountains are where my mind moves differently. Something about
              altitude clears the noise. The Royal Enfield Himalayan in the
              garage isn&apos;t a travel statement. It&apos;s a thinking tool.
            </p>
            <p>
              Seven years of building content systems that compound — blog
              growth, email revenue, organic search, platform presence. Now I
              layer AI on top: automation pipelines, RAG systems, LLM-powered
              workflows. The instinct is the same. Take something complicated,
              find the argument inside it, deploy it at scale.
            </p>
            <p>I still keep a commonplace book. Pen and paper, always.</p>
          </div>

          {/* Blockquote */}
          <blockquote className="mt-10 border-l border-ink/20 pl-6">
            <p className="font-serif italic leading-relaxed text-ink"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
              &ldquo;Most people read to feel something. I read to find out how
              to think.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* ── Right column — credential stack ── */}
        <div className="flex flex-col gap-4 pt-4 md:pt-16">
          {CREDENTIALS.map((cred, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="rounded-lg border-l-2 border-white/10 bg-obsidian px-6 py-5 shadow-xl"
            >
              <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-linen/40">
                {cred.label}
              </p>
              <p className="font-sans text-sm leading-relaxed text-linen/80">
                {cred.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
