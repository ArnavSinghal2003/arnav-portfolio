import { motion } from "framer-motion";
import Panel from "@/components/terminal/Panel";
import CountUp from "@/components/fx/CountUp";

const IMPACT_METRICS = [
  { value: 1000, suffix: "+", label: "STUDENTS TRAINED", bar: 100 },
  { value: 500, suffix: "+", label: "WORKSHOP ATTENDEES", bar: 72 },
  { value: 50, suffix: "+", label: "STUDENTS MENTORED", bar: 48 },
  { value: 4, suffix: " YRS", label: "BLOOD DRIVE VOLUNTEERING", bar: 60 },
];

const GOVERNANCE = [
  {
    org: "INTERNET OF THINGS COMMUNITY",
    role: "SENIOR CORE — STUDENT CLUB",
    period: "2022–2024",
    note: "Conducted technical & soft-skills training impacting over 1000 students.",
    award: "OUTSTANDING CONTRIBUTION AWARD",
  },
  {
    org: "INSTITUTION OF ENGINEERING & TECHNOLOGY",
    role: "SENIOR CORE — CHAPTER",
    period: "2021–2023",
    note: "Organized workshops, hackathons, and tech talks for 500+ students, fostering a culture of innovation.",
    award: "BEST EVENT AWARD",
  },
  {
    org: "YOUTH RED CROSS ASSOCIATION",
    role: "SENIOR VOLUNTEER",
    period: "2021–2025",
    note: "Conducted and helped organize regular blood donation drives in collaboration with local hospitals.",
    award: "COMMUNITY IMPACT AWARD",
  },
  {
    org: "CODING CLUB",
    role: "SENIOR MENTOR",
    period: "2021–2023",
    note: "Mentored 50+ junior students in data structures, algorithms, and competitive programming.",
    award: "BEST MENTOR RECOGNITION",
  },
];

const Extracurricular = () => {
  return (
    <Panel id="extracurricular" code="ESG" title="Social Impact Report" note="E—N/A · S—EXCEPTIONAL · G—AWARDED">
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Impact metrics */}
        <div className="lg:col-span-2 space-y-5">
          <h3 className="text-primary text-xs tracking-widest">SOCIAL METRICS</h3>
          {IMPACT_METRICS.map((m) => (
            <div key={m.label}>
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-up font-extrabold text-2xl tabular-nums text-glow-up">
                  <CountUp target={m.value} suffix={m.suffix} />
                </span>
                <span className="text-muted-foreground text-[10px] tracking-widest">{m.label}</span>
              </div>
              <div className="h-1.5 bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${m.bar}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="h-full bg-up"
                  style={{ opacity: 0.85 }}
                />
              </div>
            </div>
          ))}

          <div className="border border-border/60 bg-secondary/40 p-3 mt-2">
            <p className="text-[10px] text-muted-foreground tracking-wider leading-relaxed">
              ESG SCORE: SIGNIFICANTLY ABOVE SECTOR AVERAGE. ASSET DEMONSTRATES CONSISTENT
              COMMUNITY REINVESTMENT OF TIME AND EXPERTISE.
            </p>
          </div>
        </div>

        {/* Governance / roles */}
        <div className="lg:col-span-3">
          <h3 className="text-primary text-xs tracking-widest mb-3">GOVERNANCE RECORD — ROLES & AWARDS</h3>
          <div className="divide-y divide-border/50 border border-border/60">
            {GOVERNANCE.map((g) => (
              <div key={g.org} className="px-4 py-3">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-foreground font-bold text-xs tracking-wide">{g.org}</span>
                  <span className="text-accent text-[10px] tracking-widest">{g.role}</span>
                  <span className="text-muted-foreground text-[10px] tabular-nums ml-auto">{g.period}</span>
                </div>
                <p className="font-sans-body text-[13px] text-foreground/75 leading-relaxed mt-1.5">{g.note}</p>
                <p className="text-up text-[10px] tracking-widest mt-1.5">🏆 {g.award}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default Extracurricular;
