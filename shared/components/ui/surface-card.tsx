import type { ComponentProps } from "react";
const tones = {
  surface: "border-line bg-surface text-foreground",
  soft: "border-line bg-soft text-foreground",
  showcase: "border-showcase-line bg-showcase text-showcase-foreground",
};
const paddings = { normal: "p-5 sm:p-6", compact: "p-4 sm:p-5", none: "" };
export function SurfaceCard({
  tone = "surface",
  padding = "normal",
  className = "",
  ...props
}: ComponentProps<"article"> & {
  tone?: keyof typeof tones;
  padding?: keyof typeof paddings;
}) {
  return (
    <article
      {...props}
      className={
        "relative min-w-0 overflow-hidden rounded-[1.75rem] border " +
        tones[tone] +
        " " +
        paddings[padding] +
        " " +
        className
      }
    />
  );
}
