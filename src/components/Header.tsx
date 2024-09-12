import React, { useEffect, useState } from 'react';
import "../styles/Header.scss";

const Header: React.FC = () => {
  const [activePage, setActivePage] = useState<string>(() => {
    // Tenta pegar a página ativa do localStorage, se não houver, define como 'projects' por padrão
    return localStorage.getItem("activePage") || "projects";
  });

  useEffect(() => {
    // Atualiza o localStorage sempre que a página ativa mudar
    localStorage.setItem("activePage", activePage);
  }, [activePage]);

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  return (
    <header className="header">
      <h1>Nilton Santos</h1>
      <nav className="subject-selector">
        <ul>
          <li
            className={activePage === "projects" ? "active" : ""}
            onClick={() => handlePageChange("projects")}
          >
            Projects
          </li>
          <li
            className={activePage === "curriculum" ? "active" : ""}
            onClick={() => handlePageChange("curriculum")}
          >
            Curriculum
          </li>
          <li
            className={activePage === "inspirations" ? "active" : ""}
            onClick={() => handlePageChange("inspirations")}
          >
            Inspirations
          </li>
          <li
            className={activePage === "sobre" ? "active" : ""}
            onClick={() => handlePageChange("sobre")}
          >
            About
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
