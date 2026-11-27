import { Section } from "@/shared/components/layout/section";
import { MediaCard } from "@/shared/components/ui/media-card";
import { MediaGrid } from "@/shared/components/layout/media-grid";
import { instrumentationRecords } from "../../data/media-records";
import { InstrumentList } from "../instrument-list";
export function InstrumentationSection() {
  return (
    <Section
      id="instrumentacao"
      title="Técnica, precisão e repertório."
      description="Instrumentação analítica: experiência prática e conhecimentos que ampliam meu olhar para o laboratório."
      className="bg-soft/65"
    >
      <InstrumentList />
      <h3 className="mt-8 mb-5 font-display text-xl font-semibold tracking-tight sm:text-2xl">
        Análises instrumentais
      </h3>
      <MediaGrid columns={4} balanced>
        {instrumentationRecords.map((item) => (
          <MediaCard key={item.src} item={item} />
        ))}
      </MediaGrid>
    </Section>
  );
}
