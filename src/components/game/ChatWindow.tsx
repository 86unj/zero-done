import Link from "next/link";
import { ReactNode } from "react";
import type { GameMode } from "@/lib/types";

interface ChatWindowProps {
  mode?: GameMode;
  teammateEmoji?: string;
  teammateName: string;
  teammateTagline?: string;
  situation?: string;
  situationMeta?: string;
  headerExtra?: ReactNode;
  composer: ReactNode;
}

function WindowCloseButton() {
  return (
    <Link
      href="/"
      className="shrink-0 w-7 h-7 flex items-center justify-center bg-pixel-red border-2 border-pixel-outline text-pixel-on-bright font-[family-name:var(--font-press-start)] text-[10px] leading-none hover:brightness-110"
      aria-label="Back to home"
    >
      ×
    </Link>
  );
}

export function ChatWindow({
  mode = "quick",
  teammateEmoji = "💬",
  teammateName,
  teammateTagline,
  situation,
  situationMeta,
  headerExtra,
  composer,
}: ChatWindowProps) {
  const isChallenge = mode === "challenge";

  return (
    <div className="game-window flex flex-col overflow-hidden">
      <div
        className={`game-window-titlebar shrink-0 flex items-center gap-2 px-3 py-2 sm:px-4 ${isChallenge ? "game-window-titlebar--challenge" : "game-window-titlebar--quick"}`}
      >
        <div
          className="shrink-0 w-8 h-8 flex items-center justify-center text-lg border-2 border-pixel-outline bg-pixel-bg-light"
          aria-hidden
        >
          {teammateEmoji}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-[family-name:var(--font-press-start)] text-[8px] sm:text-[9px] text-[color:var(--titlebar-text)] truncate">
            {teammateName}
            {isChallenge ? " · CHALLENGE" : ""}
          </p>
          {teammateTagline && (
            <p className="text-sm text-[color:var(--titlebar-text)]/60 truncate leading-tight">
              {teammateTagline}
            </p>
          )}
        </div>
        {headerExtra}
        <WindowCloseButton />
      </div>

      <div className="game-window-body flex flex-col flex-1 min-h-0">
        {situation && (
          <div className="shrink-0 p-4 sm:p-5">
            <div
              className={`game-window-situation p-4 sm:p-5 ${!isChallenge ? "game-window-situation--quick" : ""}`}
            >
              <p className="font-[family-name:var(--font-press-start)] text-[8px] text-[color:var(--game-situation-label)] mb-3 tracking-wide">
                SITUATION
              </p>
              <p className="text-lg sm:text-xl text-pixel-light whitespace-pre-line leading-relaxed">
                {situation}
              </p>
              {situationMeta && (
                <p className="font-[family-name:var(--font-press-start)] text-[7px] text-pixel-light/40 mt-4 tracking-wide">
                  {situationMeta}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="game-window-action shrink-0 p-4 sm:p-5">{composer}</div>
      </div>
    </div>
  );
}
