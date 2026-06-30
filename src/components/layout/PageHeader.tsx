import { ReactNode } from "react";

export function PageHeader({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center space-y-3 mb-2">
      <div className="flex justify-center">{icon}</div>
      <h1 className="font-[family-name:var(--font-press-start)] text-[10px] sm:text-xs text-pixel-yellow leading-relaxed">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-pixel-light/70 max-w-xs mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
