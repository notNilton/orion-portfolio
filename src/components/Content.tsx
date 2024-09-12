import React from "react";
import "../styles/Content.scss"; // Importando os estilos customizados
import defaultImage from "../assets/default-image.jpg"; // Importando a imagem padrão

const projects = [
  { id: 1, title: "Project 1", imageUrl: defaultImage },
  { id: 2, title: "Project 2", imageUrl: defaultImage },
  { id: 3, title: "Project 3", imageUrl: defaultImage },
  { id: 4, title: "Project 4", imageUrl: defaultImage },
  { id: 5, title: "Project 5", imageUrl: defaultImage },
  { id: 6, title: "Project 6", imageUrl: defaultImage },
  { id: 7, title: "Project 7", imageUrl: defaultImage },
  { id: 8, title: "Project 8", imageUrl: defaultImage },
  { id: 9, title: "Project 9", imageUrl: defaultImage },
];

const Content: React.FC = () => {
  return (
    <div className="content">
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <div className="project-card">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{`Details of ${project.title}`}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
