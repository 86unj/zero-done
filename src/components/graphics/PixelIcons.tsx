export function PixelPencil({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`image-pixelated ${className}`} aria-hidden>
      <rect x="10" y="1" width="2" height="2" fill="#ef7d57" />
      <rect x="9" y="3" width="2" height="2" fill="#ffcd75" />
      <rect x="8" y="5" width="2" height="2" fill="#ffcd75" />
      <rect x="7" y="7" width="2" height="2" fill="#ffd700" />
      <rect x="6" y="9" width="2" height="2" fill="#ffd700" />
      <rect x="5" y="11" width="2" height="2" fill="#ffd700" />
      <rect x="4" y="13" width="2" height="2" fill="#c49a2a" />
      <rect x="3" y="14" width="2" height="2" fill="#1a1c2c" />
      <rect x="11" y="0" width="2" height="2" fill="#b13e53" />
      <rect x="10" y="2" width="1" height="1" fill="#f4f4f4" />
    </svg>
  );
}

export function PixelStar({
  className = "",
  filled = true,
}: {
  className?: string;
  filled?: boolean;
}) {
  const c = filled ? "#ffcd75" : "#3a3f5c";
  const highlight = filled ? "#ffd700" : "#4a5070";

  return (
    <svg viewBox="0 0 10 10" className={`image-pixelated ${className}`} aria-hidden>
      <rect x="4" y="0" width="2" height="2" fill={highlight} />
      <rect x="3" y="2" width="2" height="2" fill={c} />
      <rect x="5" y="2" width="2" height="2" fill={c} />
      <rect x="2" y="4" width="2" height="2" fill={c} />
      <rect x="6" y="4" width="2" height="2" fill={c} />
      <rect x="4" y="4" width="2" height="2" fill={highlight} />
      <rect x="3" y="6" width="2" height="2" fill={c} />
      <rect x="5" y="6" width="2" height="2" fill={c} />
      <rect x="4" y="8" width="2" height="2" fill={c} />
    </svg>
  );
}

export function PixelStopwatch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`image-pixelated ${className}`} aria-hidden>
      <rect x="6" y="0" width="4" height="2" fill="#c0c0c0" />
      <rect x="7" y="2" width="2" height="1" fill="#888" />
      <rect x="3" y="3" width="10" height="10" fill="#f4f4f4" />
      <rect x="3" y="3" width="10" height="1" fill="#e0e0e0" />
      <rect x="3" y="3" width="1" height="10" fill="#e0e0e0" />
      <rect x="12" y="4" width="1" height="9" fill="#888" />
      <rect x="4" y="12" width="9" height="1" fill="#888" />
      <rect x="7" y="6" width="2" height="4" fill="#b13e53" />
      <rect x="8" y="6" width="1" height="2" fill="#ef7d57" />
      <rect x="5" y="8" width="3" height="1" fill="#b13e53" />
      <rect x="4" y="14" width="2" height="2" fill="#ef7d57" />
      <rect x="10" y="14" width="2" height="2" fill="#ef7d57" />
    </svg>
  );
}

export function PixelLightning({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`image-pixelated ${className}`} aria-hidden>
      <rect x="7" y="1" width="2" height="2" fill="#ffcd75" />
      <rect x="6" y="3" width="2" height="2" fill="#ffcd75" />
      <rect x="5" y="5" width="2" height="2" fill="#ef7d57" />
      <rect x="4" y="7" width="4" height="2" fill="#ffcd75" />
      <rect x="6" y="9" width="2" height="2" fill="#ef7d57" />
      <rect x="7" y="11" width="2" height="2" fill="#ffcd75" />
      <rect x="8" y="13" width="2" height="2" fill="#ef7d57" />
      <rect x="9" y="5" width="2" height="2" fill="#ffd700" />
      <rect x="8" y="7" width="2" height="2" fill="#ffd700" />
    </svg>
  );
}

