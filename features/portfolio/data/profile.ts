import type { Media } from "@/shared/components/ui/media-slot";
export const profile = {
  name: "Thamires Ribeiro de Queiroz",
  email: "thamyribeiro853@gmail.com",
  linkedin: "https://www.linkedin.com/in/thamires-queiroz-130996156/",
  location: "Diadema, São Paulo",
  registration: "CRQ IV 04275524",
  resume: "/documents/curriculo-thamires-queiroz.pdf",
};
export const media: { portrait?: Media } = {
  portrait: {
    src: "/images/1.jpeg",
    alt: "Thamires realizando uma titulação com bureta em laboratório",
  },
};
export const education = [
  {
    title: "Tecnologia em Cosméticos",
    focus: "Sua base científica",
    description: [
      "Proporciona conhecimentos sobre formulações, matérias-primas, propriedades físico-químicas e desenvolvimento de produtos. É uma base relevante para atuar em laboratórios de cosméticos, desenvolvimento e controle de qualidade.",
    ],
    year: "2024",
    level: "Graduação",
    institution: "FATEC Diadema Luigi Papaiz",
    date: "Concluído em dezembro de 2024",
    dateSummary: "Concluído em dez/2024",
    status: "Concluído",
  },
  {
    title: "Técnico em Química",
    focus: "Aprofundamento técnico",
    description: [
      "Amplia minha base em análises químicas, preparo de soluções, procedimentos laboratoriais e fundamentos analíticos. A formação amplia minha compreensão sobre o funcionamento da indústria química, incluindo operações industriais, equipamentos, instalações, sistemas e processos produtivos.",
      "Esse conhecimento me permite conectar a rotina de laboratório à realidade industrial, compreendendo melhor como as análises, o controle de processos e a qualidade contribuem para a eficiência, a segurança e a confiabilidade das operações.",
    ],
    year: "2026",
    level: "Formação técnica",
    institution: "SENAI Almirante Tamandaré",
    date: "Previsão de conclusão: dezembro de 2026",
    dateSummary: "Previsão: dez/2026",
    status: "Em andamento",
  },
  {
    title: "Técnico em Qualidade",
    focus: "Visão de processos",
    description: [
      "Contribui para desenvolver uma visão mais estruturada sobre procedimentos, padronização, indicadores, documentação e melhoria contínua, competências importantes para o controle da qualidade e a gestão de processos laboratoriais.",
    ],
    year: "2027",
    level: "Formação técnica",
    institution: "SENAC",
    date: "Previsão de conclusão: fevereiro de 2027",
    dateSummary: "Previsão: fev/2027",
    status: "Em andamento",
  },
];
export const analyses = [
  {
    name: "DQO e DBO",
    detail:
      "Caracterização de águas e efluentes e acompanhamento de parâmetros de qualidade.",
    symbol: "O₂",
  },
  {
    name: "pH e condutividade",
    detail:
      "Potenciometria e condutividade aplicadas à avaliação de matrizes líquidas.",
    symbol: "pH",
  },
  {
    name: "Alcalinidade e dureza",
    detail:
      "Ensaios físico-químicos para caracterização e controle de qualidade da água.",
    symbol: "Ca",
  },
  {
    name: "Turbidez e sólidos",
    detail: "Turbidimetria, sólidos totais e sólidos suspensos totais (SST).",
    symbol: "H₂O",
  },
];
export const instruments = [
  {
    name: "Espectrofotometria UV-Vis",
    level: "Experiência prática",
    description:
      "Operação de espectrofotômetro na rotina de análises laboratoriais.",
  },
  {
    name: "Cromatografia gasosa (CG)",
    level: "Conhecimento técnico",
    description:
      "Conhecimentos em cromatografia gasosa aplicados à análise instrumental.",
  },
  {
    name: "HPLC",
    level: "Básico",
    description:
      "Conhecimento básico em cromatografia líquida de alta eficiência.",
  },
];
export const experience = [
  {
    company: "Procytek Indústria e Comércio Ltda.",
    current: true,
    role: "Analista de Laboratório",
    date: "Agosto de 2025 — atual",
    summary:
      "Análises e tratamento de efluentes, com atuação em Controle de Qualidade e Desenvolvimento.",
    activities: [
      "Ensaios físico-químicos para caracterização e controle de efluentes.",
      "Preparo, padronização e controle de soluções, reagentes e padrões analíticos.",
      "Elaboração e revisão de POPs, calibração e verificação de equipamentos.",
      "Gestão de FDS e laudos, suporte a auditorias, metodologia 5S e indicadores.",
    ],
  },
  {
    company: "Serv Chemical",
    current: false,
    role: "Técnica em Química",
    date: "Outubro de 2024 — fevereiro de 2025",
    summary:
      "Controle de qualidade de matrizes líquidas e rotina de análise instrumental.",
    activities: [
      "Coleta e ensaios físico-químicos e microbiológicos, com emissão de laudos.",
      "Operação de UV-Vis e Karl Fischer e participação na validação de métodos analíticos.",
      "Gestão de amostras de retenção e cotação, aquisição e envio de insumos laboratoriais.",
    ],
  },
];

export const additionalQualifications = [
  { title: "Pacote Office", detail: "Pacote completo" },
  { title: "Excel", detail: "Intermediário" },
  { title: "Inglês", detail: "Básico, com leitura técnica de laudos e normas" },
];
