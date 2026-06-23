"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import { allColours } from "@/lib/data/colours";
import { guideCategories } from "@/lib/data/guides";

const menuColourNames = ["Soft White", "Sand", "Stone", "Honey", "Terracotta", "Steel", "Anthracite", "Charcoal"];
const menuColours = menuColourNames
  .map((name) => allColours.find((c) => c.name === name))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

interface SubLink {
  label: string;
  href: string;
  emphasis?: boolean;
}

interface Category {
  key: string;
  label: string;
  title: string;
  items: SubLink[];
}

const categories: Category[] = [
  {
    key: "installation",
    label: "Installation",
    title: "Installation",
    items: [
      { label: "Floors", href: "/installation/floors" },
      { label: "Walls", href: "/installation/walls" },
      { label: "Bathrooms", href: "/installation/bathrooms" },
      { label: "Kitchens", href: "/installation/kitchens" },
      { label: "Worktops", href: "/installation/worktops" },
      { label: "Stairs", href: "/installation/stairs" },
      { label: "View All Installation", href: "/installation", emphasis: true },
    ],
  },
  {
    key: "inspiration",
    label: "Inspiration",
    title: "Inspiration",
    items: [
      { label: "Residential", href: "/inspiration/residential" },
      { label: "Commercial", href: "/inspiration/commercial" },
      { label: "Projects", href: "/inspiration/projects" },
      { label: "View All Inspiration", href: "/inspiration", emphasis: true },
    ],
  },
  {
    key: "products",
    label: "Products",
    title: "Products",
    items: [
      { label: "Microcement Kits", href: "/products/microcement-kits" },
      { label: "Primer", href: "/products/microcement-primer" },
      { label: "Sealer", href: "/products/microcement-sealer" },
      { label: "Pigments", href: "/products/microcement-pigments" },
      { label: "Tools & Accessories", href: "/products/tools-accessories" },
      { label: "View All Products", href: "/products", emphasis: true },
    ],
  },
  {
    key: "guides",
    label: "Guides",
    title: "Guides",
    items: [
      ...guideCategories.map((cat) => ({ label: cat.label, href: `/learn/category/${cat.slug}` })),
      { label: "View All Guides", href: "/learn", emphasis: true },
    ],
  },
];

