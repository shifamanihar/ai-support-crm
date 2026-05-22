import API from "../../api/axios";

import Swal from "sweetalert2";

import SearchFilter from "../SearchFilter/SearchFilter";

import { useNavigate } from "react-router-dom";

import {
  FaTrash,
  FaEdit,
} from "react-icons/fa";

import {
  useEffect,
  useState,
} from "react";

import "./TicketTable.css";


const TicketTable = () => {

  const navigate =
    useNavigate();


  /* =========================
     STATES
  ========================= */

  const [tickets,
    setTickets] =
    useState<any[]>([]);


  const [loading,
    setLoading] =
    useState(true);


  const [search,
    setSearch] =
    useState("");


  const [statusFilter,
    setStatusFilter] =
    useState("All");


  const [priorityFilter,
    setPriorityFilter] =
    useState("All");


  /* =========================
     FETCH TICKETS
  ========================= */

  const fetchTickets =
    async () => {

      try {

        const response =
          await API.get(

            "/tickets"

          );


        setTickets(

          response?.data?.tickets || []

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

    fetchTickets();

  }, []);


  /* =========================
     DELETE TICKET
  ========================= */

  const handleDelete =
    async (id: string) => {

      const result =
        await Swal.fire({

          title:
            "Delete Ticket?",

          text:
            "This action cannot be undone!",

          icon:
            "warning",

          showCancelButton: true,

          confirmButtonColor:
            "#ef4444",

          cancelButtonColor:
            "#22d3ee",

          confirmButtonText:
            "Yes, Delete",

          background:
            "#0f172a",

          color:
            "#fff",

        });


      if (result.isConfirmed) {

        try {

          await API.delete(

            `/tickets/${id}`

          );


          Swal.fire({

            title:
              "Deleted!",

            text:
              "Ticket deleted successfully.",

            icon:
              "success",

            confirmButtonColor:
              "#22d3ee",

            background:
              "#0f172a",

            color:
              "#fff",

          });


          fetchTickets();

        }

        catch (error) {

          Swal.fire({

            title:
              "Error",

            text:
              "Failed to delete ticket",

            icon:
              "error",

            confirmButtonColor:
              "#ef4444",

            background:
              "#0f172a",

            color:
              "#fff",

          });

        }

      }

  };


  /* =========================
     UPDATE STATUS
  ========================= */

  const handleStatusChange =
    async (
      id: string,
      status: string
    ) => {

      try {

        await API.put(

          `/tickets/${id}`,

          { status }

        );


        fetchTickets();

      }

      catch (error) {

        console.log(error);

      }

  };


  /* =========================
     FILTER TICKETS
  ========================= */

  const filteredTickets =

    tickets.filter((ticket) => {

      const matchesSearch =

        ticket.subject
          ?.toLowerCase()

          .includes(

            search.toLowerCase()

          )

        ||

        ticket.customerName
          ?.toLowerCase()

          .includes(

            search.toLowerCase()

          );


      const matchesStatus =

        statusFilter === "All"

        ||

        ticket.status ===
        statusFilter;


      const matchesPriority =

        priorityFilter === "All"

        ||

        ticket.priority ===
        priorityFilter;


      return (

        matchesSearch

        &&

        matchesStatus

        &&

        matchesPriority

      );

  });


  /* =========================
     LOADING
  ========================= */

  if (loading) {

    return (

      <h2 className="loading-text">

        Loading Tickets...

      </h2>

    );

  }


  /* =========================
     JSX
  ========================= */

  return (

    <div>


      {/* SEARCH FILTER */}

      <SearchFilter

        search={search}

        setSearch={setSearch}

        statusFilter={statusFilter}

        setStatusFilter={setStatusFilter}

        priorityFilter={priorityFilter}

        setPriorityFilter={setPriorityFilter}

      />


      {/* TABLE */}

      <div className="ticket-table-container">

        <table className="ticket-table">

          <thead>

            <tr>

              <th>Ticket ID</th>

              <th>Customer</th>

              <th>Subject</th>

              <th>Status</th>

              <th>Priority</th>

              <th>Date</th>

              <th>Actions</th>

            </tr>

          </thead>


          <tbody>

            {filteredTickets.map((ticket) => (

              <tr

                key={ticket._id}

                onClick={() =>

                  navigate(

                    `/ticket/${ticket._id}`

                  )

                }

                className="ticket-row"

              >


                {/* ID */}

                <td>

                  {ticket.ticketId}

                </td>


                {/* CUSTOMER */}

                <td>

                  {ticket.customerName}

                </td>


                {/* SUBJECT */}

                <td>

                  {ticket.subject}

                </td>


                {/* STATUS */}

                <td>

                  <select

                    value={ticket.status}

                    onClick={(e) =>
                      e.stopPropagation()
                    }

                    onChange={(e) =>

                      handleStatusChange(

                        ticket._id,

                        e.target.value

                      )

                    }

                    className={`status-dropdown ${ticket.status.toLowerCase()}`}

                  >

                    <option>

                      Open

                    </option>

                    <option>

                      Pending

                    </option>

                    <option>

                      Resolved

                    </option>

                    <option>

                      Closed

                    </option>

                  </select>

                </td>


                {/* PRIORITY */}

                <td>

                  <span

                    className={`priority ${ticket.priority.toLowerCase()}`}

                  >

                    {ticket.priority}

                  </span>

                </td>


                {/* DATE */}

                <td>

                  {new Date(

                    ticket.createdAt

                  ).toLocaleDateString()}

                </td>


                {/* ACTIONS */}

                <td>

                  <div className="action-buttons">


                    {/* EDIT */}

                    <button

                      className="edit-btn"

                      onClick={(e) => {

                        e.stopPropagation();

                        navigate(

                          `/ticket/${ticket._id}`

                        );

                      }}

                    >

                      <FaEdit />

                    </button>


                    {/* DELETE */}

                    <button

                      className="delete-btn"

                      onClick={(e) => {

                        e.stopPropagation();

                        handleDelete(

                          ticket._id

                        );

                      }}

                    >

                      <FaTrash />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default TicketTable;