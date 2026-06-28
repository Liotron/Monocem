export type FeatureIconName = "drop" | "trowel" | "palette" | "shield" | "brick" | "clock" | "check";

export function pickFeatureIcon(text: string): FeatureIconName {
  const t = text.toLowerCase();
  if (/(waterproof|water|wet|moisture|submersion)/.test(t)) return "drop";
  if (/(hand|trowel|artisan|hand-applied|tactile)/.test(t)) return "trowel";
  if (/(colour|color|pigment|shade|palette)/.test(t)) return "palette";
  if (/(durable|resist|traffic|tough|crack|anti-slip|scratch|hardwear)/.test(t)) return "shield";
  if (/(over existing|substrate|seam|join|floor|wall|layer|coat)/.test(t)) return "brick";
  if (/(fast|quick|time|dispatch|day|hour|deliver|dry|coverage|within)/.test(t)) return "clock";
  return "check";
}

const paths: Record<FeatureIconName, React.ReactNode> = {
  drop: (
    <path
      d="M9 2C9 2 4 8 4 11.5C4 14 6.24 16 9 16C11.76 16 14 14 14 11.5C14 8 9 2 9 2Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  ),
  trowel: (
    <>
      <path d="M9 2L15 8L9 11L3 8L9 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M9 11V16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </>
  ),
  palette: (
    <>
      <path
        d="M9 2.5C5.13 2.5 2 5.5 2 9.2C2 12.6 4.7 15.5 8.2 15.5C8.7 15.5 9 15.1 9 14.7C9 14.4 8.85 14.2 8.7 14C8.5 13.7 8.4 13.5 8.4 13.2C8.4 12.6 8.9 12.1 9.5 12.1H11.3C13.4 12.1 15.5 10.4 15.5 7.9C15.5 4.8 12.6 2.5 9 2.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="5.6" cy="8" r="0.9" fill="currentColor" />
      <circle cx="7.8" cy="5.6" r="0.9" fill="currentColor" />
      <circle cx="11" cy="5.8" r="0.9" fill="currentColor" />
    </>
  ),
  shield: (
    <>
      <path d="M9 2L15 4.3V8.6C15 12.4 12.6 14.8 9 15.7C5.4 14.8 3 12.4 3 8.6V4.3L9 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6.5 8.7L8.3 10.5L11.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  brick: (
    <>
      <rect x="2" y="3" width="6" height="3" stroke="currentColor" strokeWidth="1.2" />
      <rect x="10" y="3" width="6" height="3" stroke="currentColor" strokeWidth="1.2" />
      <rect x="6" y="7.5" width="6" height="3" stroke="currentColor" strokeWidth="1.2" />
      <rect x="2" y="12" width="6" height="3" stroke="currentColor" strokeWidth="1.2" />
      <rect x="10" y="12" width="6" height="3" stroke="currentColor" strokeWidth="1.2" />
    </>
  ),
  clock: (
    <>
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 5.5V9L11.5 10.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  check: (
    <>
      <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 9.2L8.2 11.4L12.2 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

interface FeatureIconProps {
  name?: FeatureIconName;
  text?: string;
  className?: string;
}

export default function FeatureIcon({ name, text, className = "" }: FeatureIconProps) {
  const resolved = name ?? pickFeatureIcon(text ?? "");
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className={className} aria-hidden="true">
      {paths[resolved]}
    </svg>
  );
}
