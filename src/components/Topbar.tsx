// src/components/Topbar.tsx
import React, { useState, useEffect } from "react";
import "../styles/Topbar.scss"; // Importando o arquivo de estilo específico, se necessário

const Topbar: React.FC = () => {
  const [theme, setTheme] = useState("light");

  // Verifica o tema salvo no localStorage ao carregar a página
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    document.documentElement.setAttribute("data-theme", selectedTheme);
    localStorage.setItem("theme", selectedTheme); // Salva o estado do tema no localStorage
  };

  return (
    <div className="top-bar">
      <label>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={handleThemeChange}
        />
        Light
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={handleThemeChange}
        />
        Dark
      </label>
    </div>
  );
};

export default Topbar;
