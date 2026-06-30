"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { GameMode, PlayerResult } from "@/lib/types";
import { formatWorkDone, getTierReaction } from "@/lib/scoring";
import { CATEGORY_LABELS, type ScoreCategory } from "@/lib/types";
import { PixelCard } from "@/components/ui/PixelCard";
import { PixelButton } from "@/components/ui/PixelButton";
import { ScoreBar } from "@/components/ui/ScoreBar";
import { ScoreGauge } from "@/components/graphics/ScoreGauge";

const MODE_PATH: Record<GameMode, string> = {
  quick: "/play/quick",
  challenge: "/play/challenge",
};

export function ResultDisplay({ result }: { result: PlayerResult }) {
  const [displayTotal, setDisplayTotal] = useState(0);

  useEffect(() => {
    const steps = 20;
    const increment = result.total / steps;
    let current = 0;
    const id = setInterval(() => {
      current += increment;
      if (current >= result.total) {
        setDisplayTotal(result.total);
        clearInterval(id);
      } else {
        setDisplayTotal(Math.floor(current));
      }
    }, 50);
    return () => clearInterval(id);
  }, [result.total]);

  const categories = Object.keys(CATEGORY_LABELS) as ScoreCategory[];

  return (
    <div className="space-y-5">
      <PixelCard className="text-center space-y-3">
        <ScoreGauge score={displayTotal} />
        <p className="text-xl leading-relaxed">{formatWorkDone(displayTotal)}</p>
        <p className="text-base text-pixel-light/60">
          {getTierReaction(displayTotal)}
        </p>
      </PixelCard>

      <PixelCard className="space-y-2.5">
        <h3 className="font-[family-name:var(--font-press-start)] text-[10px] text-pixel-yellow mb-1">
          SCORE BREAKDOWN
        </h3>
        {categories.map((cat) => (
          <ScoreBar key={cat} category={cat} score={result[cat]} />
        ))}
      </PixelCard>

      <PixelCard>
        <h3 className="font-[family-name:var(--font-press-start)] text-[10px] text-pixel-yellow mb-2">
          TEAMMATE SAYS
        </h3>
        <p className="text-xl leading-relaxed italic">
          &ldquo;{result.response}&rdquo;
        </p>
      </PixelCard>

      <Link href={MODE_PATH[result.mode]}>
        <PixelButton variant="secondary" className="w-full">
          Try Again
        </PixelButton>
      </Link>
    </div>
  );
}
