import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  FaRobot,
  FaExclamationTriangle,
} from "react-icons/fa";

import axios from "axios";

import toast from "react-hot-toast";

import "./TicketDetails.css";


const TicketDetails = () => {

  const { id } = useParams();


  const [ticket,
    setTicket] =
    useState<any>(null);


  const [message,
    setMessage] =
    useState("");


  const [aiSummary,
    setAiSummary] =
    useState("");


  const [aiLoading,
    setAiLoading] =
    useState(false);


  // FETCH SINGLE TICKET

  const fetchTicket =
    async () => {

      try {

        const response =
          await axios.get(

            `https://ai-support-crm.onrender.com/api/tickets/${id}`

          );


        setTicket(
          response.data.ticket
        );

      } catch (error) {

        console.log(error);

      }

  };


  useEffect(() => {

    fetchTicket();

  }, []);


  // SEND COMMENT

  const handleComment =
    async () => {

      if (!message.trim())
        return;


      try {

        await axios.post(

          `https://ai-support-crm.onrender.com/api/tickets/${id}/comment`,

          {

            author:
              "Support Agent",

            message,

          }

        );


        toast.success(

          "Reply Sent",

          {

            className:
              "custom-toast success-toast",

            icon:
              <FaRobot />,

          }

        );


        setMessage("");


        fetchTicket();

      } catch (error) {

        console.log(error);

        toast.error(

          "Failed To Send Reply",

          {

            className:
              "custom-toast error-toast",

            icon:
              <FaExclamationTriangle />,

          }

        );

      }

  };


  // AI SUMMARY

  const generateAiSummary =
    async () => {

      const toastId =
        toast.loading(

          "Generating AI Summary...",

          {

            className:
              "custom-toast loading-toast",

            icon:
              <FaRobot />,

          }

        );


      try {

        setAiLoading(true);


        const response =
          await axios.post(

            "https://ai-support-crm.onrender.com/api/ai/summary",

            {

              subject:
                ticket.subject,

              description:
                ticket.description,

            }

          );


        setAiSummary(

          response.data.summary

        );


        toast.dismiss(
          toastId
        );


        toast.success(

          "AI Summary Generated",

          {

            className:
              "custom-toast success-toast",

            icon:
              <FaRobot />,

          }

        );

      } catch (error) {

        console.log(error);


        toast.dismiss(
          toastId
        );


        toast.error(

          "AI Generation Failed",

          {

            className:
              "custom-toast error-toast",

            icon:
              <FaExclamationTriangle />,

          }

        );

      } finally {

        setAiLoading(false);

      }

  };


  // LOADING

  if (!ticket) {

    return (

      <div className="loading-page">

        <h1>

          Loading Ticket...

        </h1>

      </div>

    );

  }


  return (

    <div className="ticket-details-page">

      {/* HEADER */}

      <div className="ticket-header">

        <div>

          <h1>

            {ticket.subject}

          </h1>

          <p>

            Ticket ID:
            {" "}
            {ticket.ticketId}

          </p>

        </div>


        <span
          className={`status-badge ${ticket.status.toLowerCase()}`}
        >

          {ticket.status}

        </span>

      </div>


      {/* CUSTOMER INFO */}

      <div className="ticket-info-card">

        <h2>

          Customer Information

        </h2>


        <div className="info-grid">

          <div>

            <strong>

              Customer Name

            </strong>

            <p>

              {ticket.customerName}

            </p>

          </div>


          <div>

            <strong>

              Email Address

            </strong>

            <p>

              {ticket.customerEmail}

            </p>

          </div>


          <div>

            <strong>

              Priority

            </strong>

            <p>

              {ticket.priority}

            </p>

          </div>


          <div>

            <strong>

              Created Date

            </strong>

            <p>

              {new Date(

                ticket.createdAt

              ).toLocaleDateString()}

            </p>

          </div>

        </div>


        {/* DESCRIPTION */}

        <div className="description-box">

          <strong>

            Description

          </strong>

          <p>

            {ticket.description}

          </p>

        </div>

      </div>


      {/* AI SUMMARY */}

      <div className="ai-summary-box">

        <div className="ai-summary-top">

          <h2>

            AI Ticket Summary

          </h2>


          <button

            onClick={generateAiSummary}

            disabled={aiLoading}

          >

            {

              aiLoading

                ? "Generating..."

                : "Generate AI Summary"

            }

          </button>

        </div>


        {ticket.aiReply && (

          <div className="ai-reply-box">

            <h3>

              AI Auto Reply

            </h3>

            <p>

              {ticket.aiReply}

            </p>

          </div>

        )}


        {

          aiSummary && (

            <div className="ai-summary-content">

              <pre>

                {aiSummary}

              </pre>

            </div>

          )

        }

      </div>


      {/* ATTACHMENT */}

      {ticket.attachment && (

        <div className="attachment-box">

          <h2>

            Attachment

          </h2>


          {ticket.attachment?.match(

            /\.(jpg|jpeg|png|gif|webp)$/i

          ) ? (

            <img

              src={`https://ai-support-crm.onrender.com/uploads/${ticket.attachment}`}

              alt="attachment"

              className="attachment-preview"

            />

          ) : (

            <a

              href={`https://ai-support-crm.onrender.com/uploads/${ticket.attachment}`}

              target="_blank"

              rel="noreferrer"

              className="attachment-link"

            >

              View Uploaded File

            </a>

          )}

        </div>

      )}


      {/* COMMENTS */}

      <div className="comments-section">

        <h2>

          Support Conversation

        </h2>


        <div className="comments-list">

          {ticket.comments?.length > 0 ? (

            ticket.comments.map(

              (
                comment: any,
                index: number
              ) => (

                <div

                  key={index}

                  className={`comment-card ${

                    comment.author ===
                    "Support Agent"

                      ? "agent"

                      : "customer"

                  }`}

                >

                  <div className="comment-top">

                    <h4>

                      {comment.author}

                    </h4>


                    <span>

                      {new Date(

                        comment.createdAt

                      ).toLocaleString()}

                    </span>

                  </div>


                  <p>

                    {comment.message}

                  </p>

                </div>

              )

            )

          ) : (

            <p className="no-comments">

              No replies yet.

            </p>

          )}

        </div>


        {/* REPLY BOX */}

        <div className="reply-box">

          <textarea

            placeholder="Write your reply..."

            value={message}

            onChange={(e) =>

              setMessage(
                e.target.value
              )

            }

          />


          <button
            onClick={handleComment}
          >

            Send Reply

          </button>

        </div>

      </div>

    </div>

  );

};

export default TicketDetails;