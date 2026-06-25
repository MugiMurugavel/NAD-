"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { useRef, useState } from "react";
import { VIEW, CORE, NODES } from "./journey/tokens";

/* ── palette (client reference: red = circulating, blue/white = intracellular) ── */
const NAVY = "#16233B";
const INK = "#33475F";
const INKDIM = "#6E819B";
const RED = "#C8362B";
const REDD = "#9E2A22";
const BLUE = "#1F4E9C";
const BLUE2 = "#2E6FB7";
const BLUEGLOW = "#8FB7E0";
const CREAM = "#F4EDDF";
const MONO = "var(--font-mono)";
const DISPLAY = "var(--font-display)";
const LABEL = "var(--font-label)";

const STEPS = [
  { n: "01", title: "Oral Mucosal Contact", body: "LNAD⁺ begins in the mouth. Powder is swished and swallowed; tablets are held under the tongue before swallowing.", note: "Oral mucosal contact precedes GI transit.", range: [0.06, 0.21] },
  { n: "02", title: "Circulation", body: "In the human study, circulating NAD⁺ remained essentially unchanged.", chip: "Circulating NAD⁺ unchanged", chipColor: RED, range: [0.21, 0.38] },
  { n: "03", title: "Cellular Context", body: "The key question moves from exposure to what is measured inside the cell.", range: [0.38, 0.52] },
  { n: "04", title: "Intracellular NAD⁺", body: "In the human study, intracellular NAD⁺ increased versus placebo.", chip: "+53% Intracellular NAD⁺ vs placebo", chipColor: BLUE, range: [0.52, 0.68] },
  { n: "05", title: "Exploratory Pathway Signal", body: "Additional signals consistent with NAD⁺ pathway engagement were observed, including MeNAM, 2PY, SIRT1, and exploratory multi-omics pathway nodes.", range: [0.68, 0.86] },
];

/* ========================================================================== */

