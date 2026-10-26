import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { company, insights } from "@/data/site";
import { Eyebrow, Lines, Reveal } from "./ui";

export function Insights({ headless = false, index = "15" }: { headless?: boolean; index?: string }) {
  const [featured, ...rest] = insights.articles;
  return (
    <section id="insights" className="relative bg-paper-2 text-ink">
      <div className="container-x section-y">
        {!headless && (
          <div className="grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-8">
            <div className="col-span-12 lg:col-span-8">
              <Eyebrow index={index} label="Insights" tone="light" />
              <Lines lines={["Ideas for the next", "era of technology."]} className="display display-md mt-10 uppercase text-ink" />
            </div>
            <Reveal className="col-span-12 self-end lg:col-span-4">
              <p className="max-w-[38ch] text-base leading-relaxed text-ink/65 md:text-lg">
                Notes from building products — on AI, startups, engineering and the decisions that compound.
              </p>
            </Reveal>
          </div>
        )}

        <Reveal className={cn("flex flex-wrap gap-2", !headless && "mt-12")}>
          {insights.topics.map((t) => (
            <span key={t} className="border border-ink/15 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink/70">
              {t}
            </span>
          ))}
        </Reveal>

        <div className="mt-12 grid grid-cols-12 gap-px border border-ink/10 bg-ink/10 md:mt-16">
          {/* featured */}
          <Reveal className="col-span-12 lg:col-span-6">
            <article className="group relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden bg-ink p-8 text-paper md:p-10">
              <div className="dots-dark absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,#000,transparent_70%)]" aria-hidden="true" />
              <span className="pointer-events-none absolute -bottom-16 -right-6 select-none font-display text-[18rem] font-semibold leading-none tracking-[-0.06em] text-paper/[0.04]">
                AI
              </span>
              <div className="relative flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute-2">
                <span>Featured · {featured.topic}</span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-signal" /> {featured.published ? "Published" : "In progress"}
                </span>
              </div>
              <div className="relative">
                <h3 className="max-w-[16ch] font-display text-3xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-5xl">
                  {featured.title}
                </h3>
                <p className="mt-6 max-w-[44ch] text-[15px] text-paper/60">
                  {featured.published
                    ? "Read the full article."
                    : "This piece is being written. Follow NavRasa to read it first."}
                </p>
              </div>
            </article>
          </Reveal>

          {/* index */}
          <div className="col-span-12 flex flex-col bg-paper lg:col-span-6">
            {rest.map((a, i) => {
              const Comp = a.published && a.href ? "a" : "div";
              return (
                <Reveal key={a.title} delay={i * 0.05} className={cn("flex-1", i < rest.length - 1 && "border-b border-ink/10")}>
                  <Comp
                    href={a.published && a.href ? a.href : undefined}
                    className="group flex h-full items-start justify-between gap-6 p-6 transition-colors duration-500 hover:bg-paper-2 md:p-8"
                  >
                    <div>
                      <div className="flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-mute">
                        <span>{String(i + 2).padStart(2, "0")}</span>
                        <span className="h-px w-4 bg-ink/20" />
                        <span>{a.topic}</span>
                      </div>
                      <h3 className="mt-3 max-w-[30ch] font-display text-xl font-semibold leading-tight tracking-[-0.02em] md:text-2xl">
                        {a.title}
                      </h3>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2">
                      <ArrowUpRight
                        className={cn("h-5 w-5 transition-all duration-500 ease-[var(--ease-expo)]", a.published ? "text-ink group-hover:-translate-y-1 group-hover:translate-x-1" : "text-ink/25")}
                        strokeWidth={1.5}
                      />
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-mute">
                        {a.published ? "Read" : "Coming soon"}
                      </span>
                    </div>
                  </Comp>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[10.5px] uppercase tracking-[0.18em] text-mute">
          <span>New articles are added as they're published — no filler.</span>
          <a href={company.social[0].href} target="_blank" rel="noopener noreferrer" className="text-ink underline-offset-4 hover:underline">
            Follow on LinkedIn ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
