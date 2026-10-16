import { Eye, Target } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const pillars = [
  {
    icon: Eye,
    label: "Our Vision",
    title: "A Connected & Progressive Business Community",
    body: "To build Malappuram into a thriving entrepreneurial hub where young entrepreneurs collaborate, innovate and create businesses that generate lasting economic and social value.",
  },
  {
    icon: Target,
    label: "Our Mission",
    title: "Connecting Entrepreneurs. Creating Opportunities.",
    body: "To empower entrepreneurs through networking, mentorship, business education, collaboration and access to the opportunities they need to build, scale and sustain successful businesses.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <SectionHeading
            eyebrow="Who We Are"
            title={
              <>
                Creating a stronger entrepreneurial ecosystem for{" "}
                <span className="text-accent-400">Malappuram</span>
              </>
            }
            lead="Malappuram Youth Business Forum (MYBF) is a collaborative community that unites aspiring entrepreneurs, startup founders, business owners, professionals, mentors and innovators across the district."
          />

          <Reveal delay={120} className="flex flex-col gap-6 text-base leading-relaxed text-cloud-300">
            <p>
              Our mission is to foster meaningful relationships, encourage knowledge sharing and
              create opportunities that inspire entrepreneurial success. Supported by{" "}
              <strong className="font-semibold text-white">Mission Malappuram 2050</strong>, MYBF is
              committed to strengthening the district&apos;s entrepreneurial ecosystem by connecting
              people with ideas, mentors, industry experts and business opportunities.
            </p>
            <p>
              Through networking, mentorship, business consultation, learning programmes and
              strategic collaborations, we help entrepreneurs overcome challenges, accelerate growth
              and create lasting economic and social impact.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.label}
              delay={index * 100}
              className="surface-card relative overflow-hidden p-8 sm:p-10"
            >
              <div
                aria-hidden="true"
                className="absolute -top-20 -right-20 size-48 rounded-full bg-accent-600/10 blur-3xl"
              />
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent-600/15 text-accent-400">
                <pillar.icon className="size-6" />
              </span>
              <p className="mt-6 font-display text-xs font-semibold tracking-[0.18em] text-accent-300 uppercase">
                {pillar.label}
              </p>
              <h3 className="mt-3 font-display text-xl leading-snug font-bold text-white sm:text-2xl">
                {pillar.title}
              </h3>
              <p className="mt-4 leading-relaxed text-cloud-300">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
