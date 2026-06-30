import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
  return (
    <header className="w-full px-4 pt-4 pb-0">
      <div className="max-w-lg mx-auto relative">
        <div className="absolute right-0 top-0.5">
          <ThemeToggle />
        </div>
        <Link
          href="/"
          className="flex items-center justify-center py-1 font-[family-name:var(--font-press-start)] text-[10px] sm:text-xs text-[color:var(--nav-brand)] hover:text-[color:var(--nav-brand-hover)] transition-colors"
        >
          0% DONE
        </Link>
        <div className="nav-divider mt-3" />
      </div>
    </header>
  );
}
