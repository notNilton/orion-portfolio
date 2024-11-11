import React from "react";
import Slider, { CustomArrowProps } from "react-slick"; // Importando o tipo CustomArrowProps
import { projects } from "../../data/ProjectsData";
import "../../styles/content/Projects.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Componente de seta anterior
const PrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "white", fontSize: "2.5rem", left: "-30px", zIndex: 1 }}
      onClick={onClick}
    >
    </div>
  );
};

// Componente de seta seguinte
const NextArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "white", fontSize: "2.5rem", right: "-30px", zIndex: 1 }}
      onClick={onClick}
    >
    </div>
  );
};

const Projects: React.FC = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="projects-list">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <Slider {...settings} className="project-image-slider">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} image ${index + 1}`}
                className="project-image"
              />
            ))}
          </Slider>

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
