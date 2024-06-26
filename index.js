const express = require("express");
const sequelize = require("./database/db");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const authRoute = require("./routes/auth.route");
const uploadRoute = require("./routes/upload.route");
const screeningRoutes = require("./routes/screening.route");
const adminRoutes = require("./routes/admin.route");

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/user", screeningRoutes);
app.use("/api/admin", adminRoutes);

const main = async () => {
  try {
    await sequelize.sync({ force: true });
    await sequelize.authenticate();
    app.listen(3000, () => {
      console.log("Listening at port 3000");
    });
  } catch (error) {
    console.error(error);
  }
};

main();
