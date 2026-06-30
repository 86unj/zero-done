"use client";

import { useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { MessageForm } from "@/components/game/MessageForm";
import { getRandomChallengePersonality } from "@/lib/personalities";
import { getRandomScenario } from "@/lib/scenarios";

export default function ChallengePlayPage() {
  const { scenario, personality } = useMemo(
    () => ({
      scenario: getRandomScenario(),
      personality: getRandomChallengePersonality(),
    }),
    [],
  );

  return (
    <>
      <Header />
      <main className="flex-1 w-full max-w-lg mx-auto px-4 py-4 sm:py-5 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <MessageForm
          mode="challenge"
          scenario={scenario}
          personality={personality.id}
          personalityEmoji={personality.emoji}
          personalityName={personality.name}
          personalityTagline={personality.tagline}
        />
      </main>
    </>
  );
}
