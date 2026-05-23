import { useState } from "react";
import "./NewPassword.css";
import img from "../../Images/login3.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const NewPassw = () => {

  const navigate = useNavigate();

  const [passwords, setPasswords] =
    useState({

      password: "",

      confirmPassword: "",

    });


  const handleChange = (

    e: React.ChangeEvent<HTMLInputElement>

  ) => {

    setPasswords({

      ...passwords,

      [e.target.name]:
        e.target.value,

    });

  };


  const handleSubmit = () => {

    if (

      passwords.password !==

      passwords.confirmPassword

    ) {

      toast.error(
        "Passwords do not match ❌"
      );

      return;

    }


    toast.success(
      "Password Updated Successfully 🚀"
    );


    setTimeout(() => {

      navigate("/login");

    }, 1000);

  };


  return (

    <div className="newpass-container">

      <div className="newpass-box">

        {/* LEFT */}

        <div className="newpass-left">

          <h1 className="newpass-title">

            AI Support CRM

          </h1>

          <h2 className="newpass-heading">

            Create New Password

          </h2>

          <p className="newpass-subtext">

            Your new password must be
            different from previous password

          </p>

          <hr className="divider" />


          <div className="input-group">

            <label>

              New Password

            </label>

            <input

              type="password"

              name="password"

              placeholder="Enter new password"

              value={passwords.password}

              onChange={handleChange}

            />

          </div>


          <div className="input-group">

            <label>

              Confirm Password

            </label>

            <input

              type="password"

              name="confirmPassword"

              placeholder="Confirm password"

              value={
                passwords.confirmPassword
              }

              onChange={handleChange}

            />

          </div>


          <button

            className="update-btn"

            onClick={handleSubmit}

          >

            Update Password

          </button>

        </div>


        {/* RIGHT */}

        <div className="newpass-right">

          <img

            src={img}

            alt="new-password"

            className="newpass-image"

          />

        </div>

      </div>

    </div>

  );

};

export default NewPassw;