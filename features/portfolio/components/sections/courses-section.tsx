import { Section } from "@/shared/components/layout/section";
import { SurfaceCard } from "@/shared/components/ui/surface-card";
import { additionalQualifications } from "../../data/profile";
import { complementaryCourses } from "../../data/complementary-courses";
import { CourseCard } from "../course-card";
export function CoursesSection() {
  return (
    <Section
      id="cursos"
      title="Aprender é parte do caminho."
      description="Formações concluídas em laboratório, idiomas, informática, tecnologia e gestão de projetos."
      className="bg-soft/65"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {complementaryCourses.map((course, index) => (
          <div
            key={course.id}
            className={
              (index === 4 ? "md:col-span-2 " : "") +
              (index < 3 ? "xl:col-span-2" : "xl:col-span-3")
            }
          >
            <CourseCard course={course} featured={index === 0} />
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-line pt-5">
        <h3 className="mb-3 font-display text-lg font-semibold tracking-tight">
          Conhecimentos complementares
        </h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {additionalQualifications.map((item) => (
            <SurfaceCard key={item.title} padding="compact">
              <h4 className="font-display text-base font-semibold">
                {item.title}
              </h4>
              <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
            </SurfaceCard>
          ))}
        </div>
        <p className="mt-3 text-xs leading-6 text-muted">
          O certificado de Excel é de nível básico. O conhecimento intermediário
          é informado no currículo.
        </p>
      </div>
    </Section>
  );
}
