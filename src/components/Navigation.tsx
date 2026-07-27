import { useEffect, useState } from "react";
import { FUNCTION_CODES } from "@/components/terminal/CommandLine";
import NewsTicker from "@/components/terminal/NewsTicker";

/**
 * Sticky terminal chrome: ARNAV quote strip + function-key nav + news tape.
 */
const Navigation = () => {
  const [now, setNow] = useState(new Date());
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    for (const { target } of FUNCTION_CODES) {
      const el = document.getElementById(target);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const time = now.toLocaleTimeString("en-IN", {
    hour12: false,
    timeZone: "Asia/Kolkata",
  });
  const date = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      {/* Quote strip */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4 text-xs">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-baseline gap-2 shrink-0"
            aria-label="Scroll to top"
          >
            <span className="text-primary font-extrabold text-base tracking-widest text-glow-amber">
              ARNAV
            </span>
            <span className="text-muted-foreground hidden sm:inline">INDIA TALENT</span>
          </button>

          <span className="text-up font-bold text-glow-up whitespace-nowrap">
            814.00 <span aria-hidden="true">▲</span> +8.14%
          </span>

          <span className="hidden md:flex items-center gap-2 text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-up animate-pulse" />
            OPEN TO OPPORTUNITIES
          </span>

          <span className="flex-1" />

          <span className="text-muted-foreground whitespace-nowrap tabular-nums hidden sm:inline">
            {date}
          </span>
          <span className="text-foreground whitespace-nowrap tabular-nums">{time} IST</span>
        </div>
      </div>

      {/* Function-key nav */}
      <nav className="border-b border-border bg-secondary/30 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-2 flex items-stretch w-max lg:w-auto">
          {FUNCTION_CODES.map((fn, i) => {
            const active = activeSection === fn.target;
            return (
              <button
                key={fn.code}
                onClick={() =>
                  document.getElementById(fn.target)?.scrollIntoView({ behavior: "smooth" })
                }
                className={`px-3 py-2 text-[11px] tracking-wider whitespace-nowrap border-b-2 transition-colors duration-200 ${
                  active
                    ? "border-primary text-primary bg-primary/10"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                <span className="text-muted-foreground/60 mr-1.5">F{i + 1}</span>
                <span className="font-bold">{fn.code}</span>
                <span className="hidden xl:inline text-muted-foreground ml-1.5">{fn.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <NewsTicker />
    </header>
  );
};

export default Navigation;
