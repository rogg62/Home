import React from "react";
import FirstImg from "./assets/image 21.png";
import SecondImg from "./assets/image 26.png";
import ThirdImg from "./assets/image 25.png";
import Arrow from "./assets/ico-shape.svg"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Main.css";

const Main = () => {
  const elementRefs = useRef([]);

  useEffect(() => {
    // Animação a ser executada quando a tela for recarregada
    gsap.fromTo(
      elementRefs.current[0],
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1 }
    );
    gsap.fromTo(
      elementRefs.current[1],
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2.5 }
    );
    gsap.fromTo(
      elementRefs.current[2],
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 3.5 }
    );
    gsap.fromTo(
      elementRefs.current[3],
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 4 }
    );
    gsap.fromTo(
        elementRefs.current[5],
        { opacity: 0,
        x: -100 },
        { opacity: 1, duration: 1, delay: 0.5 , x: 0}
      );
  }, []);
  return (
    <main id="main">
      <img src={FirstImg} id="ImgMain" alt="" ref={(el) => (elementRefs.current[5] = el)} />
      <div id="LeftMain">
        <p ref={(el) => (elementRefs.current[0] = el)}>
          A trusted source for modern, luxury tiny homes. Our team of
          experienced craftsmen are dedicated to building your dream home.
        </p>
        <div id="LeftMainImgs">
          <img
            src={SecondImg}
            id="Img1"
            alt=""
            ref={(el) => (elementRefs.current[1] = el)}
          />
          <img
            src={ThirdImg}
            id="Img2"
            alt=""
            ref={(el) => (elementRefs.current[2] = el)}
          />
        </div>

        <button ref={(el) => (elementRefs.current[3] = el)}>
          Explore More <img src={Arrow} alt="" />
        </button>
      </div>
    </main>
  );
};

export default Main;
