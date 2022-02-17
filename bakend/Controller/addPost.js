// addPost
// username,
// caption,
// imageUrl,

const addpost = require("../Model/AddPost");
// const comments

//   = require("./post_sub-api/comment");
// const comments = require("../Model/post_sub-api/comment");
const comments = require("../Model/PostSub-model/comment");
const User = require("../Model/User");

exports.addPost = async (req, res, next) => {
  const { username, caption,  user__Id } = req.body;
  if (!caption || !username || !req.file) {
    return res
      .status(200)
      .json({ status: false, message: "All Field required" });
  }

  console.log("-----------------=-=", req.body);
  const imageUrl = req.file.filename;

  // console.log(emailRegexp.test(emailToValidate));
  try {
    console.log("=======");
    if (!caption) {
      return res
        .status(200)
        .json({ status: false, message: "Plz fill the caption" });
    }
    if (!imageUrl) {
      return res
        .status(200)
        .json({ status: false, message: "Plz Select the image" });
    }
    if (!username) {
      return res
        .status(200)
        .json({ status: false, message: "Plz fill the username" });
    }

    const result = await addpost.create({
      caption: caption,
      username: username,
      imageUrl: imageUrl,
      user__Id:user__Id
      // comment: req.body.comment
    });

    if (result) {
      return res.status(201).json({
        status: true,
        message: "user is successfull Added",
        data: result,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "user is not Added", data: error });
  }
};

exports.getPosts = async (req, res, next) => {
  // console.log(req);
  // const { email, password } = res.body;

  try {
    const allpost = await addpost.findAll({
      // attributes: ["username", "caption", "imageUrl"], //use to attributes to get selected fields only.
      // include: comments,
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: comments,
          // attributes: ["comment", "Post_id"],
          as: "User_comments", // if we want to change the name of our field ex:- comments replace to User_comments
        },
        {
          model: User,
        },
        
      ],
      // where: { id: 40 },
    });
    // res.status(201).json({ allData });

    res.status(200).json({
      status: true,
      message: "Get All Posts Successfully",
      data: allpost,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Something went wrong", data: error.message });
  }
};
