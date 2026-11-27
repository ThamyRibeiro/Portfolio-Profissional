import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  GraduationCap,
} from "lucide-react";
import { SurfaceCard } from "@/shared/components/ui/surface-card";
import { ContentDialog } from "@/shared/components/ui/content-dialog";
import { Checklist } from "@/shared/components/ui/checklist";
import type { ComplementaryCourse } from "../data/complementary-courses";
import { CertificateViewer } from "./certificate-viewer";
export function CourseCard({
  course,
  featured = false,
}: {
  course: ComplementaryCourse;
  featured?: boolean;
}) {
  return (
    <div className="relative h-full min-w-0">
      <SurfaceCard
        tone={featured ? "showcase" : "surface"}
        className="flex h-full flex-col"
      >
        <div className="mb-4 flex items-center justify-between gap-3 text-xs">
          <span className={featured ? "text-showcase-accent" : "text-accent"}>
            {course.area}
          </span>
          <span className={featured ? "text-showcase-muted" : "text-muted"}>
            Concluído
          </span>
        </div>
        <h3 className="font-display text-xl leading-7 font-semibold tracking-tight">
          {course.title}
        </h3>
        <p
          className={
            "mt-1 text-sm leading-6 " +
            (featured ? "text-showcase-muted" : "text-muted")
          }
        >
          {course.institution}
        </p>
        <p
          className={
            "mt-3 text-sm leading-6 " +
            (featured ? "text-showcase-muted" : "text-muted")
          }
        >
          {course.summary}
        </p>
        <div className="mt-auto pt-5">
          <div
            className={
              "flex flex-wrap gap-x-4 gap-y-2 text-xs " +
              (featured ? "text-showcase-muted" : "text-muted")
            }
          >
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={14} aria-hidden="true" />
              {course.hours} horas
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} aria-hidden="true" />
              {course.completion}
            </span>
          </div>
          <span
            aria-hidden="true"
            className={
              "mt-4 flex min-h-11 items-center justify-between gap-3 border-t pt-3 text-sm font-semibold " +
              (featured
                ? "border-showcase-line text-showcase-accent"
                : "border-line text-accent")
            }
          >
            Ver conteúdo do curso
            <ArrowUpRight size={17} />
          </span>
          <CertificateViewer
            title={course.title}
            certificate={course.certificate}
            featured={featured}
          />
        </div>
      </SurfaceCard>
      <ContentDialog
        title={course.title}
        triggerLabel={"Ver conteúdo do curso: " + course.title}
        closeLabel="Fechar detalhes do curso"
      >
        <div className="flex items-start gap-3">
          <GraduationCap
            size={24}
            className="shrink-0 text-accent"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm font-medium">{course.institution}</p>
            <p className="mt-1 text-sm leading-6 text-muted">
              {course.hours} horas · Concluído em {course.completion}
            </p>
          </div>
        </div>
        <h3 className="mt-6 mb-3 font-display text-lg font-semibold">
          Conteúdo da formação
        </h3>
        <Checklist items={course.topics} />
      </ContentDialog>
    </div>
  );
}
