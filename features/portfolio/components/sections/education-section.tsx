import { ArrowUpRight } from "lucide-react";
import { Section } from "@/shared/components/layout/section";
import { ContentDialog } from "@/shared/components/ui/content-dialog";
import { StatusBadge } from "@/shared/components/ui/status-badge";
import { education } from "../../data/profile";
import { CredentialCard } from "../credential-card";
export function EducationSection() {
  return (
    <Section
      id="formacao"
      title="Uma base científica. Novas possibilidades."
      description="Graduação concluída e formação técnica em evolução, conectando Química, Cosméticos e Qualidade. Selecione uma formação para conhecer mais."
      className="bg-soft/65"
    >
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {education.map((item, index) => (
          <div key={item.title} className="relative min-w-0">
            <CredentialCard
              item={item}
              variant={index === 0 ? "featured" : "compact"}
              className="h-full"
              dateStyle="compact"
            >
              <span
                aria-hidden="true"
                className="flex min-h-11 items-center justify-between gap-3 border-t border-line pt-3 text-sm font-semibold text-accent"
              >
                Conheça a formação <ArrowUpRight size={18} />
              </span>
            </CredentialCard>
            <ContentDialog
              title={item.title}
              triggerLabel={"Conhecer a formação: " + item.title}
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                <span>{item.institution}</span>
                <StatusBadge tone="accent">{item.status}</StatusBadge>
              </div>
              <p className="mt-3 text-sm font-medium text-muted">{item.date}</p>
              <h3 className="mt-6 font-display text-lg font-semibold text-accent">
                {item.focus}
              </h3>
              <div className="mt-3 space-y-4 text-sm leading-7 text-muted">
                {item.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </ContentDialog>
          </div>
        ))}
      </div>
    </Section>
  );
}