export function PixelDice({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`image-pixelated ${className}`} aria-hidden>
      <rect x="2" y="2" width="12" height="12" fill="#f4f4f4" />
      <rect x="2" y="2" width="12" height="1" fill="#c0c0c0" />
      <rect x="2" y="2" width="1" height="12" fill="#c0c0c0" />
      <rect x="13" y="3" width="1" height="11" fill="#888" />
      <rect x="3" y="13" width="11" height="1" fill="#888" />
      <rect x="4" y="4" width="2" height="2" fill="#b13e53" />
      <rect x="10" y="4" width="2" height="2" fill="#b13e53" />
      <rect x="7" y="7" width="2" height="2" fill="#b13e53" />
      <rect x="4" y="10" width="2" height="2" fill="#b13e53" />
      <rect x="10" y="10" width="2" height="2" fill="#b13e53" />
    </svg>
  );
}

export function PixelTrophy({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`image-pixelated ${className}`} aria-hidden>
      <rect x="5" y="1" width="6" height="2" fill="#ffd700" />
      <rect x="4" y="3" width="8" height="5" fill="#ffcd75" />
      <rect x="5" y="3" width="6" height="1" fill="#ffd700" />
      <rect x="2" y="4" width="2" height="3" fill="#ef7d57" />
      <rect x="12" y="4" width="2" height="3" fill="#ef7d57" />
      <rect x="1" y="7" width="2" height="2" fill="#ef7d57" />
      <rect x="13" y="7" width="2" height="2" fill="#ef7d57" />
      <rect x="6" y="8" width="4" height="3" fill="#ffd700" />
      <rect x="5" y="11" width="6" height="2" fill="#c49a2a" />
      <rect x="4" y="13" width="8" height="2" fill="#8B6914" />
    </svg>
  );
}

export function PixelChat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`image-pixelated ${className}`} aria-hidden>
      <rect x="1" y="2" width="14" height="9" fill="#6b9bd1" />
      <rect x="1" y="2" width="14" height="1" fill="#8bb5e8" />
      <rect x="1" y="2" width="1" height="9" fill="#8bb5e8" />
      <rect x="14" y="3" width="1" height="8" fill="#4a7ab5" />
      <rect x="2" y="10" width="13" height="1" fill="#4a7ab5" />
      <rect x="3" y="5" width="4" height="1" fill="#f4f4f4" />
      <rect x="3" y="7" width="8" height="1" fill="#f4f4f4" />
      <rect x="2" y="11" width="3" height="3" fill="#6b9bd1" />
      <rect x="1" y="13" width="2" height="2" fill="#6b9bd1" />
    </svg>
  );
}

export function PixelDesk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 20" className={`image-pixelated ${className}`} aria-hidden>
      <rect x="4" y="14" width="24" height="2" fill="#8B6914" />
      <rect x="5" y="16" width="2" height="3" fill="#5C4510" />
      <rect x="25" y="16" width="2" height="3" fill="#5C4510" />
      <rect x="8" y="8" width="8" height="6" fill="#29366f" />
      <rect x="9" y="9" width="6" height="4" fill="#6b9bd1" />
      <rect x="10" y="10" width="4" height="2" fill="#1a1c2c" />
      <rect x="18" y="10" width="6" height="4" fill="#f4f4f4" />
      <rect x="19" y="11" width="4" height="1" fill="#b13e53" />
      <rect x="19" y="13" width="3" height="1" fill="#38b764" />
      <rect x="22" y="6" width="4" height="8" fill="#5d275d" />
      <rect x="23" y="7" width="2" height="2" fill="#ffcd75" />
      <rect x="23" y="10" width="2" height="2" fill="#ef7d57" />
    </svg>
  );
}

export function PixelArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={`image-pixelated ${className}`} aria-hidden>
      <rect x="5" y="1" width="2" height="2" fill="currentColor" />
      <rect x="4" y="3" width="2" height="2" fill="currentColor" />
      <rect x="6" y="3" width="2" height="2" fill="currentColor" />
      <rect x="3" y="5" width="2" height="2" fill="currentColor" />
      <rect x="7" y="5" width="2" height="2" fill="currentColor" />
      <rect x="5" y="5" width="2" height="6" fill="currentColor" />
    </svg>
  );
}
