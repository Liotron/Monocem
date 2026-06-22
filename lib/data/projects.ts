export interface Project {
  slug: string;
  title: string;
  location: string;
  meta: string;
  categories: string[];
  image: string;
  imagePosition?: string;
  area: string;
  duration: string;
  colour: string;
  finish: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "kensington-residence",
    title: "Kensington Residence",
    location: "London",
    meta: "Kitchen & Worktops · London",
    categories: ["kitchens", "worktops"],
    image: "/images/img-proj-kitchen.png",
    imagePosition: "center 40%",
    area: "32m²",
    duration: "6 days",
    colour: "Dune",
    finish: "Matt",
    description:
      "A complete kitchen transformation in a Kensington townhouse, combining seamless MONOCEM floors with matching worktops for an uninterrupted material story. The continuous Dune finish runs from floor to counter without a single joint, replacing a tired tiled kitchen with one cohesive architectural surface.",
  },
  {
    slug: "notting-hill-spa",
    title: "Notting Hill Spa",
    location: "London",
    meta: "Wet Room · London",
    categories: ["bathrooms"],
    image: "/images/img-proj-shower.png",
    imagePosition: "center 20%",
    area: "9m²",
    duration: "4 days",
    colour: "Mist",
    finish: "Satin waterproof",
    description:
      "A compact ensuite reimagined as a spa-like wet room, finished floor-to-ceiling in Mist with zero grout lines and a fully waterproof sealed system rated for constant water exposure. The seamless shower enclosure flows directly into the floor for an uninterrupted, calming finish.",
  },
  {
    slug: "chelsea-residence",
    title: "Chelsea Residence",
    location: "London",
    meta: "Floors & Walls · London",
    categories: ["floors", "walls"],
    image: "/images/img-floors.png",
    area: "58m²",
    duration: "9 days",
    colour: "Pebble",
    finish: "Matt",
    description:
      "An open-plan ground floor unified in a single Pebble tone, carrying the same microcement finish across the living floor and a feature wall to dissolve the boundary between the two. The result is a calm, gallery-like backdrop for a Chelsea family home.",
  },
  {
    slug: "spa-bathroom-suite",
    title: "Spa Bathroom Suite",
    location: "Manchester",
    meta: "Bathroom · Manchester",
    categories: ["bathrooms"],
    image: "/images/img-proj-bathroom.png",
    area: "14m²",
    duration: "5 days",
    colour: "Stone",
    finish: "Anti-slip satin",
    description:
      "A principal bathroom suite finished in Stone, with an anti-slip sealer specified for the walk-in shower floor. The seamless surface eliminates grout entirely, giving this Manchester new-build a hotel-spa finish that's as practical as it is refined.",
  },
  {
    slug: "staircase-feature",
    title: "Staircase Feature",
    location: "Birmingham",
    meta: "Stairs & Feature Wall · Birmingham",
    categories: ["stairs", "walls"],
    image: "/images/img-stairs.png",
    area: "22m² (stair run + wall)",
    duration: "7 days",
    colour: "Anthracite",
    finish: "Anti-slip matt",
    description:
      "A statement staircase coated in Anthracite, with a matching feature wall that carries the same tone up through a double-height stairwell. Reinforced nosing and an anti-slip sealer were specified for daily family use, without compromising the architectural finish.",
  },
  {
    slug: "chelsea-bathroom",
    title: "Chelsea Bathroom",
    location: "London",
    meta: "Bathroom & Vanity · London",
    categories: ["bathrooms"],
    image: "/images/img-proj-basin.png",
    area: "11m²",
    duration: "4 days",
    colour: "Linen",
    finish: "Satin waterproof",
    description:
      "A bathroom and vanity unit finished as one continuous surface in Linen, coated directly over the existing tiled vanity to avoid a full strip-out. The soft, warm tone and tactile texture replace what was a clinical tiled bathroom with something closer to natural stone.",
  },
  {
    slug: "canary-wharf-apartment",
    title: "Canary Wharf Apartment",
    location: "London",
    meta: "Walls · London",
    categories: ["walls"],
    image: "/images/img-proj-walls.png",
    area: "26m² of wall",
    duration: "5 days",
    colour: "Slate",
    finish: "Smooth matt",
    description:
      "A series of feature walls finished in Slate across an open-plan Canary Wharf apartment, hand-trowelled to introduce texture and depth against the building's otherwise flat, modern shell.",
  },
  {
    slug: "mayfair-open-plan",
    title: "Mayfair Open Plan",
    location: "London",
    meta: "Floors · London",
    categories: ["floors"],
    image: "/images/img-floors.png",
    area: "64m²",
    duration: "8 days",
    colour: "Warm Grey",
    finish: "Matt, UFH-compatible",
    description:
      "A full open-plan floor in Warm Grey, applied over the existing underfloor heating system in this Mayfair apartment. The seamless finish ties together the kitchen, dining, and living zones into a single uninterrupted surface.",
  },
  {
    slug: "hampstead-bathroom",
    title: "Hampstead Bathroom",
    location: "London",
    meta: "Bathroom · London",
    categories: ["bathrooms", "walls"],
    image: "/images/img-proj-bathroom.png",
    area: "13m²",
    duration: "5 days",
    colour: "Sand",
    finish: "Satin waterproof",
    description:
      "A family bathroom in Hampstead finished floor-to-ceiling in Sand, replacing dated tiling with a warm, seamless surface that's fully waterproof and easy to maintain for everyday use.",
  },
];

export const projectFilters = [
  { label: "All", value: "all" },
  { label: "Floors", value: "floors" },
  { label: "Walls", value: "walls" },
  { label: "Bathrooms", value: "bathrooms" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Worktops", value: "worktops" },
  { label: "Stairs", value: "stairs" },
];
