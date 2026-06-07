interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ children, className = "", light = false }: SectionLabelProps) {
  return (
    <p className={`section-label ${light ? "text-gold/70" : "text-gold"} ${className}`}>
      {children}
    </p>
  );
}
