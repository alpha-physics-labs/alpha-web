"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        // Continuous lerp smoothing — the natural, "weighted glide" feel Apple uses,
        // instead of a fixed-duration animation that feels detached from the wheel.
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        syncTouch: true,
        // ease in-page #links and land clear of the fixed nav
        anchors: { offset: -88, duration: 1 },
      }}
    >
      {children}
    </ReactLenis>
  );
}
