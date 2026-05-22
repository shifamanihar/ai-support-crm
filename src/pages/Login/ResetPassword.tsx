import { useState } from "react";
import "./ResetPassword.css";
import bg from "../../Images/login1.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ResetPassword = () => {

  const [email, setEmail] =
    useState("");

  const navigate = useNavigate();

  const handleReset = () => {

    if (!email) {

      toast.error(
        "Please enter email"
      );

      return;

    }

    toast.success(
      "Reset link sent successfully 🚀"
    );

    setTimeout(() => {

      navigate("/new-password", {
        state: { email },
      });

    }, 1000);

  };

  return (

    <div className="reset-container">

      <div className="reset-box">

        {/* LEFT */}

        <div className="reset-left">

          <h1 className="reset-title">
            AI Support CRM
          </h1>

          <h2 className="reset-heading">
            Reset Password
          </h2>

          <p className="reset-subtext">
            Enter your email address
            to reset password
          </p>

          <hr className="divider" />

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

          <button
            className="reset-btn"
            onClick={handleReset}
          >
            Reset Password
          </button>

          <p className="access-text">

            Back to{" "}

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

        {/* RIGHT */}

        <div className="reset-right">

          <img
            src={bg}
            alt="reset"
            className="reset-image"
          />

        </div>

      </div>

    </div>

  );
};

export default ResetPassword;