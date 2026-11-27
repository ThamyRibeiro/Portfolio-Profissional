import { Section } from "@/shared/components/layout/section";
import { ActionLink } from "@/shared/components/ui/action-link";
import { AnalysisExplorer } from "../analysis-explorer";
export function AnalysesSection() {
  return (
    <Section
      id="analises"
      title="A ciência por trás de cada amostra."
      description="Registros da prática em laboratório, organizados em análises físico-químicas e microbiológicas."
    >
      <nav
        aria-label="Explorar a atuação em laboratório"
        className="mb-5 flex flex-wrap gap-2"
      >
        <ActionLink href="#instrumentacao" variant="secondary" size="compact">
          Análises instrumentais
        </ActionLink>
        <ActionLink href="#desenvolvimento" variant="secondary" size="compact">
          Desenvolvimento analítico
        </ActionLink>
      </nav>
      <AnalysisExplorer />
      <p className="mt-6 text-sm leading-6 text-muted">
        Atuação também em DBO, pH, condutividade, turbidez, sólidos totais e
        sólidos suspensos totais (SST).
      </p>
      <p className="mt-2 text-sm leading-6 text-muted">
        Conhecimentos complementares em eletrocoagulação e Eletro Fenton.
      </p>
    </Section>
  );
}
