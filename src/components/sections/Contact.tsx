import { useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Panel from "@/components/terminal/Panel";
import { useToast } from "@/hooks/use-toast";

const VENUES = [
  {
    icon: Mail,
    code: "DIRECT",
    label: "arnavsinghal03@gmail.com",
    href: "mailto:arnavsinghal03@gmail.com",
  },
  {
    icon: Github,
    code: "GITHUB",
    label: "github.com/ArnavSinghal2003",
    href: "https://github.com/ArnavSinghal2003",
  },
  {
    icon: Linkedin,
    code: "LNKD",
    label: "linkedin.com/in/arnav-singhal",
    href: "https://www.linkedin.com/in/arnav-singhal-b25697268/",
  },
  {
    icon: MapPin,
    code: "VENUE",
    label: "NOIDA, INDIA (IST)",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "ORDER ROUTED ✓",
      description: "BUY ARNAV order received. Execution confirmation within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const fieldClass =
    "w-full bg-background border border-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-up/70 focus:ring-1 focus:ring-up/40 transition-colors";

  return (
    <Panel id="contact" code="MSG" title="Order Ticket — Get In Touch" note="MARKET ORDER · TIF: GTC">
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Order form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 border border-border/70 bg-secondary/20">
          <div className="flex items-center border-b border-border/60">
            <span className="bg-up/20 text-up border-r border-up/40 font-extrabold text-sm tracking-widest px-5 py-3">
              BUY
            </span>
            <span className="text-foreground font-bold text-sm tracking-widest px-4">ARNAV</span>
            <span className="text-muted-foreground text-[10px] tracking-wider ml-auto pr-4 hidden sm:block">
              QTY: 1 FULL-TIME ENGINEER
            </span>
          </div>

          <div className="p-4 md:p-5 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[10px] tracking-widest text-muted-foreground mb-1.5">
                  COUNTERPARTY NAME
                </label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="YOUR NAME"
                  required
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] tracking-widest text-muted-foreground mb-1.5">
                  SETTLEMENT EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="YOU@FIRM.COM"
                  required
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-[10px] tracking-widest text-muted-foreground mb-1.5">
                ORDER NOTES
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="ROLE, PROJECT, OR JUST SAY HI…"
                rows={5}
                required
                className={`${fieldClass} resize-none font-sans-body`}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="bg-up/15 border border-up/60 text-up font-extrabold text-sm tracking-widest px-8 py-3 hover:bg-up/25 transition-colors"
              >
                SUBMIT ORDER
              </button>
              <p className="text-[10px] text-muted-foreground tracking-wider">
                NO COMMISSION · NO SLIPPAGE · RESPONSE ≤ 24H
              </p>
            </div>
          </div>
        </form>

        {/* Execution venues */}
        <div className="lg:col-span-2">
          <h3 className="text-primary text-xs tracking-widest mb-3">EXECUTION VENUES</h3>
          <div className="divide-y divide-border/50 border border-border/60">
            {VENUES.map((v) => {
              const inner = (
                <div className="flex items-center gap-3 px-4 py-3.5">
                  <v.icon className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-muted-foreground text-[10px] tracking-widest w-14 shrink-0">
                    {v.code}
                  </span>
                  <span className="text-foreground text-xs tracking-wide truncate">{v.label}</span>
                </div>
              );
              return v.href ? (
                <a
                  key={v.code}
                  href={v.href}
                  target={v.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block hover:bg-secondary/50 transition-colors"
                >
                  {inner}
                </a>
              ) : (
                <div key={v.code}>{inner}</div>
              );
            })}
          </div>

          <div className="mt-4 border border-border/60 bg-secondary/40 p-3">
            <p className="text-[10px] text-muted-foreground tracking-wider leading-relaxed">
              PRO TIP: TYPE <span className="text-primary">BUY</span> IN THE COMMAND LINE BELOW.
              SHORT ORDERS WILL BE REJECTED BY THE EXCHANGE.
            </p>
          </div>
        </div>
      </div>
    </Panel>
  );
};

export default Contact;
