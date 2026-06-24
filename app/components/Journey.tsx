"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { useRef, useState } from "react";
import { J, VIEW, CORE, NODES, STAGES } from "./journey/tokens";

const MONO = "var(--font-mono)";
const DISPLAY = "var(--font-display)";
const LABEL = "var(--font-label)";

/* Scene scroll ranges + captions ------------------------------------------- */
const SCENES = [
  { id: "sub", range: [0.0, 0.14], k: "01 · SUBLINGUAL", t: "Held under the tongue, LNAD⁺ is absorbed sublingually." },
  { id: "blood", range: [0.14, 0.33], k: "02 · BLOODSTREAM", t: "In circulation, blood NAD⁺ reads essentially unchanged." },
  { id: "entry", range: [0.33, 0.48], k: "03 · MEMBRANE", t: "LNAD⁺ is engineered to reach the inside of the cell." },
  { id: "intra", range: [0.48, 0.64], k: "04 · INTRACELLULAR", t: "Inside the cell, intracellular NAD⁺ rises." },
  { id: "nodes", range: [0.64, 0.86], k: "05 · SIGNAL", t: "NAD⁺-dependent pathways engage, in turn." },
];

/* ========================================================================== */

export default function Journey() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  // One smoothed source of truth — buttery but tight, no overshoot.
  const sp = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.0005 });
  const p = sp;

  /* Continuous payload-of-light: one point that travels the whole story */
  const K = [0, 0.08, 0.2, 0.3, 0.4, 0.48, 1];
  const px = useTransform(p, K, [600, 600, 320, 880, 700, 600, 600]);
  const py = useTransform(p, K, [150, 250, 470, 470, 462, 408, 408]);
  const payloadO = useTransform(p, [0, 0.02, 0.46, 0.52], [0, 1, 1, 0]);
  const payloadScale = useTransform(p, [0, 0.46, 0.52], [0.42, 0.42, 1]);

  /* Camera dolly — a *whisper* of a push so the cell never overruns the gauges */
  const camScale = useTransform(p, [0, 0.34, 0.5, 0.84, 1], [1, 1.0, 1.05, 1.05, 1.0]);

  /* Structure opacities (all inputs within [0,1]) */
  const chassisO = useTransform(p, [0, 0.05, 1], [0, 1, 1]);
  const subO = useTransform(p, [0, 0.02, 0.12, 0.16], [0, 1, 1, 0]);
  const vesselO = useTransform(p, [0.12, 0.17, 0.31, 0.36], [0, 1, 1, 0]);
  const cellO = useTransform(p, [0.3, 0.4, 0.86, 0.95], [0, 1, 1, 0.55]);
  const darkO = useTransform(p, [0.44, 0.54, 0.84, 0.93], [0, 1, 1, 0.12]);
  const coreO = useTransform(p, [0.48, 0.6, 0.86, 1], [0, 1, 1, 0.6]);
  const coreScale = useTransform(p, [0.48, 0.64], [0.2, 1]);
  const nodesO = useTransform(p, [0.62, 0.68], [0, 1]);

  /* Dual gauges */
  const chA = useTransform(p, [0.16, 0.3], [0, 1]); // circulating draws, then flat forever
  const chAO = useTransform(p, [0.14, 0.18, 1], [0, 1, 1]);
  const chB = useTransform(p, [0.5, 0.64], [0, 1]); // intracellular climbs to peak
  const chBO = useTransform(p, [0.48, 0.52, 1], [0, 1, 1]);
  const intraFill = useTransform(p, [0.5, 0.64], [0, 1], { clamp: true });
  const intraPct = useTransform(intraFill, [0, 1], [0, 53]);
  const chBHaloO = useTransform(intraFill, [0, 1], [0, 0.18]);
  const bigPctO = useTransform(p, [0.5, 0.56, 0.84, 0.9], [0, 1, 1, 0]);

  /* Resolve */
  const diagramDim = useTransform(p, [0.85, 0.93], [1, 0.3]);
  const resolveO = useTransform(p, [0.85, 0.92], [0, 1]);
  const hintO = useTransform(p, [0, 0.03], [1, 0]);

  if (reduce) {
    return (
      <section style={{ background: J.bg, color: J.navy, padding: "clamp(64px,10vw,120px) 6vw" }}>
        <p style={{ fontFamily: MONO, letterSpacing: "0.22em", fontSize: 12, color: J.gold }}>HOW LNAD⁺ WORKS</p>
        <h2 style={{ fontFamily: DISPLAY, fontSize: "clamp(30px,5vw,56px)", lineHeight: 1.08, margin: "12px 0 0", maxWidth: 820 }}>
          NAD⁺ Biology, Measured Inside the Cell
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 18, color: J.inkSoft, maxWidth: 640, marginTop: 16 }}>
          Absorbed sublingually, LNAD⁺ leaves circulating NAD⁺ essentially unchanged while raising NAD⁺ inside the cell —
          engaging SIRT1, MeNAM, 2PY, redox/detox, immune signaling, lipid handling and tissue context.
        </p>
      </section>
    );
  }

  return (
    <section ref={trackRef} aria-label="How LNAD⁺ works" style={{ position: "relative", height: "700vh", background: J.bg }}>
      <div style={{ position: "sticky", top: 0, height: "100svh", overflow: "hidden", background: J.bg, color: J.navy, contain: "layout paint" }}>
        {/* faint blueprint grid (static) */}
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${J.line} 1px, transparent 1px), linear-gradient(90deg, ${J.line} 1px, transparent 1px)`, backgroundSize: "clamp(40px,6vw,72px) clamp(40px,6vw,72px)", maskImage: "radial-gradient(125% 95% at 50% 45%, #000 38%, transparent 80%)", WebkitMaskImage: "radial-gradient(125% 95% at 50% 45%, #000 38%, transparent 80%)", opacity: 0.7 }} />

        {/* captions (fixed plate, crossfading) */}
        <div className="j-cap" style={{ position: "absolute", top: "clamp(88px,12vh,140px)", left: "clamp(20px,5vw,80px)", maxWidth: "min(440px,78vw)", zIndex: 5 }}>
          {SCENES.map((s) => (
            <Caption key={s.id} p={p} range={s.range as [number, number]} k={s.k} t={s.t} />
          ))}
        </div>

        {/* ============================== STAGE ============================== */}
        <motion.div style={{ position: "absolute", inset: 0, opacity: diagramDim }}>
          <svg className="j-svg" viewBox={`0 0 ${VIEW.w} ${VIEW.h}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
            <defs>
              <radialGradient id="jCore" cx="50%" cy="46%" r="60%">
                <stop offset="0%" stopColor={J.coral} stopOpacity="0.9" />
                <stop offset="22%" stopColor={J.goldSoft} stopOpacity="0.85" />
                <stop offset="55%" stopColor={J.gold} stopOpacity="0.4" />
                <stop offset="100%" stopColor={J.gold} stopOpacity="0" />
              </radialGradient>
              <radialGradient id="jPayload" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="40%" stopColor={J.goldSoft} stopOpacity="0.95" />
                <stop offset="100%" stopColor={J.gold} stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* ---- CHASSIS (instrument frame, fixed) ---- */}
            <motion.g style={{ opacity: chassisO }}>
              <rect x={42} y={40} width={1116} height={680} fill="none" stroke={J.navy} strokeWidth={1.4} strokeOpacity={0.5} />
              {CORNERS.map(([cx, cy], i) => (
                <g key={i} stroke={J.graphite} strokeWidth={1.3} strokeOpacity={0.7}>
                  <line x1={cx - 9} y1={cy} x2={cx + 9} y2={cy} />
                  <line x1={cx} y1={cy - 9} x2={cx} y2={cy + 9} />
                </g>
              ))}
              <g stroke={J.graphite} strokeWidth={1} strokeOpacity={0.45}>
                <line x1={CORE.x - 13} y1={CORE.y} x2={CORE.x + 13} y2={CORE.y} />
                <line x1={CORE.x} y1={CORE.y - 13} x2={CORE.x} y2={CORE.y + 13} />
              </g>
            </motion.g>

            {/* ---- CHANNEL A — Circulating NAD⁺ (coral, flat forever) ---- */}
            <motion.g style={{ opacity: chAO }}>
              <motion.path d="M 360 116 L 840 116" fill="none" stroke={J.coral} strokeWidth={2.6} strokeLinecap="round" style={{ pathLength: chA }} />
              <motion.circle cx={840} cy={116} r={5} fill={J.coral} style={{ opacity: chA }} />
              <text x={360} y={100} style={{ fontFamily: MONO, fontSize: 13.5, letterSpacing: "0.04em", fill: J.inkSoft }}>CIRCULATING NAD⁺</text>
              <text x={840} y={100} textAnchor="end" style={{ fontFamily: MONO, fontSize: 12.5, letterSpacing: "0.12em", fill: J.coral }}>UNCHANGED</text>
            </motion.g>

            {/* ---- CHANNEL B — Intracellular NAD⁺ (gold, rising) ---- */}
            <motion.g style={{ opacity: chBO }}>
              <line x1={360} y1={700} x2={840} y2={700} stroke={J.line} strokeWidth={1.2} />
              <motion.path d="M 360 700 C 470 698 560 688 620 672 C 720 648 790 626 840 606" fill="none" stroke={J.gold} strokeWidth={2.8} strokeLinecap="round" style={{ pathLength: chB }} />
              <motion.circle cx={840} cy={606} r={6} fill={J.gold} style={{ opacity: intraFill }} />
              <motion.circle cx={840} cy={606} r={16} fill={J.gold} style={{ opacity: chBHaloO }} />
              <text x={360} y={684} style={{ fontFamily: MONO, fontSize: 13.5, letterSpacing: "0.04em", fill: J.goldDeep }}>INTRACELLULAR NAD⁺ · icNAD⁺</text>
            </motion.g>

            {/* ======================= CAMERA (science) ======================= */}
            <g transform={`translate(${CORE.x} ${CORE.y})`}>
              <motion.g style={{ scale: camScale }}>
                <g transform={`translate(${-CORE.x} ${-CORE.y})`}>
                  {/* SCENE 1 — sublingual mucosa */}
                  <motion.g style={{ opacity: subO }}>
                    <path d="M 200 260 Q 600 162 1000 260" fill="none" stroke={J.blue} strokeWidth={2.4} strokeLinecap="round" />
                    <path d="M 200 292 Q 600 196 1000 292" fill="none" stroke={J.blueGlow} strokeWidth={1.4} strokeDasharray="3 9" strokeLinecap="round" />
                    <text x={600} y={336} textAnchor="middle" style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.16em", fill: J.graphite }}>SUBLINGUAL MUCOSA</text>
                  </motion.g>

                  {/* SCENE 2 — bloodstream vessel + drifting plasma rings */}
                  <motion.g style={{ opacity: vesselO }}>
                    <rect x={120} y={432} width={960} height={116} rx={58} fill={J.paper} stroke={J.line} strokeWidth={2} />
                    {[180, 300, 430, 760, 900, 1000].map((cx, i) => (
                      <Plasma key={i} p={p} cx={cx} cy={490 + (i % 2 === 0 ? -14 : 16)} />
                    ))}
                  </motion.g>

                  {/* SCENE 3–5 — the cell */}
                  <motion.g style={{ opacity: cellO }}>
                    <circle cx={CORE.x} cy={CORE.y} r={186} fill={J.paper} stroke={J.blue} strokeWidth={2.4} />
                    <circle cx={CORE.x} cy={CORE.y} r={178} fill="none" stroke={J.blueGlow} strokeWidth={1.3} strokeDasharray="2 10" />
                  </motion.g>
                  {/* dark intracellular field — gold glows on it */}
                  <motion.circle cx={CORE.x} cy={CORE.y} r={184} fill={J.inkDeep} style={{ opacity: darkO }} />

                  {/* ambient gold orbital signature (static) behind nodes */}
                  <motion.g style={{ opacity: nodesO }}>
                    <ellipse cx={CORE.x} cy={CORE.y} rx={214} ry={128} transform={`rotate(-14 ${CORE.x} ${CORE.y})`} fill="none" stroke={J.gold} strokeOpacity={0.2} />
                    <ellipse cx={CORE.x} cy={CORE.y} rx={176} ry={202} transform={`rotate(12 ${CORE.x} ${CORE.y})`} fill="none" stroke={J.gold} strokeOpacity={0.13} />
                  </motion.g>

                  {/* SCENE 4 — core bloom */}
                  <motion.g style={{ opacity: coreO }}>
                    <motion.circle cx={CORE.x} cy={CORE.y} r={150} fill="url(#jCore)" style={{ scale: coreScale, transformBox: "fill-box", transformOrigin: "center" }} />
                  </motion.g>

                  {/* SCENE 5 — downstream cascade */}
                  <motion.g style={{ opacity: nodesO }}>
                    {NODES.map((node, i) => (
                      <GraphNode key={node.id} p={p} node={node} index={i} total={NODES.length} />
                    ))}
                    <circle cx={CORE.x} cy={CORE.y} r={8} fill={J.gold} stroke={J.cream} strokeWidth={2} />
                  </motion.g>

                  {/* THE PAYLOAD */}
                  <motion.g style={{ x: px, y: py, opacity: payloadO }}>
                    <motion.circle cx={0} cy={0} r={22} fill="url(#jPayload)" style={{ scale: payloadScale, transformBox: "fill-box", transformOrigin: "center" }} />
                    <circle cx={0} cy={0} r={3.6} fill="#FFFFFF" />
                  </motion.g>
                </g>
              </motion.g>
            </g>
          </svg>

          {/* big intracellular readout */}
          <motion.div style={{ position: "absolute", left: "50%", top: "50%", x: "-50%", y: "-50%", opacity: bigPctO, fontFamily: DISPLAY, fontWeight: 500, fontSize: "clamp(44px,7.5vw,104px)", color: "#FFFFFF", textShadow: "0 2px 22px rgba(16,20,30,0.6), 0 0 64px rgba(181,138,60,0.6)", pointerEvents: "none", letterSpacing: "-0.02em" }}>
            <MotionPercent value={intraPct} />
          </motion.div>
        </motion.div>

        {/* ============================ DEPTH HUD ============================ */}
        <div className="j-hud" style={{ position: "absolute", right: "clamp(18px,3.5vw,54px)", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "clamp(14px,2.4vh,26px)", zIndex: 5 }}>
          {STAGES.map((s, i) => (
            <HudLabel key={s} p={p} index={i} total={STAGES.length} label={s} />
          ))}
        </div>

        {/* ============================= RESOLVE ============================= */}
        <motion.div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 6vw", opacity: resolveO, zIndex: 6, pointerEvents: "none" }}>
          <ResolveWord p={p} />
        </motion.div>

        {/* scroll hint */}
        <motion.div style={{ position: "absolute", bottom: "clamp(18px,3.5vh,36px)", left: "50%", x: "-50%", opacity: hintO, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: J.graphite, zIndex: 5 }}>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.22em" }}>SCROLL TO EXPLORE</span>
          <motion.div animate={{ y: 5 }} transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
            <svg width="15" height="22" viewBox="0 0 15 22" fill="none"><rect x="1" y="1" width="13" height="20" rx="6.5" stroke={J.graphite} strokeWidth="1.3" /><circle cx="7.5" cy="7" r="1.8" fill={J.graphite} /></svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const CORNERS: [number, number][] = [
  [42, 40],
  [1158, 40],
  [42, 720],
  [1158, 720],
];

