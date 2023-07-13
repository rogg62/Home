import React from "react";
import "./Footer.css";
import Location from "./assets/Vector.png";
import Phone from "./assets/Group.png";
import Email from "./assets/Group (1).png";

import Facebook from "./assets/F.svg";
import Twitter from "./assets/T.svg";
import Linkedin from "./assets/L.svg";
import Pinterest from "./assets/P.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div id="TopFooter">
        <div id="Logo">
          <button>Logo Here</button>
        </div>

        <div id="information">
          <h1>Information</h1>
          <a href="null1">Main</a>
          <a href="null2">Gallery</a>
          <a href="null3">Projects</a>
          <a href="null4">Certifications</a>
          <a href="null5">Contacts</a>
        </div>

        <div id="contact">
          <h1>Contacts</h1>
          <div id="contact1">
            <img src={Location} alt="" />
            <span>1234 Sample Street Austin Texas 78704</span>
          </div>

          <div id="contact2">
            <img src={Phone} alt="" />
            <span>512.333.2222</span>
          </div>

          <div id="contact3">
            <img src={Email} alt="" />
            <span>sampleemail@gmail.com</span>
          </div>
        </div>
        <div id="social">
          <h1>Social Media</h1>
          <div id="LinksImgs">
            <a href="Facebook">
              <img src={Facebook} alt="" title="Facebook"/>
            </a>
            <a href="Twitter">
              <img src={Twitter} alt="" title="Twitter"/>
            </a>
            <a href="Linkedin">
              <img src={Linkedin} alt="" title="Linkedin" />
            </a>
            <a href="Pinterest">
              <img src={Pinterest} alt="" title="Pinterest" />
            </a>
          </div>
        </div>
      </div>

      <div id="BottomFooter">
        <h1>Tiny Homes 2023</h1>
      </div>
    </footer>
  );
};

export default Footer;
