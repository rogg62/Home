import React from "react";
import "./Projects.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".Title");
      const boxes1 = self.selector(".Item1");
      const boxes2 = self.selector(".Item2");
      const boxes3 = self.selector(".Item3");
      const boxes4 = self.selector(".Item4");
      const boxes5 = self.selector(".Item5");

      boxes.forEach((Title) => {
        gsap.fromTo(
          Title,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: Title,
              start: "top bottom",
              end: "top 65%",
              scrub: true,
            },
          }
        );
      });
      boxes1.forEach((item1) => {
        gsap.fromTo(
          item1,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item1,
              start: "top bottom",
              end: "top 65%",
              scrub: true,
            },
          }
        );
      });
      boxes2.forEach((item2) => {
        gsap.fromTo(
          item2,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: item2,
              start: "top bottom",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });
      boxes3.forEach((item3) => {
        gsap.fromTo(
          item3,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: item3,
              start: "top bottom",
              end: "top 65%",
              scrub: true,
            },
          }
        );
      });
      boxes4.forEach((item4) => {
        gsap.fromTo(
          item4,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item4,
              start: "top bottom",
              end: "top 65%",
              scrub: true,
            },
          }
        );
      });
      boxes5.forEach((item5) => {
        gsap.fromTo(
          item5,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: item5,
              start: "top bottom",
              end: "top 65%",
              scrub: true,
            },
          }
        );
      });
    }, main);

    return () => ctx.revert();
  }, []);
  return (
    <div id="Projects" ref={main}>
      <div id="ProjectsTitle">
        <h1 className="Title">Projects</h1>
        <button>All Projects</button>
      </div>

      <div id="ProjectsBox">
        <div id="Box1" className="Item1"></div>
        <div id="Box2" className="Item2"></div>
        <div id="Box3" className="Item3"></div>
        <div id="Box4" className="Item4"></div>
        <div id="Box5" className="Item5"></div>
      </div>
    </div>
  );
};

export default Projects;
