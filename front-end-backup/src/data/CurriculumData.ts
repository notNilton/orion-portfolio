// CurriculumData.ts

export const educationData = [
  {
    degree: "Bacharelado em Engenharia de Computação",
    institution: "Universidade Federal de Mato Grosso",
    period: "2020 - 2025",
  },
];

export const workExperienceData = [
  {
    title: "Desenvolvedor Junior Full Stack",
    company: "PGE-MT",
    period: "Maio 2024 - Atual",
    description: `
      Implementei automações com Google Apps Script e AppSheet, otimizando fluxos internos. 
      Desenvolvi sistemas de gerenciamento de processos jurídicos e controle de escalas para 
      procuradores usando TypeScript e React no front-end, PostgreSQL como banco de dados, e deploy 
      na Firebase com autenticação via Google Authentication.
    `,
    tasks: [
      "Integração do ChatGPT para resumos automáticos de processos e pré-avaliação de litispendência.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "PostgreSQL",
      "Firebase",
      "Node.js",
      "Google Apps Script",
      "AppSheet",
      "ChatGPT API",
    ],
  },
  {
    title: "Estágio Desenvolvimento Back-end",
    company: "SEMA-MT",
    period: "Maio 2021 - Maio 2022",
    description: `
      Desenvolvi uma ferramenta de campo utilizando C# e .NET para coletar e gerenciar dados 
      em ambientes remotos. Implementei a sincronização de dados tanto online quanto offline, 
      garantindo a consistência dos dados.
    `,
    tasks: [
      "Integração com sistemas internos e externos por meio de APIs robustas.",
    ],
    technologies: ["C#", ".NET", "SQL Server", "APIs RESTful"],
  },
];

export const projectsData = [
  {
    name: "RADARE",
    description: `
      Aplicativo web em React para reconciliação de dados industriais, capaz de reconciliar 
      grandes volumes de dados em tempo real ou batches, ajustando variáveis para valores corretos.
    `,
    technologies: [
      "Python (Flask)",
      "TypeScript (React)",
      "PostgreSQL (TimescaleDB)",
    ],
  },
  {
    name: "AAICAP",
    description: `
      Projeto para correção de imagens pixel-art geradas por Inteligência Artificial, utilizando 
      técnicas avançadas de processamento de imagens para corrigir e otimizar a qualidade.
    `,
    technologies: ["Python", "Flask", "OpenCV", "PIL"],
  },
];

export const skillsData = {
  languages: [
    "Português (nativo)",
    "Inglês (fluente)",
    "Espanhol (mediano)",
    "Francês (iniciante)",
    "Alemão (iniciante)",
  ],
  programmingLanguages: ["C/C++", "Python", "TypeScript"],
  frameworks: ["ReactJS", "Flask", "Express.js", "FastAPI"],
  databases: ["Firebase", "PostgreSQL", "TimescaleDB"],
};
