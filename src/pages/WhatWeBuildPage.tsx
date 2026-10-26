import { AISection } from "@/components/AISection";
import { FinalCTA } from "@/components/Contact";
import { Engineering } from "@/components/Engineering";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { builds } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

export function WhatWeBuildPage() {
  useSEO({
    title: "What We Build — AI Systems, SaaS Platforms, Mobile & Web Products | NavRasa IT Solutions",
    description:
      "AI systems, SaaS platforms, mobile products, web platforms, enterprise systems and digital infrastructure — product engineering built to launch and built to scale.",
    path: "/what-we-build",
  });

  return (
    <>
      <PageHero
        label="What We Build"
        lines={["We build products.", "Not just projects."]}
        intro="Six disciplines, one team. From AI systems and SaaS platforms to the infrastructure underneath them — built to launch, and built to last."
        meta={
          <>
            <span>0{builds.length} disciplines</span>
            <span className="hidden sm:inline">Product · Engineering · Intelligence</span>
            <span>Idea → Product → Launch → Scale</span>
          </>
        }
      />
      <WhatWeBuild headless />
      <Engineering index="02" />
      <AISection index="03" />
      <FAQ index="04" tone="light" />
      <FinalCTA index="05" />
    </>
  );
}
