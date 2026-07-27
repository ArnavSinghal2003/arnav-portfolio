import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import CountUp from "@/components/fx/CountUp";
import { sparklinePoints } from "@/lib/fake-market";

const QUOTE_BOARD: { label: string; value: string; accent?: "up" | "amber" | "cyan" }[] = [
  { label: "EMPLOYER", value: "S&P GLOBAL", accent: "up" },
  { label: "ROLE", value: "DATA VIZ DEVELOPER" },
  { label: "LOCATION", value: "NOIDA, IN" },
  { label: "DEGREE", value: "B.TECH CS — VIT" },
  { label: "PATENTS", value: "1 (MEDIBRO)", accent: "amber" },
  { label: "CERTIFICATIONS", value: "6 ON RECORD", accent: "cyan" },
  { label: "52W RANGE", value: "TRAINEE → DEVELOPER" },
  { label: "ANALYST CONSENSUS", value: "STRONG HIRE", accent: "up" },
];

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const socials = [
    { icon: Github, href: "https://github.com/ArnavSinghal2003", label: "GITHUB" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/arnav-singhal-b25697268/", label: "LINKEDIN" },
    { icon: Mail, href: "mailto:arnavsinghal03@gmail.com", label: "EMAIL" },
  ];

  return (
    <section id="hero" className="px-4 pt-6 pb-2 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="border border-border bg-card"
      >
        {/* Security identity row */}
        <div className="border-b border-border px-4 md:px-6 py-4 flex flex-wrap items-end gap-x-6 gap-y-3">
          <div>
            <div className="flex items-baseline gap-3">
              <h1 className="text-primary font-extrabold text-4xl md:text-6xl tracking-widest text-glow-amber leading-none">
                ARNAV
              </h1>
              <span className="text-muted-foreground text-xs tracking-widest hidden sm:inline">
                EQUITY · TALENT EXCHANGE OF INDIA
              </span>
            </div>
            <p className="text-foreground text-sm md:text-base font-semibold tracking-[0.25em] mt-2">
              ARNAV SINGHAL
            </p>
            <p className="text-muted-foreground text-xs tracking-wider mt-1">
              SECTOR: TECHNOLOGY — DATA VISUALIZATION · AI &amp; AUTOMATION · FULL-STACK · ANALYTICS
            </p>
          </div>

          <div className="ml-auto text-right">
            <div className="text-up font-extrabold text-4xl md:text-5xl tabular-nums text-glow-up leading-none">
              <CountUp target={814} decimals={2} />
            </div>
            <p className="text-up text-sm font-bold mt-1">
              <span aria-hidden="true">▲</span> +8.14% ALL-TIME HIGH
            </p>
            <p className="text-muted-foreground text-[10px] mt-1">
              PRICE = CGPA × 100 · DATA DELAYED 0 MIN
            </p>
          </div>
        </div>

        {/* Intraday sparkline */}
        <div className="border-b border-border px-4 md:px-6 py-3">
          <svg viewBox="0 0 600 60" className="w-full h-14" preserveAspectRatio="none" aria-hidden="true">
            <polyline
              points={sparklinePoints("ARNAV-INTRADAY", 80, 600, 60, 4)}
              fill="none"
              stroke="hsl(145 95% 45%)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Quote board */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border">
          {QUOTE_BOARD.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.07 }}
              className="px-4 py-3 border-r border-b md:border-b-0 border-border/60 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r-0"
            >
              <p className="text-muted-foreground text-[10px] tracking-widest">{item.label}</p>
              <p
                className={`text-sm font-bold mt-1 tracking-wide ${
                  item.accent === "up"
                    ? "text-up text-glow-up"
                    : item.accent === "amber"
                      ? "text-primary text-glow-amber"
                      : item.accent === "cyan"
                        ? "text-accent"
                        : "text-foreground"
                }`}
              >
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="px-4 md:px-6 py-4 flex flex-wrap items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="bg-up/15 border border-up/60 text-up font-bold text-sm tracking-widest px-6 py-2.5 hover:bg-up/25 transition-colors"
          >
            BUY — PLACE ORDER
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="border border-border text-foreground font-bold text-sm tracking-widest px-6 py-2.5 hover:border-primary/60 hover:text-primary transition-colors"
          >
            VIEW HOLDINGS
          </button>

          <span className="flex-1" />

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center gap-2 border border-border px-3 py-2 text-muted-foreground hover:text-accent hover:border-accent/60 transition-colors text-[10px] tracking-widest"
              >
                <s.icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
