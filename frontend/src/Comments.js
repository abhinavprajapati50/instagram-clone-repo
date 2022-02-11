









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
