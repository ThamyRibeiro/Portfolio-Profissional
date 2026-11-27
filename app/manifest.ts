import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Thamires Queiroz | Portfólio de Química",
    short_name: "Thamires Queiroz",
    description:
      "Análises laboratoriais, água e efluentes e controle de qualidade.",
    lang: "pt-BR",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#091b2e",
    theme_color: "#123459",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      { name: "Experiência profissional", url: "/#experiencia" },
      { name: "Contato profissional", url: "/#contato" },
    ],
  };
}
