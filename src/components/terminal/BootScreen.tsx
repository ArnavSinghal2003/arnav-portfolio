import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BOOT_LINES = [
  "ARNAV TERMINAL v3.0.1 (build 2026.07)",
  "> establishing secure session ........ OK",
  "> authenticating guest ............... OK",
  "> subscribing to market data ......... OK",
  "> loading asset: ARNAV — ARNAV SINGHAL",
  "> STATUS: LIVE",
];

/**
 * Fake exchange-connection splash. Types out once per browser session,
 * auto-dismisses, and any click/keypress skips it.
 */
const BootScreen = ({ onDone }: { onDone?: () => void }) => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return sessionStorage.getItem("arnav-booted") !== "1";
  });
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    if (!visible) {
      onDone?.();
      return;
    }
    const dismiss = () => {
      sessionStorage.setItem("arnav-booted", "1");
      setVisible(false);
      onDone?.();
    };

    const lineTimer = setInterval(() => {
      setLineCount((c) => {
        if (c >= BOOT_LINES.length) {
          clearInterval(lineTimer);
          return c;
        }
        return c + 1;
      });
    }, 260);

    const autoTimer = setTimeout(dismiss, 2400);
    window.addEventListener("keydown", dismiss);
    window.addEventListener("pointerdown", dismiss);

    return () => {
      clearInterval(lineTimer);
      clearTimeout(autoTimer);
      window.removeEventListener("keydown", dismiss);
      window.removeEventListener("pointerdown", dismiss);
    };
  }, [visible, onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] bg-background flex items-center justify-center px-6"
          style={{ animation: "boot-flicker 2s linear infinite" }}
        >
          <div className="w-full max-w-xl">
            <pre className="text-primary text-xs sm:text-sm leading-7 whitespace-pre-wrap">
              {BOOT_LINES.slice(0, lineCount).join("\n")}
              <span className="blink">█</span>
            </pre>
            <p className="mt-6 text-muted-foreground text-[10px] tracking-[0.3em] uppercase">
              press any key to continue
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootScreen;
