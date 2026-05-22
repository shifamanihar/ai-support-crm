const express =
  require("express");

const router =
  express.Router();

const multer =
  require("multer");

const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

const roleMiddleware =
  require(
    "../middleware/roleMiddleware"
  );


const {

  createTicket,

  getTickets,

  getSingleTicket,

  updateTicketStatus,

  deleteTicket,

  addComment,

  getTicketStats,

  getChartData,

} = require(

  "../controllers/ticketController"

);


/* =========================
   MULTER STORAGE
========================= */

const storage =
  multer.diskStorage({

    destination: function (

      req,

      file,

      cb

    ) {

      cb(
        null,
        "uploads/"
      );

    },


    filename: function (

      req,

      file,

      cb

    ) {

      cb(

        null,

        Date.now() +

        "-" +

        file.originalname

      );

    },

});


const upload =
  multer({

    storage,

});


/* =========================
   ROUTES
========================= */


/* =========================
   CREATE TICKET
========================= */

router.post(

  "/",

  authMiddleware,

  upload.single(
    "attachment"
  ),

  createTicket

);


/* =========================
   GET ALL TICKETS
========================= */

router.get(

  "/",

  authMiddleware,

  getTickets

);


/* =========================
   GET SINGLE TICKET
========================= */

router.get(

  "/:id",

  authMiddleware,

  getSingleTicket

);


/* =========================
   UPDATE TICKET
========================= */

router.put(

  "/:id",

  authMiddleware,

  upload.single(
    "attachment"
  ),

  updateTicketStatus

);


/* =========================
   DELETE TICKET
   ADMIN ONLY
========================= */

router.delete(

  "/:id",

  authMiddleware,

  roleMiddleware(
    "admin"
  ),

  deleteTicket

);


/* =========================
   ADD COMMENT
========================= */

router.post(

  "/:id/comment",

  authMiddleware,

  addComment

);


/* =========================
   DASHBOARD STATS
========================= */

router.get(

  "/stats/overview",

  authMiddleware,

  roleMiddleware(
    "admin"
  ),

  getTicketStats

);


/* =========================
   CHART DATA
========================= */

router.get(

  "/stats/chart",

  authMiddleware,

  roleMiddleware(
    "admin"
  ),

  getChartData

);


module.exports =
  router;