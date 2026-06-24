"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

/**
 * A card that can be picked up and flung, then springs back to its origin.
 * Tilts toward the drag direction for a tactile, physical feel.
 */
export function DraggableCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateRaw = useTransform(x, [-180, 180], [-12, 12]);
  const rotate = useSpring(rotateRaw, { stiffness: 200, damping: 20 });

  return (
    <motion.div
      ref={ref}
      drag
      dragElastic={0.16}
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 280, bounceDamping: 22 }}
      whileDrag={{ scale: 1.04, zIndex: 40, cursor: "grabbing" }}
      whileHover={{ scale: 1.015 }}
      style={{ x, y, rotate }}
      className={cn("cursor-grab touch-none will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
