import { type PointerEvent as ReactPointerEvent, useId, useRef, useState } from "react";

type Orbit = {
  rx: number;
  ry: number;
  rotation: number;
  duration: string;
  animation: "animate-orbit-slow" | "animate-orbit-reverse";
  opacity: number;
};
type Label = { label: string; side: "left" | "right" };
type NodeLayout = { ring: number; angle: number };
type Point = { x: number; y: number };

const VIEW_WIDTH = 720;
const VIEW_HEIGHT = 560;
const CENTER_X = VIEW_WIDTH / 2;
const CENTER_Y = VIEW_HEIGHT / 2;
const MARK_PATH = "M0 896V240L419 0l419 240v656l-212 123V361L419 240 214 361v658Z";

const LEFT_LABELS = [
  "WEB PLATFORMS",
  "AI SOLUTIONS",
  "SAAS PLATFORMS",
  "MOBILE APPS",
  "PRODUCT SCALING",
  "API INTEGRATIONS",
];
const RIGHT_LABELS = [
  "RAPID PROTOTYPING",
  "MARKETPLACES",
  "ERP & CRM",
  "BUSINESS AUTOMATION",
  "MVP DEVELOPMENT",
  "CUSTOM SOFTWARE",
];
const LABELS: Label[] = [
  ...LEFT_LABELS.map((label) => ({ label, side: "left" as const })),
  ...RIGHT_LABELS.map((label) => ({ label, side: "right" as const })),
];
const ORBITS: Orbit[] = [
  { rx: 270, ry: 230, rotation: -8, duration: "140s", animation: "animate-orbit-slow", opacity: 0.22 },
  { rx: 225, ry: 110, rotation: 38, duration: "110s", animation: "animate-orbit-reverse", opacity: 0.2 },
  { rx: 155, ry: 145, rotation: -38, duration: "90s", animation: "animate-orbit-slow", opacity: 0.18 },
];
const RING_LINKS: Array<Array<[number, number]>> = [
  [[0, 6], [3, 9]],
  [[1, 10]],
  [[2, 11]],
];
const HIGHLIGHTED_NODE_IDS = new Set([2, 6, 9]);
const NODE_LAYOUTS: NodeLayout[] = [
  { ring: 0, angle: 4.1 },
  { ring: 1, angle: 3.88 },
  { ring: 2, angle: 2.92 },
  { ring: 0, angle: 2.1 },
  { ring: 1, angle: 2.26 },
  { ring: 2, angle: 3.42 },
  { ring: 0, angle: 5.4 },
  { ring: 1, angle: 5.68 },
  { ring: 2, angle: 0.18 },
  { ring: 0, angle: 1 },
  { ring: 1, angle: 0.82 },
  { ring: 2, angle: 5.8 },
];
const MOBILE_NODE_IDS = Array.from({ length: LABELS.length }, (_, nodeId) => nodeId);
const MOBILE_NODE_POINTS: Array<{ id: number; x: number; y: number }> = [
  { id: 0, x: 35, y: 49 },
  { id: 6, x: 285, y: 49 },
  { id: 1, x: 72, y: 108 },
  { id: 7, x: 248, y: 108 },
  { id: 2, x: 112, y: 39 },
  { id: 8, x: 208, y: 39 },
  { id: 3, x: 35, y: 111 },
  { id: 9, x: 285, y: 111 },
  { id: 4, x: 94, y: 36 },
  { id: 10, x: 226, y: 36 },
  { id: 5, x: 112, y: 122 },
  { id: 11, x: 208, y: 122 },
];

const pointOnOrbit = (orbit: Orbit, angle: number): Point => ({
  x: CENTER_X + Math.cos(angle) * orbit.rx,
  y: CENTER_Y + Math.sin(angle) * orbit.ry,
});

const rotateVector = (vector: Point, angle: number): Point => {
  const radians = (angle * Math.PI) / 180;

  return {
    x: vector.x * Math.cos(radians) - vector.y * Math.sin(radians),
    y: vector.x * Math.sin(radians) + vector.y * Math.cos(radians),
  };
};

const orbitArc = (orbit: Orbit, angle: number) => {
  const start = pointOnOrbit(orbit, angle - 0.18);
  const end = pointOnOrbit(orbit, angle + 0.18);
  return `M${start.x} ${start.y} A${orbit.rx} ${orbit.ry} 0 0 1 ${end.x} ${end.y}`;
};

