import { createServiceClient } from "@/lib/supabase/server";
import type { EvaluationResult, GameMode, PrizeTier } from "./types";

export interface SaveSubmissionInput {
  id: string;
  message: string;
  mode: GameMode;
  scenario: string | null;
  personality: string;
  evaluation: EvaluationResult;
  prizeTier: PrizeTier;
}

export async function saveSubmission(input: SaveSubmissionInput): Promise<void> {
  const { evaluation } = input;
  const supabase = createServiceClient();
  const { error } = await supabase.from("submissions").insert({
    id: input.id,
    message: input.message,
    mode: input.mode,
    scenario: input.scenario,
    personality: input.personality,
    humor: evaluation.humor,
    creativity: evaluation.creativity,
    negotiation: evaluation.negotiation,
    logic: evaluation.logic,
    persuasion: evaluation.persuasion,
    total: evaluation.total,
    ai_response: evaluation.response,
    prize_tier: input.prizeTier,
  });

  if (error) {
    throw error;
  }
}
