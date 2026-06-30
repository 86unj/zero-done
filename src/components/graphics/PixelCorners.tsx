import { ReactNode } from "react";

export function PixelCorners({
  children,
  className = "",
  accent = "default",
}: {
  children: ReactNode;
  className?: string;
  accent?: "default" | "alert";
}) {
  const topColor =
    accent === "alert" ? "border-pixel-red" : "border-pixel-yellow";
  const bottomColor = "border-pixel-yellow";

  return (
    <div className={`relative ${className}`}>
      <span
        className={`absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 ${topColor} pointer-events-none`}
        aria-hidden
      />
      <span
        className={`absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 ${topColor} pointer-events-none`}
        aria-hidden
      />
      <span
        className={`absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 ${bottomColor} pointer-events-none`}
        aria-hidden
      />
      <span
        className={`absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 ${bottomColor} pointer-events-none`}
        aria-hidden
      />
      {children}
    </div>
  );
}
