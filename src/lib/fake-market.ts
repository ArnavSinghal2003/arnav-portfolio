/**
 * Deterministic pseudo-market data generators. Everything is seeded from
 * strings so the "market" looks alive but never changes between visits.
 */

/** Mulberry32 PRNG — tiny, deterministic. */
export const seededRandom = (seed: number) => {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

export const hashString = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

/** Stable fake gain% in [min, max] for a label. */
export const fakeGain = (label: string, min = 4, max = 26) => {
  const r = seededRandom(hashString(label))();
  return Math.round((min + r * (max - min)) * 10) / 10;
};

/**
 * Upward-drifting random walk as SVG polyline points.
 * width/height are viewBox units; n is sample count.
 */
export const sparklinePoints = (
  label: string,
  n = 24,
  width = 100,
  height = 28,
  pad = 2,
) => {
  const rand = seededRandom(hashString(label));
  const values: number[] = [];
  let v = 30 + rand() * 20;
  for (let i = 0; i < n; i++) {
    v += (rand() - 0.42) * 10; // slight upward drift
    values.push(v);
  }
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  return values
    .map((val, i) => {
      const x = (i / (n - 1)) * width;
      const y = height - pad - ((val - min) / span) * (height - pad * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
};

/**
 * The main career chart series: a monthly random walk from Jan 2021 to
 * Jul 2026, forced upward at event months so every milestone is a rally.
 */
export const careerSeries = (eventMonths: number[], totalMonths = 67) => {
  const rand = seededRandom(hashString("ARNAV-CAREER"));
  const values: number[] = [];
  let v = 100;
  for (let t = 0; t < totalMonths; t++) {
    const drift = 2.2;
    const noise = (rand() - 0.48) * 14;
    const eventBoost = eventMonths.includes(t) ? 26 + rand() * 14 : 0;
    v = Math.max(60, v + drift + noise + eventBoost);
    values.push(v);
  }
  return values;
};
