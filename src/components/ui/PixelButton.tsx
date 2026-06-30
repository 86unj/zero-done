import { ButtonHTMLAttributes } from "react";

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "cta";
}

export function PixelButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: PixelButtonProps) {
  const colors =
    variant === "primary"
      ? "bg-pixel-green text-pixel-on-accent hover:brightness-110"
      : variant === "cta"
        ? "bg-[var(--cta-bg)] text-pixel-on-accent hover:brightness-110"
        : "bg-[var(--pixel-btn-secondary)] text-pixel-light hover:bg-[var(--pixel-btn-secondary-hover)]";

  return (
    <button
      className={`pixel-btn font-[family-name:var(--font-press-start)] text-[10px] sm:text-xs px-5 py-3.5 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed ${colors} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
