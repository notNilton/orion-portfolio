import React, { useState } from "react";
import "../../styles/content/Projects.scss";

// Dados dos projetos
const projects = [
  {
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
  },
  {
    id: 2,
    title: "Project 2",
    duration: "6 months",
    shortDescription: "An e-commerce platform for small businesses.",
    longDescription:
      "This platform allows small businesses to create online stores, manage inventory, process payments, and handle customer orders with ease.",
    languages: ["TypeScript", "Node.js"],
    frameworks: ["Next.js", "Express"],
    database: "MongoDB",
    features: [
      "Inventory management",
      "Payment gateway integration",
      "Order tracking",
    ],
    repository: "https://github.com/user/project2",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Project 2",
    duration: "6 months",
    shortDescription: "An e-commerce platform for small businesses.",
    longDescription:
      "This platform allows small businesses to create online stores, manage inventory, process payments, and handle customer orders with ease.",
    languages: ["TypeScript", "Node.js"],
    frameworks: ["Next.js", "Express"],
    database: "MongoDB",
    features: [
      "Inventory management",
      "Payment gateway integration",
      "Order tracking",
    ],
    repository: "https://github.com/user/project2",
    status: "In Progress",
  },
];

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
        <div key={project.id} className="project-container">
          <h3>{project.title}</h3>
          <p>
            <strong>Duration:</strong> {project.duration}
          </p>
          <p>{project.shortDescription}</p>
          <button onClick={() => toggleProject(project.id)}>
            {expandedProjectId === project.id ? "Hide Details" : "Show Details"}
          </button>
          {expandedProjectId === project.id && (
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
      ))}
    </div>
  );
};

export default Projects;
