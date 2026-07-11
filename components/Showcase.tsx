"use client";

import { Terminal } from "@/components/ui/terminal";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Carousel from "@/components/ui/carousel";

/* ───────────────── METHOD · macbook scroll with our own screen ───────────────── */
const RESULTS: { rank: number; name: string; formula: string; val: number; pct: number }[] = [
  { rank: 1, name: "Tungsten carbide", formula: "WC", val: 256, pct: 100 },
  { rank: 2, name: "Titanium diboride", formula: "TiB2", val: 200, pct: 78 },
  { rank: 3, name: "Boron carbide", formula: "B4C", val: 174, pct: 68 },
  { rank: 4, name: "Silicon carbide", formula: "SiC", val: 159, pct: 62 },
];

function MethodScreen() {
  return (
    <div className="method-screen">
      <div className="method-screen__bar">
        <div className="method-screen__lights">
          <span className="ml ml--r" />
          <span className="ml ml--y" />
          <span className="ml ml--g" />
        </div>
        <span className="method-screen__label">ALPHA — Screening</span>
        <span />
      </div>
      <div className="ss">
        <div className="ss__head">
          <div className="ss__headL">
            <span className="ss__title">Ranked shortlist</span>
            <span className="ss__sub">predicted shear modulus · GPa</span>
          </div>
          <span className="ss__pill">4 candidates</span>
        </div>
        <div className="ss__rows">
          {RESULTS.map((r) => (
            <div className="ss__row" key={r.formula}>
              <span className="ss__rank">{r.rank}</span>
              <div className="ss__name">
                <b>{r.name}</b>
                <span>{r.formula}</span>
              </div>
              <div className="ss__bar">
                <i style={{ width: `${r.pct}%` }} />
              </div>
              <span className="ss__val">
                {r.val} <em>± 9</em>
              </span>
            </div>
          ))}
        </div>
        <div className="ss__foot">
          every value carries its uncertainty · screening grade, not yet ballistic validated
        </div>
      </div>
    </div>
  );
}

export function MethodMac() {
  return (
    <div className="method" id="workflow">
      <MacbookScroll
        title={
          <>
            Where deep learning
            <br /> meets governing equations.
          </>
        }
        screen={<MethodScreen />}
        showGradient={false}
      />
    </div>
  );
}

/* ───────────────── RESEARCH · 3D carousel ───────────────── */
const DEMO = "https://alpha-physics-labs.github.io/demo/";

const SLIDES = [
  {
    title: "Physics constrained learning",
    description:
      "Governing equations enter the loss, so the model cannot learn a solution the physics forbids.",
    button: "See the live demo",
    href: DEMO,
    src: "/1.png",
  },
  {
    title: "Learns from little data",
    description:
      "Physics priors carry the model where measured data is scarce, down to a couple hundred samples.",
    button: "See the live demo",
    href: DEMO,
    src: "/2.png",
  },
  {
    title: "Fast surrogates for slow simulation",
    description:
      "Differentiable models stand in for expensive simulation, screening thousands in the time of one test.",
    button: "See the live demo",
    href: DEMO,
    src: "/3.png",
  },
  {
    title: "Honest uncertainty on every call",
    description:
      "Each prediction ships with a calibrated confidence and an out of domain flag you can act on.",
    button: "See the live demo",
    href: DEMO,
    src: "/4.png",
  },
  {
    title: "Explainable by design",
    description:
      "Outputs tie back to physical variables, so every recommendation comes with a reason, not a black box score.",
    button: "See the live demo",
    href: DEMO,
    src: "/5.png",
  },
  {
    title: "Transfer across materials",
    description:
      "One physics grounded backbone carries across materials, geometries, and threats.",
    button: "See the live demo",
    href: DEMO,
    src: "/6.png",
  },
];

export function Research() {
  return (
    <section className="research" id="product">
      <div className="container research__head">
        <p className="label">03 · The research</p>
        <h2 className="h2">A physics grounded learning stack.</h2>
        <p className="lead">
          Six ideas do the heavy lifting, from the physics written into the loss function to the
          honest uncertainty on every prediction.
        </p>
      </div>
      <Carousel slides={SLIDES} />
    </section>
  );
}

/* ───────────────── PIPELINE · terminal ───────────────── */
const COMMANDS = [
  "python -m alpha.ingest.build_shear_dataset",
  "python -m alpha.models.train",
  "python -m alpha.models.predict SiC B4C Al2O3 TiB2",
];

const OUTPUTS: Record<number, string[]> = {
  0: ["merged 9,749 materials from 4 public sources"],
  1: ["trained shear modulus model", "R2 0.84   MAE 9.3 GPa   on 1,950 unseen materials"],
  2: [
    "SiC      159 GPa    SCREENING_ONLY",
    "B4C      174 GPa    SCREENING_ONLY",
    "Al2O3    101 GPa    SCREENING_ONLY",
    "TiB2     200 GPa    SCREENING_ONLY",
  ],
};

export function PipelineTerminal() {
  return (
    <section className="section pipeline" id="pipeline">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="eyebrow">The pipeline, running</p>
          <h2 className="h2" style={{ margin: "14px auto 0" }}>
            Real data in, a ranked prediction out.
          </h2>
        </div>
        <Terminal
          commands={COMMANDS}
          outputs={OUTPUTS}
          typingSpeed={45}
          delayBetweenCommands={1000}
          title="alpha — bash"
        />
      </div>
    </section>
  );
}
