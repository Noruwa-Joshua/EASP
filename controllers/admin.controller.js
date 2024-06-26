const Screening = require("../models/screening");
const jwt = require("jsonwebtoken");

const verifyAdminRole = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const { role } = jwt.decode(token);

  if (role === "user") {
    return res.status(401).json({
      status: false,
      error: {
        message: "User not authorized",
      },
    });
  }
  next();
};

const getScreeningById = async (req, res) => {
  try {
    const id = req.query.id;

    const requestedScreening = await Screening.findOne({ where: { id } });

    if (!requestedScreening) {
      return res.status(404).json({
        status: false,
        error: {
          message: "Screening record not found",
        },
      });
    }

    return res.status(200).json({
      status: true,
      data: {
        requestedScreening,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Error encountered",
      },
    });
  }
};

const getAllScreening = async (req, res) => {
  try {
    const screeningRecordsNo = await Screening.findAndCountAll();
    const screeningRecords = await Screening.findAll();

    return res.status(200).json({
      status: true,
      data: {
        numberOfRecords: screeningRecordsNo,
        screeningRecords,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Error encountered getting screenings",
      },
    });
  }
};

const deleteUpdatedDocumentsById = async (req, res) => {
  try {
    const { id, remark } = req.body;
    const { email } = req.user;

    await Screening.update({ uploaded: null, remark }, { where: { id } });

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Anchor University Screening Update",
      html: `The admission officer made the following remark:
      <strong>${remark}</strong>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Error encountered in deleting screening",
      },
    });
  }
};

const makeScreeningRemarks = async (req, res) => {
  try {
    const { id, remark } = req.body;
    const { email } = req.user;

    await Screening.update({ remark }, { where: { id } });

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Anchor University Screening Update",
      html: `The admission officer made the following remark:
      <strong>${remark}</strong>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Error encountered in making reviews",
      },
    });
  }
};

const suggestCourse = async (req, res) => {
  try {
    const { id, remark } = req.body;
    const { email } = req.user;

    await Screening.update(
      { remark, adminSuggestedChange: true },
      { where: { id } }
    );

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Anchor University Screening Update",
      html: `The admission officer made the following remark:
      <strong>${remark}</strong>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Error encountered in suggesting course",
      },
    });
  }
};

const approveScreening = async (req, res) => {
  try {
    const { id, remark } = req.body;
    const { email } = req.user;

    await Screening.update(
      { approved: true },
      {
        where: {
          userid: id,
        },
      }
    );

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Anchor University Admission Offer",
      html: `Congratulations, you have been deemed worthy to study the course of your choice at anchor university, Congratulations once again
      `,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Error approving screening",
      },
    });
  }
};

module.exports = {
  verifyAdminRole,
  getScreeningById,
  getAllScreening,
  deleteUpdatedDocumentsById,
  approveScreening,
  suggestCourse,
  makeScreeningRemarks,
};
