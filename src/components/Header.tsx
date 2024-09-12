import React, { useEffect, useState } from 'react';
import "../styles/Header.scss";

const Header: React.FC = () => {
  const [activePage, setActivePage] = useState<string>("");

  useEffect(() => {
    // Pega o caminho atual da URL
    const path = window.location.pathname;
    setActivePage(path);
  }, []);

  return (
    <header className="header">
      <h1>Nilton Santos</h1>
      <nav className="subject-selector">
        <ul>
          <li className={activePage === "/projects" ? "active" : ""}>
            <a href="/projects">Projects</a>
          </li>
          <li className={activePage === "/curriculum" ? "active" : ""}>
            <a href="/curriculum">Curriculum</a>
          </li>
          <li className={activePage === "/inspirations" ? "active" : ""}>
            <a href="/inspirations">Inspirations</a>
          </li>
          <li className={activePage === "/sobre" ? "active" : ""}>
            <a href="/sobre">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
