"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/**
 * A hairline gold progress bar pinned to the very top of the page (above the
 * floating nav). Spring-smoothed so it glides rather than snaps.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2.5px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, var(--color-gold-deep) 0%, var(--color-gold) 55%, var(--color-gold-soft) 100%)",
        boxShadow: "0 0 12px rgba(181,138,60,0.45)",
      }}
    />
  );
}
