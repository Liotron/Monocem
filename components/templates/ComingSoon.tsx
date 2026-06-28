import Link from "next/link";
import Hero from "@/components/sections/Hero";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <>
      <Hero
        eyebrow="Coming Soon"
        headline={title}
        subtext={description}
        primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
        secondaryCta={{ label: "Back to Home", href: "/" }}
        minHeight="70vh"
      />
      <section className="py-16 bg-warm-white border-t border-stone/50 text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="font-body font-light text-text-mid text-sm leading-relaxed mb-5">
            In the meantime, visit our Trade Programme page for pricing, supply, and installer training details, or get in touch directly with the team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/trade" className="btn-outline-dark text-xs">Trade Programme</Link>
            <Link href="/get-a-quote" className="btn-outline-dark text-xs">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
