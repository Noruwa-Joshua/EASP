const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../controllers/auth.controller");
const {
  getScreeningById,
  verifyAdminRole,
  getAllScreening,
  makeScreeningRemarks,
  suggestCourse,
  approveScreening,
  deleteUpdatedDocumentsById,
} = require("../controllers/admin.controller");

router.use(authenticateToken);
router.use(verifyAdminRole);

router.post("/screening", getScreeningById);
router.post("/allscreenings", getAllScreening);
router.post("/remarkscreening", makeScreeningRemarks);
router.post("/suggestcourse", suggestCourse);
router.post("/approvescreening", approveScreening);
router.post("/deletedocs", deleteUpdatedDocumentsById);

module.exports = router;
