"use client";
import { useEffect } from "react";
export function PwaRegistration() {
  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      !("serviceWorker" in navigator)
    )
      return;
    let stopped = false;
    const register = () => {
      if (stopped) return;
      void navigator.serviceWorker
        .register("/sw.js", { scope: "/", updateViaCache: "none" })
        .catch((error) =>
          console.error("Não foi possível preparar o acesso offline.", error),
        );
    };
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
    return () => {
      stopped = true;
      window.removeEventListener("load", register);
    };
  }, []);
  return null;
}
