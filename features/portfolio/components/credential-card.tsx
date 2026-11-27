import type { ReactNode } from "react";
import { CalendarDays, GraduationCap } from "lucide-react";
import { SurfaceCard } from "@/shared/components/ui/surface-card";
import { IconBadge } from "@/shared/components/ui/icon-badge";
import { StatusBadge } from "@/shared/components/ui/status-badge";
import type { education } from "../data/profile";
type Credential = Pick<
  (typeof education)[number],
  "title" | "institution" | "date" | "status"
> & {
  level?: string;
  dateSummary?: string;
};
export function CredentialCard({
  item,
  variant = "compact",
  layout = "vertical",
  dateStyle = "panel",
  className = "",
  children,
}: {
  item: Credential;
  variant?: "featured" | "compact";
  layout?: "vertical" | "horizontal";
  dateStyle?: "panel" | "pill" | "compact";
  className?: string;
  children?: ReactNode;
}) {
  const featured = variant === "featured";
  const horizontal = layout === "horizontal";
  const pill = dateStyle === "pill";
  const compactDate = dateStyle === "compact";
  return (
    <SurfaceCard
      tone={featured ? "showcase" : "surface"}
      className={"flex flex-col " + className}
    >
      {featured ? (
        <GraduationCap
          aria-hidden="true"
          size={150}
          strokeWidth={0.55}
          className="pointer-events-none absolute -right-10 top-4 text-showcase-accent/10"
        />
      ) : null}
      <div
        className={
          "relative " +
          (horizontal
            ? "sm:grid sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-4"
            : "")
        }
      >
        <div
          className={
            "mb-4 flex items-start justify-between gap-4 " +
            (horizontal ? "sm:mb-0" : "")
          }
        >
          <IconBadge>
            <GraduationCap size={24} strokeWidth={1.4} />
          </IconBadge>
          <div className={horizontal ? "sm:hidden" : ""}>
            <StatusBadge tone="accent">{item.status}</StatusBadge>
          </div>
        </div>
        <div className="min-w-0">
          {item.level ? (
            <p
              className={
                "mb-2 text-sm " +
                (featured ? "text-showcase-muted" : "text-muted")
              }
            >
              {item.level}
            </p>
          ) : null}
          <div className="flex flex-wrap items-center gap-3">
            <h3
              className={
                "font-display font-semibold tracking-[-.035em] " +
                (featured ? "text-2xl leading-8" : "text-xl leading-8")
              }
            >
              {item.title}
            </h3>
            {horizontal ? (
              <div className="hidden sm:block">
                <StatusBadge tone="accent">{item.status}</StatusBadge>
              </div>
            ) : null}
          </div>
          <p
            className={
              "mt-1 text-sm leading-6 " +
              (featured ? "text-showcase-muted" : "text-muted")
            }
          >
            {item.institution}
          </p>
          <div
            title={compactDate ? item.date : undefined}
            aria-label={compactDate ? item.date : undefined}
            className={
              "mt-4 max-w-full border " +
              (pill
                ? "inline-flex items-center gap-2 rounded-full px-3 py-2 "
                : compactDate
                  ? "flex items-center gap-2 rounded-2xl px-3 py-2 "
                  : "flex items-start gap-3 rounded-2xl px-4 py-3 ") +
              (featured
                ? "border-showcase-line bg-showcase-accent/10 text-showcase-foreground"
                : "border-accent/20 bg-accent/8 text-foreground")
            }
          >
            <CalendarDays
              aria-hidden="true"
              size={pill || compactDate ? 16 : 19}
              strokeWidth={1.7}
              className={
                "mt-0.5 shrink-0 " +
                (featured ? "text-showcase-accent" : "text-accent")
              }
            />
            <p
              className={
                pill
                  ? "text-sm leading-6 font-medium"
                  : compactDate
                    ? "whitespace-nowrap text-sm leading-5 font-medium"
                    : "text-base leading-6 font-semibold"
              }
            >
              {compactDate ? (item.dateSummary ?? item.date) : item.date}
            </p>
          </div>
        </div>
      </div>
      {children ? <div className="mt-auto pt-4">{children}</div> : null}
    </SurfaceCard>
  );
}
