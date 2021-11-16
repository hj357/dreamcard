const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../loader/connect-database");

const ReviewEntity = sequelize.define(
  "review",
  {
    Id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    CreateTime: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    StarScore: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = ReviewEntity;
