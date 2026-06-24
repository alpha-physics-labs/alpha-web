import Reveal from "./Reveal";
import { DraggableCard } from "./ui/draggable-card";

/* ───────────────────────── MVP NOTICE ───────────────────────── */
export function MvpNotice() {
  return (
    <section className="notice" id="mvp">
      <div className="container">
        <Reveal className="notice__card">
          <span className="notice__tag">MVP</span>
          <p>
            ALPHA is an early MVP and product vision. It helps teams decide what may be
            worth testing next — it does <strong>not</strong> replace laboratory, NIJ,
            military, or operational testing, and it is not a certified armor design tool.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── PROBLEM ───────────────────────── */
const SCATTER = [
  "density", "elastic modulus", "V50", "fracture toughness", "areal density",
  "layup", "impact angle", "backface signature", "hardness", "velocity",
  "thermal stability", "manufacturing risk",
];

export function Problem() {
  return (
    <section className="section problem" id="problem">
      <div className="container split">
        <Reveal className="split__head">
          <p className="label">01 — The problem</p>
          <h2 className="h2">Material selection is still too fragmented.</h2>
        </Reveal>
        <div className="split__body">
          <Reveal>
            <p className="lead">
              Protective material teams work across papers, databases, simulations, and test
              reports. The evidence is valuable, but it&apos;s hard to compare. Density,
              stiffness, toughness, thickness, backing materials, threat conditions, and test
              outcomes all pull in different directions.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead" style={{ color: "var(--accent)" }}>
              Before a team can test everything, it needs to know what&apos;s worth testing.
            </p>
          </Reveal>
          <Reveal as="ul" className="scatter" delay={0.12}>
            {SCATTER.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CAPABILITIES ───────────────────────── */
const CAPS = [
  ["01", "Material profiles", "Clean, comparable records for materials, properties, and known constraints — side by side."],
  ["02", "Candidate ranking", "Prioritize materials by mission-relevant tradeoffs and available evidence, not a single property."],
  ["03", "Literature intelligence", "Extract structured material and test signals from public reports and research papers."],
  ["04", "Physics-informed analysis", "Connect material properties to measurable variables — density, thickness, velocity, energy."],
  ["05", "Explainable recommendations", "Show why a candidate is promising, what's uncertain, and what test should come next."],
  ["06", "Test-planning support", "Move from guesswork to clearer experiments — what to test, where uncertainty is highest."],
];

export function Capabilities() {
  return (
    <section className="section caps" id="product">
      <div className="container">
        <Reveal className="split__head">
          <p className="label">03 — The product</p>
          <h2 className="h2">A material intelligence layer.</h2>
        </Reveal>
        <div className="cards">
          {CAPS.map(([idx, title, body], i) => (
            <Reveal as="article" className="card" key={idx} delay={i * 0.05}>
              <span className="card__idx">{idx}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── EXAMPLE OUTPUT ───────────────────────── */
export function Example() {
  return (
    <section className="section example" id="example">
      <div className="container split">
        <Reveal className="split__head">
          <p className="label">04 — Example output</p>
          <h2 className="h2">Every recommendation comes with a reason and a next step.</h2>
          <p className="lead">
            A worked example for a lightweight, high-stiffness, thermally stable requirement
            in early research. Outputs show confidence, risk, and what to test next.
          </p>
        </Reveal>

        <div className="candidates">
          <Reveal as="article" className="cand cand--top">
            <header>
              <span className="cand__rank">Candidate 1</span>
              <span className="cand__score score--high">High</span>
            </header>
            <h3>Silicon carbide composite</h3>
            <ul className="cand__list cand__list--why">
              <li>Low density</li><li>High hardness</li><li>Strong stiffness profile</li>
            </ul>
            <ul className="cand__list cand__list--risk">
              <li>Brittle fracture behavior</li><li>Manufacturing cost</li><li>Configuration-specific validation</li>
            </ul>
            <p className="cand__next">
              Next test — compare against alumina ceramic and UHMWPE-backed configurations
              under controlled conditions.
            </p>
          </Reveal>

          <Reveal as="article" className="cand" delay={0.08}>
            <header>
              <span className="cand__rank">Candidate 2</span>
              <span className="cand__score score--mid">Medium-high</span>
            </header>
            <h3>Alumina ceramic</h3>
            <ul className="cand__list cand__list--why"><li>Mature, available data</li><li>Known protective use</li></ul>
            <ul className="cand__list cand__list--risk"><li>Heavier than alternatives</li></ul>
            <p className="cand__next">Next test — compare areal density and backing configuration.</p>
          </Reveal>

          <Reveal as="article" className="cand" delay={0.14}>
            <header>
              <span className="cand__rank">Candidate 3</span>
              <span className="cand__score score--mid">Medium</span>
            </header>
            <h3>UHMWPE laminate</h3>
            <ul className="cand__list cand__list--why"><li>Low weight</li><li>Strong fiber performance</li></ul>
            <ul className="cand__list cand__list--risk"><li>Threat- and temperature-dependent</li></ul>
            <p className="cand__next">Next test — validate performance envelope under the selected threat scenario.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── DATA STRATEGY ───────────────────────── */
const LAYERS = [
  ["Layer 01", "Public material data", "Composition, density, elastic & bulk modulus, hardness, stability, thermal properties.", false],
  ["Layer 02", "Literature mining", "PDF → extraction → LLM-assisted structuring → human review → structured records.", false],
  ["Layer 03", "Experimental references", "Thickness, layup, projectile, velocity, angle, V50 and backface where available.", false],
  ["Layer 04 · future", "Secure partner data", "Designed so mission-partner test data can later integrate as a secure layer.", true],
] as const;

export function DataStrategy() {
  return (
    <section className="section data" id="data">
      <div className="container">
        <Reveal className="split__head">
          <p className="label">05 — Data strategy</p>
          <h2 className="h2">Built around a multi-source data foundation.</h2>
        </Reveal>
        <Reveal>
          <p className="lead lead--wide">
            ALPHA starts with open material data and public literature to prove the workflow.
            Over time, the same architecture lets trusted partner test data plug in as a secure
            validation and fine-tuning layer.
            <span className="lead-hint"> Drag the layers around — they snap back into place.</span>
          </p>
        </Reveal>
        <div className="layers">
          {LAYERS.map(([n, title, body, future], i) => (
            <Reveal key={n} delay={i * 0.06}>
              <DraggableCard className={`layer${future ? " layer--future" : ""}`}>
                <span className="layer__n">{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </DraggableCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── TECHNICAL FOUNDATION ───────────────────────── */
const CONCEPTS = [
  ["V50 / ballistic limit", "Where data exists, ALPHA uses V50-style indicators to compare performance trends across materials and configurations."],
  ["Backface signature", "When test data supports it, deformation-related indicators are included in candidate evaluation."],
  ["Threat conditions", "A material is only meaningful against a defined threat — projectile type, mass, velocity, impact angle."],
  ["Configuration matters", "Strike face, backing, layers, thickness, areal density, weave. ALPHA evaluates materials in context."],
];

export function TechFoundation() {
  return (
    <section className="section tech" id="vision">
      <div className="container split">
        <Reveal className="split__head">
          <p className="label">06 — Technical foundation</p>
          <h2 className="h2">Data-driven models, held to physical constraints.</h2>
        </Reveal>
        <div className="split__body">
          <dl className="concepts">
            {CONCEPTS.map(([t, d], i) => (
              <Reveal className="concept" key={t} delay={i * 0.05}>
                <dt>{t}</dt>
                <dd>{d}</dd>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={0.1}>
            <pre className="codeblock" aria-label="Example extracted record">
              <code>{`{
  "material": "alumina ceramic composite",
  "thickness_mm": 10,
  "projectile": "7.62 mm threat",
  "velocity_mps": 850,
  "reported_result": "stopped",
  "source_type": "public literature"
}`}</code>
            </pre>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── ROADMAP ───────────────────────── */
const PHASES: { title: string; now?: boolean; items: string[] }[] = [
  { title: "Now", now: true, items: ["MVP product & vision", "Material comparison concept", "Candidate ranking examples", "Data strategy", "Demo workflow"] },
  { title: "Next", items: ["Materials Project ingestion", "Literature extraction pipeline", "Structured material / test database", "Better candidate scoring", "Explanation cards"] },
  { title: "Later", items: ["V50 / performance modeling", "Uncertainty estimation", "Partner data integration", "Secure deployment", "Validation with domain experts"] },
];

export function Roadmap() {
  return (
    <section className="section roadmap" id="roadmap">
      <div className="container">
        <Reveal className="split__head">
          <p className="label">07 — Roadmap</p>
          <h2 className="h2">Honest about where it is, and where it&apos;s going.</h2>
        </Reveal>
        <div className="phases">
          {PHASES.map((ph, i) => (
            <Reveal className={`phase${ph.now ? " phase--now" : ""}`} key={ph.title} delay={i * 0.08}>
              <h3>{ph.title}</h3>
              <ul>
                {ph.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="brand__word">ALPHA</span>
          <p>Material intelligence for protective systems.</p>
        </div>
        <p className="footer__disc">
          ALPHA supports early-stage analysis and test planning. Final performance must be
          validated through appropriate standards, laboratory testing, and expert review.
        </p>
        <p className="footer__copy">© 2026 ALPHA · DIU project</p>
      </div>
    </footer>
  );
}
