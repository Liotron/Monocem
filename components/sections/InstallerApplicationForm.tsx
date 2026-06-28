"use client";

import { useState, FormEvent } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

const backgrounds = ["Tiler", "Plasterer", "Builder / General Contractor", "Flooring Specialist", "Other"];
const experienceLevels = ["Less than 1 year", "1–3 years", "3–5 years", "5+ years"];

export default function InstallerApplicationForm() {
  const [formData, setFormData] = useState({
    tradeBackground: "",
    experience: "",
    location: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "installer-application" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="py-24 lg:py-32 bg-charcoal-2" id="apply">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <h2 className="font-display font-light text-white text-4xl mb-4">Thank You</h2>
          <p className="font-body font-light text-white/60 text-base leading-relaxed">
            Your installer application has been received. Our team will review it and be in touch within 1–2 business days.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32 bg-charcoal-2" id="apply">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <FadeUp>
              <SectionLabel light className="mb-6">Apply</SectionLabel>
            </FadeUp>
            <FadeUp delay={1}>
              <h2 className="font-display font-light text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                Ready to <em className="italic font-light">Apply?</em>
              </h2>
            </FadeUp>
            <FadeUp delay={2}>
              <p className="font-body font-light text-white/60 text-base leading-relaxed">
                Apply to the MONOCEM Approved Installer Programme. Tell us about your trade background and the types of projects you work on.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={1}>
            <form onSubmit={handleSubmit} className="space-y-6">
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
              <div>
                <label className="section-label !text-gold/70 block mb-3">Trade Background</label>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Trade Background">
                  {backgrounds.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, tradeBackground: b }))}
                      aria-pressed={formData.tradeBackground === b}
                      className={`px-5 py-2.5 text-[10px] font-body font-medium tracking-button uppercase border transition-all duration-200 ${
                        formData.tradeBackground === b
                          ? "bg-white text-charcoal border-white"
                          : "bg-transparent text-white border-white/30 hover:border-white"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="section-label !text-gold/70 block mb-2">Years of Experience</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData((p) => ({ ...p, experience: e.target.value }))}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm font-body font-light text-white focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
                  >
                    <option value="" className="text-charcoal">Select experience</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level} className="text-charcoal">{level}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="section-label !text-gold/70 block mb-2">Coverage Area</label>
                  <input
                    type="text"
                    placeholder="e.g. Greater London"
                    value={formData.location}
                    onChange={(e) => setFormData((p) => ({ ...p, location: e.target.value }))}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm font-body font-light text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { key: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                  { key: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                  { key: "phone", label: "Phone", placeholder: "+44 ...", type: "tel" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="section-label !text-gold/70 block mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData] as string}
                      onChange={(e) => setFormData((p) => ({ ...p, [field.key]: e.target.value }))}
                      className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm font-body font-light text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="section-label !text-gold/70 block mb-2">Additional Notes</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about the types of projects you typically work on..."
                  value={formData.notes}
                  onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))}
                  className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm font-body font-light text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-[12px] font-body text-red-400">Something went wrong. Please try again or email us directly.</p>
              )}

              <button type="submit" disabled={status === "sending"} className="btn-gold disabled:opacity-50">
                {status === "sending" ? "Sending..." : "Submit Application"}
              </button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
