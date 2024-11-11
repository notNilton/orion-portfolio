import React from "react";
import { projects } from "../../data/ProjectsData"; // Importa os projetos do arquivo separado
import "../../styles/content/Projects.scss";

const Projects: React.FC = () => {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className="project-title">
            <h3 className="name">{project.title}</h3>
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Link de Acesso
            </a>
          </div>

          <p className="project-description">{project.longDescription}</p>

          {/* Exibir Languages, Frameworks, Duration e Status */}
          <div className="project-details">
            <div className="detail-item">
              <p>
                <strong>Languages:</strong> {project.languages.join(", ")}
              </p>
              <p>
                <strong>Frameworks:</strong> {project.frameworks.join(", ")}
              </p>
            </div>
            <div className="detail-item">
              <p>
                <strong>Duration:</strong> {project.duration}
              </p>
              <p>
                <strong>Status:</strong> {project.status}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
