import { CATEGORY_LABELS, type ScoreCategory } from "@/lib/types";
import { PixelStar } from "@/components/graphics/PixelIcons";

const STAR_COUNT = 5;

export function ScoreBar({
  category,
  score,
  max = 20,
}: {
  category: ScoreCategory;
  score: number;
  max?: number;
}) {
  const filled = Math.round((score / max) * STAR_COUNT);

  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-pixel-light/75 shrink-0">
        {CATEGORY_LABELS[category]}
      </span>
      <div className="flex gap-0.5 items-center" aria-label={`${score} out of ${max}`}>
        {Array.from({ length: STAR_COUNT }).map((_, i) => (
          <PixelStar key={i} filled={i < filled} className="w-3.5 h-3.5" />
        ))}
      </div>
    </div>
  );
}
