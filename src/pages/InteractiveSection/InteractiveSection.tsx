import { useState } from "react";

import "./InteractiveSection.css";

import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import video3 from "./video3.mp4";
import video4 from "./video4.mp4";
import video5 from "./video5.mp4";


const sections = {

  "AI Ticket Automation": {

    video: video1,

    title:
      "AI Ticket Automation",

    description:
      "Automatically categorize and prioritize customer tickets using AI-powered workflows for faster support resolution.",

  },


  "Smart Customer Insights": {

    video: video2,

    title:
      "Smart Customer Insights",

    description:
      "Track customer activities, monitor support history, and understand customer behavior in real time.",

  },


  "Analytics Dashboard": {

    video: video3,

    title:
      "Analytics Dashboard",

    description:
      "Visualize support metrics, response time, open tickets, and performance analytics instantly.",

  },


  "AI Chatbot Assistant": {

    video: video4,

    title:
      "AI Chatbot Assistant",

    description:
      "Provide instant automated responses with a smart AI assistant available 24/7 for customer support.",

  },


  "Team Collaboration": {

    video: video5,

    title:
      "Team Collaboration",

    description:
      "Allow support agents to collaborate efficiently with shared ticket systems and centralized communication.",

  },

};


type SectionKey =
  keyof typeof sections;


const InteractiveSection = () => {

  const [
    activeSection,

    setActiveSection,

  ] = useState<SectionKey>(
    "AI Ticket Automation"
  );


  return (

    <section
      id="features"
      className="interactive-section"
    >

      {/* TOP TEXT */}

      <div className="interactive-top">

        <p className="interactive-subtitle">

          AI CRM FEATURES

        </p>

        <h1 className="interactive-title">

          Powerful Features For
          Smart Customer Support

        </h1>

      </div>


      {/* MAIN CONTAINER */}

      <div className="interactive-container">

        {/* LEFT SIDE */}

        <div className="interactive-left">

          {(Object.keys(
            sections
          ) as SectionKey[]).map(

            (section) => (

              <div
                key={section}
                className="button-wrapper"
              >

                {/* BUTTON */}

                <button

                  onClick={() =>
                    setActiveSection(
                      section
                    )
                  }

                  className={`interactive-btn ${
                    activeSection === section
                      ? "active"
                      : ""
                  }`}

                >

                  {section}

                </button>


                {/* TEXT BELOW BUTTON */}

                {activeSection ===
                  section && (

                  <div className="button-content">

                    <h3>

                      {
                        sections[
                          section
                        ].title
                      }

                    </h3>

                    <p>

                      {
                        sections[
                          section
                        ].description
                      }

                    </p>

                  </div>

                )}

              </div>

            )

          )}

        </div>


        {/* RIGHT SIDE VIDEO */}

        <div className="interactive-right">

          <video

            src={
              sections[
                activeSection
              ].video
            }

            autoPlay

            muted

            loop

            controls

            className="interactive-video"

          />

        </div>

      </div>

    </section>

  );

};

export default InteractiveSection;