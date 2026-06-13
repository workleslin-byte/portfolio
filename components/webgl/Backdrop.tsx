"use client";

import dynamic from "next/dynamic";
import { useWebGLTier } from "@/lib/useWebGLTier";

// Canvas is client-only; never SSR'd.
const SceneCanvas = dynamic(() => import("./SceneCanvas"), { ssr: false });

/**
 * Global immersive backdrop.
 * - capable devices → live particle field
 * - everything else → static cobalt-on-ink gradient (same mood, zero cost)
 * Always paints the ink base so transparent dark sections read correctly.
 */
export default function Backdrop() {
  const webgl = useWebGLTier();

  return (
    <>
      {/* Base + static gradient fallback — always present behind everything */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-ink"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 20% 15%, rgba(31,79,224,0.18), transparent 70%), radial-gradient(50% 40% at 85% 80%, rgba(31,79,224,0.12), transparent 70%)",
        }}
      />
      {webgl && <SceneCanvas />}
    </>
  );
}
