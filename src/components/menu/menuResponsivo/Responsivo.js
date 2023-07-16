import React from "react";
import "./Responsivo.css";
const Responsivo = () => {
  return (
    <header className="header">
      <button>Logo Here</button>
      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>
      <nav className="nav">
        <ul className="menu">
          <li>
            <a href="#Title">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Responsivo;
