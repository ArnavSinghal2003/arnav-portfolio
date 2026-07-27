const HEADLINES = [
  "ARNAV JOINS S&P GLOBAL AS DATA VISUALIZATION DEVELOPER — EDITORIAL / CONTENT DESIGN",
  "2D & 3D FLOURISH TEMPLATES SHIPPED USING D3.JS, THREE.JS AND WEBGL",
  "AI-POWERED AGENTS AUTOMATE EDITORIAL WORKFLOWS AT S&P GLOBAL",
  "MCKINSEY FORWARD PROGRAM COMPLETED",
  "PATENT GRANTED: MEDIBRO AI PRESCRIPTION ANALYSIS SYSTEM",
  "AWS CERTIFIES ARNAV — CLOUD PRACTITIONER",
  "MICROSOFT AZURE ADMINISTRATOR ASSOCIATE SECURED",
  "10 MONTHS AT COGNIZANT — INSURIX INSURANCE PLATFORM DELIVERED",
  "SIGH.CO MOVES 500+ UNITS ACROSS INDIA",
  "DATA WORKFLOWS OPTIMIZED +30% AT POLICYBAZAAR",
  "1000+ STUDENTS TRAINED VIA IOT COMMUNITY",
  "ALGO TRADING SYSTEM BACKTESTS LIVE ON STREAMLIT",
  "ANALYST CONSENSUS: STRONG HIRE",
];

/** Endless breaking-news tape under the header. */
const NewsTicker = () => {
  const items = HEADLINES.map((h, i) => (
    <span key={i} className="inline-flex items-center gap-3 pr-10 whitespace-nowrap">
      <span className="text-up">▲</span>
      <span className="text-foreground/90 text-xs tracking-wide">{h}</span>
    </span>
  ));

  return (
    <div className="border-b border-border bg-secondary/40 overflow-hidden" aria-hidden="true">
      <div className="flex items-stretch">
        <span className="bg-down text-white text-[10px] font-bold tracking-widest px-3 py-2 flex items-center shrink-0 z-10">
          LIVE
        </span>
        <div className="relative flex-1 overflow-hidden py-2">
          <div
            className="flex w-max"
            style={{ animation: "marquee-left 55s linear infinite" }}
          >
            <div className="flex">{items}</div>
            <div className="flex">{items}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
