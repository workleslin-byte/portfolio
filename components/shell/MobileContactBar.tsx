"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CALENDLY, EMAIL, LINKEDIN } from "@/lib/contact";

/**
 * Persistent, thumb-reach contact bar — mobile only. Always available while
 * scrolling so a recruiter can act from anywhere on the page. Fades out once the
 * Contact section is on screen (you're already there), and respects the iOS home
 * indicator via the safe-area inset.
 */
export default function MobileContactBar() {
  const reduce = useReducedMotion();
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const el = document.getElementById("contact");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setAtContact(entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <motion.div
      aria-hidden={atContact}
      initial={false}
      animate={{
        y: atContact ? 120 : 0,
        opacity: atContact ? 0 : 1,
      }}
      transition={{ duration: reduce ? 0 : 0.3, ease: [0.2, 0.7, 0.2, 1] }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line/70 bg-[color:var(--paper)]/90 backdrop-blur-md sm:hidden"
      style={{ pointerEvents: atContact ? "none" : "auto" }}
    >
      <div
        className="mx-auto flex max-w-dossier items-stretch gap-2 px-[var(--gutter)] pt-2.5"
        style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
      >
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[color:var(--accent)] px-4 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-[color:var(--paper)] transition-transform active:scale-95"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M3 10h18M8 2v4M16 2v4" />
          </svg>
          Book a call
        </a>

        <a
          href={`mailto:${EMAIL}`}
          aria-label="Email Leslin"
          className="flex items-center justify-center rounded-full border border-line px-4 py-3 text-ink transition-transform active:scale-95"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </a>

        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center justify-center rounded-full border border-line px-4 py-3 font-mono text-[13px] font-semibold tracking-tight text-ink transition-transform active:scale-95"
        >
          in
        </a>
      </div>
    </motion.div>
  );
}
