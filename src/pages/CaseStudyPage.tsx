import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { FinalCTA } from "@/components/Contact";
import { Eyebrow, Reveal } from "@/components/ui";
import { caseStudyProjects } from "@/data/projects";
import { useSEO } from "@/hooks/useSEO";
import { useEnquiry } from "@/components/EnquiryContext";

export function CaseStudyPage() {
  const { slug } = useParams();
  const { openEnquiry } = useEnquiry();
  const project = caseStudyProjects.find((item) => item.slug === slug);

  useSEO({
    title: project ? `${project.name} Case Study | NavRasa IT Solutions` : "Project Case Study | NavRasa IT Solutions",
    description: project?.overview ?? "Explore a NavRasa product or digital platform case study.",
    path: project ? `/work/${project.slug}` : "/work",
  });

  if (!project) return <Navigate to="/work" replace />;
  const related = caseStudyProjects.filter((item) => item.id !== project.id).slice(0, 2);

  return (
    <>
      <section className="bg-ink text-paper section-y border-b border-paper/10">
        <div className="container-x">
          <Link to="/work" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70 transition-colors hover:text-paper">
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <Eyebrow tone="dark">{project.industry}</Eyebrow>
              <h1 className="page-hero-title mt-5 max-w-[14ch] font-display font-semibold leading-[0.98] tracking-[-0.04em]">{project.name}</h1>
              <p className="mt-7 max-w-[46rem] text-lg leading-relaxed text-paper/70 md:text-xl">{project.headline}</p>
            </div>
            <div className="border-l border-paper/20 pl-5 md:col-span-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45">Project category</span>
              <p className="mt-3 text-base font-medium">{project.category}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper section-y">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <Eyebrow>Project overview</Eyebrow>
          </Reveal>
          <Reveal className="md:col-span-8 md:col-start-5" delay={0.08}>
            <p className="font-display text-2xl leading-[1.12] tracking-[-0.03em] md:text-3xl">{project.overview}</p>
            <p className="mt-7 max-w-[38rem] text-base leading-relaxed text-ink/70">{project.responsibility}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2 section-y border-y border-ink/10">
        <div className="container-x">
          <Reveal><Eyebrow>Scope & solution</Eyebrow><h2 className="mt-5 max-w-[15ch] font-display text-4xl font-semibold tracking-[-0.04em] md:text-6xl">What we built.</h2></Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-3">
            {project.solutions.map((solution, index) => (
              <article key={solution.title} className="bg-paper-2 p-7 md:min-h-[240px] md:p-8">
                <span className="font-mono text-[10px] tracking-[0.18em] text-mute">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-7 font-display text-xl font-semibold tracking-[-0.03em] md:text-2xl">{solution.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/65">{solution.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 border-t border-ink/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15px] text-ink/65">Have a similar product challenge?</p>
            <button type="button" onClick={openEnquiry} className="inline-flex min-h-12 items-center justify-center gap-3 bg-ink px-6 text-sm font-medium text-paper">Discuss a Similar Project <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </section>

      <section className="bg-paper section-y">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4"><Eyebrow>Core experience</Eyebrow></div>
          <div className="md:col-span-8">
            {project.features.map((feature, index) => (
              <div key={feature.title} className="grid grid-cols-12 gap-4 border-t border-ink/12 py-6">
                <span className="col-span-2 font-mono text-[10px] text-mute">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="col-span-10 font-display text-xl font-semibold tracking-[-0.02em] md:col-span-4 md:text-2xl">{feature.title}</h3>
                <p className="col-span-10 col-start-3 text-[15px] leading-relaxed text-ink/65 md:col-span-6 md:col-start-auto">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-paper md:py-20">
        <div className="container-x">
          <Eyebrow tone="dark">Related projects</Eyebrow>
          <div className="mt-8 grid border-t border-paper/15 md:grid-cols-2">
            {related.map((item) => (
              <Link key={item.id} to={`/work/${item.slug}`} className="group flex items-center justify-between gap-4 border-b border-paper/15 py-7 md:px-6 md:first:border-r">
                <div><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">{item.category}</span><h3 className="mt-3 font-display text-2xl font-semibold">{item.name}</h3></div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA index="05" />
    </>
  );
}
