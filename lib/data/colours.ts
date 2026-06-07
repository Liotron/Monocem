export interface Colour {
  name: string;
  cssClass: string;
  hex: string;
}

export const colours: Colour[] = [
  { name: "Soft White", cssClass: "sw-soft-white", hex: "#eeece8" },
  { name: "Warm Beige", cssClass: "sw-warm-beige", hex: "#d9cec0" },
  { name: "Sand", cssClass: "sw-sand", hex: "#c8b99a" },
  { name: "Clay", cssClass: "sw-clay", hex: "#b5a48c" },
  { name: "Taupe", cssClass: "sw-taupe", hex: "#9e9082" },
  { name: "Stone Grey", cssClass: "sw-stone-grey", hex: "#8e8880" },
  { name: "Concrete Grey", cssClass: "sw-concrete-grey", hex: "#7a7670" },
  { name: "Natural Cement", cssClass: "sw-natural-cement", hex: "#6e6a62" },
  { name: "Ash", cssClass: "sw-ash", hex: "#5e5c58" },
  { name: "Graphite", cssClass: "sw-graphite", hex: "#474542" },
  { name: "Charcoal", cssClass: "sw-charcoal", hex: "#30302e" },
  { name: "Black Stone", cssClass: "sw-black-stone", hex: "#1a1a18" },
];
