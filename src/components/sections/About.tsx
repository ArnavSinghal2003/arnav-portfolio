import Panel from "@/components/terminal/Panel";

const KEY_FACTS = [
  ["INCORPORATED", "NOIDA, INDIA"],
  ["LISTED", "AUG 2021 (VIT VELLORE)"],
  ["HQ", "NOIDA, INDIA"],
  ["CURRENT DESK", "S&P GLOBAL — EDITORIAL"],
  ["CORE BUSINESS", "DATA VIZ ENGINEERING"],
  ["GROWTH SEGMENTS", "AI · GENAI · AUTOMATION"],
  ["DIVIDEND POLICY", "SHIPS FEATURES QUARTERLY"],
];

const About = () => {
  return (
    <Panel id="about" code="DES" title="Security Description" note="ARNAV SINGHAL — PROFILE">
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Business description */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-primary text-xs tracking-widest">BUSINESS DESCRIPTION</h3>
          <p className="font-sans-body text-foreground/90 leading-relaxed text-[15px]">
            Arnav Singhal is a Computer Science graduate from{" "}
            <span className="text-primary font-semibold">Vellore Institute of Technology</span>,
            driven by curiosity and a strong passion for building scalable, impactful technology
            solutions.
          </p>
          <p className="font-sans-body text-foreground/90 leading-relaxed text-[15px]">
            Currently a <span className="text-primary font-semibold">Data Visualization Developer
            at S&amp;P Global</span>, building interactive 2D and 3D visualization templates,
            automating chart production through the Flourish API, and shipping internal
            AI-powered agents that streamline editorial and content workflows.
          </p>
          <p className="font-sans-body text-foreground/90 leading-relaxed text-[15px]">
            Operations sit at the intersection of{" "}
            <span className="text-accent">Front-End Engineering</span>,{" "}
            <span className="text-accent">Data Visualization</span>,{" "}
            <span className="text-accent">Artificial Intelligence</span> and{" "}
            <span className="text-accent">Automation</span> — specializing in software
            implementation, data-driven analysis and intelligent system design that optimize
            workflows, enhance business processes and enable informed decision-making.
          </p>
          <p className="font-sans-body text-foreground/90 leading-relaxed text-[15px]">
            Management style is rooted in <span className="text-accent">discipline</span>,{" "}
            <span className="text-accent">creativity</span> and{" "}
            <span className="text-accent">continuous learning</span> — every challenge is
            approached with precision, adaptability and a results-oriented mindset.
          </p>

          {/* Analyst rating meter */}
          <div className="pt-4 border-t border-border/60">
            <div className="flex items-center justify-between text-[10px] tracking-widest text-muted-foreground mb-2">
              <span>ANALYST RECOMMENDATION</span>
              <span className="text-up font-bold text-glow-up">STRONG HIRE</span>
            </div>
            <div className="flex h-2 gap-px" role="img" aria-label="Analyst recommendation: strong hire">
              {Array.from({ length: 20 }).map((_, i) => (
                <span
                  key={i}
                  className={`flex-1 ${i < 18 ? "bg-up" : "bg-muted"}`}
                  style={{ opacity: i < 18 ? 0.35 + (i / 20) * 0.65 : 1 }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[9px] text-muted-foreground mt-1 tracking-wider">
              <span>PASS</span>
              <span>INTERVIEW</span>
              <span>HIRE</span>
              <span className="text-up">STRONG HIRE</span>
            </div>
          </div>
        </div>

        {/* Key facts table */}
        <div className="lg:col-span-2">
          <h3 className="text-primary text-xs tracking-widest mb-3">KEY FACTS</h3>
          <table className="w-full text-xs">
            <tbody>
              {KEY_FACTS.map(([k, v]) => (
                <tr key={k} className="border-b border-border/50 last:border-0">
                  <td className="py-2.5 text-muted-foreground tracking-wider pr-3 whitespace-nowrap align-top">
                    {k}
                  </td>
                  <td className="py-2.5 text-foreground font-semibold text-right tracking-wide">
                    {v}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 border border-border/60 bg-secondary/40 p-3">
            <p className="text-[10px] text-muted-foreground tracking-wider leading-relaxed">
              RISK DISCLOSURE: prolonged exposure to ARNAV may result in shipped products,
              cleaner dashboards and an unusually organized backlog.
            </p>
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default About;
