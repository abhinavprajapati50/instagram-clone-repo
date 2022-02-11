const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/images");
  },
  filename: function (req, file, cb) {
    // console.log(file);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
// console.log("--------storage", storage());


const filefilter = (req, res, cb) => {
  console.log("************(*** ");
  const allowFileType = ["image/jpeg", "image/jpg", "image/png"];
  if (allowFileType.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


var upload = multer({ storage, filefilter });
module.exports = upload;


// ==========================================



// const imgrouter = require("express").Router();
// const multer = require("multer");
// const User = require("./model/user-model");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "upload/images");
//   },

//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });
// // console.log("--------storage", storage());

// const filefilter = (req, res, cb) => {
//   const allowFileType = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowFileType.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// var upload = multer({ storage, filefilter });

// imgrouter.post("/", upload.array("images"), (req, res, next) => {
//   const files = req.files;
//   console.log("files", files);
//   if (!files) {
//     const error = new Error("plz select multiple Images");
//     res.status(400);
//     return next(error);
//   }

//   const name = req.body.name;
//   const images = req.files.map((file) => file.path);
//   // const images = req.files;

//   const newUserData = { name, images };

//   console.log("newUserData", newUserData);
//   const newUsers = new User(newUserData);
//   newUsers
//     .save()
//     .then(() => res.status(201).json(newUsers))
//     .catch((error) => res.status(400).json(error));
// });
// module.exports = imgrouter;