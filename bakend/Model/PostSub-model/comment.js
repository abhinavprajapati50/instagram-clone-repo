const Sequelize = require("sequelize");
const sequelize = require("../../utils/database");
// const sequelize = require("../../utils/database");
// const sequelizeDB = require("../utils/database");

const comment = sequelize.define("comments", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  Post_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = comment;
