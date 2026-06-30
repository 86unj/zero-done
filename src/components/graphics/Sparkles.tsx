"use client";

const SPARKLES = [
  { x: 10, y: 20, delay: 0 },
  { x: 85, y: 15, delay: 0.3 },
  { x: 25, y: 70, delay: 0.6 },
  { x: 70, y: 80, delay: 0.9 },
  { x: 50, y: 10, delay: 0.15 },
  { x: 90, y: 55, delay: 0.45 },
] as const;

export function Sparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="absolute text-pixel-yellow animate-sparkle text-lg"
          style={{ left: `${s.x}%`, top: `${s.y}%`, animationDelay: `${s.delay}s` }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
