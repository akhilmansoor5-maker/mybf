import { ArrowRight, Check, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";
import { heroHighlights } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,175,117,0.16),transparent_58%)]" />
        <div className="absolute top-[-14rem] left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-accent-600/12 blur-[130px] animate-glow" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-900" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="eyebrow animate-fade-up">
            <MapPin className="size-3.5" />
            Malappuram, Kerala
          </span>

          <Logo className="mt-8 h-20 w-auto animate-fade-up sm:h-28 lg:h-32" />

          <h1
            className="mt-6 font-display text-[2.1rem] leading-[1.08] font-bold tracking-tight text-balance animate-fade-up sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Empowering the Next Generation of Entrepreneurs in{" "}
            <span className="text-accent-400">Malappuram</span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-cloud-300 animate-fade-up sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            MYBF is a thriving entrepreneurial community that empowers ambitious individuals to
            connect, collaborate and build successful businesses — turning ideas into opportunities
            and businesses into sustainable growth stories.
          </p>

          <div
            className="mt-10 flex w-full flex-col items-stretch gap-3 animate-fade-up sm:w-auto sm:flex-row sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#join"
              className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-accent-600 px-7 text-base font-semibold text-white transition-colors hover:bg-accent-500"
            >
              Become a member
              <ArrowRight className="size-4.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/15 px-7 text-base font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Explore MYBF
            </a>
          </div>

          <ul
            className="mt-12 flex flex-col items-center gap-3 animate-fade-up sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6"
            style={{ animationDelay: "320ms" }}
          >
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-cloud-300">
                <Check className="size-4 shrink-0 text-accent-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
