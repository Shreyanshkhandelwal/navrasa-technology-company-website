import { Button, Eyebrow, Lines, Mark } from "@/components/ui";
import { useSEO } from "@/hooks/useSEO";

export function NotFound() {
  useSEO({
    title: "Page not found — NavRasa IT Solutions",
    description: "This page doesn't exist. Head back to NavRasa or start a project conversation.",
    path: "/404",
    noindex: true,
  });

  return (
    <section className="grain relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink text-paper">
      <div className="dots-dark absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]" aria-hidden="true" />
      <Mark className="pointer-events-none absolute -right-10 top-1/2 -z-10 h-[70vh] w-auto -translate-y-1/2 text-paper/[0.04]" />
      <div className="container-x pb-24 pt-32">
        <Eyebrow index="404" label="Not found" />
        <Lines as="h1" lines={["Not built", "yet."]} className="display display-lg mt-10 uppercase text-paper" />
        <p className="mt-8 max-w-[42ch] text-lg leading-relaxed text-paper/70">
          This page doesn't exist — but the thing you're looking for might. Head home, or tell us what you're building.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <Button href="/" tone="dark">
            Back home
          </Button>
          <Button href="/contact" tone="dark" variant="text">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}
