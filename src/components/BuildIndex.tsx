import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { builds } from "@/data/site";
import { Button, Eyebrow, Lines, Reveal } from "./ui";
import { useEnquiry } from "./EnquiryContext";

const servicePaths: Record<string, string> = {
  mobile: "/mobile-app-development",
  enterprise: "/custom-software-development",
  saas: "/saas-development",
  ai: "/ai-development",
  web: "/web-application-development",
  infra: "/custom-software-development",
};

/* Home teaser: an editorial index of what we build, linking into the full page. */
export function BuildIndex({ index = "02" }: { index?: string }) {
  const { openEnquiry } = useEnquiry();
  return (
    <section id="what-we-build" className="grain relative bg-ink text-paper">
      <div className="container-x section-y relative">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow index={index} label="What We Build" />
            <Lines
              lines={["We build products.", "Not just projects."]}
              className="display display-md mt-7 uppercase text-paper md:mt-8"
            />
          </div>
          <Reveal className="col-span-12 self-end lg:col-span-4">
            <p className="max-w-[36ch] text-base leading-relaxed text-paper/60 md:text-lg">
              Six areas where we go deep. Each one is a discipline in its own right — and most serious products need
              several of them at once.
            </p>
            <div className="mt-5 md:mt-6">
              <Button href="/what-we-build" tone="dark" variant="text">
                Explore what we build
              </Button>
            </div>
          </Reveal>
        </div>

        <ol className="mt-8 border-t border-white/10 md:mt-10 lg:mt-12">
          {builds.map((b, i) => (
            <Reveal as="li" key={b.id} delay={i * 0.04}>
              <Link
                to={servicePaths[b.id] ?? `/what-we-build#build-${b.id}`}
                className="group grid grid-cols-12 items-center gap-x-4 gap-y-3 border-b border-white/10 py-5 transition-colors duration-500 hover:bg-white/[0.03] md:gap-x-8 md:py-6"
              >
                <span className="col-span-2 font-mono text-[11px] tracking-[0.2em] text-mute-2 transition-colors duration-500 group-hover:text-signal sm:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="col-span-10 font-display text-2xl font-semibold tracking-[-0.03em] transition-transform duration-500 ease-[var(--ease-expo)] group-hover:translate-x-2 sm:col-span-5 sm:text-3xl md:text-4xl lg:col-span-4 xl:text-5xl">
                  {b.title}
                </h3>
                <p className="col-span-10 col-start-3 text-[15px] leading-relaxed text-paper/55 sm:col-span-5 sm:col-start-auto lg:col-span-6">
                  {b.text}
                </p>
                <ArrowUpRight
                  className="col-span-1 hidden h-5 w-5 -translate-x-2 justify-self-end text-paper opacity-0 transition-all duration-500 ease-[var(--ease-expo)] group-hover:translate-x-0 group-hover:opacity-100 sm:block"
                  strokeWidth={1.5}
                />
              </Link>
            </Reveal>
          ))}
        </ol>
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[48ch] text-sm leading-relaxed text-paper/55">Not sure where your idea fits? Start with the outcome you want to create.</p>
          <button type="button" onClick={openEnquiry} className="inline-flex min-h-12 items-center justify-center gap-3 bg-signal px-6 text-[14px] font-medium text-white transition-colors hover:bg-[#d94d1c]">Discuss Custom Software <ArrowUpRight className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  );
}
