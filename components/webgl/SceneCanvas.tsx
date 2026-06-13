"use client";

import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";

/**
 * The persistent particle backdrop. Rendered behind all content
 * (the dark sections are transparent so this shows through; light
 * sections are opaque islands over it).
 */
export default function SceneCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 7], fov: 60 }}
        frameloop="always"
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}
