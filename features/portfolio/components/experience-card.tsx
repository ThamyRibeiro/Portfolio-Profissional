import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import { SurfaceCard } from "@/shared/components/ui/surface-card";
import { IconBadge } from "@/shared/components/ui/icon-badge";
import { StatusBadge } from "@/shared/components/ui/status-badge";
import { Checklist } from "@/shared/components/ui/checklist";
import type { experience } from "../data/profile";
export function ExperienceCard({
  item,
}: {
  item: (typeof experience)[number];
}) {
  return (
    <SurfaceCard padding="none">
      <div className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[1fr_auto]">
        <div className="min-w-0">
          <div className="mb-3 flex items-center gap-3">
            <IconBadge>
              <BriefcaseBusiness size={22} strokeWidth={1.4} />
            </IconBadge>
            <p className="text-sm font-medium text-accent">{item.role}</p>
          </div>
          <h3 className="max-w-xl font-display text-lg leading-7 font-semibold tracking-tight sm:text-xl">
            {item.company}
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-end">
          <StatusBadge tone={item.current ? "accent" : "neutral"}>
            {item.current ? "Atuação atual" : "Experiência anterior"}
          </StatusBadge>
          <p className="flex items-center gap-2 text-xs leading-6 text-muted">
            <CalendarDays size={14} />
            {item.date}
          </p>
        </div>
      </div>
      <div className="grid gap-5 border-t border-line p-5 sm:p-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-8">
        <p className="max-w-md font-display text-base leading-7 tracking-tight">
          {item.summary}
        </p>
        <Checklist items={item.activities} />
      </div>
    </SurfaceCard>
  );
}
