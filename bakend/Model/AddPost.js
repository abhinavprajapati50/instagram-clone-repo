const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
// const sequelizeDB = require("../../utils/database");

// username
// caption
// imageUrl

const addpost = sequelize.define("addpost", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  caption: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  imageUrl: {
    type: Sequelize.BLOB,
    allowNull: true,
  },
  comment: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  commId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = addpost;
