import { AITeaser } from "@/components/AITeaser";
import { Credentials } from "@/components/Industries";
import { Testimonials } from "@/components/Testimonials";
import { BuildIndex } from "@/components/BuildIndex";
import { FinalCTA } from "@/components/Contact";
import { Future, Why } from "@/components/Conviction";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Manifesto } from "@/components/Manifesto";
import { Work } from "@/components/Work";
import { useSEO } from "@/hooks/useSEO";

export function Home() {
  useSEO({
    title: "NavRasa IT Solutions — Build What's Next | Product Engineering, AI & Software Development",
    description:
      "NavRasa IT Solutions is a technology and product engineering company. We design, engineer and scale digital products, AI systems, SaaS platforms, mobile and web applications for ambitious founders and businesses. Based in Jaipur, India.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <Credentials tone="light" />
      <Manifesto index="01" />
      <BuildIndex index="02" />
      <Journey index="03" />
      <AITeaser index="04" />
      <Work index="05" limit={2} teaser />
      <Testimonials index="06" tone="light" />
      <Why index="07" />
      <Future index="08" />
      <FinalCTA index="09" />
    </>
  );
}
