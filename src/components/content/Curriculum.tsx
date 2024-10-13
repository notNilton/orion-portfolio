import React, { ReactNode } from "react";
import "../../styles/content/Curriculum.scss"; // Importando os estilos customizados

// Definir dados para seções
const educationData = [
  {
    degree: "Bacharelado em Engenharia de Computação",
    institution: "Universidade Federal de Mato Grosso",
    period: "2020 - 2025",
  },
];

const workExperienceData = [
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

const projectsData = [
  {
    name: "RADARE",
    description: `
      Aplicativo web em React para reconciliação de dados industriais, capaz de reconciliar 
      grandes volumes de dados em tempo real ou batches, ajustando variáveis para valores corretos.
    `,
    technologies: ["Python (Flask)", "TypeScript (React)", "PostgreSQL (TimescaleDB)"],
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

const skillsData = {
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

const Curriculum: React.FC = () => {
  return (
    <div className="curriculum">
      <div className="resume-content">

        {/* Seção Educação */}
        <Section title="Educação">
          {educationData.map((edu, index) => (
            <li key={index}>
              <strong>{edu.degree}</strong> - {edu.institution} ({edu.period})
            </li>
          ))}
        </Section>

        {/* Seção Experiência Profissional */}
        <Section title="Experiência Profissional">
          {workExperienceData.map((job, index) => (
            <li key={index}>
              <strong>{job.title}</strong> - {job.company} ({job.period})
              <p>{job.description}</p>
              <ul>
                {job.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
                <li>
                  Tecnologias: {job.technologies.join(", ")}
                </li>
              </ul>
            </li>
          ))}
        </Section>

        {/* Seção Projetos Pessoais */}
        <Section title="Projetos Pessoais">
          {projectsData.map((project, index) => (
            <li key={index}>
              <strong>{project.name}</strong>
              <p>{project.description}</p>
              <ul>
                <li>Tecnologias: {project.technologies.join(", ")}</li>
              </ul>
            </li>
          ))}
        </Section>

        {/* Seção Habilidades Técnicas */}
        <Section title="Habilidades Técnicas">
          <li>Idiomas: {skillsData.languages.join(", ")}</li>
          <li>Linguagens: {skillsData.programmingLanguages.join(", ")}</li>
          <li>Frameworks: {skillsData.frameworks.join(", ")}</li>
          <li>Bancos de Dados: {skillsData.databases.join(", ")}</li>
        </Section>

      </div>
    </div>
  );
};

// Componente Section para evitar repetição de código
const Section: React.FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
  <section className="section-aligned">
    <h2>{title}</h2>
    <ul>{children}</ul>
  </section>
);

export default Curriculum;
