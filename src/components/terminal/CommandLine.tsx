import { useEffect, useRef, useState } from "react";

export const FUNCTION_CODES: { code: string; target: string; label: string }[] = [
  { code: "DES", target: "about", label: "DESCRIPTION" },
  { code: "GP", target: "experience", label: "CAREER CHART" },
  { code: "HOLD", target: "projects", label: "HOLDINGS" },
  { code: "MAP", target: "skills", label: "SKILL HEATMAP" },
  { code: "EDU", target: "education", label: "RATINGS" },
  { code: "FIL", target: "certifications", label: "FILINGS" },
  { code: "ESG", target: "extracurricular", label: "SOCIAL IMPACT" },
  { code: "AH", target: "hobbies", label: "AFTER HOURS" },
  { code: "MSG", target: "contact", label: "ORDER TICKET" },
];

const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

/**
 * The fixed bottom command bar. Type a function code + Enter to jump around;
 * `/` focuses it from anywhere. Includes a few easter eggs.
 */
const CommandLine = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [feedback, setFeedback] = useState("TYPE HELP FOR FUNCTIONS");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (e.key === "/" && !target.closest("input, textarea")) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") inputRef.current?.blur();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const run = (raw: string) => {
    const cmd = raw.trim().toUpperCase();
    if (!cmd) return;

    const fn = FUNCTION_CODES.find((f) => f.code === cmd);
    if (fn) {
      scrollToId(fn.target);
      setFeedback(`${fn.code} <GO> — ${fn.label}`);
      return;
    }

    switch (cmd) {
      case "HELP":
      case "?":
        setFeedback(FUNCTION_CODES.map((f) => f.code).join(" · ") + " · BUY · TOP");
        break;
      case "TOP":
      case "HOME":
      case "ARNAV":
        window.scrollTo({ top: 0, behavior: "smooth" });
        setFeedback("ARNAV <GO> — QUOTE");
        break;
      case "BUY":
      case "BUY ARNAV":
      case "HIRE":
        scrollToId("contact");
        setFeedback("ROUTING ORDER... FILL THE TICKET BELOW");
        break;
      case "SELL":
      case "SHORT":
      case "SHORT ARNAV":
        setFeedback("ORDER REJECTED — SHORTING ARNAV IS NOT ADVISED. ASSET ONLY GOES UP.");
        break;
      case "GITHUB":
        window.open("https://github.com/ArnavSinghal2003", "_blank", "noopener");
        setFeedback("OPENING EXCHANGE: GITHUB");
        break;
      case "LINKEDIN":
        window.open("https://www.linkedin.com/in/arnav-singhal-b25697268/", "_blank", "noopener");
        setFeedback("OPENING EXCHANGE: LINKEDIN");
        break;
      case "COFFEE":
        setFeedback("BREWING... CAFFEINE POSITION INCREASED +47%");
        break;
      case "SUDO":
      case "SUDO HIRE":
        setFeedback("PERMISSION DENIED — NICE TRY THOUGH. TYPE BUY INSTEAD.");
        break;
      case "EXIT":
      case "QUIT":
        setFeedback("YOU CAN CHECK OUT ANY TIME YOU LIKE, BUT YOU CAN NEVER LEAVE.");
        break;
      default:
        setFeedback(`UNKNOWN FUNCTION: ${cmd} — TYPE HELP`);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/40 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center gap-3 px-4 py-2">
        <span className="text-primary font-bold text-sm shrink-0 text-glow-amber">ARNAV&gt;</span>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value.toUpperCase())}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              run(value);
              setValue("");
            }
          }}
          placeholder="ENTER FUNCTION…"
          spellCheck={false}
          autoComplete="off"
          aria-label="Terminal command input"
          className="flex-1 min-w-0 bg-transparent text-primary placeholder:text-muted-foreground/50 text-sm outline-none uppercase tracking-wider caret-primary"
        />
        <span className="hidden sm:block text-muted-foreground text-[10px] tracking-wider truncate max-w-[45%] text-right">
          {feedback}
        </span>
        <kbd className="hidden md:block border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground shrink-0">
          /
        </kbd>
      </div>
    </div>
  );
};

export default CommandLine;
