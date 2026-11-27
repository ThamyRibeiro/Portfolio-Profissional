import type { ReactNode } from "react";
import { SurfaceCard } from "./surface-card";
import { IconBadge } from "./icon-badge";
import { StatusBadge } from "./status-badge";
type Props = {
  title: string;
  description: string;
  icon: ReactNode;
  badge?: string;
  footnote: string;
  layout?: "vertical" | "horizontal";
};
export function InfoCard({
  title,
  description,
  icon,
  badge,
  footnote,
  layout = "vertical",
}: Props) {
  const horizontal = layout === "horizontal";
  return (
    <SurfaceCard
      className={
        horizontal
          ? "flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
          : "flex h-full flex-col"
      }
    >
      <div className={horizontal ? "flex items-start gap-4" : "mb-5"}>
        <IconBadge>{icon}</IconBadge>
        <div className={horizontal ? "min-w-0" : "mt-4"}>
          {badge ? (
            <div className="mb-3">
              <StatusBadge tone="accent">{badge}</StatusBadge>
            </div>
          ) : null}
          <h3 className="font-display text-xl leading-7 font-semibold tracking-tight">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
        </div>
      </div>
      <p
        className={
          "text-xs leading-6 text-muted " +
          (horizontal ? "" : "mt-auto border-t border-line pt-4")
        }
      >
        {footnote}
      </p>
    </SurfaceCard>
  );
}
