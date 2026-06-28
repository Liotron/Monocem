"use client";

import { useState, FormEvent } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

const experienceLevels = ["Complete Beginner", "Some DIY Experience", "Experienced Tradesperson"];
const timings = ["As soon as possible", "Next 1–3 months", "Just exploring options"];

export default function TrainingEnquiryForm() {
  const [formData, setFormData] = useState({
    experienceLevel: "",
    timing: "",
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
        body: JSON.stringify({ ...formData, formType: "training-enquiry" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="py-24 lg:py-32 bg-cream" id="training">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <h2 className="font-display font-light text-charcoal text-4xl mb-4">Thank You</h2>
          <p className="font-body font-light text-text-mid text-base leading-relaxed">
            Your training enquiry has been received. A member of our team will be in touch within 1–2 business days with available dates.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32 bg-cream" id="training">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <FadeUp>
              <SectionLabel className="mb-6">Training</SectionLabel>
            </FadeUp>
            <FadeUp delay={1}>
              <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                Just Want <em className="italic font-light">Training?</em>
              </h2>
            </FadeUp>
            <FadeUp delay={2}>
              <p className="font-body font-light text-text-mid text-base leading-relaxed">
                Not ready to apply as an approved installer yet? Enquire about our microcement training course on its own — no commitment required.
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
                <label className="section-label block mb-3">Experience Level</label>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Experience Level">
                  {experienceLevels.map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, experienceLevel: level }))}
                      aria-pressed={formData.experienceLevel === level}
                      className={`px-5 py-2.5 text-[10px] font-body font-medium tracking-button uppercase border transition-all duration-200 ${
                        formData.experienceLevel === level
                          ? "bg-charcoal text-white border-charcoal"
                          : "bg-transparent text-charcoal border-charcoal/30 hover:border-charcoal"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="section-label block mb-2">Preferred Timing</label>
                <select
                  value={formData.timing}
                  onChange={(e) => setFormData((p) => ({ ...p, timing: e.target.value }))}
                  className="w-full bg-transparent border border-charcoal/20 px-4 py-3 text-sm font-body font-light text-charcoal focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
                >
                  <option value="">Select timing</option>
                  {timings.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

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

              <div>
                <label className="section-label block mb-2">Additional Notes</label>
                <textarea
                  rows={4}
                  placeholder="Anything else we should know?"
                  value={formData.notes}
                  onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))}
                  className="w-full bg-transparent border border-charcoal/20 px-4 py-3 text-sm font-body font-light text-charcoal placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-[12px] font-body text-red-500">Something went wrong. Please try again or email us directly.</p>
              )}

              <button type="submit" disabled={status === "sending"} className="btn-gold disabled:opacity-50">
                {status === "sending" ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
