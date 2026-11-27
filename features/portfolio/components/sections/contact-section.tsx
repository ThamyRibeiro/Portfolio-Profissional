import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";
import { ActionLink } from "@/shared/components/ui/action-link";
import { PageContainer } from "@/shared/components/layout/page-container";
import { profile } from "../../data/profile";
export function ContactSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="py-10 sm:py-14"
    >
      <PageContainer>
        <div className="relative isolate overflow-hidden rounded-4xl border border-showcase-line bg-showcase px-6 py-8 text-showcase-foreground sm:rounded-[2.75rem] sm:px-10 sm:py-10">
          <ArrowUpRight
            aria-hidden="true"
            strokeWidth={0.6}
            className="pointer-events-none absolute -right-10 -top-10 -z-10 size-80 text-showcase-accent/10"
          />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            <div>
              <p className="mb-4 text-sm text-showcase-muted">
                Contato profissional
              </p>
              <h2
                id="contato-title"
                className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] font-semibold tracking-tighter"
              >
                Boas conexões também fazem ciência.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-showcase-muted">
                Vamos conversar sobre oportunidades em análises laboratoriais,
                controle de qualidade e Química aplicada.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-6">
              <a
                href={"mailto:" + profile.email}
                className="group flex min-h-15 items-center justify-between gap-4 border-b border-showcase-line pb-5"
              >
                <div>
                  <span className="mb-2 flex items-center gap-2 text-xs text-showcase-muted">
                    <Mail size={15} />
                    E-mail
                  </span>
                  <span className="break-all text-base font-medium sm:text-xl">
                    {profile.email}
                  </span>
                </div>
                <ArrowUpRight size={25} className="shrink-0" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-between gap-4 border-b border-showcase-line pb-5"
              >
                <span className="flex items-center gap-3 text-sm">
                  <ExternalLink size={18} />
                  Conecte-se no LinkedIn
                </span>
                <ArrowUpRight size={20} />
              </a>
              <p className="flex items-center gap-2 text-xs text-showcase-muted">
                <MapPin size={15} />
                {profile.location}
              </p>
              <ActionLink
                href={profile.resume}
                download
                variant="inverse"
                className="self-start"
              >
                <Download size={17} />
                Baixar currículo em PDF
              </ActionLink>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
