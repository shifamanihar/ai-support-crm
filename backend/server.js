const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const path = require("path");

const http = require("http");

const { Server } = require("socket.io");

require("dotenv").config();


/* =========================
   DEBUG ENV
========================= */

console.log(
  "JWT SECRET:",
  process.env.JWT_SECRET
);


/* =========================
   ROUTES
========================= */

const ticketRoutes = require(
  "./routes/ticketRoutes"
);

const userRoutes = require(
  "./routes/userRoutes"
);

const aiRoutes = require(
  "./routes/aiRoutes"
);


/* =========================
   APP
========================= */

const app = express();

const server =
  http.createServer(app);


/* =========================
   SOCKET.IO
========================= */

const io = new Server(
  server,

  {

    cors: {

      origin:
        "http://localhost:5173",

      methods: [
        "GET",
        "POST",
      ],

    },

  }
);


io.on(
  "connection",

  (socket) => {

    console.log(
      "⚡ User Connected:",
      socket.id
    );


    /* RECEIVE MESSAGE */

    socket.on(

      "send_message",

      (data) => {

        io.emit(
          "receive_message",
          data
        );

      }

    );


    /* DISCONNECT */

    socket.on(

      "disconnect",

      () => {

        console.log(
          "❌ User Disconnected"
        );

      }

    );

  }
);


/* =========================
   MIDDLEWARE
========================= */

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);


/* =========================
   STATIC FOLDER
========================= */

app.use(

  "/uploads",

  express.static(

    path.join(
      __dirname,
      "uploads"
    )

  )

);


/* =========================
   API ROUTES
========================= */

app.use(
  "/api/tickets",
  ticketRoutes
);

app.use(
  "/api/users",
  userRoutes
);

app.use(
  "/api/ai",
  aiRoutes
);


/* =========================
   TEST ROUTE
========================= */

app.get(

  "/",

  (req, res) => {

    res.send(
      "🚀 API Running..."
    );

  }

);


/* =========================
   START SERVER
========================= */

const PORT =
  process.env.PORT || 3000;


const startServer =
  async () => {

    try {

      await mongoose.connect(

        process.env.MONGO_URI,

        {

          tls: true,

          retryWrites: true,

          w: "majority",

        }

      );


      console.log(
        "✅ MongoDB Connected"
      );


      server.listen(

        PORT,

        () => {

          console.log(
            `🚀 Server running on port ${PORT}`
          );

        }

      );

    }

    catch (err) {

      console.log(
        "❌ Mongo Error:",
        err
      );

    }

};


startServer();