"use client";
import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 → `to` the first time it scrolls into view. Used for the
 * headline trial stats so the numbers "land" as the reader arrives.
 */
export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1.5,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {Math.round(val)}
      {suffix}
    </span>
  );
}
