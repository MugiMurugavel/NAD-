"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/** The one editorial easing curve used everywhere on the site. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Canonical staggered-entrance variants. Apply `sectionContainer` to a
 * section's content wrapper (initial="hidden" whileInView="show") and
 * `sectionItem` to each direct content block — they rise + fade in sequence
 * as the section enters the viewport. Shared so every section moves alike.
 */
export const sectionContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

export const sectionItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

/**
 * Scroll-triggered reveal. Sections rise + fade in as they enter the
 * viewport, with a slow editorial easing curve. Respects reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 34,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
