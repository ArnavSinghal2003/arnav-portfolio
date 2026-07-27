import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Panel from "@/components/terminal/Panel";
import { sparklinePoints } from "@/lib/fake-market";

interface Holding {
  ticker: string;
  name: string;
  weight: number;
  pl: number;
  badge?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github: string | null;
  demo: string | null;
}

const HOLDINGS: Holding[] = [
  {
    ticker: "MEDI",
    name: "MediBro",
    weight: 24,
    pl: 81.4,
    badge: "PATENTED",
    description: "AI and NLP powered prescription analysis and medication management system.",
    highlights: [
      "Built an AI-powered healthcare application to digitize and analyze handwritten prescriptions using OCR and NLP",
      "Extracted key medical information including medicines, dosages, and usage instructions",
      "Implemented Streamlit frontend and Flask backend for real-time processing",
      "Enabled multilingual support using Google Translate API",
      "Applied post-extraction error correction to improve accuracy and readability",
    ],
    technologies: ["Python", "Streamlit", "Flask", "NLP", "OCR", "Google Translate API"],
    github: "https://github.com/ArnavSinghal2003/MediBro",
    demo: "https://demo.com",
  },
  {
    ticker: "ALGO",
    name: "Algorithmic Trading System",
    weight: 18,
    pl: 42.7,
    badge: "LIVE",
    description:
      "Python-based algorithmic trading system that implements rule-based strategies, backtests them on historical market data, and evaluates performance using risk-adjusted metrics with clear visual insights.",
    highlights: [
      "Implemented trading strategies such as Moving Average Crossover and RSI",
      "Developed a backtesting engine to simulate historical trades",
      "Evaluated performance using Sharpe Ratio and Maximum Drawdown",
      "Created visualizations and an interactive dashboard for strategy analysis",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Streamlit", "Data Visualization & Analytics", "Algorithmic Trading & Technical Analysis"],
    github: "https://github.com/ArnavSinghal2003/Algorithmic-Trading-System",
    demo: "https://algorithmic-trading-system.streamlit.app/",
  },
  {
    ticker: "INSX",
    name: "Insurix",
    weight: 16,
    pl: 34.2,
    description:
      "Full-stack insurance management web application streamlining policy operations through a responsive, user-friendly interface and a scalable, well-structured architecture.",
    highlights: [
      "Built a responsive insurance management system",
      "Ensured clear frontend–backend separation for scalability",
      "Emphasized usability, performance, and clean code structure",
    ],
    technologies: ["Angular", "TypeScript", "JavaScript", "HTML/CSS", "Git", "Node.js", "Express.js", "MongoDB", "Postman", "Jenkins", "Docker"],
    github: "https://github.com/ArnavSinghal2003/Insurix",
    demo: "https://demo.com",
  },
  {
    ticker: "STCK",
    name: "Stock Market Analytics Dashboard",
    weight: 14,
    pl: 28.9,
    badge: "LIVE",
    description:
      "End-to-end stock market analytics platform analyzing price trends, returns, and volatility using real market data.",
    highlights: [
      "Calculated daily returns and volatility to assess stock risk",
      "Applied moving averages for technical trend analysis",
      "Designed an interactive Power BI dashboard for decision-making",
    ],
    technologies: ["Python", "SQL", "Power BI"],
    github: "https://github.com/ArnavSinghal2003/Stock-Market-Analytics",
    demo: "https://drive.google.com/file/d/1Q11iU_xNQ7ENICneVGvTcP2x5tMRireZ/view?usp=sharing",
  },
  {
    ticker: "MDLF",
    name: "Dr.Medilyf",
    weight: 14,
    pl: 22.5,
    description:
      "Healthcare platform enhancing access to quality care through technology — connecting patients with providers, improving affordability and convenience.",
    highlights: [
      "Implemented telemedicine consultations and appointment scheduling features",
      "Built modules for health records management and medication support",
      "Developed using HTML, CSS, JavaScript, and React",
    ],
    technologies: ["React", "HTML", "CSS", "JavaScript", "Figma"],
    github: "https://github.com/ArnavSinghal2003/MedLyf",
    demo: "https://demo.com",
  },
  {
    ticker: "EVOT",
    name: "E-Voting through Blockchain",
    weight: 14,
    pl: 19.8,
    description:
      "Blockchain-based e-voting system using Smart Contracts and a private Ethereum (Geth) network ensuring secure, transparent, and tamper-proof elections.",
    highlights: [
      "Implemented secure voter registration and vote validation via Smart Contracts",
      "Enabled real-time vote updates with blockchain immutability",
      "Improved election security, transparency, and efficiency",
    ],
    technologies: ["Blockchain", "Ethereum (Geth)", "Smart Contracts", "Cryptography"],
    github: null,
    demo: null,
  },
];

const Projects = () => {
  const [openTicker, setOpenTicker] = useState<string | null>("MEDI");

  return (
    <Panel id="projects" code="HOLD" title="Portfolio Holdings" note="6 POSITIONS · CLICK ROW FOR POSITION DETAIL">
      <div className="overflow-x-auto">
        <table className="w-full text-xs min-w-[640px]">
          <thead>
            <tr className="text-muted-foreground text-[10px] tracking-widest border-b border-border">
              <th className="text-left font-medium py-2 pr-3">TICKER</th>
              <th className="text-left font-medium py-2 pr-3">POSITION</th>
              <th className="text-right font-medium py-2 pr-3">WEIGHT</th>
              <th className="text-right font-medium py-2 pr-3">P/L %</th>
              <th className="text-right font-medium py-2 pr-3 w-28">TREND</th>
              <th className="text-right font-medium py-2 w-6" aria-label="Expand" />
            </tr>
          </thead>
          <tbody>
            {HOLDINGS.map((h) => {
              const open = openTicker === h.ticker;
              return (
                <Fragment key={h.ticker}>
                  <tr
                    onClick={() => setOpenTicker(open ? null : h.ticker)}
                    className={`border-b border-border/50 cursor-pointer transition-colors ${
                      open ? "bg-primary/5" : "hover:bg-secondary/50"
                    }`}
                  >
                    <td className="py-3 pr-3">
                      <span className={`font-extrabold tracking-widest ${open ? "text-primary text-glow-amber" : "text-foreground"}`}>
                        {h.ticker}
                      </span>
                      {h.badge && (
                        <span className="ml-2 text-[9px] tracking-widest border border-primary/50 text-primary px-1.5 py-0.5">
                          {h.badge}
                        </span>
                      )}
                    </td>
                    <td className="py-3 pr-3 text-foreground/85">{h.name}</td>
                    <td className="py-3 pr-3 text-right tabular-nums text-muted-foreground">
                      {h.weight.toFixed(1)}%
                    </td>
                    <td className="py-3 pr-3 text-right tabular-nums text-up font-bold">
                      +{h.pl.toFixed(1)}%
                    </td>
                    <td className="py-3 pr-3">
                      <svg viewBox="0 0 100 28" className="w-24 h-6 ml-auto" preserveAspectRatio="none" aria-hidden="true">
                        <polyline
                          points={sparklinePoints(h.ticker, 20)}
                          fill="none"
                          stroke="hsl(145 95% 45%)"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </td>
                    <td className="py-3 text-right text-muted-foreground">{open ? "−" : "+"}</td>
                  </tr>

                  <AnimatePresence initial={false}>
                    {open && (
                      <tr className="border-b border-border/50 bg-background/50">
                        <td colSpan={6} className="p-0">
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 py-4 grid md:grid-cols-2 gap-6">
                              <div>
                                <p className="text-[10px] text-muted-foreground tracking-widest mb-2">POSITION SUMMARY</p>
                                <p className="font-sans-body text-sm text-foreground/85 leading-relaxed">{h.description}</p>
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                  {h.technologies.map((t) => (
                                    <span key={t} className="border border-accent/30 text-accent text-[10px] tracking-wider px-2 py-1">
                                      {t.toUpperCase()}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <p className="text-[10px] text-muted-foreground tracking-widest mb-2">POSITION NOTES</p>
                                <ul className="space-y-1.5">
                                  {h.highlights.map((hl) => (
                                    <li key={hl} className="font-sans-body text-sm text-foreground/85 leading-relaxed flex gap-2">
                                      <span className="text-up shrink-0">+</span>
                                      {hl}
                                    </li>
                                  ))}
                                </ul>
                                <div className="mt-4 flex gap-2">
                                  {h.github && (
                                    <a
                                      href={h.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 border border-border text-foreground text-[10px] tracking-widest px-3 py-2 hover:border-primary/60 hover:text-primary transition-colors"
                                    >
                                      <Github className="w-3.5 h-3.5" />
                                      PROSPECTUS
                                    </a>
                                  )}
                                  {h.demo && (
                                    <a
                                      href={h.demo}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 border border-up/50 text-up text-[10px] tracking-widest px-3 py-2 hover:bg-up/10 transition-colors"
                                    >
                                      <ExternalLink className="w-3.5 h-3.5" />
                                      LIVE QUOTE
                                    </a>
                                  )}
                                  {!h.github && !h.demo && (
                                    <span className="text-[10px] text-muted-foreground tracking-widest py-2">
                                      PRIVATE PLACEMENT — SOURCE NOT PUBLIC
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </td>
                      </tr>
                    )}
                  </AnimatePresence>
                </Fragment>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="text-[10px] tracking-widest text-muted-foreground">
              <td className="py-3" colSpan={2}>TOTAL POSITIONS: 6</td>
              <td className="py-3 text-right tabular-nums">100.0%</td>
              <td className="py-3 text-right text-up font-bold tabular-nums">ALL GREEN</td>
              <td colSpan={2} />
            </tr>
          </tfoot>
        </table>
      </div>
    </Panel>
  );
};

export default Projects;
