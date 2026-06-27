"use client";

import { useState, FormEvent } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";

const tradeTypes = ["Builder", "Renovator", "Interior Designer", "Retailer", "Other"];
const volumes = ["1–2 projects/month", "3–5 projects/month", "6+ projects/month", "Not sure yet"];

export default function TradeAccountForm() {
  const [formData, setFormData] = useState({
    tradeType: "",
    companyName: "",
    projectVolume: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formType: "trade-account" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="py-24 lg:py-32 bg-warm-white" id="trade-account">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <h2 className="font-display font-light text-charcoal text-4xl mb-4">Thank You</h2>
          <p className="font-body font-light text-text-mid text-base leading-relaxed">
            Your trade account application has been received. Our trade team will be in touch within 1–2 business days.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 lg:py-32 bg-warm-white" id="trade-account">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <FadeUp>
              <SectionLabel className="mb-6">Trade Account</SectionLabel>
            </FadeUp>
            <FadeUp delay={1}>
              <h2 className="font-display font-light text-charcoal text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                Open a Trade <em className="italic font-light">Account</em>
              </h2>
            </FadeUp>
            <FadeUp delay={2}>
              <p className="font-body font-light text-text-mid text-base leading-relaxed">
                Tell us about your business and we&apos;ll set up trade pricing and a dedicated account manager for you.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="section-label block mb-3">Trade Type</label>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Trade Type">
                  {tradeTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, tradeType: type }))}
                      aria-pressed={formData.tradeType === type}
                      className={`px-5 py-2.5 text-[10px] font-body font-medium tracking-button uppercase border transition-all duration-200 ${
                        formData.tradeType === type
                          ? "bg-charcoal text-white border-charcoal"
                          : "bg-transparent text-charcoal border-charcoal/30 hover:border-charcoal"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="section-label block mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your company"
                    value={formData.companyName}
                    onChange={(e) => setFormData((p) => ({ ...p, companyName: e.target.value }))}
                    className="w-full bg-transparent border border-charcoal/20 px-4 py-3 text-sm font-body font-light text-charcoal placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="section-label block mb-2">Estimated Volume</label>
                  <select
                    value={formData.projectVolume}
                    onChange={(e) => setFormData((p) => ({ ...p, projectVolume: e.target.value }))}
                    className="w-full bg-transparent border border-charcoal/20 px-4 py-3 text-sm font-body font-light text-charcoal focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
                  >
                    <option value="">Select volume</option>
                    {volumes.map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
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
                  placeholder="Tell us more about your business and the projects you typically work on..."
                  value={formData.notes}
                  onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))}
                  className="w-full bg-transparent border border-charcoal/20 px-4 py-3 text-sm font-body font-light text-charcoal placeholder-text-light/50 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-[12px] font-body text-red-500">Something went wrong. Please try again or email us directly.</p>
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
