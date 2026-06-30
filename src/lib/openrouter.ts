import {
  evaluationResultSchema,
  type EvaluationResult,
} from "./types";
import { buildSystemPrompt, buildUserPrompt } from "./prompts";
import type { PersonalityDef } from "./personalities";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_MAX_TOKENS = 500;

function parseModelJson(text: string): unknown {
  try {
    return JSON.parse(text.trim());
  } catch {
    const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    const candidate = fenced?.[1]?.trim() ?? text.match(/\{[\s\S]*\}/)?.[0];
    if (!candidate) throw new Error("No JSON object in model response");
    return JSON.parse(candidate);
  }
}

function getMaxTokens(): number {
  const raw = process.env.OPENROUTER_MAX_TOKENS;
  if (!raw) return DEFAULT_MAX_TOKENS;
  const parsed = Number.parseInt(raw, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_MAX_TOKENS;
}

export async function evaluateMessage(
  scenario: string,
  message: string,
  personality: PersonalityDef,
): Promise<EvaluationResult> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const model =
    process.env.OPENROUTER_MODEL ?? "google/gemini-2.0-flash-001";

  if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is not configured");
  }

  const systemPrompt = buildSystemPrompt();
  const userPrompt = buildUserPrompt(scenario, message, personality);

  const attempt = async (): Promise<EvaluationResult> => {
    const res = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.9,
        max_tokens: getMaxTokens(),
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`OpenRouter error ${res.status}: ${err}`);
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content;
    if (!content) throw new Error("Empty response from OpenRouter");

    const parsed = evaluationResultSchema.safeParse(parseModelJson(content));
    if (!parsed.success) {
      throw new Error(`Invalid AI response: ${parsed.error.message}`);
    }

    const result = parsed.data;
    const sum =
      result.humor +
      result.creativity +
      result.negotiation +
      result.logic +
      result.persuasion;

    if (sum !== result.total) {
      result.total = sum;
    }

    return result;
  };

  try {
    return await attempt();
  } catch {
    return await attempt();
  }
}
