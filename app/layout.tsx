import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://monocem.co.uk";

export const metadata: Metadata = {
  title: {
    default: "MONOCEM — Premium Microcement Systems UK | Supply & Installation",
    template: "%s | MONOCEM",
  },
  description: "MONOCEM supplies and installs premium microcement across the UK. Seamless, waterproof surfaces for floors, walls, bathrooms and worktops. Request a sample or quote today.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "MONOCEM",
    title: "MONOCEM — Premium Microcement Systems UK",
    description: "Premium microcement supply and installation across the UK. Seamless, waterproof surfaces for floors, walls, bathrooms and worktops.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MONOCEM — Premium Microcement Systems UK",
    description: "Premium microcement supply and installation across the UK.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MONOCEM",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+447000000000",
    contactType: "customer service",
    areaServed: "GB",
    availableLanguage: "English",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
