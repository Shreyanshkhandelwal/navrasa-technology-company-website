import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FinalCTA } from "@/components/Contact";
import { PageHero } from "@/components/PageHero";
import { Testimonials } from "@/components/Testimonials";
import { Eyebrow, Reveal } from "@/components/ui";
import { caseStudyProjects, type ProjectCategory } from "@/data/projects";
import { useSEO } from "@/hooks/useSEO";
import { useEnquiry } from "@/components/EnquiryContext";
import { trackEvent } from "@/utils/analytics";

const filters: Array<"All" | ProjectCategory> = ["All", "Mobile Applications", "Web Development", "E-commerce", "Business Platforms"];

function PortfolioGrid() {
  const { openEnquiry } = useEnquiry();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const projects = filter === "All"
    ? caseStudyProjects
    : caseStudyProjects.filter((project) => project.categories.includes(filter));

  return (
    <section className="bg-paper section-y">
      <div className="container-x">
        <div className="mb-12 flex flex-col gap-5 border-l-2 border-signal bg-paper-2 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#777777]">HAVE A PRODUCT IDEA?</p><p className="mt-2 font-display text-xl font-semibold text-[#171717] md:text-2xl">Let's turn your vision into a product that works.</p><p className="mt-2 text-[14px] leading-relaxed text-[#555555]">From concept to development and launch, let's build something valuable for your business.</p></div>
          <button type="button" onClick={() => { trackEvent("primary_cta_click", { cta: "portfolio" }); openEnquiry(); }} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-[#111111] px-6 text-sm font-medium text-white transition-colors hover:bg-black">Start Your Project <ArrowUpRight className="h-4 w-4" /></button>
        </div>
        <div className="flex flex-col gap-7 border-b border-ink/10 pb-7 md:flex-row md:items-end md:justify-between">
          <Reveal><Eyebrow className="text-[#777777]" label="Selected work" /><h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-[#171717] md:text-5xl">Products & platforms.</h2></Reveal>
          <div className="flex max-w-full gap-2 overflow-x-auto" role="group" aria-label="Filter projects">
            {filters.map((item) => (
              <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`shrink-0 border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${filter === item ? "border-ink bg-ink text-paper" : "border-ink/15 bg-transparent text-ink hover:border-ink"}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 0.08}>
              <Link to={`/work/${project.slug}`} onClick={() => trackEvent("portfolio_case_study_click", { project: project.id })} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden border border-ink/10 bg-paper-2" style={{ backgroundImage: "radial-gradient(circle at 75% 25%, rgba(0,0,0,.04), transparent 38%)" }}>
                  <div className="absolute inset-0 opacity-50 dots-light" />
                  <div className="absolute inset-x-[12%] bottom-0 top-[18%] border border-ink/15 bg-paper transition-transform duration-700 ease-[var(--ease-expo)] group-hover:-translate-y-2">
                    <div className="flex items-center gap-1.5 border-b border-ink/10 px-4 py-3"><span className="h-1.5 w-1.5 rounded-full bg-ink/20" /><span className="h-1.5 w-1.5 rounded-full bg-ink/20" /><span className="ml-4 h-1.5 w-24 bg-ink/10" /></div>
                    <div className="grid h-full grid-cols-12 gap-4 p-5"><div className="col-span-4 border-r border-ink/10"><div className="h-2 w-2/3 bg-ink/20" />{[0, 1, 2, 3].map((i) => <div key={i} className="mt-4 h-1.5 w-4/5 bg-ink/10" />)}</div><div className="col-span-8"><div className="font-display text-xl font-semibold">{project.name}</div><div className="mt-4 h-16" style={{ background: `${project.accent}18` }} /><div className="mt-3 grid grid-cols-2 gap-2"><span className="h-12 border border-ink/10" /><span className="h-12 border border-ink/10" /></div></div></div>
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-between gap-5">
                  <div><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#777777]">{project.category}</span><h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[#171717]">{project.name}</h3><p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-[#555555]">{project.headline}</p></div>
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 transition-colors group-hover:bg-ink group-hover:text-paper"><ArrowUpRight className="h-4 w-4" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-semibold text-[#171717] md:text-2xl">Building something with a similar ambition?</p>
          <button type="button" onClick={() => { trackEvent("primary_cta_click", { cta: "portfolio_grid" }); openEnquiry(); }} className="inline-flex min-h-12 items-center justify-center gap-3 bg-ink px-6 text-sm font-medium text-paper transition-colors hover:bg-black">Discuss Your Project <ArrowUpRight className="h-4 w-4" /></button>
        </div>
      </div>
    </section>
  );
}

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
        lines={["DIGITAL PRODUCTS. BUILT FOR THE REAL WORLD."]}
        intro="From mobile applications and marketplaces to AI-powered platforms and enterprise software, explore the digital products we've helped bring to life."
        meta={
          <>
            <span className="text-paper/75">SELECTED PROJECTS</span>
            <span className="hidden text-paper/75 sm:inline">MOBILE · WEB · AI · SOFTWARE</span>
            <span className="text-paper/75">MORE IN PROGRESS</span>
          </>
        }
      />
      <PortfolioGrid />
      <Testimonials index="02" tone="dark" />
      <FinalCTA index="03" />
    </>
  );
}
