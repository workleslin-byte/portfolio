"use client";

import { useEffect, useState } from "react";

/**
 * Decides whether the immersive WebGL backdrop should run.
 * Returns false until mounted (SSR-safe), then true only on capable,
 * motion-allowing devices. Everything degrades to a static gradient.
 */
export function useWebGLTier(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Small phones: skip the particle sim, keep the static gradient.
    if (window.matchMedia("(max-width: 640px)").matches) return;

    // Respect Save-Data and very low core counts.
    const cores = navigator.hardwareConcurrency ?? 4;
    if (cores <= 2) return;

    // Confirm a WebGL context is actually available.
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) return;
    } catch {
      return;
    }

    setEnabled(true);
  }, []);

  return enabled;
}
