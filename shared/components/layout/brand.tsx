import { Atom } from "lucide-react";
export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#inicio"
      aria-label="Thamires Queiroz, início"
      className="flex shrink-0 items-center gap-2.5"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Atom size={25} strokeWidth={1.4} />
      </span>
      <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
        Thamires
        {compact ? null : (
          <span className="hidden font-normal min-[400px]:inline">
            {" "}
            Queiroz
          </span>
        )}
      </span>
    </a>
  );
}
