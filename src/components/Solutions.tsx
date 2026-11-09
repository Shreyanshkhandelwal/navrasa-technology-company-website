import { motion, useReducedMotion } from "framer-motion";
import { businesses, startups } from "@/data/site";
import { Button, EASE, Eyebrow, Lines, Reveal } from "./ui";

function Pipeline() {
  const reduce = useReducedMotion();
  const steps = startups.pipeline;
  return (
    <div className="relative">
      {/* desktop: horizontal */}
      <ol className="hidden grid-cols-7 md:grid">
        {steps.map((s, i) => (
          <li key={s} className="relative pt-8">
            <div className="absolute left-0 right-0 top-0 h-px bg-white/10" aria-hidden="true">
              <motion.div
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
                className="h-full origin-left bg-paper"
              />
            </div>
            <motion.span
              initial={reduce ? false : { scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.4, ease: EASE, delay: i * 0.12 }}
              className={`absolute left-0 top-0 h-2 w-2 -translate-y-1/2 ${i === steps.length - 1 ? "bg-signal" : "bg-paper"}`}
              aria-hidden="true"
            />
            <span className="block font-mono text-[10px] tracking-[0.2em] text-mute-2">0{i + 1}</span>
            <span className="mt-2 block pr-3 text-[15px] font-medium tracking-[-0.01em] text-paper">{s}</span>
          </li>
        ))}
      </ol>
      {/* mobile: vertical */}
      <ol className="relative border-l border-white/10 pl-6 md:hidden">
        {steps.map((s, i) => (
          <li key={s} className="relative pb-6 last:pb-0">
            <span className={`absolute -left-[27px] top-1.5 h-2 w-2 ${i === steps.length - 1 ? "bg-signal" : "bg-paper"}`} />
            <span className="font-mono text-[10px] tracking-[0.2em] text-mute-2">0{i + 1}</span>
            <span className="ml-3 text-[15px] font-medium text-paper">{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Solutions({ indexes = ["06", "07"] }: { indexes?: [string, string] }) {
  return (
    <div id="solutions">
      {/* ------------------------------ STARTUPS ------------------------------ */}
      <section id="startups" className="grain relative bg-ink text-paper">
        <div className="absolute inset-0 bg-[radial-gradient(45%_40%_at_85%_20%,rgba(255,255,255,0.05),transparent_60%)]" aria-hidden="true" />
        <div className="container-x section-y relative">
          <Eyebrow index={indexes[0]} label="For Founders" />
          <div className="mt-10 grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-10">
            <div className="col-span-12 lg:col-span-7">
              <Lines lines={["Have an", "idea?"]} className="display display-lg uppercase text-paper" />
            </div>
            <div className="col-span-12 flex flex-col justify-end lg:col-span-5">
              <Reveal>
                <p className="font-display text-3xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-4xl xl:text-5xl">
                  {startups.statement}
                </p>
                <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-paper/60 md:text-lg">{startups.text}</p>
              </Reveal>
            </div>
          </div>

          <Reveal className="mt-14 md:mt-18">
            <div className="mb-8 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-mute-2">
              <span>The path</span>
              <span>Idea → Scale</span>
            </div>
            <Pipeline />
          </Reveal>

          <div className="mt-14 grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-10 md:mt-18">
            <Reveal className="col-span-12 lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute-2">MVP, properly defined</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                {startups.positioning.map((p, i) => (
                  <div key={p} className="flex items-center gap-5">
                    <span className="font-display text-2xl font-semibold tracking-[-0.03em] text-paper md:text-4xl">{p}</span>
                    {i < startups.positioning.length - 1 && (
                      <span className="font-display text-2xl text-signal md:text-4xl" aria-hidden="true">+</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-paper/55">
                An MVP is not a cheaper version of your product. It is the fastest credible way to learn whether the
                product should exist — built on foundations you won't have to throw away.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="col-span-12 lg:col-span-5">
              <ul className="border-t border-white/10">
                {startups.facts.map((f) => (
                  <li key={f.k} className="grid grid-cols-12 gap-4 border-b border-white/10 py-5">
                    <span className="col-span-5 font-mono text-[11px] uppercase tracking-[0.2em] text-mute-2">{f.k}</span>
                    <span className="col-span-7 text-[15px] text-paper/80">{f.v}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={startups.cta.href} tone="dark" size="lg">
                  {startups.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ----------------------------- BUSINESSES ----------------------------- */}
      <section id="businesses" className="relative bg-paper-2 text-ink">
        <div className="container-x section-y">
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8">
            <div className="col-span-12 lg:col-span-8">
              <Eyebrow index={indexes[1]} label="For Businesses" tone="light" />
              <Lines
                lines={["Technology for", "businesses ready", "to move."]}
                className="display display-md mt-10 uppercase text-ink"
              />
            </div>
            <Reveal className="col-span-12 self-end lg:col-span-4">
              <p className="max-w-[38ch] text-base leading-relaxed text-ink/65 md:text-lg">{businesses.text}</p>
            </Reveal>
          </div>

          <ol className="mt-12 grid grid-cols-1 border-t border-ink/10 md:mt-16 md:grid-cols-2 md:gap-x-16">
            {businesses.items.map((it, i) => (
              <Reveal as="li" key={it.title} delay={(i % 2) * 0.05} className="group flex gap-5 border-b border-ink/10 py-7 md:py-8">
                <span className="w-7 shrink-0 pt-2 font-mono text-[11px] tracking-[0.2em] text-mute">0{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <h3 className="flex items-center gap-4 font-display text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                    <span className="transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-2">{it.title}</span>
                    <span className="h-1.5 w-1.5 shrink-0 bg-ink/15 transition-colors duration-500 group-hover:bg-signal" />
                  </h3>
                  <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-ink/60">{it.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal as="li" className="flex flex-col justify-center border-b border-ink/10 py-8 md:border-b-0">
              <p className="max-w-[40ch] text-[15px] text-ink/60">
                Most engagements start with one workflow. The right first project builds trust and creates the foundation for
                everything after it.
              </p>
              <div className="mt-6">
                <Button href={businesses.cta.href} tone="light">
                  {businesses.cta.label}
                </Button>
              </div>
            </Reveal>
          </ol>
        </div>
      </section>
    </div>
  );
}
