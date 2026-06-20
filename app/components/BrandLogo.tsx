/**
 * The Cell Context monogram — overlapping serif "CC" inside a gold orbital
 * ellipse with a constellation of nodes. `tone` controls the letterform
 * color so it reads on light ("ink") or dark ("cream") backgrounds.
 */
export default function BrandLogo({
  size = 40,
  tone = "ink",
  className = "",
}: {
  size?: number;
  tone?: "ink" | "cream";
  className?: string;
}) {
  const letter = tone === "cream" ? "#EFE7D7" : "#16233B";
  const ringFill = tone === "cream" ? "#16233B" : "#F4EDDF";
  return (
    <svg
      width={size}
      height={(size * 150) / 138}
      viewBox="0 0 138 150"
      fill="none"
      className={className}
      role="img"
      aria-label="Cell Context"
    >
      {/* orbital ellipse */}
      <ellipse cx="60" cy="79" rx="50" ry="63" stroke="#B58A3C" strokeWidth="1.4" fill="none" />
      {/* constellation lines */}
      <path d="M88 22 L108 33 L126 52 L101 84" stroke="#B58A3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* overlapping serif CC */}
      <text
        x="59"
        y="116"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, 'Times New Roman', serif"
        fontSize="104"
        fontWeight={500}
        letterSpacing="-0.37em"
        fill={letter}
      >
        CC
      </text>
      {/* constellation nodes */}
      <circle cx="88" cy="21" r="5" fill={ringFill} stroke="#B58A3C" strokeWidth="1.3" />
      <circle cx="108" cy="33" r="2.3" fill="#B58A3C" />
      <circle cx="126" cy="52" r="7" fill="#B58A3C" />
      <circle cx="101" cy="84" r="4.3" fill="#B58A3C" />
      <circle cx="71" cy="141" r="3.3" fill="#B58A3C" />
    </svg>
  );
}
