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
            testing next. They support laboratory, military, and operational testing rather than
            replace it. Physical testing stays the ground truth.
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
          <p className="label">01 · The thesis</p>
          <h2 className="h2">Coupons are expensive. Guesses are more expensive.</h2>
        </Reveal>
        <div className="split__body">
          <Reveal>
            <p className="lead">
              A protective material team has to choose the next handful of coupons to fabricate
              and shoot. That decision sits buried under inconsistent property, process,
              simulation, and test data, and chemistry alone cannot tell you how a full stack
              will actually perform. Every wrong test costs weeks and real money.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead" style={{ color: "var(--accent)" }}>
              Others tell you what to make. ALPHA tells you whether it is likely to work, before
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
  ["01", "Physics constrained learning", "Governing equations enter the loss function directly, so the model cannot learn solutions the physics forbids."],
  ["02", "Data efficiency", "Physics priors do the heavy lifting where measured data is scarce, learning from tens of experiments rather than millions."],
  ["03", "Fast surrogates", "Quick, fully differentiable models that stand in for expensive simulation and open the door to inverse design."],
  ["04", "Honest uncertainty", "Every prediction carries a calibrated confidence, so teams know exactly where the model is guessing."],
  ["05", "Explainable by design", "Because outputs tie back to physical variables, every recommendation comes with a reason rather than a black box score."],
  ["06", "Transfer across domains", "The same physics grounded backbone carries across materials, geometries, and operating regimes."],
];

export function Capabilities() {
  return (
    <section className="section caps" id="product">
      <div className="container">
        <Reveal className="split__head">
          <p className="label">03 · The research</p>
          <h2 className="h2">A physics grounded learning stack.</h2>
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
          <p className="label">04 · In practice</p>
          <h2 className="h2">Predictions that come with a reason and a next experiment.</h2>
          <p className="lead">
            A worked example. Our first area is protective, high performance materials. Given a
            light, stiff, thermally stable requirement, the model returns ranked candidates with
            a calibrated confidence, the physical risk, and the single most useful test to run
            next.
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
              <li>Brittle fracture behavior</li><li>Manufacturing cost</li><li>Configuration specific validation</li>
            </ul>
            <p className="cand__next">
              Next test. Compare against alumina ceramic and UHMWPE backed configurations under
              controlled conditions.
            </p>
          </Reveal>

          <Reveal as="article" className="cand" delay={0.08}>
            <header>
              <span className="cand__rank">Candidate 2</span>
              <span className="cand__score score--mid">Strong</span>
            </header>
            <h3>Alumina ceramic</h3>
            <ul className="cand__list cand__list--why"><li>Mature, available data</li><li>Known protective use</li></ul>
            <ul className="cand__list cand__list--risk"><li>Heavier than alternatives</li></ul>
            <p className="cand__next">Next test. Compare areal density and backing configuration.</p>
          </Reveal>

          <Reveal as="article" className="cand" delay={0.14}>
            <header>
              <span className="cand__rank">Candidate 3</span>
              <span className="cand__score score--mid">Medium</span>
            </header>
            <h3>UHMWPE laminate</h3>
            <ul className="cand__list cand__list--why"><li>Low weight</li><li>Strong fiber performance</li></ul>
            <ul className="cand__list cand__list--risk"><li>Sensitive to threat and temperature</li></ul>
            <p className="cand__next">Next test. Validate the performance envelope under the selected threat scenario.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── DATA STRATEGY ───────────────────────── */
const LAYERS = [
  ["Layer 01", "Public material data", "Composition, density, elastic and bulk modulus, hardness, stability, and thermal properties.", false],
  ["Layer 02", "Literature mining", "Papers become structured records through extraction, model assisted structuring, and human review.", false],
  ["Layer 03", "Experimental references", "Thickness, layup, projectile, velocity, angle, V50 and backface where available.", false],
  ["Layer 04 · flywheel", "Secure partner data", "Partner test data plugs in as a secure tuning layer that stays in place. This is the moat.", true],
] as const;

export function DataStrategy() {
  return (
    <section className="section data" id="data">
      <div className="container">
        <Reveal className="split__head">
          <p className="label">05 · Data strategy</p>
          <h2 className="h2">A training base that compounds from many sources.</h2>
        </Reveal>
        <Reveal>
          <p className="lead lead--wide">
            ALPHA starts on open material data and public literature to train the physics
            grounded backbone. The same design then lets trusted partner test data plug in as a
            secure tuning layer, a private data flywheel that grows stronger with every
            experiment.
            <span className="lead-hint"> Drag the layers around. They snap back into place.</span>
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
  ["Governing equations", "Momentum, energy, and mass conservation enter the network as soft constraints, the physics residual."],
  ["Physics residual loss", "Training lowers data error and equation error together, so the model fits reality and respects the laws."],
  ["Honest uncertainty", "The network reports a calibrated confidence, separating what it has learned from what it is reaching for."],
  ["Configuration in context", "Strike face, backing, layers, thickness, areal density, threat. A material only means something inside a full configuration."],
];

export function TechFoundation() {
  return (
    <section className="section tech" id="vision">
      <div className="container split">
        <Reveal className="split__head">
          <p className="label">06 · The science</p>
          <h2 className="h2">Data driven models, held to physical law.</h2>
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
  { title: "Now", now: true, items: ["First working model on public data", "Predicts shear modulus from chemistry", "Held out accuracy of R² 0.84", "Honest evidence labels on every result", "Data pipeline with full provenance"] },
  { title: "Next", items: ["Physics layer with known scaling laws", "Materials Project ingestion", "Literature extraction pipeline", "Calibrated uncertainty on each call", "Out of domain warnings"] },
  { title: "Later", items: ["Ballistic prediction with a partner", "Validation inside partner environments", "Predict, test, then confirm", "Secure deployment", "Peer reviewed validation"] },
];

export function Roadmap() {
  return (
    <section className="section roadmap" id="roadmap">
      <div className="container">
        <Reveal className="split__head">
          <p className="label">07 · Roadmap</p>
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
          <p>Physics grounded material intelligence.</p>
        </div>
        <p className="footer__disc">
          ALPHA is an early stage research venture. Model outputs support analysis and
          experiment planning. Final performance must be confirmed through the right standards,
          laboratory testing, and expert review.
        </p>
        <p className="footer__copy">© 2026 ALPHA · Research venture</p>
      </div>
    </footer>
  );
}
