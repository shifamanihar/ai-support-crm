import "./Sidebar.css";

import {

  FaChartBar,

  FaTicketAlt,

  FaPlus,

  FaCog,

  FaRobot,

  FaUsers,

  FaSignOutAlt,

} from "react-icons/fa";

import {

  NavLink,

  useNavigate,

} from "react-router-dom";


const Sidebar = () => {

  const navigate =
    useNavigate();


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


  return (

    <aside className="sidebar">


      {/* =========================
          LOGO
      ========================= */}

      <div className="sidebar-logo">

        <h1>

          AI CRM

        </h1>

      </div>


      {/* =========================
          MENU
      ========================= */}

      <div className="sidebar-menu">


        <NavLink

          to="/dashboard"

          className="sidebar-link"

        >

          <FaChartBar />

          <span>

            Dashboard

          </span>

        </NavLink>


        <NavLink

          to="/create-ticket"

          className="sidebar-link"

        >

          <FaPlus />

          <span>

            Create Ticket

          </span>

        </NavLink>


        <NavLink

          to="/tickets"

          className="sidebar-link"

        >

          <FaTicketAlt />

          <span>

            Tickets

          </span>

        </NavLink>


        <NavLink

          to="/customers"

          className="sidebar-link"

        >

          <FaUsers />

          <span>

            Customers

          </span>

        </NavLink>


        <NavLink

          to="/ai-assistant"

          className="sidebar-link"

        >

          <FaRobot />

          <span>

            AI Assistant

          </span>

        </NavLink>


        <NavLink

          to="/settings"

          className="sidebar-link"

        >

          <FaCog />

          <span>

            Settings

          </span>

        </NavLink>

      </div>


      {/* =========================
          BOTTOM
      ========================= */}

      <div className="sidebar-bottom">

        <button

          onClick={handleLogout}

          className="logout-btn"

        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>

  );

};

export default Sidebar;