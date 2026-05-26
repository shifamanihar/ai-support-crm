const {
  GoogleGenerativeAI,
} = require(
  "@google/generative-ai"
);

const genAI =
  new GoogleGenerativeAI(

    process.env.GEMINI_API_KEY

  );

async function generateReply(
  message
) {

  try {

    const model =
      genAI.getGenerativeModel({

        model:
          "gemini-1.5-flash",

      });

    const result =
      await model.generateContent(
        message
      );

    const response =
      await result.response;

    return response.text();

  }

  catch (error) {

    console.log(
      "GEMINI ERROR:",
      error
    );

    return "AI temporarily unavailable 😭";

  }

}

module.exports =
  generateReply;