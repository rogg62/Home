import React, { useEffect } from "react";
import "./About.css";
import FourthImg from "./assets/image 37.png";
import FifthImg from "./assets/image 36.png";
import { useRef } from "react";
import { useWindowSize } from "react-use";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { width } = useWindowSize();
  const larguraMinima = 701;
  const larguraMaxima = 10000;
  const main = useRef();

  React.useLayoutEffect(() => {
    if (width >= larguraMinima && width <= larguraMaxima) {
      const ctx = gsap.context((self) => {
        const boxes = self.selector(".Title");
        const boxes2 = self.selector(".Paragraf");
        const boxes3 = self.selector(".Img");
        const boxes4 = self.selector(".Img2");

        boxes.forEach((Title) => {
          gsap.fromTo(
            Title,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: Title,
                start: "bottom 100%",
                end: "top 65%",
                scrub: true,
              },
            }
          );
        });
        boxes2.forEach((Paragraf) => {
          gsap.fromTo(
            Paragraf,
            { opacity: 0 },
            {
              opacity: 1,
              scrollTrigger: {
                trigger: Paragraf,
                start: "top bottom",
                end: "top 0%",
                scrub: true,
              },
            }
          );
        });
        boxes3.forEach((Img) => {
          gsap.fromTo(
            Img,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: Img,
                start: "top bottom",
                end: "top 40%",
                scrub: true,
              },
            }
          );
        });
        boxes4.forEach((Img2) => {
          gsap.fromTo(
            Img2,
            { opacity: 0, x: 100 },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: Img2,
                start: "top bottom",
                end: "top 30%",
                scrub: true,
              },
            }
          );
        });
      }, main);
      return () => ctx.revert();
    }
  }, [width]);

  function scrollFunction() {
    if (
      (document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50) &&
      window.innerWidth > 700
    ) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <section id="About" ref={main}>
      <div id="AboutInfo">
        <h1 className="Title">About Us</h1>
        <div id="AboutInfoTitle" className="Paragraf">
          <p>
            A trusted source for modern, luxury tiny homes. Our team of
            experienced craftsmen are dedicated to building your dream home.
          </p>
          <p>
            We are committed to providing our customers with the best possible
            experience. We offer a variety of customization options, so you can
            create a tiny home that is perfect for your needs.
          </p>
          <p>
            We also offer financing options, so you can make your tiny home
            dream a reality.
          </p>
        </div>
      </div>
      <div id="AboutImgs">
        <img src={FourthImg} alt="" className="Img" />
        <img src={FifthImg} alt="" className="Img2" />
      </div>
      <button id="myBtn" onClick={scrollToTop}>
        <span
          style={{ fontSize: "40px", color: "#333" }}
          className="material-symbols-outlined"
        >
          arrow_upward
        </span>
      </button>
    </section>
  );
};

export default About;
