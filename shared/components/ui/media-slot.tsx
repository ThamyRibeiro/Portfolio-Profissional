import Image from "next/image";
import { Camera } from "lucide-react";
export type Media = { src: string; alt: string };
export function MediaSlot({
  image,
  label,
  className = "",
  density = "regular",
}: {
  image?: Media;
  label: string;
  className?: string;
  density?: "regular" | "compact";
}) {
  return (
    <div
      className={
        "relative isolate overflow-hidden rounded-[1.75rem] border border-line bg-soft " +
        className
      }
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      ) : (
        <>
          <svg
            fill="none"
            aria-hidden="true"
            viewBox="0 0 400 400"
            className="absolute inset-0 h-full w-full text-accent/12"
          >
            <circle
              cx="200"
              cy="180"
              r="135"
              fill="none"
              stroke="currentColor"
            />
            <circle
              cx="200"
              cy="180"
              r="100"
              fill="none"
              stroke="currentColor"
            />
            <path d="M35 180H365M200 15V345" stroke="currentColor" />
            <path
              d="M70 45H45V70M330 45H355V70M45 285V310H70M355 285V310H330"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <div
            className={
              "relative flex h-full flex-col items-center justify-center px-6 " +
              (density === "compact"
                ? "min-h-44 pb-20 pt-4"
                : "min-h-64 pb-24 pt-10")
            }
          >
            <span
              className={
                "flex items-center justify-center rounded-full border border-line bg-surface/80 text-accent " +
                (density === "compact" ? "size-12" : "size-20")
              }
            >
              <Camera
                size={density === "compact" ? 24 : 30}
                strokeWidth={1.2}
              />
            </span>
          </div>
          <div
            className={
              "absolute rounded-2xl border border-line bg-surface/90 " +
              (density === "compact"
                ? "inset-x-3 bottom-3 px-3 py-2"
                : "inset-x-4 bottom-4 px-5 py-4")
            }
          >
            <p className="text-sm font-medium text-foreground">{label}</p>
            <p className="mt-1 text-xs text-muted">Fotografia em breve</p>
          </div>
        </>
      )}
    </div>
  );
}
