import { useState } from "react";

import "./Registration.css";

import registerImg from "../../Images/login1.png";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserPlus,
} from "react-icons/fa";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import axios from "axios";

const Registration = () => {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({

      fullName: "",

      email: "",

      password: "",

      confirmPassword: "",

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      toast.error(
        "Passwords do not match"
      );

      return;

    }

    try {

      const response =
        await axios.post(
          "http://localhost:3000/api/users/register",

          {

            fullName:
              formData.fullName,

            email:
              formData.email,

            password:
              formData.password,

          }
        );

      toast.success(
        response.data.message
      );

      setTimeout(() => {

        navigate("/login");

      }, 1500);

    } catch (error) {

      toast.error(
        error.response?.data
          ?.message ||
          "Registration Failed"
      );

    }

  };

  return (

    <div className="register-container">

      <div className="register-box">

        {/* LEFT SECTION */}

        <div className="left-section-register">

          <h1 className="register-title">
            AI Support CRM
          </h1>

          <p className="register-subtitle">
            Create your account
          </p>

          <form
            onSubmit={handleSubmit}
          >

            {/* FULL NAME */}

            <div className="input-box">

              <FaUser className="input-icon" />

              <input
                type="text"
                name="fullName"
                placeholder="Enter full name"
                value={
                  formData.fullName
                }
                onChange={
                  handleChange
                }
                required
              />

            </div>

            {/* EMAIL */}

            <div className="input-box">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                required
              />

            </div>

            {/* PASSWORD */}

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={
                  formData.password
                }
                onChange={
                  handleChange
                }
                required
              />

            </div>

            {/* CONFIRM PASSWORD */}

            <div className="input-box">

              <FaLock className="input-icon" />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={
                  formData.confirmPassword
                }
                onChange={
                  handleChange
                }
                required
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="register-btn"
            >

              <FaUserPlus />

              Register

            </button>

          </form>

          <p className="login-link-text">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

        {/* RIGHT SECTION */}

        <div className="right-section-register">

          <img
            src={registerImg}
            alt="register"
            className="register-image"
          />

        </div>

      </div>

    </div>

  );

};

export default Registration;