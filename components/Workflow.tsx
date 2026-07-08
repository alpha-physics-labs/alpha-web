"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Reveal from "./Reveal";

const STEPS = [
  {
    k: "Ingest",
    p: "Aggregate open material databases, research literature, and experimental references into a unified corpus.",
  },
  {
    k: "Encode",
    p: "Convert raw records into structured material representations — the state space the network learns over.",
  },
  {
    k: "Constrain",
    p: "Embed conservation laws and governing PDEs as a physics residual, so predictions stay physically consistent.",
  },
  {
    k: "Infer",
    p: "The trained PINN generalizes across composition and configuration — fast surrogates for expensive simulation.",
  },
  {
    k: "Explain",
    p: "Every prediction ships with its drivers, uncertainty, and the experiment that would reduce it most.",
  },
];

const layerAnim = (active: boolean) => ({
  animate: { opacity: active ? 1 : 0, y: active ? 0 : 22, scale: active ? 1 : 0.98 },
  transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] as const },
  style: {
    position: "absolute" as const,
    inset: 0,
    pointerEvents: "none" as const,
  },
});

export default function Workflow() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const idx = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length * 0.999));
    setStep(idx < 0 ? 0 : idx);
  });

  return (
    <section className="scrolly" id="workflow">
      <div className="scrolly__intro container">
        <Reveal>
          <p className="label">02 — The method</p>
          <h2 className="h2">Where deep learning meets governing equations.</h2>
        </Reveal>
      </div>

      <div className="scrolly__track" ref={trackRef}>
        <div className="scrolly__stage">
          <div className="stage container">
            {/* visual */}
            <div className="stage__visual">
              <div className="viz">
                {/* 0 — ingest */}
                <motion.div className="viz__layer" {...layerAnim(step === 0)}>
                  <div className="viz__nodes">
                    <span className="node">Materials Project</span>
                    <span className="node">Research papers</span>
                    <span className="node">Public test refs</span>
                    <span className="node">Technical reports</span>
                  </div>
                  <div className="viz__funnel" />
                </motion.div>

                {/* 1 — structure */}
                <motion.div className="viz__layer" {...layerAnim(step === 1)}>
                  <div className="profile">
                    <div className="profile__row"><span>Material</span><b>Silicon carbide composite</b></div>
                    <div className="profile__row"><span>Density</span><b>3.21 g/cm³</b></div>
                    <div className="profile__row"><span>Hardness</span><b>2800 HV</b></div>
                    <div className="profile__row"><span>Elastic modulus</span><b>410 GPa</b></div>
                    <div className="profile__row"><span>Fracture toughness</span><b>4.6 MPa·m½</b></div>
                    <div className="profile__row"><span>Confidence</span><b className="ok">High</b></div>
                  </div>
                </motion.div>

                {/* 2 — analyze */}
                <motion.div className="viz__layer" {...layerAnim(step === 2)}>
                  <div className="gauges">
                    <div className="gauge"><div className="gauge__bar" style={{ "--v": "78%" } as React.CSSProperties} /><span>Areal density</span></div>
                    <div className="gauge"><div className="gauge__bar" style={{ "--v": "88%" } as React.CSSProperties} /><span>Energy absorption</span></div>
                    <div className="gauge"><div className="gauge__bar" style={{ "--v": "64%" } as React.CSSProperties} /><span>V50 trend</span></div>
                    <div className="gauge"><div className="gauge__bar" style={{ "--v": "52%" } as React.CSSProperties} /><span>Fracture risk</span></div>
                  </div>
                  <p className="viz__note">Physics-residual loss ties every prediction to measurable variables.</p>
                </motion.div>

                {/* 3 — rank */}
                <motion.div className="viz__layer" {...layerAnim(step === 3)}>
                  <ol className="rank">
                    <li><span className="rank__n">1</span><span className="rank__name">SiC composite</span><span className="rank__bar" style={{ "--v": "92%" } as React.CSSProperties} /></li>
                    <li><span className="rank__n">2</span><span className="rank__name">Alumina ceramic</span><span className="rank__bar" style={{ "--v": "74%" } as React.CSSProperties} /></li>
                    <li><span className="rank__n">3</span><span className="rank__name">UHMWPE laminate</span><span className="rank__bar" style={{ "--v": "61%" } as React.CSSProperties} /></li>
                  </ol>
                </motion.div>

                {/* 4 — explain */}
                <motion.div className="viz__layer" {...layerAnim(step === 4)}>
                  <div className="explain">
                    <p className="explain__why"><b>Why it scored well</b>low density, high hardness, strong stiffness profile.</p>
                    <p className="explain__risk"><b>Risk remaining</b>brittle fracture behavior, manufacturing cost.</p>
                    <p className="explain__next"><b>Next test</b>compare against alumina under matched thickness &amp; threat.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* steps */}
            <ol className="stage__steps">
              {STEPS.map((s, i) => (
                <li key={s.k} className={i === step ? "is-active" : ""}>
                  <span className="step__k">{s.k}</span>
                  <p>{s.p}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
