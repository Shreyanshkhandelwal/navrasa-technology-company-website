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
  title: "Mobile App & Software Development Company in Jaipur | NavRasa",
  description:
    "NavRasa IT Solutions builds Android and iOS apps, Flutter and React Native applications, and custom business software for startups and growing businesses. We also develop SaaS platforms and AI-powered solutions. Based in Jaipur, India.",
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
