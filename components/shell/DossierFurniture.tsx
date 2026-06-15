"use client";

import { useEffect, useState } from "react";

/**
 * Fixed editorial furniture: a constant left running head and a right running
 * head + folio that update to the section currently in the middle of the
 * viewport. Sections opt in via [data-section] and [data-folio].
 */
export default function DossierFurniture({
  leftLabel = "Leslin K Seemon",
}: {
  leftLabel?: string;
}) {
  const [section, setSection] = useState("Intro");
  const [folio, setFolio] = useState("P/01");

  useEffect(() => {
    const secs = Array.from(
      document.querySelectorAll<HTMLElement>("[data-folio]"),
    );
    if (!secs.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const t = visible.target as HTMLElement;
          setSection(t.dataset.section || "");
          setFolio(t.dataset.folio || "");
        }
      },
      { threshold: [0.15, 0.4, 0.7], rootMargin: "-32% 0px -32% 0px" },
    );

    secs.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="runhead left">{leftLabel}</div>
      <div className="runhead right flex flex-col items-center gap-[2.2em]">
        <span>{section}</span>
        <span style={{ color: "var(--accent)" }}>{folio}</span>
      </div>
    </>
  );
}
