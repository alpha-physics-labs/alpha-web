"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Tag = "div" | "li" | "article" | "section" | "ul" | "p" | "header" | "dl";

// easeOutExpo — a long, soft settle. The curve Apple uses for content reveals.
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Reveal({
  as = "div",
  delay = 0,
  y = 22,
  className,
  children,
}: {
  as?: Tag;
  delay?: number;
  y?: number;
  className?: string;
  children: ReactNode;
}) {
  // motion exposes a styled component per intrinsic element (motion.div, motion.li, ...)
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </M>
  );
}
