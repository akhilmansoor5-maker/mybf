import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { offerings } from "@/lib/site";

export function Offerings() {
  return (
    <section id="offer" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Supporting every stage of your entrepreneurial journey"
          lead="Whether you are validating a first idea or scaling an established business, MYBF gives you the people, knowledge and access to move forward."
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={index * 60}
              className="group flex flex-col gap-4 bg-ink-900 p-8 transition-colors duration-300 hover:bg-ink-800"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-600/15 text-accent-400 transition-colors group-hover:bg-accent-600 group-hover:text-white">
                  <item.icon className="size-5.5" />
                </span>
                <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
              </div>
              <p className="leading-relaxed text-cloud-300">{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
