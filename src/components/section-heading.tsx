import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto flex max-w-3xl flex-col items-center gap-5 text-center"
          : "flex flex-col gap-5"
      }
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {lead ? (
        <p className={align === "center" ? "section-lead mx-auto" : "section-lead"}>{lead}</p>
      ) : null}
    </Reveal>
  );
}
