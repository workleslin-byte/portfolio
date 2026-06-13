"use client";

import GrowthBars from "@/components/visuals/GrowthBars";
import { GROWTH_BARS } from "@/lib/caseVisuals";

/**
 * Animated bar visualisation rendered below the hero for growth case
 * studies. Engineering items show a flow diagram in the hero instead,
 * so they have no entry here and this renders nothing.
 */
export default function CaseStudyVisual({ slug }: { slug: string }) {
  const data = GROWTH_BARS[slug];
  if (!data) return null;

  return (
    <section className="w-full border-t border-paper/10 px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <GrowthBars title={data.title} bars={data.bars} tone="ink" />
      </div>
    </section>
  );
}
