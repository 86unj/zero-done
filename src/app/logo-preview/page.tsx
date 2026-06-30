import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { PixelCorners } from "@/components/graphics/PixelCorners";
import { LOGO_CONCEPTS } from "@/components/graphics/PixelBrandConcepts";

export default function LogoPreviewPage() {
  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-8 sm:py-10">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <p className="font-[family-name:var(--font-press-start)] text-[10px] sm:text-xs text-pixel-yellow">
              NEW LOGO IDEAS
            </p>
            <p className="text-sm text-pixel-light/50 max-w-md mx-auto">
              Fresh directions — no 0% typography. Pure pixel scenes and marks.
            </p>
            <Link
              href="/"
              className="inline-block text-xs text-pixel-light/35 hover:text-pixel-yellow transition-colors"
            >
              ← Back to landing
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {LOGO_CONCEPTS.map(({ id, label, note, Component }) => (
              <PixelCorners key={id} accent="default" className="px-3 py-6 space-y-4">
                <div className="min-h-[120px] flex items-center justify-center px-2">
                  <Component />
                </div>
                <div className="text-center border-t border-pixel-light/10 pt-4 space-y-1">
                  <p className="font-[family-name:var(--font-press-start)] text-[9px] text-pixel-yellow">
                    {label}
                  </p>
                  <p className="text-xs text-pixel-light/40">{note}</p>
                </div>
              </PixelCorners>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
