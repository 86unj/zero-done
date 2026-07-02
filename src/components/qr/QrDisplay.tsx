"use client";

import QRCode from "react-qr-code";
import { ZeroPercentHero } from "@/components/graphics/PixelBrand";
import { PixelCorners } from "@/components/graphics/PixelCorners";
import { QrBackdrop } from "@/components/qr/QrBackdrop";

type QrDisplayProps = {
  playUrl: string;
};

export function QrDisplay({ playUrl }: QrDisplayProps) {
  return (
    <div className="min-h-screen flex flex-col bg-pixel-bg relative overflow-hidden showcase-scanlines">
      <QrBackdrop />

      <div className="absolute inset-4 sm:inset-8 border-2 border-pixel-outline/80 pointer-events-none z-10" />
      <div className="absolute inset-6 sm:inset-10 border border-pixel-outline/25 pointer-events-none z-10" />

      {/* <div
        className="absolute top-6 left-6 sm:top-8 sm:left-8 opacity-40 pointer-events-none z-10"
        aria-hidden
      >
        <span className="font-[family-name:var(--font-press-start)] text-pixel-red text-sm sm:text-lg">
          0<span className="text-pixel-yellow">%</span>
        </span>
      </div>
      <div
        className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-40 pointer-events-none z-10"
        aria-hidden
      >
        <span className="font-[family-name:var(--font-press-start)] text-pixel-red text-sm sm:text-lg">
          0<span className="text-pixel-yellow">%</span>
        </span>
      </div> */}

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 sm:p-12 gap-8 sm:gap-10">
        <div className="flex justify-center opacity-80 scale-75 sm:scale-90 animate-float">
          <ZeroPercentHero />
        </div>

        <div className="relative">
          <div
            className="absolute -inset-6 sm:-inset-8 rounded-full bg-pixel-yellow/15 blur-3xl animate-pulse"
            aria-hidden
          />
          <PixelCorners className="relative p-1">
            <div className="bg-white p-4 sm:p-6 pixel-border shadow-[0_0_40px_rgba(255,205,117,0.15)]">
              <QRCode
                value={playUrl}
                size={420}
                bgColor="#ffffff"
                fgColor="#1a1c2c"
                level="M"
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              />
            </div>
          </PixelCorners>
        </div>

        <div className="text-center space-y-1 max-w-lg px-4">
          <p className="font-[family-name:var(--font-press-start)] text-[8px] sm:text-[10px] text-pixel-light/40 tracking-wider">
            OR VISIT
          </p>
          <p className="text-sm sm:text-base text-pixel-yellow/90 break-all">
            {playUrl}
          </p>
        </div>
      </div>
    </div>
  );
}
