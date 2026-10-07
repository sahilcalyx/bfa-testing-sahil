"use client";

import * as React from "react";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

/* ── types ───────────────────────────────────────────────────── */

export type ArcRevealGreeting = {
  /** Greeting text in the target script */
  text: string;
  /** Optional rich content rendered instead of `text`; `text` still keys the transition. */
  content?: React.ReactNode;
  /** Optional `lang` attribute applied to the span (helps screen readers / font rendering) */
  lang?: string;
};

export interface ArcRevealHeroProps {
  /** Greetings cycled before the arc reveal. */
  greetings?: ArcRevealGreeting[];
  /** How long each greeting is held on screen (ms). */
  greetingHold?: number;
  /** Duration of the curved curtain reveal (ms). */
  revealDuration?: number;
  /** Outer `<section>` class. Receives the *post-reveal* surface. */
  className?: string;
  /** Class for the intro (pre-reveal) overlay surface. */
  introClassName?: string;
  /** Class for the cycled greeting `<span>`. */
  greetingClassName?: string;
  /** Class for the wrapper around `children` (the revealed content). */
  revealClassName?: string;
  /**
   * Optional `sessionStorage` key — when set, the intro plays only once per
   * session for the same key. Leave unset to replay on every mount.
   */
  storageKey?: string;
  /** Content shown after the curtain reveal (the "landing"). */
  children?: React.ReactNode;
}

/* ── defaults ────────────────────────────────────────────────── */

const DEFAULT_GREETINGS: ArcRevealGreeting[] = [
  { text: "Quiet." },
  { text: "Sharp." },
  { text: "Calm." },
  { text: "Crafted." },
  { text: "Considered." },
  { text: "Composed." },
  { text: "Honest." },
  { text: "Ready." },
];

type Phase = "intro" | "reveal" | "done";

/* ── component ───────────────────────────────────────────────── */

export function ArcRevealHero({
  greetings = DEFAULT_GREETINGS,
  greetingHold = 620,
  revealDuration = 1500,
  className,
  introClassName,
  greetingClassName,
  revealClassName,
  storageKey,
  children,
}: ArcRevealHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const [phase, setPhase] = React.useState<Phase>("intro");
  const [index, setIndex] = React.useState(0);

  // Drive the arc shape from a single 0→1 progress.
  // The curve is a quadratic bezier with a fixed concavity (control point
  // sits 25 viewBox units below the chord), translated upward over time:
  //   t=0 → chord at y=110 (off-screen below)  → no curtain visible
  //   t=1 → chord at y=-30 (off-screen above)  → full-screen curtain
  const progress = useMotionValue(0);
  const arcPath = useTransform(progress, (p: number) => {
    const edge = 110 - p * 140;
    const control = edge + 25;
    return `M 0 ${edge} Q 50 ${control} 100 ${edge} L 100 110 L 0 110 Z`;
  });

  // Honor reduced-motion + replay-suppression on mount.
  React.useEffect(() => {
    if (prefersReducedMotion) {
      setPhase("done");
      return;
    }
    if (storageKey && typeof window !== "undefined") {
      try {
        if (window.sessionStorage.getItem(storageKey) === "done") {
          setPhase("done");
        }
      } catch {
        /* sessionStorage can throw in private mode — fall through */
      }
    }
  }, [prefersReducedMotion, storageKey]);

  // Greeting cycle.
  React.useEffect(() => {
    if (phase !== "intro") return;
    const isLast = index >= greetings.length - 1;
    if (isLast) {
      const t = window.setTimeout(() => setPhase("reveal"), greetingHold + 220);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setIndex((i) => i + 1), greetingHold);
    return () => window.clearTimeout(t);
  }, [phase, index, greetingHold, greetings.length]);

  // Drive the curtain reveal.
  React.useEffect(() => {
    if (phase !== "reveal") return;
    let settle = 0;
    const controls = animate(progress, 1, {
      duration: revealDuration / 1000,
      ease: [0.85, 0, 0.15, 1],
      onComplete: () => {
        // Hold until the overlay fade and the page rise have overlapped,
        // so the landing is gone before the overlay unmounts.
        settle = window.setTimeout(() => {
          if (storageKey && typeof window !== "undefined") {
            try {
              window.sessionStorage.setItem(storageKey, "done");
            } catch {
              /* ignore */
            }
          }
          setPhase("done");
        }, 480);
      },
    });
    return () => {
      controls.stop();
      window.clearTimeout(settle);
    };
  }, [phase, progress, revealDuration, storageKey]);

  const showOverlay = phase !== "done";
  const current = greetings[Math.min(index, greetings.length - 1)];
  const handoff = [0.22, 1, 0.36, 1] as const;
  const revealSeconds = revealDuration / 1000;
  // The half-circle finishes first. The page then fades in immediately,
  // so the full white curtain does not sit on screen.
  const handoffDelay = phase === "reveal" ? revealSeconds * 0.9 : 0;
  const handoffDuration = 0.45;

  return (
    <section
      aria-label="Hero"
      className={cn(
        "relative isolate min-h-screen w-full overflow-hidden bg-background text-foreground",
        className,
      )}
    >
      <motion.div
        className={cn("relative z-0", revealClassName)}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={
          phase === "intro"
            ? { opacity: 0, y: 12 }
            : { opacity: 1, y: 0 }
        }
        transition={{
          duration: handoffDuration,
          delay: handoffDelay,
          ease: handoff,
        }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="arc-reveal-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === "reveal" ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: handoffDuration,
              delay: handoffDelay,
              ease: handoff,
            }}
            className={cn(
              "absolute inset-x-0 top-0 z-30 h-screen overflow-hidden bg-foreground",
              introClassName,
            )}
          >
            {/* Cycled greeting */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {phase === "intro" && current && (
                  <motion.span
                    key={`${index}-${current.text}`}
                    lang={current.lang}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "select-none px-6 text-center text-5xl font-semibold tracking-tight text-background sm:text-6xl md:text-7xl",
                      greetingClassName,
                    )}
                  >
                    {current.content ?? current.text}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Rising curved curtain */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <motion.path d={arcPath} style={{ fill: "hsl(var(--background))" }} />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ArcRevealHero;
