import { motion, useReducedMotion } from "framer-motion";
import { company, hero } from "@/data/site";
import { Button, EASE } from "./ui";
import { Ecosystem } from "./Ecosystem";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="grain relative isolate overflow-hidden bg-ink text-paper md:min-h-[min(82svh,760px)] lg:min-h-[min(90svh,900px)]"
    >
      <div className="container-x relative z-10 grid w-full grid-cols-12 items-center gap-x-4 gap-y-8 pt-20 pb-8 md:min-h-[min(82svh,760px)] md:gap-x-8 md:pt-20 md:pb-16 lg:min-h-[min(90svh,900px)] lg:gap-x-10 lg:pt-24 lg:pb-10">
        <div className="relative z-10 col-span-12 flex flex-col justify-center lg:col-span-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="eyebrow mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[10px] tracking-[0.17em] text-paper/60 sm:mb-6 sm:text-[10.5px] sm:tracking-[0.2em] 2xl:flex-nowrap 2xl:whitespace-nowrap"
          >
            <span className="h-1.5 w-1.5 shrink-0 bg-signal shadow-[0_0_12px_rgba(255,77,18,0.65)]" aria-hidden="true" />
            <span>{company.name}</span>
            <span className="hidden text-signal/70 2xl:inline" aria-hidden="true">/</span>
            <span className="hidden max-w-full whitespace-nowrap 2xl:inline">{hero.eyebrow}</span>
          </motion.div>

          <h1 className="display home-hero-title text-paper">
            {hero.lines.map((line, index) => (
              <span key={line} className="block">{index > 0 ? ` ${line}` : line}</span>
            ))}
          </h1>

          <p className="mt-5 max-w-[42ch] font-display text-[13px] font-semibold uppercase leading-relaxed tracking-[0.11em] text-paper/80 sm:mt-6 sm:text-sm">
            {hero.brandTagline}
          </p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
            className="mt-4 max-w-[39rem] text-[15px] leading-[1.75] text-paper/65 sm:text-base md:text-[17px]"
          >
            {hero.statement}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            className="mt-7 flex flex-wrap items-center gap-3 md:mt-8"
          >
            <Button
              href={hero.primaryCta.href}
              tone="dark"
              size="lg"
              className="bg-signal px-6 text-white shadow-[0_8px_28px_rgba(255,77,18,0.18)] transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-[#e6430e] hover:shadow-[0_12px_34px_rgba(255,77,18,0.28)] sm:px-7"
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              tone="dark"
              variant="outline"
              className="h-14 px-5 text-paper/85 transition-[border-color,color,background-color,transform] hover:-translate-y-0.5 hover:border-paper/50 hover:bg-paper/[0.04] hover:text-paper sm:px-6"
            >
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <div className="relative col-span-12 min-h-0 md:min-h-[22rem] lg:col-span-6 lg:min-h-[min(72vh,720px)]">
          <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,77,18,0.075),rgba(245,244,240,0.025)_34%,transparent_70%)] blur-2xl" aria-hidden="true" />
          <Ecosystem className="relative z-10 h-full w-full lg:min-h-[min(72vh,720px)]" />
        </div>
      </div>
    </section>
  );
}
