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

      <div className="container-x relative flex flex-1 flex-col pt-28 md:pt-36 lg:pt-40">
        <motion.div style={{ y, opacity }} className="grid flex-1 grid-cols-12 gap-x-4 md:gap-x-8">
          <div className="col-span-12 flex flex-col justify-center lg:col-span-7 xl:col-span-6">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="eyebrow mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-mute-2"
            >
              <span className="h-1.5 w-1.5 bg-signal" />
              <span>{company.name}</span>
              <span className="opacity-40">/</span>
              <span>{hero.eyebrow}</span>
            </motion.div>

            <Lines
              as="h1"
              lines={hero.lines}
              delay={0.2}
              className="display display-lg text-paper"
            />

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
              className="mt-8 max-w-[34rem] text-lg leading-relaxed text-paper/80 md:mt-10 md:text-xl"
            >
              {hero.statement}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
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
          className="mt-14 border-t border-white/10 py-6 md:mt-20"
        >
          <div className="flex flex-wrap items-center justify-between gap-y-4">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mute-2 sm:gap-x-4">
              {hero.strip.map((s, i) => (
                <li key={s} className="flex items-center gap-3 sm:gap-4">
                  <span className={i === 0 ? "text-paper" : ""}>{s}</span>
                  {i < hero.strip.length - 1 && (
                    <span className="block h-px w-6 bg-white/20 sm:w-10" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
            <p className="hidden max-w-sm text-sm text-paper/55 md:block">{hero.secondary}</p>
            <div className="hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mute-2 lg:flex">
              <span className="relative flex h-5 w-3 items-start justify-center border border-white/20">
                <span className="mt-1 h-1 w-px bg-paper motion-safe:animate-bounce" />
              </span>
              Scroll
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
