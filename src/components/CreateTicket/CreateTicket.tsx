import API from "../../api/axios";

import { useState } from "react";

import toast from "react-hot-toast";

import "./CreateTicket.css";

import {
  useNotification,
} from "../../context/NotificationContext";


const CreateTicket = () => {

  const {
    addNotification,
  } = useNotification();


  const [formData,
    setFormData] =
    useState({

      customerName: "",

      email: "",

      subject: "",

      description: "",

      priority: "Low",

    });


  const [attachment,
    setAttachment] =
    useState<File | null>(
      null
    );


  /* =========================
     HANDLE INPUT CHANGE
  ========================= */

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


  /* =========================
     SUBMIT FORM
  ========================= */

  const handleSubmit = async (

    e: React.FormEvent

  ) => {

    e.preventDefault();

    try {

      const data =
        new FormData();


      /* =========================
         TEXT DATA
      ========================= */

      data.append(

        "customerName",

        formData.customerName

      );

      data.append(

        "email",

        formData.email

      );

      data.append(

        "subject",

        formData.subject

      );

      data.append(

        "description",

        formData.description

      );

      data.append(

        "priority",

        formData.priority

      );


      /* =========================
         FILE
      ========================= */

      if (attachment) {

        data.append(

          "attachment",

          attachment

        );

      }


      /* =========================
         API CALL
      ========================= */

      const response =
        await API.post(

          "/tickets",

          data,

          {

            headers: {

              "Content-Type":
                "multipart/form-data",

            },

          }

        );


      console.log(
        response.data
      );


      /* =========================
         NOTIFICATION
      ========================= */

      addNotification({

        message:
          "New Ticket Created 🎫",

        time:
          new Date().toLocaleTimeString(),

        type:
          "success",

      });


      /* =========================
         SUCCESS TOAST
      ========================= */

      toast.success(

        "Ticket Created Successfully 🚀"

      );


      /* =========================
         RESET FORM
      ========================= */

      setFormData({

        customerName: "",

        email: "",

        subject: "",

        description: "",

        priority: "Low",

      });


      setAttachment(null);

    }

    catch (error: any) {

      console.log(error);

      toast.error(

        error.response?.data
          ?.message ||

        "Something went wrong ❌"

      );

    }

  };


  return (

    <div className="create-ticket-page">

      <div className="create-ticket-container">

        <form

          onSubmit={handleSubmit}

          className="ticket-form"

        >

          <div className="form-grid">


            {/* NAME */}

            <input

              type="text"

              name="customerName"

              placeholder="Customer Name"

              value={formData.customerName}

              onChange={handleChange}

              className="ticket-input"

              required

            />


            {/* EMAIL */}

            <input

              type="email"

              name="email"

              placeholder="Customer Email"

              value={formData.email}

              onChange={handleChange}

              className="ticket-input"

              required

            />


            {/* SUBJECT */}

            <input

              type="text"

              name="subject"

              placeholder="Ticket Subject"

              value={formData.subject}

              onChange={handleChange}

              className="ticket-input full-width"

              required

            />


            {/* DESCRIPTION */}

            <textarea

              name="description"

              placeholder="Describe the issue..."

              rows={6}

              value={formData.description}

              onChange={handleChange}

              className="ticket-input full-width"

              required

            />


            {/* PRIORITY */}

            <select

              name="priority"

              value={formData.priority}

              onChange={handleChange}

              className="ticket-input"

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


            {/* FILE */}

            <div className="file-upload-box">

              <label>

                Upload Attachment

              </label>


              <input

                type="file"

                onChange={(e) =>

                  setAttachment(

                    e.target.files

                      ? e.target.files[0]

                      : null

                  )

                }

              />


              {attachment && (

                <p className="file-name">

                  {attachment.name}

                </p>

              )}

            </div>

          </div>


          {/* BUTTON */}

          <button

            type="submit"

            className="submit-btn"

          >

            Create Ticket

          </button>

        </form>

      </div>

    </div>

  );

};

export default CreateTicket;