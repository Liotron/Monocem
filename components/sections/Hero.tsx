"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  headlineItalic?: string;
  subtext: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  minHeight?: string;
  backgroundImage?: string;
  imagePosition?: string;
}

export default function Hero({
  eyebrow = "Premium Microcement UK",
  headline,
  headlineItalic,
  subtext,
  primaryCta = { label: "Request a Quote", href: "/get-a-quote" },
  secondaryCta = { label: "View Our Systems", href: "/installation" },
  minHeight = "100vh",
  backgroundImage,
  imagePosition = "center",
}: HeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (backgroundImage) {
    return (
      <section
        className="relative flex items-end overflow-hidden px-8 pb-16"
        style={{ minHeight }}
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover animate-hero-kenburns"
          style={{ objectPosition: imagePosition }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 130% 75% at 0% 100%, rgba(16,13,11,0.6) 0%, rgba(16,13,11,0.32) 42%, rgba(16,13,11,0) 75%)",
          }}
        />

        {/* Eyebrow */}
        <div
          className="absolute top-28 left-8 z-10 flex items-center gap-3 transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transitionDelay: "0.1s" }}
        >
          <span className="w-8 h-px bg-gold-light shrink-0" />
          <p
            className="text-[10px] font-body font-medium tracking-label uppercase text-gold-light"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
          >
            {eyebrow}
          </p>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <div
            className="transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "0.25s",
            }}
          >
            <h1
              className="font-display font-light text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.45)" }}
            >
              {headline}
              {headlineItalic && (
                <>
                  {" "}
                  <em className="italic font-light text-white/70">{headlineItalic}</em>
                </>
              )}
            </h1>
          </div>

          <div
            className="transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "0.4s",
            }}
          >
            <p
              className="font-body font-normal text-white leading-[1.85] mb-10 max-w-md text-base"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
            >
              {subtext}
            </p>
          </div>

          <div
            className="flex flex-wrap gap-4 transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "0.55s",
            }}
          >
            <Link href={primaryCta.href} className="btn-gold">
              {primaryCta.label}
            </Link>
            <Link href={secondaryCta.href} className="btn-outline">
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transitionDelay: "0.9s" }}
        >
          <span
            className="text-[9px] font-body font-medium tracking-label uppercase text-white/35"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <div className="w-px h-12 bg-white/50 animate-scroll-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #4a4540 0%, #2e2a26 50%, #1a1816 100%)",
        }}
      >
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "0.1s",
            }}
          >
            <p className="section-label mb-6">{eyebrow}</p>
          </div>

          {/* Headline */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "0.25s",
            }}
          >
            <h1 className="font-display font-light text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
              {headline}
              {headlineItalic && (
                <>
                  {" "}
                  <em className="italic font-light text-gold-light">{headlineItalic}</em>
                </>
              )}
            </h1>
          </div>

          {/* Subtext */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "0.4s",
            }}
          >
            <p className="font-body font-light text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
              {subtext}
            </p>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 transition-all duration-700"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transitionDelay: "0.55s",
            }}
          >
            <Link href={primaryCta.href} className="btn-gold">
              {primaryCta.label}
            </Link>
            <Link href={secondaryCta.href} className="btn-outline">
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700"
        style={{
          opacity: loaded ? 1 : 0,
          transitionDelay: "0.9s",
        }}
      >
        <span className="text-[9px] font-body font-medium tracking-label uppercase text-white/30">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
