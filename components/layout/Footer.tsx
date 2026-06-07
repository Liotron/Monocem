import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl font-light tracking-[0.25em] text-white">
                MONO<span className="text-gold">CEM</span>
              </span>
            </Link>
            <p className="text-[13px] font-body font-light leading-relaxed text-white/50 mb-6">
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
            <p className="section-label mb-6 text-gold/70">Systems</p>
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
                    className="text-[12px] font-body font-light text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-6 text-gold/70">Company</p>
            <ul className="space-y-3">
              {[
                { label: "Products", href: "/products" },
                { label: "Inspiration", href: "/inspiration" },
                { label: "Learn", href: "/learn" },
                { label: "Locations", href: "/locations" },
                { label: "Trade Programme", href: "/trade" },
                { label: "Get a Quote", href: "/get-a-quote" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Use", href: "/terms-of-use" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12px] font-body font-light text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-6 text-gold/70">Contact</p>
            <ul className="space-y-4">
              <li>
                <p className="text-[10px] font-body font-medium tracking-label uppercase text-white/30 mb-1">Email</p>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@monocem.co.uk"}`}
                  className="text-[12px] font-body font-light text-white/50 hover:text-white transition-colors duration-200"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@monocem.co.uk"}
                </a>
              </li>
              <li>
                <p className="text-[10px] font-body font-medium tracking-label uppercase text-white/30 mb-1">WhatsApp</p>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "447000000000"}`}
                  className="text-[12px] font-body font-light text-white/50 hover:text-white transition-colors duration-200"
                >
                  Message us on WhatsApp
                </a>
              </li>
              <li>
                <p className="text-[10px] font-body font-medium tracking-label uppercase text-white/30 mb-1">Coverage</p>
                <p className="text-[12px] font-body font-light text-white/50">
                  Nationwide UK installation
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-body font-light text-white/30">
            © {new Date().getFullYear()} MONOCEM. All rights reserved.
          </p>
          <p className="text-[11px] font-body font-light text-white/20">
            Premium microcement systems — United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
