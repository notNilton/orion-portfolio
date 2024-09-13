import React, { useState } from "react";
import "../styles/Content.scss"; // Importando os estilos customizados
import defaultImage from "../assets/default-image.jpg"; // Importando a imagem padrão

// Adicionando duração e descrição longa para cada projeto
const projects = [
  {
    id: 1,
    title: "Project 1",
    imageUrl: defaultImage,
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
    imageUrl: defaultImage,
    duration: "5 months",
    shortDescription: "A mobile app for tracking fitness and health metrics.",
    longDescription:
      "Project 2 is a mobile application designed to help users track their fitness routines and health metrics. It includes workout tracking, integration with wearable devices, and personalized fitness plans based on user goals.",
    languages: ["Swift", "Kotlin"],
    frameworks: ["Flutter"],
    database: "Firebase",
    features: [
      "Workout tracking",
      "Integration with wearable devices",
      "Personalized fitness plans",
    ],
    repository: "https://github.com/user/project2",
    status: "Active",
  }
];



const Content: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    // Alterna entre expandir e recolher o item
    setExpandedProject((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="content">
      <ul className="project-list">
        {projects.map((project) => (
          <li
            key={project.id}
            className={`project-item ${expandedProject === project.id ? "expanded" : ""}`}
            onClick={() => toggleProject(project.id)}
          >
            <div className="project-card">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
              <div className="project-details">
                {/* <div className="short-info"> */}
                <h3>{project.title}</h3>
                <p><strong>Duration:</strong> {project.duration}</p>
                <p>{project.shortDescription}</p>  
              {/* </div> */}
                
                {/* Mostra os detalhes completos se o projeto estiver expandido */}
                
              </div>
              {expandedProject === project.id && (
                  <div className="additional-info">
                    <p><strong>Description:</strong> {project.longDescription}</p>
                    <p><strong>Adress:</strong> LINK </p>
                    <p><strong>Languages:</strong> {project.languages.join(", ")}</p>
                    <p><strong>Frameworks:</strong> {project.frameworks.join(", ")}</p>
                    <p><strong>Database:</strong> {project.database}</p>
                    <p><strong>Features:</strong> {project.features.join(", ")}</p>
                    <p><strong>Repository:</strong> <a href={project.repository} target="_blank" rel="noopener noreferrer">{project.repository}</a></p>
                    <p><strong>Status:</strong> {project.status}</p>
                  </div>
                )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;