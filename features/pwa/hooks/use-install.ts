"use client";
import { useEffect, useState } from "react";
type InstallEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};
export function useInstall() {
  const [prompt, setPrompt] = useState<InstallEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const standalone = matchMedia("(display-mode: standalone)");
    const sync = () =>
      setInstalled(
        standalone.matches ||
          Boolean(
            (navigator as Navigator & { standalone?: boolean }).standalone,
          ),
      );
    sync();
    const onPrompt = (event: Event) => {
      event.preventDefault();
      setPrompt(event as InstallEvent);
    };
    const onInstalled = () => {
      setInstalled(true);
      setPrompt(null);
      setMessage("Portfólio instalado.");
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    standalone.addEventListener("change", sync);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
      standalone.removeEventListener("change", sync);
    };
  }, []);
  const install = async () => {
    if (!prompt) {
      setMessage(
        "No menu do navegador, procure “Instalar aplicativo” ou “Adicionar à tela de início”. No iPhone, abra no Safari e use Compartilhar → Adicionar à Tela de Início.",
      );
      return;
    }
    setPending(true);
    try {
      await prompt.prompt();
      const choice = await prompt.userChoice;
      setMessage(
        choice.outcome === "accepted"
          ? "Instalação solicitada ao navegador."
          : "Você pode instalar o portfólio quando quiser.",
      );
      setPrompt(null);
    } catch {
      setMessage(
        "Use o menu do navegador para instalar ou adicionar à tela de início.",
      );
    } finally {
      setPending(false);
    }
  };
  return { installed, pending, message, install };
}
