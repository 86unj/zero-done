import type { PlayerResult } from "./types";

const PREFIX = "lazy-teammate-result:";

export function cachePlayerResult(result: PlayerResult): void {
  sessionStorage.setItem(PREFIX + result.id, JSON.stringify(result));
}

export function readCachedPlayerResult(id: string): PlayerResult | null {
  try {
    const raw = sessionStorage.getItem(PREFIX + id);
    if (!raw) return null;
    return JSON.parse(raw) as PlayerResult;
  } catch {
    return null;
  }
}
