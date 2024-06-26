const Screening = require("../models/screening");

const inputScreeningInfo = async (req, res) => {
  try {
    const { userId } = req.user;

    const { firstname, lastname, facultyOfChoice, courseOfChoice } = req.body;

    if (!firstname || !lastname || !facultyOfChoice || !courseOfChoice) {
      return res.status(400).json({
        status: false,
        error: {
          message:
            "firstname, lastname, faculty of interest and course are required",
        },
      });
    }
    const screeningRow = await Screening.create({
      userId,
      firstname,
      lastname,
      facultyOfChoice,
      courseOfChoice,
    });

    return res.status(201).json({
      status: true,
      data: {
        message: "Info saved successfully",
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Error inputting info",
      },
    });
  }
};

const uploadJambResults = async (req, res) => {
  try {
    const { userId } = req.user;
    const result = req.body;

    await Screening.update(
      {
        jambResults: result,
      },
      { where: { userId } }
    );

    return res.status(200).json({
      status: true,
      data: {
        message: "Jamb result updated",
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to upload result",
      },
    });
  }
};

const uploadOResults = async (req, res) => {
  try {
    const { userId } = req.user;

    const result = req.body;

    await Screening.update(
      {
        OResults: result,
      },
      { where: { userId } }
    );

    return res.status(200).json({
      status: true,
      data: {
        message: "O Level result updated",
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to upload result",
      },
    });
  }
};

const updateReligion = async (req, res) => {
  try {
    const { userId } = req.user;

    const { religion } = req.body;

    if (!religion) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Religion not provided",
        },
      });
    }

    await Screening.update(
      {
        religion,
      },
      {
        where: { userId },
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Error encountered saving religious status",
      },
    });
  }
};

const getScreening = async (req, res) => {
  try {
    const { userId } = req.user;

    const screeningRecord = await Screening.findOne({ where: { userId } });

    if (!screeningRecord) {
      return res.status(404).json({
        status: false,
        error: {
          message: "No screening record",
        },
      });
    }

    return res.status(200).json({
      status: false,
      data: {
        screeningRecord,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Error getting info",
      },
    });
  }
};

module.exports = {
  inputScreeningInfo,
  getScreening,
  uploadJambResults,
  uploadOResults,
  updateReligion,
};
