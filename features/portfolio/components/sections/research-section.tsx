import { Handshake } from "lucide-react";
import { Section } from "@/shared/components/layout/section";
import { SurfaceCard } from "@/shared/components/ui/surface-card";
import { IconBadge } from "@/shared/components/ui/icon-badge";
import { MediaCard } from "@/shared/components/ui/media-card";
import { MediaGrid } from "@/shared/components/layout/media-grid";
import { learningRecords } from "../../data/media-records";
import { skillEvidence } from "../../data/skills";
import { SkillsTables } from "../skills-tables";
const skills = [
  "Organização laboratorial",
  "Rastreabilidade",
  "Melhoria contínua",
  "Excel intermediário",
  "Inglês básico",
];
export function ResearchSection() {
  return (
    <Section
      id="pesquisa"
      title="Conhecimento também se compartilha."
      description="Pesquisa, extensão e competências que apoiam o desenvolvimento profissional."
    >
      <SurfaceCard className="mb-5 grid items-start gap-5 md:grid-cols-2">
        <div>
          <IconBadge>
            <Handshake size={24} strokeWidth={1.4} />
          </IconBadge>
          <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
            Organização, cuidado e colaboração
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            Gestão de amostras e insumos, apoio a auditorias e atuação entre
            Controle de Qualidade e Desenvolvimento são experiências que exigem
            atenção aos detalhes e organização.
          </p>
        </div>
        <div className="flex flex-wrap gap-1 md:pt-3 xl:flex-nowrap">
          {skills.map((skill) => (
            <span
              key={skill}
              className="whitespace-nowrap rounded-full border border-line bg-soft/50 px-2 py-2 text-[11px] leading-5 text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </SurfaceCard>
      <SkillsTables />
      <MediaGrid balanced>
        {learningRecords.map((item) => (
          <MediaCard
            key={item.src}
            item={item}
            caption={skillEvidence[item.src]}
          />
        ))}
      </MediaGrid>
    </Section>
  );
}
