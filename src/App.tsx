import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Projects from "./components/content/Projects";
import Curriculum from "./components/content/Curriculum";

import "./styles/App.scss"; // Arquivo de estilos

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Header sempre fixo à esquerda */}
        <div className="content-container">
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/" element={<Projects />} /> {/* Rota padrão */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
