import type { Metadata } from "next";
import QuoteForm from "@/components/sections/QuoteForm";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Get a Microcement Quote | Free Estimate | MONOCEM",
  description: "Request a free microcement quote from MONOCEM. Tell us about your project — floors, walls, bathrooms, or worktops — and we'll respond within 1–2 business days.",
  alternates: { canonical: "/get-a-quote" },
};

export default function GetAQuotePage() {
  return (
    <>
      <section
        className="relative pt-40 pb-16 flex items-end"
        style={{ minHeight: "40vh", background: "linear-gradient(160deg, #4a4540 0%, #2e2a26 50%, #1a1816 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <SectionLabel className="mb-4">Enquiry</SectionLabel>
          <h1 className="font-display font-light text-white text-5xl lg:text-6xl leading-tight tracking-tight">
            Get a Free Quote
          </h1>
          <p className="font-body font-light text-white/60 text-lg mt-4 max-w-xl">
            Tell us about your project and we&apos;ll provide a detailed quote within 1–2 business days.
          </p>
        </div>
      </section>

      <QuoteForm />
    </>
  );
}
