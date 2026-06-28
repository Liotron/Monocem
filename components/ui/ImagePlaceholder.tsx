interface ImagePlaceholderProps {
  label?: string;
  className?: string;
}

/**
 * Branded "no photo yet" fallback — reuses Hero's dark-gradient + noise
 * treatment so empty image slots read as deliberate, not broken.
 * Swap for a real <Image> the moment an asset is provided.
 */
export default function ImagePlaceholder({ label = "Photography coming soon", className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden flex items-center justify-center ${className}`}
      style={{ background: "linear-gradient(160deg, #4a4540 0%, #2e2a26 50%, #1a1816 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="2" y="6" width="24" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.3" className="text-white/35" />
          <circle cx="9" cy="13" r="2.4" stroke="currentColor" strokeWidth="1.3" className="text-white/35" />
          <path d="M2 20L9.5 14L15 18L20 13.5L26 18.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-white/35" />
        </svg>
        <span className="text-[10px] font-body font-medium tracking-label uppercase text-white/40">{label}</span>
      </div>
    </div>
  );
}
