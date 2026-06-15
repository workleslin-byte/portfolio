"use client";

import { useEffect, useRef } from "react";

/**
 * Option B — "water ripple." A canvas that emits soft expanding rings as the
 * cursor moves across its container, like a finger across still water. Sized to
 * its parent (give the parent position:relative). Off under reduced-motion and
 * on touch devices.
 */
type Ripple = { x: number; y: number; r: number; a: number; hue: number };

export default function WaterRipple() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ripples: Ripple[] = [];
    let lastSpawn = 0;
    let raf = 0;

    const resize = () => {
      const r = parent.getBoundingClientRect();
      w = r.width;
      h = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (x < 0 || y < 0 || x > w || y > h) return;
      const now = performance.now();
      if (now - lastSpawn < 38) return; // throttle spawn rate
      lastSpawn = now;
      const hues = [332, 28, 150, 210, 268]; // candy: pink, coral, green, blue, violet
      ripples.push({
        x,
        y,
        r: 0,
        a: 0.55,
        hue: hues[Math.floor(Math.random() * hues.length)],
      });
      if (ripples.length > 60) ripples.shift();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += 2.6;
        rp.a -= 0.0065;
        if (rp.a <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${rp.hue}, 80%, 60%, ${rp.a})`;
        ctx.lineWidth = 2.4;
        ctx.stroke();
        // inner soft fill for a wetter look
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, rp.r * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${rp.hue}, 80%, 65%, ${rp.a * 0.5})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
      raf = requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("mousemove", onMove);
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
