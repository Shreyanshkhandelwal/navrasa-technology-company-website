import { AISection } from "@/components/AISection";
import { FinalCTA } from "@/components/Contact";
import { Engineering } from "@/components/Engineering";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { Journey } from "@/components/Journey";
import { Eyebrow, Lines, Reveal } from "@/components/ui";
import { why } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

export function WhatWeBuildPage() {
  useSEO({
  title: "What We Build | Mobile App, Custom Software & AI Development | NavRasa",
  description:
    "Explore NavRasa's mobile app, custom software, SaaS and AI development services. We build scalable digital products for startups and growing businesses.",
  path: "/what-we-build",
});

  return (
    <>
      <PageHero
  label="NAVRASA / WHAT WE BUILD"
  lines={["Digital Products.", "Built for Business."]}
  intro="From high-performance mobile applications and custom business software to SaaS platforms and AI-powered solutions, we engineer digital products that solve real problems and support long-term growth."
  meta={
    <>
      <span>Mobile Apps · Custom Software · SaaS · AI</span>
      <span className="hidden sm:inline">Strategy · Engineering · Delivery</span>
      <span>Idea → Product → Scale</span>
    </>
  }
/>
      <WhatWeBuild headless />
      <Engineering index="02" />
      <AISection index="03" />
      <Journey index="04" />
      <section className="relative bg-ink text-paper">
        <div className="container-x section-y">
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-x-8">
            <div className="col-span-12 lg:col-span-7">
              <Eyebrow index="05" label="Why NavRasa" />
              <Lines lines={["More than development.", "A technology partner."]} className="display display-md mt-10 uppercase text-paper" />
            </div>
            <Reveal className="col-span-12 self-end lg:col-span-5 lg:pl-8">
              <p className="max-w-[40ch] text-lg leading-relaxed text-paper/65">We take responsibility for the product, its engineering and the business outcomes it is designed to support.</p>
            </Reveal>
          </div>
          <ol className="mt-16 grid grid-cols-1 border-t border-l border-white/10 md:grid-cols-2 lg:grid-cols-3 md:mt-24">
            {why.principles.map((principle, i) => (
              <Reveal as="li" key={principle.title} delay={(i % 3) * 0.05} className="min-h-[220px] border-b border-r border-white/10 p-7 md:p-9">
                <span className="font-mono text-[10px] tracking-[0.2em] text-signal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{principle.title}</h3>
                <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-paper/60">{principle.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <FAQ index="06" tone="light" />
      <FinalCTA index="07" />
    </>
  );
}
