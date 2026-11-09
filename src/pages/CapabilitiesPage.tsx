import { Capabilities, Technology } from "@/components/Capabilities";
import { FinalCTA } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { capabilities } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

export function CapabilitiesPage() {
  useSEO({
    title: "Capabilities & Technology — Product, Engineering, Intelligence, Experience | NavRasa",
    description:
      "Product strategy, MVP development, frontend, backend, mobile, cloud, DevOps, AI, machine learning, automation and product design — and the technology stack behind it.",
    path: "/capabilities",
  });

  return (
    <>
      <PageHero
        label="Capabilities"
        lines={["One team.", "Four disciplines."]}
        intro="Product, engineering, intelligence and experience — not separate departments, but one system that ships together."
        meta={
          <>
            <span>0{capabilities.length} disciplines</span>
            <span className="hidden sm:inline">{capabilities.map((c) => c.title).join(" · ")}</span>
            <span>Chosen per product, not per trend</span>
          </>
        }
      />
      <Capabilities headless />
      <Technology index="02" />
      <FinalCTA tone="light" index="03" />
    </>
  );
}
