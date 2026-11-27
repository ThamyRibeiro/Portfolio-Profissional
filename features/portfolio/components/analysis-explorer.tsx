import { MediaCard } from "@/shared/components/ui/media-card";
import { MediaGrid } from "@/shared/components/layout/media-grid";
import {
  physicalChemicalRecords,
  microbiologyRecords,
} from "../data/media-records";
const groups = [
  {
    id: "analises-fisico-quimicas",
    title: "Análises físico-químicas",
    records: physicalChemicalRecords,
  },
  {
    id: "analises-microbiologicas",
    title: "Análises microbiológicas",
    records: microbiologyRecords,
  },
];
export function AnalysisExplorer() {
  return (
    <div className="space-y-10">
      {groups.map((group) => (
        <section
          key={group.id}
          id={group.id}
          aria-labelledby={group.id + "-title"}
        >
          <h3
            id={group.id + "-title"}
            className="mb-5 font-display text-xl font-semibold tracking-tight sm:text-2xl"
          >
            {group.title}
          </h3>
          <MediaGrid>
            {group.records.map((item) => (
              <MediaCard key={item.src} item={item} />
            ))}
          </MediaGrid>
        </section>
      ))}
    </div>
  );
}
