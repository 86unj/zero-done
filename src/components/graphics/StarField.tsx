"use client";

const STARS = [
  { x: 6, y: 10, size: 2 },
  { x: 18, y: 6, size: 1 },
  { x: 82, y: 12, size: 2 },
  { x: 92, y: 30, size: 1 },
  { x: 72, y: 8, size: 1 },
  { x: 12, y: 40, size: 1 },
  { x: 88, y: 55, size: 2 },
] as const;

export function StarField() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 pixel-grid-bg" aria-hidden>
      {STARS.map((star, i) => (
        <div
          key={i}
          className="absolute bg-[var(--star-color)]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size * 2,
            height: star.size * 2,
          }}
        />
      ))}
    </div>
  );
}
