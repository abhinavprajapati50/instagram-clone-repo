import { ModalUnstyled } from "@mui/base";
import { TextField, Button } from "@mui/material";
import { Box, styled } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 600,
  height: 450,
  bgcolor: "background.paper",
  maxWidth: "100%",

  border: "2px solid #000",
  p: 4,
  // px: 4,
  // pb: 3,
};


export const AddPost = ({handleAddPost,handleCloseAddPost, setemptyError}) => {
    const [name, setname] = useState("");
  const [caption, setcaption] = useState("");
  const [imageUrl, setimageUrl] = useState("");
    const [commetsId, setcommetsId] = useState();
    
//   const [emptyError, setemptyError] = useState(false);
//   const [errMsg, seterrMsg] = useState("");
//   const [signInerrMsg, setsignInerrMsg] = useState("");
//     const [comments, setcommets] = useState("");

    const [addPost, setaddPost] = useState(false);
//   const handleAddPost = () => setaddPost(true);
//   const handleCloseAddPost = () => setaddPost(false);
    const [PostMsg, setpostMsg] = useState("");
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open, setOpen] = useState(false);

    const [signInModleopen, setsignInModleopen] = useState(false);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
    
    const [userLoggedIN, setuserLoggedIN] = useState(
        localStorage.getItem("user") ? true : false
    );
    


    const onAddPostHandler = async (e) => {
        e.preventDefault();
        setemptyError(true);
        console.log("SDFsdf");
    
        try {
          console.log("-------------=images", imageUrl);
          const formData = new FormData();
          // // chr_delete
          // console.log("the data", image);
          formData.append("username", name);
          formData.append("caption", caption);
          formData.append("imageUrl", imageUrl);
          formData.append("commets", commetsId);
          const result = await axios.post(
            "http://localhost:5000/addpost",
            formData
          );
    
          console.log("}}}}}}}}}}}}}}}}}}]", result.data);
    
          if (result.data.data) {
            setuserLoggedIN(true);
            clearData();
            console.log();
            // localStorage.setItem("user", 1);
            setpostMsg(result.data.message);
            // CloseSignup()
            // return result;
          } else {
            setpostMsg(result.data.message);
            // toast.warn(result.data.message);
            return;
          }
          handleClose();
    
          handleCloseAddPost();
          console.log("---------result: ", result.data);
        } catch (error) {
          console.log("error!!", error.message);
        }
    };

    const clearData = () => {
        setusername("");
        setemail("");
        setpassword("");
      };
    
    return <div>
        <div>
        <div className="addPost">
            <StyledModal
              aria-labelledby="unstyled-modal-title"
              aria-describedby="unstyled-modal-description"
              open={addPost}
              onClose={handleCloseAddPost}
              BackdropComponent={Backdrop}
            >
              <Box sx={style} style={{ backgroundColor: "white" }}>
                <form
                  action=""
                  className="app__signup"
                  onSubmit={onAddPostHandler}
                >
                  {
                    <p style={{ color: "red", marginTop: "-0.2rem" }}>
                      {PostMsg}
                    </p>
                  }

                  {/* // addPost
// username,
// caption,
// imageUrl, */}

                  <div>
                    <center>
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Username"
                          variant="outlined"
                          value={name}
                          style={{ marginBottom: "1rem" }}
                          onChange={(e) => setname(e.target.value)}
                        />
                      </div>

                      <TextField
                        id="outlined-basic"
                        label="Caption"
                        variant="outlined"
                        value={caption}
                        style={{ marginBottom: "1rem" }}
                        onChange={(e) => setcaption(e.target.value)}
                      />
                    </center>

                    <input
                      type="file"
                      name="image"
                      id=""
                      onChange={(e) => setimageUrl(e.target.files[0])}
                    />
                  </div>
                  <Button type="submit" onClick={handleAddPost}>
                    Add Post
                  </Button>
                  <Button onClick={handleCloseAddPost}>Cancle</Button>
                </form>
              </Box>
            </StyledModal>
          </div>
      </div>
  </div>;
};
