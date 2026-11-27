"use client";

import Image from "next/image";
import { useState } from "react";
import { Camera, Expand, Film, Play } from "lucide-react";
import { formatMediaTime } from "@/shared/utils/media-time";
import type { MediaRecord } from "@/shared/types/media-record";
import { VideoPlayer } from "./video-player";
import { MediaDialog } from "./media-dialog";

function PhotoViewer({
  item,
}: {
  item: Extract<MediaRecord, { kind: "image" }>;
}) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <p
        role="status"
        className="flex h-full items-center justify-center px-5 text-center text-sm text-muted"
      >
        Não foi possível carregar a foto.{" "}
        <a
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 inline-flex min-h-11 items-center text-accent underline"
        >
          Abrir original
        </a>
      </p>
    );
  return (
    <Image
      src={item.src}
      alt={item.alt}
      fill
      sizes="(max-width: 1024px) 100vw, 1024px"
      className="object-contain"
      onError={() => setFailed(true)}
    />
  );
}

export function MediaCard({
  item,
  layout = "natural",
  caption,
}: {
  item: MediaRecord;
  layout?: "natural" | "fill";
  caption?: string;
}) {
  const isVideo = item.kind === "video";
  const TypeIcon = isVideo ? Film : Camera;

  return (
    <figure
      className={
        "flex min-w-0 flex-col overflow-hidden rounded-[1.75rem] border bg-surface text-foreground " +
        (isVideo ? "border-accent/35 " : "border-line ") +
        (layout === "fill" ? "h-full" : "")
      }
    >
      <MediaDialog
        title={item.title}
        kind={item.kind}
        triggerClassName={
          "group relative isolate block aspect-4/3 w-full shrink-0 overflow-hidden bg-soft focus-visible:outline-offset-[-5px] " +
          (layout === "fill" ? "lg:aspect-auto lg:min-h-0 lg:flex-1" : "")
        }
        trigger={
          <>
            {item.kind === "video" ? (
              <Image
                src={item.poster}
                alt=""
                fill
                sizes="(max-width: 639px) 100vw, 440px"
                aria-hidden="true"
                className="pointer-events-none -z-10 scale-125 object-cover opacity-30 blur-2xl"
              />
            ) : null}
            <Image
              src={item.kind === "image" ? item.src : item.poster}
              alt={item.kind === "image" ? item.alt : ""}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 640px"
              className={
                "object-contain " +
                (layout === "fill"
                  ? "lg:object-cover lg:object-[center_60%]"
                  : "")
              }
            />
            <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/95 px-3 py-1.5 text-[11px] font-semibold">
              <TypeIcon aria-hidden="true" size={13} />
              {isVideo ? "Vídeo" : "Foto"}
            </span>
            {item.kind === "video" ? (
              <>
                <span className="absolute top-3 right-3 rounded-full border border-line bg-surface/95 px-2.5 py-1.5 text-[11px] tabular-nums">
                  {formatMediaTime(item.duration)}
                </span>
                <span className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <span className="flex size-16 items-center justify-center rounded-full border border-white/55 bg-[#e2f0ff]/95 text-[#10365d] shadow-[0_8px_32px_#071d3660]">
                    <Play
                      aria-hidden="true"
                      size={27}
                      fill="currentColor"
                      className="ml-1"
                    />
                  </span>
                  <span className="rounded-full bg-[#071d36]/90 px-3 py-1 text-xs font-medium text-white">
                    Assistir vídeo
                  </span>
                </span>
              </>
            ) : (
              <span className="absolute right-3 bottom-3 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface/95 px-3 text-xs font-medium group-hover:bg-soft">
                <Expand aria-hidden="true" size={15} />
                Ampliar foto
              </span>
            )}
          </>
        }
      >
        {item.kind === "video" ? (
          <VideoPlayer item={item} />
        ) : (
          <PhotoViewer item={item} />
        )}
      </MediaDialog>
      <figcaption
        className={
          "border-t border-line px-4 py-4 sm:px-5 " +
          (layout === "fill" ? "shrink-0" : "flex-1")
        }
      >
        <h3 className="font-display text-base leading-6 font-semibold tracking-tight sm:text-lg">
          {item.title}
        </h3>
        {caption ? (
          <p className="mt-1 text-sm leading-6 text-muted">{caption}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}
