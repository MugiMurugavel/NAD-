// Design tokens for the LNAD⁺ pinned-scroll journey — the real apothecary brand.
// The eye learns one contrast rule:
//   cell-blue = baseline / structure / unengaged
//   coral     = the Circulating channel (unchanged, NEVER glows)
//   GOLD      = the measured LNAD⁺ effect, propagating (the only thing that glows)

export const J = {
  bg: "#F4EDDF", // ivory ground
  parchment: "#EAE0CD",
  paper: "#FFFFFF",
  navy: "#16233B", // ink — chassis + structure
  inkSoft: "#2C3C5A",
  inkDeep: "#0E1B30", // the dark intracellular field (gold glows on it)
  blue: "#3F6DA1", // cell-blue — dormant structure / membrane / unengaged nodes
  blueGlow: "#8FB4D8",
  blueBright: "#8FB7E0",
  graphite: "#564F43", // tick labels / registration marks
  line: "rgba(22,35,59,0.14)",
  lineOnDark: "rgba(220,228,240,0.16)",
  gold: "#B58A3C", // THE LNAD⁺ signal
  goldSoft: "#CBA968",
  goldDeep: "#876320",
  coral: "#C5634A", // Circulating channel ONLY — never glows
  cream: "#F4EDDF",
  creamDim: "rgba(244,237,223,0.66)",
} as const;

export const JEASE = [0.22, 1, 0.36, 1] as const;

// Diagram coordinate space — everything scales with the viewport via viewBox.
export const VIEW = { w: 1200, h: 760 } as const;
export const CORE = { x: 600, y: 408 } as const;

// Downstream NAD⁺-dependent biology. Order = clockwise illumination from SIRT1.
export const NODES = [
  { id: "sirt1", label: "SIRT1", sub: "sirtuin signaling", x: 600, y: 214 },
  { id: "menam", label: "MeNAM", sub: "methylation", x: 806, y: 296 },
  { id: "2py", label: "2PY", sub: "metabolite", x: 842, y: 476 },
  { id: "redox", label: "Redox / detox", sub: "oxidative balance", x: 704, y: 596 },
  { id: "immune", label: "Immune / chemokine", sub: "signaling", x: 496, y: 596 },
  { id: "lipid", label: "Lipid handling", sub: "metabolism", x: 358, y: 476 },
  { id: "tissue", label: "Tissue / vascular", sub: "context", x: 394, y: 296 },
] as const;

// Depth HUD stages (right rail), one per scene.
export const STAGES = ["SUBLINGUAL", "BLOODSTREAM", "MEMBRANE", "INTRACELLULAR", "SIGNAL", "MEASURED"] as const;
