import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { journey } from "@/data/site";
import { Button, EASE, Eyebrow, Lines, Reveal } from "./ui";

export function Journey({ index = "03" }: { index?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 60%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const scaleY = useTransform(progress, [0, 1], [0, 1]);
  const markerTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLElement>("[data-stage]");
    if (!items?.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.getAttribute("data-stage")));
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const stage = journey.stages[active];

  return (
    <section id="journey" ref={ref} className="relative bg-paper text-ink">
      <div className="container-x section-y">
        <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow index={index} label="From Idea to Scale" tone="light" />
            <Lines lines={["From zero", "to scale."]} className="display display-lg mt-10 uppercase text-ink" />
          </div>
          <Reveal className="col-span-12 self-end lg:col-span-5 lg:pl-12">
            <p className="text-xl leading-snug tracking-[-0.01em] md:text-2xl">{journey.support}</p>
            <p className="mt-5 max-w-[40ch] text-base leading-relaxed text-ink/60">{journey.note}</p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-x-4 md:gap-x-8 md:mt-28">
          {/* sticky counter */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="flex items-start gap-8">
                <div className="relative mt-3 h-[420px] w-px bg-ink/10" aria-hidden="true">
                  <motion.div style={{ scaleY }} className="absolute inset-0 origin-top bg-ink" />
                  <motion.div
                    style={{ top: markerTop }}
                    className="absolute -left-[3px] h-[7px] w-[7px] -translate-y-1/2 bg-signal"
                  />
                </div>
                <div className="min-w-0">
                  <div className="relative h-[1em] w-[1.8em] whitespace-nowrap overflow-visible font-display text-[11rem] font-semibold leading-[0.9] tracking-[-0.06em] xl:w-[1.7em] xl:text-[14rem]">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={stage.n}
                        initial={reduce ? { opacity: 0 } : { y: "60%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { y: "-60%", opacity: 0 }}
                        transition={{ duration: 0.6, ease: EASE }}
                        className="block will-change-transform"
                      >
                        {stage.n}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={stage.title}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="font-mono text-xs uppercase tracking-[0.26em] text-ink"
                      >
                        {stage.title}
                      </motion.span>
                    </AnimatePresence>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-mute">
                      / 0{journey.stages.length}
                    </span>
                  </div>
                  <ul className="mt-10 flex flex-col gap-2">
                    {journey.stages.map((s, i) => (
                      <li key={s.n} className="flex items-center gap-3">
                        <span
                          className={cn(
                            "h-px transition-all duration-500 ease-[var(--ease-expo)]",
                            i === active ? "w-10 bg-signal" : "w-4 bg-ink/20"
                          )}
                        />
                        <span
                          className={cn(
                            "font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-500",
                            i === active ? "text-ink" : "text-mute"
                          )}
                        >
                          {s.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* stages */}
          <ol ref={listRef} className="col-span-12 lg:col-span-7">
            {journey.stages.map((s, i) => (
              <li
                key={s.n}
                data-stage={i}
                className={cn(
                  "group grid grid-cols-12 gap-x-6 border-t border-ink/10 py-12 transition-colors duration-700 md:py-16",
                  i === journey.stages.length - 1 && "border-b"
                )}
              >
                <div className="col-span-3 sm:col-span-2 lg:hidden">
                  <span className="font-display text-4xl font-semibold tracking-[-0.04em] text-ink/30">{s.n}</span>
                </div>
                <div className="col-span-9 sm:col-span-10 lg:col-span-12">
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "h-2 w-2 transition-colors duration-500",
                          i === active ? "bg-signal" : "bg-ink/15"
                        )}
                        aria-hidden="true"
                      />
                      <h3 className="display display-sm uppercase">{s.title}</h3>
                    </div>
                    <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-ink/70">{s.text}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Where we come in</span>
                      <ul className="flex flex-wrap gap-2">
                        {s.we.map((w) => (
                          <li key={w} className="border border-ink/15 px-3 py-1.5 text-[13px] text-ink/80">
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-6 md:mt-24">
          <p className="max-w-[48ch] text-base text-ink/60">
            Wherever your product is today, the next stage is the one that matters.
          </p>
          <Button href="/contact" tone="light">
            Talk about your stage
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
