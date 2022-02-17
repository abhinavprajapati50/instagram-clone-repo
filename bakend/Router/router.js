const { addPost, getPosts } = require("../Controller/addPost");
const {
  addComment,
  AllComments,
} = require("../Controller/post_sub-api/comment");
const {
  signUpRoute,
  signin,
  allSignedUser,
} = require("../Controller/userController");
const upload = require("../imageuploader");
const addpost = require("../Model/AddPost");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("the home page");
});

// ------USER
router.post("/signup", signUpRoute);
router.post("/signin", signin);
router.get("/allsignedUser", allSignedUser);

// ---------Add-post
router.post("/addpost", upload.single("imageUrl"), addPost);
router.get("/addpost", getPosts);

// --comments
router.post("/comments", addComment);
router.get("/get-comment", AllComments);


module.exports = router;
