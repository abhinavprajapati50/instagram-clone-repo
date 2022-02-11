const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
// const sequelizeDB = require('../../utils/database')

const User = sequelize.define('signUpUser', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: true,
    },
})


module.exports = User;






// const mongoose  = require("mongoose");

// const userData = new mongoose.Schema({
//     email: {
//         type: String,
//     },
//     password: {
//         type: String,
//     }
// })

// const User = mongoose.model("User", userData)
// module.exports = User;