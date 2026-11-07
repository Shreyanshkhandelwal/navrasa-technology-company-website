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
      <section className="grain relative isolate min-h-[72svh] overflow-hidden bg-ink text-paper">
        <div className="dots-dark absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_75%_20%,#000,transparent_65%)]" aria-hidden="true" />
        <div className="container-x flex min-h-[72svh] flex-col justify-end pb-14 pt-32 md:pb-20 md:pt-40">
          <Eyebrow label="Careers at NavRasa" />
          <Lines
            as="h1"
            lines={["BUILD WHAT'S NEXT. WITH US."]}
            className="page-hero-title mt-8 max-w-[13ch] uppercase text-paper"
          />
          <div className="mt-8 grid grid-cols-12 gap-x-4 gap-y-7 md:gap-x-8">
            <Reveal className="col-span-12 lg:col-span-6">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#f5f3ee] md:text-3xl">
                Something exciting is on the way.
              </h2>
              <p className="mt-4 max-w-[34rem] text-base leading-relaxed text-paper/70 md:text-lg">
                We're building a team of curious thinkers, creative problem-solvers and passionate engineers. Our next chapter is coming soon.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="col-span-12 flex items-end lg:col-span-6 lg:justify-end">
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

      <section className="bg-[#F5F3EE] text-[#111111]">
        <div className="container-x section-y">
          <div className="grid grid-cols-12 gap-x-4 gap-y-10 border-t border-ink/15 pt-10 md:gap-x-8 md:pt-14">
            <Reveal className="col-span-12 lg:col-span-7">
              <Eyebrow label="Careers" tone="light" />
              <h2 className="mt-7 max-w-[14ch] font-display text-3xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-5xl">
                Great work starts with great people.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="col-span-12 lg:col-span-5 lg:pt-12">
              <p className="max-w-[38ch] text-lg leading-relaxed text-[#555555]">
                Stay connected and be among the first to hear about opportunities at NavRasa.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 border border-[#F15A24]/35 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#F15A24]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F15A24]" aria-hidden="true" />
                Careers opening soon
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-14 flex flex-col gap-5 border-t border-ink/15 pt-8 sm:flex-row sm:items-end sm:justify-between md:mt-20">
            <div>
              <p className="text-base text-[#555555]">Have a question? Reach out to our team.</p>
              <a
                href={`mailto:${company.email}`}
                className="mt-3 inline-flex items-center gap-3 font-display text-xl font-semibold text-[#111111] underline decoration-[#F15A24]/50 underline-offset-8 transition-colors hover:text-[#F15A24] md:text-2xl"
              >
                {company.email}
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
