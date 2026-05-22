const express = require("express");

const router = express.Router();

const Chat = require("../models/Chat");



/* =========================
   AI CHAT
========================= */

router.post("/chat", async (req, res) => {

  try {

    const { message } = req.body;

    // CHECK EMPTY MESSAGE

    if (!message) {

      return res.status(400).json({

        success: false,
        reply: "Message is required",

      });

    }

    // SAVE USER MESSAGE

    await Chat.create({

      role: "user",

      text: message,

    });

    const userMessage =
      message.toLowerCase();

    let reply = "";



    /* =========================
       LOGIN
    ========================= */

    if (
      userMessage.includes("login")
    ) {

      reply =
        "Try resetting your password and clear browser cache.";

    }



    /* =========================
       LOGOUT
    ========================= */

    else if (
      userMessage.includes("logout")
    ) {

      reply =
        "Click profile icon and press logout.";

    }



    /* =========================
       TICKET
    ========================= */

    else if (
      userMessage.includes("ticket")
    ) {

      reply =
        "Go to Create Ticket page from sidebar.";

    }



    /* =========================
       DEFAULT
    ========================= */

    else {

      reply =
        "I am AI support assistant. Ask me support related questions.";

    }



    // SAVE AI MESSAGE

    await Chat.create({

      role: "ai",

      text: reply,

    });



    // SEND RESPONSE

    res.json({

      success: true,

      reply,

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      reply: "AI failed 😭",

    });

  }

});



/* =========================
   GET CHAT HISTORY
========================= */

router.get("/history", async (req, res) => {

  try {

    const chats = await Chat.find()
      .sort({ createdAt: 1 });

    res.json(chats);

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Failed to load chat history",

    });

  }

});



module.exports = router;