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

      <motion.div
        className="hero__content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="eyebrow" variants={item} style={{ marginBottom: 26 }}>
          Physics grounded material intelligence
        </motion.p>

        <h1 className="hero__title">
          <motion.span variants={item}>Know what is worth</motion.span>
          <motion.span variants={item} className="grad">
            testing next.
          </motion.span>
        </h1>

        <motion.p className="hero__sub" variants={item}>
          ALPHA predicts how a protective material is likely to perform from its chemistry,
          before anything is fabricated. Teams get a ranked shortlist with honest uncertainty,
          so they spend their testing on the few candidates that matter most.
        </motion.p>

        <motion.div className="hero__cta" variants={item}>
          <a href="#workflow" className="btn btn--solid">
            See how it works
          </a>
          <a href="#vision" className="btn btn--ghost">
            See the science
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
