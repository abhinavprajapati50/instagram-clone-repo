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

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// console.log("---->>>>>----%%%%%%%%%%%%%%%%%%%%%%%--path-=", path.join(__dirname));
app.use(express.static(path.join(__dirname, "upload/images")));
app.use('/upload/images', express.static('images'))
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
app.use(helmet())
app.use(compression())


const PORT = 5000;

// app.use(require("./Router/router"));

sequelize
  .sync()
  .then((result) => {
    app.listen(process.env.PORT || PORT, () => {
      console.log(`the post is listning on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("-----err appjs sequlize", err);
  });
