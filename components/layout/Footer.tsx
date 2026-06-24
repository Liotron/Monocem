"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@monocem.co.uk";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "447000000000";
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+44 7774 708801";

interface SimpleLink {
  label: string;
  href: string;
}

interface RichLink extends SimpleLink {
  description: string;
  icon: React.ReactNode;
}

function IconChevron({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className}>
      <path d="M2.5 5L7 9.5L11.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3" width="13" height="10" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 4L8 9L14 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M5.5 2.5C5 2.5 4.5 3 4.3 3.6C3.8 5.1 4.2 7.4 6 9.2C7.8 11 10.1 11.4 11.6 10.9C12.2 10.7 12.7 10.2 12.7 9.7L12.5 8.3C12.45 8 12.2 7.75 11.9 7.7L10.3 7.4C10.05 7.35 9.8 7.43 9.6 7.6L9.1 8.05C8.2 7.55 7.55 6.9 7.05 6L7.5 5.5C7.67 5.3 7.75 5.05 7.7 4.8L7.4 3.2C7.35 2.9 7.1 2.65 6.8 2.6L5.5 2.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="1.5" width="13" height="13" rx="4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="11.7" cy="4.3" r="0.8" fill="currentColor" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2L16 6L9 10L2 6L9 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M2 9.5L9 13.5L16 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 13L9 17L16 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCap() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 3L16.5 6.5L9 10L1.5 6.5L9 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M4.5 8V12C4.5 12 6.5 13.5 9 13.5C11.5 13.5 13.5 12 13.5 12V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 6.5V11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconPerson() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="5.5" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.5 16C2.5 12.4 5.4 9.5 9 9.5C12.6 9.5 15.5 12.4 15.5 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 16.5C9 16.5 14.5 11.8 14.5 7.5C14.5 4.46 12.04 2 9 2C5.96 2 3.5 4.46 3.5 7.5C3.5 11.8 9 16.5 9 16.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M4.5 1.5H11L14.5 5V16.5H4.5V1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M11 1.5V5H14.5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M6.5 9H12.5M6.5 11.5H12.5M6.5 14H10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 4.5C9 4.5 7 3 3.5 3V14C7 14 9 15.5 9 15.5C9 15.5 11 14 14.5 14V3C11 3 9 4.5 9 4.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M9 4.5V15.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function IconTruck() {
  return (
    <svg width="21" height="17" viewBox="0 0 20 16" fill="none">
      <path d="M1 3H12V12H1V3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M12 6.5H15.5L18.5 9.5V12H12V6.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="4.5" cy="13" r="1.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="14.5" cy="13" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M3.5 15.5C3.5 15.5 2.5 10 6 6.5C9 3.5 15.5 2.5 15.5 2.5C15.5 2.5 14.5 9 11 12.5C8 15.5 3.5 15.5 3.5 15.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSwatch() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2 11L6 7L9 10L16 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const exploreLinks: SimpleLink[] = [
  { label: "Applications", href: "/installation" },
  { label: "Colours", href: "/colours" },
  { label: "Projects", href: "/inspiration/projects" },
  { label: "Guides", href: "/learn" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/get-a-quote" },
];

const resourceLinks: SimpleLink[] = [
  { label: "What is Microcement?", href: "/learn/what-is-microcement" },
  { label: "Care & Maintenance", href: "/learn/microcement-maintenance" },
  { label: "Sample Pack", href: "/sample-pack" },
  { label: "FAQ", href: "/faq" },
];

const professionalLinks: RichLink[] = [
  { label: "Systems", description: "Explore the complete MONOCEM professional system.", href: "/trade/systems", icon: <IconLayers /> },
  { label: "Training Academy", description: "Professional microcement training and certification.", href: "/trade/training-academy", icon: <IconCap /> },
  { label: "Become an Installer", description: "Join the MONOCEM installer network.", href: "/trade/installer-programme", icon: <IconPerson /> },
  { label: "Approved Installers", description: "Find a certified MONOCEM installer near you.", href: "/trade/approved-installers", icon: <IconPin /> },
  { label: "Technical Data Sheets", description: "Specifications, coverage rates and downloads.", href: "/trade/technical-data", icon: <IconDoc /> },
  { label: "Installation Guides", description: "Professional application documentation.", href: "/trade/installation-guides", icon: <IconBook /> },
];

const supportLinks: SimpleLink[] = [
  { label: "Delivery & Returns", href: "/delivery-returns" },
  { label: "Terms & Conditions", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies Policy", href: "/cookies-policy" },
];

const trustBadges: { label: string; icon: React.ReactNode }[] = [
  { label: "Fast UK Delivery", icon: <IconTruck /> },
  { label: "Low VOC Environmentally Friendly", icon: <IconLeaf /> },
  { label: "Designed in the UK, Made in Europe", icon: <IconSwatch /> },
];

function SimpleLinkRow({ label, href }: SimpleLink) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between py-2.5 text-[0.82rem] font-body font-light text-white/55 hover:text-white transition-colors duration-200"
    >
      {label}
      <span className="text-white/25 text-xs">→</span>
    </Link>
  );
}

function RichLinkRow({ label, description, href, icon }: RichLink) {
  return (
    <Link href={href} className="group flex items-start gap-3 py-3.5 border-t border-white/[0.06] first:border-t-0">
      <span className="mt-0.5 text-white/40 group-hover:text-gold transition-colors duration-200 shrink-0">{icon}</span>
      <span className="flex-1">
        <span className="block text-[0.84rem] font-body font-medium text-white/85 mb-0.5 group-hover:text-white transition-colors duration-200">
          {label}
        </span>
        <span className="block text-[0.72rem] font-body font-light text-white/40 leading-snug">{description}</span>
      </span>
      <span className="mt-1 text-white/25 group-hover:text-gold transition-colors duration-200 shrink-0">→</span>
    </Link>
  );
}

function FooterAccordionSection({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/[0.08]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-body text-[0.7rem] font-medium tracking-[0.18em] uppercase text-white/70">{label}</span>
        <IconChevron className={`text-white/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-brand ${
          isOpen ? "max-h-[1200px] opacity-100 pb-2" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggleSection = (key: string) => setOpenSection((prev) => (prev === key ? null : key));

  return (
    <footer className="bg-[#111111] text-white/[0.55]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-8">
        {/* ---------- DESKTOP / TABLET (unchanged) ---------- */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand column */}
            <div>
              <Link href="/" className="inline-flex items-center text-white mb-3">
                <Logo className="h-[0.84rem] w-auto" />
              </Link>
              <p className="text-[0.82rem] font-body font-light leading-[1.7] text-white/50 mb-6 max-w-[260px]">
                Premium microcement systems for floors, walls, bathrooms, and worktops. Supply and professional installation across the UK.
              </p>
              <div className="flex gap-4">
                {["Instagram", "Pinterest", "Houzz"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-[10px] font-body font-medium tracking-label uppercase text-white/30 hover:text-gold transition-colors duration-brand ease-brand"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Systems */}
            <div>
              <p className="font-body text-[0.65rem] font-medium tracking-[0.18em] uppercase text-white/35 mb-6">Systems</p>
              <ul className="space-y-3">
                {[
                  { label: "Microcement Floors", href: "/installation/floors" },
                  { label: "Microcement Walls", href: "/installation/walls" },
                  { label: "Bathrooms & Wet Rooms", href: "/installation/bathrooms" },
                  { label: "Kitchens", href: "/installation/kitchens" },
                  { label: "Worktops", href: "/installation/worktops" },
                  { label: "Stairs", href: "/installation/stairs" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.82rem] font-body font-light text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-body text-[0.65rem] font-medium tracking-[0.18em] uppercase text-white/35 mb-6">Company</p>
              <ul className="space-y-3">
                {[
                  { label: "Products", href: "/products" },
                  { label: "Inspiration", href: "/inspiration" },
                  { label: "Guides", href: "/learn" },
                  { label: "Locations", href: "/locations" },
                  { label: "Trade Programme", href: "/trade" },
                  { label: "Get a Quote", href: "/get-a-quote" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms of Use", href: "/terms-of-use" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.82rem] font-body font-light text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-body text-[0.65rem] font-medium tracking-[0.18em] uppercase text-white/35 mb-6">Contact</p>
              <ul className="space-y-4">
                <li>
                  <p className="text-[10px] font-body font-medium tracking-label uppercase text-white/30 mb-1">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-[0.82rem] font-body font-light text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {email}
                  </a>
                </li>
                <li>
                  <p className="text-[10px] font-body font-medium tracking-label uppercase text-white/30 mb-1">WhatsApp</p>
                  <a
                    href={`https://wa.me/${whatsapp}`}
                    className="text-[0.82rem] font-body font-light text-white/50 hover:text-white transition-colors duration-200"
                  >
                    Message us on WhatsApp
                  </a>
                </li>
                <li>
                  <p className="text-[10px] font-body font-medium tracking-label uppercase text-white/30 mb-1">Coverage</p>
                  <p className="text-[0.82rem] font-body font-light text-white/50">Nationwide UK installation</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[0.72rem] font-body font-light text-white/40">
              © {new Date().getFullYear()} MONOCEM Ltd. All rights reserved.
            </p>
            <p className="text-[0.72rem] font-body font-light text-white/30">Premium microcement systems — United Kingdom</p>
          </div>
        </div>

        {/* ---------- MOBILE (new) ---------- */}
        <div className="lg:hidden">
          <div className="pb-[18px] border-b border-white/[0.08]">
            <Link href="/" className="inline-flex items-center text-white mb-3">
              <Logo className="h-[0.84rem] w-auto" />
            </Link>
            <p className="text-[0.62rem] font-body font-medium tracking-[0.2em] uppercase text-white/35 mb-4">
              Architectural Microcement
            </p>
            <p className="text-[0.82rem] font-body font-light leading-[1.7] text-white/60 mb-4 max-w-[320px]">
              Premium microcement systems for floors, walls, bathrooms, and worktops. Supply and professional installation across the UK.
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-3">
                <span className="text-white/35 shrink-0">
                  <IconEmail />
                </span>
                <a href={`mailto:${email}`} className="text-[0.82rem] font-body font-light text-white/55 hover:text-white transition-colors duration-200">
                  {email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white/35 shrink-0">
                  <IconPhone />
                </span>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="text-[0.82rem] font-body font-light text-white/55 hover:text-white transition-colors duration-200"
                >
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white/35 shrink-0">
                  <IconInstagram />
                </span>
                <a
                  href="https://instagram.com/monocem.surface"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.82rem] font-body font-light text-white/55 hover:text-white transition-colors duration-200"
                >
                  @monocem.surface
                </a>
              </li>
            </ul>
          </div>

          <div>
            <FooterAccordionSection label="Explore" isOpen={openSection === "explore"} onToggle={() => toggleSection("explore")}>
              {exploreLinks.map((link) => (
                <SimpleLinkRow key={link.href} {...link} />
              ))}
            </FooterAccordionSection>
            <FooterAccordionSection label="Resources" isOpen={openSection === "resources"} onToggle={() => toggleSection("resources")}>
              {resourceLinks.map((link) => (
                <SimpleLinkRow key={link.href} {...link} />
              ))}
            </FooterAccordionSection>
            <FooterAccordionSection
              label="For Professionals"
              isOpen={openSection === "professionals"}
              onToggle={() => toggleSection("professionals")}
            >
              {professionalLinks.map((link) => (
                <RichLinkRow key={link.href} {...link} />
              ))}
            </FooterAccordionSection>
            <FooterAccordionSection label="Support" isOpen={openSection === "support"} onToggle={() => toggleSection("support")}>
              {supportLinks.map((link) => (
                <SimpleLinkRow key={link.href} {...link} />
              ))}
            </FooterAccordionSection>
          </div>

          <div className="grid grid-cols-3 gap-4 py-6 border-t border-white/[0.08] mt-2">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-start gap-2">
                <span className="text-white/40">{badge.icon}</span>
                <span className="text-[0.71rem] font-body font-light text-white/45 leading-snug">{badge.label}</span>
              </div>
            ))}
          </div>

          <p className="text-[0.72rem] font-body font-light text-white/40 pt-2">
            © {new Date().getFullYear()} MONOCEM Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
