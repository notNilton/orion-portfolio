import React from "react";
import Header from "./Header";
import Content from "./Content";
import Curriculum from "./content/Curriculum";
import About from "./content/About";
import Inspirations from "./content/Inspirations";
import Projects from "./content/Projects";
import "../styles/MainContent.scss";

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <Header />
      <Content />
    </div>
  );
};

export default MainContent;
