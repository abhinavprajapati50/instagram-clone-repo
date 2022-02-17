const express = require("express");
const router = require("./Router/router");
const app = express();
const cors = require("cors");
// const sequelize = require("./utils/database");
const bodyParser = require("body-parser");
// const upload = require("./imageuploader");

const path = require("path");
const { default: helmet } = require("helmet");
const compression = require("compression");
const sequelize = require("./utils/database");
const addpost = require("./Model/AddPost");
const { getPosts } = require("./Controller/addPost");
const comment = require("./Model/PostSub-model/comment");
const User = require("./Model/User");
// const AllComments  = require("./Model/AllComments");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// console.log("---->>>>>----%%%%%%%%%%%%%%%%%%%%%%%--path-=", path.join(__dirname));
app.use(express.static(path.join(__dirname, "upload/images")));
app.use("/upload/images", express.static("images"));
router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept",
    "Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE",
    "Access-Control-Allow-Origin",
    "*"
  );
  next();
});

// app.use(bodyParser);

app.use(router);
app.use(helmet());
app.use(compression());


// comment.belongsTo(addpost);

const PORT = 5000;

// app.use(require("./Router/router"));

sequelize
  .sync()
  .then((result) => {
    app.listen(process.env.PORT || PORT, () => {
      addpost.hasMany(comment, {
        foreignKey: "Post_id",
        as: "User_comments", // if we want to change the name of our field ex:- comments replace to User_comments
      });
      comment.belongsTo(addpost
        , {foreignKey: "Post_id",}
      );
      
      User.hasMany(addpost, {foreignKey : "user__Id"})
      addpost.belongsTo(User
        , {foreignKey: "user__Id",}
      );
      // addpost.hasMany(User, {
      //   foreignKey: "user__Id",
      // });

      // User.belongsTo(addpost
      //   );


      console.log(`the post is listning on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("-----err appjs sequlize", err);
  });
