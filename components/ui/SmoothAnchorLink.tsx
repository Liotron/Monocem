"use client";

import Link from "next/link";
import { MouseEvent, ReactNode } from "react";

interface SmoothAnchorLinkProps {
  href: `#${string}`;
  className?: string;
  children: ReactNode;
}

export default function SmoothAnchorLink({ href, className, children }: SmoothAnchorLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", href);
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
