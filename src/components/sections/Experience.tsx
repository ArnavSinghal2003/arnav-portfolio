import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, Instagram } from "lucide-react";
import Panel from "@/components/terminal/Panel";
import { careerSeries } from "@/lib/fake-market";

/* Chart geometry (viewBox units) */
const VB_W = 800;
const VB_H = 320;
// `top` leaves headroom above the peak so the tallest event flags aren't clipped.
const PLOT = { left: 46, right: 794, top: 84, bottom: 276 };
const START_YEAR = 2022;
const MONTHS_TOTAL = 55; // Jan 2022 → Jul 2026
const MONTH_NAMES = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

interface CareerEvent {
  id: string;
  t: number; // month index from Jan 2022
  flag: string;
  lift: number; // flag height above the price line, staggered to avoid collisions
  title: string;
  company: string;
  date: string;
  location?: string;
  bullets: string[];
  technologies?: string[];
  instagram?: string;
  certificate?: string;
  crossRef?: { target: string; text: string };
}

const EVENTS: CareerEvent[] = [
  {
    id: "sign",
    t: 12,
    flag: "A",
    lift: 40,
    title: "FOUNDER",
    company: "Sigh.co.in",
    date: "JAN 2023 – DEC 2023",
    location: "Noida, India",
    bullets: [
      "Founded and scaled a print-on-demand T-shirt brand, selling 500+ oversized T-shirts across India.",
      "Built and launched a full-stack e-commerce website, increasing user engagement by 40% in the first month.",
      "Managed end-to-end operations including design, manufacturing, order tracking, and social media marketing.",
      "Gained hands-on experience in digital marketing, customer engagement, and lean business operations.",
    ],
    instagram: "https://www.instagram.com/sigh.co_/",
  },
  {
    id: "pb",
    t: 21,
    flag: "B",
    lift: 64,
    title: "TECHNOLOGY INTERN",
    company: "Policybazaar For Business",
    date: "OCT 2023 – DEC 2023",
    location: "Gurugram, India",
    bullets: [
      "Interned at PBPartners, a brand of Policybazaar Insurance Brokers Private Limited, across a 61-day intensive program.",
      "Designed and optimized automated data processing workflows, improving efficiency by 30%.",
      "Engaged in hands-on frontend and backend development using React, HTML, CSS, JavaScript, Node.js, and MongoDB.",
      "Participated in agile development processes, code reviews, and issue resolution ahead of product deployment.",
    ],
    technologies: ["React", "JavaScript", "Node.js", "MongoDB", "HTML/CSS", "Git"],
  },
  {
    id: "cts",
    t: 41,
    flag: "C",
    lift: 40,
    title: "PROGRAMMER ANALYST TRAINEE",
    company: "Cognizant Technology Solutions",
    date: "JUN 2025 – MAR 2026",
    location: "Bengaluru, India",
    bullets: [
      "Developed modules for Insurix, an Insurance Management Platform, using Angular, Javascript, Node.js, Express.js, and MongoDB.",
      "Built responsive UI with HTML, CSS, Bootstrap, and implemented backend APIs for seamless data flow.",
      "Gained hands-on experience with Jenkins and Docker for CI/CD and containerized deployment.",
      "Collaborated with cross-functional teams to implement data-driven solutions.",
    ],
    technologies: ["FullStack", "Angular", "Node.js", "Javascript", "MongoDB", "Docker", "Jenkins", "Express.js", "TypeScript"],
  },
  {
    id: "mckinsey",
    t: 50,
    flag: "D",
    lift: 34,
    title: "MCKINSEY FORWARD PROGRAM",
    company: "McKinsey.org",
    date: "MAR 2026",
    location: "Remote",
    bullets: [
      "Completed McKinsey.org's Forward Program — a professional development curriculum built on the skills McKinsey consultants use in the field.",
      "Covered structured problem solving, adaptability and resilience, digital fluency, and effective communication.",
      "Applied structured-thinking frameworks to real business scenarios through guided practice and peer collaboration.",
    ],
    technologies: ["Structured Problem Solving", "Adaptability", "Communication", "Digital Fluency", "Leadership"],
    certificate: "https://drive.google.com/drive/folders/1_pXvX4DPS4YMKq5FhN0kNBg2lmEV6LJM?usp=sharing",
    crossRef: { target: "certifications", text: "SEE FIL <GO> — FULL FILING RECORD" },
  },
  {
    id: "snp",
    t: 51,
    flag: "E",
    lift: 72,
    title: "DATA VISUALIZATION DEVELOPER",
    company: "S&P Global",
    date: "APR 2026 – PRESENT",
    location: "Noida, India",
    bullets: [
      "Part of the S&P Global Editorial / Content Design function, developing interactive data visualization templates and automation tools that support digital storytelling and editorial workflows.",
      "Builds custom 2D and 3D Flourish templates using React, JavaScript, D3.js, Three.js, WebGL, HTML/CSS, and Node.js — focused on reusable, performant, visually engaging visualization components.",
      "Automates chart generation through the Flourish API, reducing manual production effort and improving efficiency for recurring visualization workflows.",
      "Builds internal automation tools and AI-powered agents using Python, JavaScript, and Node.js to streamline data analysis, content workflows, watermarking, file processing, and other repetitive operational tasks.",
      "Combines front-end engineering, data visualization, workflow automation, and AI enablement to improve how editorial and content teams create, manage, and publish data-driven content.",
    ],
    technologies: ["React", "D3.js", "Three.js", "WebGL", "JavaScript", "Node.js", "Python", "Flourish API", "AI Agents", "Automation"],
  },
];

