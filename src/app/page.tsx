import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { Placeholder } from "@/components/placeholder";
import { initiatives, slugify } from "@/lib/site";

const chapters = [
  {
    href: "/about",
    index: "01",
    title: "The forum",
    text: "Who sits in the room, and what Mission Malappuram 2050 has to do with it.",
    fill: "bg-yellow",
    accent: "text-ink",
    hoverText: "group-hover:text-ink",
  },
  {
    href: "/what-we-offer",
    index: "02",
    title: "The work",
    text: "Mentorship, a proper consultation, partnerships, and growth that is not a slogan.",
    fill: "bg-magenta",
    accent: "text-magenta",
    hoverText: "group-hover:text-paper",
  },
  {
    href: "/initiatives",
    index: "03",
    title: "The programme",
    text: "Conclaves, the club, tours, gatherings, and the evenings with investors.",
    fill: "bg-cyan",
    accent: "text-blue",
    hoverText: "group-hover:text-ink",
  },
];

const rowBands = ["bg-yellow", "bg-cyan", "bg-magenta", "bg-yellow", "bg-cyan"];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-blue text-paper">
        <div className="grid page-wrap items-center gap-12 px-5 pt-10 pb-14 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:pt-14 lg:pb-16">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 font-display text-[0.72rem] font-bold tracking-[0.24em] uppercase text-paper/75">
              <span>MYBF</span>
              <span aria-hidden="true" className="h-px w-10 bg-paper/50" />
              <span>Malappuram Youth Business Forum</span>
            </p>
            <h1 className="mt-6 max-w-[10ch] text-[3.6rem] text-paper sm:text-7xl lg:text-[6.4rem]">
              Why not Malappuram.
            </h1>
            <p className="mt-7 max-w-md text-xl leading-snug text-paper/90 sm:text-2xl">
              A forum for founders, owners and students building in this district. Mentors in the
              room. Introductions with a name on them.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/membership" className="btn btn-yellow">
                See membership <Arrow />
              </Link>
              <Link href="/initiatives" className="btn btn-outline-light">
                The programme
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <HeroSlideshow />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="grid page-wrap gap-5 px-5 py-12 sm:px-8 md:grid-cols-3 lg:py-14">
          {chapters.map((chapter) => (
            <Link
              key={chapter.href}
              href={chapter.href}
              className="group lift relative isolate flex min-h-64 flex-col justify-between overflow-hidden border-2 border-ink bg-paper p-7"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-0 -z-10 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-y-100 ${chapter.fill}`}
              />
              <span className="flex items-start justify-between">
                <span
                  className={`font-display text-5xl font-extrabold tracking-tighter transition-colors ${chapter.accent} ${chapter.hoverText}`}
                >
                  {chapter.index}
                </span>
                <span
                  className={`inline-flex size-11 items-center justify-center border-2 border-ink transition-colors duration-300 group-hover:border-current ${chapter.hoverText}`}
                >
                  <Arrow className="size-5 transition-transform duration-300 group-hover:-rotate-45" />
                </span>
              </span>
              <span className={`transition-colors ${chapter.hoverText}`}>
                <span className="block font-display text-4xl font-extrabold tracking-tight">
                  {chapter.title}
                </span>
                <span className="mt-3 block max-w-xs text-lg leading-snug transition-transform duration-300 group-hover:-translate-y-1">
                  {chapter.text}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper">
        <div className="grid page-wrap gap-6 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:py-14">
          <p className="font-display text-[0.72rem] font-bold tracking-[0.22em] text-blue uppercase lg:col-span-3 lg:pt-2">
            A note from the forum
          </p>
          <div className="lg:col-span-9">
            <p className="max-w-4xl text-2xl leading-snug sm:text-3xl sm:leading-snug">
              Malappuram already has the people. Founders, shop owners, students with a stubborn
              idea, and operators who have been through a bad year and stayed. What it has not
              always had is a room where those people owe each other something.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-2xl text-xl leading-relaxed text-muted">
                MYBF is that room. Supported by Mission Malappuram 2050, the forum runs conclaves, a
                club, tours and the quieter work of referrals. Between events, members pass work to
                each other by name.
              </p>
              <Link href="/about" className="btn btn-outline-dark">
                How it works <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-2">
        <div className="page-wrap px-5 py-12 sm:px-8 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-[14ch] text-4xl sm:text-6xl">On the programme</h2>
            <Link href="/initiatives" className="btn btn-ink">
              All ten <Arrow />
            </Link>
          </div>
          <ol className="mt-8 border-t-2 border-ink">
            {initiatives.slice(0, 5).map((item, index) => (
              <li key={item.title} className="border-b border-ink/20">
                <Link
                  href={`/initiatives#${slugify(item.title)}`}
                  className="group relative isolate grid gap-2 px-2 py-5 sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-4"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-x-100 ${rowBands[index]}`}
                  />
                  <span className="font-display text-sm font-bold tracking-[0.16em] text-blue transition-[transform,color] duration-300 group-hover:translate-x-2 group-hover:text-ink sm:col-span-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:col-span-4 sm:text-3xl">
                    {item.title}
                  </span>
                  <span
                    className={`text-lg text-muted transition-colors group-hover:text-ink sm:col-span-5 ${
                      rowBands[index] === "bg-magenta" ? "group-hover:text-paper" : ""
                    }`}
                  >
                    {item.description}
                  </span>
                  <span className="hidden justify-end opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:col-span-1 sm:flex sm:-translate-x-3">
                    <Arrow className="size-6" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="grid page-wrap items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="font-display text-[0.72rem] font-bold tracking-[0.22em] text-yellow uppercase">
              Membership
            </p>
            <h2 className="mt-4 max-w-[16ch] text-4xl text-paper sm:text-6xl">
              If you are building here, you already have a reason to be in the room.
            </h2>
            <p className="mt-6 max-w-md text-xl leading-snug text-paper/75">
              Founders, owners, students, and the mentors willing to be useful. No tier chart. A
              conversation, then a yes or a not-yet.
            </p>
            <Link href="/contact" className="btn btn-yellow mt-8">
              Write to us <Arrow />
            </Link>
          </div>
          <Placeholder
            label="Members in conversation at a forum evening"
            tone="blue"
            className="shadow-[12px_12px_0_#fcc000]"
          />
        </div>
      </section>
    </>
  );
}
