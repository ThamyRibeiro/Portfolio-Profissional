import { Beaker, FlaskConical, Microscope } from "lucide-react";
import { Section } from "@/shared/components/layout/section";
import { SurfaceCard } from "@/shared/components/ui/surface-card";
import { IconBadge } from "@/shared/components/ui/icon-badge";
const activities = [
  {
    icon: FlaskConical,
    title: "Preparo de soluções",
    text: "Preparo e controle de soluções tituladas, reagentes e padrões analíticos na rotina laboratorial.",
  },
  {
    icon: Beaker,
    title: "Padronização",
    text: "Padronização de reagentes e soluções para apoiar a confiabilidade dos ensaios.",
  },
  {
    icon: Microscope,
    title: "Métodos analíticos",
    text: "Vivência em validação de métodos na Serv Chemical e atuação em Desenvolvimento na Procytek.",
  },
];
export function DevelopmentSection() {
  return (
    <Section
      id="desenvolvimento"
      title="O resultado começa no preparo."
      description="Desenvolvimento analítico com cuidado em soluções, padrões e procedimentos."
    >
      <div className="grid gap-3 md:grid-cols-3">
        {activities.map(({ icon: Icon, title, text }) => (
          <SurfaceCard
            key={title}
            padding="compact"
            className="flex items-start gap-4 md:flex-col"
          >
            <IconBadge>
              <Icon size={24} strokeWidth={1.4} />
            </IconBadge>
            <div className="min-w-0">
              <h3 className="font-display text-lg font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </Section>
  );
}
