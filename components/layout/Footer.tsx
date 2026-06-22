import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white/[0.55]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-8">
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
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@monocem.co.uk"}`}
                  className="text-[0.82rem] font-body font-light text-white/50 hover:text-white transition-colors duration-200"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@monocem.co.uk"}
                </a>
              </li>
              <li>
                <p className="text-[10px] font-body font-medium tracking-label uppercase text-white/30 mb-1">WhatsApp</p>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "447000000000"}`}
                  className="text-[0.82rem] font-body font-light text-white/50 hover:text-white transition-colors duration-200"
                >
                  Message us on WhatsApp
                </a>
              </li>
              <li>
                <p className="text-[10px] font-body font-medium tracking-label uppercase text-white/30 mb-1">Coverage</p>
                <p className="text-[0.82rem] font-body font-light text-white/50">
                  Nationwide UK installation
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.72rem] font-body font-light text-white/40">
            © {new Date().getFullYear()} MONOCEM Ltd. All rights reserved.
          </p>
          <p className="text-[0.72rem] font-body font-light text-white/30">
            Premium microcement systems — United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
