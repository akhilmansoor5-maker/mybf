import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { initiatives } from "@/lib/site";

export function Initiatives() {
  return (
    <section id="initiatives" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,175,117,0.14),transparent_55%)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="MYBF Initiatives"
          title="Creating opportunities beyond networking"
          lead="Ten ongoing programmes that keep members learning, meeting and growing throughout the year."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {initiatives.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(index % 5) * 70}
              className="group surface-card flex h-full flex-col gap-3 p-6 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-accent-600/40 hover:bg-white/[0.06]"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent-600/15 text-accent-400">
                <item.icon className="size-5" />
              </span>
              <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-cloud-300">{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
