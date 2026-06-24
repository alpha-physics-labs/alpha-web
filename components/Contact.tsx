"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact__inner">
          <h2 className="contact__title">
            Spend less time searching.
            <br />
            More time testing the right candidates.
          </h2>
          <p className="lead">
            ALPHA turns material uncertainty into a ranked plan for what to learn next.
            We&apos;d value your feedback — and conversations about data partnership.
          </p>
          <form
            className="contact__form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            noValidate
          >
            <input type="email" placeholder="you@organization.com" aria-label="Email" required />
            <button type="submit" className="btn btn--solid">
              {sent ? "Thank you" : "Share feedback"}
            </button>
          </form>
          <p className="contact__alt">Or reach out to discuss a data partnership.</p>
        </Reveal>
      </div>
    </section>
  );
}
