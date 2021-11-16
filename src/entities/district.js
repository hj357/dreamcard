const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../loader/connect-database");

const DistrictEntity = sequelize.define(
  "distict",
  {
    Id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    DistrictName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = DistrictEntity;
