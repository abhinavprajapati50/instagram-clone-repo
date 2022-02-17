import React, { useEffect, useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { Avatar, Button, Modal, TextField } from "@mui/material";
import "./Post.css";
import axios from "axios";
import { Comments } from "./Comments";
// import "./Login.css";
export const Post = ({
  post,
  setpost,
  userLoggedIN,
  commetsId,
  setcommetsId,
  SiggnedData
}) => {
  // const [commetsId, setcommetsId] = useState();
  const [Allcomments, setAllcommets] = useState([]);
  const [comments, setcommets] = useState("");

  const onSubmitComments = async (e, id) => {
    e.preventDefault();
    debugger;
    console.log("----------------commetnt id===>>", e);
    console.log("----------------commetnt id", id);
    // e.preventDefault();
    // setcommets(id)

    try {
      // const allComments = await axios.post("http://localhost:5000/get-comment", {
      //   Post_id: id,
      // });
      console.log("get-commentget-commentget-comment",comments,localStorage.user, id);

      const result = await axios.post("http://localhost:5000/comments", {
        comment: comments,
        Post_id: id,
        userId: localStorage.user,
      });
      setcommetsId(id);

      // console.log("-------result cokmments",result);

      // console.log(result.data.data);
      // setpostDataComment(result.data.data.comment);
      setcommets("");
      return result;
      // console.log("---------result: ", comments);
    } catch (error) {
      console.log("error!!", error.message);
    }
  };

  const commentChangeHandler = (event) => {
    // console.log( e.target.value);
    // setcommets([{...comments, [e.target.name] : e.target.value}])
    // setcommets({ ...comments, [e.target.name]: e.target.value });
    // setcommets({ ...comments, [e.target.name]: e.target.value })

    const { name, value } = event.target;
    setcommets((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(async () => {
    const result = await axios.get("http://localhost:5000/allsignedUser");
    const allPost = await axios.get("http://localhost:5000/addpost");
    const { data, status, message } = allPost.data;
    setpost(data);
    // const postComments = await Promise.all(
    //   data.map((postId) => {
    //     let commentData = axios.get(
    //       `http://localhost:5000/get-comment?Post_id=${postId.id}`
    //     );
    //     return commentData;
    //   })
    // );

    // const postID = postComments.map((postId) => {
    //   return postId.data.data;
    // });
    // setAllcommets(postID);
  }, [userLoggedIN, comments]);

  return (
    <div>
      <div className="app__post">
        {post.map((curdata, i) => (
          <>
            
            {console.log("----curdata", curdata.signUpUser!==null && curdata.signUpUser.id )}
            {/* {console.log(curdata)} */}
            {/* <Post
                    key={i}
                    id={curdata.id}
                    username={curdata.username}
                    caption={curdata.caption}
                    imageUrl={`${curdata.imageUrl}`}
                    comment={curdata.comment}
                  /> */}
            <div className="post">
              {/* header  --> avatar + username */}
              <div className="post__header">
                <Avatar
                  className="post__avatar"
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />

                <h3>{curdata.username}</h3>
              </div>
              {/* image */}
              <img
                className="post__Image"
                src={`http://localhost:5000/${curdata.imageUrl}`}
                alt=""
              />
              {/* username and caption */}
              <h4 className="post__text">
                <strong>{curdata.username}</strong>
                {curdata.caption}
              </h4>
              <Comments post={curdata} SiggnedData={SiggnedData }/>
              {/* {curdata.User_comments.length > 0 &&
                curdata.User_comments.map((cur) => (
                  <h4
                    style={{
                      border: "1px solid #a5a5a5",
                      padding: "1rem",
                    }}
                  >
                    {console.log("comments--", cur.comment)}
                    comment: {cur.comment}
                  </h4>
                ))} */}
              {/* {Allcomments[i] &&
                Allcomments[i].length > 0 &&
                Allcomments[i].map((cur) => {
                  return (
                    cur.Post_id === curdata.id && (
                      <h4
                        style={{
                          border: "1px solid #a5a5a5",
                          padding: "1rem",
                        }}
                      >
                        {console.log("comments--", cur.comment)}
                        comment: {cur.comment}
                      </h4>
                    )
                  );
                })} */}
              {/* {setuniqueComment(curdata.id)} */}
              {/* <form action="" onSubmit={onSubmitComments(curdata.id)}> */}
              <div style={{ margin: "1rem" }}>
                {/* {console.log(curdata.id)  } */}
                <form action="" onSubmit={(e) => onSubmitComments(e, curdata.id)}>
                  {/* {console.log(e, curdata.id) } */}
                  <TextField
                    className="sign-up-input"
                    id={curdata.id}
                    label="Comments..."
                    variant="outlined"
                    value={comments}
                    name={curdata.id}
                    // onChange={commentChangeHandler}
                    onChange={(e) => setcommets(e.target.value)}
                  />
                  <Button type="button" type="submit">
                    Posts
                  </Button>
                </form>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

// =========================================================
{
  /* </form> */
}
{
  /* <Comments /> */
}
{
  /* <div>
<TextField
className="sign-up-input"
id="outlined-basic"
label="User-name"
variant="outlined"
value={comments}
style={{ marginBottom: "1rem" }}
onChange={(e) => setcommets(e.target.value)}
/>
<Button onClick={onPostComment}>Post</Button>
</div> */
}
// =========================================================
// =========================================================

// import React, { useEffect, useState } from "react";
// import "./Post.css";
// import { Avatar, Button, TextField } from "@mui/material";
// import axios from "axios";
// import { Comments } from "./Comments";

// export const Post = ({ username, caption, imageUrl, id }) => {

//   // const onPostComment = async (e) => {
//   //   e.preventDefault();
//   //   // setemptyError(true);
//   //   // console.log("SDFsdf");

//   //   try {
//   //     const result = await axios.post(
//   //       "http://localhost:5000/comment",
//   //       comments
//   //     );

//   //     console.log(result.data);

//   //     // if (result.data.data) {
//   //     //   // setuserLoggedIN(true);
//   //     //   // clearData();
//   //     //   console.log();
//   //     //   // localStorage.setItem("user", 1);
//   //     //   // return result;
//   //     // } else {
//   //     //   // toast.warn(result.data.message);
//   //     //   return;
//   //     // }

//   //     console.log("---------result: ", result.data);
//   //   } catch (error) {
//   //     console.log("error!!", error.message);
//   //   }
//   // };

//   // console.log("Comments", comments);
//   console.log(id);

//   useEffect(async () => {
//     const allPost = await axios.get("http://localhost:5000/comment");
//     // console.log(allPost.data.data);
//     // setAllComments(allPost.data.data)
//   }, [username, , caption, imageUrl]);
//   return (
//     <div className="post">
//       {/* header  --> avatar + username */}
//       <div className="post__header">
//         <Avatar
//           className="post__avatar"
//           alt="Remy Sharp"
//           src="/static/images/avatar/1.jpg"
//         />

//         <h3>{username}</h3>
//       </div>
//       {/* image */}
//       <img
//         className="post__Image"
//         src={`http://localhost:5000/${imageUrl}`}
//         alt=""
//       />
//       {/* username and caption */}
//       <h4 className="post__text">
//         <strong>{username}</strong>
//         {caption}
//       </h4>
//       <Comments />
//       {/* <div>
//         <TextField
//           className="sign-up-input"
//           id="outlined-basic"
//           label="User-name"
//           variant="outlined"
//           value={comments}
//           style={{ marginBottom: "1rem" }}
//           onChange={(e) => setcommets(e.target.value)}
//         />
//         <Button onClick={onPostComment}>Post</Button>
//       </div> */}
//     </div>
//   );
// };
