import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "./page-container";
export function SiteFooter({
  name,
  developer,
  children,
}: {
  name: string;
  developer?: { name: string; href: string };
  children?: ReactNode;
}) {
  return (
    <footer className="border-t border-line">
      <PageContainer className="flex flex-col justify-between gap-3 py-6 text-xs text-muted sm:flex-row sm:items-center sm:gap-6">
        <div className="min-w-0">
          <p className="leading-6">
            © 2026 {name}. Todos os direitos reservados.
          </p>
          {developer ? (
            <p className="flex flex-wrap items-center gap-x-1 leading-6">
              Desenvolvido por{" "}
              <a
                href={developer.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 font-medium text-accent hover:underline"
              >
                {developer.name}
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {children}
          <a
            href="#inicio"
            className="inline-flex min-h-11 items-center gap-2 hover:text-accent"
          >
            Voltar ao início
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </PageContainer>
    </footer>
  );
}
