const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const registerUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const isAdmin = req.query.isAdmin;

    if (!fullname || !email || !password) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Fullname, email and password are required",
        },
      });
    }

    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Email is associated with an account",
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 15);
    let role = "user";
    if (isAdmin) {
      role = "admin";
    }

    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
      role,
    });
    return res.status(201).json({
      status: true,
      data: {
        message: "User successfully registered",
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Error encountered in registering user",
      },
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        status: false,
        error: {
          message: "User not found",
        },
      });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({
        status: false,
        error: {
          message: "Password is invalid",
        },
      });
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({
      status: true,
      data: {
        token,
      },
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ status: false, error: { message: "Error in logging in user" } });
  }
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      status: false,
      error: {
        message: "User not authenticated",
      },
    });
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({
        status: false,
        error: {
          message: "Invalid token",
        },
      });
    }
    req.user = user;
    next();
  });
};

const getUser = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        status: false,
        error: {
          message: "User not authenticated",
        },
      });
    }

    const { email } = jwt.decode(token);

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        status: false,
        error: {
          message: "User does not exist",
        },
      });
    }

    return res.status(200).json({
      status: true,
      data: {
        user,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      eroor: {
        message: "An error occurred getting user details",
      },
    });
  }
};

module.exports = { registerUser, loginUser, authenticateToken, getUser };
