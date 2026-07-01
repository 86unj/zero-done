import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { ModeCard } from "@/components/game/ModeCard";
import { PixelCorners } from "@/components/graphics/PixelCorners";
import { PixelGroupProject } from "@/components/graphics/PixelScenes";
import { ZeroPercentHero } from "@/components/graphics/PixelBrand";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center px-4 py-8 sm:py-10">
        <div className="w-full max-w-lg space-y-8">
          <PixelCorners accent="alert" className="text-center space-y-5 px-2 py-12">
            <ZeroPercentHero />
            <p className="text-lg sm:text-xl text-pixel-light/85 max-w-sm mx-auto leading-relaxed">
              You did nothing on your group project.{" "}<br />
              <span className="text-pixel-yellow">
                Convince your AI teammate to do your share.
              </span>
            </p>
            <div className="flex items-end justify-center gap-6 pt-1">
              <PixelGroupProject className="flex-1 max-w-[220px]" />
            </div>
          </PixelCorners>

          <ModeCard
            href="/play/quick"
            title="Play Now"
            subtitle="45 seconds · 150 characters · one shot"
          />

          <p className="text-center text-sm text-pixel-light/35">
            <Link
              href="/play/challenge"
              className="hover:text-pixel-yellow transition-colors"
            >
              Challenge mode →
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
