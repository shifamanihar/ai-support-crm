import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  FaUsers,
  FaEnvelope,
  FaTicketAlt,
} from "react-icons/fa";

import "./Customers.css";


const Customers = () => {

  /* =========================
     STATES
  ========================= */

  const [customers,
    setCustomers] =
    useState<any[]>([]);


  const [search,
    setSearch] =
    useState("");


  const [loading,
    setLoading] =
    useState(true);


  /* =========================
     FETCH CUSTOMERS
  ========================= */

  const fetchCustomers =
    async () => {

      try {

        const response =
          await axios.get(

            "https://ai-support-crm.onrender.com/api/tickets"

          );


        const tickets =
          response?.data?.tickets || [];


        // GROUP BY CUSTOMER

        const groupedCustomers =
          Object.values(

            tickets.reduce(

              (
                acc: any,
                ticket: any
              ) => {

                const email =
                  ticket.customerEmail;


                if (!acc[email]) {

                  acc[email] = {

                    customerName:
                      ticket.customerName,

                    customerEmail:
                      ticket.customerEmail,

                    totalTickets: 0,

                    latestTicket:
                      ticket.subject,

                  };

                }


                acc[email]
                  .totalTickets += 1;


                return acc;

              },

              {}

            )

          );


        setCustomers(
          groupedCustomers as any[]
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

  };


  useEffect(() => {

    fetchCustomers();

  }, []);


  /* =========================
     FILTER CUSTOMERS
  ========================= */

  const filteredCustomers =

    customers.filter((customer) =>

      customer.customerName
        ?.toLowerCase()

        .includes(

          search.toLowerCase()

        )

      ||

      customer.customerEmail
        ?.toLowerCase()

        .includes(

          search.toLowerCase()

        )

  );


  /* =========================
     LOADING
  ========================= */

  if (loading) {

    return (

      <div className="customers-loading">

        <h1>

          Loading Customers...

        </h1>

      </div>

    );

  }


  /* =========================
     JSX
  ========================= */

  return (

    <div className="customers-page">

      {/* SEARCH */}

      <div className="customers-search">

        <input

          type="text"

          placeholder="Search customers..."

          value={search}

          onChange={(e) =>

            setSearch(
              e.target.value
            )

          }

        />

      </div>


      {/* GRID */}

      <div className="customers-grid">

        {filteredCustomers.map(

          (
            customer,
            index
          ) => (

            <div

              key={index}

              className="customer-card"

            >

              {/* TOP */}

              <div className="customer-top">

                <div className="customer-avatar">

                  <FaUsers />

                </div>


                <div>

                  <h2>

                    {customer.customerName}

                  </h2>


                  <p>

                    Customer

                  </p>

                </div>

              </div>


              {/* EMAIL */}

              <div className="customer-info">

                <FaEnvelope />

                <span>

                  {customer.customerEmail}

                </span>

              </div>


              {/* TOTAL TICKETS */}

              <div className="customer-info">

                <FaTicketAlt />

                <span>

                  {customer.totalTickets}
                  {" "}
                  Tickets

                </span>

              </div>


              {/* LATEST TICKET */}

              <div className="latest-ticket">

                <h4>

                  Latest Ticket

                </h4>


                <p>

                  {customer.latestTicket}

                </p>

              </div>

            </div>

          )

        )}

      </div>

    </div>

  );

};

export default Customers;