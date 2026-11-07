import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { company, hero } from "@/data/site";
import { Button, EASE, Lines } from "./ui";
import { Ecosystem } from "./Ecosystem";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-paper"
    >
      {/* atmosphere */}
      <div className="dots-dark absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_75%_45%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(40%_40%_at_10%_90%,rgba(255,77,18,0.06),transparent_60%)]"
        aria-hidden="true"
      />

      {/* visual — right half on desktop */}
      <motion.div
        style={{ y: visualY }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[56%] lg:block"
        aria-hidden="true"
      >
        <Ecosystem className="pointer-events-auto absolute inset-0 h-full w-full" />
      </motion.div>

      <div className="container-x relative flex flex-1 flex-col pt-20 pb-4 md:pt-24 md:pb-5 lg:min-h-0 lg:pt-[6.5rem] lg:pb-4">
        <motion.div style={{ y, opacity }} className="grid min-h-0 flex-1 grid-cols-12 gap-x-4 md:gap-x-8">
          <div className="col-span-12 flex flex-col justify-center lg:col-span-7 xl:col-span-6">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="eyebrow mb-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-[10px] tracking-[0.16em] text-mute-2 md:text-[10.5px] md:tracking-[0.18em] xl:flex-nowrap xl:whitespace-nowrap lg:mb-6"
            >
              <span className="h-1.5 w-1.5 bg-signal" />
              <span>{company.name}</span>
              <span className="opacity-40">/</span>
              <span className="max-w-full whitespace-normal sm:whitespace-nowrap">{hero.eyebrow}</span>
            </motion.div>

            <Lines
              as="h1"
              lines={hero.lines}
              delay={0.2}
              className="display page-hero-title text-paper"
            />

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
              className="mt-5 max-w-[34rem] text-base leading-relaxed text-paper/80 md:mt-6 md:text-lg lg:text-xl"
            >
              {hero.statement}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4 md:mt-7 lg:mt-8"
            >
              <Button href={hero.primaryCta.href} tone="dark" size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} tone="dark" variant="text">
                {hero.secondaryCta.label}
              </Button>
            </motion.div>
          </div>

          {/* visual — mobile / tablet */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.5 }}
            className="col-span-12 mt-12 lg:hidden"
          >
            <Ecosystem className="mx-auto aspect-square w-full max-w-[520px]" />
          </motion.div>
        </motion.div>

        {/* lifecycle strip */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 1.1 }}
          className="mt-5 shrink-0 border-t border-white/10 py-4 md:mt-6 lg:mt-5"
        >
          <div className="grid w-full grid-cols-1 items-center justify-items-center gap-y-4 text-center md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-x-8">
            <ol className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mute-2 sm:gap-x-4">
              {hero.strip.map((s, i) => (
                <li key={s} className="flex items-center gap-3 sm:gap-4">
                  <span className={i === 0 ? "text-paper" : ""}>{s}</span>
                  {i < hero.strip.length - 1 && (
                    <span className="block h-px w-5 bg-white/20 sm:w-8" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
            <p className="max-w-sm text-sm leading-relaxed text-paper/55">{hero.secondary}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
