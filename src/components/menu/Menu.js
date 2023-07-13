import React from "react";
import "./Menu.css";
import { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    const smoothScroll = (target) => {
      const element = document.querySelector(target);
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    };

    const handleAnchorClick = (event) => {
      event.preventDefault();
      const target = event.target.getAttribute("href");
      smoothScroll(target);
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <nav id="Menu">
      <div id="menu">
        <div id="logo">
          <button>Logo Here</button>
        </div>

        <div id="linksMenu">
          <a className="a" href="#Title">Home</a>
          <a className="a" href="#About">About</a>
          <a className="a" href="#Projects">Projects</a>
          <a className="a" href="Blog">Blog</a>
        </div>

        <button id="btn">Contact us</button>
      </div>
    </nav>
  );
};

export default Menu;
