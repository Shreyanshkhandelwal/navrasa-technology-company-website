import { useEffect, useRef } from "react";
import { hero } from "@/data/site";

/* --------------------------------------------------------------------------
   ECOSYSTEM — an orbital system of connected capabilities around an
   intelligent core (the NavRasa mark). Pure Canvas 2D, DPR-aware,
   depth-sorted pseudo-3D, pauses offscreen, respects reduced motion.
--------------------------------------------------------------------------- */

type Vec = { x: number; y: number; z: number };
type Ring = { r: number; tiltX: number; tiltZ: number; speed: number; labels: string[]; offset: number };
type Node = {
  label: string;
  ring: number;
  a0: number;
  pulse: number; // 0..1 phase
  pulseSpeed: number;
  inward: boolean;
  accent: boolean;
};

const MARK_PATH = "M0 896V240L419 0l419 240v656l-212 123V361L419 240 214 361v658Z";

const createMark = () =>
  typeof Path2D !== "undefined" ? new Path2D(MARK_PATH) : null;

const rotX = (p: Vec, t: number): Vec => {
  const c = Math.cos(t), s = Math.sin(t);
  return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
};
const rotY = (p: Vec, t: number): Vec => {
  const c = Math.cos(t), s = Math.sin(t);
  return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
};
const rotZ = (p: Vec, t: number): Vec => {
  const c = Math.cos(t), s = Math.sin(t);
  return { x: p.x * c - p.y * s, y: p.x * s + p.y * c, z: p.z };
};

