import React from "react";
import "./Focus.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { useWindowSize } from "react-use";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Focus = () => {
  const { width } = useWindowSize();
  const larguraMinima = 701;
  const larguraMaxima = 10000;
  const main = useRef();

  React.useLayoutEffect(() => {
    if (width >= larguraMinima && width <= larguraMaxima) {
      const ctx = gsap.context((self) => {
        const boxes = self.selector(".Title");
        const boxes1 = self.selector(".BoxLetter");
        const boxes2 = self.selector(".BoxLetter2");

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
        boxes1.forEach((BoxLetter) => {
          gsap.fromTo(
            BoxLetter,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: BoxLetter,
                start: "bottom 100%",
                end: "top 65%",
                scrub: true,
              },
            }
          );
        });
        boxes2.forEach((BoxLetter1) => {
          gsap.fromTo(
            BoxLetter1,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: BoxLetter1,
                start: "bottom 100%",
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
    <div id="Focus" ref={main}>
      <h1 id="TitleFocus" className="Title">
        Main Focus
      </h1>

      <div id="FocusBoxs">
        <div id="Box1">
          <div id="BoxLetter">
            <h1>1</h1>
          </div>
          <div id="BoxInfo" className="BoxLetter">
            <h1>Sustainability</h1>
            <p>
              We are committed to using sustainable materials and practices in
              our designs.
            </p>
          </div>
        </div>

        <div id="Box2">
          <div id="BoxLetter2">
            <h1>2</h1>
          </div>
          <div id="BoxInfo2" className="BoxLetter2">
            <h1>Forward Thinking</h1>
            <p>
              We are always looking for new ways to push the boundaries of what
              is possible in architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
