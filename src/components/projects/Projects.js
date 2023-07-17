import React from "react";
import "./Projects.css";
import Img1 from "./assets/image 39.png";
import Img2 from "./assets/image 42.png";
import Img3 from "./assets/image 43.jpg";
import Img4 from "./assets/image 41.png";
import Img5 from "./assets/image 40.jpg";
import { useRef } from "react";
import { useWindowSize } from "react-use";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { width } = useWindowSize();
  const larguraMinima = 701;
  const larguraMaxima = 10000;
  const main = useRef();

  React.useLayoutEffect(() => {
    if (width >= larguraMinima && width <= larguraMaxima) {
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
    }
  }, [width]);
  return (
    <div id="Projects" ref={main}>
      <div id="ProjectsTitle">
        <h1 className="Title">Projects</h1>
        <button>All Projects</button>
      </div>

      <div id="ProjectsBox">
        <div id="Box1" className="Item1">
          <img src={Img2} alt="" />
          <div className="BoxInfo">
            <h1>Mountain</h1>
            <span>Colorado</span>
          </div>
        </div>

        <div id="Box2" className="Item2">
          <img src={Img1} alt="" />
          <div className="BoxInfo">
            <h1>Desert</h1>
            <span>Arizona</span>
          </div>
        </div>

        <div id="Box3" className="Item3">
          <img src={Img3} alt="" />
          <div className="BoxInfo">
            <h1>Hill</h1>
            <span>Dakota</span>
          </div>
        </div>

        <div id="Box4" className="Item4">
          <img src={Img4} alt="" />
          <div className="BoxInfo">
            <h1>Florest</h1>
            <span>Alasca</span>
          </div>
        </div>

        <div id="Box5" className="Item5">
          <img src={Img5} alt="" />
          <div className="BoxInfo">
            <h1>Swamp</h1>
            <span>Miami</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
