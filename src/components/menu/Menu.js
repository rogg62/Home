import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <nav id="Menu">
      <div id="menu">
        <div id="logo">
          <button>Logo Here</button>
        </div>

        <div id="linksMenu">
          <a href="Home">Home</a>
          <a href="About">About</a>
          <a href="Projects">Projects</a>
          <a href="Blog">Blog</a>
        </div>

        <button id="btn">Contact us</button>
      </div>
    </nav>
  );
};

export default Menu;
