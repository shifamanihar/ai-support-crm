const User =
  require("../models/User");

const jwt =
  require("jsonwebtoken");


/* =====================================
   REGISTER USER
===================================== */

const registerUser = async (
  req,
  res
) => {

  try {

    const {

      fullName,

      email,

      password,

    } = req.body;


    // CHECK EXISTING USER

    const existingUser =
      await User.findOne({

        email:
          email.trim(),

      });


    if (existingUser) {

      return res.status(400)
      .json({

        success: false,

        message:
          "User already exists",

      });

    }


    // CREATE USER

    const user =
      await User.create({

        fullName,

        email:
          email.trim(),

        password:
          password.trim(),

        role: "user",

      });


    res.status(201).json({

      success: true,

      message:
        "Registration Successful",

      user,

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


/* =====================================
   LOGIN USER
===================================== */

const loginUser = async (
  req,
  res
) => {

  try {

    const {

      email,

      password,

    } = req.body;


    console.log(
      "LOGIN EMAIL:",
      email
    );


    // FIND USER

    const user =
      await User.findOne({

        email:
          email.trim(),

      });


    console.log(
      "FOUND USER:",
      user
    );


    // USER NOT FOUND

    if (!user) {

      return res.status(400)
      .json({

        success: false,

        message:
          "User not found",

      });

    }


    // PASSWORD CHECK

    if (

      user.password.trim()

      !==

      password.trim()

    ) {

      return res.status(400)
      .json({

        success: false,

        message:
          "Invalid Email or Password",

      });

    }


    /* =====================================
       CREATE JWT TOKEN
    ===================================== */

    const token =
      jwt.sign(

        {

          id: user._id,

          role: user.role,

        },

        process.env.JWT_SECRET,

        {

          expiresIn: "7d",

        }

      );


    /* =====================================
       LOGIN SUCCESS
    ===================================== */

    res.status(200).json({

      success: true,

      message:
        "Login Successful",

      token,

      user,

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


/* =====================================
   RESET PASSWORD
===================================== */

const resetPassword = async (
  req,
  res
) => {

  try {

    const {

      email,

      password,

    } = req.body;


    const user =
      await User.findOne({

        email:
          email.trim(),

      });


    if (!user) {

      return res.status(400)
      .json({

        success: false,

        message:
          "User not found",

      });

    }


    // UPDATE PASSWORD

    user.password =
      password.trim();


    await user.save();


    res.status(200).json({

      success: true,

      message:
        "Password Updated Successfully",

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


module.exports = {

  registerUser,

  loginUser,

  resetPassword,

};