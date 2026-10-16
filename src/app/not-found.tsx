import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="bg-blue px-5 py-24 text-paper sm:px-8">
      <p className="font-display text-sm font-bold tracking-[0.22em] uppercase text-yellow">404</p>
      <h1 className="mt-4 max-w-[14ch] text-5xl text-paper sm:text-7xl">This page is not on the programme.</h1>
      <Link
        href="/"
        className="btn btn-yellow mt-10"
      >
        Back to the forum
      </Link>
    </div>
  );
}
