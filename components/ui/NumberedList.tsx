import FadeUp from "@/components/ui/FadeUp";

interface NumberedListItem {
  title: string;
  desc: string;
}

interface NumberedListProps {
  items: NumberedListItem[];
  dark?: boolean;
}

export default function NumberedList({ items, dark = false }: NumberedListProps) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <FadeUp key={item.title} delay={(Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4)}>
          <div
            className={`flex gap-7 items-start py-9 border-b first:pt-0 last:border-none last:pb-0 ${
              dark ? "border-white/[0.12]" : "border-charcoal/[0.12]"
            }`}
          >
            <span className="font-display font-light text-gold text-[2.1rem] leading-none shrink-0 min-w-[2.25rem]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h5
                className={`font-body text-[0.72rem] font-medium tracking-[0.15em] uppercase mb-2 ${
                  dark ? "text-white" : "text-charcoal"
                }`}
              >
                {item.title}
              </h5>
              <p className={`text-[0.92rem] leading-relaxed ${dark ? "text-white/55" : "text-text-light"}`}>
                {item.desc}
              </p>
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}
