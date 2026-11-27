import { Section } from "@/shared/components/layout/section";
import { experience } from "../../data/profile";
import { ExperienceCard } from "../experience-card";
export function ExperienceSection() {
  return (
    <Section
      id="experiencia"
      title="Onde o conhecimento encontra a prática."
      description="Minha trajetória em laboratório, com atuação em análises, desenvolvimento e controle de qualidade."
    >
      <div className="relative grid gap-4 sm:gap-5">
        {experience.map((item) => (
          <ExperienceCard key={item.company} item={item} />
        ))}
      </div>
    </Section>
  );
}
