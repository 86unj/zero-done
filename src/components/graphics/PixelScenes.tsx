export function PixelGroupProject({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 36"
      className={`image-pixelated w-full max-w-[240px] mx-auto ${className}`}
      aria-hidden
    >
      {/* desk */}
      <rect x="6" y="26" width="52" height="3" fill="#5C4510" />
      <rect x="8" y="29" width="3" height="4" fill="#3d2e0a" />
      <rect x="53" y="29" width="3" height="4" fill="#3d2e0a" />
      {/* laptop */}
      <rect x="24" y="18" width="16" height="9" fill="#29366f" />
      <rect x="25" y="19" width="14" height="6" fill="#6b9bd1" />
      <rect x="26" y="20" width="12" height="4" fill="#1a1c2c" />
      <rect x="22" y="27" width="20" height="2" fill="#888" />
      {/* screen glow */}
      <rect x="27" y="21" width="4" height="1" fill="#8bb5e8" />
      <rect x="33" y="22" width="3" height="1" fill="#38b764" />
      {/* books */}
      <rect x="10" y="20" width="5" height="6" fill="#b13e53" />
      <rect x="15" y="21" width="4" height="5" fill="#38b764" />
      <rect x="19" y="22" width="4" height="4" fill="#ffcd75" />
      {/* coffee + steam */}
      <rect x="46" y="21" width="5" height="5" fill="#f4f4f4" />
      <rect x="47" y="22" width="3" height="3" fill="#ef7d57" />
      <rect x="47" y="18" width="1" height="2" fill="#aaa" />
      <rect x="49" y="17" width="1" height="2" fill="#aaa" />
      {/* sticky note */}
      <rect x="42" y="14" width="6" height="5" fill="#ffcd75" />
      <rect x="43" y="16" width="4" height="1" fill="#ef7d57" />
      {/* deadline clock */}
      <rect x="12" y="10" width="8" height="8" fill="#f4f4f4" />
      <rect x="13" y="11" width="6" height="6" fill="#1a1c2c" />
      <rect x="15" y="13" width="1" height="3" fill="#b13e53" />
      <rect x="15" y="15" width="3" height="1" fill="#b13e53" />
    </svg>
  );
}

export function PixelCoffee({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 14" className={`image-pixelated ${className}`} aria-hidden>
      <rect x="2" y="4" width="8" height="8" fill="#f4f4f4" />
      <rect x="3" y="5" width="6" height="5" fill="#ef7d57" />
      <rect x="1" y="5" width="1" height="4" fill="#c0c0c0" />
      <rect x="10" y="6" width="2" height="3" fill="#c0c0c0" />
      <rect x="3" y="2" width="2" height="2" fill="#aaa" />
      <rect x="5" y="1" width="2" height="2" fill="#aaa" />
      <rect x="7" y="2" width="2" height="2" fill="#aaa" />
    </svg>
  );
}

export function PixelBooks({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 12" className={`image-pixelated ${className}`} aria-hidden>
      <rect x="1" y="3" width="4" height="8" fill="#b13e53" />
      <rect x="5" y="4" width="4" height="7" fill="#38b764" />
      <rect x="9" y="5" width="4" height="6" fill="#ffcd75" />
      <rect x="2" y="2" width="10" height="1" fill="#f4f4f4" />
    </svg>
  );
}
