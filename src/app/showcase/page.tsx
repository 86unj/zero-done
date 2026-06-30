"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createBrowserClient } from "@/lib/supabase/client";
import { getPrizeTier, TIER_EMOJI } from "@/lib/scoring";
import { ZeroPercentHero } from "@/components/graphics/PixelBrand";
import { PixelCard } from "@/components/ui/PixelCard";
import type { PublicSubmission } from "@/lib/types";

type Feed = "top" | "funny" | "recent";

const FEED_LABELS: Record<Feed, string> = {
  top: "HIGHEST SCORES",
  funny: "FUNNIEST",
  recent: "RECENT",
};

const FEED_ICONS: Record<Feed, string> = {
  top: "🏆",
  funny: "😂",
  recent: "🕐",
};

const ROTATE_MS = 8000;

export default function ShowcasePage() {
  const [feed, setFeed] = useState<Feed>("top");
  const [submissions, setSubmissions] = useState<PublicSubmission[]>([]);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const loadFeed = useCallback(async (sort: Feed) => {
    try {
      const res = await fetch(`/api/submissions?sort=${sort}&limit=20`);
      const data = await res.json();
      setSubmissions(data.submissions ?? []);
      setIndex(0);
      setProgress(0);
    } catch {
      setSubmissions([]);
    }
  }, []);

  useEffect(() => {
    loadFeed(feed);
  }, [feed, loadFeed]);

  useEffect(() => {
    const feeds: Feed[] = ["top", "funny", "recent"];
    let feedIdx = 0;

    const rotateFeed = setInterval(() => {
      feedIdx = (feedIdx + 1) % feeds.length;
      setFeed(feeds[feedIdx]);
    }, ROTATE_MS * 3);

    return () => clearInterval(rotateFeed);
  }, []);

  useEffect(() => {
    if (submissions.length === 0) return;

    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(1, elapsed / ROTATE_MS));
    }, 50);

    const advance = setInterval(() => {
      setIndex((i) => (i + 1) % submissions.length);
      setProgress(0);
    }, ROTATE_MS);

    return () => {
      clearInterval(tick);
      clearInterval(advance);
    };
  }, [submissions, index]);

  useEffect(() => {
    try {
      const supabase = createBrowserClient();
      const channel = supabase
        .channel("showcase")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "submissions" },
          () => {
            if (feed === "recent") loadFeed("recent");
          },
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    } catch {
      const poll = setInterval(() => loadFeed(feed), 15000);
      return () => clearInterval(poll);
    }
  }, [feed, loadFeed]);

  const current = submissions[index];
  const tier = current ? getPrizeTier(current.total) : null;

  const tierColor =
    tier === "gold"
      ? "text-pixel-gold"
      : tier === "silver"
        ? "text-pixel-silver"
        : tier === "bronze"
          ? "text-pixel-bronze"
          : "text-pixel-green";

  return (
    <div className="min-h-screen flex flex-col bg-pixel-bg relative overflow-hidden showcase-scanlines">
      {/* decorative frame */}
      <div className="absolute inset-4 sm:inset-8 border-2 border-pixel-outline pointer-events-none" />
      <div className="absolute inset-6 sm:inset-10 border border-pixel-outline/30 pointer-events-none" />

      {/* corner marks */}
      <div className="absolute top-6 left-6 opacity-50" aria-hidden>
        <span className="font-[family-name:var(--font-press-start)] text-pixel-red text-lg">
          0<span className="text-pixel-yellow">%</span>
        </span>
      </div>
      <div className="absolute top-6 right-6 opacity-50" aria-hidden>
        <span className="font-[family-name:var(--font-press-start)] text-pixel-red text-lg">
          0<span className="text-pixel-yellow">%</span>
        </span>
      </div>

      {/* feed tabs */}
      <div className="flex justify-center gap-3 pt-10 sm:pt-14 px-4">
        {(["top", "funny", "recent"] as Feed[]).map((f) => (
          <div
            key={f}
            className={`font-[family-name:var(--font-press-start)] text-[8px] sm:text-[10px] px-3 py-1.5 pixel-border-sm transition-all ${
              feed === f
                ? "bg-pixel-yellow text-pixel-bg"
                : "bg-pixel-bg-light/50 text-pixel-light/40"
            }`}
          >
            {FEED_ICONS[f]} {FEED_LABELS[f]}
          </div>
        ))}
      </div>

      {/* main content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-16">
        <AnimatePresence mode="wait">
          {current ? (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-4xl w-full"
            >
              <PixelCard className="!p-8 sm:!p-12 text-center space-y-8">
                <div className="flex items-center justify-center gap-4">
                  <span className={`font-[family-name:var(--font-press-start)] text-5xl sm:text-7xl lg:text-8xl ${tierColor}`}>
                    {current.total}%
                  </span>
                  <span className="text-3xl sm:text-5xl">
                    {TIER_EMOJI}
                  </span>
                </div>
                <p className="text-lg text-pixel-light/50">
                  {current.mode.toUpperCase()} · {index + 1}/{submissions.length}
                </p>
              </PixelCard>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center space-y-6"
            >
              <div className="flex justify-center opacity-60 scale-90">
                <ZeroPercentHero />
              </div>
              <p className="text-2xl sm:text-3xl text-pixel-light/60">
                Waiting for players...
              </p>
              <p className="text-lg text-pixel-light/30">
                Scan the QR code to play!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* progress bar */}
      <div className="px-8 sm:px-16 pb-4">
        <div className="h-2 bg-pixel-bg border border-pixel-outline overflow-hidden">
          <div
            className="h-full bg-pixel-yellow transition-none"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* footer branding */}
      <div className="pb-8 text-center space-y-2">
        <p className="font-[family-name:var(--font-press-start)] text-[10px] sm:text-xs text-pixel-yellow">
          0% DONE
        </p>
        <p className="font-[family-name:var(--font-press-start)] text-[8px] text-pixel-light/30">
          SCAN QR TO PLAY
        </p>
      </div>
    </div>
  );
}
