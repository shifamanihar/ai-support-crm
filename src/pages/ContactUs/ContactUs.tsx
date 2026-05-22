import "./ContactUs.css";

import {
  FaCheckCircle,
} from "react-icons/fa";

import toast from "react-hot-toast";

import { useState } from "react";


const ContactUs = () => {

  const [formData,
    setFormData] =
    useState({

      fullName: "",

      email: "",

      phone: "",

      company: "",

      message: "",

    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement
    >
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };


  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    toast.success(
      "Demo Request Submitted 🚀"
    );

    setFormData({

      fullName: "",

      email: "",

      phone: "",

      company: "",

      message: "",

    });

  };

  return (

    <section id="contact" className="contact-section">

      {/* LEFT SIDE */}

      <div className="contact-left">

        <p className="contact-mini-title">

          ⚡ THE FUTURE OF AI CRM

        </p>

        <h1>

          Smart CRM Software
          Built For Modern
          Customer Support

        </h1>

        <p className="contact-description">

          AI-powered CRM platform
          that helps businesses
          automate support,
          manage tickets,
          improve response time,
          and grow faster.

        </p>


        {/* FEATURES */}

        <div className="contact-features">

          <div className="feature-item">

            <FaCheckCircle />

            <span>
              AI-powered Ticket Automation
            </span>

          </div>


          <div className="feature-item">

            <FaCheckCircle />

            <span>
              Smart Customer Analytics
            </span>

          </div>


          <div className="feature-item">

            <FaCheckCircle />

            <span>
              24/7 AI Chatbot Assistance
            </span>

          </div>


          <div className="feature-item">

            <FaCheckCircle />

            <span>
              Enterprise-grade Security
            </span>

          </div>

        </div>

      </div>


      {/* RIGHT SIDE FORM */}

      <div className="contact-form-box">

        <h2>

          Free Demo For 14 Days

        </h2>

        <p>

          No Credit Card Required

        </p>


        <form
          onSubmit={handleSubmit}
        >

          <input

            type="text"

            placeholder="Full Name"

            name="fullName"

            value={
              formData.fullName
            }

            onChange={handleChange}

            required

          />


          <input

            type="email"

            placeholder="Business Email"

            name="email"

            value={
              formData.email
            }

            onChange={handleChange}

            required

          />


          <input

            type="text"

            placeholder="Phone Number"

            name="phone"

            value={
              formData.phone
            }

            onChange={handleChange}

            required

          />


          <input

            type="text"

            placeholder="Organization"

            name="company"

            value={
              formData.company
            }

            onChange={handleChange}

            required

          />


          <textarea

            placeholder="How can our team help you?"

            name="message"

            value={
              formData.message
            }

            onChange={handleChange}

            required

          />


          <button type="submit">

            Submit Request

          </button>

        </form>

      </div>

    </section>

  );

};

export default ContactUs;