import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Eyebrow, Lines, Reveal } from "@/components/ui";
import { company } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

export function CareersPage() {
  useSEO({
    title: "Careers at NavRasa IT Solutions | Opportunities Coming Soon",
    description: "Explore future career opportunities at NavRasa IT Solutions. We're building a team of passionate engineers, thinkers and innovators.",
    path: "/careers",
  });

  return (
    <>
      <section className="grain relative isolate overflow-hidden bg-ink text-paper">
        <div className="container-x flex min-h-[52svh] flex-col justify-end pb-12 pt-28 md:min-h-[56svh] md:pb-16 md:pt-36">
          <Eyebrow label="Careers at NavRasa" />
          <Lines
            as="h1"
            lines={["Careers opening soon."]}
            reveal={false}
            className="page-hero-title mt-8 max-w-[18ch] uppercase text-paper"
          />
          <div className="mt-6 grid grid-cols-12 items-end gap-x-4 gap-y-6 md:gap-x-8">
            <Reveal className="col-span-12 lg:col-span-7">
              <p className="max-w-[42ch] text-base leading-relaxed text-paper/70 md:text-lg">
                We're building a team of curious thinkers, creative problem-solvers and passionate engineers.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="col-span-12 flex flex-wrap items-center gap-x-7 gap-y-4 lg:col-span-5 lg:justify-end">
              <a href={`mailto:${company.email}`} className="inline-flex min-h-12 items-center gap-3 border-b border-paper/30 px-1 text-sm text-paper transition-colors hover:border-signal hover:text-signal">
                Get in touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                to="/"
                className="inline-flex min-h-12 items-center gap-3 border border-paper/25 px-6 text-sm font-medium text-paper transition-colors hover:border-signal hover:text-signal"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Return to Homepage
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
