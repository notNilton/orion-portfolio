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
    architecture: "Microservices",
    features: [
      "Real-time collaboration",
      "Role-based access control",
      "Task prioritization",
    ],
    apiIntegrations: ["Google Calendar API", "Slack API"],
    team: [
      { name: "John Doe", role: "Backend Developer" },
      { name: "Jane Smith", role: "Frontend Developer" },
    ],
    repository: "https://github.com/user/project1",
    ciCd: "GitLab CI",
    testingTools: ["Jest", "Selenium"],
    performanceMetrics: "Handles up to 10,000 tasks per minute",
    status: "Active",
    version: "v1.0.0",
    license: "MIT",
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
    architecture: "Serverless",
    features: [
      "Workout tracking",
      "Integration with wearable devices",
      "Personalized fitness plans",
      "Calorie and nutrition tracking",
    ],
    apiIntegrations: ["Apple Health API", "Google Fit API"],
    team: [
      { name: "Emily Davis", role: "Mobile Developer" },
      { name: "Michael Brown", role: "UI/UX Designer" },
    ],
    repository: "https://github.com/user/project2",
    ciCd: "CircleCI",
    testingTools: ["JUnit", "Appium"],
    performanceMetrics: "Tracks data for up to 5,000 active users per minute",
    status: "Active",
    version: "v1.2.0",
    license: "Apache 2.0",
  },
  {
    id: 3,
    title: "Project 3",
    imageUrl: defaultImage,
    duration: "7 months",
    shortDescription: "An e-commerce platform for small businesses.",
    longDescription:
      "Project 3 is an e-commerce platform aimed at helping small businesses create and manage their online stores. It offers customizable templates, integrated payment gateways, and marketing tools for businesses to grow their digital presence.",
    languages: ["Ruby", "JavaScript"],
    frameworks: ["Ruby on Rails", "Vue.js"],
    database: "MySQL",
    architecture: "Monolithic",
    features: [
      "Customizable store templates",
      "Integrated payment gateways (PayPal, Stripe)",
      "SEO tools and marketing analytics",
      "Inventory management",
    ],
    apiIntegrations: ["Stripe API", "Google Analytics API"],
    team: [
      { name: "Alice Johnson", role: "Full Stack Developer" },
      { name: "Carlos Lee", role: "DevOps Engineer" },
    ],
    repository: "https://github.com/user/project3",
    ciCd: "Jenkins",
    testingTools: ["RSpec", "Cypress"],
    performanceMetrics: "Supports up to 100,000 transactions per day",
    status: "Active",
    version: "v2.0.0",
    license: "GPLv3",
  },
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
                    <p><strong>Languages:</strong> {project.languages.join(", ")}</p>
                    <p><strong>Frameworks:</strong> {project.frameworks.join(", ")}</p>
                    <p><strong>Database:</strong> {project.database}</p>
                    <p><strong>Architecture:</strong> {project.architecture}</p>
                    <p><strong>Features:</strong> {project.features.join(", ")}</p>
                    <p><strong>API Integrations:</strong> {project.apiIntegrations.join(", ")}</p>
                    <p><strong>Team:</strong> {project.team.map(member => `${member.name} (${member.role})`).join(", ")}</p>
                    <p><strong>Repository:</strong> <a href={project.repository} target="_blank" rel="noopener noreferrer">{project.repository}</a></p>
                    <p><strong>CI/CD:</strong> {project.ciCd}</p>
                    <p><strong>Testing Tools:</strong> {project.testingTools.join(", ")}</p>
                    <p><strong>Performance:</strong> {project.performanceMetrics}</p>
                    <p><strong>Status:</strong> {project.status}</p>
                    <p><strong>Version:</strong> {project.version}</p>
                    <p><strong>License:</strong> {project.license}</p>
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

