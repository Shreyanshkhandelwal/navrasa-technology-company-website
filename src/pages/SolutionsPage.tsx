import { FinalCTA } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { Engagement, Process } from "@/components/Engagement";
import { FAQ } from "@/components/FAQ";
import { Solutions } from "@/components/Solutions";
import { useSEO } from "@/hooks/useSEO";

export function SolutionsPage() {
  useSEO({
    title: "Solutions for Founders & Businesses — MVP Development to Digital Transformation | NavRasa",
    description:
      "MVP development for founders and technology for established businesses: product validation, engineering, automation, AI integration and new digital revenue channels.",
    path: "/solutions",
  });

  return (
    <>
      <PageHero
        label="Solutions"
        lines={["For founders.", "For businesses."]}
        intro="Whether you're validating a first idea or modernising an operation that already works, the approach is the same: understand the problem, build the right thing, stay for what comes next."
        meta={
          <>
            <span>Founders · Startups · Businesses</span>
            <span className="hidden sm:inline">Validate → Build → Scale</span>
            <span>Two paths, one team</span>
          </>
        }
      />
      <Solutions indexes={["01", "02"]} />
      <Engagement index="03" />
      <Process index="04" />
      <FAQ index="05" tone="light" />
      <FinalCTA index="06" />
    </>
  );
}
