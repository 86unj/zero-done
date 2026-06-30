export function CharCounter({
  current,
  max = 150,
}: {
  current: number;
  max?: number;
}) {
  const ratio = current / max;
  const color =
    ratio >= 1
      ? "text-pixel-red"
      : ratio >= 0.87
        ? "text-pixel-yellow"
        : "text-pixel-light/50";

  return (
    <span className={`text-sm font-mono tabular-nums ${color}`}>
      {current}/{max}
    </span>
  );
}
