import React from 'react';
import "../styles/Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="subject-selector">
        <ul>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#curriculum">Curriculum</a></li>
          <li><a href="#inspirations">Inspirations</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
