"use client";

import { useEffect, useRef, useState } from "react";
import { Placeholder, type PlaceholderTone } from "@/components/placeholder";

const SLIDE_MS = 5000;
const SWIPE_PX = 40;

const slides: { label: string; caption: string; short: string; tone: PlaceholderTone }[] = [
  { label: "Conclave — the stage and the hall", caption: "Conclaves", short: "Conclaves", tone: "cyan" },
  { label: "Business tour — on the floor", caption: "Business tours", short: "Tours", tone: "yellow" },
  { label: "Gathering — members at the table", caption: "Gatherings", short: "Gatherings", tone: "magenta" },
];

export function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const step = (direction: 1 | -1) =>
    setActive((index) => (index + direction + slides.length) % slides.length);

  const onTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < SWIPE_PX || Math.abs(dx) < Math.abs(dy)) return;
    step(dx < 0 ? 1 : -1);
  };

  useEffect(() => {
    if (paused || held) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => {
      setActive((index) => (index + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused, held]);

  return (
    <div
      aria-roledescription="carousel"
      aria-label="Moments from the forum"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={() => setHeld(false)}
    >
      <div className="relative">
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="relative aspect-[4/3] touch-pan-y overflow-hidden shadow-[14px_14px_0_#14161c] max-sm:shadow-[8px_8px_0_#14161c]"
        >
          {slides.map((slide, index) => (
            <div
              key={slide.caption}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
              aria-hidden={index !== active}
              className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-out ${
                index === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
              }`}
            >
              <Placeholder label={slide.label} tone={slide.tone} labelTop className="h-full" />
            </div>
          ))}
        </div>

        <ul
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-5 left-3 flex -rotate-[4deg] flex-col items-start gap-1.5 sm:left-6"
        >
          <li className="bg-yellow px-3 py-1 font-display text-sm font-extrabold tracking-tight text-ink sm:text-base">
            Building ideas
          </li>
          <li className="ml-6 bg-magenta px-3 py-1 font-display text-sm font-extrabold tracking-tight text-paper sm:text-base">
            Creating connections
          </li>
          <li className="ml-2 bg-cyan px-3 py-1 font-display text-sm font-extrabold tracking-tight text-ink sm:text-base">
            Designing the future
          </li>
        </ul>
      </div>

      <div className="mt-12 flex items-stretch gap-2 max-sm:mt-10">
        {slides.map((slide, index) => (
          <button
            key={slide.caption}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}: ${slide.caption}`}
            aria-current={index === active}
            className="group flex min-h-11 flex-1 flex-col justify-end gap-2 text-left"
          >
            <span
              className={`font-display text-[0.68rem] font-bold tracking-[0.18em] uppercase transition-colors max-sm:text-[0.75rem] max-sm:tracking-[0.12em] ${
                index === active ? "text-paper" : "text-paper/55 group-hover:text-paper/85"
              }`}
            >
              <span className="max-sm:hidden">{slide.caption}</span>
              <span className="sm:hidden">{slide.short}</span>
            </span>
            <span className="relative block h-[3px] w-full overflow-hidden bg-paper/25">
              {index === active ? (
                <span
                  key={active}
                  data-paused={paused || held}
                  style={{ ["--slide-duration" as string]: `${SLIDE_MS}ms` }}
                  className="slide-progress absolute inset-0 bg-yellow"
                />
              ) : null}
            </span>
          </button>
        ))}
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          className="inline-flex size-11 shrink-0 items-center justify-center border border-paper/40 text-paper transition-colors hover:bg-paper hover:text-blue"
        >
          {paused ? (
            <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden="true">
              <path d="M4 2.5v11l9-5.5z" />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor" aria-hidden="true">
              <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
