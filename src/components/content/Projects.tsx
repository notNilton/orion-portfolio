import React, { useState } from "react";
import { projects } from "../../data/ProjectsData"; // Importa os projetos do arquivo separado
import "../../styles/content/Projects.scss";

type ProjectProps = {
  project: {
    id: number;
    title: string;
    duration: string;
    shortDescription: string;
    longDescription: string;
    languages: string[];
    frameworks: string[];
    database: string;
    features: string[];
    repository: string;
    status: string;
  };
  isExpanded: boolean;
  toggleProject: (id: number) => void;
};

const Project: React.FC<ProjectProps> = ({
  project,
  isExpanded,
  toggleProject,
}) => {
  return (
    <div className="project-container">
      <h3 className="title">{project.title}</h3>
      <div className="short-description">
        <p className="description">{project.shortDescription}</p>
        <button
          className="show-button"
          onClick={() => toggleProject(project.id)}
        >
          {isExpanded ? "Hide Details" : "Show Details"}
        </button>
      </div>

      {isExpanded && (
        <div className="details">
          <p>
            <strong>Description:</strong> {project.longDescription}
          </p>
          <p>
            <strong>Repository:</strong>{" "}
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.repository}
            </a>
          </p>
          <p>
            <strong>Languages:</strong> {project.languages.join(", ")}
          </p>
          <p>
            <strong>Frameworks:</strong> {project.frameworks.join(", ")}
          </p>
          <p>
            <strong>Database:</strong> {project.database}
          </p>
          <p>
            <strong>Features:</strong> {project.features.join(", ")}
          </p>
          <p>
            <strong>Status:</strong> {project.status}
          </p>
        </div>
      )}
    </div>
  );
};

const Projects: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(
    null
  );

  const toggleProject = (id: number) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <div>
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          isExpanded={expandedProjectId === project.id}
          toggleProject={toggleProject}
        />
      ))}
    </div>
  );
};

export default Projects;
