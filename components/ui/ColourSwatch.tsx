import type { Colour } from "@/lib/data/colours";

interface ColourSwatchProps {
  colour: Colour;
  index?: number;
}

export default function ColourSwatch({ colour, index = 0 }: ColourSwatchProps) {
  const grainClass = `mc-tile-grain-${(index % 4) + 1}`;
  const clrVar = { "--clr": colour.hex } as React.CSSProperties;

  return (
    <div className="group cursor-pointer">
      <div className="mc-tile">
        <div className="mc-tile-face" style={clrVar}>
          <div className={`mc-tile-grain ${grainClass}`} />
          <div className="mc-tile-sheen" />
        </div>
        <div className="mc-tile-side" style={clrVar} />
      </div>
      <div className="mt-[1.1rem] text-center">
        <p className="font-body text-[0.72rem] font-medium tracking-[0.08em] uppercase text-charcoal group-hover:text-gold transition-colors duration-300">
          {colour.name}
        </p>
        <p className="font-body text-[0.62rem] font-light text-text-light mt-1 uppercase tracking-wide">
          {colour.hex}
        </p>
      </div>
    </div>
  );
}
