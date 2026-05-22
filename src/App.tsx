import {

  BrowserRouter,

  Routes,

  Route,

} from "react-router-dom";

import {

  Toaster,

} from "react-hot-toast";


/* =========================
   PAGES
========================= */

import LandingPage
from "./pages/LandingPage/LandingPage";

import Dashboard
from "./pages/Dashboard/Dashboard";

import TicketDetails
from "./pages/TicketDetails/TicketDetails";

import Login
from "./pages/Login/Login";

import ResetPassword
from "./pages/Login/ResetPassword";

import NewPassw
from "./pages/Login/NewPassw";

import Registration
from "./pages/Registration/Registration";

import Customers
from "./pages/Customers/Customers";

import AIAssistant
from "./pages/AIAssistant/AIAssistant";


/* =========================
   COMPONENTS
========================= */

import CreateTicket
from "./components/CreateTicket/CreateTicket";

import TicketTable
from "./components/TicketTable/TicketTable";

import ProtectedRoute
from "./components/ProtectedRoute/ProtectedRoute";

import ChatBot
from "./components/ChatBot/ChatBot";


/* =========================
   LAYOUT
========================= */

import DashboardLayout
from "./layouts/DashboardLayout";


function App() {

  return (

    <BrowserRouter>


      {/* TOASTER */}

      <Toaster
        position="top-right"
      />


      <Routes>


        {/* =========================
            LANDING PAGE
        ========================= */}

        <Route

          path="/"

          element={
            <LandingPage />
          }

        />


        {/* =========================
            AUTH ROUTES
        ========================= */}

        <Route

          path="/login"

          element={
            <Login />
          }

        />


        <Route

          path="/registration"

          element={
            <Registration />
          }

        />


        <Route

          path="/reset-password"

          element={
            <ResetPassword />
          }

        />


        <Route

          path="/new-password"

          element={
            <NewPassw />
          }

        />


        {/* =========================
            DASHBOARD
        ========================= */}

        <Route

          path="/dashboard"

          element={

            <ProtectedRoute>

              <DashboardLayout>

                <Dashboard />

              </DashboardLayout>

            </ProtectedRoute>

          }

        />


        {/* =========================
            CREATE TICKET
        ========================= */}

        <Route

          path="/create-ticket"

          element={

            <ProtectedRoute>

              <DashboardLayout>

                <CreateTicket />

              </DashboardLayout>

            </ProtectedRoute>

          }

        />


        {/* =========================
            ALL TICKETS
        ========================= */}

        <Route

          path="/tickets"

          element={

            <ProtectedRoute>

              <DashboardLayout>

                <TicketTable />

              </DashboardLayout>

            </ProtectedRoute>

          }

        />


        {/* =========================
            SINGLE TICKET
        ========================= */}

        <Route

          path="/ticket/:id"

          element={

            <ProtectedRoute>

              <DashboardLayout>

                <TicketDetails />

              </DashboardLayout>

            </ProtectedRoute>

          }

        />


        {/* =========================
            CUSTOMERS
        ========================= */}

        <Route

          path="/customers"

          element={

            <ProtectedRoute>

              <DashboardLayout>

                <Customers />

              </DashboardLayout>

            </ProtectedRoute>

          }

        />


        {/* =========================
            AI ASSISTANT
        ========================= */}

        <Route

          path="/ai-assistant"

          element={

            <ProtectedRoute>

              <DashboardLayout>

                <AIAssistant />

              </DashboardLayout>

            </ProtectedRoute>

          }

        />


        {/* =========================
            404 PAGE
        ========================= */}

        <Route

          path="*"

          element={

            <h1
              style={{

                color: "white",

                textAlign: "center",

                marginTop: "100px",

              }}
            >

              404 Page Not Found 😭

            </h1>

          }

        />

      </Routes>


      {/* =========================
          FLOATING AI CHATBOT
      ========================= */}

      <ChatBot />


    </BrowserRouter>

  );

}

export default App;