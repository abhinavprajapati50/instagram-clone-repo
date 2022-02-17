const Sequelize = require("sequelize");
const { getPosts } = require("../Controller/addPost");
const sequelize = require("../utils/database");
const comment = require("./PostSub-model/comment");
// const comment = require("./PostSub-model/comment");
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
  user__Id: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});


// User.hasOne(UserEmployee, {foreignKey: 'UserID', as: 'User'});
// comment.belongsTo(addpost)
// addpost.hasOne(comment )

module.exports = addpost;
