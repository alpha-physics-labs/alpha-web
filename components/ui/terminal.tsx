"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";

type Line = { kind: "cmd" | "out"; text: string };

interface TerminalProps {
  commands: string[];
  outputs?: Record<number, string[]>;
  typingSpeed?: number;
  delayBetweenCommands?: number;
  title?: string;
  className?: string;
}

export function Terminal({
  commands,
  outputs = {},
  typingSpeed = 45,
  delayBetweenCommands = 1000,
  title = "alpha — bash",
  className,
}: TerminalProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const inView = useInView(hostRef, { once: true, amount: 0.4 });
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    (async () => {
      for (let i = 0; i < commands.length; i++) {
        const cmd = commands[i];
        setTyping("");
        for (let c = 1; c <= cmd.length; c++) {
          if (cancelled) return;
          setTyping(cmd.slice(0, c));
          await wait(typingSpeed);
        }
        if (cancelled) return;
        setLines((prev) => [...prev, { kind: "cmd", text: cmd }]);
        setTyping("");
        await wait(280);
        for (const out of outputs[i] ?? []) {
          if (cancelled) return;
          setLines((prev) => [...prev, { kind: "out", text: out }]);
          await wait(130);
        }
        await wait(delayBetweenCommands);
      }
      if (!cancelled) setDone(true);
    })();

    return () => {
      cancelled = true;
      timers.forEach((t) => clearTimeout(t));
    };
  }, [inView, commands, outputs, typingSpeed, delayBetweenCommands]);

  return (
    <div ref={hostRef} className={cn("terminal", className)}>
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--r" />
        <span className="terminal__dot terminal__dot--y" />
        <span className="terminal__dot terminal__dot--g" />
        <span className="terminal__title">{title}</span>
      </div>
      <div className="terminal__body">
        {lines.map((l, idx) => (
          <div key={idx} className={l.kind === "cmd" ? "terminal__cmd" : "terminal__out"}>
            {l.kind === "cmd" && <span className="terminal__prompt">$</span>}
            {l.text}
          </div>
        ))}
        {!done && (
          <div className="terminal__cmd">
            <span className="terminal__prompt">$</span>
            {typing}
            <span className="terminal__cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
