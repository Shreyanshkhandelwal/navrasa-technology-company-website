import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Variants,
} from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type MouseEvent,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { useEnquiry } from "./EnquiryContext";
import { trackEvent } from "@/utils/analytics";

export const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------------------------------- Logo ---------------------------------- */
export function Mark({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 838 1019" className={className} style={style} aria-hidden="true" fill="currentColor">
      <path d="M0 896V240L419 0l419 240v656l-212 123V361L419 240 214 361v658Z" />
    </svg>
  );
}

export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-3", tone === "light" ? "text-paper" : "text-ink", className)}
      aria-label="NavRasa — home"
    >
      <Mark className="h-6 w-auto transition-transform duration-500 ease-[var(--ease-expo)] group-hover:-translate-y-0.5" />
      <span className="font-display text-[15px] font-semibold uppercase tracking-[0.28em]">Navrasa</span>
    </Link>
  );
}

/* --------------------------------- Hooks ---------------------------------- */
export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

/** Sets --mx/--my CSS vars for spotlight hover effects. */
export function useSpotlight<T extends HTMLElement>() {
  return useCallback((e: MouseEvent<T>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);
}

/* -------------------------------- Magnetic -------------------------------- */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------- Button --------------------------------- */
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "text";
  tone?: "light" | "dark"; // tone of the background the button sits on
  icon?: "arrow" | "external" | "none";
  className?: string;
  size?: "md" | "lg";
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "solid",
  tone = "dark",
  icon = "arrow",
  className,
  size = "md",
  onClick,
}: ButtonProps) {
  const { openEnquiry } = useEnquiry();
  const onDark = tone === "dark";
  const base =
    "group relative inline-flex items-center justify-center gap-3 font-medium tracking-[-0.01em] transition-colors duration-300 ease-out select-none";
  const sizes = size === "lg" ? "h-14 px-7 text-[15px]" : "h-12 px-6 text-[14px]";
  const variants = {
    solid: onDark ? "bg-paper text-ink hover:bg-white" : "bg-ink text-paper hover:bg-black",
    outline: onDark
      ? "border border-white/20 text-paper hover:border-white/50"
      : "border border-ink/20 text-ink hover:border-ink/60",
    text: onDark ? "px-0 h-auto text-paper" : "px-0 h-auto text-ink",
  }[variant];

  const Icon = icon === "external" ? ArrowUpRight : ArrowRight;
  const internal = href.startsWith("/") && !href.startsWith("//");
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const classes = cn(base, variant !== "text" && sizes, variants, className);

  const inner = (
    <>
      <span className="relative">
        {children}
        {variant === "text" && (
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-current opacity-40 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:scale-x-0" />
        )}
      </span>
      {icon !== "none" && (
        <span className="relative h-4 w-4 overflow-hidden">
          <Icon
            className="absolute inset-0 h-4 w-4 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-5"
            strokeWidth={1.75}
          />
          <Icon
            className="absolute inset-0 h-4 w-4 -translate-x-5 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-0"
            strokeWidth={1.75}
          />
        </span>
      )}
    </>
  );

  return (
    <Magnetic strength={variant === "text" ? 0.15 : 0.3}>
      {href === "/contact" ? (
        <button type="button" onClick={() => { trackEvent("primary_cta_click", { cta: "enquiry" }); onClick?.(); openEnquiry(); }} className={classes}>
          {inner}
        </button>
      ) : internal ? (
        <Link to={href} onClick={onClick} className={classes}>
          {inner}
        </Link>
      ) : (
        <a
          href={href}
          onClick={onClick}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {inner}
        </a>
      )}
    </Magnetic>
  );
}

/* --------------------------------- Reveal --------------------------------- */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  as = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "p" | "span" | "li" | "section" | "h2" | "h3";
  id?: string;
}) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  return (
    <M
      id={id}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      className={className}
    >
      {children}
    </M>
  );
}

/** Masked line-by-line headline reveal. */
export function Lines({
  lines,
  className,
  lineClassName,
  as: Tag = "h2",
  delay = 0,
  stagger = 0.09,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const line: Variants = {
    hidden: reduce ? { y: 0 } : { y: "110%" },
    show: { y: 0, transition: { duration: 1, ease: EASE } },
  };
  return (
    <Tag className={className}>
      <motion.span
        className="block"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
      >
        {lines.map((l, i) => (
          <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
            <motion.span variants={line} className={cn("block will-change-transform", lineClassName)}>
              {l}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* --------------------------- Section scaffolding -------------------------- */
export function Eyebrow({
  index,
  label,
  tone = "dark",
  className,
}: {
  index?: string;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("eyebrow flex items-center gap-3", tone === "dark" ? "text-mute-2" : "text-mute", className)}>
      <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />
      {index && <span>{index}</span>}
      {index && <span className="opacity-40">/</span>}
      <span>{label}</span>
    </div>
  );
}

export function Rule({ tone = "dark", className }: { tone?: "light" | "dark"; className?: string }) {
  return <div className={cn("h-px w-full", tone === "dark" ? "bg-white/10" : "bg-ink/10", className)} />;
}
