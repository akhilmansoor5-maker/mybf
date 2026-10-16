import Image from "next/image";
import { site } from "@/lib/site";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/mybf-logo.png"
      alt={`${site.name} — ${site.fullName}`}
      width={1774}
      height={887}
      priority
      className={className}
    />
  );
}