const directLinks: SubLink[] = [
  { label: "Locations", href: "/locations" },
  { label: "Trade", href: "/trade" },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [subPanel, setSubPanel] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setSubPanel(null);
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const closeSubPanel = () => setSubPanel(null);

  return (
    <div
      className={`fixed inset-0 z-[60] bg-white/[0.98] backdrop-blur-xl flex flex-col transition-[opacity,transform] duration-[420ms] ease-menu ${
        isOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-full pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between px-8 h-[72px] flex-shrink-0 border-b border-black/[0.08]">
        <div className="flex flex-col gap-[0.1rem]">
          <span className="text-charcoal inline-flex items-center">
            <Logo className="h-[0.95rem] w-auto" />
          </span>
          <span className="font-body text-[0.5rem] font-medium tracking-[0.2em] uppercase text-gold">
            Architectural Microcement
          </span>
        </div>
        <button onClick={onClose} className="p-2 text-charcoal/50 hover:text-charcoal transition-colors" aria-label="Close menu">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" />
            <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      <div className="relative flex-1 overflow-hidden">
        {/* MAIN PANEL */}
        <div
          className={`absolute inset-0 flex flex-col overflow-y-auto transition-transform duration-[450ms] ease-menu ${
            subPanel ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="flex-1 flex flex-col justify-center px-8 py-6">
            <nav className="flex flex-col">
              {categories.map((cat, i) => (
                <button
                  key={cat.key}
                  onClick={() => setSubPanel(cat.key)}
                  style={{ transitionDelay: isOpen ? `${0.05 + i * 0.05}s` : "0s" }}
                  className={`font-display text-[2.1rem] sm:text-[2.75rem] lg:text-[3.25rem] font-light leading-[1.2] text-charcoal min-h-[60px] py-2 border-b border-black/[0.08] flex items-center justify-between gap-4 transition-[color,transform,opacity] duration-300 ease-menu hover:text-gold hover:translate-x-2 ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  {cat.label}
                  <span className="text-[0.55em] opacity-40 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              ))}
              <button
                onClick={() => setSubPanel("colours")}
                style={{ transitionDelay: isOpen ? `${0.05 + categories.length * 0.05}s` : "0s" }}
                className={`font-display text-[2.1rem] sm:text-[2.75rem] lg:text-[3.25rem] font-light leading-[1.2] text-charcoal min-h-[60px] py-2 border-b border-black/[0.08] flex items-center justify-between gap-4 transition-[color,transform,opacity] duration-300 ease-menu hover:text-gold hover:translate-x-2 ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                Colours
                <span className="text-[0.55em] opacity-40">→</span>
              </button>

              <div className="h-px bg-black/[0.08] my-2" />

              {directLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  style={{ transitionDelay: isOpen ? `${0.05 + (categories.length + 1 + i) * 0.05}s` : "0s" }}
                  className={`font-display text-[2.1rem] sm:text-[2.75rem] lg:text-[3.25rem] font-light leading-[1.2] text-charcoal min-h-[60px] py-2 border-b border-black/[0.08] flex items-center transition-[color,transform,opacity] duration-300 ease-menu hover:text-gold hover:translate-x-2 ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <Link href="/get-a-quote" onClick={onClose} className="block w-full min-h-[60px] px-8 bg-charcoal text-white font-body text-[0.7rem] font-medium tracking-[0.18em] uppercase text-center flex items-center justify-center hover:bg-gold transition-colors duration-300">
            Get a Quote
          </Link>
        </div>

        {/* SUB PANELS */}
        {categories.map((cat) => (
          <div
            key={cat.key}
            className={`absolute inset-0 flex flex-col overflow-y-auto px-10 py-6 transition-transform duration-[450ms] ease-menu bg-white/[0.98] ${
              subPanel === cat.key ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button onClick={closeSubPanel} className="inline-flex items-center gap-[0.6rem] font-body text-[0.68rem] font-medium tracking-[0.14em] uppercase text-charcoal/50 hover:text-gold hover:gap-[0.9rem] transition-all py-6 self-start">
              ← Back
            </button>
            <h3 className="font-display text-[2.2rem] font-light text-charcoal mt-3 mb-6">{cat.title}</h3>
            <nav className="flex flex-col">
              {cat.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`py-3 border-b border-black/[0.06] font-body text-[0.95rem] font-light transition-colors ${
                    item.emphasis ? "text-gold" : "text-charcoal/80 hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ))}

        {/* SUB PANEL: COLOURS */}
        <div
          className={`menu-colours-panel absolute inset-0 flex flex-col overflow-y-auto px-10 py-6 transition-transform duration-[450ms] ease-menu isolate ${
            subPanel === "colours" ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button onClick={closeSubPanel} className="relative z-10 inline-flex items-center gap-[0.6rem] font-body text-[0.68rem] font-medium tracking-[0.14em] uppercase text-charcoal/50 hover:text-gold hover:gap-[0.9rem] transition-all py-6 self-start">
            ← Back
          </button>
          <h3 className="relative z-10 font-display text-[2.2rem] font-light text-charcoal mt-3 mb-6">Colours</h3>
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5">
            {menuColours.map((colour, i) => (
              <Link
                key={colour.name}
                href="/colours"
                onClick={onClose}
                className="group flex flex-col items-center gap-[0.65rem] py-2"
              >
                <div className="mc-tile">
                  <div className="mc-tile-face" style={{ "--clr": colour.hex } as React.CSSProperties}>
                    <div className={`mc-tile-grain mc-tile-grain-${(i % 4) + 1}`} />
                    <div className="mc-tile-sheen" />
                  </div>
                  <div className="mc-tile-side" style={{ "--clr": colour.hex } as React.CSSProperties} />
                </div>
                <span className="font-body text-[0.7rem] font-medium tracking-[0.06em] text-charcoal text-center group-hover:text-gold transition-colors">
                  {colour.name}
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/get-a-quote"
            onClick={onClose}
            className="relative z-10 btn-outline-dark self-center mt-10 mb-4"
          >
            Order Samples
          </Link>
        </div>
      </div>
    </div>
  );
}
