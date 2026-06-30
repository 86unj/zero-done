import type { Personality } from "@/lib/types";

const PERSONALITY_STYLES: Record<
  Personality,
  { glow: string; bg: string; gameBg: string }
> = {
  overachiever: {
    glow: "shadow-[0_0_20px_rgba(255,215,0,0.4)]",
    bg: "bg-pixel-gold/10",
    gameBg: "bg-pixel-gold/10",
  },
  "burnt-out": {
    glow: "shadow-[0_0_20px_rgba(239,125,87,0.4)]",
    bg: "bg-pixel-orange/10",
    gameBg: "bg-pixel-orange/10",
  },
  "passive-aggressive": {
    glow: "shadow-[0_0_20px_rgba(56,183,100,0.3)]",
    bg: "bg-pixel-green/10",
    gameBg: "bg-pixel-green/10",
  },
  professor: {
    glow: "shadow-[0_0_20px_rgba(107,155,209,0.4)]",
    bg: "bg-pixel-blue/10",
    gameBg: "bg-pixel-blue/10",
  },
  lazy: {
    glow: "shadow-[0_0_20px_rgba(93,39,93,0.5)]",
    bg: "bg-pixel-purple/20",
    gameBg: "bg-pixel-purple/20",
  },
};

interface PersonalityBadgeProps {
  personalityId?: string;
  emoji?: string;
  name?: string;
  tagline?: string;
  variant?: "default" | "game";
}

export function PersonalityBadge({
  personalityId,
  emoji,
  name,
  tagline,
  variant = "default",
}: PersonalityBadgeProps) {
  if (!name) return null;

  const style =
    PERSONALITY_STYLES[personalityId as Personality] ??
    PERSONALITY_STYLES.lazy;

  if (variant === "game") {
    return (
      <div
        className={`game-window flex items-center gap-3 p-3 sm:p-4 ${style.gameBg}`}
      >
        <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-3xl sm:text-4xl border-2 border-pixel-outline bg-pixel-bg">
          {emoji}
        </div>
        <div className="min-w-0 space-y-1">
          <p className="font-[family-name:var(--font-press-start)] text-[9px] sm:text-[10px] text-pixel-yellow leading-relaxed">
            {name}
          </p>
          {tagline && (
            <p className="text-base text-pixel-light/75 leading-snug">{tagline}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`pixel-border flex items-center gap-4 p-4 ${style.bg} ${style.glow}`}
    >
      <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-4xl sm:text-5xl border-4 border-pixel-outline bg-pixel-bg/60">
        {emoji}
      </div>
      <div className="min-w-0 space-y-1">
        <p className="font-[family-name:var(--font-press-start)] text-[10px] sm:text-xs text-pixel-yellow leading-relaxed">
          {name}
        </p>
        {tagline && (
          <p className="text-lg text-pixel-light/80 leading-snug">{tagline}</p>
        )}
      </div>
    </div>
  );
}
