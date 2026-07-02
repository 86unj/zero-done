"use client";

import { Sparkles } from "@/components/graphics/Sparkles";

const TWINKLE_STARS = [
  { x: 10, y: 14, size: 2, delay: 0 },
  { x: 22, y: 8, size: 1, delay: 0.8 },
  { x: 78, y: 11, size: 2, delay: 1.4 },
  { x: 91, y: 28, size: 1, delay: 0.3 },
  { x: 6, y: 52, size: 1, delay: 1.1 },
  { x: 88, y: 62, size: 2, delay: 0.6 },
  { x: 14, y: 86, size: 1, delay: 1.7 },
  { x: 72, y: 90, size: 2, delay: 0.2 },
  { x: 48, y: 6, size: 1, delay: 1.3 },
  { x: 55, y: 94, size: 1, delay: 0.9 },
] as const;

const FLOATING_PIXELS = [
  { x: 7, y: 30, color: "bg-pixel-red", size: 10, delay: 0 },
  { x: 12, y: 72, color: "bg-pixel-yellow", size: 8, delay: 0.7 },
  { x: 86, y: 20, color: "bg-pixel-green", size: 8, delay: 1.2 },
  { x: 92, y: 75, color: "bg-pixel-blue", size: 6, delay: 0.4 },
  { x: 4, y: 88, color: "bg-pixel-orange", size: 6, delay: 1.5 },
  { x: 78, y: 88, color: "bg-pixel-purple", size: 10, delay: 0.2 },
] as const;

export function QrBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="absolute inset-0 pixel-grid-bg opacity-50" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(255,205,117,0.14)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_0%,rgba(93,39,93,0.22)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(56,183,100,0.14)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(26,28,44,0.75)_100%)]" />

      {TWINKLE_STARS.map((star, i) => (
        <div
          key={i}
          className="absolute bg-pixel-yellow animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size * 3,
            height: star.size * 3,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {FLOATING_PIXELS.map((pixel, i) => (
        <div
          key={i}
          className={`absolute ${pixel.color} opacity-25 animate-float`}
          style={{
            left: `${pixel.x}%`,
            top: `${pixel.y}%`,
            width: pixel.size,
            height: pixel.size,
            animationDelay: `${pixel.delay}s`,
            boxShadow: "0 0 0 1px rgba(0,0,0,0.3)",
          }}
        />
      ))}

      <Sparkles />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pixel-yellow/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pixel-green/25 to-transparent" />
    </div>
  );
}
