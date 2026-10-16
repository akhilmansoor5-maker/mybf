import { About } from "@/components/about";
import { CoreValues } from "@/components/core-values";
import { Hero } from "@/components/hero";
import { Initiatives } from "@/components/initiatives";
import { Join } from "@/components/join";
import { Membership } from "@/components/membership";
import { Offerings } from "@/components/offerings";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CoreValues />
      <Offerings />
      <Initiatives />
      <Membership />
      <Join />
    </>
  );
}
