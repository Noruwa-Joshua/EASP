const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const User = require("./user");

const Screening = sequelize.define(
  "Screening",
  {
    userId: {
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: User,
        key: "id",
      },
    },
    approved: {
      type: DataTypes.BOOLEAN,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    facultyOfChoice: {
      type: DataTypes.STRING,
    },
    courseOfChoice: {
      type: DataTypes.STRING,
    },
    jambResults: {
      type: DataTypes.JSON,
    },
    OResults: {
      type: DataTypes.JSON,
    },
    religion: {
      type: DataTypes.STRING,
    },
    uploaded: {
      type: DataTypes.JSON,
    },
    remark: {
      type: DataTypes.STRING,
    },
    adminSuggestedChange: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Screening;
