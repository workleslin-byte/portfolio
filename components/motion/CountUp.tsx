'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** The final value, in human scale (e.g. 4.93 for "₹4.93 Cr", 804 for "804K"). */
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  /** Fire on mount instead of waiting for scroll-in. */
  eagerLoad?: boolean;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export default function CountUp({
  target,
  duration = 1600,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
  eagerLoad = false,
}: CountUpProps) {
  const [count, setCount] = useState(eagerLoad ? 0 : target);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(eagerLoad);
  const rafRef = useRef<number>();

  // Run the count animation once triggered. Decimal-aware: rounds to the
  // requested precision each frame and snaps to the exact target at the end.
  useEffect(() => {
    if (!shouldAnimate) return;

    if (prefersReducedMotion()) {
      setCount(target);
      return;
    }

    const factor = Math.pow(10, decimals);
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = easeOutCubic(progress);
      const value = Math.round(target * eased * factor) / factor;
      setCount(value);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target); // exact final value, no rounding drift
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [shouldAnimate, target, duration, decimals]);

  // Scroll-triggered start for non-eager instances.
  useEffect(() => {
    if (shouldAnimate) return;
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldAnimate]);

  const formatted = count.toLocaleString('en-IN', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
