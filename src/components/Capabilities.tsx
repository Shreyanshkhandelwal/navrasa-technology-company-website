import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { capabilities, technology } from "@/data/site";
import { EASE, Eyebrow, Lines, Reveal } from "./ui";

const relatedTech: Record<string, string[]> = {
  product: ["Next.js", "React", "PostgreSQL", "Firebase"],
  engineering: ["React", "Node.js", "Flutter", "Golang", "AWS", "Google Cloud"],
  intelligence: ["Python", "LLM APIs", "RAG pipelines", "Vector search"],
  experience: ["Design systems in code", "Prototypes in React & Flutter"],
};

/* ------------------------------ CAPABILITIES ------------------------------ */
export function Capabilities({ headless = false, index = "08" }: { headless?: boolean; index?: string }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const cat = capabilities[active];

  return (
    <section id="capabilities" className="relative bg-paper text-ink">
      <div className="container-x section-y">
        {!headless && (
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
            <div className="col-span-12 lg:col-span-8">
              <Eyebrow index={index} label="Capabilities" tone="light" />
              <Lines lines={["One team.", "Four disciplines."]} className="display display-md mt-10 uppercase text-ink" />
            </div>
            <Reveal className="col-span-12 self-end lg:col-span-4">
              <p className="max-w-[38ch] text-base leading-relaxed text-ink/65 md:text-lg">
                Product, engineering, intelligence and experience — not as separate departments, but as one system that
                ships together.
              </p>
            </Reveal>
          </div>
        )}

        <div className={cn("grid grid-cols-12 gap-x-4 gap-y-10 md:gap-x-8", !headless && "mt-16 md:mt-24")}>
          {/* tabs */}
          <div className="col-span-12 lg:col-span-5" role="tablist" aria-label="Capability categories">
            <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0">
              {capabilities.map((c, i) => {
                const on = i === active;
                return (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={on}
                    aria-controls={`cap-panel-${c.id}`}
                    id={`cap-tab-${c.id}`}
                    onClick={() => setActive(i)}
                    className={cn(
                      "group flex shrink-0 items-center gap-4 border px-4 py-3 text-left transition-colors duration-500 lg:w-full lg:border-x-0 lg:border-t-0 lg:border-b lg:px-0 lg:py-7",
                      on ? "border-ink lg:border-ink/10" : "border-ink/15 lg:border-ink/10"
                    )}
                  >
                    <span
                      className={cn(
                        "hidden h-px transition-all duration-500 ease-[var(--ease-expo)] lg:block",
                        on ? "w-12 bg-signal" : "w-6 bg-ink/20"
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        "font-display text-lg font-semibold tracking-[-0.03em] transition-colors duration-500 lg:text-5xl xl:text-6xl",
                        on ? "text-ink" : "text-ink/35 group-hover:text-ink/60"
                      )}
                    >
                      {c.title}
                    </span>
                    <span
                      className={cn(
                        "ml-auto hidden font-mono text-[11px] tracking-[0.2em] lg:block",
                        on ? "text-ink" : "text-mute"
                      )}
                    >
                      0{i + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* panel */}
          <div className="col-span-12 lg:col-span-7 lg:pl-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={cat.id}
                id={`cap-panel-${cat.id}`}
                role="tabpanel"
                aria-labelledby={`cap-tab-${cat.id}`}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <p className="max-w-[40ch] text-xl leading-snug tracking-[-0.01em] md:text-2xl">{cat.text}</p>
                <ul className="mt-8 grid grid-cols-2 border-t border-l border-ink/10 sm:grid-cols-3">
                  {cat.items.map((it, i) => (
                    <motion.li
                      key={it}
                      initial={reduce ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: EASE, delay: 0.05 + i * 0.04 }}
                      className="group border-b border-r border-ink/10 p-4 transition-colors duration-500 hover:bg-ink hover:text-paper md:p-5"
                    >
                      <span className="font-mono text-[10px] tracking-[0.2em] text-mute group-hover:text-signal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="mt-6 text-[15px] font-medium tracking-[-0.01em]">{it}</div>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute">
                  <span>Typically built with</span>
                  <span className="h-px w-6 bg-ink/20" />
                  {relatedTech[cat.id].map((t) => (
                    <span key={t} className="text-ink/70">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- TECHNOLOGY ------------------------------- */
export function Technology({ index = "09" }: { index?: string }) {
  return (
    <section id="technology" className="grain relative overflow-hidden bg-ink-2 text-paper">
      <div className="container-x pt-24 md:pt-32 lg:pt-40">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow index={index} label="Technology" />
            <Lines lines={["The stack behind", "the systems."]} className="display display-md mt-10 uppercase text-paper" />
          </div>
          <Reveal className="col-span-12 self-end lg:col-span-4">
            <p className="max-w-[38ch] text-base leading-relaxed text-paper/60 md:text-lg">
              Chosen for longevity, hiring depth and how well they hold up at scale. The ecosystem evolves — the
              principles behind it don't.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 md:mt-24">
        {technology.map((row, ri) => (
          <div key={row.layer} className="grid grid-cols-12 items-center border-b border-white/10">
            <div className="col-span-12 border-b border-white/10 px-5 py-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute-2 sm:col-span-3 sm:border-b-0 sm:border-r sm:py-6 lg:col-span-2 lg:px-12 xl:px-16">
              <span className="mr-3 text-signal">0{ri + 1}</span>
              {row.layer}
            </div>
            <div className="mask-fade-x col-span-12 overflow-hidden py-4 sm:col-span-9 lg:col-span-10">
              <div
                className={cn(
                  "flex w-max gap-3 hover:[animation-play-state:paused]",
                  ri % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"
                )}
                style={{ animationDuration: `${34 + ri * 6}s` }}
              >
                {Array.from({ length: 2 }).map((_, half) => (
                  <div key={half} className="flex gap-3 pr-3" aria-hidden={half === 1}>
                    {Array.from({ length: Math.max(3, Math.ceil(12 / row.items.length)) }).flatMap((_, rep) =>
                      row.items.map((it) => (
                        <span
                          key={`${rep}-${it}`}
                          className="flex items-center gap-3 border border-white/10 px-4 py-2.5 text-[14px] font-medium tracking-[-0.01em] text-paper/80 transition-colors duration-300 hover:border-white/40 hover:text-paper"
                        >
                          <span className="h-1 w-1 bg-white/30" aria-hidden="true" />
                          {it}
                        </span>
                      ))
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container-x py-10 md:py-14">
        <p className="max-w-[60ch] font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-mute-2">
          No logo walls. Every technology here is one we build with — and every choice is made per product, not per
          trend.
        </p>
      </div>
    </section>
  );
}
