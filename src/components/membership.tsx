import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { audience, benefits, growthPoints } from "@/lib/site";

export function Membership() {
  return (
    <section id="membership" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who Can Join"
          title="Built for people who are serious about business"
          lead="MYBF welcomes anyone in Malappuram who is passionate about entrepreneurship — at any stage of the journey."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audience.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              delay={index * 70}
              className="surface-card flex h-full flex-col gap-3 p-6"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-600/15 text-accent-400">
                <item.icon className="size-5.5" />
              </span>
              <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-cloud-300">{item.description}</p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-24">
          <SectionHeading
            align="center"
            eyebrow="Membership Benefits"
            title="Unlock the network, resources and recognition to move faster"
            lead="Membership is designed to return value every month — through people, knowledge and opportunities."
          />

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 70}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent-600/40"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent-600/15 text-accent-400">
                  <item.icon className="size-6" />
                </span>
                <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="leading-relaxed text-cloud-300">{item.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="mt-20 overflow-hidden rounded-4xl border border-accent-600/25 bg-gradient-to-br from-accent-700/20 via-ink-800 to-ink-900 p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
            <div>
              <span className="eyebrow">Why MYBF</span>
              <h3 className="mt-5 font-display text-2xl leading-tight font-bold text-balance sm:text-3xl lg:text-[2.25rem]">
                Where entrepreneurs connect, learn &amp; grow
              </h3>
              <p className="mt-5 leading-relaxed text-cloud-300">
                Joining MYBF means becoming part of a community that believes success is built
                through collaboration, knowledge and meaningful relationships.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {growthPoints.map((point) => (
                <li key={point} className="flex items-start gap-3.5">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-600 text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed text-cloud-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