export default function Journey() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  // JS-driven spring (not native ScrollTimeline): keeps all transforms in sync
  // off one progress value. Native scroll-linking desynced the target mapping
  // in this stacked layout.
  const p = useSpring(scrollYProgress, { stiffness: 130, damping: 32, restDelta: 0.0005 });

  /* ── background colour journey (warm → cool → ivory exhale) ── */
  const bgStops = [0, 0.2, 0.38, 0.52, 0.7, 0.9, 1];
  const bgTop = useTransform(p, bgStops, ["#F7E9D6", "#F4DAD6", "#DCE7F2", "#1F4E9C", "#101B2D", "#101B2D", "#F4EDDF"]);
  const bgBot = useTransform(p, bgStops, ["#F3DEC6", "#EAC6C2", "#C7D9EC", "#16336E", "#0A1322", "#0A1322", "#F4EDDF"]);
  const bg = useMotionTemplate`linear-gradient(180deg, ${bgTop} 0%, ${bgBot} 100%)`;
  const vignette = useTransform(p, [0, 0.5, 0.86, 1], [0, 0.18, 0.34, 0]);

  /* ── the persistent emblem riding the spine ── */
  const K = [0, 0.08, 0.2, 0.3, 0.4, 0.48, 0.86, 1];
  const px = useTransform(p, K, [600, 600, 560, 600, 640, 600, 600, 600]);
  const py = useTransform(p, K, [408, 408, 470, 430, 408, 408, 408, 388]);
  // shift the cell + network right in step 05 so left labels clear the plate
  const centerShift = useTransform(p, [0.66, 0.74, 0.88, 0.94], [0, 90, 90, 0], { clamp: true });
  const emblemScale = useTransform(p, [0, 0.06, 0.2, 0.5, 0.6, 0.84, 1], [1.0, 1.0, 0.5, 0.5, 0.78, 0.92, 0.66]);
  const emblemRot = useTransform(p, [0, 0.06, 0.86, 1], [0, 0, 6, 0]);
  const shellO = useTransform(p, [0, 0.06, 0.12, 0.66, 0.74, 1], [1, 1, 0, 0, 1, 1]);

  /* ── scene texture opacities (all inputs in [0,1]) ── */
  const subO = useTransform(p, [0.06, 0.1, 0.19, 0.23], [0, 1, 1, 0]);
  const bloodO = useTransform(p, [0.19, 0.23, 0.36, 0.4], [0, 1, 1, 0]);
  const bilayerO = useTransform(p, [0.36, 0.4, 0.5, 0.54], [0, 1, 1, 0]);
  const darkO = useTransform(p, [0.46, 0.54, 0.86, 0.93], [0, 1, 1, 0.1]);
  const cellArtO = useTransform(p, [0.5, 0.56, 0.86, 0.92], [0, 0.5, 0.5, 0]);
  const coreO = useTransform(p, [0.52, 0.6, 0.68, 0.74], [0, 1, 1, 0.18]);
  const coreScale = useTransform(p, [0.52, 0.66], [0.2, 1]);
  const starO = useTransform(p, [0.66, 0.72, 0.88, 0.94], [0, 1, 1, 0.25]);
  const nodesO = useTransform(p, [0.68, 0.74], [0, 1]);

  /* ── punchlines ── */
  const chA = useTransform(p, [0.22, 0.34], [0, 1]); // circulating flat red line draws
  const chAO = useTransform(p, [0.2, 0.24, 0.5, 0.56], [0, 1, 1, 0.28]); // persists faint as ruler
  const intraFill = useTransform(p, [0.54, 0.66], [0, 1], { clamp: true });
  const intraPct = useTransform(intraFill, [0, 1], [0, 53]);
  const bigPctO = useTransform(p, [0.54, 0.6, 0.66, 0.71], [0, 1, 1, 0]);

  /* ── resolve ── */
  const diagramDim = useTransform(p, [0.86, 0.93], [1, 0.28]);
  const resolveO = useTransform(p, [0.87, 0.93], [0, 1]);
  const hintO = useTransform(p, [0, 0.05], [1, 0]);
  const titleO = useTransform(p, [0, 0.05], [1, 0]);
  const railFill = useTransform(p, [0.06, 0.86], [0, 1], { clamp: true });

  if (reduce) return <ReducedJourney />;

  return (
    <section ref={trackRef} aria-label="LNAD⁺ Journey: Measured Inside the Cell" style={{ position: "relative", height: "640vh" }}>
      <div className="j-stage" style={{ position: "sticky", top: 0, height: "100svh", overflow: "hidden", contain: "layout paint" }}>
        {/* background journey */}
        <motion.div aria-hidden style={{ position: "absolute", inset: 0, background: bg }} />
        <motion.div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 50% at 50% 46%, rgba(255,255,255,0.5), transparent 70%)", opacity: vignette }} />
        <StarField o={starO} />

        {/* ───────────────────────── DIAGRAM ───────────────────────── */}
        <motion.div className="j-svgwrap" style={{ position: "absolute", inset: 0, opacity: diagramDim }}>
          <svg className="j-svg" viewBox={`0 0 ${VIEW.w} ${VIEW.h}`} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
            <defs>
              <linearGradient id="emSplit" x1="0" y1="0" x2="1" y2="0.15"><stop offset="0%" stopColor={RED} /><stop offset="46%" stopColor={REDD} /><stop offset="50%" stopColor="#3a3550" /><stop offset="54%" stopColor="#15366E" /><stop offset="100%" stopColor={BLUE} /></linearGradient>
              <radialGradient id="emGloss" cx="36%" cy="28%" r="62%"><stop offset="0%" stopColor="#fff" stopOpacity="0.85" /><stop offset="34%" stopColor="#fff" stopOpacity="0.18" /><stop offset="100%" stopColor="#fff" stopOpacity="0" /></radialGradient>
              <radialGradient id="emShade" cx="64%" cy="78%" r="60%"><stop offset="0%" stopColor="#000" stopOpacity="0" /><stop offset="100%" stopColor="#0a1326" stopOpacity="0.4" /></radialGradient>
              <linearGradient id="emBolt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#E5483C" /><stop offset="48%" stopColor="#E5483C" /><stop offset="52%" stopColor={BLUE2} /><stop offset="100%" stopColor={BLUE2} /></linearGradient>
              <radialGradient id="burst" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" /><stop offset="30%" stopColor={BLUEGLOW} stopOpacity="0.6" /><stop offset="70%" stopColor={BLUE2} stopOpacity="0.18" /><stop offset="100%" stopColor={BLUE2} stopOpacity="0" /></radialGradient>
              <radialGradient id="rbcGrad" cx="50%" cy="50%" r="58%"><stop offset="0%" stopColor="#C2615C" /><stop offset="52%" stopColor="#DE908B" /><stop offset="100%" stopColor="#EDB7B2" /></radialGradient>
              <radialGradient id="rbcRim" cx="42%" cy="34%" r="68%"><stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" /><stop offset="40%" stopColor="#ffffff" stopOpacity="0" /><stop offset="100%" stopColor="#ffffff" stopOpacity="0" /></radialGradient>
              <radialGradient id="headGrad" cx="36%" cy="30%" r="72%"><stop offset="0%" stopColor="#BCD8F2" /><stop offset="48%" stopColor="#6E9BD0" /><stop offset="100%" stopColor="#3F6DA1" /></radialGradient>
              <radialGradient id="epiGrad" cx="40%" cy="34%" r="78%"><stop offset="0%" stopColor="#F7E7D0" /><stop offset="100%" stopColor="#E6C79E" /></radialGradient>
            </defs>

            {/* 01 — mucosa */}
            <motion.g style={{ opacity: subO }}>
              <Cobbles />
              <path d="M 130 250 Q 600 166 1070 250 L 1070 196 L 130 196 Z" fill="#F6E8D2" opacity={0.55} />
              <path d="M 130 250 Q 600 166 1070 250" fill="none" stroke="#E4BE92" strokeWidth={3} strokeLinecap="round" />
              <path d="M 130 244 Q 600 160 1070 244" fill="none" stroke="#ffffff" strokeOpacity={0.5} strokeWidth={1.4} strokeLinecap="round" />
              <text x={600} y={312} textAnchor="middle" style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.16em", fill: "#B0875A" }}>ORAL MUCOSA</text>
            </motion.g>

            {/* 02 — circulation: red blood cells + FLAT red line */}
            <motion.g style={{ opacity: bloodO }}>
              {([[200, 300, 1.1, -18], [345, 362, 0.82, 14], [470, 286, 1.0, -6], [820, 338, 0.92, 22], [968, 296, 1.18, -24], [1048, 360, 0.78, 8], [655, 250, 0.66, 30]] as const).map(([x, y, r, rot], i) => <RBC key={i} p={p} cx={x} cy={y} r={r} rot={rot} />)}
            </motion.g>
            <motion.g style={{ opacity: chAO }}>
              <motion.path d="M 330 568 L 870 568" fill="none" stroke={RED} strokeWidth={2.8} strokeLinecap="round" style={{ pathLength: chA }} />
              <motion.circle cx={870} cy={568} r={5} fill={RED} style={{ opacity: chA }} />
              <text x={330} y={552} style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.04em", fill: REDD }}>CIRCULATING NAD⁺</text>
              <text x={870} y={552} textAnchor="end" style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.12em", fill: RED }}>UNCHANGED</text>
            </motion.g>

            {/* 03 — lipid bilayer */}
            <motion.g style={{ opacity: bilayerO }}>
              <Bilayer />
            </motion.g>

            {/* cell interior + network + emblem — shifted right in step 05 */}
            <motion.g style={{ x: centerShift }}>
            <motion.circle cx={CORE.x} cy={CORE.y} r={300} fill="#0E1B30" style={{ opacity: darkO }} />
            <motion.g style={{ opacity: cellArtO }}>
              {/* mitochondrion — outer membrane + cristae */}
              <g transform="translate(360 524) rotate(-14)" stroke={BLUEGLOW} strokeOpacity={0.5} fill="none" strokeWidth={1.6} strokeLinecap="round">
                <ellipse cx={0} cy={0} rx={94} ry={45} />
                <ellipse cx={0} cy={0} rx={84} ry={36} strokeOpacity={0.28} />
                <path d="M -74 -8 q 20 -34 40 2 q 20 36 40 -2 q 20 -34 40 4" strokeOpacity={0.3} />
                <path d="M -74 16 q 22 -32 42 4 q 20 34 40 -4 q 18 -28 36 2" strokeOpacity={0.3} />
              </g>
              {/* nucleus — envelope + nucleolus */}
              <g transform="translate(842 300)" stroke={BLUEGLOW} fill="none">
                <circle cx={0} cy={0} r={74} strokeOpacity={0.42} strokeWidth={1.5} />
                <circle cx={0} cy={0} r={67} strokeOpacity={0.22} strokeWidth={1} strokeDasharray="2 8" />
                <circle cx={16} cy={-10} r={23} fill={BLUEGLOW} fillOpacity={0.08} strokeOpacity={0.4} strokeWidth={1.4} />
                <g fill={BLUEGLOW} fillOpacity={0.22} stroke="none"><circle cx={-30} cy={20} r={2} /><circle cx={-12} cy={-34} r={1.6} /><circle cx={34} cy={30} r={1.8} /><circle cx={-38} cy={-12} r={1.4} /></g>
              </g>
            </motion.g>
            <motion.g style={{ opacity: coreO }}>
              <motion.circle cx={CORE.x} cy={CORE.y} r={210} fill="url(#burst)" style={{ scale: coreScale, transformBox: "fill-box", transformOrigin: "center" }} />
            </motion.g>

            {/* 05 — node network */}
            <motion.g style={{ opacity: nodesO }}>
              {NODES.map((node, i) => <GraphNode key={node.id} p={p} node={node} index={i} total={NODES.length} />)}
            </motion.g>

            {/* ── THE EMBLEM (persistent) ── */}
            <motion.g style={{ x: px, y: py, scale: emblemScale, rotate: emblemRot }}>
              <EmblemMark shellO={shellO} />
            </motion.g>
            </motion.g>
          </svg>

          {/* big +53% readout */}
          <motion.div className="j-pct" style={{ position: "absolute", left: "50%", top: "46%", x: "-50%", y: "-50%", opacity: bigPctO, textAlign: "center", pointerEvents: "none" }}>
            <div style={{ fontFamily: DISPLAY, fontWeight: 500, fontSize: "clamp(44px,7.5vw,104px)", color: "#fff", textShadow: "0 2px 30px rgba(10,18,40,0.6), 0 0 60px rgba(47,111,183,0.7)", letterSpacing: "-0.02em", lineHeight: 1 }}>
              <MotionPercent value={intraPct} />
            </div>
            <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: "0.12em", color: BLUEGLOW, marginTop: 10 }}>INTRACELLULAR NAD⁺ vs placebo</div>
            <span style={{ position: "absolute", width: 1, height: 1, margin: -1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0 }}>+53% intracellular NAD⁺ versus placebo, observed in the human study.</span>
          </motion.div>
        </motion.div>

        {/* ───────────────── TITLE (intro) ───────────────── */}
        <motion.div className="j-title" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingTop: "clamp(70px,11vh,120px)", textAlign: "center", opacity: titleO, zIndex: 4, pointerEvents: "none" }}>
          <p style={{ fontFamily: MONO, letterSpacing: "0.24em", fontSize: 12, color: BLUE, margin: 0 }}>CELL CONTEXT</p>
          <h2 style={{ fontFamily: DISPLAY, fontWeight: 500, fontSize: "clamp(28px,5vw,60px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: NAVY, margin: "14px 0 0", maxWidth: "min(900px,90vw)", padding: "0 5vw" }}>
            LNAD⁺ Journey: Measured Inside the Cell
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px,2vw,19px)", color: INK, margin: "16px 0 0", maxWidth: "min(680px,86vw)", padding: "0 5vw" }}>
            From oral mucosal contact to intracellular NAD⁺ and exploratory pathway engagement.
          </p>
        </motion.div>

        {/* ───────────────── EDITORIAL PLATE (left) ───────────────── */}
        <div className="j-plate" style={{ position: "absolute", left: "clamp(20px,4.5vw,72px)", top: "50%", transform: "translateY(-50%)", width: "min(420px,34vw)", zIndex: 5 }}>
          {STEPS.map((s) => <PlateBlock key={s.n} p={p} step={s} />)}
        </div>

        {/* ───────────────── STEP RAIL (right) ───────────────── */}
        <div className="j-rail" style={{ position: "absolute", right: "clamp(18px,3.2vw,56px)", top: "50%", transform: "translateY(-50%)", zIndex: 5 }}>
          <StepRail p={p} fill={railFill} />
        </div>

        {/* ───────────────── RESOLVE ───────────────── */}
        <motion.div className="j-resolve" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", textAlign: "center", padding: "0 6vw clamp(40px,8vh,90px)", opacity: resolveO, zIndex: 6, pointerEvents: "none" }}>
          <ResolveBlock p={p} />
        </motion.div>

        {/* scroll hint */}
        <motion.div className="j-hint" style={{ position: "absolute", bottom: "clamp(16px,3vh,32px)", left: "50%", x: "-50%", opacity: hintO, display: "flex", flexDirection: "column", alignItems: "center", gap: 7, color: INKDIM, zIndex: 5 }}>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.22em" }}>SCROLL TO EXPLORE</span>
          <motion.div animate={{ y: 5 }} transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
            <svg width="15" height="22" viewBox="0 0 15 22" fill="none"><rect x="1" y="1" width="13" height="20" rx="6.5" stroke={INKDIM} strokeWidth="1.3" /><circle cx="7.5" cy="7" r="1.8" fill={INKDIM} /></svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/*  Emblem (ported to a <g>, centred at 0,0)                                  */
/* ========================================================================== */
function EmblemMark({ shellO }: { shellO: MotionValue<number> }) {
  return (
    <g>
      {/* hero shell + orbital nodes */}
      <motion.g style={{ opacity: shellO }}>
        <line x1={-94} y1={0} x2={94} y2={0} stroke={BLUE} strokeOpacity="0.16" strokeWidth="0.9" />
        <line x1={0} y1={-94} x2={0} y2={94} stroke={BLUE} strokeOpacity="0.16" strokeWidth="0.9" />
        <circle cx={0} cy={0} r={94} stroke={BLUE} strokeOpacity="0.16" strokeWidth="0.9" fill="none" />
        <circle cx={0} cy={0} r={80} stroke={BLUE} strokeOpacity="0.26" strokeWidth="1" fill="none" />
        <circle cx={0} cy={0} r={80} stroke={RED} strokeOpacity="0.14" strokeWidth="0.8" strokeDasharray="1 6" fill="none" />
        <circle cx={0} cy={-80} r={5} fill={RED} /><circle cx={80} cy={0} r={5} fill={BLUE} />
        <circle cx={0} cy={80} r={5} fill={RED} /><circle cx={-80} cy={0} r={5} fill={BLUE} />
        <circle cx={58} cy={-58} r={3} fill={BLUE} /><circle cx={-58} cy={58} r={3} fill={RED} />
      </motion.g>
      {/* core mark */}
      <circle cx={0} cy={0} r={64} fill="#fff" fillOpacity="0.5" />
      <circle cx={0} cy={0} r={58} fill="url(#emSplit)" />
      <circle cx={0} cy={0} r={58} fill="url(#emShade)" />
      <g fill="#cfe0f7" fillOpacity="0.7"><circle cx={28} cy={-26} r={1.5} /><circle cx={42} cy={-4} r={1.5} /><circle cx={32} cy={18} r={1.5} /><circle cx={18} cy={32} r={1.3} /><circle cx={46} cy={18} r={1.1} /></g>
      <path d="M 12 -52 L -20 4 L 1 4 L -14 54 L 24 -6 L 3 -6 Z" fill="url(#emBolt)" stroke="#fff" strokeOpacity="0.85" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M -60 -4 L 60 -11 L 60 15 L -60 21 Z" fill="#fff" />
      <text x={-2} y={11} textAnchor="middle" fontFamily="var(--font-label),Inter,sans-serif" fontWeight={800} fontSize={26} letterSpacing="-1.2"><tspan fill={BLUE}>LNAD</tspan><tspan fill={RED} dy={-8} fontSize={16}>+</tspan></text>
      <circle cx={0} cy={0} r={58} fill="url(#emGloss)" pointerEvents="none" />
    </g>
  );
}

/* ── sub-components ── */
function MotionPercent({ value }: { value: MotionValue<number> }) {
  const [n, setN] = useState(0);
  useMotionValueEvent(value, "change", (v) => setN(Math.round(v)));
  return <>+{n}%</>;
}

function Cobbles() {
  const cells: { x: number; y: number; r: number }[] = [];
  let seed = 11;
  const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  for (let row = 0; row < 5; row++) {
    const y = 322 + row * 46;
    for (let c = 0; c < 17; c++) {
      const x = 120 + c * 60 + (row % 2 ? 30 : 0) + (rnd() - 0.5) * 16;
      cells.push({ x, y: y + (rnd() - 0.5) * 12, r: 23 + rnd() * 9 });
    }
  }
  return (
    <g>
      {cells.map((c, i) => (
        <g key={i} opacity={Math.max(0.12, 0.52 - (c.y - 322) / 760)}>
          <circle cx={c.x} cy={c.y} r={c.r} fill="url(#epiGrad)" />
          <circle cx={c.x} cy={c.y} r={c.r} fill="none" stroke="#C9A877" strokeOpacity={0.4} strokeWidth={1} />
        </g>
      ))}
    </g>
  );
}

function RBC({ p, cx, cy, r = 1, rot = 0 }: { p: MotionValue<number>; cx: number; cy: number; r?: number; rot?: number }) {
  const drift = useTransform(p, [0.21, 0.38], [0, 64]);
  const rx = 27 * r, ry = 18 * r;
  return (
    <motion.g style={{ x: drift }}>
      <g transform={`translate(${cx} ${cy}) rotate(${rot})`} opacity={0.92}>
        <ellipse cx={2} cy={ry * 0.55} rx={rx} ry={ry * 0.7} fill="#7E322E" opacity={0.12} />
        <ellipse cx={0} cy={0} rx={rx} ry={ry} fill="url(#rbcGrad)" />
        <ellipse cx={0} cy={0} rx={rx * 0.44} ry={ry * 0.44} fill="#AF4A45" opacity={0.45} />
        <ellipse cx={0} cy={0} rx={rx} ry={ry} fill="url(#rbcRim)" />
      </g>
    </motion.g>
  );
}

function Bilayer() {
  const xs: number[] = [];
  for (let x = 158; x <= 1042; x += 29) xs.push(x);
  return (
    <g>
      {xs.map((x, i) => {
        const wob = Math.sin((x / 1200) * Math.PI * 3.2) * 12;
        const topY = 432 + wob, botY = 490 + wob;
        return (
          <g key={i}>
            {/* upper leaflet — head + two tails pointing down to the core */}
            <line x1={x - 2.4} y1={topY + 6} x2={x - 4} y2={topY + 27} stroke={BLUE2} strokeOpacity={0.42} strokeWidth={1.5} strokeLinecap="round" />
            <line x1={x + 2.4} y1={topY + 6} x2={x + 4} y2={topY + 27} stroke={BLUE2} strokeOpacity={0.42} strokeWidth={1.5} strokeLinecap="round" />
            <circle cx={x} cy={topY} r={7.5} fill="url(#headGrad)" />
            {/* lower leaflet — head + two tails pointing up to the core */}
            <line x1={x - 2.4} y1={botY - 6} x2={x - 4} y2={botY - 27} stroke={BLUE2} strokeOpacity={0.42} strokeWidth={1.5} strokeLinecap="round" />
            <line x1={x + 2.4} y1={botY - 6} x2={x + 4} y2={botY - 27} stroke={BLUE2} strokeOpacity={0.42} strokeWidth={1.5} strokeLinecap="round" />
            <circle cx={x} cy={botY} r={7.5} fill="url(#headGrad)" />
          </g>
        );
      })}
    </g>
  );
}

function StarField({ o }: { o: MotionValue<number> }) {
  const stars: [number, number, number][] = [];
  let seed = 7;
  const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  for (let i = 0; i < 70; i++) stars.push([rnd() * 100, rnd() * 100, rnd() * 1.4 + 0.4]);
  return (
    <motion.div aria-hidden style={{ position: "absolute", inset: 0, opacity: o, pointerEvents: "none" }}>
      <svg width="100%" height="100%" preserveAspectRatio="none" style={{ position: "absolute", inset: 0 }}>
        {stars.map(([x, y, r], i) => <circle key={i} cx={`${x}%`} cy={`${y}%`} r={r} fill="#cfe0f7" fillOpacity={0.5} />)}
      </svg>
    </motion.div>
  );
}

function PlateBlock({ p, step }: { p: MotionValue<number>; step: (typeof STEPS)[number] }) {
  const [a, b] = step.range;
  const lo = Math.max(0, a - 0.03);
  const opacity = useTransform(p, [lo, a + 0.01, b - 0.03, b], [0, 1, 1, 0], { clamp: true });
  const y = useTransform(p, [lo, a + 0.02], [16, 0], { clamp: true });
  return (
    <motion.div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity, y, background: "rgba(247,243,235,0.85)", border: "1px solid rgba(22,35,59,0.08)", borderRadius: 18, padding: "clamp(18px,2vw,28px)" }}>
      <div style={{ fontFamily: DISPLAY, fontWeight: 500, fontSize: "clamp(32px,4.4vw,68px)", color: NAVY, lineHeight: 0.9, opacity: 0.9 }}>{step.n}</div>
      <h3 style={{ fontFamily: DISPLAY, fontWeight: 500, fontSize: "clamp(22px,2.4vw,34px)", color: NAVY, margin: "10px 0 12px", letterSpacing: "-0.01em" }}>{step.title}</h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(14px,1.1vw,17px)", lineHeight: 1.55, color: INK, margin: 0 }}>{step.body}</p>
      {step.note && <p style={{ fontFamily: "var(--font-quote)", fontStyle: "italic", fontSize: 15, color: INKDIM, margin: "12px 0 0" }}>{step.note}</p>}
      {step.chip && (
        <span style={{ display: "inline-block", marginTop: 16, padding: "8px 16px", borderRadius: 999, border: `1.5px solid ${step.chipColor}`, color: step.chipColor, fontFamily: LABEL, fontWeight: 600, fontSize: 13.5 }}>{step.chip}</span>
      )}
    </motion.div>
  );
}

