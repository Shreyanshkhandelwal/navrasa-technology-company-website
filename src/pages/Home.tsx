import { Testimonials } from "@/components/Testimonials";
import { BuildIndex } from "@/components/BuildIndex";
import { FinalCTA } from "@/components/Contact";
import { Why } from "@/components/Conviction";
import { Hero } from "@/components/Hero";
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
      <BuildIndex index="01" />
      <Why index="02" />
      <Work index="03" limit={2} teaser />
      <Testimonials index="04" tone="light" limit={3} />
      <FinalCTA index="05" tone="light" compact />
    </>
  );
}
