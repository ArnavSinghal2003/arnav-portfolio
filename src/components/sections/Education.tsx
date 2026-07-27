import Panel from "@/components/terminal/Panel";

interface Rating {
  institution: string;
  program: string;
  location: string;
  period: string;
  rating: string;
  score: string | null;
  outlook: string;
  notes: string[];
}

const RATINGS: Rating[] = [
  {
    institution: "VELLORE INSTITUTE OF TECHNOLOGY",
    program: "B.TECH — COMPUTER SCIENCE",
    location: "VELLORE, IN",
    period: "2021–2025",
    rating: "AA+",
    score: "CGPA 8.14/10",
    outlook: "GRADUATED — POSITIVE",
    notes: [
      "Specialized in Data Structures, Web Development, Data Analytics, and AI",
      "Patent granted for capstone project MediBro — AI powered prescription analysis & medication management system",
      "Active member of technical and non-technical clubs and hackathons",
    ],
  },
  {
    institution: "APEEJAY SCHOOL NOIDA",
    program: "CLASS XII — PCM + PHYSICAL EDUCATION",
    location: "NOIDA, IN",
    period: "2020–2021",
    rating: "AA",
    score: "89.4%",
    outlook: "STABLE",
    notes: [
      "Developed strong foundation in Mathematics and Physics",
      "Participated in inter-school Football and Basketball tournaments",
    ],
  },
  {
    institution: "APEEJAY SCHOOL NOIDA",
    program: "CLASS X — SECONDARY",
    location: "NOIDA, IN",
    period: "2018–2019",
    rating: "AA+",
    score: "91.8%",
    outlook: "STABLE",
    notes: [
      "Received Scholar Badge for academic excellence",
      "Secured highest marks in English for Class 10 Board Exams",
      "Active participant in debates and quizzes",
    ],
  },
  {
    institution: "WYNBERG ALLEN SCHOOL",
    program: "EARLY EDUCATION",
    location: "MUSSOORIE, IN",
    period: "2009–2017",
    rating: "A",
    score: null,
    outlook: "FOUNDATIONAL",
    notes: [
      "Public speaking via plays and elocution contests",
      "Represented school in inter-school football, swimming, and athletics",
    ],
  },
];

const Education = () => {
  return (
    <Panel id="education" code="EDU" title="Fundamentals — Credit Ratings" note="RATING AGENCY: SINGHAL & POORS">
      <div className="space-y-3">
        {RATINGS.map((r) => (
          <div key={r.institution + r.period} className="border border-border/60 bg-secondary/20">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 border-b border-border/50">
              {/* Rating badge */}
              <span
                className="text-primary text-glow-amber font-extrabold text-2xl tracking-wider w-16 shrink-0"
                title={`Rated ${r.rating}`}
              >
                {r.rating}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-foreground font-bold text-sm tracking-wide truncate">{r.institution}</p>
                <p className="text-muted-foreground text-[10px] tracking-widest mt-0.5">
                  {r.program} · {r.location}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-accent text-xs font-bold tabular-nums">{r.period}</p>
                {r.score && <p className="text-up text-xs font-bold mt-0.5">{r.score}</p>}
                <p className="text-muted-foreground text-[9px] tracking-widest mt-0.5">OUTLOOK: {r.outlook}</p>
              </div>
            </div>
            <ul className="px-4 py-3 space-y-1">
              {r.notes.map((n) => (
                <li key={n} className="font-sans-body text-[13px] text-foreground/75 leading-relaxed flex gap-2">
                  <span className="text-muted-foreground shrink-0">›</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default Education;
