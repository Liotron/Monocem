"use client";

import Link from "next/link";
import { useEffect } from "react";

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-400 ease-brand ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 bg-[#0a0a0a] flex flex-col transition-transform duration-400 ease-brand ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
          <span className="font-display text-xl font-light tracking-[0.25em] text-white">
            MONO<span className="text-gold">CEM</span>
          </span>
          <button onClick={onClose} className="p-2 text-white/60 hover:text-white" aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="1" y1="1" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5" />
              <line x1="19" y1="1" x2="1" y2="19" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-6">
          {navLinks.map((link) => (
            <div key={link.href} className="mb-1">
              <Link
                href={link.href}
                onClick={onClose}
                className="block py-3 text-[11px] font-body font-medium tracking-[0.15em] uppercase text-white/80 hover:text-white border-b border-white/5 transition-colors duration-200"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4 mt-1 mb-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className="block py-2 text-[10px] font-body font-medium tracking-[0.12em] uppercase text-white/40 hover:text-white/70 transition-colors duration-200"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="px-6 py-6 border-t border-white/10">
          <Link
            href="/get-a-quote"
            onClick={onClose}
            className="btn-gold w-full justify-center"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
