import React from "react";
import "./Title.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Circle from "./assets/Voted best real estate office.png";

const Title = () => {
  const elementRefs = useRef([]);

  useEffect(() => {
    // Animação a ser executada quando a tela for recarregada
    gsap.fromTo(
      elementRefs.current[0],
      { opacity: 0, x: -100 },
      { opacity: 1, duration: 1, delay: 1, x: 0 }
    );
    gsap.fromTo(
      elementRefs.current[1],
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.5 }
    );
    gsap.fromTo(
      elementRefs.current[2],
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 4 }
    );
  }, []);
  return (
    <div id="Title">
      <h1 ref={(el) => (elementRefs.current[0] = el)}>
        Experience The future{" "}
        <span ref={(el) => (elementRefs.current[1] = el)}>of Tiny living</span>
      </h1>

      <div id="circle" ref={(el) => (elementRefs.current[2] = el)}>
        <img src={Circle} alt="" />
        <h1>#1</h1>
      </div>
    </div>
  );
};

export default Title;
