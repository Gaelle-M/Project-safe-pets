import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show_nav" : "hide-nav"}`}>
      <div className="navbar_logo">
        <NavLink to="/">
          <img src="./logo.png" alt="logo du site" />
        </NavLink>
      </div>
        <ul>
      
        <NavLink to="/blog">
          <li className="slideInDown-1">Blog</li>
        </NavLink>
        <NavLink to="/mission">
          <li className="slideInDown-1">Notre mission</li>
        </NavLink>
        <NavLink to="/team">
          <li className="slideInDown-3">Équipe</li>
        </NavLink>
        <NavLink to="/services">
          <li className="slideInDown-4">Services</li>
        </NavLink>
        <NavLink to="/contribute">
          <li className="slideInDown-4">Contribuer</li>
        </NavLink>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger_bar"></span>
      </button>
    </nav>
  );
};

export default Navigation;
