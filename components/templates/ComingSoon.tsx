import Hero from "@/components/sections/Hero";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <Hero
      eyebrow="Coming Soon"
      headline={title}
      subtext={description}
      primaryCta={{ label: "Get a Quote", href: "/get-a-quote" }}
      secondaryCta={{ label: "Back to Home", href: "/" }}
      minHeight="70vh"
    />
  );
}
