import type { ReactNode } from "react";
import { SiteHeader } from "@/shared/components/layout/site-header";
import { SiteFooter } from "@/shared/components/layout/site-footer";
import { HeroSection } from "./sections/hero-section";
import { AboutSection } from "./sections/about-section";
import { EducationSection } from "./sections/education-section";
import { AnalysesSection } from "./sections/analyses-section";
import { InstrumentationSection } from "./sections/instrumentation-section";
import { DevelopmentSection } from "./sections/development-section";
import { QualitySection } from "./sections/quality-section";
import { ExperienceSection } from "./sections/experience-section";
import { ResearchSection } from "./sections/research-section";
import { CoursesSection } from "./sections/courses-section";
import { ContactSection } from "./sections/contact-section";

export function Portfolio({ installAction }: { installAction?: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <AnalysesSection />
        <InstrumentationSection />
        <DevelopmentSection />
        <QualitySection />
        <ExperienceSection />
        <ResearchSection />
        <CoursesSection />
        <ContactSection />
      </main>
      <SiteFooter
        name="Thamires Ribeiro de Queiroz"
        developer={{
          name: "Kaiqui Lucas",
          href: "https://www.linkedin.com/in/kaiqui-lucas/",
        }}
      >
        {installAction}
      </SiteFooter>
    </>
  );
}
