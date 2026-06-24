"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type Tag = "div" | "li" | "article" | "section" | "ul" | "p" | "header" | "dl";

const EASE = [0.22, 0.61, 0.36, 1] as const;

export default function Reveal({
  as = "div",
  delay = 0,
  y = 26,
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
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </M>
  );
}