/* ========================================================================== */
/*  Sub-components                                                            */
/* ========================================================================== */

function MotionPercent({ value }: { value: MotionValue<number> }) {
  const [n, setN] = useState(0);
  useMotionValueEvent(value, "change", (v) => setN(Math.round(v)));
  return <>+{n}%</>;
}

function Caption({ p, range, k, t }: { p: MotionValue<number>; range: [number, number]; k: string; t: string }) {
  const [a, b] = range;
  const lo = Math.max(0, a - 0.035);
  const opacity = useTransform(p, [lo, a + 0.01, b - 0.04, b], [0, 1, 1, 0], { clamp: true });
  const y = useTransform(p, [lo, a + 0.02], [16, 0], { clamp: true });
  return (
    <motion.div style={{ position: "absolute", top: 0, left: 0, opacity, y }}>
      <p style={{ fontFamily: MONO, letterSpacing: "0.2em", fontSize: 12, color: J.gold, margin: "0 0 14px" }}>{k}</p>
      <p style={{ fontFamily: DISPLAY, fontWeight: 500, fontSize: "clamp(18px,2.6vw,38px)", lineHeight: 1.16, letterSpacing: "-0.01em", color: J.navy, margin: 0 }}>{t}</p>
    </motion.div>
  );
}

function HudLabel({ p, index, total, label }: { p: MotionValue<number>; index: number; total: number; label: string }) {
  const center = (index + 0.5) / total;
  const lo = Math.max(0, center - 0.14);
  const hi = Math.min(1, center + 0.14);
  const active = useTransform(p, [lo, center, hi], [0.32, 1, 0.32], { clamp: true });
  const dotO = useTransform(p, [lo, center, hi], [0, 1, 0], { clamp: true });
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9, justifyContent: "flex-end" }}>
      <motion.span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.18em", color: J.navy, opacity: active }}>{label}</motion.span>
      <motion.span style={{ width: 6, height: 6, borderRadius: 999, background: J.gold, opacity: dotO }} />
    </div>
  );
}

