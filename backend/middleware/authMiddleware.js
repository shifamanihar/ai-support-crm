const jwt =
  require("jsonwebtoken");


const authMiddleware =
  (req, res, next) => {

    try {

      // GET HEADER

      const authHeader =
        req.headers.authorization;


      console.log(

        "AUTH HEADER:",

        authHeader

      );


      // CHECK TOKEN

      if (!authHeader) {

        return res.status(401)
        .json({

          message:
            "No token provided",

        });

      }


      // FORMAT:
      // Bearer TOKEN

      const token =
        authHeader.split(" ")[1];


      if (!token) {

        return res.status(401)
        .json({

          message:
            "Invalid token format",

        });

      }


      // VERIFY TOKEN

      const decoded =
        jwt.verify(

          token,

          process.env.JWT_SECRET

        );


      console.log(

        "DECODED USER:",

        decoded

      );


      // SAVE USER

      req.user =
        decoded;


      next();

    }

    catch (error) {

      console.log(

        "JWT ERROR:",

        error.message

      );

      return res.status(401)
      .json({

        message:
          "Invalid token",

      });

    }

};

module.exports =
  authMiddleware;