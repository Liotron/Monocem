"use client";

import { useState, FormEvent } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

const surfaces = ["Floors", "Walls", "Bathroom / Wet Room", "Kitchen", "Worktop", "Stairs", "Other"];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    projectType: "",
    surfaces: [] as string[],
    area: "",
    location: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const toggleSurface = (s: string) => {
    setFormData((prev) => ({
      ...prev,
      surfaces: prev.surfaces.includes(s) ? prev.surfaces.filter((x) => x !== s) : [...prev.surfaces, s],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="py-24 lg:py-32 bg-warm-white" id="quote">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <h2 className="font-display font-light text-charcoal text-4xl mb-4">Thank You</h2>
          <p className="font-body font-light text-text-mid text-base leading-relaxed">
            Your enquiry has been received. A member of the MONOCEM team will be in touch within 1–2 business days.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32 bg-warm-white" id="quote">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <FadeUp>
              <SectionLabel className="mb-6">Get a Quote</SectionLabel>
            </FadeUp>
            <FadeUp delay={1}>
              <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                Start Your{" "}
                <em className="italic font-light">Project</em>
              </h2>
            </FadeUp>
            <FadeUp delay={2}>
              <p className="font-body font-light text-text-mid text-base leading-relaxed">
                Tell us about your project and we&apos;ll provide a detailed quote within 1–2 business days. All enquiries are handled personally by our team.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={1}>
            <form onSubmit={handleSubmit} className="space-y-6 pb-24 lg:pb-0">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData((p) => ({ ...p, website: e.target.value }))}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] w-px h-px opacity-0"
              />
              {/* Project type */}
              <div>
                <label className="section-label block mb-3">Project Type</label>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Project Type">
                  {["Installation", "Supply", "Both"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, projectType: type }))}
                      aria-pressed={formData.projectType === type}
                      className={`px-5 py-2.5 text-[10px] font-body font-medium tracking-button uppercase border transition-all duration-200 ${
                        formData.projectType === type
                          ? "bg-charcoal text-white border-charcoal"
                          : "bg-transparent text-charcoal border-charcoal/30 hover:border-charcoal"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Surfaces */}
              <div>
                <label className="section-label block mb-3">Surface(s) Required</label>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Surface(s) Required">
                  {surfaces.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleSurface(s)}
                      aria-pressed={formData.surfaces.includes(s)}
                      className={`px-4 py-2 text-[10px] font-body font-medium tracking-button uppercase border transition-all duration-200 ${
                        formData.surfaces.includes(s)
                          ? "bg-charcoal text-white border-charcoal"
                          : "bg-transparent text-charcoal border-charcoal/30 hover:border-charcoal"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area + Location */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="section-label block mb-2">Area (m²)</label>
                  <input
                    type="text"
                    placeholder="e.g. 25"
                    value={formData.area}
                    onChange={(e) => setFormData((p) => ({ ...p, area: e.target.value }))}
                    className="w-full bg-transparent border border-charcoal/20 px-4 py-3 text-sm font-body font-light text-charcoal placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Location / Postcode</label>
                  <input
                    type="text"
                    placeholder="e.g. SW1A, London"
                    value={formData.location}
                    onChange={(e) => setFormData((p) => ({ ...p, location: e.target.value }))}
                    className="w-full bg-transparent border border-charcoal/20 px-4 py-3 text-sm font-body font-light text-charcoal placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="section-label block mb-2">Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData((p) => ({ ...p, timeline: e.target.value }))}
                  className="w-full bg-transparent border border-charcoal/20 px-4 py-3 text-sm font-body font-light text-charcoal focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">As soon as possible</option>
                  <option value="1-3months">1–3 months</option>
                  <option value="3-6months">3–6 months</option>
                  <option value="planning">Just planning</option>
                </select>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { key: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                  { key: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                  { key: "phone", label: "Phone", placeholder: "+44 ...", type: "tel" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="section-label block mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData] as string}
                      onChange={(e) => setFormData((p) => ({ ...p, [field.key]: e.target.value }))}
                      className="w-full bg-transparent border border-charcoal/20 px-4 py-3 text-sm font-body font-light text-charcoal placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>
                ))}
              </div>

              {/* Notes */}
              <div>
                <label className="section-label block mb-2">Additional Notes</label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your project, inspiration, or specific requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))}
                  className="w-full bg-transparent border border-charcoal/20 px-4 py-3 text-sm font-body font-light text-charcoal placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-[12px] font-body text-red-500">Something went wrong. Please try again or email us directly.</p>
              )}

              <div className="fixed bottom-0 inset-x-0 z-30 bg-warm-white/95 backdrop-blur-sm border-t border-charcoal/10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:static lg:bg-transparent lg:border-0 lg:backdrop-blur-none lg:p-0">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-gold w-full justify-center lg:w-auto disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Submit Enquiry"}
                </button>
              </div>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
