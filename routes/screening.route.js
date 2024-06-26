const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../controllers/auth.controller");
const {
  inputScreeningInfo,
  getScreening,
  uploadJambResults,
  uploadOResults,
  updateReligion,
} = require("../controllers/screening.controller");

router.use(authenticateToken);
router.post("/screeningInfo", inputScreeningInfo);
router.get("/myscreening", getScreening);
router.post("/uploadjamb", uploadJambResults);
router.post("/uploadoresult", uploadOResults);
router.post("/updatereligion", updateReligion);

module.exports = router;
