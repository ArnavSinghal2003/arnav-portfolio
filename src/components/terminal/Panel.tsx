import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PanelProps {
  code: string;
  title: string;
  note?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Terminal panel chrome: amber function code + title bar, hairline border,
 * dark body. Every section lives inside one, Bloomberg-style.
 */
const Panel = ({ code, title, note, children, className, id }: PanelProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className={cn("border border-border bg-card panel-glow transition-shadow duration-300 scroll-mt-32", className)}
    >
      <header className="flex items-center gap-3 border-b border-border bg-secondary/60 px-4 py-2 select-none">
        <span className="text-primary font-bold text-sm tracking-wider text-glow-amber whitespace-nowrap">
          {code} <span className="text-primary/60">&lt;GO&gt;</span>
        </span>
        <span className="text-foreground text-sm font-semibold tracking-widest uppercase truncate">
          {title}
        </span>
        <span className="flex-1 border-t border-dashed border-border/80 mx-2 hidden sm:block" />
        {note && (
          <span className="text-muted-foreground text-[10px] tracking-wider hidden md:block whitespace-nowrap">
            {note}
          </span>
        )}
      </header>
      <div className="p-4 md:p-6">{children}</div>
    </motion.section>
  );
};

export default Panel;
