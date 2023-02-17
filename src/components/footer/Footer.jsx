import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
const Footer = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const instacolor =
    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)";
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log(windowSize);
  return (
    <div className="footer">
      <div className="myname">
        <h1 className="myname1">Jan Neumann</h1>
      </div>
      <div className="footer_middle">
        <div className="map_container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170347.73061774825!2d11.541835749999999!3d48.15491075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2zTcO8bmNoZW4!5e0!3m2!1sde!2sde!4v1673974728630!5m2!1sde!2sde"
            width="100%"
            height="300px"
            style={{ border: 10 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="socials_container">
          <a
            href="https://www.facebook.com/ceydakkaradag"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ color: "blue", size: "50px" }}>
              <AiOutlineFacebook className="footer_socials" />
            </IconContext.Provider>
          </a>
          <a
            href="https://tr.linkedin.com/in/ceydakaradag"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ color: "#0e76a8", size: "50px" }}>
              <AiOutlineLinkedin className="footer_socials" />
            </IconContext.Provider>
          </a>
          <a
            href="https://www.instagram.com/ceydakkaradag/"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider
              value={{
                color: "red",
                size: "50px",
              }}
            >
              <AiOutlineInstagram className="footer_socials" />
            </IconContext.Provider>
          </a>

          <a href="mailto:ceydakkaradag17@gmail.com">
            <IconContext.Provider value={{ color: "red", size: "50px" }}>
              <AiOutlineMail className="footer_socials" />
            </IconContext.Provider>
          </a>
        </div>
        <div className="list">
          <ul className="list_items">
            <li className="nav-item1">
              <Link to="home" spy={true} smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="about" spy={true} smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="products" spy={true} smooth={true} duration={500}>
                Products
              </Link>
            </li>
            <li className="nav-item1">
              <Link to="contact" spy={true} smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
