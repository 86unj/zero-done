export function ZeroPercentHero({ className = "" }: { className?: string }) {
  return (
    <p
      className={`font-[family-name:var(--font-press-start)] text-2xl sm:text-3xl leading-relaxed ${className}`}
    >
      <span className="text-pixel-red">0</span>
      <span className="text-pixel-yellow">% DONE</span>
    </p>
  );
}
