import React from "react";

export const Comments = ({ post }) => {
  return (
    <div>
      <div>
        {/* {
                  post.User_comments.map(comment => console.log(comment) )
              } */}
        {/* {console.log(post[0].User_comments)} */}
        {/* {post.map(comment => */}
        {/* {console.log(post)} */}
        {/* // console.log(comment.User_comments[0].comment) */}
        {/* )} */}

        {post.User_comments.length > 0 &&
          post.User_comments.map((cur) => (
            <h4
              style={{
                border: "1px solid #a5a5a5",
                padding: "1rem",
              }}
            >
            
              <strong>Comments</strong>: {cur.comment}
            </h4>
          ))}
      </div>
    </div>
  );
};

// import React, { useEffect, useState } from "react";
// import "./Post.css";
// import { Avatar, Button, TextField } from "@mui/material";
// import axios from "axios";

// export const Comments = () => {
//   const [comments, setcommets] = useState("");

//   const onSubmitComments = async (e) => {
//     console.log("commednteddcdv");

//     e.preventDefault();
//     try {
//       const result = await axios.post("http://localhost:5000/comments", {
//         comments: comments,
//       });

//       console.log(result.data);

//       console.log("---------result: ", comments);
//     } catch (error) {
//       console.log("error!!", error.message);
//     }
//   };

//   return (
//     <div>
//       <form action="" onSubmit={onSubmitComments}>
//         <TextField
//           className="sign-up-input"
//           id="outlined-basic"
//           label="User-name"
//           variant="outlined"
//           value={comments}
//           style={{ marginBottom: "1rem" }}
//           onChange={(e) => setcommets(e.target.value)}
//         />
//         <Button type="submit">Post</Button>
//       </form>
//     </div>
//   );
// };
