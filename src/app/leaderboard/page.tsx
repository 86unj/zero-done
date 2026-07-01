"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { PageHeader } from "@/components/layout/PageHeader";
import { PixelCard } from "@/components/ui/PixelCard";
import { PixelTrophy } from "@/components/graphics/PixelIcons";
import type { PublicSubmission } from "@/lib/types";

type Tab = "top" | "recent";

function timeAgo(date: string) {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

const RANK_STYLES = [
  {
    medal: "🥇",
    border: "border-pixel-gold",
    glow: "shadow-[0_0_16px_rgba(255,215,0,0.25)]",
  },
  {
    medal: "🥈",
    border: "border-pixel-silver",
    glow: "shadow-[0_0_12px_rgba(192,192,192,0.2)]",
  },
  {
    medal: "🥉",
    border: "border-pixel-bronze",
    glow: "shadow-[0_0_12px_rgba(205,127,50,0.2)]",
  },
];

export default function LeaderboardPage() {
  const [tab, setTab] = useState<Tab>("top");
  const [submissions, setSubmissions] = useState<PublicSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/submissions?sort=${tab}&limit=50`)
      .then((r) => r.json())
      .then((data) => setSubmissions(data.submissions ?? []))
      .catch(() => setSubmissions([]))
      .finally(() => setLoading(false));
  }, [tab]);

  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-6 max-w-lg mx-auto w-full space-y-4">
        <PageHeader
          icon={<PixelTrophy className="w-12 h-12" />}
          title="LEADERBOARD"
        />

        <div className="flex gap-2">
          {(["top", "recent"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 font-[family-name:var(--font-press-start)] text-[8px] sm:text-[10px] pixel-border-sm transition-colors ${
                tab === t
                  ? "bg-pixel-yellow text-pixel-bg"
                  : "bg-pixel-bg-light text-pixel-light hover:bg-pixel-purple/30"
              }`}
            >
              {t === "top" ? "TOP SCORES" : "RECENT"}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-xl py-8 text-pixel-light/60">
            Loading...
          </p>
        ) : submissions.length === 0 ? (
          <PixelCard className="text-center py-8">
            <p className="text-xl text-pixel-light/60">
              No submissions yet. Be the first!
            </p>
          </PixelCard>
        ) : (
          <div className="space-y-3">
            {submissions.map((s, i) => {
              const rankStyle =
                tab === "top" && i < 3 ? RANK_STYLES[i] : null;

              return (
                <PixelCard
                  key={s.id}
                  className={`flex justify-between items-center gap-3 ${rankStyle ? `${rankStyle.border} border-2 ${rankStyle.glow}` : ""}`}
                >
                  <div className="space-y-1 min-w-0">
                    <span className="font-[family-name:var(--font-press-start)] text-pixel-yellow text-[10px]">
                      {rankStyle
                        ? `${rankStyle.medal} #${i + 1}`
                        : tab === "top"
                          ? `#${i + 1}`
                          : s.mode.toUpperCase()}
                    </span>
                    <p className="text-pixel-light/50 text-base">
                      {s.mode.toUpperCase()} · {timeAgo(s.created_at)}
                    </p>
                  </div>
                  <span className="font-[family-name:var(--font-press-start)] text-pixel-green text-lg shrink-0">
                    {s.total}%
                  </span>
                </PixelCard>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}
