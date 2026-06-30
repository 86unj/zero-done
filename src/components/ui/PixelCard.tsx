import { ReactNode } from "react";

export function PixelCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`pixel-border bg-pixel-card p-4 sm:p-5 ${className}`}
    >
      {children}
    </div>
  );
}
