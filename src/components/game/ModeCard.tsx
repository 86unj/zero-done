import Link from "next/link";
import { PixelCard } from "@/components/ui/PixelCard";

interface ModeCardProps {
  href: string;
  title: string;
  subtitle: string;
}

export function ModeCard({ href, title, subtitle }: ModeCardProps) {
  return (
    <Link href={href} className="block group">
      <PixelCard className="hover:bg-[var(--pixel-btn-secondary-hover)] transition-colors cursor-pointer group-active:translate-x-[2px] group-active:translate-y-[2px] group-active:shadow-none">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-press-start)] text-xs sm:text-sm text-pixel-yellow leading-relaxed group-hover:text-pixel-orange transition-colors">
              {title}
            </h2>
            <p className="text-base text-pixel-light/55 mt-1.5">{subtitle}</p>
          </div>
          <span
            className="font-[family-name:var(--font-press-start)] text-pixel-green text-2xl group-hover:text-pixel-yellow transition-colors shrink-0"
            aria-hidden
          >
            ▶
          </span>
        </div>
      </PixelCard>
    </Link>
  );
}
