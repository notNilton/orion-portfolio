import React, { useState } from "react";

// Dados de um único projeto
const project = {
  id: 1,
  title: "Project 1",
  duration: "3 months",
  shortDescription: "A web application to manage tasks.",
  longDescription:
    "This is a detailed task management app with collaboration features, role-based access control, and real-time notifications.",
  languages: ["JavaScript", "Python"],
  frameworks: ["React", "Django"],
  database: "PostgreSQL",
  features: [
    "Real-time collaboration",
    "Role-based access control",
    "Task prioritization",
  ],
  repository: "https://github.com/user/project1",
  status: "Active",
};

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleProject = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <h3>{project.title}</h3>
      <p>
        <strong>Duration:</strong> {project.duration}
      </p>
      <p>{project.shortDescription}</p>
      <button onClick={toggleProject}>
        {expanded ? "Hide Details" : "Show Details"}
      </button>
      {expanded && (
        <div>
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

export default Projects;
