"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { ResultDisplay } from "@/components/game/ResultDisplay";
import { readCachedPlayerResult } from "@/lib/result-cache";
import type { PlayerResult } from "@/lib/types";

async function fetchResult(id: string): Promise<PlayerResult | null> {
  const res = await fetch(`/api/submissions/${id}`);
  if (!res.ok) return null;
  return res.json() as Promise<PlayerResult>;
}

async function fetchResultWithRetry(
  id: string,
  attempts = 5,
  delayMs = 300,
): Promise<PlayerResult | null> {
  for (let i = 0; i < attempts; i++) {
    const result = await fetchResult(id);
    if (result) return result;
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
  return null;
}

export function ResultLoader({ id }: { id: string }) {
  const [result, setResult] = useState<PlayerResult | null>(() =>
    readCachedPlayerResult(id),
  );
  const [loading, setLoading] = useState(() => !readCachedPlayerResult(id));

  useEffect(() => {
    if (result) return;

    let cancelled = false;

    void fetchResultWithRetry(id).then((fetched) => {
      if (cancelled) return;
      setResult(fetched);
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [id, result]);

  if (loading) {
    return (
      <p className="text-center text-pixel-light/60 text-base animate-pulse">
        Loading results…
      </p>
    );
  }

  if (!result) notFound();

  return <ResultDisplay result={result} />;
}
