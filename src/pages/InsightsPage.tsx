import { FinalCTA } from "@/components/Contact";
import { Insights } from "@/components/Insights";
import { PageHero } from "@/components/PageHero";
import { insights } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

export function InsightsPage() {
  useSEO({
    title: "Insights — Ideas for the Next Era of Technology | NavRasa",
    description:
      "Notes from building products: AI, startups, MVP development, SaaS, engineering, automation and digital transformation — written by the people who build.",
    path: "/insights",
  });

  return (
    <>
      <PageHero
        label="Insights"
        lines={["Ideas for the next", "era of technology."]}
        intro="Notes from building products — on AI, startups, engineering and the decisions that compound."
        meta={
          <>
            <span>0{insights.topics.length} topics</span>
            <span className="hidden sm:inline">Published as written — no filler</span>
            <span>{insights.articles.length} in progress</span>
          </>
        }
      />
      <Insights headless />
      <FinalCTA index="02" />
    </>
  );
}
