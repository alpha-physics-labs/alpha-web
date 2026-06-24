"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.15,
        // gentle exponential ease-out — the Apple-style "glide to a stop"
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.4,
        anchors: { offset: -80, duration: 1.2 }, // ease in-page #links, clear the fixed nav
      }}
    >
      {children}
    </ReactLenis>
  );
}
