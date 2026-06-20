"use client";

import { useReducedMotion } from "framer-motion";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

/**
 * ShaderGradient plane behind the hero — replaces the static CSS Glow blob.
 * Uses the same three holographic colours as the old radial-gradient so the
 * palette stays consistent. Disabled entirely under reduced-motion.
 */
export default function HeroGradient() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <ShaderGradientCanvas
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        opacity: 0.55,
        pointerEvents: "none",
      }}
      pixelDensity={0.8}
      fov={45}
    >
      <ShaderGradient
        type="plane"
        animate="on"
        uSpeed={0.15}
        uStrength={0.8}
        uDensity={0.8}
        uFrequency={5.5}
        color1="#FF8A4D"
        color2="#FF5D8F"
        color3="#9C7BFF"
        lightType="3d"
        envPreset="city"
        brightness={0.85}
        reflection={0.1}
        cAzimuthAngle={180}
        cPolarAngle={90}
        cDistance={3.5}
      />
    </ShaderGradientCanvas>
  );
}
