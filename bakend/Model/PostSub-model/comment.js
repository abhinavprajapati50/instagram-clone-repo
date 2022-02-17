const Sequelize = require("sequelize");
const sequelize = require("../../utils/database");
const addpost = require("../AddPost");
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

// comment.belongsTo(addpost);
// User.hasOne(UserEmployee, {foreignKey: 'UserID', as: 'User'});

module.exports = comment;
