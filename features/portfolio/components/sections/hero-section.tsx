import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { ActionLink } from "@/shared/components/ui/action-link";
import { PageContainer } from "@/shared/components/layout/page-container";
import { profile } from "../../data/profile";
import { MolecularScene } from "../molecular-scene";
import { ExpertiseBand } from "../expertise-band";
export function HeroSection() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="pb-4 pt-1">
      <PageContainer>
        <div className="relative isolate overflow-hidden rounded-4xl bg-showcase text-showcase-foreground sm:rounded-[2.75rem]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-30 -top-20 size-162.5 rounded-full border border-showcase-line"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 top-4 size-127.5 rounded-full border border-showcase-line"
          />
          <div className="relative grid items-center px-5 pt-7 pb-4 sm:px-8 sm:pt-9 sm:pb-6 md:grid-cols-[1fr_.9fr] md:gap-6 md:py-9 lg:px-10 lg:py-10">
            <div className="relative z-10">
              <p className="mb-4 flex items-center gap-3 text-xs text-showcase-muted sm:text-sm">
                <span className="hidden h-px w-8 shrink-0 bg-showcase-accent sm:block" />
                Análises laboratoriais & controle de qualidade
              </p>
              <h1
                id="hero-title"
                className="font-display text-[clamp(3.5rem,7.7vw,7.25rem)] leading-[.98] font-semibold tracking-[-0.065em]"
              >
                <span className="block">Thamires</span>
                <span className="block">Queiroz</span>
              </h1>
              <p className="mt-4 max-w-lg text-lg leading-7 font-light text-showcase-accent sm:text-xl sm:leading-8 lg:text-2xl">
                O olhar científico.
                <br />O cuidado em cada análise.
              </p>
              <p className="mt-3 max-w-md text-sm leading-6 text-showcase-muted">
                Análises de água e efluentes, instrumentação e controle de
                qualidade. Atenção aos detalhes, da amostra ao resultado.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                <ActionLink
                  href="#experiencia"
                  variant="inverse"
                  size="compact"
                >
                  Ver experiência
                  <ArrowDownRight
                    aria-hidden="true"
                    size={18}
                    className="hidden shrink-0 sm:block"
                  />
                </ActionLink>
                <ActionLink
                  href={profile.resume}
                  download
                  variant="ghostInverse"
                  size="compact"
                  aria-label="Baixar currículo em PDF"
                >
                  <Download aria-hidden="true" size={17} className="shrink-0" />
                  Currículo
                </ActionLink>
              </div>
              <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-showcase-muted">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} />
                  {profile.location}
                </span>
                <span>{profile.registration}</span>
              </p>
            </div>
            <div className="relative -mx-3 mt-3 aspect-4/3 w-[calc(100%+1.5rem)] max-w-105 justify-self-center sm:mx-0 sm:w-full md:mt-0 md:max-w-150 md:justify-self-end">
              <MolecularScene />
              <div className="absolute right-3 top-0 rounded-full border border-showcase-line bg-showcase-foreground/5 px-3 py-1.5 text-[10px] text-showcase-accent backdrop-blur-sm sm:right-5 sm:text-xs">
                H₂O · Ciência em movimento
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                <p className="font-display text-sm font-light tracking-wide text-showcase-foreground sm:text-base">
                  Precisão que inspira confiança.
                </p>
              </div>
            </div>
          </div>
          <ExpertiseBand />
        </div>
      </PageContainer>
    </section>
  );
}
