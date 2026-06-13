"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export interface FlowStep {
  label: string;
  meta?: string;
}

interface Props {
  steps: FlowStep[];
  /** "ink" = light boxes on dark bg; "paper" = dark boxes on light bg */
  tone?: "ink" | "paper";
  className?: string;
}

/**
 * A technical-drawing flow: labelled nodes connected by arrows that draw
 * in on scroll. Used as the hero "spectacle" for engineering case studies
 * (architecture, RAG pipeline) in place of a count-up number.
 */
export default function FlowDiagram({ steps, tone = "ink", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const fg = tone === "ink" ? "text-paper" : "text-ink";
  const sub = tone === "ink" ? "text-mute-dark" : "text-mute";
  const border = tone === "ink" ? "border-paper/20" : "border-ink/20";

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const nodes = root.querySelectorAll<HTMLElement>("[data-node]");
    const conns = root.querySelectorAll<HTMLElement>("[data-conn]");

    if (prefersReducedMotion()) {
      gsap.set([nodes, conns], { opacity: 1, scaleX: 1, y: 0 });
      return;
    }

    gsap.set(nodes, { opacity: 0, y: 16 });
    gsap.set(conns, { opacity: 0, scaleX: 0, transformOrigin: "left center" });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: root, start: "top 78%", once: true },
    });
    nodes.forEach((node, i) => {
      tl.to(node, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }, i * 0.18);
      if (conns[i]) {
        tl.to(conns[i], { opacity: 1, scaleX: 1, duration: 0.3, ease: "power2.out" }, i * 0.18 + 0.2);
      }
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-3 md:flex-row md:flex-wrap md:items-stretch ${className}`}
    >
      {steps.map((step, i) => (
        <div key={step.label} className="flex flex-col md:flex-row md:items-stretch">
          <div
            data-node
            className={`flex min-w-[8.5rem] flex-1 flex-col justify-center border ${border} px-4 py-4 md:px-5 md:py-5`}
          >
            <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${sub}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={`mt-1.5 font-display font-bold leading-tight ${fg}`}>
              {step.label}
            </span>
            {step.meta && (
              <span className={`mt-1 font-mono text-[10px] tracking-wide ${sub}`}>
                {step.meta}
              </span>
            )}
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center justify-center px-1 py-1 md:px-2">
              {/* horizontal connector on md+, vertical tick on mobile */}
              <span
                data-conn
                className={`hidden h-px w-6 md:block ${tone === "ink" ? "bg-accent" : "bg-accent"}`}
              />
              <span
                data-conn
                className={`block h-4 w-px md:hidden ${"bg-accent"}`}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
