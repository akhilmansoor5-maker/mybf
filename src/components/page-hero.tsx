import { Placeholder, type PlaceholderTone } from "@/components/placeholder";

const themes = {
  blue: { section: "bg-blue text-paper", strip: "bg-ink text-paper" },
  magenta: { section: "bg-magenta text-paper", strip: "bg-ink text-paper" },
  cyan: { section: "bg-cyan text-ink", strip: "bg-ink text-paper" },
  yellow: { section: "bg-yellow text-ink", strip: "bg-ink text-paper" },
} as const;

type PageHeroProps = {
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
  theme: keyof typeof themes;
  imageLabel: string;
  imageTone: PlaceholderTone;
  strip: readonly string[];
  children?: React.ReactNode;
};

export function PageHero({
  index,
  eyebrow,
  title,
  lead,
  theme,
  imageLabel,
  imageTone,
  strip,
  children,
}: PageHeroProps) {
  const colors = themes[theme];
  const loop = [...strip, ...strip];

  return (
    <section className={colors.section}>
      <div className="grid page-wrap items-center gap-10 px-5 pt-10 pb-14 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:pt-14 lg:pb-16">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-3 font-display text-[0.72rem] font-bold tracking-[0.22em] uppercase">
            <span>{index}</span>
            <span aria-hidden="true" className="h-px w-10 bg-current opacity-50" />
            <span>{eyebrow}</span>
          </p>
          <h1 className="mt-6 max-w-[13ch] text-5xl sm:text-7xl lg:text-[5.4rem]">{title}</h1>
          <p className="mt-6 max-w-lg text-xl leading-snug opacity-90 sm:text-2xl">{lead}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        <div className="lg:col-span-5">
          <Placeholder label={imageLabel} tone={imageTone} className="shadow-[12px_12px_0_#14161c]" />
        </div>
      </div>

      <div className={`overflow-hidden border-y border-black/30 ${colors.strip}`}>
        <ul aria-hidden="true" className="marquee-track flex w-max py-3">
          {loop.map((word, i) => (
            <li
              key={`${word}-${i}`}
              className="flex items-center gap-6 px-6 font-display text-sm font-bold tracking-[0.18em] whitespace-nowrap uppercase"
            >
              {word}
              <span className="size-1.5 rotate-45 bg-yellow" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
