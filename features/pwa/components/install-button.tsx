"use client";
import { Download } from "lucide-react";
import { useInstall } from "../hooks/use-install";
export function InstallButton() {
  const { installed, pending, message, install } = useInstall();
  if (installed)
    return <span className="text-xs text-muted">Portfólio instalado</span>;
  return (
    <div className="max-w-sm">
      <button
        type="button"
        onClick={() => void install()}
        disabled={pending}
        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent disabled:cursor-wait"
      >
        <Download size={16} />
        {pending ? "Preparando instalação…" : "Instalar portfólio"}
      </button>
      {message ? (
        <p role="status" className="mt-2 text-xs leading-6 text-muted">
          {message}
        </p>
      ) : null}
    </div>
  );
}
