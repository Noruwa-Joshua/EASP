const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Screening = require("../models/screening");

const uploadPassport = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const { userId } = jwt.decode(token);

    const { path } = req.file;

    await User.update({ profilePic: path }, { where: { id: userId } });

    res.status(200).json({
      status: true,
      data: {
        message: "Passport uploaded",
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Error encountered in uploading pic",
      },
    });
  }
};

const uploadDocuments = async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const { userId } = jwt.decode(token);

    const paths = req.files.map((el) => el.path);

    await Screening.update({ uploaded: paths }, { where: { id: userId } });

    return res.status(200).json({
      status: true,
      data: { message: "Documents uploaded sucessfully" },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Error encountered in uploading pic",
      },
    });
  }
};

module.exports = { uploadPassport, uploadDocuments };
