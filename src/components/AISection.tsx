import { useEffect, useRef } from "react";
import { ai } from "@/data/site";
import { Button, Eyebrow, Lines, Reveal } from "./ui";

/* A field of cells lit by interfering waves — reads as computation, not a "brain". */
export function SignalField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, dpr = 1, raf = 0, running = false;
    const mouse = { x: -1e4, y: -1e4 };
    const COLS = 26;
    let t = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = W * dpr; canvas.height = H * dpr;
      if (reduce) draw();
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const cell = W / COLS;
      const rows = Math.ceil(H / cell);
      const size = cell * 0.36;
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < COLS; i++) {
          const x = i * cell + cell / 2;
          const y = j * cell + cell / 2;
          const w1 = Math.sin(i * 0.45 + t * 1.1) * Math.cos(j * 0.35 - t * 0.7);
          const w2 = Math.sin((i + j) * 0.22 - t * 0.5);
          let v = (w1 + w2) * 0.5; // -1..1
          const dm = Math.hypot(x - mouse.x, y - mouse.y);
          const m = Math.max(0, 1 - dm / 160);
          v = v * 0.5 + 0.5 + m * 0.9;
          const a = Math.min(1, 0.05 + Math.pow(Math.max(0, v), 2.2) * 0.75);
          const s = size * (0.6 + Math.min(1, v) * 0.5);
          ctx.fillStyle = m > 0.35 || (a > 0.7 && (i * 7 + j * 13) % 17 === 0)
            ? `rgba(255,77,18,${a})`
            : `rgba(245,244,240,${a})`;
          ctx.fillRect(x - s / 2, y - s / 2, s, s);
        }
      }
    };

    const frame = () => {
      t += 0.016;
      draw();
      if (running) raf = requestAnimationFrame(frame);
    };
    const start = () => { if (!running && !reduce) { running = true; raf = requestAnimationFrame(frame); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -1e4; mouse.y = -1e4; };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0.1 });
    io.observe(canvas);
    canvas.addEventListener("pointermove", onMove, { passive: true });
    canvas.addEventListener("pointerleave", onLeave);
    return () => {
      stop(); ro.disconnect(); io.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);
  return <canvas ref={ref} className="block h-full w-full" aria-hidden="true" />;
}

export function AISection({ index = "04" }: { index?: string }) {
  return (
    <section id="ai" className="grain relative bg-ink text-paper">
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_20%_20%,rgba(255,77,18,0.07),transparent_60%)]" aria-hidden="true" />
      <div className="container-x section-y relative">
        <Eyebrow index={index} label="Applied Intelligence" />
        <div className="mt-10 grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-10">
          <div className="col-span-12 lg:col-span-9">
            <Lines lines={["Intelligence,", "built into the product."]} className="display display-md uppercase text-paper" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12 md:mt-24">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="relative border border-white/10 bg-ink-2/60">
              {/* corner ticks */}
              {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos) => (
                <span key={pos} className={`absolute ${pos} h-3 w-3 border-signal`} aria-hidden="true" style={{
                  borderTopWidth: pos.includes("top") ? 1 : 0,
                  borderBottomWidth: pos.includes("bottom") ? 1 : 0,
                  borderLeftWidth: pos.includes("left") ? 1 : 0,
                  borderRightWidth: pos.includes("right") ? 1 : 0,
                }} />
              ))}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-mute-2">
                <span>Context → Model → Tools → Output</span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-signal motion-safe:animate-pulse-soft" /> live
                </span>
              </div>
              <div className="aspect-[4/3] w-full sm:aspect-[16/10]">
                <SignalField />
              </div>
              <div className="grid grid-cols-3 border-t border-white/10 font-mono text-[10px] uppercase tracking-[0.2em] text-mute-2">
                {["Retrieval", "Reasoning", "Action"].map((k, i) => (
                  <div key={k} className={`px-5 py-3 ${i < 2 ? "border-r border-white/10" : ""}`}>{k}</div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="col-span-12 flex flex-col justify-between lg:col-span-5 lg:pl-8">
            <Reveal>
              <p className="text-xl leading-snug tracking-[-0.01em] text-paper md:text-2xl">{ai.lead}</p>
              <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-paper/60 md:text-lg">{ai.text}</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-12">
              <ul className="border-t border-white/10">
                {ai.grounded.map((g) => (
                  <li key={g.k} className="grid grid-cols-12 gap-4 border-b border-white/10 py-5">
                    <span className="col-span-4 font-mono text-[11px] uppercase tracking-[0.2em] text-signal">{g.k}</span>
                    <span className="col-span-8 text-[15px] text-paper/75">{g.v}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute-2">Capabilities</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute-2">{ai.capabilities.length} areas</span>
          </div>
          <ul className="grid grid-cols-2 border-t border-l border-white/10 md:grid-cols-3 xl:grid-cols-5">
            {ai.capabilities.map((c, i) => (
              <Reveal as="li" key={c} delay={(i % 5) * 0.04} className="group border-b border-r border-white/10 p-5 transition-colors duration-500 hover:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-mute-2">{String(i + 1).padStart(2, "0")}</span>
                  <span className="h-1.5 w-1.5 bg-white/15 transition-colors duration-500 group-hover:bg-signal" />
                </div>
                <div className="mt-8 text-[15px] font-medium tracking-[-0.01em] text-paper md:text-base">{c}</div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-[52ch] text-base text-paper/55">
            The best AI features are the ones users don't have to think about. We start from the workflow and work
            backwards to the model.
          </p>
          <Button href="/contact" tone="dark" variant="outline">
            Discuss an AI product
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
