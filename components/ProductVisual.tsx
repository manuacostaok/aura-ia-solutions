import type { ReactNode } from "react";

type ProductVisualId = "torneame" | "hay-cancha";

function BracketVisual() {
  return (
    <div className="grid h-24 grid-cols-3 items-center gap-3 sm:h-28">
      <div className="flex h-full flex-col justify-around">
        <div className="h-2 rounded-full bg-white/15" />
        <div className="h-2 rounded-full bg-white/15" />
        <div className="h-2 rounded-full bg-white/15" />
        <div className="h-2 rounded-full bg-white/15" />
      </div>
      <div className="flex h-full flex-col justify-around px-2">
        <div className="h-2 rounded-full bg-violet/50" />
        <div className="h-2 rounded-full bg-white/10" />
      </div>
      <div className="flex h-full flex-col items-start justify-center">
        <div className="h-2.5 w-full rounded-full bg-gradient-to-r from-violet to-blue" />
      </div>
    </div>
  );
}

function CourtGridVisual() {
  const cells = Array.from({ length: 12 });
  const highlighted = new Set([1, 4, 7, 10]);
  return (
    <div className="grid h-24 grid-cols-6 gap-1.5 sm:h-28">
      {cells.map((_, i) => (
        <div
          key={i}
          className={
            highlighted.has(i)
              ? "rounded-md bg-gradient-to-br from-violet/60 to-blue/40"
              : "rounded-md bg-white/[0.06]"
          }
        />
      ))}
    </div>
  );
}

const visuals: Record<ProductVisualId, () => ReactNode> = {
  torneame: BracketVisual,
  "hay-cancha": CourtGridVisual,
};

export default function ProductVisual({ id }: { id: string }) {
  const Visual = visuals[id as ProductVisualId];
  if (!Visual) return null;

  return (
    <div className="mb-5 rounded-xl border border-border bg-background/50 p-4" aria-hidden="true">
      <Visual />
    </div>
  );
}
