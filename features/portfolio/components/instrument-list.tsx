import { Beaker, FlaskConical, Microscope } from "lucide-react";
import { SurfaceCard } from "@/shared/components/ui/surface-card";
import { IconBadge } from "@/shared/components/ui/icon-badge";
import { StatusBadge } from "@/shared/components/ui/status-badge";
import { instruments } from "../data/profile";
const icons = [Microscope, FlaskConical, Beaker];
export function InstrumentList() {
  return (
    <SurfaceCard padding="none">
      <div className="divide-y divide-line">
        {instruments.map((item, index) => {
          const Icon = icons[index] ?? Beaker;
          return (
            <div
              key={item.name}
              className="flex items-start gap-3 p-4 sm:px-5 sm:py-4"
            >
              <IconBadge>
                <Icon size={21} strokeWidth={1.4} />
              </IconBadge>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-semibold tracking-tight sm:text-lg">
                    {item.name}
                  </h3>
                  <StatusBadge
                    tone={
                      item.level === "Experiência prática"
                        ? "accent"
                        : "neutral"
                    }
                  >
                    {item.level}
                  </StatusBadge>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SurfaceCard>
  );
}
