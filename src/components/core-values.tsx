import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { coreValues } from "@/lib/site";

export function CoreValues() {
  return (
    <section id="values" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ink-800/60 via-ink-900 to-ink-900"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Core Values"
          title="The values that drive our community"
          lead="Five principles that shape how MYBF members work with one another and with the district around them."
        />

        {/* Six columns so the final row of five cards stays centred on large screens. */}
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {coreValues.map((value, index) => (
            <Reveal
              as="li"
              key={value.title}
              delay={index * 70}
              className={`group surface-card flex flex-col gap-4 p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent-600/40 lg:col-span-2 ${
                index === 3 ? "lg:col-start-2" : ""
              }`}
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent-600/15 text-accent-400 transition-colors group-hover:bg-accent-600/25">
                <value.icon className="size-6" />
              </span>
              <h3 className="font-display text-lg font-bold text-white">{value.title}</h3>
              <p className="leading-relaxed text-cloud-300">{value.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