function StepRail({ p, fill }: { p: MotionValue<number>; fill: MotionValue<number> }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(16px,2.4vh,30px)", position: "relative" }}>
      <div style={{ position: "absolute", top: 10, bottom: 30, width: 1.5, background: "rgba(22,35,59,0.14)" }} />
      <motion.div style={{ position: "absolute", top: 10, width: 1.5, background: BLUE, transformOrigin: "top", height: "calc(100% - 40px)", scaleY: fill }} />
      {STEPS.map((s, i) => <RailItem key={s.n} p={p} step={s} index={i} />)}
      <RailArrow p={p} />
    </div>
  );
}

function RailItem({ p, step, index }: { p: MotionValue<number>; step: (typeof STEPS)[number]; index: number }) {
  const [a, b] = step.range;
  const lo = Math.max(0, a - 0.02);
  const active = useTransform(p, [lo, a, b, Math.min(1, b + 0.02)], [0.35, 1, 1, 0.35], { clamp: true });
  const ring = useTransform(active, [0.35, 1], ["rgba(22,35,59,0.2)", BLUE]);
  const bgc = useTransform(active, [0.35, 1], ["rgba(255,255,255,0)", "rgba(31,78,156,0.1)"]);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative", justifyContent: "flex-end", width: "100%" }}>
      <motion.span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.08em", color: NAVY, opacity: active, textAlign: "right", maxWidth: 110 }}>{step.title}</motion.span>
      <motion.span style={{ width: 26, height: 26, borderRadius: 999, border: "1.5px solid", borderColor: ring, background: bgc, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: MONO, fontSize: 11, color: NAVY, opacity: active }}>{step.n}</motion.span>
    </div>
  );
}

