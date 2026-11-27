import type { MediaRecord } from "@/shared/types/media-record";

// Classificações e nomes confirmados pelo proprietário em 15/10/2026.
export const physicalChemicalRecords: MediaRecord[] = [
  {
    kind: "image",
    src: "/images/3.jpeg",
    alt: "Análise de cloreto, com amostras em erlenmeyers na bancada",
    title: "Análise de cloreto",
  },
  {
    kind: "image",
    src: "/images/7.jpeg",
    title: "Análise de Alcalinidade Total",
    alt: "Análise de Alcalinidade Total, com soluções em erlenmeyers na bancada",
  },
  {
    kind: "image",
    src: "/images/11.jpeg",
    title: "Análise de dureza",
    alt: "Análise de dureza, com soluções rosas e azuis em erlenmeyers",
  },
  {
    kind: "image",
    src: "/images/analise-ph.png",
    title: "Medição de pH e condutividade",
    alt: "Equipamento de medição de pH e condutividade, com eletrodo em uma amostra na bancada",
  },
  {
    kind: "image",
    src: "/images/solidos-totais.png",
    title: "Análise de sólidos totais",
    alt: "Resíduos de amostras em três recipientes de vidro na bancada",
  },
  {
    kind: "video",
    src: "/videos/13.mp4",
    poster: "/videos/13-poster.webp",
    duration: 19.966667,
    title: "Titulação iodométrica",
  },
];
export const microbiologyRecords: MediaRecord[] = [
  {
    kind: "image",
    src: "/images/8.jpeg",
    title: "Análise Microbiológica pelo método de Gram",
    alt: "Análise microbiológica pelo método de Gram, registrada por microscopia",
  },
  {
    kind: "image",
    src: "/images/microbiologica.jpg",
    title: "Análise microbiológica",
    alt: "Registro de análise microbiológica observado por microscopia",
  },
];
export const instrumentationRecords: MediaRecord[] = [
  {
    kind: "image",
    src: "/images/12.jpeg",
    title: "Análise de DQO no espectrofotômetro UV-Vis",
    alt: "Análise de DQO, com pipeta, tubos de ensaio e frascos organizados na bancada",
  },
  {
    kind: "video",
    src: "/videos/16.mp4",
    poster: "/videos/16-poster.webp",
    duration: 13.546667,
    title: "Titulação por potenciometria",
  },
  {
    kind: "image",
    src: "/images/9.jpeg",
    title: "Análise de acetona no CG",
    alt: "Análise de acetona no CG",
  },
  {
    kind: "image",
    src: "/images/15.jpeg",
    title: "Desenvolvimento de curva analítica no espectrofotômetro UV-Vis",
    alt: "Desenvolvimento de curva analítica no espectrofotômetro UV-Vis, com soluções em balões volumétricos",
  },
  {
    kind: "video",
    src: "/videos/6.mp4",
    poster: "/videos/6-poster.webp",
    posterTime: 0.04,
    duration: 8.635,
    title: "Análise de cafeína na Coca-Cola no HPLC",
  },
  {
    kind: "video",
    src: "/videos/cafeina-hplc.mp4",
    poster: "/videos/cafeina-hplc-poster.webp",
    duration: 15.648344671201814,
    title: "Análise de cafeína na Coca-Cola no HPLC",
  },
];
export const learningRecords: MediaRecord[] = [
  {
    kind: "image",
    src: "/images/2.jpeg",
    alt: "Thamires com credencial na entrada da FCE Cosmetique",
    title: "FCE Cosmetique",
  },
  {
    kind: "video",
    src: "/videos/4.mp4",
    poster: "/videos/4-poster.webp",
    duration: 6.561667,
    title: "Apresentação em sala",
  },
];
