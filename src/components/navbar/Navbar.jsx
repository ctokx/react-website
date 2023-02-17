import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
//import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import Toggle from "../toggle/Toggle";
import { ThemeContext } from "../../context";
import { useContext } from "react";
const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  const closeMenu = () => setclick(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        {/*  <a href="/" className="logo">
          <img className="logoimage" src={logo} alt="logo" />
        </a> */}
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes
              size={30}
              style={{
                color: "black",
              }}
            />
          ) : (
            <FaBars
              size={30}
              style={{
                color: darkMode && "white",
              }}
            />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            style={{
              color: darkMode && "white",
            }}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              offset={-50}
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="product"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              offset={-80}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-140}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Toggle />
      </nav>
    </div>
  );
};

export default Navbar;
