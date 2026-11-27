import { Beaker, Droplets, Microscope, ShieldCheck } from "lucide-react";
const areas = [
  { icon: Droplets, title: "Água e efluentes" },
  { icon: Beaker, title: "Físico-química" },
  { icon: Microscope, title: "Instrumentação" },
  { icon: ShieldCheck, title: "Qualidade" },
];
export function ExpertiseBand() {
  return (
    <div className="relative z-10 border-t border-showcase-line bg-showcase-foreground/[.035]">
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-5 py-4 sm:px-8 md:grid-cols-4 lg:px-10">
        {areas.map(({ icon: Icon, title }) => (
          <div key={title} className="flex min-w-0 items-center gap-2.5">
            <Icon
              size={20}
              strokeWidth={1.3}
              aria-hidden="true"
              className="shrink-0 text-showcase-accent"
            />
            <p className="text-xs leading-5 font-medium text-showcase-foreground sm:text-sm">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
