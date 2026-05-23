import { useState } from "react";

import Swal from "sweetalert2";

import "./Login.css";

import loginImg from "../../Images/login2.png";

import {

  Link,

  useNavigate,

} from "react-router-dom";

import axios from "axios";


const Login = () => {

  const navigate =
    useNavigate();


  const [values,
    setValues] =
    useState({

      email: "",

      password: "",

    });


  /* =========================
     HANDLE INPUT
  ========================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setValues({

      ...values,

      [e.target.name]:
        e.target.value,

    });

  };


  /* =========================
     HANDLE LOGIN
  ========================= */

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      const response =
        await axios.post(

          "https://ai-support-crm.onrender.com/api/users/login",

          {

            email:
              values.email,

            password:
              values.password,

          }

        );


      console.log(
        response.data
      );


      /* =========================
         SAVE TOKEN
      ========================= */

      localStorage.setItem(

        "token",

        response.data.token

      );


      /* =========================
         SAVE USER
      ========================= */

      localStorage.setItem(

        "user",

        JSON.stringify(
          response.data.user
        )

      );


      /* =========================
         OPTIONAL AUTH
      ========================= */

      localStorage.setItem(

        "isAuth",

        "true"

      );


      /* =========================
         SUCCESS POPUP
      ========================= */

      Swal.fire({

        icon: "success",

        title:
          "Login Successful!",

        text:
          "Welcome back to AI Support CRM 🚀",

        confirmButtonColor:
          "#22d3ee",

        background:
          "#0f172a",

        color:
          "#ffffff",

      }).then(() => {

        navigate(
          "/dashboard"
        );

      });

    }

    catch (error: any) {

      console.log(
        error.response?.data
      );


      /* =========================
         ERROR POPUP
      ========================= */

      Swal.fire({

        icon: "error",

        title:
          "Login Failed",

        text:

          error.response?.data
            ?.message ||

          "Invalid Email or Password",

        confirmButtonColor:
          "#ef4444",

        background:
          "#0f172a",

        color:
          "#ffffff",

      });

    }

  };


  return (

    <div className="login-container">

      <div className="login-box">


        {/* LEFT SECTION */}

        <div className="left-section-login">

          <h1 className="title">

            AI Support CRM

          </h1>


          <h2 className="subtitle">

            Welcome Back

          </h2>


          <form
            onSubmit={
              handleSubmit
            }
          >


            {/* EMAIL */}

            <div className="input-group">

              <label>

                Email

              </label>


              <input

                type="email"

                placeholder="Enter email"

                name="email"

                value={
                  values.email
                }

                onChange={
                  handleChange
                }

                required

              />

            </div>


            {/* PASSWORD */}

            <div className="input-group">

              <label>

                Password

              </label>


              <input

                type="password"

                placeholder="Enter password"

                name="password"

                value={
                  values.password
                }

                onChange={
                  handleChange
                }

                required

              />

            </div>


            {/* FORGOT PASSWORD */}

            <div className="remember-forgot">

              <Link

                to="/reset-password"

                className="forgot-password"

              >

                Forgot Password?

              </Link>

            </div>


            {/* LOGIN BUTTON */}

            <button

              type="submit"

              className="login-btn"

            >

              Login

            </button>


            {/* REGISTER LINK */}

            <p className="register-text">

              Don’t have an account yet?{" "}

              <Link

                to="/registration"

                className="register-link"

              >

                Register Now

              </Link>

            </p>

          </form>

        </div>


        {/* RIGHT SECTION */}

        <div className="right-section-login">

          <img

            src={loginImg}

            alt="login"

            className="login-image"

          />

        </div>

      </div>

    </div>

  );

};

export default Login;