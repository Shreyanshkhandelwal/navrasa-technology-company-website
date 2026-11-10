import { motion, useReducedMotion } from "framer-motion";
import { company, hero } from "@/data/site";
import { Button, EASE } from "./ui";
import { Ecosystem } from "./Ecosystem";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="grain relative isolate overflow-hidden bg-ink text-paper md:min-h-[min(82svh,760px)] lg:min-h-[min(92svh,900px)]"
    >
      <div className="container-x relative z-10 grid w-full grid-cols-12 items-center gap-x-4 gap-y-8 pt-20 pb-8 md:min-h-[min(82svh,760px)] md:gap-x-8 md:pt-20 md:pb-24 lg:min-h-[min(92svh,900px)] lg:pt-20 lg:pb-36">
        <div className="relative z-10 col-span-12 flex flex-col justify-center md:col-span-7 lg:col-span-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="eyebrow mb-4 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[10px] tracking-[0.15em] text-mute-2 sm:mb-5 sm:text-[10.5px] sm:tracking-[0.17em] 2xl:flex-nowrap 2xl:whitespace-nowrap"
          >
            <span className="h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
            <span>{company.name}</span>
            <span className="hidden opacity-40 2xl:inline" aria-hidden="true">/</span>
            <span className="hidden max-w-full whitespace-nowrap 2xl:inline">{hero.eyebrow}</span>
          </motion.div>

          <h1 className="display home-hero-title text-paper">
            {hero.lines.map((line, index) => (
              <span key={line} className="block">{index > 0 ? ` ${line}` : line}</span>
            ))}
          </h1>

          <p className="mt-3 font-display text-sm font-medium uppercase tracking-[0.08em] text-paper/75 sm:text-base">
            {hero.brandTagline}
          </p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
            className="mt-4 max-w-[42rem] text-[15.5px] leading-[1.65] text-paper/75 sm:text-base md:text-[17px]"
          >
            {hero.statement}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 md:mt-7"
          >
            <Button href={hero.primaryCta.href} tone="dark" size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} tone="dark" variant="text">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <div className="relative col-span-12 -mx-5 min-h-0 sm:-mx-8 md:col-span-5 md:mx-0 md:min-h-[22rem] lg:absolute lg:inset-y-0 lg:right-0 lg:col-span-6 lg:min-h-0 lg:w-1/2">
        <Ecosystem className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
