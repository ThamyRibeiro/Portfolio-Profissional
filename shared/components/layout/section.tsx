import type { ReactNode } from "react";
import { PageContainer } from "./page-container";
export function Section({
  id,
  title,
  description,
  children,
  className = "",
  inverted = false,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={id + "-title"}
      className={"py-12 sm:py-16 " + className}
    >
      <PageContainer>
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2
            id={id + "-title"}
            className="max-w-2xl font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.12] font-semibold tracking-[-0.045em]"
          >
            {title}
          </h2>
          {description ? (
            <p
              className={
                "max-w-sm shrink-0 text-sm leading-6 md:w-[34%] " +
                (inverted ? "text-[#bdd5ed]" : "text-muted")
              }
            >
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </PageContainer>
    </section>
  );
}
