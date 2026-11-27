"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, FileCheck2 } from "lucide-react";
import { ActionLink } from "@/shared/components/ui/action-link";
import { ContentDialog } from "@/shared/components/ui/content-dialog";

export function CertificateViewer({
  title,
  certificate,
  featured = false,
}: {
  title: string;
  certificate: { pdf: string; preview: string; width: number; height: number };
  featured?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <ContentDialog
      title={"Certificado — " + title}
      triggerLabel={"Visualizar certificado: " + title}
      closeLabel="Fechar certificado"
      triggerClassName={
        "relative z-20 mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold " +
        (featured
          ? "border-showcase-line text-showcase-accent hover:bg-showcase-foreground/5"
          : "border-line text-accent hover:bg-soft")
      }
      triggerContent={
        <>
          <FileCheck2 size={17} aria-hidden="true" />
          Visualizar certificado
        </>
      }
      mountOnOpen
    >
      {failed ? (
        <p role="status" className="py-6 text-sm text-muted">
          Não foi possível carregar a prévia. Abra o PDF completo abaixo.
        </p>
      ) : (
        <a
          href={certificate.preview}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"Ampliar certificado: " + title}
          className="block overflow-hidden rounded-xl border border-line bg-white"
        >
          <Image
            src={certificate.preview}
            alt={
              "Certificado de conclusão: " +
              title +
              ", de Thamires Ribeiro de Queiroz"
            }
            width={certificate.width}
            height={certificate.height}
            unoptimized
            className="mx-auto h-auto max-h-[calc(100dvh-16rem)] w-auto max-w-full object-contain"
            onError={() => setFailed(true)}
          />
        </a>
      )}
      <ActionLink
        href={certificate.pdf}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        size="compact"
        className="mt-4"
      >
        <ExternalLink size={16} aria-hidden="true" />
        Abrir PDF completo
      </ActionLink>
    </ContentDialog>
  );
}
