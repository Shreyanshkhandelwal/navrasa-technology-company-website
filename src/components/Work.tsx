import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { work } from "@/data/site";
import { Button, Eyebrow, Lines, Reveal } from "./ui";

type Project = (typeof work.projects)[number];

/* Abstract product frame — an honest stand-in until real screens are added. */
function Mock({ p, kind }: { p: Project; kind: "mobile" | "web" }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-ink/10 bg-paper-2 sm:aspect-[16/11]">
      <div className="dots-light absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-[0.16] blur-3xl transition-transform duration-1000 ease-[var(--ease-expo)] group-hover:translate-x-[-20px] group-hover:translate-y-[20px]"
        style={{ background: p.accent }}
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute -bottom-10 -left-4 select-none font-display text-[16rem] font-semibold leading-none tracking-[-0.06em] text-ink/[0.05]">
        {p.name.slice(0, 1)}
      </span>

      {kind === "mobile" ? (
        <div className="absolute inset-0 flex items-end justify-center gap-6 px-8 pt-10">
          <div className="hidden w-[38%] max-w-[200px] translate-y-6 border border-ink/15 bg-paper p-3 transition-transform duration-700 ease-[var(--ease-expo)] group-hover:translate-y-2 sm:block">
            <div className="h-2 w-1/2 bg-ink/15" />
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="aspect-[4/3] border border-ink/10 bg-paper-2" />
              ))}
            </div>
            <div className="mt-3 h-2 w-3/4 bg-ink/10" />
            <div className="mt-2 h-2 w-1/2 bg-ink/10" />
          </div>
          <div className="w-[52%] max-w-[240px] rounded-t-[1.6rem] border border-b-0 border-ink/20 bg-ink p-2 transition-transform duration-700 ease-[var(--ease-expo)] group-hover:-translate-y-3">
            <div className="rounded-t-[1.2rem] bg-paper p-3">
              <div className="mx-auto h-1 w-10 rounded-full bg-ink/20" />
              <div className="mt-4 flex items-center justify-between">
                <div className="h-2 w-12 bg-ink/60" />
                <div className="h-4 w-4 border border-ink/30" />
              </div>
              <div className="mt-4 h-14 border border-ink/10 bg-paper-2 p-2">
                <div className="h-1.5 w-1/2 bg-ink/15" />
                <div className="mt-2 h-1.5 w-1/3 bg-ink/10" />
                <div
                  className="mt-2 inline-block px-1.5 py-0.5 font-mono text-[6px] uppercase tracking-widest text-paper"
                  style={{ background: p.accent }}
                >
                  live
                </div>
              </div>
              {[0, 1, 2].map((i) => (
                <div key={i} className="mt-2 flex items-center gap-2 border border-ink/10 p-2">
                  <div className="h-6 w-6 bg-ink/10" />
                  <div className="flex-1">
                    <div className="h-1.5 w-2/3 bg-ink/15" />
                    <div className="mt-1.5 h-1.5 w-1/3 bg-ink/10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-x-6 bottom-0 top-10 sm:inset-x-12 sm:top-12">
          <div className="h-full border border-b-0 border-ink/15 bg-paper transition-transform duration-700 ease-[var(--ease-expo)] group-hover:-translate-y-2">
            <div className="flex items-center gap-2 border-b border-ink/10 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
              <span className="ml-3 h-1.5 w-28 bg-ink/10" />
            </div>
            <div className="grid h-full grid-cols-12">
              <div className="col-span-3 hidden border-r border-ink/10 p-3 sm:block">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className={cn("mb-2 h-1.5", i === 0 ? "w-3/4 bg-ink/50" : "w-1/2 bg-ink/10")} />
                ))}
              </div>
              <div className="col-span-12 p-3 sm:col-span-9 sm:p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="h-3 w-32 bg-ink/60" />
                    <div className="mt-2 h-1.5 w-20 bg-ink/15" />
                  </div>
                  <div
                    className="px-2 py-1 font-mono text-[7px] uppercase tracking-widest text-paper"
                    style={{ background: p.accent }}
                  >
                    action
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="border border-ink/10 bg-paper-2 p-2">
                      <div className="h-1.5 w-1/2 bg-ink/15" />
                      <div className="mt-3 h-3 w-2/3 bg-ink/40" />
                    </div>
                  ))}
                </div>
                <div className="mt-2 grid grid-cols-6 gap-1.5">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="aspect-square border border-ink/10 bg-paper-2 transition-colors duration-500 group-hover:border-ink/25"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-12 gap-4 border-b border-ink/10 py-4">
      <dt className="col-span-4 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute xl:col-span-3">{k}</dt>
      <dd className="col-span-8 text-[15px] leading-relaxed text-ink/80 xl:col-span-9">{v}</dd>
    </div>
  );
}

