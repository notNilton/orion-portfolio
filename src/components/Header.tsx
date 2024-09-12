import React from 'react';
import "../styles/Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Nilton Santos</h1>
      <nav className="subject-selector">
        <ul>
          <li><a href="projects">Projects</a></li>
          <li><a href="curriculum">Curriculum</a></li>
          <li><a href="inspirations">Inspirations</a></li>
          <li><a href="sobre">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;



