import "./DashboardLayout.css";

import Sidebar from "../components/Sidebar/Sidebar";

import Topbar from "../components/Topbar/Topbar";

interface Props {

  children: React.ReactNode;

}

const DashboardLayout = ({
  children,
}: Props) => {

  return (

    <div className="dashboard-layout">

      {/* SIDEBAR */}

      <Sidebar />


      {/* MAIN */}

      <div className="dashboard-main">

        {/* TOPBAR */}

        <Topbar />


        {/* PAGE CONTENT */}

        <div className="dashboard-content">

          {children}

        </div>

      </div>

    </div>

  );

};

export default DashboardLayout;