export function Work({
  headless = false,
  limit,
  teaser = false,
  index = "10",
}: {
  headless?: boolean;
  limit?: number;
  teaser?: boolean;
  index?: string;
}) {
  const projects = limit ? work.projects.slice(0, limit) : work.projects;

  return (
    <section id="work" className="relative bg-paper text-ink">
      <div className="container-x section-y">
        {!headless && (
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
            <div className="col-span-12 lg:col-span-8">
              <Eyebrow index={index} label="Selected Work" tone="light" />
              <Lines lines={["Built to make", "an impact."]} className="display display-md mt-10 uppercase text-ink" />
            </div>
            <Reveal className="col-span-12 self-end lg:col-span-4">
              <p className="max-w-[38ch] text-base leading-relaxed text-ink/65 md:text-lg">
                A selection of products we've shipped with founders and businesses — in their words, not ours.
              </p>
            </Reveal>
          </div>
        )}

        <div className={cn("flex flex-col gap-20 md:gap-28", !headless && "mt-16 md:mt-24")}>
          {projects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={p.id} className="group grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
                <Reveal className={cn("col-span-12 lg:col-span-7", flip && "lg:order-2")}>
                  <Mock p={p} kind={i === 0 ? "mobile" : "web"} />
                </Reveal>
                <Reveal
                  delay={0.08}
                  className={cn("col-span-12 flex flex-col lg:col-span-5", flip ? "lg:order-1 lg:pr-8" : "lg:pl-8")}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-mute">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute">{p.industry}</span>
                  </div>
                  <h3 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{p.name}</h3>
                  <dl className="mt-8 border-t border-ink/10">
                    <Row k="Problem" v={p.problem} />
                    <Row k="Product" v={p.product} />
                    <Row k="Technology" v={p.technology} />
                  </dl>
                  <figure className="mt-8">
                    <blockquote
                      className="border-l-2 pl-5 text-[17px] leading-snug tracking-[-0.01em] text-ink"
                      style={{ borderColor: p.accent }}
                    >
                      {p.impact}
                    </blockquote>
                    <figcaption className="mt-3 pl-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute">
                      — {p.attribution}
                    </figcaption>
                  </figure>
                </Reveal>
              </article>
            );
          })}

          {!teaser && (
            <Reveal>
              <Link
                to="/contact"
                className="group grid grid-cols-12 items-center gap-x-4 gap-y-6 border border-dashed border-ink/25 p-8 transition-colors duration-500 hover:border-ink md:gap-x-8 md:p-12"
              >
                <div className="col-span-12 md:col-span-8">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-mute">0{work.projects.length + 1}</span>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                    Your product, <span className="text-ink/40">here.</span>
                  </h3>
                  <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-ink/60">
                    The next case study on this page hasn't been built yet. Let's talk about what it could be.
                  </p>
                </div>
                <div className="col-span-12 flex md:col-span-4 md:justify-end">
                  <span className="inline-flex items-center gap-3 text-[15px] font-medium">
                    Start a project
                    <ArrowUpRight
                      className="h-5 w-5 transition-transform duration-500 ease-[var(--ease-expo)] group-hover:-translate-y-1 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}
        </div>

        <div className="mt-16 flex justify-center md:mt-20">
          {teaser ? (
            <Button href="/work" tone="light">
              View all work
            </Button>
          ) : (
            <Button href="/contact" tone="light" variant="outline">
              Build the next one with us
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
