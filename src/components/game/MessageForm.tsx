"use client";

import { useCallback, useEffect, useState } from "react";
import { LOADING_PHRASES } from "@/lib/loading-phrases";
import { cachePlayerResult } from "@/lib/result-cache";
import { useRouter } from "next/navigation";
import type { GameMode, PlayerResult } from "@/lib/types";
import { useInputTimer, INPUT_TIME_LIMIT_SEC } from "@/lib/use-input-timer";
import { PixelButton } from "@/components/ui/PixelButton";
import { CharCounter } from "@/components/ui/CharCounter";
import { InputTimer } from "@/components/ui/InputTimer";
import { ChatWindow } from "@/components/game/ChatWindow";
import { PersonalityBadge } from "@/components/graphics/PersonalityBadge";

interface MessageFormProps {
  mode: GameMode;
  scenario: string;
  personality: string;
  personalityEmoji?: string;
  personalityName?: string;
  personalityTagline?: string;
}

export function MessageForm({
  mode,
  scenario,
  personality,
  personalityEmoji,
  personalityName,
  personalityTagline,
}: MessageFormProps) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timeUp, setTimeUp] = useState(false);
  const [started, setStarted] = useState(false);
  const [loadingPhraseIndex, setLoadingPhraseIndex] = useState(0);
  const isQuick = mode === "quick";

  useEffect(() => {
    if (!loading) {
      setLoadingPhraseIndex(0);
      return;
    }

    setLoadingPhraseIndex(Math.floor(Math.random() * LOADING_PHRASES.length));
    const id = setInterval(() => {
      setLoadingPhraseIndex((i) => (i + 1) % LOADING_PHRASES.length);
    }, 2500);

    return () => clearInterval(id);
  }, [loading]);

  const chatEmoji = isQuick ? "💬" : personalityEmoji;
  const chatName = isQuick ? "Teammate" : (personalityName ?? "Teammate");
  const chatTagline = isQuick ? undefined : personalityTagline;

  const submit = useCallback(async () => {
    if (loading || timeUp) return;
    const trimmed = message.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          mode,
          scenario: mode === "challenge" ? scenario : undefined,
          personality,
        }),
      });

      const data = (await res.json()) as PlayerResult & { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");

      cachePlayerResult(data);
      router.push(`/result/${data.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit");
      setLoading(false);
    }
  }, [loading, timeUp, message, mode, scenario, personality, router]);

  const handleExpire = useCallback(() => {
    if (message.trim()) {
      submit();
    } else {
      setTimeUp(true);
    }
  }, [message, submit]);

  const { formatted, isUrgent, isCritical, expired, progress } = useInputTimer(
    handleExpire,
    INPUT_TIME_LIMIT_SEC,
    started,
  );

  const composer =
    timeUp && !message.trim() ? (
      <div className="space-y-3">
        <p className="text-center text-pixel-light/50 text-base">Time expired.</p>
        <PixelButton onClick={() => router.push("/")} className="w-full">
          Try Again
        </PixelButton>
      </div>
    ) : !started ? (
      <PixelButton variant="cta" onClick={() => setStarted(true)} className="w-full">
        Start
      </PixelButton>
    ) : (
      <div className="space-y-3">
        {!loading && !expired && (
          <InputTimer
            formatted={formatted}
            isUrgent={isUrgent}
            isCritical={isCritical}
            progress={progress}
          />
        )}
        <div className="flex gap-2 items-end">
          <div className="relative flex-1">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, 150))}
              disabled={loading || expired}
              placeholder="Write your message..."
              rows={3}
              enterKeyHint="send"
              autoComplete="off"
              autoCorrect="on"
              spellCheck
              autoFocus
              className="game-input text-base leading-relaxed p-3 pr-14 min-h-[5.5rem] disabled:opacity-50"
              maxLength={150}
            />
            <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
              <CharCounter current={message.length} />
            </div>
          </div>
          <PixelButton
            onClick={submit}
            disabled={loading || !message.trim() || expired}
            className="shrink-0 !px-3 !py-3 min-w-[3.25rem]"
            aria-label="Send message"
          >
            {loading ? "…" : "→"}
          </PixelButton>
        </div>
        {loading && (
          <p
            className="text-center text-pixel-light/60 text-base animate-pulse"
            aria-live="polite"
          >
            {LOADING_PHRASES[loadingPhraseIndex]}
          </p>
        )}
        {error && <p className="text-pixel-red text-base">{error}</p>}
      </div>
    );

  return (
    <div className="space-y-4">
      {!isQuick && personalityName && (
        <PersonalityBadge
          personalityId={personality}
          emoji={personalityEmoji}
          name={personalityName}
          tagline={personalityTagline}
          variant="game"
        />
      )}

      <ChatWindow
        mode={mode}
        teammateEmoji={chatEmoji}
        teammateName={chatName}
        teammateTagline={chatTagline}
        situation={scenario}
        situationMeta={
          !started ? `150 characters · ${INPUT_TIME_LIMIT_SEC} seconds` : undefined
        }
        composer={composer}
      />
    </div>
  );
}
