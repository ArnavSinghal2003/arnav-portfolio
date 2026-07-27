import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Panel from "@/components/terminal/Panel";

interface Filing {
  form: string;
  title: string;
  issuer: string;
  filed: string;
  status: string;
  statusKind: "active" | "permanent";
  credentialId?: string;
  description: string;
  skills: string[];
  link: string;
}

const FILINGS: Filing[] = [
  {
    form: "MCK-FWD",
    title: "McKinsey Forward Program",
    issuer: "MCKINSEY.ORG",
    filed: "MAR 2026",
    status: "ON RECORD",
    statusKind: "permanent",
    description:
      "McKinsey.org's Forward Program — a professional development curriculum built on the core skills McKinsey consultants use in the field, covering structured problem solving, adaptability and resilience, digital fluency, and effective communication. Completed between the Cognizant and S&P Global engagements.",
    skills: ["Structured Problem Solving", "Adaptability", "Communication", "Digital Fluency", "Leadership"],
    link: "https://drive.google.com/drive/folders/1_pXvX4DPS4YMKq5FhN0kNBg2lmEV6LJM?usp=sharing",
  },
  {
    form: "AWS-CCP",
    title: "AWS Certified Cloud Practitioner",
    issuer: "AMAZON WEB SERVICES",
    filed: "DEC 2023",
    status: "ACTIVE — EXPIRES DEC 2026",
    statusKind: "active",
    credentialId: "1e009a82e5324199b95bf7669c2b3e33",
    description:
      "Demonstrates foundational understanding of AWS Cloud concepts, including core services, cloud architecture, security best practices, and AWS pricing and billing models. Validates the ability to identify cloud use cases and support cloud-based solutions.",
    skills: ["AWS", "Cloud Architecture", "Infrastructure as Code", "Security"],
    link: "https://drive.google.com/drive/folders/1_pXvX4DPS4YMKq5FhN0kNBg2lmEV6LJM?usp=sharing",
  },
  {
    form: "AZ-104",
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "MICROSOFT",
    filed: "NOV 2023",
    status: "ACTIVE",
    statusKind: "active",
    credentialId: "644405227E54A3E3",
    description:
      "Validates expertise in managing and administering Microsoft Azure environments, including virtual machines, networking, storage, identity, security, and monitoring. Demonstrates the ability to implement, manage, and optimize cloud resources to support business requirements.",
    skills: ["Microsoft Azure", "Cloud Administration", "Virtual Machines", "Networking", "Security"],
    link: "https://drive.google.com/drive/folders/1_pXvX4DPS4YMKq5FhN0kNBg2lmEV6LJM?usp=sharing",
  },
  {
    form: "BCG-GAI",
    title: "BCG GenAI Job Simulation",
    issuer: "FORAGE",
    filed: "JUN 2025",
    status: "ON RECORD",
    statusKind: "permanent",
    description:
      "Hands-on Generative AI job simulation focused on applying AI concepts to real-world business problems, including data extraction, analysis, and building an AI-powered financial chatbot.",
    skills: ["Generative AI", "Data Extraction & Analysis", "AI Chatbot Development", "Prompt Engineering"],
    link: "https://drive.google.com/drive/folders/1_pXvX4DPS4YMKq5FhN0kNBg2lmEV6LJM?usp=sharing",
  },
  {
    form: "DTT-TEC",
    title: "Deloitte Technology Job Simulation",
    issuer: "FORAGE",
    filed: "JUN 2025",
    status: "ON RECORD",
    statusKind: "permanent",
    description:
      "Hands-on technology job simulation focused on applying core coding and development skills to solve practical, real-world technology challenges in a business context.",
    skills: ["Software Development", "Problem Solving", "Logical Thinking"],
    link: "https://drive.google.com/drive/folders/1_pXvX4DPS4YMKq5FhN0kNBg2lmEV6LJM?usp=sharing",
  },
  {
    form: "DTT-DAT",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "FORAGE",
    filed: "JUN 2025",
    status: "ON RECORD",
    statusKind: "permanent",
    description:
      "Practical data analytics job simulation focused on applying analytical techniques to real-world business scenarios, including data analysis and forensic technology to derive insights and support decision-making.",
    skills: ["Data Analysis", "Tableau", "Data Interpretation", "Analytical Thinking", "Business Insights", "Power BI"],
    link: "https://drive.google.com/drive/folders/1_pXvX4DPS4YMKq5FhN0kNBg2lmEV6LJM?usp=sharing",
  },
];

const Certifications = () => {
  const [openForm, setOpenForm] = useState<string | null>(null);

  return (
    <Panel id="certifications" code="FIL" title="Regulatory Filings — Credentials" note="6 FILINGS · CLICK ROW FOR DETAIL">
      <div className="divide-y divide-border/50 border border-border/60">
        {FILINGS.map((f) => {
          const open = openForm === f.form;
          return (
            <div key={f.form}>
              <button
                onClick={() => setOpenForm(open ? null : f.form)}
                className={`w-full text-left px-4 py-3 flex flex-wrap items-center gap-x-4 gap-y-1 transition-colors ${
                  open ? "bg-primary/5" : "hover:bg-secondary/50"
                }`}
              >
                <span className={`font-extrabold text-xs tracking-widest w-20 shrink-0 ${open ? "text-primary text-glow-amber" : "text-accent"}`}>
                  {f.form}
                </span>
                <span className="text-foreground text-xs font-semibold flex-1 min-w-[12rem]">{f.title}</span>
                <span className="text-muted-foreground text-[10px] tracking-wider hidden md:inline">{f.issuer}</span>
                <span className="text-muted-foreground text-[10px] tabular-nums">FILED {f.filed}</span>
                <span className={`text-[9px] tracking-widest px-1.5 py-0.5 border ${
                  f.statusKind === "active" ? "border-up/50 text-up" : "border-border text-muted-foreground"
                }`}>
                  {f.status}
                </span>
                <span className="text-muted-foreground text-xs w-4 text-right">{open ? "−" : "+"}</span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden bg-background/50"
                  >
                    <div className="px-4 py-4 border-t border-border/40">
                      {f.credentialId && (
                        <p className="text-[10px] text-muted-foreground tracking-wider mb-2">
                          CREDENTIAL ID: <span className="text-accent">{f.credentialId}</span>
                        </p>
                      )}
                      <p className="font-sans-body text-sm text-foreground/85 leading-relaxed max-w-3xl">
                        {f.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {f.skills.map((s) => (
                          <span key={s} className="border border-accent/30 text-accent text-[10px] tracking-wider px-2 py-1">
                            {s.toUpperCase()}
                          </span>
                        ))}
                      </div>
                      <a
                        href={f.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 border border-primary/50 text-primary text-[10px] tracking-widest px-3 py-2 hover:bg-primary/10 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        VIEW FILING DOCUMENT
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Panel>
  );
};

export default Certifications;
