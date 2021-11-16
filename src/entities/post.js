const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../loader/connect-database");

const PostEntity = sequelize.define(
  "post",
  {
    Id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
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
    PostType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = PostEntity;
