"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 2600;

export default function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      a[i * 3] = (Math.random() - 0.5) * 18;
      a[i * 3 + 1] = (Math.random() - 0.5) * 12;
      a[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    return a;
  }, []);

  useFrame((state, delta) => {
    const pts = ref.current;
    if (!pts) return;
    // Slow continuous drift
    pts.rotation.y += delta * 0.018;
    // Cursor parallax — eased, no React re-render
    const px = state.pointer.x * 0.35;
    const py = state.pointer.y * 0.25;
    pts.position.x += (px - pts.position.x) * 0.03;
    pts.rotation.x += (py - pts.rotation.x) * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#1F4FE0"
        size={0.026}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
