"use client";

import { motion, useScroll, useTransform } from "motion/react";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 800], [0, 140]);

  return (
    <section className="hero" id="hero">
      <motion.div className="hero__glow" aria-hidden style={{ y: glowY }} />
      <div className="hero__grid" aria-hidden />

      <motion.div
        className="hero__content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="eyebrow" variants={item} style={{ marginBottom: 26 }}>
          Material intelligence platform · MVP
        </motion.p>

        <h1 className="hero__title">
          <motion.span variants={item}>Material intelligence</motion.span>
          <motion.span variants={item} className="grad">
            for protective systems.
          </motion.span>
        </h1>

        <motion.p className="hero__sub" variants={item}>
          ALPHA helps teams discover, compare, and prioritize protective material
          candidates — before expensive physical testing.
        </motion.p>

        <motion.div className="hero__cta" variants={item}>
          <a href="#workflow" className="btn btn--solid">
            See how it works
          </a>
          <a href="#vision" className="btn btn--ghost">
            Read the product vision
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#mvp"
        className="hero__scroll"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <span />
      </motion.a>
    </section>
  );
}
