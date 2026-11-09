import { AISection } from "@/components/AISection";
import { FinalCTA } from "@/components/Contact";
import { Engineering } from "@/components/Engineering";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { WhatWeBuild } from "@/components/WhatWeBuild";
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
      <FAQ index="04" tone="light" />
      <FinalCTA index="05" />
    </>
  );
}
