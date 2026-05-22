import "./Header.css";

import logo from "../../Images/logo.png";

import {
  Link,
} from "react-router-dom";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useState } from "react";


const Header = () => {

  const [menuOpen,
    setMenuOpen] =
    useState(false);


  // SCROLL FUNCTION

  const scrollToSection = (
    sectionId: string
  ) => {

    const section =
      document.getElementById(
        sectionId
      );

    if (section) {

      section.scrollIntoView({

        behavior: "smooth",

      });

    }

    setMenuOpen(false);

  };


  return (

    <header className="header">

      {/* LOGO */}

      <div className="logo-section">

        <img
          src={logo}
          alt="logo"
          className="logo-img"
        />

        <h1>

          AI Support CRM

        </h1>

      </div>


      {/* NAV LINKS */}

      <nav className={`nav-links ${
        menuOpen ? "active" : ""
      }`}>

        <button
          onClick={() =>
            scrollToSection("home")
          }
        >

          Home

        </button>


        <button
          onClick={() =>
            scrollToSection(
              "features"
            )
          }
        >

          Features

        </button>


        <button
          onClick={() =>
            scrollToSection(
              "about"
            )
          }
        >

          About

        </button>


        <button
          onClick={() =>
            scrollToSection(
              "contact"
            )
          }
        >

          Contact

        </button>

      </nav>


      {/* BUTTONS */}

      <div className="header-buttons">

        <Link to="/login">

          <button className="login-btn-header">

            Login

          </button>

        </Link>


        <Link to="/registration">

          <button className="start-btn-header">

            Get Started

          </button>

        </Link>

      </div>


      {/* MOBILE MENU */}

      <div
        className="mobile-menu"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >

        {menuOpen
          ? <FaTimes />
          : <FaBars />
        }

      </div>

    </header>

  );

};

export default Header;