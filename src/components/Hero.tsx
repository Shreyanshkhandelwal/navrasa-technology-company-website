import { motion, useReducedMotion } from "framer-motion";
import { company, hero } from "@/data/site";
import { Button, EASE, Lines } from "./ui";
import { Ecosystem } from "./Ecosystem";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-paper"
    >
      {/* visual — right half on desktop */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block" aria-hidden="true">
        <Ecosystem className="pointer-events-auto absolute inset-0 h-full w-full" />
      </div>

      <div className="container-x relative flex flex-1 flex-col pt-20 pb-4 md:pt-24 md:pb-5 lg:min-h-0 lg:pt-[6.5rem] lg:pb-4">
        <div className="grid min-h-0 flex-1 grid-cols-12 gap-x-4 md:gap-x-8">
          <div className="col-span-12 flex flex-col justify-center lg:col-span-6">
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
              reveal={false}
              className="display page-hero-title text-paper"
            />

            <p className="mt-3 font-display text-sm font-medium uppercase tracking-[0.08em] text-paper/75 sm:text-base">
              {hero.brandTagline}
            </p>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
              className="mt-5 max-w-[34rem] text-base leading-relaxed text-paper/80 md:mt-6 md:text-[17px] lg:text-lg"
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
        </div>
      </div>
    </section>
  );
}
