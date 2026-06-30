import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { PixelCard } from "@/components/ui/PixelCard";
import { PixelButton } from "@/components/ui/PixelButton";
import { ZeroPercentHero } from "@/components/graphics/PixelBrand";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <PixelCard className="max-w-md w-full text-center space-y-6">
          <p className="font-[family-name:var(--font-press-start)] text-pixel-red text-sxl">
            404
          </p>
          <p className="text-2xl leading-relaxed">
            This page ghosted the group project.
          </p>
          <p className="text-lg text-pixel-light/60">
            This page is at 0% done. So are you.
          </p>
          <Link href="/">
            <PixelButton className="w-full">Go Home</PixelButton>
          </Link>
        </PixelCard>
      </main>
    </>
  );
}
