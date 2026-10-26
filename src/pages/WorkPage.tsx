import { FinalCTA } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { Work } from "@/components/Work";
import { work } from "@/data/site";
import { useSEO } from "@/hooks/useSEO";

export function WorkPage() {
  useSEO({
    title: "Work — Selected Products & Case Studies | NavRasa IT Solutions",
    description:
      "Selected products NavRasa has shipped with founders and businesses: mobile apps, e-commerce platforms and lead-generating web platforms — in our clients' words.",
    path: "/work",
  });

  return (
    <>
      <PageHero
        label="Work"
        lines={["Built to make", "an impact."]}
        intro="A selection of products we've shipped with founders and businesses — in their words, not ours."
        meta={
          <>
            <span>0{work.projects.length} selected products</span>
            <span className="hidden sm:inline">Consumer · E-commerce · Energy · Business</span>
            <span>More in progress</span>
          </>
        }
      />
      <Work headless />
      <Testimonials index="02" tone="dark" />
      <FinalCTA index="03" />
    </>
  );
}
