"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${stuck ? " is-stuck" : ""}`}>
      <div className="nav__inner">
        <a className="brand" href="#top" aria-label="ALPHA home">
          <span className="brand__mark">
            <Logo />
          </span>
          <span className="brand__word">ALPHA</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <a href="#problem">Thesis</a>
          <a href="#workflow">Method</a>
          <a href="#vision">Science</a>
          <a href="#roadmap">Roadmap</a>
        </nav>

        <a
          href="https://alpha-physics-labs.github.io/demo/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--solid nav__cta"
        >
          See the demo
        </a>
      </div>
    </header>
  );
}