const monthLabel = (t: number) => `${MONTH_NAMES[t % 12]} ${START_YEAR + Math.floor(t / 12)}`;

const Experience = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedId, setSelectedId] = useState("snp");
  const [cursor, setCursor] = useState<{ t: number; x: number; y: number } | null>(null);

  const { points, xOf, yOf, values, gridLevels } = useMemo(() => {
    const vals = careerSeries(EVENTS.map((e) => e.t), MONTHS_TOTAL);
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const span = max - min || 1;
    const x = (t: number) => PLOT.left + (t / (MONTHS_TOTAL - 1)) * (PLOT.right - PLOT.left);
    const y = (v: number) => PLOT.bottom - ((v - min) / span) * (PLOT.bottom - PLOT.top);
    const pts = vals.map((v, t) => `${x(t).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
    const levels = [0.25, 0.5, 0.75, 1].map((f) => ({
      value: Math.round(min + span * f),
      y: y(min + span * f),
    }));
    return { points: pts, xOf: x, yOf: y, values: vals, gridLevels: levels };
  }, []);

  const selected = EVENTS.find((e) => e.id === selectedId)!;

  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const xVb = ((e.clientX - rect.left) / rect.width) * VB_W;
    const t = Math.round(((xVb - PLOT.left) / (PLOT.right - PLOT.left)) * (MONTHS_TOTAL - 1));
    if (t < 0 || t > MONTHS_TOTAL - 1) {
      setCursor(null);
      return;
    }
    setCursor({ t, x: xOf(t), y: yOf(values[t]) });
  };

  return (
    <Panel id="experience" code="GP" title="Career Performance" note="EVENTS A–E CLICKABLE · INDEX = EXPERIENCE PTS">
      {/* Range selector (flavor) */}
      <div className="flex items-center gap-1 mb-3 text-[10px] tracking-widest">
        {["1D", "1W", "1M", "1Y"].map((r) => (
          <span
            key={r}
            className="px-2 py-1 text-muted-foreground/40 border border-transparent cursor-not-allowed"
            title="ZOOM DISABLED — CAREER ONLY GOES UP"
          >
            {r}
          </span>
        ))}
        <span className="px-2 py-1 text-primary border border-primary/50 bg-primary/10">ALL</span>
        <span className="ml-auto text-muted-foreground hidden sm:block">JAN 2022 — JUL 2026</span>
      </div>

      {/* Chart */}
      <div className="border border-border/60 bg-background/60">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="w-full h-56 md:h-72 select-none"
          onMouseMove={onMove}
          onMouseLeave={() => setCursor(null)}
          role="img"
          aria-label="Career performance chart with clickable milestone flags"
        >
          {/* Grid */}
          {gridLevels.map((g) => (
            <g key={g.value}>
              <line x1={PLOT.left} y1={g.y} x2={PLOT.right} y2={g.y} stroke="hsl(204 22% 13%)" strokeDasharray="3 5" />
              <text x={PLOT.left - 6} y={g.y + 3} textAnchor="end" fontSize="9" fill="hsl(200 10% 45%)">
                {g.value}
              </text>
            </g>
          ))}
          {/* Year ticks */}
          {[0, 12, 24, 36, 48].map((t) => (
            <text key={t} x={xOf(t)} y={PLOT.bottom + 16} textAnchor="middle" fontSize="9" fill="hsl(200 10% 45%)">
              {START_YEAR + t / 12}
            </text>
          ))}

          {/* Area fill */}
          <polygon points={`${PLOT.left},${PLOT.bottom} ${points} ${PLOT.right},${PLOT.bottom}`} fill="url(#careerFill)" />
          <defs>
            <linearGradient id="careerFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(145 95% 45%)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="hsl(145 95% 45%)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Price line */}
          <motion.polyline
            points={points}
            fill="none"
            stroke="hsl(145 95% 45%)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />

          {/* Crosshair */}
          {cursor && (
            <g pointerEvents="none">
              <line x1={cursor.x} y1={PLOT.top} x2={cursor.x} y2={PLOT.bottom} stroke="hsl(36 100% 55% / 0.5)" strokeDasharray="2 3" />
              <circle cx={cursor.x} cy={cursor.y} r="3.5" fill="hsl(36 100% 55%)" />
              <g transform={`translate(${Math.min(cursor.x + 8, VB_W - 120)}, ${Math.max(cursor.y - 30, 4)})`}>
                <rect width="112" height="26" fill="hsl(208 28% 5%)" stroke="hsl(36 100% 55% / 0.5)" />
                <text x="6" y="11" fontSize="8" fill="hsl(200 10% 60%)">{monthLabel(cursor.t)}</text>
                <text x="6" y="21" fontSize="9" fill="hsl(145 95% 55%)" fontWeight="bold">
                  {Math.round(values[cursor.t])} XP
                </text>
              </g>
            </g>
          )}

          {/* Event flags */}
          {EVENTS.map((ev) => {
            const ex = xOf(ev.t);
            const ey = yOf(values[ev.t]);
            const flagY = Math.max(ey - ev.lift, 4); // never clip above the viewBox
            const active = ev.id === selectedId;
            return (
              <g
                key={ev.id}
                onClick={() => setSelectedId(ev.id)}
                className="cursor-pointer"
                role="button"
                aria-label={`${ev.title} — ${ev.date}`}
              >
                <line
                  x1={ex}
                  y1={ey}
                  x2={ex}
                  y2={flagY + 14}
                  stroke={active ? "hsl(36 100% 55%)" : "hsl(200 10% 40%)"}
                  strokeWidth="1"
                />
                <circle cx={ex} cy={ey} r="3" fill={active ? "hsl(36 100% 55%)" : "hsl(145 95% 45%)"} />
                <rect
                  x={ex - 9}
                  y={flagY}
                  width="18"
                  height="15"
                  fill={active ? "hsl(36 100% 55%)" : "hsl(208 28% 7%)"}
                  stroke={active ? "hsl(36 100% 55%)" : "hsl(200 10% 40%)"}
                />
                <text
                  x={ex}
                  y={flagY + 11}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="bold"
                  fill={active ? "hsl(210 30% 3%)" : "hsl(190 15% 75%)"}
                >
                  {ev.flag}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Event index */}
      <div className="flex flex-wrap gap-1 mt-3">
        {EVENTS.map((ev) => (
          <button
            key={ev.id}
            onClick={() => setSelectedId(ev.id)}
            className={`px-2.5 py-1.5 text-[10px] tracking-wider border transition-colors ${
              ev.id === selectedId
                ? "border-primary/70 bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:text-foreground hover:border-border/80"
            }`}
          >
            <span className="font-bold mr-1.5">{ev.flag}</span>
            {ev.company.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Milestone report for selected event */}
      <motion.div
        key={selected.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-4 border border-border/70 bg-secondary/30"
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-border/60 px-4 py-2.5">
          <span className="text-primary text-[10px] tracking-widest font-bold">
            EVENT {selected.flag} — MILESTONE REPORT
          </span>
          <span className="text-muted-foreground text-[10px] tracking-wider">{selected.date}</span>
          {selected.location && (
            <span className="text-muted-foreground text-[10px] tracking-wider">{selected.location}</span>
          )}
        </div>
        <div className="px-4 py-4">
          <h3 className="text-foreground font-bold text-base tracking-wide">{selected.title}</h3>
          <p className="text-accent text-xs tracking-widest mt-0.5">{selected.company.toUpperCase()}</p>

          <ul className="mt-3 space-y-1.5">
            {selected.bullets.map((b) => (
              <li key={b} className="font-sans-body text-sm text-foreground/85 leading-relaxed flex gap-2">
                <span className="text-up shrink-0">+</span>
                {b}
              </li>
            ))}
          </ul>

          {selected.technologies && (
            <div className="mt-4">
              <p className="text-[10px] text-muted-foreground tracking-widest mb-1.5">SEGMENT EXPOSURE</p>
              <div className="flex flex-wrap gap-1.5">
                {selected.technologies.map((t) => (
                  <span key={t} className="border border-accent/30 text-accent text-[10px] tracking-wider px-2 py-1">
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {selected.certificate && (
              <a
                href={selected.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary/50 text-primary text-[11px] tracking-widest px-3 py-2 hover:bg-primary/10 transition-colors"
              >
                <Award className="w-3.5 h-3.5" />
                VIEW CERTIFICATE
              </a>
            )}

            {selected.instagram && (
              <a
                href={selected.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary/50 text-primary text-[11px] tracking-widest px-3 py-2 hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                INVESTOR RELATIONS — INSTAGRAM
              </a>
            )}

            {selected.crossRef && (
              <button
                onClick={() =>
                  document.getElementById(selected.crossRef!.target)?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex border border-accent/50 text-accent text-[11px] tracking-widest px-3 py-2 hover:bg-accent/10 transition-colors"
              >
                {selected.crossRef.text}
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </Panel>
  );
};

export default Experience;
