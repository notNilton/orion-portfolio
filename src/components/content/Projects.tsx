import React from "react";
import { projects } from "../../data/ProjectsData"; // Importa os projetos do arquivo separado
import "../../styles/content/Projects.scss";

const Projects: React.FC = () => {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <img src={project.image} alt={project.title} className="project-image" />
          <h3 className="project-title">{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Projects;
