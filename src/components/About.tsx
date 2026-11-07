import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { about, company, manifesto } from "@/data/site";
import { EASE, Eyebrow, Lines, Logo, Reveal } from "./ui";

/* --------------------------------- ABOUT ---------------------------------- */
export function AboutBody({ headless = false, index = "13" }: { headless?: boolean; index?: string }) {
  return (
    <section id="about" className="relative bg-paper text-ink">
      <div className="container-x section-y">
        {!headless && (
          <div className="grid grid-cols-12 gap-x-4 gap-y-10 md:gap-x-8">
            <div className="col-span-12 lg:col-span-9">
              <Eyebrow index={index} label="About NavRasa" tone="light" />
              <Lines
                lines={["Building the company", "we want to see in the", "future of technology."]}
                className="display display-md mt-10 uppercase text-ink"
              />
            </div>
          </div>
        )}

        <div className={cn("grid grid-cols-12 gap-x-4 gap-y-12 md:gap-x-8", !headless && "mt-16 md:mt-24")}>
          <Reveal className="col-span-12 lg:col-span-5">
            <p className="text-xl leading-snug tracking-[-0.01em] text-ink md:text-2xl">{about.intro}</p>
            <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-lg">{about.text}</p>
            <dl className="mt-10 border-t border-ink/10">
              {about.facts.map((f) => (
                <div key={f.k} className="grid grid-cols-12 gap-4 border-b border-ink/10 py-4">
                  <dt className="col-span-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute xl:col-span-3">
                    {f.k}
                  </dt>
                  <dd className="col-span-8 text-[15px] text-ink/80 xl:col-span-9">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="col-span-12 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            <Reveal className="flex min-h-[430px] flex-col bg-[#F5F3EE] p-7 text-[#111111] md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F15A24]">Mission</span>
                <Logo tone="dark" className="shrink-0 scale-[0.78] origin-top-right" />
              </div>
              <div className="mt-auto pt-16">
                <h3 className="max-w-[15ch] font-display text-2xl font-semibold leading-[1.08] tracking-[-0.03em] md:text-[28px]">
                  Turn ambitious ideas into practical, scalable digital products.
                </h3>
                <p className="mt-5 max-w-[32ch] text-[15px] leading-relaxed text-[#555555]">
                  We combine business understanding, thoughtful design and strong engineering to build technology that solves real problems and helps businesses move forward.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="flex min-h-[430px] flex-col bg-[#101010] p-7 text-white md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F15A24]">Vision</span>
                <Logo tone="light" className="shrink-0 scale-[0.78] origin-top-right" />
              </div>
              <div className="mt-auto pt-16">
                <h3 className="max-w-[15ch] font-display text-2xl font-semibold leading-[1.08] tracking-[-0.03em] md:text-[28px] text-white">
                  Make powerful technology accessible to businesses ready to grow.
                </h3>
                <p className="mt-5 max-w-[32ch] text-[15px] leading-relaxed text-[#BDBDBD]">
                  We envision a future where startups and businesses can turn bold ideas into meaningful digital experiences through reliable, scalable and intelligent technology.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- BELIEFS --------------------------------- */
export function Beliefs({ index = "02" }: { index?: string }) {
  return (
    <section id="beliefs" className="grain relative bg-ink text-paper">
      <div className="container-x section-y relative">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow index={index} label="What We Believe" />
            <Lines
              lines={["Six beliefs that", "shape how we build."]}
              className="display display-md mt-10 uppercase text-paper"
            />
          </div>
          <Reveal className="col-span-12 self-end lg:col-span-4">
            <p className="max-w-[36ch] text-base leading-relaxed text-paper/60 md:text-lg">
              These aren't values on a wall. They're the defaults we return to whenever a product decision gets hard.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid grid-cols-1 border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-3 md:mt-24">
          {manifesto.principles.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={(i % 3) * 0.06}
              className="group relative flex min-h-[240px] flex-col justify-between border-b border-r border-white/10 p-7 transition-colors duration-500 hover:bg-white/[0.03] md:min-h-[300px] md:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] text-mute-2 transition-colors duration-500 group-hover:text-signal">
                  0{i + 1}
                </span>
                <span className="h-1.5 w-1.5 bg-white/15 transition-colors duration-500 group-hover:bg-signal" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl">{p.title}</h3>
                <p className="mt-3 max-w-[30ch] text-[15px] leading-relaxed text-paper/60">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------- LEADERSHIP ------------------------------- */

type Founder = (typeof about.leadership)[number];

function FounderCard({ f, i, open, onToggle }: { f: Founder; i: number; open: boolean; onToggle: () => void }) {
  const reduce = useReducedMotion();
  const panelId = `founder-panel-${i}`;

  return (
    <Reveal as="li" delay={i * 0.1} className="flex justify-center">
      <article
        className="relative flex min-h-[400px] w-full max-w-[380px] flex-col overflow-hidden rounded-[1.125rem] border border-[#e9e5f0] bg-[#fffefd] shadow-[0_14px_38px_-30px_rgba(36,24,70,0.32)]"
      >
        <header className="flex min-h-[88px] flex-col items-center justify-center px-4 py-3 text-center">
          <h3 className="font-display text-[21px] font-semibold tracking-[-0.03em] text-[#171629]">
            {f.name}
          </h3>
          <p className="mt-1.5 text-sm font-medium tracking-[0.02em] text-[#7654a6]">
            {f.role}
          </p>
        </header>

        <div className="flex h-[270px] items-end justify-center overflow-hidden bg-[#fffefd] px-4">
          <picture className="h-full w-full">
            <source srcSet={f.photo} type="image/webp" />
            <img
              src={f.photoFallback}
              alt={`${f.name}, ${f.role} at ${company.short}`}
              width={f.photoWidth}
              height={f.photoHeight}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain object-center"
            />
          </picture>
        </div>
        <div className="flex h-11 items-center justify-center">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={panelId}
            className="px-4 py-2 text-xs font-medium text-[#7654a6] transition-colors hover:text-[#50347d]"
          >
            {open ? "Hide founder details" : "View founder details"}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="overflow-hidden border-t border-ink/10 bg-paper"
            >
              <div className="px-6 py-7 md:px-8">
                {f.bio ? (
                  <p className="text-[15px] leading-relaxed text-ink/70">{f.bio}</p>
                ) : (
                  <p className="text-[15px] leading-relaxed text-ink/55">
                    Co-founder of {company.short}, focused on{" "}
                    {f.focus.map((x) => x.toLowerCase()).join(", ")} — building technology that helps ambitious ideas
                    become real products.
                  </p>
                )}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {f.focus.map((x) => (
                    <li
                      key={x}
                      className="border border-ink/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/70"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
                <a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 border-b border-ink/20 pb-1 text-[14px] font-medium text-ink transition-colors hover:border-ink"
                >
                  Connect on LinkedIn
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}

export function Leadership({ index = "14" }: { index?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="leadership" className="relative bg-[#f8f7fc] text-ink">
      <div className="container-x relative py-10 md:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow index={index} label="Leadership" tone="light" />
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-[#171629] sm:text-4xl md:text-5xl">
            Meet Our Leadership
          </h2>
          <p className="mx-auto mt-3 max-w-[42ch] text-base leading-relaxed text-[#626174] md:text-lg">
            Meet our leadership team driving innovation and growth
          </p>
        </div>

        <ul className="mx-auto mt-6 grid max-w-[792px] grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6">
          {about.leadership.map((f, i) => (
            <FounderCard key={f.name} f={f} i={i} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </ul>
      </div>
    </section>
  );
}
