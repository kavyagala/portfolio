// Original SVG illustrations. All data here is generated for decoration only —
// it is NOT a result from any of the projects.

// Small seeded random generator so the plots look the same on every load.
function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/* ── Hero: scatter plot with a regression line and PCA axes ── */
export function HeroPlot() {
  const r = rng(42);
  const pts = Array.from({ length: 46 }, () => {
    const x = 40 + r() * 400;
    const y = 360 - x * 0.62 + (r() - 0.5) * 120;
    return [x, y];
  });

  return (
    <svg className="hero-plot" viewBox="0 0 480 440" role="img"
      aria-label="Illustrative scatter plot with a fitted line and principal component axes">
      {/* grid */}
      {Array.from({ length: 9 }, (_, i) => (
        <line key={`v${i}`} x1={40 + i * 50} y1="20" x2={40 + i * 50} y2="400" className="grid" />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`h${i}`} x1="40" y1={50 + i * 50} x2="440" y2={50 + i * 50} className="grid" />
      ))}
      <line x1="40" y1="400" x2="440" y2="400" className="axis" />
      <line x1="40" y1="20" x2="40" y2="400" className="axis" />

      {/* residual sticks */}
      {pts.map(([x, y], i) => {
        const fit = 360 - x * 0.62;
        return <line key={`r${i}`} x1={x} y1={y} x2={x} y2={fit} className="residual"
          style={{ animationDelay: `${1.6 + i * 0.02}s` }} />;
      })}

      {/* points */}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.4" className="pt"
          style={{ animationDelay: `${i * 0.025}s` }} />
      ))}

      {/* fitted line */}
      <line x1="40" y1="335" x2="440" y2="87" className="fit" />

      {/* principal component axes */}
      <g className="pc" transform="translate(240 211) rotate(-31.8)">
        <line x1="-150" y1="0" x2="150" y2="0" />
        <line x1="0" y1="-48" x2="0" y2="48" />
        <text x="156" y="4">PC1</text>
        <text x="6" y="-54">PC2</text>
      </g>

      <text x="440" y="424" className="ann" textAnchor="end">x · feature</text>
      <text x="48" y="34" className="ann">y · target</text>
      <text x="300" y="76" className="ann accent">ŷ = β₀ + β₁x</text>
    </svg>
  );
}

/* ── Project 1: houses + predicted vs actual ── */
function RealEstate() {
  const heights = [60, 90, 75, 120, 100, 150, 135];
  return (
    <svg viewBox="0 0 400 240" role="img" aria-label="Illustration: house silhouettes and a price trend line">
      <line x1="20" y1="210" x2="380" y2="210" className="axis" />
      {heights.map((h, i) => {
        const x = 34 + i * 50;
        const y = 210 - h;
        return (
          <g key={i} className="house" style={{ transitionDelay: `${i * 40}ms` }}>
            <path d={`M${x} ${y + 16} L${x + 16} ${y} L${x + 32} ${y + 16} V210 H${x} Z`} />
            <rect x={x + 12} y={196} width="8" height="14" className="door" />
          </g>
        );
      })}
      <polyline className="fit dashed" points="50,160 100,128 150,140 200,98 250,112 300,62 350,76" />
      {[[50,152],[100,134],[150,132],[200,104],[250,104],[300,70],[350,70]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" className="pt solid" />
      ))}
      <text x="24" y="30" className="ann">predicted ─ ─  ·  observed ●</text>
    </svg>
  );
}

/* ── Project 2: box plots per sector + regression ── */
function Anova() {
  const groups = [
    { x: 70, q1: 120, q3: 160, med: 140, lo: 95, hi: 185 },
    { x: 160, q1: 95, q3: 140, med: 115, lo: 70, hi: 170 },
    { x: 250, q1: 135, q3: 175, med: 150, lo: 110, hi: 195 },
    { x: 340, q1: 70, q3: 110, med: 92, lo: 48, hi: 135 },
  ];
  return (
    <svg viewBox="0 0 400 240" role="img" aria-label="Illustration: box plots comparing four groups with a trend line">
      <line x1="20" y1="215" x2="380" y2="215" className="axis" />
      <line x1="20" y1="140" x2="380" y2="140" className="grid strong" />
      {groups.map((g, i) => (
        <g key={i} className="box">
          <line x1={g.x} y1={g.lo} x2={g.x} y2={g.hi} className="whisker" />
          <rect x={g.x - 18} y={g.q1} width="36" height={g.q3 - g.q1} />
          <line x1={g.x - 18} y1={g.med} x2={g.x + 18} y2={g.med} className="median" />
          <text x={g.x} y="232" textAnchor="middle" className="ann">G{i + 1}</text>
        </g>
      ))}
      <line x1="40" y1="170" x2="370" y2="80" className="fit" />
      <text x="24" y="30" className="ann">between vs within variance · F = MSB / MSW</text>
    </svg>
  );
}

/* ── Project 3: pixel-grid "face" + principal axes ── */
function Pca() {
  // 12x12 abstract face mask (1 = darker pixel)
  const rows = [
    "000111111000",
    "001111111100",
    "011000000110",
    "010000000010",
    "010110011010",
    "010000000010",
    "010001000010",
    "010000000010",
    "010011110010",
    "011000000110",
    "001100001100",
    "000111111000",
  ];
  const r = rng(7);
  return (
    <svg viewBox="0 0 400 240" role="img" aria-label="Illustration: an abstract pixel face and a set of component tiles">
      <g transform="translate(26 24)">
        {rows.map((row, y) =>
          row.split("").map((c, x) => (
            <rect key={`${x}-${y}`} x={x * 16} y={y * 16} width="14" height="14"
              className={c === "1" ? "px on" : "px"}
              style={{ opacity: c === "1" ? 0.9 : 0.08 + r() * 0.18 }} />
          ))
        )}
      </g>
      <text x="236" y="36" className="ann">x ∈ ℝ¹⁴⁴ → z ∈ ℝ³</text>
      {[0, 1, 2].map((k) => (
        <g key={k} transform={`translate(236 ${54 + k * 58})`}>
          {Array.from({ length: 16 }, (_, i) => (
            <rect key={i} x={(i % 4) * 11} y={Math.floor(i / 4) * 11} width="10" height="10"
              className="px on" style={{ opacity: 0.15 + r() * 0.75 }} />
          ))}
          <text x="56" y="28" className="ann">PC{k + 1}</text>
          <line x1="90" y1="24" x2={90 + (60 - k * 18)} y2="24" className="fit" />
        </g>
      ))}
    </svg>
  );
}

export function ProjectVisual({ type }) {
  if (type === "realEstate") return <RealEstate />;
  if (type === "anova") return <Anova />;
  return <Pca />;
}

/* ── Section divider: a tiny residual plot ── */
export function Divider({ label }) {
  const r = rng(label.length * 31);
  return (
    <div className="divider" aria-hidden="true">
      <svg viewBox="0 0 600 40" preserveAspectRatio="none">
        <line x1="0" y1="20" x2="600" y2="20" />
        {Array.from({ length: 60 }, (_, i) => {
          const y = 20 + (r() - 0.5) * 26;
          return <circle key={i} cx={5 + i * 10} cy={y} r="1.6" />;
        })}
      </svg>
      <span>{label}</span>
    </div>
  );
}
