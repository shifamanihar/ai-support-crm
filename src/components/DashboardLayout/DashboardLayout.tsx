 
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

import "./DashboardLayout.css";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({
  children,
}: Props) => {

  return (

    <div className="layout">

      {/* SIDEBAR */}

      <Sidebar />

      {/* RIGHT SIDE */}

      <div className="main-section">

        {/* TOPBAR */}

        <Topbar />

        {/* PAGE CONTENT */}

        <div className="page-content">

          {children}

        </div>

      </div>

    </div>

  );

};

export default DashboardLayout;
 
