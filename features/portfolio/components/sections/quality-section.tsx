import { ShieldCheck } from "lucide-react";
import { Section } from "@/shared/components/layout/section";
import { SurfaceCard } from "@/shared/components/ui/surface-card";
import { Checklist } from "@/shared/components/ui/checklist";
const practices = [
  "Elaboração e revisão de POPs",
  "Calibração e verificação de equipamentos",
  "Rastreabilidade técnica e laudos",
  "Gestão de FDS e documentação",
  "Suporte a auditorias",
  "Metodologia 5S e indicadores",
];
export function QualitySection() {
  return (
    <Section
      id="qualidade"
      title="Qualidade em todas as etapas."
      description="Procedimentos claros, instrumentos verificados e registros rastreáveis para uma rotina confiável."
      className="bg-soft/65 [&_li]:text-base [&_li]:leading-7"
    >
      <SurfaceCard tone="showcase">
        <div className="grid items-center gap-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-10">
          <div className="relative">
            <ShieldCheck
              size={56}
              strokeWidth={0.9}
              className="mb-4 text-showcase-accent"
            />
            <h3 className="max-w-sm font-display text-xl leading-tight font-semibold tracking-tight sm:text-2xl">
              Confiança construída na rotina.
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-showcase-muted">
              A atenção aos detalhes conecta o preparo, a análise e a
              documentação.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface/90 p-4 sm:p-5">
            <Checklist items={practices} columns="two" />
          </div>
        </div>
      </SurfaceCard>
    </Section>
  );
}
