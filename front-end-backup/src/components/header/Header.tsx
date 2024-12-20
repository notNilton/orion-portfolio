import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1>Nilton Santos</h1>
      <nav className="subject-selector">
        <ul>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/curriculum"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Curriculum
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inspirations"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Inspirations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
