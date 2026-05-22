import {
  useEffect,
  useState,
} from "react";

import API from "../../api/axios";

import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard";

import TicketChart from "../../components/Charts/TicketChart";

import "./Dashboard.css";


const Dashboard = () => {

  /* =========================
     STATES
  ========================= */

  const [stats,
    setStats] =
    useState({

      totalTickets: 0,

      openTickets: 0,

      pendingTickets: 0,

      closedTickets: 0,

    });


  const [loading,
    setLoading] =
    useState(true);


  /* =========================
     FETCH STATS
  ========================= */

  const fetchStats =
    async () => {

      try {

        const response =
          await API.get(

            "/tickets/stats/overview"

          );


        setStats(

          response?.data?.stats || {

            totalTickets: 0,

            openTickets: 0,

            pendingTickets: 0,

            closedTickets: 0,

          }

        );

      }

      catch (error) {

        console.log(error);

      }

      finally {

        setLoading(false);

      }

  };


  useEffect(() => {

    fetchStats();

  }, []);


  /* =========================
     LOADING
  ========================= */

  if (loading) {

    return (

      <div className="loading-dashboard">

        <h1>

          Loading Dashboard...

        </h1>

      </div>

    );

  }


  /* =========================
     JSX
  ========================= */

  return (

    <div className="dashboard-page">


      {/* ANALYTICS CARDS */}

      <div className="dashboard-cards">

        <AnalyticsCard

          title="Total Tickets"

          count={stats.totalTickets}

        />


        <AnalyticsCard

          title="Open Tickets"

          count={stats.openTickets}

        />


        <AnalyticsCard

          title="Pending Tickets"

          count={stats.pendingTickets}

        />


        <AnalyticsCard

          title="Closed Tickets"

          count={stats.closedTickets}

        />

      </div>


      {/* CHART */}

      <div className="dashboard-chart">

        <TicketChart />

      </div>

    </div>

  );

};

export default Dashboard;