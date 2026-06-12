"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Module-level flag — persists across SPA navigations within the session
let hasShown = false;

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  // Stable ref to avoid stale closure
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  });

  useEffect(() => {
    // Skip on SPA navigation — immediately hand off
    if (hasShown) {
      setVisible(false);
      onCompleteRef.current();
      return;
    }
    hasShown = true;

    const obj = { value: 0 };

    const tl = gsap.timeline();

    tl.to(obj, {
      value: 100,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => setCount(Math.round(obj.value)),
    }).to(containerRef.current, {
      // Pause 0.3 s at 100, then slide up
      delay: 0.3,
      yPercent: -100,
      duration: 0.6,
      ease: "power3.inOut",
      // Fire hero animation at the START of the slide so they overlap
      onStart: () => onCompleteRef.current(),
      onComplete: () => setVisible(false),
    });

    return () => {
      tl.kill();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-obsidian"
    >
      <span
        className="font-display font-extrabold leading-none tabular-nums text-white"
        style={{ fontSize: "clamp(4rem, 10vw, 10rem)" }}
      >
        {count}
      </span>
      <span className="mt-5 font-mono text-[11px] uppercase tracking-[0.35em] text-linen/30">
        ( LOADING )
      </span>
    </div>
  );
}
