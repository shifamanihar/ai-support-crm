import "./Footer.css";

import {

  FaInstagram,

  FaLinkedin,

  FaGithub,

  FaTwitter,

} from "react-icons/fa";


const Footer = () => {

  const currentYear =
    new Date().getFullYear();

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-brand">

          <h1>

            AI Support CRM

          </h1>

          <p>

            Smart AI-powered customer
            support platform designed
            for modern businesses and
            support teams.

          </p>


          {/* SOCIAL ICONS */}

          <div className="social-icons">

            <a href="#">

              <FaInstagram />

            </a>

            <a href="#">

              <FaLinkedin />

            </a>

            <a href="#">

              <FaGithub />

            </a>

            <a href="#">

              <FaTwitter />

            </a>

          </div>

        </div>


        {/* LINKS */}

        <div className="footer-links">

          <h2>
            Quick Links
          </h2>

          <a href="/">
            Home
          </a>

          <a href="/login">
            Login
          </a>

          <a href="/registration">
            Register
          </a>

          <a href="/dashboard">
            Dashboard
          </a>

        </div>


        {/* SERVICES */}

        <div className="footer-links">

          <h2>
            Features
          </h2>

          <a href="#">
            AI Ticketing
          </a>

          <a href="#">
            Analytics
          </a>

          <a href="#">
            Smart Chatbot
          </a>

          <a href="#">
            Customer Support
          </a>

        </div>


        {/* CONTACT */}

        <div className="footer-links">

          <h2>
            Contact
          </h2>

          <p>
            support@aisupportcrm.com
          </p>

          <p>
            Mumbai, India
          </p>

          <p>
            +91 83559 09569
          </p>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>

          © {currentYear} AI Support CRM.
          All Rights Reserved.

        </p>

      </div>

    </footer>

  );

};

export default Footer;