export function Ecosystem({ className, dim = false }: { className?: string; dim?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true }) as
      | (CanvasRenderingContext2D & { letterSpacing?: string })
      | null;
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const [inner, outer] = [hero.nodes.slice(0, 4), hero.nodes.slice(4)];
    const rings: Ring[] = [
      { r: 0.27, tiltX: 1.12, tiltZ: -0.28, speed: 0.11, labels: inner, offset: 0.6 },
      { r: 0.43, tiltX: 1.18, tiltZ: 0.34, speed: -0.075, labels: outer, offset: 0.1 },
      { r: 0.52, tiltX: 1.05, tiltZ: -0.9, speed: 0.05, labels: [], offset: 0 },
    ];
    const nodes: Node[] = [];
    rings.forEach((ring, ri) =>
      ring.labels.forEach((label, i) =>
        nodes.push({
          label,
          ring: ri,
          a0: ring.offset + (i / ring.labels.length) * Math.PI * 2,
          pulse: Math.random(),
          pulseSpeed: 0.16 + Math.random() * 0.12,
          inward: i % 2 === 0,
          accent: (i + ri) % 3 === 0,
        })
      )
    );

    let W = 0, H = 0, S = 0, dpr = 1;
    let raf = 0;
    let running = false;
    let last = performance.now();
    let t = 0;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0, px: -1e4, py: -1e4 };
    let hovered = -1;

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      W = Math.max(1, r.width);
      H = Math.max(1, r.height);
      S = Math.min(W, H);
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      if (reduce) draw(0);
    };

    const project = (p: Vec) => {
      const f = 2.4 * S;
      const k = f / (f - p.z);
      return { x: W / 2 + p.x * k, y: H / 2 + p.y * k, k, z: p.z };
    };

    const transform = (p: Vec, ring: Ring) => {
      let q = rotX(p, ring.tiltX);
      q = rotZ(q, ring.tiltZ);
      q = rotY(q, mouse.x * 0.35);
      q = rotX(q, -mouse.y * 0.22);
      return q;
    };

    const ringPoint = (ring: Ring, a: number): Vec => {
      const R = ring.r * S;
      return transform({ x: Math.cos(a) * R, y: Math.sin(a) * R, z: 0 }, ring);
    };

    const draw = (time: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2;
      const base = dim ? 0.6 : 1;

      /* ---- rings ---- */
      const SEG = 110;
      rings.forEach((ring, ri) => {
        const isDeco = ring.labels.length === 0;
        let prev = project(ringPoint(ring, 0));
        for (let i = 1; i <= SEG; i++) {
          const a = (i / SEG) * Math.PI * 2;
          const cur = project(ringPoint(ring, a));
          const depth = (cur.z / (ring.r * S) + 1) / 2; // 0 back .. 1 front
          const alpha = (isDeco ? 0.035 : 0.06) + depth * (isDeco ? 0.05 : 0.11);
          ctx.strokeStyle = `rgba(245,244,240,${alpha * base})`;
          ctx.lineWidth = ri === 2 ? 0.6 : 0.8;
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(cur.x, cur.y);
          ctx.stroke();
          prev = cur;
        }
      });

      /* ---- compute nodes ---- */
      const projected = nodes.map((n, i) => {
        const ring = rings[n.ring];
        const a = n.a0 + t * ring.speed;
        const p = project(ringPoint(ring, a));
        const depth = (p.z / (ring.r * S) + 1) / 2;
        return { ...p, depth, n, i };
      });

      // hover detection
      hovered = -1;
      if (finePointer) {
        let best = 26;
        projected.forEach((p) => {
          const d = Math.hypot(p.x - mouse.px, p.y - mouse.py);
          if (d < best) { best = d; hovered = p.i; }
        });
        canvas.style.cursor = hovered >= 0 ? "crosshair" : "default";
      }

      const back = projected.filter((p) => p.z < 0).sort((a, b) => a.z - b.z);
      const front = projected.filter((p) => p.z >= 0).sort((a, b) => a.z - b.z);

      const drawLinks = (list: typeof projected) => {
        list.forEach((p) => {
          const hot = p.i === hovered;
          const alpha = (0.07 + p.depth * 0.14) * base * (hot ? 2.2 : 1);
          ctx.strokeStyle = hot ? `rgba(255,77,18,${Math.min(0.9, alpha)})` : `rgba(245,244,240,${alpha})`;
          ctx.lineWidth = hot ? 1 : 0.7;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(cx, cy);
          ctx.stroke();

          // travelling pulse
          const ph = p.n.pulse;
          const u = p.n.inward ? ph : 1 - ph;
          const px = p.x + (cx - p.x) * u;
          const py = p.y + (cy - p.y) * u;
          const fade = Math.sin(ph * Math.PI);
          const isAccent = p.n.accent || hot;
          ctx.fillStyle = isAccent
            ? `rgba(255,77,18,${0.9 * fade * base})`
            : `rgba(245,244,240,${0.8 * fade * base})`;
          ctx.beginPath();
          ctx.arc(px, py, 1.6 + 0.8 * fade, 0, Math.PI * 2);
          ctx.fill();
          if (isAccent) {
            ctx.fillStyle = `rgba(255,77,18,${0.18 * fade * base})`;
            ctx.beginPath();
            ctx.arc(px, py, 6 * fade + 1, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      };

      const drawNodes = (list: typeof projected) => {
        list.forEach((p) => {
          const hot = p.i === hovered;
          const a = (0.4 + p.depth * 0.6) * base * (hot ? 1.15 : 1);
          const r = (2.4 + p.depth * 1.8) * (hot ? 1.4 : 1);

          // outer ring
          ctx.strokeStyle = hot ? `rgba(255,77,18,${Math.min(1, a)})` : `rgba(245,244,240,${a * 0.5})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r + 5 + (hot ? 3 : 0), 0, Math.PI * 2);
          ctx.stroke();

          // dark backing + dot
          ctx.fillStyle = "rgba(10,10,11,0.95)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, r + 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = hot ? `rgba(255,77,18,1)` : `rgba(245,244,240,${Math.min(1, a)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();

          // label
          const fs = Math.max(9.5, Math.min(11.5, S * 0.019)) * (hot ? 1.06 : 1);
          ctx.font = `500 ${fs}px "JetBrains Mono", ui-monospace, Menlo, monospace`;
          if ("letterSpacing" in ctx) ctx.letterSpacing = "0.14em";
          ctx.textBaseline = "middle";
          const label = p.n.label.toUpperCase();
          const left = p.x > cx;
          ctx.textAlign = left ? "left" : "right";
          const lx = p.x + (left ? r + 12 : -(r + 12));
          ctx.fillStyle = hot ? "rgba(245,244,240,1)" : `rgba(245,244,240,${(0.35 + p.depth * 0.6) * base})`;
          ctx.fillText(label, lx, p.y + 0.5);
        });
      };

      drawLinks(back);
      drawNodes(back);

      /* ---- core ---- */
      const glowR = S * 0.2;
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
      g.addColorStop(0, `rgba(245,244,240,${0.12 * base})`);
      g.addColorStop(0.5, `rgba(245,244,240,${0.03 * base})`);
      g.addColorStop(1, "rgba(245,244,240,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
      ctx.fill();

      const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, S * 0.11);
      g2.addColorStop(0, `rgba(255,77,18,${0.16 * base})`);
      g2.addColorStop(1, "rgba(255,77,18,0)");
      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.arc(cx, cy, S * 0.11, 0, Math.PI * 2);
      ctx.fill();

      // rotating dashed halo
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.12);
      ctx.setLineDash([1.5, 7]);
      ctx.strokeStyle = `rgba(245,244,240,${0.28 * base})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, S * 0.14, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.rotate(-t * 0.2);
      ctx.strokeStyle = `rgba(245,244,240,${0.1 * base})`;
      ctx.beginPath();
      ctx.arc(0, 0, S * 0.105, 0.2, Math.PI * 1.35);
      ctx.stroke();
      ctx.restore();

      // the mark
      const mh = S * 0.105;
      const mw = mh * (838 / 1019);
      const breathe = 0.9 + 0.1 * Math.sin(time * 0.0016);
      ctx.save();
      ctx.translate(cx - mw / 2, cy - mh / 2);
      ctx.scale(mw / 838, mh / 1019);
      ctx.fillStyle = `rgba(245,244,240,${breathe * base})`;
      const mark = createMark();
      if (mark) ctx.fill(mark);
      ctx.restore();

      drawLinks(front);
      drawNodes(front);
    };

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      t += dt;
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      if (!finePointer) {
        mouse.tx = Math.sin(t * 0.25) * 0.5;
        mouse.ty = Math.cos(t * 0.18) * 0.35;
      }
      nodes.forEach((n) => {
        n.pulse += dt * n.pulseSpeed;
        if (n.pulse > 1) {
          n.pulse -= 1;
          n.accent = Math.random() < 0.3;
        }
      });
      draw(now);
      if (running) raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.px = e.clientX - r.left;
      mouse.py = e.clientY - r.top;
      mouse.tx = ((e.clientX - (r.left + r.width / 2)) / r.width) * 2;
      mouse.ty = ((e.clientY - (r.top + r.height / 2)) / r.height) * 2;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    resize();

    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0.05 });
    io.observe(wrap);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    if (finePointer) window.addEventListener("pointermove", onMove, { passive: true });

    if (reduce) draw(0);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
    };
  }, [dim]);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
