import Panel from "@/components/terminal/Panel";
import { fakeGain } from "@/lib/fake-market";

type TileKind = "up" | "down" | "cyan" | "amber";

interface Tile {
  label: string;
  span?: 1 | 2;
  kind?: TileKind;
  sub?: string;
}

interface Sector {
  name: string;
  cols: string;
  tiles: Tile[];
}

const SECTORS: Sector[] = [
  {
    name: "LANGUAGES & SCRIPTING",
    cols: "grid-cols-4",
    tiles: [
      { label: "PYTHON", span: 2 },
      { label: "JAVASCRIPT", span: 2 },
      { label: "TYPESCRIPT", span: 2 },
      { label: "JAVA" },
      { label: "C / C++" },
      { label: "SQL" },
      { label: "HTML/CSS" },
    ],
  },
  {
    name: "AI, GENAI & AUTOMATION",
    cols: "grid-cols-4",
    tiles: [
      { label: "GENERATIVE AI", span: 2 },
      { label: "AI AGENTS", span: 2 },
      { label: "AUTOMATION", span: 2 },
      { label: "PROMPT ENG", span: 2 },
      { label: "NLP" },
      { label: "TENSORFLOW" },
      { label: "PYTORCH" },
      { label: "PY SCRIPTS" },
    ],
  },
  {
    name: "DATA VISUALIZATION",
    cols: "grid-cols-4",
    tiles: [
      { label: "D3.JS", span: 2 },
      { label: "THREE.JS", span: 2 },
      { label: "WEBGL" },
      { label: "FLOURISH" },
      { label: "TABLEAU" },
      { label: "POWER BI" },
    ],
  },
  {
    name: "DATA & ANALYTICS",
    cols: "grid-cols-4",
    tiles: [
      { label: "PANDAS" },
      { label: "NUMPY" },
      { label: "EXCEL", span: 2 },
      { label: "POSTGRESQL" },
      { label: "MONGODB" },
      { label: "MYSQL", span: 2 },
    ],
  },
  {
    name: "WEB & BACKEND",
    cols: "grid-cols-4",
    tiles: [
      { label: "REACT", span: 2 },
      { label: "ANGULAR", span: 2 },
      { label: "NODE.JS" },
      { label: "EXPRESS.JS" },
      { label: "REST APIS" },
      { label: "FLOURISH API" },
    ],
  },
  {
    name: "DEVOPS & TOOLING",
    cols: "grid-cols-4",
    tiles: [
      { label: "DOCKER" },
      { label: "JENKINS" },
      { label: "AWS" },
      { label: "AZURE" },
      { label: "GIT" },
      { label: "CI/CD" },
      { label: "LINUX" },
      { label: "FIGMA" },
    ],
  },
  {
    name: "DEFENSIVE SECTOR — SOFT SKILLS",
    cols: "grid-cols-3",
    tiles: [
      { label: "PROBLEM SOLVING", kind: "cyan", span: 2 },
      { label: "LEADERSHIP", kind: "cyan" },
      { label: "STAKEHOLDERS", kind: "cyan" },
      { label: "AGILE/SCRUM", kind: "cyan" },
      { label: "TEAMWORK", kind: "cyan" },
    ],
  },
  {
    name: "FX — SPOKEN",
    cols: "grid-cols-3",
    tiles: [
      { label: "ENGLISH", kind: "amber", sub: "FLUENT" },
      { label: "HINDI", kind: "amber", sub: "NATIVE" },
      { label: "SPANISH", kind: "amber", sub: "CLASSROOM" },
    ],
  },
  {
    name: "NON-CORE ASSETS",
    cols: "grid-cols-2",
    tiles: [
      { label: "COFFEE", kind: "up", sub: "+47.2%" },
      { label: "SLEEP", kind: "down", sub: "-12.4%" },
    ],
  },
];

const tileStyle = (tile: Tile) => {
  const gain = fakeGain(tile.label);
  switch (tile.kind ?? "up") {
    case "down":
      return { bg: `hsl(0 95% 62% / 0.28)`, border: "hsl(0 95% 62% / 0.5)", text: "text-down", value: tile.sub ?? `-${gain}%` };
    case "cyan":
      return { bg: `hsl(187 90% 55% / ${0.1 + gain / 130})`, border: "hsl(187 90% 55% / 0.35)", text: "text-accent", value: tile.sub ?? `+${gain}%` };
    case "amber":
      return { bg: `hsl(36 100% 55% / ${0.1 + gain / 140})`, border: "hsl(36 100% 55% / 0.35)", text: "text-primary", value: tile.sub ?? `+${gain}%` };
    default:
      return { bg: `hsl(145 95% 45% / ${0.1 + gain / 90})`, border: "hsl(145 95% 45% / 0.35)", text: "text-up", value: tile.sub ?? `+${gain}%` };
  }
};

const Skills = () => {
  return (
    <Panel id="skills" code="MAP" title="Skill Sector Heatmap" note="TILE SIZE = EXPOSURE · COLOR = MOMENTUM">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {SECTORS.map((sector) => (
          <div key={sector.name}>
            <p className="text-[10px] tracking-widest text-muted-foreground mb-1.5">{sector.name}</p>
            <div className={`grid ${sector.cols} gap-px bg-border/60 border border-border/60`}>
              {sector.tiles.map((tile) => {
                const s = tileStyle(tile);
                return (
                  <div
                    key={tile.label}
                    className={`${tile.span === 2 ? "col-span-2" : ""} min-h-[3.5rem] flex flex-col items-center justify-center px-1 py-2 transition-all duration-200 hover:brightness-150 cursor-default`}
                    style={{ backgroundColor: s.bg }}
                    title={`${tile.label} ${s.value}`}
                  >
                    <span className="text-foreground font-bold text-[10px] md:text-[11px] tracking-wider text-center leading-tight">
                      {tile.label}
                    </span>
                    <span className={`${s.text} text-[10px] font-bold tabular-nums mt-0.5`}>{s.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-muted-foreground tracking-wider mt-4">
        * MOMENTUM FIGURES ARE ILLUSTRATIVE. SLEEP UNDERPERFORMANCE IS, HOWEVER, ACCURATE.
      </p>
    </Panel>
  );
};

export default Skills;
