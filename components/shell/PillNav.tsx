"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import Star from "./Star";
import SendGlyph from "./SendGlyph";

type Item = { label: string; href: string; id?: string; num?: string };

const ITEMS: Item[] = [
  { label: "Storyteller", href: "/storyteller", id: "storyteller", num: "01" },
  { label: "Systems", href: "/systems", id: "systems", num: "02" },
  { label: "Product", href: "/product", id: "product", num: "03" },
  { label: "Brand", href: "/brand", id: "brand", num: "04" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

const CASES = ITEMS.filter((i) => i.num);

export default function PillNav({ home = false }: { home?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // Scroll-spy only on the home page, where the anchors exist.
  useEffect(() => {
    if (!home) return;
    const targets = ITEMS.map((i) => i.id && document.getElementById(i.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [home]);

  // Lock body scroll + close on Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const listContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: 0.08 } },
  };
  const listItem: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] } },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line/70 bg-[color:var(--paper)]/85 backdrop-blur-md supports-[backdrop-filter]:bg-[color:var(--paper)]/75">
      <div className="mx-auto flex max-w-dossier items-center justify-between gap-4 px-[var(--gutter)] py-4">
        <Link
          href="/"
          className="group relative z-[70] inline-flex items-center gap-2 font-display text-[19px] font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          <span className="text-[color:var(--accent)]">
            <Star size={12} />
          </span>
          <span>Leslin K Seemon</span>
        </Link>

        <nav className="hidden items-center gap-1.5 sm:flex" aria-label="Sections">
          {ITEMS.map((it) => (
            <Link
              key={it.label}
              href={it.href}
              className="pill"
              data-active={active === it.id ? "true" : "false"}
            >
              <SendGlyph />
              {it.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: hamburger toggle (morphs to an X) */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-[70] -mr-1 flex h-10 w-10 items-center justify-center sm:hidden"
        >
          <span className="flex flex-col items-center justify-center gap-[6px]">
            <span
              className="block h-[1.5px] w-6 bg-ink transition-transform duration-300"
              style={{ transform: open ? "translateY(4px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-[1.5px] w-6 bg-ink transition-transform duration-300"
              style={{ transform: open ? "translateY(-4px) rotate(-45deg)" : "none" }}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{ hidden: {}, show: {} }}
            className="fixed inset-0 z-[60] sm:hidden"
          >
            <motion.button
              type="button"
              aria-hidden="true"
              tabIndex={-1}
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 h-full w-full cursor-default bg-[color:var(--paper)]/92 backdrop-blur-xl"
            />

            <motion.nav
              aria-label="Sections"
              variants={{
                hidden: { opacity: 0, y: reduce ? 0 : -10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.2, 0.7, 0.2, 1] } },
              }}
              className="relative flex h-full flex-col px-[var(--gutter)] pb-10 pt-24"
            >
              <motion.ul
                variants={listContainer}
                initial="hidden"
                animate="show"
                className="flex flex-col"
              >
                {CASES.map((it) => (
                  <motion.li key={it.id} variants={listItem}>
                    <Link
                      href={it.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 border-b border-line py-4 transition-opacity active:opacity-60"
                    >
                      <span className="font-mono text-[11px] tracking-[0.2em] text-ink-soft">
                        {it.num}
                      </span>
                      <span className="font-display text-[clamp(1.9rem,9vw,2.6rem)] font-semibold leading-tight text-ink">
                        {it.label}
                      </span>
                      {active === it.id && (
                        <span className="ml-auto self-center text-[color:var(--accent)]">
                          <Star size={11} />
                        </span>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={listItem} className="mt-auto pt-10">
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="pill text-[13px]"
                  data-active="true"
                >
                  <SendGlyph />
                  Contact
                </Link>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                  Kochi, Kerala · Available now
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
