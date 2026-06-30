import { z } from "zod";

export type GameMode = "quick" | "challenge";

export type ChallengePersonality =
  | "overachiever"
  | "burnt-out"
  | "passive-aggressive"
  | "professor"
  | "lazy";
export type Personality = ChallengePersonality;

export type PrizeTier = "gold" | "silver" | "bronze" | "participation";

export const evaluateRequestSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, "Message cannot be empty")
    .max(150, "Message must be 150 characters or less"),
  mode: z.enum(["quick", "challenge"]),
  scenario: z.string().optional(),
  personality: z.string(),
});

export type EvaluateRequest = z.infer<typeof evaluateRequestSchema>;

export const evaluationResultSchema = z.object({
  humor: z.number().int().min(0).max(20),
  creativity: z.number().int().min(0).max(20),
  negotiation: z.number().int().min(0).max(20),
  logic: z.number().int().min(0).max(20),
  persuasion: z.number().int().min(0).max(20),
  total: z.number().int().min(0).max(100),
  response: z.string().min(1),
});

export type EvaluationResult = z.infer<typeof evaluationResultSchema>;

export interface PlayerResult extends EvaluationResult {
  id: string;
  mode: GameMode;
}

export interface Submission {
  id: string;
  message: string;
  mode: GameMode;
  scenario: string | null;
  personality: string;
  humor: number;
  creativity: number;
  negotiation: number;
  logic: number;
  persuasion: number;
  total: number;
  ai_response: string;
  prize_tier: PrizeTier;
  created_at: string;
}

export type PublicSubmission = Pick<
  Submission,
  "id" | "mode" | "total" | "created_at"
>;

export const CATEGORY_LABELS = {
  humor: "Humor",
  creativity: "Creativity",
  negotiation: "Negotiation",
  logic: "Logic",
  persuasion: "Persuasion",
} as const;

export type ScoreCategory = keyof typeof CATEGORY_LABELS;