const splitLabel = (label: string) => {
  if (label.length <= 12) return [label];
  return label.split(" ");
};

export function Ecosystem({ className, dim = false }: { className?: string; dim?: boolean }) {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const orbitRefs = useRef<Array<SVGGElement | null>>([]);
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const activeOrbit = activeNode === null ? -1 : NODE_LAYOUTS[activeNode].ring;

  const toggleNode = (nodeId: number) => {
    setActiveNode((current) => current === nodeId ? null : nodeId);
  };
  const clearNode = (nodeId: number) => {
    setActiveNode((current) => current === nodeId ? null : current);
  };

  const handlePointerMove = (event: ReactPointerEvent<SVGSVGElement>) => {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1));
    const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1));
    const depth = [0.35, 0.68, 1];

    orbitRefs.current.forEach((element, index) => {
      if (!element) return;
      const factor = depth[index];
      element.style.transform =
        `translate(${x * 4 * factor}px, ${y * 3 * factor}px) rotate(${(x - y) * factor}deg)`;
    });
  };

  const handlePointerLeave = () => {
    orbitRefs.current.forEach((element) => {
      if (element) element.style.transform = "";
    });
  };

  const activateFromKeyboard = (event: React.KeyboardEvent<SVGGElement>, nodeId: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleNode(nodeId);
    }
  };

  return (
    <div className={`relative md:min-h-[30rem] ${className ?? ""}`}>
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-40 md:block"
        style={{
          backgroundImage: "radial-gradient(rgba(245,244,240,0.12) 0.6px, transparent 0.6px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <svg
        className="relative hidden min-h-[30rem] w-full md:block lg:min-h-[min(72vh,720px)]"
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        role="group"
        aria-label="Interactive NavRasa technology ecosystem"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <defs>
          <radialGradient id={`${id}-core-glow`}>
            <stop offset="0" stopColor="#ff4d12" stopOpacity="0.18" />
            <stop offset="0.55" stopColor="#ff4d12" stopOpacity="0.07" />
            <stop offset="1" stopColor="#ff4d12" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${id}-node-glow`}>
            <stop offset="0" stopColor="#ff4d12" stopOpacity="0.48" />
            <stop offset="1" stopColor="#ff4d12" stopOpacity="0" />
          </radialGradient>
        </defs>

        {ORBITS.map((orbit, ringIndex) => {
          const ringNodeIds = NODE_LAYOUTS.flatMap((layout, nodeId) =>
            layout.ring === ringIndex ? [nodeId] : []
          );
          const selectedNode = activeOrbit === ringIndex && activeNode !== null
            ? NODE_LAYOUTS[activeNode]
            : null;
          const selectedPoint = selectedNode ? pointOnOrbit(orbit, selectedNode.angle) : null;

          return (
            <g
              key={`orbit-layer-${ringIndex}`}
              ref={(element) => { orbitRefs.current[ringIndex] = element; }}
              className="orbit-svg-group transition-transform duration-300 ease-out"
            >
              <g transform={`rotate(${orbit.rotation} ${CENTER_X} ${CENTER_Y})`}>
                <g
                  className={`orbit-svg-group ${orbit.animation}`}
                  style={{ animationDuration: orbit.duration }}
                >
                  <ellipse
                    cx={CENTER_X}
                    cy={CENTER_Y}
                    rx={orbit.rx}
                    ry={orbit.ry}
                    fill="none"
                    stroke="#e5e3de"
                    strokeOpacity={orbit.opacity * (dim ? 0.78 : 1)}
                    strokeWidth="1.15"
                    vectorEffect="non-scaling-stroke"
                  />

                  {RING_LINKS[ringIndex].map(([startId, endId]) => {
                    const start = pointOnOrbit(orbit, NODE_LAYOUTS[startId].angle);
                    const end = pointOnOrbit(orbit, NODE_LAYOUTS[endId].angle);

                    return (
                      <line
                        key={`link-${startId}-${endId}`}
                        x1={start.x}
                        y1={start.y}
                        x2={end.x}
                        y2={end.y}
                        stroke="#d8d6d1"
                        strokeOpacity="0.11"
                        strokeWidth="0.75"
                        vectorEffect="non-scaling-stroke"
                      />
                    );
                  })}

                  {selectedNode && selectedPoint && (
                    <>
                      <path
                        d={orbitArc(orbit, selectedNode.angle)}
                        fill="none"
                        stroke="#ff4d12"
                        strokeOpacity="0.84"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />
                      <path
                        d={`M${CENTER_X} ${CENTER_Y} L${selectedPoint.x} ${selectedPoint.y}`}
                        fill="none"
                        stroke="#ff4d12"
                        strokeOpacity="0.72"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />
                    </>
                  )}

                  {ringNodeIds.map((nodeId) => {
                    const point = pointOnOrbit(orbit, NODE_LAYOUTS[nodeId].angle);
                    const label = LABELS[nodeId];
                    const labelX = label.side === "left" ? -14 : 14;
                    const labelOffset = rotateVector({ x: labelX, y: 0 }, -orbit.rotation);
                    const labelAnchor = label.side === "left" ? "end" : "start";
                    const lines = splitLabel(label.label);
                    const counterAnimation = orbit.animation === "animate-orbit-slow"
                      ? "animate-orbit-reverse"
                      : "animate-orbit-slow";
                    const isActive = activeNode === nodeId;
                    const isHighlighted = HIGHLIGHTED_NODE_IDS.has(nodeId);

                    return (
                      <g
                        key={`node-${nodeId}`}
                        transform={`translate(${point.x} ${point.y})`}
                        role="button"
                        tabIndex={0}
                        aria-label={label.label}
                        aria-pressed={isActive}
                        onPointerEnter={() => setActiveNode(nodeId)}
                        onPointerLeave={() => clearNode(nodeId)}
                        onFocus={() => setActiveNode(nodeId)}
                        onBlur={() => clearNode(nodeId)}
                        onClick={() => toggleNode(nodeId)}
                        onKeyDown={(event) => activateFromKeyboard(event, nodeId)}
                        style={{ cursor: "pointer" }}
                      >
                        {(isActive || isHighlighted) && (
                          <circle
                            className={!isActive ? "animate-pulse-soft" : undefined}
                            r={isActive ? 16 : 12}
                            fill={`url(#${id}-node-glow)`}
                            opacity={isActive ? 1 : 0.65}
                            style={!isActive ? { animationDuration: "4.5s" } : undefined}
                          />
                        )}
                        <circle
                          r={isActive ? 7 : 5.2}
                          fill={isActive || isHighlighted ? "#ff4d12" : "#0a0a0b"}
                          stroke={isActive || isHighlighted ? "#ff6d3d" : "#e5e3de"}
                          strokeOpacity={isActive || isHighlighted ? 1 : 0.82}
                          strokeWidth={isActive ? 1.4 : 1}
                          vectorEffect="non-scaling-stroke"
                        />
                        <circle r={isActive ? 2.6 : 2.1} fill="#f5f4f0" />

                        <g transform={`translate(${labelOffset.x} ${labelOffset.y})`}>
                          <g
                            style={{
                              transform: `rotate(${-orbit.rotation}deg)`,
                              transformBox: "fill-box",
                              transformOrigin: "center",
                            }}
                          >
                            <g
                              className={`orbit-svg-group ${counterAnimation}`}
                              style={{
                                animationDuration: orbit.duration,
                                transformBox: "fill-box",
                                transformOrigin: "center",
                              }}
                            >
                              <text
                                x="0"
                                y="0"
                                textAnchor={labelAnchor}
                                dominantBaseline="middle"
                                fill={isActive ? "#ff805c" : "#e5e3de"}
                                fillOpacity={isActive ? 1 : 0.84}
                                fontFamily='"JetBrains Mono", ui-monospace, Menlo, monospace'
                                fontSize="11.5"
                                fontWeight={isActive ? "600" : "500"}
                                letterSpacing="0.55"
                                aria-hidden="true"
                              >
                                {lines.map((line, lineIndex) => (
                                  <tspan
                                    key={line}
                                    x="0"
                                    y={(lineIndex - (lines.length - 1) / 2) * 15}
                                  >
                                    {line}
                                  </tspan>
                                ))}
                              </text>
                            </g>
                          </g>
                        </g>
                      </g>
                    );
                  })}
                </g>
              </g>
            </g>
          );
        })}

        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r="88"
          fill={`url(#${id}-core-glow)`}
          opacity={dim ? 0.72 : 1}
          aria-hidden="true"
        />
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r="74"
          fill="none"
          stroke="#d8d6d1"
          strokeOpacity="0.32"
          strokeWidth="1"
          strokeDasharray="1 6"
          vectorEffect="non-scaling-stroke"
          aria-hidden="true"
        />
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r="82"
          fill="none"
          stroke="#ff4d12"
          strokeOpacity="0.2"
          strokeWidth="1"
          strokeDasharray="1 11"
          vectorEffect="non-scaling-stroke"
          aria-hidden="true"
        />

        <g
          transform={`translate(${CENTER_X - 41} ${CENTER_Y - 49}) scale(${82 / 1019})`}
          aria-hidden="true"
        >
          <path d={MARK_PATH} fill="#f5f4f0" />
        </g>

        <ul className="sr-only" aria-label="NavRasa ecosystem capabilities">
          {LABELS.map(({ label }) => <li key={`assistive-${label}`}>{label}</li>)}
        </ul>
      </svg>

      <div className="mx-auto max-w-xl px-4 py-7 md:hidden">
        <div className="relative mx-auto mb-7 flex h-40 w-full max-w-[19rem] items-center justify-center overflow-hidden rounded-full border border-white/[0.08] bg-[radial-gradient(ellipse_at_center,rgba(255,77,18,0.10),rgba(245,244,240,0.025)_42%,transparent_72%)]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 160" fill="none" aria-hidden="true">
            <g className="orbit-svg-group animate-orbit-slow">
              <ellipse cx="160" cy="80" rx="140" ry="47" stroke="#e5e3de" strokeOpacity=".36" transform="rotate(-12 160 80)" />
              <path d="M37 49 C75 64 104 91 137 108M191 38 C221 51 245 77 273 106" stroke="#e5e3de" strokeOpacity=".18" />
            </g>
            <g className="orbit-svg-group animate-orbit-reverse">
              <ellipse cx="160" cy="80" rx="105" ry="62" stroke="#e5e3de" strokeOpacity=".28" transform="rotate(36 160 80)" />
              <path d="M75 41 C102 57 131 92 156 112 C187 106 217 70 245 48" stroke="#ff4d12" strokeOpacity=".14" />
            </g>
            {activeNode !== null && MOBILE_NODE_IDS.includes(activeNode) && (
              <path
                d={`M160 80 L${MOBILE_NODE_POINTS.find((point) => point.id === activeNode)?.x ?? 160} ${MOBILE_NODE_POINTS.find((point) => point.id === activeNode)?.y ?? 80}`}
                stroke="#ff4d12"
                strokeOpacity=".7"
                strokeWidth="1.2"
              />
            )}
            <circle cx="160" cy="80" r="36" stroke="#e5e3de" strokeOpacity=".3" strokeDasharray="1 5" />
            {MOBILE_NODE_POINTS.map(({ id: nodeId, x, y }) => (
              <g
                key={`mobile-node-${nodeId}`}
                onPointerEnter={() => setActiveNode(nodeId)}
                onPointerLeave={() => clearNode(nodeId)}
                onClick={() => toggleNode(nodeId)}
                style={{ cursor: "pointer" }}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={activeNode === nodeId ? 5 : 3}
                  fill={activeNode === nodeId ? "#ff4d12" : "#f5f4f0"}
                />
              </g>
            ))}
          </svg>
          <div className="relative flex items-center gap-3 rounded-full border border-white/10 bg-ink/70 px-5 py-3 shadow-[0_0_34px_rgba(255,77,18,0.11)] backdrop-blur-sm">
            <svg className="h-8 w-7 text-paper" viewBox="0 0 838 1019" aria-hidden="true">
              <path d={MARK_PATH} fill="currentColor" />
            </svg>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-paper">
              NavRasa
            </span>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5" aria-label="Interactive ecosystem capabilities">
          {MOBILE_NODE_IDS.map((nodeId) => {
            const isActive = activeNode === nodeId;
            return (
              <li key={`mobile-label-${nodeId}`}>
                <button
                  type="button"
                  className={`flex min-h-9 w-full min-w-0 items-center gap-2 border-b py-1.5 text-left font-mono text-[0.6875rem] font-medium uppercase leading-[1.25] tracking-[0.04em] transition-colors ${
                    isActive ? "border-signal/50 text-signal" : "border-paper/10 text-paper/80"
                  }`}
                  aria-pressed={isActive}
                  onClick={() => toggleNode(nodeId)}
                >
                  <span
                    className={`h-1 w-1 shrink-0 rounded-full ${isActive ? "bg-signal" : "bg-paper/70"}`}
                    aria-hidden="true"
                  />
                  <span>{LABELS[nodeId].label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
