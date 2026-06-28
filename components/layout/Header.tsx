"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import MegaMenu from "./MegaMenu";

const topLinks = [
  { label: "Applications", href: "/installation" },
  { label: "Projects", href: "/inspiration/projects" },
  { label: "Products", href: "/products" },
  { label: "Colours", href: "/colours" },
  { label: "Guides", href: "/learn" },
  { label: "Locations", href: "/locations" },
];

// History-state marker for the open mobile menu, so the browser/device Back
// button closes the menu as its own step instead of skipping straight to
// whatever page was open underneath it.
const MENU_HISTORY_KEY = "mcMobileMenuOpen";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onPopState = (e: PopStateEvent) => {
      setMenuOpen(Boolean((e.state as Record<string, unknown> | null)?.[MENU_HISTORY_KEY]));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const openMenu = () => {
    window.history.pushState({ ...window.history.state, [MENU_HISTORY_KEY]: true }, "", window.location.href);
    setMenuOpen(true);
  };

  // X button / Escape key: consume the history entry we pushed so Back
  // doesn't leave a stale "menu open" entry sitting in history.
  const closeMenu = () => {
    if ((window.history.state as Record<string, unknown> | null)?.[MENU_HISTORY_KEY]) {
      window.history.back();
    } else {
      setMenuOpen(false);
    }
  };

  // Clicking a link inside the menu: just hide the menu locally and let the
  // link's own navigation push its entry on top — the menu's history entry
  // stays in place underneath so Back returns to the menu first.
  const handleMenuNavigate = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-[72px] px-8 flex items-center justify-between bg-[rgba(8,8,8,0.97)] backdrop-blur-md">
        <Link href="/" className="inline-flex items-center text-white hover:text-gold-light transition-colors duration-300" aria-label="MONOCEM">
          <Logo className="h-[1.05rem] w-auto" />
        </Link>

        <nav className="hidden min-[960px]:flex items-center gap-8">
          {topLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.7rem] font-body font-medium tracking-[0.14em] uppercase text-white/75 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-[1.4rem] py-[0.6rem] bg-[#c09660] text-white text-[0.65rem] font-body font-medium tracking-[0.2em] uppercase shadow-[0_0_0_1px_#b8915a] transition-all duration-300 hover:bg-gold hover:gap-3"
          >
            Free Quote
          </Link>
        </nav>

        <button
          onClick={openMenu}
          className="min-[960px]:hidden flex flex-col gap-[5px] p-2"
          aria-label="Open menu"
        >
          <span className="block w-6 h-[1.5px] bg-white transition-all" />
          <span className="block w-6 h-[1.5px] bg-white transition-all" />
          <span className="block w-6 h-[1.5px] bg-white transition-all" />
        </button>
      </header>

      <MegaMenu isOpen={menuOpen} onClose={closeMenu} onNavigate={handleMenuNavigate} />
    </>
  );
}
