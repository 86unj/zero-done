import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full px-4 pt-0 pb-6 mt-auto">
      <div className="max-w-lg mx-auto">
        <div className="nav-divider mb-4" />
        <nav className="flex justify-center gap-6 text-sm text-pixel-light/40">
          <Link href="/leaderboard" className="hover:text-pixel-yellow transition-colors">
            Scores
          </Link>
          {/* <Link href="/showcase" className="hover:text-pixel-yellow transition-colors">
            Showcase
          </Link> */}
        </nav>
      </div>
    </footer>
  );
}
