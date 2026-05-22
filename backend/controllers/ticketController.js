const Ticket = require("../models/Ticket");

const sendEmail = require("../utils/sendEmail");


// CREATE TICKET

const createTicket = async (
  req,
  res
) => {

  try {

    const {

      customerName,

      email,

      subject,

      description,

      priority,

    } = req.body;
    
  console.log(req.body);
  console.log("EMAIL:", email);

    const ticket =
      await Ticket.create({

        ticketId:
          `TKT-${Date.now()}`,

        customerName,

        email,

        subject,

        description,

        priority,

        status: "Open",

        attachment:
          req.file
            ? req.file.filename
            : "",

      });



    // SEND EMAIL 😭🔥

    await sendEmail(

      email,

      "Ticket Created",

      `Hello ${customerName},

Your support ticket has been created successfully.

Ticket ID: ${ticket.ticketId}

We will contact you soon.`

    );



    res.status(201).json({

      success: true,

      message:
        "Ticket Created Successfully",

      ticket,

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message:
        error.message,

    });

  }

};


// GET ALL TICKETS

const getTickets = async (
  req,
  res
) => {

  try {

    const tickets =
      await Ticket.find().sort({

        createdAt: -1,

      });


    res.status(200).json({

      success: true,

      count:
        tickets.length,

      tickets,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message:
        error.message,

    });

  }

};


// GET SINGLE TICKET

const getSingleTicket =
  async (req, res) => {

    try {

      const ticket =
        await Ticket.findById(
          req.params.id
        );


      if (!ticket) {

        return res.status(404).json({

          success: false,

          message:
            "Ticket not found",

        });

      }


      res.status(200).json({

        success: true,

        ticket,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

};


// UPDATE TICKET

const updateTicketStatus =
  async (req, res) => {

    try {

      const ticket =
        await Ticket.findById(
          req.params.id
        );


      if (!ticket) {

        return res.status(404).json({

          success: false,

          message:
            "Ticket not found",

        });

      }


      // UPDATE FIELDS

      ticket.customerName =
        req.body.customerName ||
        ticket.customerName;

      ticket.subject =
        req.body.subject ||
        ticket.subject;

      ticket.description =
        req.body.description ||
        ticket.description;

      ticket.priority =
        req.body.priority ||
        ticket.priority;

      ticket.status =
        req.body.status ||
        ticket.status;


      // UPDATE FILE

      if (req.file) {

        ticket.attachment =
          req.file.filename;

      }


      await ticket.save();


      res.status(200).json({

        success: true,

        message:
          "Ticket updated successfully",

        ticket,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

};


// DELETE TICKET

const deleteTicket =
  async (req, res) => {

    try {

      const ticket =
        await Ticket.findById(
          req.params.id
        );


      if (!ticket) {

        return res.status(404).json({

          success: false,

          message:
            "Ticket not found",

        });

      }


      await ticket.deleteOne();


      res.status(200).json({

        success: true,

        message:
          "Ticket deleted successfully",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

};

//Comment

const addComment =
  async (req, res) => {

    try {

      const { message, sender } =
        req.body;


      const ticket =
        await Ticket.findById(
          req.params.id
        );


      if (!ticket) {

        return res.status(404).json({

          success: false,

          message:
            "Ticket not found",

        });

      }


      ticket.comments.push({

        sender:
          sender || "Agent",

        message,

      });


      await ticket.save();


      res.status(200).json({

        success: true,

        message:
          "Comment added successfully",

        ticket,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

};

//div vitualization
const getTicketStats = async (
  req,
  res
) => {

  try {

    const totalTickets =
      await Ticket.countDocuments();

    const openTickets =
      await Ticket.countDocuments({

        status: "Open",

      });

    const pendingTickets =
      await Ticket.countDocuments({

        status: "Pending",

      });

    const closedTickets =
      await Ticket.countDocuments({

        status: "Closed",

      });


    res.status(200).json({

      success: true,

      stats: {

        totalTickets,

        openTickets,

        pendingTickets,

        closedTickets,

      },

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,

      message: error.message,

    });

  }

};

//Ai
const getChartData =
  async (req, res) => {

    try {

      const monthlyData =
        await Ticket.aggregate([

          {

            $group: {

              _id: {

                month: {

                  $month:
                    "$createdAt",

                },

              },

              tickets: {

                $sum: 1,

              },

            },

          },

          {

            $sort: {

              "_id.month": 1,

            },

          },

        ]);


      const months = [

        "Jan",

        "Feb",

        "Mar",

        "Apr",

        "May",

        "Jun",

        "Jul",

        "Aug",

        "Sep",

        "Oct",

        "Nov",

        "Dec",

      ];


      const formattedData =
        monthlyData.map(

          (item) => ({

            month:

              months[
                item._id.month - 1
              ],

            tickets:
              item.tickets,

          })

        );


      res.status(200).json({

        success: true,

        data:
          formattedData,

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

};

 

const model =
  require("../utils/gemini");

module.exports = {

  createTicket,

  getTickets,

  getSingleTicket,

  updateTicketStatus,

  deleteTicket,

  addComment,

  getTicketStats,

  getChartData,

};