function RailArrow({ p }: { p: MotionValue<number> }) {
  const o = useTransform(p, [0.84, 0.9], [1, 0.2]);
  return (
    <motion.svg width="14" height="16" viewBox="0 0 14 16" fill="none" style={{ opacity: o }} animate={{ y: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>
      <path d="M7 1v13M2 9l5 5 5-5" stroke={INKDIM} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}

const NODE_ICON: Record<string, React.ReactNode> = {
  // DNA double helix
  sirt1: <g><path d="M-5 -7 C 3 -3 -3 3 5 7" /><path d="M5 -7 C -3 -3 3 3 -5 7" /><path d="M-3.4 -4 L3.4 -4 M-4.4 0 L4.4 0 M-3.4 4 L3.4 4" /></g>,
  // hexagonal molecule + methyl branch
  menam: <g><path d="M0 -6 L5.2 -3 L5.2 3 L0 6 L-5.2 3 L-5.2 -3 Z" /><path d="M5.2 -3 L8.2 -4.8" /></g>,
  // pyridone-type ring with substituents
  "2py": <g><path d="M0 -6 L5.2 -3 L5.2 3 L0 6 L-5.2 3 L-5.2 -3 Z" /><path d="M0 -6 L0 -9" /><path d="M5.2 3 L8 4.6" /></g>,
  // snowflake (tissue / vascular)
  tissue: <g><path d="M0 -7.5 V7.5 M-6.5 -3.7 L6.5 3.7 M6.5 -3.7 L-6.5 3.7" /><path d="M0 -7.5 L-2 -5.2 M0 -7.5 L2 -5.2 M0 7.5 L-2 5.2 M0 7.5 L2 5.2 M-6.5 -3.7 L-5.9 -1.4 M6.5 3.7 L5.9 1.4 M6.5 -3.7 L5.9 -1.4 M-6.5 3.7 L-5.9 1.4" /></g>,
  // droplet (lipid)
  lipid: <g><path d="M0 -7.5 C4.6 -1 4.6 4.2 0 7.2 C-4.6 4.2 -4.6 -1 0 -7.5 Z" /><path d="M-1.7 3.2 C-2.5 1.6 -2.1 0 -1 -1.6" strokeOpacity={0.6} /></g>,
  // shield (immune / chemokine)
  immune: <g><path d="M0 -7.5 L5.6 -4.8 V1 C5.6 5.2 0 7.8 0 7.8 C0 7.8 -5.6 5.2 -5.6 1 V-4.8 Z" /><path d="M-2.6 -0.4 L-0.6 1.8 L3.2 -2.8" /></g>,
  // redox cycle (two arrows)
  redox: <g><path d="M-5.6 -1.4 A 5.6 5.6 0 0 1 3.8 -3.8" /><path d="M3.8 -3.8 L4.6 -6.3 M3.8 -3.8 L6.4 -3.2" /><path d="M5.6 1.4 A 5.6 5.6 0 0 1 -3.8 3.8" /><path d="M-3.8 3.8 L-4.6 6.3 M-3.8 3.8 L-6.4 3.2" /></g>,
};

function GraphNode({ p, node, index, total }: { p: MotionValue<number>; node: (typeof NODES)[number]; index: number; total: number }) {
  const start = 0.7 + 0.16 * (index / total);
  const drawEnd = start + (0.16 / total) * 1.3;
  const draw = useTransform(p, [start, drawEnd], [0, 1], { clamp: true });
  const ignite = useTransform(p, [start + 0.004, drawEnd], [0, 1], { clamp: true });
  const edgeO = useTransform(draw, [0, 0.15, 1], [0, 0.45, 0.45]);
  const ring = useTransform(ignite, [0, 1], [BLUE, BLUEGLOW]);
  const dx = node.x - CORE.x, dy = node.y - CORE.y, dist = Math.hypot(dx, dy) || 1;
  const lx = CORE.x + (dx / dist) * 222, ly = CORE.y + (dy / dist) * 222;
  const anchor = dx > 16 ? "start" : dx < -16 ? "end" : "middle";
  const labelUp = useTransform(ignite, [0, 1], [6, 0]);
  return (
    <g>
      <motion.path d={`M ${CORE.x} ${CORE.y} L ${node.x} ${node.y}`} fill="none" stroke={BLUEGLOW} strokeWidth={1.3} strokeDasharray="2 5" style={{ pathLength: draw, opacity: edgeO }} />
      <motion.circle cx={node.x} cy={node.y} r={17} fill="none" strokeWidth={1.6} style={{ stroke: ring, opacity: ignite }} />
      <motion.g style={{ opacity: ignite }}>
        <g transform={`translate(${node.x} ${node.y})`} stroke="#fff" strokeWidth={1.4} fill="none" strokeLinecap="round" strokeLinejoin="round">{NODE_ICON[node.id]}</g>
      </motion.g>
      <motion.g style={{ opacity: ignite, y: labelUp }}>
        <text x={lx} y={ly} textAnchor={anchor} dominantBaseline="middle" style={{ fontFamily: LABEL, fontWeight: 600, fontSize: 16.5, fill: "#EAF1FB" }}>{node.label}</text>
      </motion.g>
    </g>
  );
}

function ResolveBlock({ p }: { p: MotionValue<number> }) {
  const h1 = useTransform(p, [0.9, 0.95], [0, 1]);
  const h1y = useTransform(p, [0.9, 0.97], [18, 0]);
  const ul = useTransform(p, [0.93, 0.98], [0, 1]);
  const subO = useTransform(p, [0.94, 0.98], [0, 1]);
  const footO = useTransform(p, [0.95, 1], [0, 1]);
  return (
    <div style={{ maxWidth: "min(860px,92vw)", background: "rgba(244,237,223,0.95)", border: "1px solid rgba(22,35,59,0.08)", borderRadius: 22, padding: "clamp(26px,4vw,46px)", boxShadow: "0 22px 64px rgba(10,18,40,0.2)" }}>
      <motion.h2 style={{ fontFamily: DISPLAY, fontWeight: 500, fontSize: "clamp(26px,4.4vw,52px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: NAVY, margin: 0, opacity: h1, y: h1y }}>
        LNAD⁺: NAD⁺ biology, measured inside the cell.
      </motion.h2>
      <motion.div style={{ width: 132, height: 2, margin: "16px auto 0", transformOrigin: "center", background: BLUE, scaleX: ul }} />
      <motion.p style={{ fontFamily: MONO, fontSize: "clamp(12px,1.4vw,14px)", letterSpacing: "0.04em", color: INK, margin: "18px 0 0", opacity: subO }}>
        Circulating NAD⁺ unchanged. Intracellular NAD⁺ increased. Exploratory pathway signals observed.
      </motion.p>
      <motion.p style={{ fontFamily: MONO, fontSize: 11, lineHeight: 1.5, color: INKDIM, margin: "22px auto 0", maxWidth: 620, opacity: footO }}>
        Exploratory multi-omics signals are interpreted as pharmacodynamic pathway engagement, not clinical efficacy endpoints. Not intended to diagnose, treat, cure, or prevent any disease.
      </motion.p>
    </div>
  );
}

/* ── reduced motion: static stacked summary ── */
function ReducedJourney() {
  return (
    <section aria-label="LNAD⁺ Journey: Measured Inside the Cell" style={{ background: "#0E1B30", color: CREAM, padding: "clamp(64px,10vw,120px) 6vw" }}>
      <p style={{ fontFamily: MONO, letterSpacing: "0.22em", fontSize: 12, color: BLUEGLOW }}>CELL CONTEXT</p>
      <h2 style={{ fontFamily: DISPLAY, fontWeight: 500, fontSize: "clamp(28px,5vw,52px)", lineHeight: 1.08, margin: "12px 0 8px", maxWidth: 860 }}>LNAD⁺ Journey: Measured Inside the Cell</h2>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 18, color: BLUEGLOW, maxWidth: 640, marginBottom: 32 }}>From oral mucosal contact to intracellular NAD⁺ and exploratory pathway engagement.</p>
      <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 26, maxWidth: 760 }}>
        {STEPS.map((s) => {
          const ct = s.chipColor === RED ? "#E89B91" : "#8FB7E0";
          return (
            <li key={s.n}>
              <div style={{ fontFamily: MONO, color: BLUEGLOW, fontSize: 13 }}>{s.n} · {s.title}</div>
              <p style={{ fontFamily: "var(--font-body)", margin: "4px 0 0", color: CREAM, lineHeight: 1.5 }}>{s.body}</p>
              {s.note && <p style={{ fontFamily: "var(--font-quote)", fontStyle: "italic", margin: "6px 0 0", color: BLUEGLOW }}>{s.note}</p>}
              {s.chip && <span style={{ display: "inline-block", marginTop: 12, padding: "7px 15px", borderRadius: 999, border: `1.5px solid ${ct}`, color: ct, fontFamily: LABEL, fontWeight: 600, fontSize: 13.5 }}>{s.chip}</span>}
            </li>
          );
        })}
      </ol>
      <p style={{ fontFamily: DISPLAY, fontSize: "clamp(22px,3vw,30px)", margin: "40px 0 0", maxWidth: 760 }}>LNAD⁺: NAD⁺ biology, measured inside the cell.</p>
      <p style={{ fontFamily: MONO, fontSize: 13, color: BLUEGLOW, margin: "14px 0 0", maxWidth: 700 }}>Circulating NAD⁺ unchanged. Intracellular NAD⁺ increased. Exploratory pathway signals observed.</p>
      <p style={{ fontFamily: MONO, fontSize: 11, color: INKDIM, marginTop: 18, maxWidth: 620 }}>Exploratory multi-omics signals are interpreted as pharmacodynamic pathway engagement, not clinical efficacy endpoints. Not intended to diagnose, treat, cure, or prevent any disease.</p>
    </section>
  );
}
