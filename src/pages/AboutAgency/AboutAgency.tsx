import "./AboutAgency.css";

import {

  FaRobot,

  FaUsers,

  FaChartLine,

  FaHeadset,

} from "react-icons/fa";


const AboutAgency = () => {

  // SCROLL TO TOP

  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    <section  id="about" className="about-agency">

      {/* TOP SECTION */}

      <div className="about-top">

        <p className="about-subtitle">

          ABOUT OUR AGENCY

        </p>

        <h1 className="about-title">

          Building Smarter Customer
          Support Systems With AI

        </h1>

        <p className="about-description">

          AI Support CRM helps modern
          businesses automate customer
          support, manage tickets,
          improve response time,
          and deliver intelligent
          customer experiences using
          advanced AI technology.

        </p>

      </div>


      {/* CARDS */}

      <div className="about-cards">

        {/* CARD 1 */}

        <div className="about-card">

          <FaRobot className="about-icon" />

          <h2>

            AI Automation

          </h2>

          <p>

            Automate customer support
            workflows with smart AI
            ticket systems.

          </p>

          <button
            className="learn-more-btn"
            onClick={scrollToTop}
          >

            Learn More →

          </button>

        </div>


        {/* CARD 2 */}

        <div className="about-card">

          <FaUsers className="about-icon" />

          <h2>

            Customer Management

          </h2>

          <p>

            Manage customer interactions,
            support history, and
            customer queries efficiently.

          </p>

          <button
            className="learn-more-btn"
            onClick={scrollToTop}
          >

            Learn More →

          </button>

        </div>


        {/* CARD 3 */}

        <div className="about-card">

          <FaChartLine className="about-icon" />

          <h2>

            Analytics Dashboard

          </h2>

          <p>

            Track support metrics,
            response time, and
            business performance
            visually.

          </p>

          <button
            className="learn-more-btn"
            onClick={scrollToTop}
          >

            Learn More →

          </button>

        </div>


        {/* CARD 4 */}

        <div className="about-card">

          <FaHeadset className="about-icon" />

          <h2>

            24/7 Support

          </h2>

          <p>

            Deliver faster support
            experiences using
            intelligent AI assistance.

          </p>

          <button
            className="learn-more-btn"
            onClick={scrollToTop}
          >

            Learn More →

          </button>

        </div>

      </div>


      {/* STATS */}

      <div className="about-stats">

        <div className="stat-box">

          <h1>
            15K+
          </h1>

          <p>
            Active Tickets
          </p>

        </div>


        <div className="stat-box">

          <h1>
            98%
          </h1>

          <p>
            Customer Satisfaction
          </p>

        </div>


        <div className="stat-box">

          <h1>
            24/7
          </h1>

          <p>
            AI Assistance
          </p>

        </div>


        <div className="stat-box">

          <h1>
            500+
          </h1>

          <p>
            Business Clients
          </p>

        </div>

      </div>

    </section>

  );

};

export default AboutAgency;