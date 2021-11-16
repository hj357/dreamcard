//
const sequelize = require("../loader/connect-database");
const UserEntity = require("./user");

const syncDatabase = () => {
  console.log("database sync");
};

module.exports = syncDatabase;
