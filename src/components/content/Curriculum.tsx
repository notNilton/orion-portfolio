import React, { ReactNode } from "react";
import "../../styles/content/Curriculum.scss"; // Importando os estilos customizados
import {
  educationData,
  workExperienceData,
  projectsData,
  skillsData,
} from "../../data/CurriculumData"; // Importa os dados do CurriculumData

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
                <li>Tecnologias: {job.technologies.join(", ")}</li>
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
const Section: React.FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => (
  <section className="section-aligned">
    <h2>{title}</h2>
    <ul>{children}</ul>
  </section>
);

export default Curriculum;
