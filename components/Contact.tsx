"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "sent" | "error";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading" || status === "sent") return;

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setEmail("");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact__inner">
          <h2 className="contact__title">
            Building the physics-informed
            <br />
            layer for material discovery.
          </h2>
          <p className="lead">
            We&apos;re talking with investors, research partners, and teams sitting on hard
            experimental data. If physics-informed AI is your thesis too, we&apos;d like to
            hear from you.
          </p>
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              placeholder="you@organization.com"
              aria-label="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              disabled={status === "sent"}
              required
            />
            <button
              type="submit"
              className="btn btn--solid"
              disabled={status === "loading" || status === "sent"}
            >
              {status === "loading"
                ? "Sending…"
                : status === "sent"
                  ? "Thank you"
                  : "Request access"}
            </button>
          </form>
          {status === "error" && (
            <p className="contact__alt" role="alert" style={{ color: "#e5484d" }}>
              {error}
            </p>
          )}
          <p className="contact__alt">For investment or research partnership, reach out directly.</p>
        </Reveal>
      </div>
    </section>
  );
}
