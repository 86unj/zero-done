import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import type { GameMode, PlayerResult } from "@/lib/types";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from("submissions")
      .select(
        "id, mode, humor, creativity, negotiation, logic, persuasion, total, ai_response",
      )
      .eq("id", id)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const result: PlayerResult = {
      id: data.id,
      mode: data.mode as GameMode,
      humor: data.humor,
      creativity: data.creativity,
      negotiation: data.negotiation,
      logic: data.logic,
      persuasion: data.persuasion,
      total: data.total,
      response: data.ai_response,
    };

    return NextResponse.json(result);
  } catch (err) {
    console.error("Submission fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch submission" },
      { status: 500 },
    );
  }
}
