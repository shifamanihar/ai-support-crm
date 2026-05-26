import {
  useState,
  useEffect,
} from "react";

import API from "../../api/axios";

import {
  FaPaperPlane,
  FaRobot,
  FaUser,
} from "react-icons/fa";

import "./AIAssistant.css";


const AIAssistant = () => {

  /* =========================
     STATES
  ========================= */

  const [message,
    setMessage] =
    useState("");


  const [loading,
    setLoading] =
    useState(false);


  const [chat,
    setChat] =
    useState<any[]>([]);


  /* =========================
     FETCH OLD CHATS
  ========================= */

  useEffect(() => {

    fetchChats();

  }, []);


  const fetchChats =
    async () => {

      try {

        const response =
          await API.get(
            "/ai/history"
          );

        setChat(
          response.data
        );

      }

      catch (error) {

        console.log(
          "FETCH ERROR:",
          error
        );

      }

  };


  /* =========================
     SEND MESSAGE
  ========================= */

  const handleSend =
    async () => {

      if (!message.trim())
        return;


      // USER MESSAGE

      const userMessage = {

        role: "user",

        text: message,

      };


      // SHOW USER MESSAGE

      setChat((prev) => [

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
          await API.post(

            "/ai/chat",

            {

              message:
                currentMessage,

            }

          );


        console.log(
          "AI RESPONSE:",
          response.data
        );


        // AI RESPONSE

        const aiMessage = {

          role: "ai",

          text:

            response?.data?.reply ||

            "No response from AI",

        };


        // SHOW AI MESSAGE

        setChat((prev) => [

          ...prev,

          aiMessage,

        ]);

      }

      catch (error: any) {

        console.log(

          "AI ERROR:",

          error.response?.data ||

          error.message

        );


        const errorMessage = {

          role: "ai",

          text:
            "AI server failed 😭",

        };


        setChat((prev) => [

          ...prev,

          errorMessage,

        ]);

      }

      finally {

        setLoading(false);

      }

  };


  return (

    <div className="ai-page">


      {/* CHAT AREA */}

      <div className="chat-container">

        {

          chat.length === 0 && (

            <div className="empty-chat">

              <FaRobot />

              <h2>

                Start chatting with AI

              </h2>

            </div>

          )

        }


        {

          chat.map(

            (
              item,
              index
            ) => (

              <div

                key={index}

                className={`chat-message ${item.role}`}

              >

                <div className="chat-icon">

                  {

                    item.role === "user"

                    ? <FaUser />

                    : <FaRobot />

                  }

                </div>


                <div className="chat-bubble">

                  {item.text}

                </div>

              </div>

            )

          )

        }


        {

          loading && (

            <div className="chat-message ai">

              <div className="chat-icon">

                <FaRobot />

              </div>


              <div className="chat-bubble typing">

                AI is typing...

              </div>

            </div>

          )

        }

      </div>


      {/* INPUT */}

      <div className="chat-input-box">

        <input

          type="text"

          placeholder="Ask AI anything..."

          value={message}

          onChange={(e) =>

            setMessage(
              e.target.value
            )

          }

          onKeyDown={(e) => {

            if (e.key === "Enter") {

              handleSend();

            }

          }}

        />


        <button
          type="button"
          onClick={handleSend}
        >

          <FaPaperPlane />

        </button>

      </div>

    </div>

  );

};

export default AIAssistant;