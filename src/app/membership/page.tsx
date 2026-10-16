import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { PageHero } from "@/components/page-hero";
import { audience, benefits } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Who can join Malappuram Youth Business Forum, and what members actually get: referrals, mentorship, partnerships and a place in the programme.",
};

const shadows = ["#005bff", "#e11d74", "#3aadf2", "#14161c"];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Membership"
        title="Come in if you are willing to be useful."
        lead="For people in and around Malappuram who are serious about a business — starting one, running one, or helping one survive its second year."
        theme="yellow"
        imageLabel="New members being introduced at a gathering"
        imageTone="magenta"
        strip={["Startup founders", "Business owners", "Students with an idea", "Professionals", "Mentors"]}
      >
        <Link href="/contact" className="btn btn-ink">
          Ask to join <Arrow />
        </Link>
        <a href="#benefits" className="btn btn-outline-dark">
          What you get
        </a>
      </PageHero>

      <section className="bg-paper">
        <div className="mx-auto max-w-[90rem] px-5 py-12 sm:px-8 lg:py-14">
          <h2 className="text-4xl sm:text-5xl">Who it is for</h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((person, index) => (
              <li
                key={person.title}
                style={{ ["--lift-shadow" as string]: shadows[index] }}
                className="group lift flex flex-col border-2 border-ink bg-paper p-6"
              >
                <p className="font-display text-sm font-bold tracking-[0.18em] text-blue">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl sm:text-3xl">{person.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{person.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="benefits" className="scroll-mt-20 bg-blue text-paper">
        <div className="mx-auto grid max-w-[90rem] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:py-16">
          <h2 className="text-4xl text-paper sm:text-6xl lg:col-span-5">What you walk away with</h2>
          <ul className="border-b border-white/25 lg:col-span-7">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="group flex items-center gap-4 border-t border-white/25 py-4 text-xl leading-snug"
              >
                <span
                  aria-hidden="true"
                  className="h-0.5 w-4 shrink-0 bg-yellow transition-[width] duration-300 ease-out group-hover:w-10"
                />
                <span className="transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-yellow">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-[90rem] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl">The point of joining</h2>
          </div>
          <div className="max-w-xl text-xl leading-relaxed lg:col-span-7">
            <p>
              You meet people who are building at the same time as you, and a few who finished the
              hard part years ago. You get into workshops, tours and investor evenings without
              hunting for them. You can put a collaboration on the table instead of posting into
              the void.
            </p>
            <p className="mt-5">
              And the district gets a business community that talks to itself. That is the part
              Mission Malappuram 2050 is backing.
            </p>
            <Link href="/contact" className="btn btn-magenta mt-8">
              Ask to join <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
