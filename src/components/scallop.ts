/**
 * A scalloped circle, echoing the seal edge of the BCDC logo: rounded bumps
 * with soft notches between them. Returned as a CSS polygon() so it scales
 * with whatever element it clips.
 */
function scallopPolygon(bumps = 22, depth = 0.022, steps = 440): string {
  const points: string[] = [];
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const bump = Math.sqrt(Math.abs(Math.cos((bumps * t) / 2)));
    const r = 0.5 - depth + depth * bump;
    const x = 50 + r * 100 * Math.cos(t);
    const y = 50 + r * 100 * Math.sin(t);
    points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }
  return `polygon(${points.join(", ")})`;
}

export const scallop = scallopPolygon();
