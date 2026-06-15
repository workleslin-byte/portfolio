"use client";

import { useEffect, useRef } from "react";

/**
 * An ambient water surface — slowly drifting candy caustics plus soft ripple
 * rings that surface at random — painted as a full background layer in its
 * parent (give the parent position:relative + overflow:hidden). Continuous,
 * not cursor-driven. Off under reduced-motion.
 */
type Ripple = { x: number; y: number; r: number; a: number; max: number; hue: number };

const HUES = [332, 28, 150, 210, 268]; // pink, coral, green, blue, violet

export default function WaterLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let t = 0;
    const ripples: Ripple[] = [];

    const resize = () => {
      const b = parent.getBoundingClientRect();
      w = b.width;
      h = b.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, w, h);

      // Drifting caustic light — the body of water.
      for (let i = 0; i < 3; i++) {
        const cx = w * (0.3 + 0.42 * Math.sin(t + i * 2.1));
        const cy = h * (0.4 + 0.42 * Math.cos(t * 0.8 + i * 1.6));
        const rad = Math.min(w, h) * 0.55;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
        g.addColorStop(0, `hsla(${HUES[i % HUES.length]}, 72%, 60%, 0.07)`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      // Surface ripples.
      if (Math.random() < 0.07) {
        ripples.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0,
          a: 0.42,
          max: 120 + Math.random() * 170,
          hue: HUES[Math.floor(Math.random() * HUES.length)],
        });
      }
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += 1.3;
        rp.a -= 0.0038;
        if (rp.a <= 0 || rp.r > rp.max) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${rp.hue}, 80%, 62%, ${rp.a})`;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
