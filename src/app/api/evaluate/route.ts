import { after, NextRequest, NextResponse } from "next/server";
import { evaluateMessage } from "@/lib/openrouter";
import { getPersonalityById } from "@/lib/personalities";
import { getPrizeTier } from "@/lib/scoring";
import { saveSubmission } from "@/lib/save-submission";
import { evaluateRequestSchema, type PlayerResult } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = evaluateRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid request" },
        { status: 400 },
      );
    }

    const { message, mode, scenario, personality: personalityId } = parsed.data;
    const personality = getPersonalityById(personalityId);

    if (!personality) {
      return NextResponse.json(
        { error: "Unknown personality" },
        { status: 400 },
      );
    }

    const scenarioText =
      scenario ??
      (mode === "quick"
        ? "Your group project is due tomorrow. You have completed 0% of the work."
        : "Convince your teammate to help with the group project.");

    const evaluation = await evaluateMessage(scenarioText, message, personality);
    const id = crypto.randomUUID();
    const prizeTier = getPrizeTier(evaluation.total);

    after(async () => {
      try {
        await saveSubmission({
          id,
          message,
          mode,
          scenario: scenario ?? null,
          personality: personalityId,
          evaluation,
          prizeTier,
        });
      } catch (err) {
        console.error("Background submission save error:", err);
      }
    });

    const result: PlayerResult = {
      id,
      mode,
      ...evaluation,
    };

    return NextResponse.json(result);
  } catch (err) {
    console.error("Evaluate error:", err);
    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "AI evaluation failed. Please try again.",
      },
      { status: 503 },
    );
  }
}
