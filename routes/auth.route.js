const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/auth.controller");

router.post("/signup", registerUser);
router.post("/signin", loginUser);
router.get("/profile", getUser);

module.exports = router;
