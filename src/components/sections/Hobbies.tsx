import { ExternalLink } from "lucide-react";
import Panel from "@/components/terminal/Panel";
import { fakeGain, sparklinePoints } from "@/lib/fake-market";

interface AfterHoursAsset {
  symbol: string;
  name: string;
  note: string;
  link?: { href: string; label: string };
}

const ASSETS: AfterHoursAsset[] = [
  {
    symbol: "SPRT",
    name: "SPORTS & FITNESS",
    note: "Football, basketball, swimming, pickleball and regular gym sessions keep the asset energized and focused.",
  },
  {
    symbol: "MUSC",
    name: "MUSIC & PRODUCTION",
    note: "Guitar, piano, and music production in off-market hours.",
    link: {
      href: "https://drive.google.com/drive/folders/1hAGntm0v1uHM9rt61Kk9yH08bIhQssPJ?usp=sharing",
      label: "LISTEN",
    },
  },
  {
    symbol: "READ",
    name: "READING",
    note: "Tech blogs, science fiction, and books on psychology and leadership.",
  },
  {
    symbol: "MRKT",
    name: "MARKET ANALYSIS",
    note: "Studying financial markets, analyzing trends, and exploring investment opportunities. (This entire terminal is a hobby disclosure.)",
  },
  {
    symbol: "GAME",
    name: "GAMING & E-SPORTS",
    note: "Strategic games and e-sports — quick thinking and teamwork under latency.",
  },
  {
    symbol: "TRVL",
    name: "TRAVELING",
    note: "New places, cultures, and cuisines whenever the order book allows.",
  },
];

const Hobbies = () => {
  return (
    <Panel id="hobbies" code="AH" title="After-Hours Trading — Interests" note="EXTENDED SESSION · LOW VOLUME, HIGH CONVICTION">
      <div className="grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
        {ASSETS.map((a) => {
          const gain = fakeGain(a.symbol, 1.2, 9.8);
          return (
            <div key={a.symbol} className="bg-card px-4 py-3.5 hover:bg-secondary/40 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-primary font-extrabold text-sm tracking-widest w-14 shrink-0">
                  {a.symbol}
                </span>
                <span className="text-foreground text-xs font-semibold tracking-wide flex-1">{a.name}</span>
                <svg viewBox="0 0 100 28" className="w-16 h-5 shrink-0" preserveAspectRatio="none" aria-hidden="true">
                  <polyline
                    points={sparklinePoints(a.symbol, 16)}
                    fill="none"
                    stroke="hsl(145 95% 45% / 0.8)"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="text-up text-xs font-bold tabular-nums shrink-0">+{gain}%</span>
              </div>
              <p className="font-sans-body text-[13px] text-foreground/70 leading-relaxed mt-2">{a.note}</p>
              {a.link && (
                <a
                  href={a.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 border border-accent/40 text-accent text-[10px] tracking-widest px-2.5 py-1.5 hover:bg-accent/10 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  {a.link.label}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </Panel>
  );
};

export default Hobbies;
