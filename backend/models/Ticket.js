const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    ticketId: String,

    customerName: String,

    email: String,

    subject: String,

    description: String,

    priority: String,
    

    attachment: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "Open",
    },

    comments: [{

    sender: {

      type: String,

      default: "Agent",

    },

    message: String,

    createdAt: {

      type: Date,

      default: Date.now,

    },

  },

],

     
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);