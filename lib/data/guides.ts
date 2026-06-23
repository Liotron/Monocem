export interface GuideCategory {
  slug: string;
  label: string;
  description: string;
}

export interface Guide {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
}

export const guideCategories: GuideCategory[] = [
  {
    slug: "getting-started",
    label: "Getting Started",
    description: "New to microcement? Start here for the essentials — what it is, how it works, and where it can be used.",
  },
  {
    slug: "application-technique",
    label: "Application & Technique",
    description: "Step-by-step guides to how microcement is applied, room by room, from substrate prep to final seal.",
  },
  {
    slug: "cost-planning",
    label: "Cost & Planning",
    description: "Transparent pricing guides to help you budget and plan your microcement project.",
  },
  {
    slug: "maintenance-care",
    label: "Maintenance & Care",
    description: "How to clean, care for, and reseal your microcement surfaces to keep them looking new for years.",
  },
  {
    slug: "comparisons",
    label: "Comparisons",
    description: "How microcement compares to tiles, polished concrete, and other premium surface materials.",
  },
];

export const guides: Guide[] = [
  {
    title: "What is Microcement?",
    slug: "what-is-microcement",
    category: "getting-started",
    excerpt: "A complete introduction to microcement — composition, applications, and why it's the surface of choice for modern interiors.",
  },
  {
    title: "How to Apply Microcement",
    slug: "how-to-apply-microcement",
    category: "application-technique",
    excerpt: "A step-by-step guide to professional microcement application — preparation, coating, sanding, and sealing.",
  },
  {
    title: "Microcement Floors: The Complete Guide",
    slug: "microcement-floors",
    category: "application-technique",
    excerpt: "Everything you need to know about microcement floors — benefits, the application process, cost, and choosing the right finish.",
  },
  {
    title: "Microcement Cost UK",
    slug: "microcement-cost-uk",
    category: "cost-planning",
    excerpt: "A transparent guide to microcement costs in the UK — installation pricing, supply-only rates, and what affects the price.",
  },
  {
    title: "Microcement Maintenance Guide",
    slug: "microcement-maintenance",
    category: "maintenance-care",
    excerpt: "How to care for your microcement surface — cleaning, resealing, and protecting your investment for decades.",
  },
  {
    title: "Microcement vs Polished Concrete",
    slug: "microcement-vs-polished-concrete",
    category: "comparisons",
    excerpt: "Understand the key differences between microcement and polished concrete to choose the right surface for your project.",
  },
];
