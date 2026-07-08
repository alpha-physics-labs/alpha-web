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
          Physics-informed material intelligence · Defense R&amp;D
        </motion.p>

        <h1 className="hero__title">
          <motion.span variants={item}>Decide what&apos;s worth</motion.span>
          <motion.span variants={item} className="grad">
            testing next.
          </motion.span>
        </h1>

        <motion.p className="hero__sub" variants={item}>
          ALPHA is a physics-informed platform for protective-material R&amp;D. We turn
          scattered test data into a ranked experiment queue — screening candidates against
          hard physical limits, so teams spend their few expensive shots on the tests that
          actually reduce uncertainty.
        </motion.p>

        <motion.div className="hero__cta" variants={item}>
          <a href="#workflow" className="btn btn--solid">
            See how it works
          </a>
          <a href="#vision" className="btn btn--ghost">
            Read the thesis
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
