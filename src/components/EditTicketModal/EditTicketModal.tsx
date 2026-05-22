import "./EditTicketModal.css";

import {

  useState,

  useEffect,

} from "react";

import axios from "axios";

import Swal from "sweetalert2";


interface Props {

  ticket: any;

  onClose: () => void;

  fetchTickets: () => void;

}


const EditTicketModal = ({
  ticket,
  onClose,
  fetchTickets,
}: Props) => {

  const [formData,
    setFormData] =
    useState({

      customerName: "",

      subject: "",

      description: "",

      priority: "Low",

      status: "Open",

    });


  useEffect(() => {

    if (ticket) {

      setFormData({

        customerName:
          ticket.customerName,

        subject:
          ticket.subject,

        description:
          ticket.description,

        priority:
          ticket.priority,

        status:
          ticket.status,

      });

    }

  }, [ticket]);


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };


  const handleUpdate =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      try {

        await axios.put(

          `http://localhost:3000/api/tickets/${ticket._id}`,

          formData

        );


        Swal.fire({

          title:
            "Updated!",

          text:
            "Ticket updated successfully.",

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

        onClose();

      } catch (error) {

        Swal.fire({

          title:
            "Error",

          text:
            "Failed to update ticket",

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

  };


  return (

    <div className="modal-overlay">

      <div className="edit-modal">

        <h2>

          Edit Ticket

        </h2>


        <form
          onSubmit={handleUpdate}
        >

          <input

            type="text"

            name="customerName"

            value={
              formData.customerName
            }

            onChange={
              handleChange
            }

            placeholder="Customer Name"

            required

          />


          <input

            type="text"

            name="subject"

            value={
              formData.subject
            }

            onChange={
              handleChange
            }

            placeholder="Subject"

            required

          />


          <textarea

            name="description"

            value={
              formData.description
            }

            onChange={
              handleChange
            }

            placeholder="Description"

            rows={5}

            required

          />


          <select

            name="priority"

            value={
              formData.priority
            }

            onChange={
              handleChange
            }

          >

            <option>

              Low

            </option>

            <option>

              Medium

            </option>

            <option>

              High

            </option>

          </select>


          <select

            name="status"

            value={
              formData.status
            }

            onChange={
              handleChange
            }

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


          {/* BUTTONS */}

          <div className="modal-buttons">

            <button
              type="submit"
              className="save-btn"
            >

              Save Changes

            </button>


            <button

              type="button"

              className="cancel-btn"

              onClick={onClose}

            >

              Cancel

            </button>

          </div>

        </form>

      </div>

    </div>

  );

};

export default EditTicketModal;