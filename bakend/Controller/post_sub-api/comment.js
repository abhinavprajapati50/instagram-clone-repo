const comments = require("../../Model/PostSub-model/comment");

exports.addComment = async (req, res, next) => {
  const { comment, Post_id, userId } = req.body;

  try {
    const result = await comments.create({
      comment,
      Post_id,
      userId:userId,
    });

    if (result) {
      return res.status(201).json({
        status: true,
        message: "Added comment successfullly",
        data: result,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "user is not Added",
      data: error.message,
    });
  }
};

exports.AllComments = async (req, res, next) => {
  // console.log(req);
  const Post_id = req.body.Post_id;
  const userId = req.body.userId;
  try {
    console.log("Post_id-==-=-=-=-=-==--", req.query);

    const allComments = await comments.findAll({
      where: {
        Post_id: req.query.Post_id,
        // userId:userId
      },
    });
    // res.status(201).json({ allData });
    console.log("all stra", allComments);

    res.status(200).json({
      status: true,
      message: "Get All comments Successfully",
      data: allComments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Something went wrong",
      data: error.message,
    });
  }
};
