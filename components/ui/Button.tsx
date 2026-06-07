import Link from "next/link";

interface ButtonProps {
  variant?: "gold" | "outline" | "outline-dark" | "charcoal";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variantClasses = {
  gold: "btn-gold",
  outline: "btn-outline",
  "outline-dark": "btn-outline-dark",
  charcoal: "btn-charcoal",
};

export default function Button({
  variant = "gold",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
