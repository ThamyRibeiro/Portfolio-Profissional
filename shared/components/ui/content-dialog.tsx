"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { trapDialogFocus } from "@/shared/lib/dialog-focus";

export function ContentDialog({
  title,
  children,
  triggerLabel,
  closeLabel = "Fechar detalhes da formação",
  triggerContent,
  triggerClassName = "absolute inset-0 z-10 rounded-[1.75rem] hover:bg-accent/5 focus-visible:outline-offset-4",
  mountOnOpen = false,
}: {
  title: string;
  children: ReactNode;
  triggerLabel: string;
  closeLabel?: string;
  triggerContent?: ReactNode;
  triggerClassName?: string;
  mountOnOpen?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={id + "-dialog"}
        aria-label={triggerLabel}
        className={triggerClassName}
        onClick={() => {
          dialog.current?.showModal();
          setOpen(true);
        }}
      >
        {triggerContent}
      </button>
      <dialog
        ref={dialog}
        id={id + "-dialog"}
        aria-labelledby={id}
        onKeyDown={trapDialogFocus}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            dialog.current?.close();
        }}
        className="m-auto max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-2xl overflow-y-auto rounded-3xl border border-line bg-surface p-0 text-foreground shadow-xl backdrop:bg-[#071d36]/75 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-7">
          <h2
            id={id}
            className="pt-2 font-display text-xl leading-7 font-semibold tracking-tight sm:text-2xl"
          >
            {title}
          </h2>
          <button
            ref={closeButton}
            type="button"
            aria-label={closeLabel}
            onClick={() => dialog.current?.close()}
            className="flex size-11 shrink-0 items-center justify-center rounded-full hover:bg-soft"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="p-5 sm:p-7">
          {!mountOnOpen || open ? children : null}
        </div>
      </dialog>
    </>
  );
}
