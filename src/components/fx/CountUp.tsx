import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  target: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

/** Animates from 0 to `target` when scrolled into view. */
const CountUp = ({ target, decimals = 0, suffix = "", className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  // Vertical-only margin: a horizontal margin would exclude right-aligned
  // numbers on narrow screens and the counter would never fire.
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  const value = useMotionValue(0);
  const spring = useSpring(value, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (!inView) return;
    value.set(target);
    // Safety net: snap to the final value even if the spring is throttled
    const snap = setTimeout(() => {
      if (ref.current) ref.current.textContent = target.toFixed(decimals) + suffix;
    }, 2200);
    return () => clearTimeout(snap);
  }, [inView, target, value, decimals, suffix]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix;
    });
    return unsub;
  }, [spring, decimals, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
};

export default CountUp;
