"use client";

import { useEffect } from "react";

/**
 * The composition is authored at a fixed 1440px design width. On any viewport
 * narrower than that we scale the whole artboard down with CSS `zoom` so it
 * always fits the screen width (no horizontal overflow, never "too big").
 * Mobile (<768px) gets dedicated responsive layouts; this keeps the tablet /
 * laptop range pixel-faithful while fitting the viewport.
 */
const DESIGN_WIDTH = 1440;

export default function FitToWidth() {
  useEffect(() => {
    const root = document.documentElement;
    const apply = () => {
      // Below 768px the layout switches to dedicated responsive mobile
      // layouts at real size; only the tablet/laptop range is scaled to fit.
      const w = window.innerWidth;
      const scale = w >= 768 ? Math.min(1, w / DESIGN_WIDTH) : 1;
      root.style.setProperty("--fit-scale", String(scale));
    };
    apply();
    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);
    return () => {
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);
    };
  }, []);

  return null;
}
