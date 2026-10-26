import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { about, company, manifesto } from "@/data/site";
import { EASE, Eyebrow, Lines, Mark, Reveal } from "./ui";

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
            <Reveal className="flex flex-col justify-between bg-paper p-8 md:p-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">Mission</span>
              <p className="mt-16 font-display text-2xl font-semibold leading-tight tracking-[-0.03em] md:mt-24 md:text-3xl">
                {about.mission}
              </p>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col justify-between bg-ink p-8 text-paper md:p-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">Vision</span>
              <p className="mt-16 font-display text-2xl font-semibold leading-tight tracking-[-0.03em] md:mt-24 md:text-3xl">
                {about.vision}
              </p>
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

/* ------------------------------- LEADERSHIP -------------------------------
   Portrait cards: name + role header, an organic blob behind a cut-out
   portrait, and a "+" control that expands the founder's detail.        */

type Founder = (typeof about.leadership)[number];

/** Organic blob backdrop — two shapes so the two cards don't look cloned. */
function Blob({ variant, className }: { variant: 0 | 1; className?: string }) {
  const paths = [
    "M191 24c57 14 97 59 108 118 11 60-7 134-45 190-38 57-96 95-158 92-62-3-128-47-153-111-25-64 1-148 48-204C38 53 110 10 191 24Z",
    "M205 18c54 25 83 82 86 145 3 62-21 130-66 178-45 47-111 74-168 54-57-20-105-87-113-156-8-70 24-142 77-183 53-41 130-63 184-38Z",
  ];
  return (
    <svg viewBox="0 0 400 460" className={className} aria-hidden="true" preserveAspectRatio="xMidYMax meet">
      <path d={paths[variant]} fill="currentColor" />
    </svg>
  );
}

function FounderCard({ f, i, open, onToggle }: { f: Founder; i: number; open: boolean; onToggle: () => void }) {
  const reduce = useReducedMotion();
  const panelId = `founder-panel-${i}`;
  const initials = f.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <Reveal as="li" delay={i * 0.1} className="flex">
      <article
        className={cn(
          "group relative flex w-full flex-col overflow-hidden rounded-[1.75rem] border transition-all duration-700 ease-[var(--ease-expo)]",
          open ? "border-ink/25 shadow-[0_30px_80px_-40px_rgba(10,10,11,0.45)]" : "border-ink/10 hover:border-ink/25"
        )}
      >
        {/* header */}
        <header
          className={cn(
            "relative px-6 pb-7 pt-8 text-center transition-colors duration-700 md:px-8",
            open ? "bg-ink text-paper" : "bg-paper-2 text-ink"
          )}
        >
          <span
            className={cn(
              "mx-auto mb-4 block h-1.5 w-1.5 transition-colors duration-700",
              open ? "bg-signal" : "bg-ink/20"
            )}
            aria-hidden="true"
          />
          <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] md:text-[1.75rem]">{f.name}</h3>
          <p
            className={cn(
              "mt-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-700",
              open ? "text-signal" : "text-mute"
            )}
          >
            {f.role}
          </p>
        </header>

        {/* portrait */}
        <div className="relative flex flex-1 items-end justify-center overflow-hidden bg-paper px-6 pb-0 pt-4">
          <div className="relative flex aspect-[4/5] w-full max-w-[340px] items-end justify-center">
            <Blob
              variant={(i % 2) as 0 | 1}
              className={cn(
                "absolute inset-x-0 bottom-0 h-full w-full transition-all duration-700 ease-[var(--ease-expo)]",
                open ? "scale-105 text-[#f0d9cd]" : "text-paper-2 group-hover:scale-[1.03]"
              )}
            />
            <span
              className={cn(
                "absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-opacity duration-700",
                open ? "opacity-100" : "opacity-0"
              )}
              style={{ background: "radial-gradient(circle, rgba(255,77,18,0.16), transparent 70%)" }}
              aria-hidden="true"
            />

            {f.photo ? (
              <img
                src={f.photo}
                alt={`${f.name} — ${f.role}, ${company.short}`}
                width={680}
                height={850}
                loading="lazy"
                decoding="async"
                className="relative z-10 h-full w-full object-contain object-bottom transition-transform duration-700 ease-[var(--ease-expo)] group-hover:-translate-y-1"
              />
            ) : (
              /* EDIT: set `photo` in src/data/site.ts to replace this placeholder */
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
                <Mark className="h-10 w-auto text-ink/15" />
                <span className="mt-5 font-display text-6xl font-semibold tracking-[-0.05em] text-ink/25 md:text-7xl">
                  {initials}
                </span>
                <span className="mt-4 font-mono text-[9.5px] uppercase tracking-[0.2em] text-mute/70">
                  Portrait coming soon
                </span>
              </div>
            )}

            {/* expand control */}
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={open}
              aria-controls={panelId}
              className={cn(
                "absolute bottom-4 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border transition-all duration-500 ease-[var(--ease-expo)] hover:scale-110",
                open
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 bg-paper/90 text-ink backdrop-blur-sm hover:border-ink"
              )}
            >
              <span className="sr-only">
                {open ? `Hide details about ${f.name}` : `Show details about ${f.name}`}
              </span>
              <span className="relative block h-3.5 w-3.5" aria-hidden="true">
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                <span
                  className={cn(
                    "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform duration-500 ease-[var(--ease-expo)]",
                    open ? "scale-y-0" : "scale-y-100"
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        {/* detail */}
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
    <section id="leadership" className="relative bg-paper text-ink">
      <div
        className="lines-light absolute inset-0 opacity-40 [mask-image:linear-gradient(180deg,transparent,#000_35%,#000_65%,transparent)]"
        aria-hidden="true"
      />
      <div className="container-x section-y relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow index={index} label="Leadership" tone="light" />
            <h2 className="display display-sm mt-8 uppercase">The founders</h2>
          </div>
          <p className="max-w-[40ch] text-[15px] leading-relaxed text-ink/60">
            Founder-led, product-obsessed. NavRasa is built by people who care about what gets shipped and why.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 items-start gap-6 sm:grid-cols-2 md:gap-8">
          {about.leadership.map((f, i) => (
            <FounderCard key={f.name} f={f} i={i} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </ul>

        <p className="mt-10 text-center font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute">
          {company.name} · {company.location}
        </p>
      </div>
    </section>
  );
}
