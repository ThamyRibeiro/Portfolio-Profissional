import {
  ArrowUpRight,
  FlaskConical,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { Section } from "@/shared/components/layout/section";
import { MediaSlot } from "@/shared/components/ui/media-slot";
import { media, profile } from "../../data/profile";
const strengths = [
  {
    icon: FlaskConical,
    text: "Experiência em análises laboratoriais e controle de qualidade",
  },
  {
    icon: ShieldCheck,
    text: "Compromisso com a confiabilidade dos resultados e a rastreabilidade",
  },
  {
    icon: GraduationCap,
    text: "Interesse em desenvolvimento, otimização de processos e evolução técnica",
  },
];
export function AboutSection() {
  return (
    <Section id="sobre" title="Ciência na prática. Cuidado nos detalhes.">
      <div className="grid items-center gap-7 md:grid-cols-[minmax(0,380px)_minmax(0,1fr)] md:gap-10">
        <div className="relative pb-5 pr-5">
          <div
            aria-hidden="true"
            className="absolute inset-0 left-5 top-5 rounded-[1.75rem] bg-accent/10"
          />
          <MediaSlot
            image={media.portrait}
            label="Thamires Ribeiro de Queiroz"
            className="aspect-3/4 max-h-120"
          />
          <div className="absolute bottom-0 right-0 rounded-2xl border border-line bg-surface px-5 py-4 shadow-sm">
            <p className="text-xs text-muted">Registro profissional</p>
            <p className="mt-1 text-sm font-semibold">{profile.registration}</p>
          </div>
        </div>
        <div className="max-w-2xl">
          <p className="font-display text-xl leading-normal font-medium tracking-tight sm:text-2xl">
            Sou Thamires. Transformo conhecimento químico em análises
            confiáveis, processos bem estruturados e soluções orientadas à
            qualidade.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Minha trajetória reúne experiência em laboratório químico, análises
            físico-químicas, preparo e padronização de soluções, operação de
            instrumentos e controle de qualidade. Com vivência nos segmentos de
            cosméticos e tratamento de águas e efluentes, busco unir
            conhecimento técnico, atenção aos detalhes e melhoria contínua para
            contribuir com resultados consistentes.
          </p>
          <div className="mt-5 space-y-3 border-y border-line py-4">
            {strengths.map(({ icon: Icon, text }) => (
              <p key={text} className="flex items-center gap-3 text-sm">
                <Icon
                  size={19}
                  strokeWidth={1.5}
                  className="shrink-0 text-accent"
                />
                {text}
              </p>
            ))}
          </div>
          <a
            href="#contato"
            className="mt-4 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-accent"
          >
            Vamos conversar
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </Section>
  );
}
