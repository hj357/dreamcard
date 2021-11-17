const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../loader/connect-database");

const DistrictEntity = sequelize.define(
  "district",
  {
    Id: {
      type: DataTypes.NUMBER,
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
