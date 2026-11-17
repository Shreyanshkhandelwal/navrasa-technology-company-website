import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FinalCTA } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { useSEO } from "@/hooks/useSEO";

export function InsightsPage() {
  useSEO({
    title: "Insights Unavailable | NavRasa IT Solutions",
    description: "There are currently no published Insights articles. Explore NavRasa's selected work and software engineering capabilities.",
    path: "/insights",
    noindex: true,
  });

  return (
    <>
      <PageHero
        label="Insights"
        lines={["No published articles", "at this time."]}
        intro="There are currently no published articles to read here. Explore our work or software engineering capabilities instead."
        meta={
          <>
            <span className="text-paper/75">NO PUBLISHED ARTICLES</span>
            <span className="hidden text-paper/75 sm:inline">INSIGHTS ARE UNAVAILABLE</span>
          </>
        }
      />
      <section className="bg-paper section-y">
        <div className="container-x flex flex-wrap gap-4">
          <Link to="/work" className="inline-flex min-h-12 items-center gap-3 bg-ink px-6 text-sm font-medium text-paper transition-colors hover:bg-black">
            Explore our work <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/capabilities" className="inline-flex min-h-12 items-center gap-3 border border-ink/20 px-6 text-sm font-medium text-ink transition-colors hover:border-ink">
            View capabilities <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <FinalCTA index="02" />
    </>
  );
}
