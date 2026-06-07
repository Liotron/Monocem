"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

const navLinks = [
  {
    label: "Installation",
    href: "/installation",
    children: [
      { label: "Floors", href: "/installation/floors" },
      { label: "Walls", href: "/installation/walls" },
      { label: "Bathrooms", href: "/installation/bathrooms" },
      { label: "Kitchens", href: "/installation/kitchens" },
      { label: "Worktops", href: "/installation/worktops" },
      { label: "Stairs", href: "/installation/stairs" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Microcement Kits", href: "/products/microcement-kits" },
      { label: "Primer", href: "/products/microcement-primer" },
      { label: "Sealer", href: "/products/microcement-sealer" },
      { label: "Pigments", href: "/products/microcement-pigments" },
      { label: "Tools & Accessories", href: "/products/tools-accessories" },
    ],
  },
  { label: "Inspiration", href: "/inspiration" },
  { label: "Learn", href: "/learn" },
  { label: "Trade", href: "/trade" },
  { label: "Locations", href: "/locations" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-brand ease-brand ${
          scrolled ? "bg-[#080808]/98 shadow-lg shadow-black/20" : "bg-[#080808]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <span className="font-display text-2xl font-light tracking-[0.25em] text-white group-hover:text-gold-light transition-colors duration-brand ease-brand">
                MONO<span className="text-gold">CEM</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="text-[11px] font-body font-medium tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors duration-brand ease-brand py-2"
                  >
                    {link.label}
                  </Link>
                  {link.children && activeDropdown === link.href && (
                    <div className="absolute top-full left-0 pt-2 min-w-48">
                      <div className="bg-[#0e0e0e] border border-white/10 py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-[10px] font-body font-medium tracking-[0.12em] uppercase text-white/60 hover:text-white hover:bg-white/5 transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/get-a-quote"
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-[10px] font-body font-medium tracking-button uppercase text-white border border-gold/60 hover:border-gold hover:bg-gold/10 transition-all duration-brand ease-brand"
              >
                Get a Quote
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-white"
                aria-label="Open menu"
              >
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                  <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="4" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="8" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
