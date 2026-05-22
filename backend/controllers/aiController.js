const generateAI =
  require("../utils/gemini");


const generateSummary =
  async (req, res) => {

    try {

      const {
        subject,
        description,
      } = req.body;


      const prompt = `

      You are an AI support assistant.

      Ticket Subject:
      ${subject}

      Ticket Description:
      ${description}

      Generate:
      1. Short Summary
      2. Priority Level
      3. Suggested Reply

      `;


      const text =
        await generateAI(
          prompt
        );


      res.status(200).json({

        success: true,

        summary: text,

      });

    } catch (error) {

      console.log(
        "AI ERROR:",
        error.message
      );

      res.status(500).json({

        success: false,

        message:
          error.message,

      });

    }

};

module.exports = {

  generateSummary,

};