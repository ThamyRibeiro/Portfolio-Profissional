export type ComplementaryCourse = {
  id: string;
  title: string;
  area: string;
  institution: string;
  hours: number;
  completion: string;
  summary: string;
  topics: string[];
  certificate: { pdf: string; preview: string; width: number; height: number };
};
export const complementaryCourses: ComplementaryCourse[] = [
  {
    id: "analise-instrumental",
    certificate: {
      pdf: "/documents/certificates/analise-instrumental.pdf",
      preview: "/images/certificates/analise-instrumental.webp",
      width: 1131,
      height: 1600,
    },
    title: "Análise Instrumental",
    area: "Laboratório",
    institution: "SENAI Roberto Simonsen",
    hours: 40,
    completion: "24/04/2025",
    summary:
      "Formação básica em técnicas analíticas, equipamentos e interpretação de resultados.",
    topics: [
      "Características dos equipamentos e metodologias de análise instrumental.",
      "Cromatografia gasosa e líquida, espectroscopia no infravermelho e UV-Vis.",
      "Introdução a fotometria de chama, absorção atômica, análise térmica, técnicas eletroanalíticas, polarimetria e espectrometria de massa.",
      "Interpretação de resultados e procedimentos de qualidade, saúde, segurança e meio ambiente.",
    ],
  },
  {
    id: "ingles-basico",
    certificate: {
      pdf: "/documents/certificates/ingles-basico.pdf",
      preview: "/images/certificates/ingles-basico.webp",
      width: 1600,
      height: 1132,
    },
    title: "Inglês — Básico 1",
    area: "Idiomas",
    institution: "Senac Santo André",
    hours: 48,
    completion: "2026",
    summary:
      "Comunicação inicial em inglês para apresentações, informações pessoais e situações do dia a dia.",
    topics: [
      "Apresentar-se e apresentar outras pessoas, informando nome e profissão.",
      "Trocar informações pessoais e descrever família e outras pessoas.",
      "Falar sobre localidades, deslocamentos e meios de transporte.",
      "Perguntar e informar horas, datas e informações sobre eventos.",
    ],
  },
  {
    id: "excel-basico",
    certificate: {
      pdf: "/documents/certificates/excel-basico.pdf",
      preview: "/images/certificates/excel-basico.webp",
      width: 1131,
      height: 1600,
    },
    title: "Excel Básico",
    area: "Informática",
    institution: "SENAI Almirante Tamandaré",
    hours: 20,
    completion: "25/06/2025",
    summary:
      "Organização de planilhas, fórmulas, funções básicas e apresentação de dados em gráficos.",
    topics: [
      "Edição e formatação de dados e planilhas.",
      "Diferenças entre funções e fórmulas; soma, multiplicação, divisão e porcentagem.",
      "Funções básicas, formatação condicional e criação de gráficos.",
    ],
  },
  {
    id: "fundamentos-ia",
    certificate: {
      pdf: "/documents/certificates/fundamentos-ia.pdf",
      preview: "/images/certificates/fundamentos-ia.webp",
      width: 1131,
      height: 1600,
    },
    title: "Fluência — Fundamentos da Inteligência Artificial",
    area: "Tecnologia",
    institution: "SENAI Almirante Tamandaré",
    hours: 8,
    completion: "12/12/2025",
    summary:
      "Fundamentos de IA tradicional e generativa, produtividade e uso responsável da tecnologia.",
    topics: [
      "Fundamentos e aplicações de inteligência artificial tradicional e generativa.",
      "Impactos nos mecanismos de pesquisa e apoio à produtividade e à tomada de decisões.",
      "Ferramentas como Bing Chat e Copilot do Microsoft 365.",
      "Questões éticas e práticas responsáveis no uso da inteligência artificial.",
    ],
  },
  {
    id: "gestao-projetos",
    certificate: {
      pdf: "/documents/certificates/gestao-projetos.pdf",
      preview: "/images/certificates/gestao-projetos.webp",
      width: 1131,
      height: 1600,
    },
    title: "Fundamentos da Gestão de Projetos Aplicados na Indústria",
    area: "Projetos",
    institution: "SENAI Almirante Tamandaré",
    hours: 12,
    completion: "22/09/2026",
    summary:
      "Fundamentos de projetos industriais e diferenças entre metodologias tradicionais e ágeis.",
    topics: [
      "Fundamentos e metodologias aplicados à gestão de projetos industriais.",
      "Diferenças entre abordagens tradicionais e ágeis.",
      "Ferramentas para aplicação da metodologia ágil Scrum.",
    ],
  },
];
