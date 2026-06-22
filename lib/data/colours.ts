export interface Colour {
  name: string;
  hex: string;
}

export interface ColourGroup {
  label?: string;
  heading: string;
  headingItalic: string;
  description?: string;
  colours: Colour[];
}

export const colourGroups: ColourGroup[] = [
  {
    label: "Core Collection",
    heading: "The Foundation",
    headingItalic: "Palette",
    description:
      "Twelve essential tones — the backbone of every MONOCEM installation. Hover each swatch to see the mineral texture and depth.",
    colours: [
      { name: "Soft White", hex: "#eeece8" },
      { name: "Linen", hex: "#e0ddd7" },
      { name: "Warm Grey", hex: "#d0ccc4" },
      { name: "Stone", hex: "#b8b4ac" },
      { name: "Pebble", hex: "#9e9a92" },
      { name: "Slate", hex: "#8a8680" },
      { name: "Sand", hex: "#c4b49a" },
      { name: "Dune", hex: "#b09878" },
      { name: "Earth", hex: "#6e5e4a" },
      { name: "Mocha", hex: "#504438" },
      { name: "Espresso", hex: "#2e2824" },
      { name: "Black Stone", hex: "#1a1a18" },
    ],
  },
  {
    heading: "Cool",
    headingItalic: "Tones",
    colours: [
      { name: "Mist", hex: "#e8eaec" },
      { name: "Cloud", hex: "#cdd2d6" },
      { name: "Steel", hex: "#b2bcc4" },
      { name: "Gunmetal", hex: "#8a9aa6" },
      { name: "Marine", hex: "#607888" },
      { name: "Deep Navy", hex: "#3c5060" },
    ],
  },
  {
    heading: "Warm",
    headingItalic: "Tones",
    colours: [
      { name: "Ivory", hex: "#f0e8d8" },
      { name: "Butter", hex: "#ddc8a8" },
      { name: "Honey", hex: "#c8a87a" },
      { name: "Amber", hex: "#a87848" },
      { name: "Terracotta", hex: "#784830" },
      { name: "Rust", hex: "#502818" },
    ],
  },
  {
    heading: "Outdoor &",
    headingItalic: "Industrial",
    colours: [
      { name: "Cement", hex: "#d8d4cc" },
      { name: "Ash", hex: "#909088" },
      { name: "Graphite", hex: "#686860" },
      { name: "Anthracite", hex: "#404038" },
      { name: "Charcoal", hex: "#202018" },
      { name: "Obsidian", hex: "#080808" },
    ],
  },
];

export const allColours: Colour[] = colourGroups.flatMap((group) => group.colours);

export const bespokeCta = {
  heading: "Want a Bespoke",
  headingItalic: "Colour?",
  paragraph:
    "We can match virtually any colour using our mineral pigment system. Bring us a RAL code, a paint chip, or even a fabric swatch.",
  buttonLabel: "Discuss Colour Options",
  buttonHref: "/get-a-quote",
};
