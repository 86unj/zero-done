"use client";

import { getPrizeTier, TIER_EMOJI } from "@/lib/scoring";
import type { PrizeTier } from "@/lib/types";

const TIER_COLORS: Record<PrizeTier, string> = {
  gold: "var(--pixel-gold)",
  silver: "var(--pixel-silver)",
  bronze: "var(--pixel-bronze)",
  participation: "var(--pixel-blue)",
};

const TIER_LABELS: Record<PrizeTier, string> = {
  gold: "GOLD TIER",
  silver: "SILVER TIER",
  bronze: "BRONZE TIER",
  participation: "NICE TRY",
};

export function ScoreGauge({ score }: { score: number }) {
  const tier = getPrizeTier(score);
  const color = TIER_COLORS[tier];
  const segments = 20;
  const filled = Math.round((score / 100) * segments);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-40 h-40 sm:w-48 sm:h-48">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {Array.from({ length: segments }).map((_, i) => {
            const angle = (i / segments) * 360;
            const rad = (angle * Math.PI) / 180;
            const inner = 38;
            const outer = 46;
            const x1 = 50 + inner * Math.cos(rad);
            const y1 = 50 + inner * Math.sin(rad);
            const x2 = 50 + outer * Math.cos(rad);
            const y2 = 50 + outer * Math.sin(rad);
            const active = i < filled;

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={active ? color : "var(--pixel-bg)"}
                strokeWidth="3"
                strokeLinecap="square"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl sm:text-4xl">{TIER_EMOJI}</span>
          <span
            className="font-[family-name:var(--font-press-start)] text-xl sm:text-2xl mt-1"
            style={{ color }}
          >
            {score}%
          </span>
        </div>
      </div>
      {/* <span
        className="font-[family-name:var(--font-press-start)] text-[8px] sm:text-[10px] tracking-wider"
        style={{ color }}
      >
        {TIER_LABELS[tier]}
      </span> */}
    </div>
  );
}
