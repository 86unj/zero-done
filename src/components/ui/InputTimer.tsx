export function InputTimer({
  formatted,
  isUrgent,
  isCritical,
  progress = 1,
}: {
  formatted: string;
  isUrgent: boolean;
  isCritical: boolean;
  progress?: number;
}) {
  const color = isCritical
    ? "text-pixel-red"
    : isUrgent
      ? "text-pixel-yellow"
      : "text-pixel-light";

  const barColor = isCritical
    ? "bg-pixel-red"
    : isUrgent
      ? "bg-pixel-yellow"
      : "bg-pixel-green";

  return (
    <div className="flex-1 space-y-1">
      <div
        className={`font-[family-name:var(--font-press-start)] text-xs flex items-center gap-1.5 ${color} ${isCritical ? "animate-pulse" : ""}`}
      >
        <span>⏱</span> {formatted}
      </div>
      <div className="h-2 bg-pixel-bg border border-pixel-outline overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ease-linear ${barColor}`}
          style={{ width: `${Math.max(0, Math.min(100, progress * 100))}%` }}
        />
      </div>
    </div>
  );
}
