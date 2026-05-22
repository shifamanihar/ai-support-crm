import "./LandingPage.css";

import {
  useEffect,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FaRobot,
  FaChartLine,
  FaHeadset,
  FaTicketAlt,
} from "react-icons/fa";

import heroImg
from "../../Images/landpage.png";


// COMPONENTS

import Header
from "../../components/Header/Header";

import Footer
from "../../components/Footer/Footer";

import InteractiveSection
from "../InteractiveSection/InteractiveSection";

import AboutAgency
from "../AboutAgency/AboutAgency";

import ContactUs
from "../ContactUs/ContactUs";


const LandingPage = () => {

  const navigate =
    useNavigate();


  // AUTO REDIRECT

  useEffect(() => {

    const isAuth =
      localStorage.getItem(
        "isAuth"
      );

    if (
      isAuth === "true"
    ) {

      navigate(
        "/dashboard"
      );

    }

  }, []);


  return (

    <div
      id="home"
      className="landing-page"
    >

      {/* HEADER */}

      <Header />


      {/* HERO SECTION */}

      <section className="hero-section">

        {/* LEFT */}

        <div className="hero-left">

          <h1>

            Manage Customer Support

            <span>

              {" "}
              Smarter With AI

            </span>

          </h1>


          <p>

            Powerful AI-powered CRM
            system to manage tickets,
            automate responses,
            track analytics,
            and improve customer
            support productivity.

          </p>


          <div className="hero-buttons">

            <Link
              to="/registration"
            >

              <button className="hero-btn">

                Start Free

              </button>

            </Link>


            <Link
              to="/login"
            >

              <button className="hero-btn-outline">

                Login

              </button>

            </Link>

          </div>

        </div>


        {/* RIGHT */}

        <div className="hero-right">

          <img
            src={heroImg}
            alt="CRM"
          />

        </div>

      </section>


      {/* FEATURES */}

      <section className="features-section">

        <div className="feature-card">

          <FaTicketAlt className="feature-icon" />

          <h2>

            Smart Ticketing

          </h2>

          <p>

            Manage customer tickets
            with intelligent
            categorization and
            real-time tracking.

          </p>

        </div>


        <div className="feature-card">

          <FaRobot className="feature-icon" />

          <h2>

            AI Chatbot

          </h2>

          <p>

            Automate customer
            queries using AI-powered
            chatbot assistance.

          </p>

        </div>


        <div className="feature-card">

          <FaChartLine className="feature-icon" />

          <h2>

            Analytics Dashboard

          </h2>

          <p>

            Track performance
            metrics, response time,
            and support insights
            visually.

          </p>

        </div>


        <div className="feature-card">

          <FaHeadset className="feature-icon" />

          <h2>

            Team Collaboration

          </h2>

          <p>

            Collaborate with support
            teams efficiently using
            one centralized CRM
            dashboard.

          </p>

        </div>

      </section>


      {/* INTERACTIVE SECTION */}

      <InteractiveSection />


      {/* WHY SECTION */}

      <section className="why-section">

        <div className="why-header">

          <h1>

            Why Teams Choose
            Our AI CRM

          </h1>


          <p>

            Everything your support
            team needs to automate
            workflows, improve
            response time, and
            deliver world-class
            customer experiences.

          </p>

        </div>


        <div className="why-grid">

          <div className="why-card">

            <h2>

              AI Automation

            </h2>

            <p>

              Automate repetitive
              customer support tasks
              using AI-powered
              workflows.

            </p>

          </div>


          <div className="why-card">

            <h2>

              Smart Ticket Tracking

            </h2>

            <p>

              Organize and manage
              customer tickets in
              real-time with smart
              priority systems.

            </p>

          </div>


          <div className="why-card">

            <h2>

              Team Collaboration

            </h2>

            <p>

              Allow support teams
              to collaborate inside
              one centralized
              dashboard.

            </p>

          </div>


          <div className="why-card">

            <h2>

              Real-Time Analytics

            </h2>

            <p>

              Visualize response
              metrics, ticket
              analytics, and
              support performance.

            </p>

          </div>

        </div>

      </section>


      {/* ABOUT SECTION */}

      <AboutAgency />


      {/* CONTACT SECTION */}

      <ContactUs />


      {/* FOOTER */}

      <Footer />

    </div>

  );

};

export default LandingPage;