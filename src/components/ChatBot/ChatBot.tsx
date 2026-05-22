
import {
  useState,
} from "react";

import axios from "axios";

import "./ChatBot.css";

import {

  FaRobot,

  FaTimes,

  FaPaperPlane,

} from "react-icons/fa";


const ChatBot = () => {

  /* =========================
     STATES
  ========================= */

  const [open,
    setOpen] =
    useState(false);


  const [message,
    setMessage] =
    useState("");


  const [loading,
    setLoading] =
    useState(false);


  const [messages,
    setMessages] =
    useState<any[]>([

      {

        sender: "ai",

        text:
          "Hii 👋 How can I help you today?",

      },

    ]);


  /* =========================
     SEND MESSAGE
  ========================= */

  const sendMessage =
    async () => {

      if (!message.trim())
        return;


      // USER MESSAGE

      const userMessage = {

        sender: "user",

        text: message,

      };


      // SHOW USER MESSAGE

      setMessages((prev) => [

        ...prev,

        userMessage,

      ]);


      const currentMessage =
        message;


      setMessage("");


      try {

        setLoading(true);


        // API CALL

        const response =
          await axios.post(

            "http://localhost:3000/api/ai/chat",

            {

              message:
                currentMessage,

            }

          );


        // AI MESSAGE

        const aiReply = {

          sender: "ai",

          text:

            response?.data?.reply ||

            "No response from AI",

        };


        // SHOW AI MESSAGE

        setMessages((prev) => [

          ...prev,

          aiReply,

        ]);

      }

      catch (error) {

        console.log(error);


        setMessages((prev) => [

          ...prev,

          {

            sender: "ai",

            text:
              "AI failed 😭",

          },

        ]);

      }

      finally {

        setLoading(false);

      }

  };


  return (

    <>

      {/* FLOAT BUTTON */}

      <button

        className="floating-ai-btn"

        onClick={() =>
          setOpen(!open)
        }

      >

        {

          open

          ?

          <FaTimes />

          :

          <FaRobot />

        }

      </button>


      {/* CHAT BOX */}

      {

        open && (

          <div className="floating-chat-box">


            {/* HEADER */}

            <div className="chat-header">

              <div className="chat-title">

                <FaRobot />

                <span>

                  AI Assistant

                </span>

              </div>

            </div>


            {/* CHAT BODY */}

            <div className="chat-body">

              {

                messages.map(

                  (msg, index) => (

                    <div

                      key={index}

                      className={`chat-message ${msg.sender}`}

                    >

                      {msg.text}

                    </div>

                  )

                )

              }


              {/* LOADING */}

              {

                loading && (

                  <div className="chat-message ai">

                    AI is typing...

                  </div>

                )

              }

            </div>


            {/* INPUT */}

            <div className="chat-input-area">

              <input

                type="text"

                placeholder="Ask anything..."

                value={message}

                onChange={(e) =>

                  setMessage(
                    e.target.value
                  )

                }

                onKeyDown={(e) => {

                  if (e.key === "Enter") {

                    sendMessage();

                  }

                }}

              />


              <button
                onClick={sendMessage}
              >

                <FaPaperPlane />

              </button>

            </div>

          </div>

        )

      }

    </>

  );

};


export default ChatBot;