function Plasma({ p, cx, cy }: { p: MotionValue<number>; cx: number; cy: number }) {
  const drift = useTransform(p, [0.14, 0.33], [0, 56]);
  return (
    <motion.g style={{ x: drift }}>
      <circle cx={cx} cy={cy} r={13} fill="none" stroke={J.blue} strokeWidth={1.6} opacity={0.7} />
    </motion.g>
  );
}

function GraphNode({ p, node, index, total }: { p: MotionValue<number>; node: (typeof NODES)[number]; index: number; total: number }) {
  const start = 0.66 + 0.18 * (index / total);
  const drawEnd = start + (0.18 / total) * 1.3;
  const draw = useTransform(p, [start, drawEnd], [0, 1], { clamp: true });
  const ignite = useTransform(p, [start + 0.004, drawEnd], [0, 1], { clamp: true });
  const edgeOpacity = useTransform(draw, [0, 0.15, 1], [0, 0.5, 0.5]);
  const ringColor = useTransform(ignite, [0, 1], [J.blue, J.gold]);
  const haloOpacity = useTransform(ignite, [0, 1], [0, 0.16]);
  const headX = useTransform(draw, [0, 1], [CORE.x, node.x]);
  const headY = useTransform(draw, [0, 1], [CORE.y, node.y]);
  const headO = useTransform(draw, [0, 0.06, 0.92, 1], [0, 1, 1, 0]);
  const labelUp = useTransform(ignite, [0, 1], [6, 0]);
  const dx = node.x - CORE.x;
  const dy = node.y - CORE.y;
  const dist = Math.hypot(dx, dy) || 1;
  const LR = 222; // label radius — sits cleanly OUTSIDE the membrane
  const lx = CORE.x + (dx / dist) * LR;
  const ly = CORE.y + (dy / dist) * LR;
  const anchor = dx > 16 ? "start" : dx < -16 ? "end" : "middle";

  return (
    <g>
      <motion.path d={`M ${CORE.x} ${CORE.y} L ${node.x} ${node.y}`} fill="none" stroke={J.gold} strokeWidth={1.6} strokeLinecap="round" style={{ pathLength: draw, opacity: edgeOpacity }} />
      <motion.circle cx={node.x} cy={node.y} r={20} fill={J.gold} style={{ opacity: haloOpacity }} />
      <motion.circle cx={node.x} cy={node.y} r={11} fill="none" strokeWidth={1.6} style={{ stroke: ringColor }} />
      <motion.circle cx={node.x} cy={node.y} r={6} fill={J.gold} stroke={J.cream} strokeWidth={1.6} style={{ opacity: ignite, scale: ignite, transformBox: "fill-box", transformOrigin: "center" }} />
      <motion.g style={{ x: headX, y: headY, opacity: headO }}>
        <circle cx={0} cy={0} r={4.5} fill={J.gold} />
      </motion.g>
      <motion.g style={{ opacity: ignite, y: labelUp }}>
        <text x={lx} y={ly} textAnchor={anchor} dominantBaseline="middle" style={{ fontFamily: LABEL, fontWeight: 600, fontSize: 18, letterSpacing: "0.01em", fill: J.gold }}>{node.label}</text>
      </motion.g>
    </g>
  );
}

