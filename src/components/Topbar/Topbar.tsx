import "./Topbar.css";

import {
  FaBell,
  FaChevronDown,
} from "react-icons/fa";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  useNotification,
} from "../../context/NotificationContext";


const Topbar = () => {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const {
    notifications,
  } = useNotification();


  /* =========================
     USER
  ========================= */

  const user = JSON.parse(

    localStorage.getItem(
      "user"
    ) || "{}"

  );


  /* =========================
     LOGOUT
  ========================= */

  const handleLogout =
    () => {

      // REMOVE TOKEN

      localStorage.removeItem(
        "token"
      );

      // REMOVE USER

      localStorage.removeItem(
        "user"
      );

      // OPTIONAL OLD AUTH

      localStorage.removeItem(
        "isAuth"
      );

      // REDIRECT LOGIN

      navigate("/");

  };


  /* =========================
     PAGE TITLE
  ========================= */

  const getPageTitle = () => {

    switch (
      location.pathname
    ) {

      case "/dashboard":

        return "Dashboard";


      case "/create-ticket":

        return "Create Support Ticket";


      case "/tickets":

        return "All Tickets";


      case "/customers":

        return "Customers";


      case "/ai-assistant":

        return "AI Assistant";


      case "/settings":

        return "Settings";


      default:

        return "AI CRM";

    }

  };


  return (

    <div className="topbar">


      {/* =========================
          LEFT
      ========================= */}

      <div className="topbar-left">

        <div className="page-heading">

          <h2>

            {getPageTitle()}

          </h2>


          <p>

            Welcome back,
            {" "}

            {

              user?.fullName

              ||

              "Admin"

            }

          </p>

        </div>

      </div>


      {/* =========================
          RIGHT
      ========================= */}

      <div className="topbar-right">


        {/* =========================
            NOTIFICATION
        ========================= */}

        <div className="notification-box">

          <FaBell />

          {

            notifications.length > 0 && (

              <span className="notification-dot">

                {notifications.length}

              </span>

            )

          }

        </div>


        {/* =========================
            PROFILE
        ========================= */}

        <div className="profile-box">


          {/* AVATAR */}

          <div className="profile-avatar">

            {

              user?.fullName

                ? user.fullName
                    .charAt(0)
                    .toUpperCase()

                : "A"

            }

          </div>


          {/* INFO */}

          <div className="profile-info">

            <h4>

              {

                user?.fullName

                ||

                "Admin"

              }

            </h4>


            <p>

              {

                user?.role ===
                "admin"

                  ? "Admin"

                  : "User"

              }

            </p>

          </div>


          {/* ICON */}

          <FaChevronDown
            className="dropdown-icon"
          />


          {/* DROPDOWN */}

          <div className="profile-dropdown">

            <button
              onClick={handleLogout}
            >

              Logout

            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Topbar;