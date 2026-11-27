"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
} from "react";
import {
  Film,
  Maximize,
  Minimize,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
} from "lucide-react";
import type { MediaRecord } from "@/shared/types/media-record";
import { formatMediaTime } from "@/shared/utils/media-time";

type VideoRecord = Extract<MediaRecord, { kind: "video" }>;
const subscribeHydration = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function VideoPlayer({ item }: { item: VideoRecord }) {
  const root = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const cancelFrameReveal = useRef<(() => void) | null>(null);
  const enhanced = useSyncExternalStore(
    subscribeHydration,
    getClientSnapshot,
    getServerSnapshot,
  );
  const [playing, setPlaying] = useState(false);
  const [hasFrame, setHasFrame] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [muted, setMuted] = useState(false);
  const [ready, setReady] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(item.duration);
  const [fullscreen, setFullscreen] = useState(false);
  const [ended, setEnded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const element = video.current;
    const sync = () =>
      setFullscreen(document.fullscreenElement === root.current);
    document.addEventListener("fullscreenchange", sync);
    return () => {
      document.removeEventListener("fullscreenchange", sync);
      cancelFrameReveal.current?.();
      element?.pause();
    };
  }, []);

  const revealFirstFrame = () => {
    const element = video.current;
    if (!element || hasFrame || cancelFrameReveal.current) return;
    const revealAt = Math.max(0, item.posterTime ?? 0);

    const reveal = () => {
      cancelFrameReveal.current = null;
      setHasFrame(true);
    };

    // Keep the cover through any blank opening frames in the source file.
    if (typeof element.requestVideoFrameCallback === "function") {
      let request: number;
      const inspectFrame: VideoFrameRequestCallback = (_now, metadata) => {
        if (metadata.mediaTime >= revealAt) reveal();
        else request = element.requestVideoFrameCallback(inspectFrame);
      };
      request = element.requestVideoFrameCallback(inspectFrame);
      cancelFrameReveal.current = () => {
        element.cancelVideoFrameCallback(request);
        cancelFrameReveal.current = null;
      };
    } else {
      let request: number;
      let frameReady = false;
      const inspectFrame = () => {
        if (
          element.currentTime >= revealAt &&
          element.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
        ) {
          if (frameReady) {
            reveal();
            return;
          }
          frameReady = true;
        } else frameReady = false;
        request = requestAnimationFrame(inspectFrame);
      };
      request = requestAnimationFrame(inspectFrame);
      cancelFrameReveal.current = () => {
        cancelAnimationFrame(request);
        cancelFrameReveal.current = null;
      };
    }
  };

  const togglePlayback = async () => {
    const element = video.current;
    if (!element) return;
    if (!element.paused) {
      element.pause();
      return;
    }
    setError("");
    if (element.error) {
      cancelFrameReveal.current?.();
      setHasFrame(false);
      element.load();
    }
    try {
      await element.play();
    } catch (cause) {
      if (cause instanceof DOMException && cause.name === "AbortError") return;
      setWaiting(false);
      setError(
        "Não foi possível reproduzir. Tente novamente ou abra o arquivo original.",
      );
    }
  };

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement === root.current)
        await document.exitFullscreen();
      else if (root.current?.requestFullscreen)
        await root.current.requestFullscreen();
      else {
        const element = video.current as
          (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
        element?.webkitEnterFullscreen?.();
      }
    } catch {
      setError("Não foi possível abrir a tela cheia neste navegador.");
    }
  };

  return (
    <div
      ref={root}
      data-media-player
      className="flex h-full min-h-0 flex-col overflow-hidden bg-[#071d36] text-[#f5fbff] fullscreen:h-dvh fullscreen:w-dvw fullscreen:rounded-none"
      role="group"
      aria-label={"Reprodutor: " + item.title}
    >
      <div className="relative isolate min-h-0 flex-1 overflow-hidden">
        <Image
          src={item.poster}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          aria-hidden="true"
          className="pointer-events-none -z-10 scale-125 object-cover opacity-35 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-[#071d36]/75 via-[#071d36]/10 to-[#071d36]/20"
        />
        <video
          ref={video}
          src={item.src}
          poster={item.poster}
          data-media-player-video
          controls={!enhanced}
          playsInline
          preload="metadata"
          aria-label={item.title}
          className="absolute inset-0 h-full w-full object-contain"
          onLoadedMetadata={(event) => {
            setReady(true);
            const length = event.currentTarget.duration;
            if (Number.isFinite(length)) setDuration(length);
          }}
          onTimeUpdate={(event) => setCurrent(event.currentTarget.currentTime)}
          onSeeking={() => setEnded(false)}
          onPlay={(event) => {
            document
              .querySelectorAll<HTMLVideoElement>(
                "video[data-media-player-video]",
              )
              .forEach((other) => {
                if (other !== event.currentTarget) other.pause();
              });
            setPlaying(true);
            setEnded(false);
          }}
          onPause={() => {
            cancelFrameReveal.current?.();
            setPlaying(false);
            setWaiting(false);
          }}
          onEnded={() => {
            cancelFrameReveal.current?.();
            setPlaying(false);
            setEnded(true);
            setWaiting(false);
          }}
          onWaiting={() => setWaiting(true)}
          onPlaying={() => {
            setWaiting(false);
            revealFirstFrame();
          }}
          onCanPlay={() => setWaiting(false)}
          onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
          onError={() => {
            cancelFrameReveal.current?.();
            setWaiting(false);
            setPlaying(false);
            setError("Não foi possível carregar este vídeo.");
          }}
        >
          Seu navegador não suporta este vídeo.{" "}
          <a href={item.src}>Abrir vídeo</a>.
        </video>
        {!hasFrame && enhanced ? (
          <Image
            src={item.poster}
            data-media-player-cover
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            loading="eager"
            unoptimized
            aria-hidden="true"
            className="pointer-events-none object-contain"
          />
        ) : null}
        <div className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#071d36]/85 px-3 py-1.5 text-[11px] font-semibold backdrop-blur-sm">
            <Film aria-hidden="true" size={13} />
            Vídeo
          </span>
          <span className="rounded-full border border-white/20 bg-[#071d36]/85 px-2.5 py-1.5 text-[11px] tabular-nums backdrop-blur-sm">
            {formatMediaTime(duration)}
          </span>
        </div>
        {!playing && enhanced ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={() => void togglePlayback()}
              aria-label={
                (ended ? "Repetir vídeo: " : "Reproduzir vídeo: ") + item.title
              }
              className="pointer-events-auto flex flex-col items-center gap-2 rounded-3xl px-5 py-4 focus-visible:outline-[#b9e5ff]"
            >
              <span className="flex size-16 items-center justify-center rounded-full border border-white/55 bg-[#e2f0ff]/95 text-[#10365d] shadow-[0_8px_32px_#071d3660]">
                {ended ? (
                  <RotateCcw aria-hidden="true" size={27} />
                ) : (
                  <Play
                    aria-hidden="true"
                    size={27}
                    fill="currentColor"
                    className="ml-1"
                  />
                )}
              </span>
              <span className="rounded-full bg-[#071d36]/85 px-3 py-1 text-xs font-medium">
                {ended ? "Assistir novamente" : "Reproduzir"}
              </span>
            </button>
          </div>
        ) : null}
        {waiting || (playing && !hasFrame) ? (
          <p
            role="status"
            className="pointer-events-none absolute inset-x-3 bottom-3 rounded-xl bg-[#071d36]/90 px-3 py-2 text-center text-xs"
          >
            Carregando vídeo…
          </p>
        ) : null}
      </div>
      <div className="shrink-0 border-t border-white/10 bg-[#0d2944] px-3 pb-2">
        <input
          type="range"
          min={0}
          max={duration || 1}
          step={0.1}
          value={Math.min(current, duration)}
          disabled={!ready}
          aria-label={"Posição do vídeo: " + item.title}
          aria-valuetext={
            formatMediaTime(current) + " de " + formatMediaTime(duration)
          }
          onChange={(event) => {
            const value = Number(event.target.value);
            if (video.current) video.current.currentTime = value;
            setCurrent(value);
          }}
          style={
            {
              "--played": `${duration ? (current / duration) * 100 : 0}%`,
            } as CSSProperties
          }
          className="video-progress disabled:cursor-default disabled:opacity-50"
        />
        <div className="flex items-center gap-1">
          <button
            type="button"
            disabled={!enhanced}
            onClick={() => void togglePlayback()}
            aria-label={
              (playing ? "Pausar vídeo: " : "Reproduzir vídeo: ") + item.title
            }
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-[#b9e5ff]"
          >
            {playing ? (
              <Pause aria-hidden="true" size={19} fill="currentColor" />
            ) : (
              <Play aria-hidden="true" size={19} fill="currentColor" />
            )}
          </button>
          <span className="ml-1 whitespace-nowrap text-[11px] tabular-nums text-[#c9e0f5]">
            {formatMediaTime(current)} / {formatMediaTime(duration)}
          </span>
          <div className="flex-1" />
          <button
            type="button"
            onClick={() => {
              if (video.current) video.current.muted = !video.current.muted;
            }}
            aria-label={muted ? "Ativar som" : "Silenciar vídeo"}
            aria-pressed={muted}
            className="flex size-11 shrink-0 items-center justify-center rounded-full hover:bg-white/10 focus-visible:outline-[#b9e5ff]"
          >
            {muted ? (
              <VolumeX aria-hidden="true" size={18} />
            ) : (
              <Volume2 aria-hidden="true" size={18} />
            )}
          </button>
          <button
            type="button"
            onClick={() => void toggleFullscreen()}
            aria-label={
              fullscreen ? "Sair da tela cheia" : "Ampliar vídeo em tela cheia"
            }
            className="flex size-11 shrink-0 items-center justify-center rounded-full hover:bg-white/10 focus-visible:outline-[#b9e5ff]"
          >
            {fullscreen ? (
              <Minimize aria-hidden="true" size={18} />
            ) : (
              <Maximize aria-hidden="true" size={18} />
            )}
          </button>
        </div>
        {error ? (
          <div
            role="status"
            className="border-t border-white/15 px-1 py-3 text-xs leading-5 text-[#c9e0f5]"
          >
            <p>{error}</p>
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex min-h-11 items-center underline underline-offset-4"
            >
              Abrir arquivo original
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
