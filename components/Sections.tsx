import Reveal from "./Reveal";
import { DraggableCard } from "./ui/draggable-card";

/* ───────────────────────── MVP NOTICE ───────────────────────── */
export function MvpNotice() {
  return (
    <section className="notice" id="mvp">
      <div className="container">
        <Reveal className="notice__card">
          <span className="notice__tag">Research</span>
          <p>
            ALPHA is decision support, not a verdict. Our models help teams decide what is worth
            testing next — they augment laboratory, military, and operational testing rather than
            replace it. Physical validation remains the ground truth.
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
          <p className="label">01 — The thesis</p>
          <h2 className="h2">Coupons are expensive. Guesses are more expensive.</h2>
        </Reveal>
        <div className="split__body">
          <Reveal>
            <p className="lead">
              A protective-material team has to choose the next handful of coupons to fabricate
              and shoot. That decision is buried under inconsistent property, process,
              simulation, and test data — and composition alone can&apos;t tell you how a full
              stack will actually perform. Every wrong test costs weeks and real money.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead" style={{ color: "var(--accent)" }}>
              Incumbents tell you what to make. ALPHA tells you whether it will work — before
              you spend on the test.
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
  ["01", "PDE-constrained learning", "Governing equations enter the loss function directly, so the model can't learn physically impossible solutions."],
  ["02", "Data efficiency", "Physics priors do the heavy lifting where labels are scarce — learning from tens of experiments, not millions."],
  ["03", "Differentiable surrogates", "Fast, end-to-end differentiable models that stand in for expensive simulation and enable inverse design."],
  ["04", "Uncertainty quantification", "Every prediction carries calibrated confidence, so teams know exactly where the model is guessing."],
  ["05", "Explainable by construction", "Because outputs are tied to physical variables, recommendations come with reasons, not black-box scores."],
  ["06", "Cross-domain transfer", "The same physics-informed backbone generalizes across materials, geometries, and operating regimes."],
];

export function Capabilities() {
  return (
    <section className="section caps" id="product">
      <div className="container">
        <Reveal className="split__head">
          <p className="label">03 — The research</p>
          <h2 className="h2">A physics-informed learning stack.</h2>
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
          <p className="label">04 — In practice</p>
          <h2 className="h2">Predictions that come with a reason and a next experiment.</h2>
          <p className="lead">
            A worked example: our first application domain is protective, high-performance
            materials. Given a lightweight, high-stiffness, thermally stable requirement, the
            model returns ranked candidates with calibrated confidence, physical risk, and the
            single most informative test to run next.
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
  ["Layer 04 · flywheel", "Secure partner data", "Mission-partner test data integrates as a secure fine-tuning layer — the proprietary moat.", true],
] as const;

export function DataStrategy() {
  return (
    <section className="section data" id="data">
      <div className="container">
        <Reveal className="split__head">
          <p className="label">05 — Data strategy</p>
          <h2 className="h2">A compounding, multi-source training substrate.</h2>
        </Reveal>
        <Reveal>
          <p className="lead lead--wide">
            ALPHA bootstraps on open material data and public literature to pre-train the
            physics-informed backbone. The same architecture then lets trusted partner test
            data plug in as a secure fine-tuning layer — a proprietary data flywheel that
            compounds with every experiment.
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
  ["Governing equations", "Momentum, energy, and mass conservation enter the network as soft constraints — the physics residual."],
  ["Physics-residual loss", "Training minimizes data error and equation error together, so the model fits reality and respects the laws."],
  ["Uncertainty quantification", "The network reports calibrated confidence, separating what it has learned from what it is extrapolating."],
  ["Configuration in context", "Strike face, backing, layers, thickness, areal density, threat. Materials are only meaningful in a full configuration."],
];

export function TechFoundation() {
  return (
    <section className="section tech" id="vision">
      <div className="container split">
        <Reveal className="split__head">
          <p className="label">06 — The science</p>
          <h2 className="h2">Data-driven models, held to physical law.</h2>
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
  { title: "Now", now: true, items: ["Research thesis & vision", "PINN architecture prototype", "Physics-residual training loop", "Data strategy", "Worked demonstrations"] },
  { title: "Next", items: ["Materials Project ingestion", "Literature extraction pipeline", "Structured material / test database", "Differentiable surrogate models", "Calibrated uncertainty"] },
  { title: "Later", items: ["Inverse design & optimization", "Partner data flywheel", "Secure deployment", "Peer-reviewed validation", "Expansion beyond materials"] },
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
          <p>Physics-informed neural networks for material discovery.</p>
        </div>
        <p className="footer__disc">
          ALPHA is an early-stage research venture. Model outputs support analysis and
          experiment planning; final performance must be validated through appropriate
          standards, laboratory testing, and expert review.
        </p>
        <p className="footer__copy">© 2026 ALPHA · Research venture</p>
      </div>
    </footer>
  );
}
