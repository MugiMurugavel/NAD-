"use client";

import { useId } from "react";

/**
 * The LNAD⁺ brand emblem, recreated in SVG: a glossy sphere split red/blue, a
 * lightning bolt through the centre, and the "LNAD⁺" banner. `rings` adds the
 * orbital shell + red/blue particle nodes (the hero variant). Used as the
 * "molecule" that travels the Journey scrollytelling.
 */
export default function LnadEmblem({
  size = 96,
  rings = false,
  className = "",
}: {
  size?: number;
  rings?: boolean;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const split = `split-${uid}`;
  const gloss = `gloss-${uid}`;
  const bolt = `bolt-${uid}`;
  const redN = `redn-${uid}`;
  const blueN = `bluen-${uid}`;
  const shade = `shade-${uid}`;

  const RED = "#D0021B"; // grateful-red
  const REDD = "#A0011A";
  const BLUE = "#0066A4"; // stealie-blue
  const BLUED = "#004B79";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      role="img"
      aria-label="LNAD⁺"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={split} x1="0" y1="0" x2="1" y2="0.15">
          <stop offset="0%" stopColor={RED} />
          <stop offset="46%" stopColor={REDD} />
          <stop offset="50%" stopColor="#0A0A0A" />
          <stop offset="54%" stopColor={BLUED} />
          <stop offset="100%" stopColor={BLUE} />
        </linearGradient>
        <radialGradient id={gloss} cx="36%" cy="28%" r="62%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="34%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={shade} cx="64%" cy="78%" r="60%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#0a1326" stopOpacity="0.4" />
        </radialGradient>
        <linearGradient id={bolt} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E11530" />
          <stop offset="48%" stopColor="#E11530" />
          <stop offset="52%" stopColor="#1A82C8" />
          <stop offset="100%" stopColor="#1A82C8" />
        </linearGradient>
        <radialGradient id={redN} cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#FF6B7A" />
          <stop offset="45%" stopColor={RED} />
          <stop offset="100%" stopColor={REDD} />
        </radialGradient>
        <radialGradient id={blueN} cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#4FA3D6" />
          <stop offset="45%" stopColor={BLUE} />
          <stop offset="100%" stopColor={BLUED} />
        </radialGradient>
      </defs>

      {/* ───────────────── orbital shell (hero variant) ───────────────── */}
      {rings && (
        <g>
          {/* crosshair */}
          <line x1="6" y1="100" x2="194" y2="100" stroke={BLUE} strokeOpacity="0.18" strokeWidth="0.8" />
          <line x1="100" y1="6" x2="100" y2="194" stroke={BLUE} strokeOpacity="0.18" strokeWidth="0.8" />
          {/* rings */}
          <circle cx="100" cy="100" r="94" stroke={BLUE} strokeOpacity="0.16" strokeWidth="0.9" />
          <circle cx="100" cy="100" r="80" stroke={BLUE} strokeOpacity="0.26" strokeWidth="1" />
          <circle cx="100" cy="100" r="80" stroke={RED} strokeOpacity="0.14" strokeWidth="0.8" strokeDasharray="1 6" />
          {/* constellation links */}
          <g stroke={BLUE} strokeOpacity="0.22" strokeWidth="0.7" strokeDasharray="1.5 5">
            <line x1="100" y1="20" x2="180" y2="100" />
            <line x1="180" y1="100" x2="100" y2="180" />
            <line x1="100" y1="180" x2="20" y2="100" />
            <line x1="20" y1="100" x2="100" y2="20" />
          </g>
          {/* orbital nodes */}
          <circle cx="100" cy="20" r="5" fill={`url(#${redN})`} />
          <circle cx="180" cy="100" r="5" fill={`url(#${blueN})`} />
          <circle cx="100" cy="180" r="5" fill={`url(#${redN})`} />
          <circle cx="20" cy="100" r="5" fill={`url(#${blueN})`} />
          <circle cx="158" cy="42" r="3" fill={`url(#${blueN})`} />
          <circle cx="42" cy="158" r="3" fill={`url(#${redN})`} />
        </g>
      )}

      {/* ───────────────── glassy sphere ───────────────── */}
      <circle cx="100" cy="100" r="64" fill="#ffffff" fillOpacity="0.5" />
      <circle cx="100" cy="100" r="58" fill={`url(#${split})`} />
      <circle cx="100" cy="100" r="58" fill={`url(#${shade})`} />

      {/* faint particle constellation on the blue hemisphere */}
      <g fill="#cfe0f7" fillOpacity="0.7">
        <circle cx="128" cy="74" r="1.5" />
        <circle cx="142" cy="96" r="1.5" />
        <circle cx="132" cy="118" r="1.5" />
        <circle cx="118" cy="132" r="1.3" />
        <circle cx="146" cy="118" r="1.1" />
        <circle cx="124" cy="92" r="1.1" />
      </g>
      <g stroke="#cfe0f7" strokeOpacity="0.3" strokeWidth="0.5">
        <line x1="128" y1="74" x2="142" y2="96" />
        <line x1="142" y1="96" x2="132" y2="118" />
        <line x1="124" y1="92" x2="118" y2="132" />
      </g>

      {/* lightning bolt */}
      <path
        d="M 112 48 L 80 104 L 101 104 L 86 154 L 124 94 L 103 94 Z"
        fill={`url(#${bolt})`}
        stroke="#ffffff"
        strokeOpacity="0.85"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* white banner + LNAD⁺ wordmark */}
      <path d="M 40 96 L 160 89 L 160 115 L 40 121 Z" fill="#ffffff" />
      <path d="M 40 121 L 160 115 L 160 118 L 40 124 Z" fill="#0a1326" fillOpacity="0.08" />
      <text
        x="98"
        y="111"
        textAnchor="middle"
        fontFamily="var(--font-label), 'Inter', system-ui, sans-serif"
        fontWeight={800}
        fontSize="27"
        letterSpacing="-1.2"
      >
        <tspan fill={BLUE}>LNAD</tspan>
        <tspan fill={RED} dy="-8" fontSize="17">+</tspan>
      </text>

      {/* top gloss highlight (over everything for the glassy read) */}
      <circle cx="100" cy="100" r="58" fill={`url(#${gloss})`} pointerEvents="none" />
    </svg>
  );
}
