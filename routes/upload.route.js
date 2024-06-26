const express = require("express");
const router = express.Router();
const multer = require("multer");
const storageEngine = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage: storageEngine });
const { authenticateToken } = require("../controllers/auth.controller");

const {
  uploadPassport,
  uploadDocuments,
} = require("../controllers/upload.controller");

router.use(authenticateToken);
router.post("/uploadpassport", upload.single("passport"), uploadPassport);
router.post("/uploaddocs", upload.array("documents", 6), uploadDocuments);

module.exports = router;
