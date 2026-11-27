"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Camera, Film, X } from "lucide-react";
import { trapDialogFocus } from "@/shared/lib/dialog-focus";

export function MediaDialog({
  title,
  kind,
  trigger,
  triggerClassName,
  children,
}: {
  title: string;
  kind: "image" | "video";
  trigger: ReactNode;
  triggerClassName: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const triggerButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const id = useId();
  const isVideo = kind === "video";
  const TypeIcon = isVideo ? Film : Camera;

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
        ref={triggerButton}
        type="button"
        aria-label={(isVideo ? "Assistir vídeo: " : "Ampliar foto: ") + title}
        aria-haspopup="dialog"
        onClick={() => {
          dialog.current?.showModal();
          setOpen(true);
        }}
        className={triggerClassName}
      >
        {trigger}
      </button>
      <dialog
        ref={dialog}
        onClose={() => {
          setOpen(false);
          triggerButton.current?.focus();
        }}
        onKeyDown={trapDialogFocus}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        aria-labelledby={id + "-title"}
        className="m-auto max-h-[calc(100dvh-1.5rem)] w-[calc(100%-1.5rem)] max-w-5xl overflow-y-auto rounded-3xl border-0 bg-surface p-0 text-foreground backdrop:bg-[#071d36]/75 backdrop:backdrop-blur-sm"
      >
        {open ? (
          <div className="overflow-hidden rounded-3xl border border-line">
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2">
              <h2
                id={id + "-title"}
                className="flex items-center gap-2 text-sm leading-6 font-semibold"
              >
                <TypeIcon
                  aria-hidden="true"
                  size={16}
                  className="shrink-0 text-accent"
                />
                {title}
              </h2>
              <button
                ref={closeButton}
                type="button"
                onClick={() => dialog.current?.close()}
                aria-label={isVideo ? "Fechar vídeo" : "Fechar foto"}
                className="flex size-11 shrink-0 items-center justify-center rounded-full hover:bg-soft"
              >
                <X aria-hidden="true" size={20} />
              </button>
            </div>
            <div
              data-media-dialog-frame
              className="relative h-[min(75dvh,760px)] min-h-0 bg-background"
            >
              {children}
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
