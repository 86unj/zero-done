import type { EvaluationResult, PrizeTier } from "./types";

export function getPrizeTier(total: number): PrizeTier {
  if (total >= 80) return "gold";
  if (total >= 60) return "silver";
  if (total >= 40) return "bronze";
  return "participation";
}

export function validateTotalScores(result: EvaluationResult): boolean {
  const sum =
    result.humor +
    result.creativity +
    result.negotiation +
    result.logic +
    result.persuasion;
  return sum === result.total;
}

export function formatWorkDone(total: number): string {
  if (total === 0) {
    return "Still 0% done. Your teammate didn't budge.";
  }
  return `Teammate pickup: ${total}% of the work.`;
}

export const TIER_EMOJI = "📋";

export function getTierReaction(total: number): string {
  if (total === 0) {
    return "Pitch whiffed. They're still on the team—doing zero.";
  }
  if (total >= 80) {
    return "You're moral support now. They're writing everything.";
  }
  if (total >= 60) {
    return "They're carrying it. Show up in sweatpants.";
  }
  if (total >= 40) {
    return "Some traction. Keep the Wi-Fi excuse ready.";
  }
  return "Barely a dent. Still more than anyone expected.";
}

export function toPlayerResult(
  id: string,
  result: EvaluationResult,
): { id: string } & EvaluationResult {
  return { id, ...result };
}

export function stripPrizeTier<T extends { prize_tier?: PrizeTier }>(
  row: T,
): Omit<T, "prize_tier"> {
  const { prize_tier: _, ...rest } = row;
  return rest;
}
