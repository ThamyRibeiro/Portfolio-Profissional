"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/shared/components/ui/theme-toggle";
import { trapDialogFocus } from "@/shared/lib/dialog-focus";
import { Brand } from "./brand";
import type { NavigationItem } from "./navigation";
export function MobileNavigation({
  items,
  activeHref,
}: {
  items: NavigationItem[];
  activeHref: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  useEffect(() => {
    const desktop = matchMedia("(min-width: 1024px)");
    const sync = () => {
      if (desktop.matches) dialog.current?.close();
    };
    desktop.addEventListener("change", sync);
    return () => desktop.removeEventListener("change", sync);
  }, []);
  const close = () => dialog.current?.close();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          dialog.current?.showModal();
          setOpen(true);
        }}
        aria-label="Abrir menu"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="flex size-11 items-center justify-center rounded-full bg-accent text-surface dark:text-[#071d36] lg:hidden"
      >
        <Menu size={20} strokeWidth={1.5} />
      </button>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        onKeyDown={trapDialogFocus}
        aria-labelledby="mobile-navigation-title"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            close();
        }}
        className="fixed inset-y-3 right-3 left-auto m-0 h-[calc(100dvh-1.5rem)] max-h-none w-[min(86vw,360px)] max-w-none overflow-y-auto rounded-[1.75rem] border border-line bg-surface p-0 text-foreground shadow-[0_30px_100px_-20px_#071d3680] backdrop:bg-[#071d36]/35 backdrop:backdrop-blur-sm"
      >
        <div className="flex min-h-full flex-col p-6">
          <div className="flex items-center justify-between gap-3">
            <div onClick={close}>
              <Brand compact />
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Fechar menu"
              className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line hover:bg-soft"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <h2 id="mobile-navigation-title" className="mt-12 text-xs text-muted">
            Explore o portfólio
          </h2>
          <nav aria-label="Navegação mobile" className="mt-5 space-y-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  close();
                }}
                className={
                  "flex min-h-15 items-center justify-between gap-3 rounded-2xl px-4 py-3 font-display text-xl tracking-tight " +
                  (activeHref === item.href
                    ? "bg-soft text-accent"
                    : "text-foreground hover:bg-soft")
                }
                aria-current={activeHref === item.href ? "location" : undefined}
              >
                {item.label}
                <ArrowUpRight size={18} strokeWidth={1.3} />
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-12">
            <div className="flex items-center justify-between border-t border-line pt-6">
              <div>
                <p className="text-sm font-medium">Do seu jeito.</p>
                <p className="mt-1 text-xs text-muted">
                  Alterne entre claro e escuro
                </p>
              </div>
              <ThemeToggle />
            </div>
            <p className="mt-8 text-xs leading-6 text-muted">
              Química, análises e qualidade.
              <br />
              Thamires Ribeiro de Queiroz.
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
