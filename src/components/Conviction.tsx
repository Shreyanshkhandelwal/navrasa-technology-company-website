import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { future, why } from "@/data/site";
import { Button, Eyebrow, Lines, Reveal } from "./ui";

export function Why({ index = "11" }: { index?: string }) {
  return (
    <section id="why" className="relative bg-paper-2 text-ink">
      <div className="lines-light absolute inset-0 opacity-60 [mask-image:linear-gradient(180deg,transparent,#000_40%,#000_60%,transparent)]" aria-hidden="true" />
      <div className="container-x section-y relative">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8">
          <div className="col-span-12 lg:col-span-6">
            <Eyebrow index={index} label="Why NavRasa" tone="light" />
            <Lines lines={["Why", "NavRasa?"]} className="display display-lg mt-10 uppercase text-ink" />
          </div>
          <Reveal className="col-span-12 self-end lg:col-span-5 lg:col-start-8">
            <p className="text-xl leading-snug tracking-[-0.01em] md:text-2xl">
              Not a vendor that executes tickets. A team that takes responsibility for the product working — technically
              and commercially.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid grid-cols-1 border-t border-l border-ink/12 sm:grid-cols-2 lg:grid-cols-3 md:mt-24">
          {why.principles.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={(i % 3) * 0.06}
              className="group relative flex min-h-[260px] flex-col justify-between border-b border-r border-ink/12 p-7 transition-colors duration-500 hover:bg-ink hover:text-paper md:min-h-[320px] md:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl font-semibold tracking-[-0.05em] text-ink/15 transition-colors duration-500 group-hover:text-paper/20 md:text-6xl">
                  0{i + 1}
                </span>
                <span className="mt-2 h-1.5 w-1.5 bg-ink/20 transition-colors duration-500 group-hover:bg-signal" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-[-0.02em] md:text-3xl">{p.title}</h3>
                <p className="mt-3 max-w-[32ch] text-[15px] leading-relaxed text-ink/60 transition-colors duration-500 group-hover:text-paper/70">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Future({ index = "12" }: { index?: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const archY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 160, reduce ? 0 : -160]);
  const glow = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.4, 1, 0.5]);

  return (
    <section ref={ref} id="future" className="grain relative isolate overflow-hidden bg-black text-paper">
      {/* horizon */}
      <motion.div
        style={{ opacity: glow }}
        className="absolute inset-x-0 bottom-0 -z-10 h-[70%] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(255,77,18,0.22),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_45%_at_50%_60%,rgba(255,255,255,0.05),transparent_70%)]" aria-hidden="true" />

      {/* the rising arch */}
      <motion.div style={{ y: archY }} className="pointer-events-none absolute inset-x-0 bottom-[-12%] -z-10 flex justify-center" aria-hidden="true">
        <div className="relative w-[78vw] max-w-[820px]">
          <svg viewBox="0 0 838 1019" className="w-full" fill="none">
            <defs>
              <linearGradient id="archStroke" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#f5f4f0" stopOpacity="0.6" />
                <stop offset="1" stopColor="#f5f4f0" stopOpacity="0.04" />
              </linearGradient>
            </defs>
            <path d="M0 896V240L419 0l419 240v656l-212 123V361L419 240 214 361v658Z" stroke="url(#archStroke)" strokeWidth="1.5" />
            <path d="M0 896V240L419 0l419 240v656l-212 123V361L419 240 214 361v658Z" fill="#f5f4f0" fillOpacity="0.025" />
          </svg>
          <div className="absolute inset-0 overflow-hidden [mask-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 838 1019%22><path d=%22M0 896V240L419 0l419 240v656l-212 123V361L419 240 214 361v658Z%22 fill=%22black%22/></svg>')] [mask-size:100%_100%]">
            <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent motion-safe:animate-sweep" />
          </div>
        </div>
      </motion.div>

      <div className="container-x relative flex min-h-[100svh] flex-col items-center justify-center py-32 text-center">
        <Reveal>
          <Eyebrow index={index} label="The Future" className="justify-center" />
        </Reveal>
        <Lines
          lines={["We're just", "getting started."]}
          className="display display-lg mt-10 uppercase text-paper"
          lineClassName="text-center"
        />
        <Reveal delay={0.2} className="mt-12 max-w-2xl">
          <p className="text-xl leading-snug tracking-[-0.01em] text-paper/85 md:text-2xl">{future.lines[0]}</p>
          <p className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em] text-paper md:text-3xl">{future.lines[1]}</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-12">
          <Button href={future.cta.href} tone="dark" size="lg">
            {future.cta.label}
          </Button>
        </Reveal>
      </div>

      <div className="container-x relative flex items-center justify-between border-t border-white/10 py-6 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute-2">
        <span>One product at a time</span>
        <span className="hidden sm:block">Jaipur → the world</span>
        <span>Built for the long run</span>
      </div>
    </section>
  );
}
