import { NextRequest, NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

type SortOption = "top" | "recent" | "funny";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sort = (searchParams.get("sort") ?? "recent") as SortOption;
    const limit = Math.min(
      Number(searchParams.get("limit") ?? 50),
      100,
    );

    const supabase = createServiceClient();
    let query = supabase
      .from("submissions")
      .select("id, mode, total, created_at");

    if (sort === "top") {
      query = query.order("total", { ascending: false });
    } else if (sort === "funny") {
      query = query.order("humor", { ascending: false });
    } else {
      query = query.order("created_at", { ascending: false });
    }

    const { data, error } = await query.limit(limit);

    if (error) {
      console.error("Supabase query error:", error);
      return NextResponse.json(
        { error: "Failed to fetch submissions" },
        { status: 500 },
      );
    }

    return NextResponse.json({ submissions: data ?? [] });
  } catch (err) {
    console.error("Submissions error:", err);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 },
    );
  }
}