function ResolveWord({ p }: { p: MotionValue<number> }) {
  const eyebrowO = useTransform(p, [0.86, 0.9], [0, 1]);
  const h1 = useTransform(p, [0.87, 0.93], [0, 1]);
  const h1y = useTransform(p, [0.87, 0.95], [18, 0]);
  const subO = useTransform(p, [0.9, 0.95], [0, 1]);
  const underline = useTransform(p, [0.92, 0.98], [0, 1]);
  const ctaO = useTransform(p, [0.93, 0.99], [0, 1]);
  const ctaY = useTransform(p, [0.93, 0.99], [14, 0]);
  return (
    <>
      <motion.p style={{ fontFamily: MONO, letterSpacing: "0.24em", fontSize: 12, color: J.gold, margin: 0, opacity: eyebrowO }}>LNAD⁺</motion.p>
      <motion.h2 style={{ fontFamily: DISPLAY, fontWeight: 500, fontSize: "clamp(30px,5.4vw,68px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: J.navy, margin: "14px 0 0", maxWidth: 920, opacity: h1, y: h1y }}>
        NAD⁺ Biology, Measured<br />Inside the Cell
      </motion.h2>
      <motion.div style={{ width: 132, height: 2, marginTop: 18, transformOrigin: "left", background: J.gold, scaleX: underline }} />
      <motion.p style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.06em", color: J.inkSoft, margin: "20px 0 0", opacity: subO }}>
        circulating NAD⁺ · unchanged &nbsp;|&nbsp; intracellular NAD⁺ · observed in a trial
      </motion.p>
      <motion.div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginTop: 34, opacity: ctaO, y: ctaY, pointerEvents: "auto" }}>
        <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", borderRadius: 999, background: J.gold, color: "#fff", fontFamily: LABEL, fontWeight: 600, fontSize: 16, textDecoration: "none", boxShadow: "0 14px 34px rgba(181,138,60,0.32)" }}>
          Request Access
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8.5 4l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
        <a href="/#trial" style={{ display: "inline-flex", alignItems: "center", padding: "16px 28px", borderRadius: 999, background: "transparent", color: J.navy, border: `1.5px solid ${J.gold}`, fontFamily: LABEL, fontWeight: 600, fontSize: 16, textDecoration: "none" }}>
          View the Evidence
        </a>
      </motion.div>
      <motion.p style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.04em", color: J.graphite, margin: "26px 0 0", maxWidth: 560, opacity: subO }}>
        Structure/function support. Not intended to diagnose, treat, cure, or prevent any disease.
      </motion.p>
    </>
  );
}
