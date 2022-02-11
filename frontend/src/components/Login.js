import React, { useEffect, useState } from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { Avatar, Button, Modal, TextField } from "@mui/material";
import "../App.css";
import axios from "axios";
import "./Login.css";
import { Post } from "../Post";
import { Comments } from "../Comments";

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

export const Login = () => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlesetSignInModleopenOpen = () => setsignInModleopen(true);
  const handlesetSignInModleopenClose = () => setsignInModleopen(false);

  const [addPost, setaddPost] = useState(false);
  const handleAddPost = () => setaddPost(true);
  const handleCloseAddPost = () => setaddPost(false);
  const [PostMsg, setpostMsg] = useState("");
  // const handlesetSignInModleopenOpen = () => setsignInModleopen(true);
  // const handlesetSignInModleopenClose = () => setsignInModleopen(false);

  const [open, setOpen] = useState(false);



  const [name, setname] = useState("");
  const [caption, setcaption] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [commetsId, setcommetsId] = useState();

  const [signInModleopen, setsignInModleopen] = useState(false);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [postDataComment, setpostDataComment] = useState("");

  const [LoggedUser, setLoggedUser] = useState("");

  const [emptyError, setemptyError] = useState(false);
  const [errMsg, seterrMsg] = useState("");
  const [signInerrMsg, setsignInerrMsg] = useState("");
  const [comments, setcommets] = useState("");

  const [Allcomments, setAllcommets] = useState([]);

  const [uniqueComment, setuniqueComment] = useState("");

  const [userLoggedIN, setuserLoggedIN] = useState(
    localStorage.getItem("user") ? true : false
  );

  const [post, setpost] = useState([]);

  const logoutHandler = () => {
    setuserLoggedIN(false);
    localStorage.removeItem("user");
  };

  const clearData = () => {
    setusername("");
    setemail("");
    setpassword("");
  };

  // console.log("0000000000009999999999", Allcomments);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setemptyError(true);
    console.log("SDFsdf");

    try {
      const result = await axios.post("http://localhost:5000/signup", {
        email: email,
        password: password,
        username: username,
      });

      console.log("00000000000000", result.data);

      if (result.data.data) {
        setuserLoggedIN(true);
        clearData();
        // localStorage.setItem("user", 1);
        // localStorage.setItem("users", result.data);
        seterrMsg(result.data.message);
        // CloseSignup()
        // return result;
      } else {
        seterrMsg(result.data.message);
        // toast.warn(result.data.message);
        return;
      }
      handleClose();
      handlesetSignInModleopenClose();

      console.log("---------result: ", result.data);
    } catch (error) {
      console.log("error!!", error);
    }
  };

  {
    /* // addPost
// username,
// caption,
// imageUrl, */
  }

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
  const onSubmitSignInHandler = async (e) => {
    e.preventDefault();
    debugger
    setemptyError(true);
    console.log("======================");

    try {
      const result = await axios.post("http://localhost:5000/signin", {
        email: email,
        password: password,
      });

      console.log("=======");
      console.log(result.data);
      // setLoggedUser(result.data.data)

      if (result.data.data) {
        setuserLoggedIN(true);
        clearData();
        localStorage.setItem("user", result.data.data.id);
        setLoggedUser(localStorage.setItem(result.data.data.id));
        setsignInerrMsg(result.data.message);
        // CloseSignup()
        handlesetSignInModleopenClose();
        // return result;
      } else {
        setsignInerrMsg(result.data.message);
        // toast.warn(result.data.message);
        return;
      }
      handlesetSignInModleopenClose();

      console.log("---------result: ", result.data.data);
    } catch (error) {
      console.log("error!!", error);
    }
  };

  const CloseSignup = () => {
    clearData();
    handleClose();
    handlesetSignInModleopenClose();
    seterrMsg("");
    setsignInerrMsg("");
    setemail("");
    setpassword("");
    setusername("");
  };

  console.log("-------------LoggedUser", LoggedUser);
  useEffect(async () => {
    // signin
    const result = await axios.get("http://localhost:5000/allsignedUser", {
      email: email,
      password: password,
    });
  
    const allPost = await axios.get("http://localhost:5000/addpost");
    const { data, status, message } = allPost.data;
   
    setpost(data);
    console.log("allPost ==>> ", data);

  ;

    const postComments = await Promise.all(
      data.map((postId) => {
        let commentData = axios.get(
          `http://localhost:5000/get-comment?Post_id=${postId.id}`
        );
        console.log("commentData ==>> ", commentData);
        return commentData;
      })
    );

    
    const postID = postComments.map((postId) => {
      console.log("postId ==>> ", postId.data.data);
      return postId.data.data;
     
    });
    setAllcommets(postID);

  
  }, [userLoggedIN]);

  // useEffect(() => {
  //   axios.get(`http://localhost:5000/get-comment`);
  // }, [Allcomments]);

  return (
    <div className="app">
      <div>
        {userLoggedIN ? (
          <>
            <div className="app_header">
              <h2>𝖎𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒</h2>
              {/* <img className="app_header-image" src="./instaname.png" alt="" /> */}
              {/* <h1>Login Here. . .</h1> */}
              <div className="app__button">
                <Button
                  type="button"
                  className="Sign_up_Here"
                  onClick={logoutHandler}
                >
                  Logout
                </Button>
                <Button
                  type="button"
                  className="Sign_up_Here"
                  onClick={handleAddPost}
                >
                  Add Post
                </Button>
              </div>
            </div>
            <Post
              post={post}
              setpost={setpost}
              userLoggedIN={userLoggedIN}
              commetsId={commetsId}
              setcommetsId={setcommetsId}
            />
          </>
        ) : (
          <>
            <div >
              <Button
                type="button"
                className="Sign_up_Here"
                onClick={handleOpen}
              >
                Sign-up
              </Button>
              <Button
                type="button"
                className="Sign_up_Here"
                onClick={handlesetSignInModleopenOpen}
              >
                Sign-In
              </Button>
              </div>
              <div>
              <img src="./insta.gif" alt="" style={{width: "100%", height: "100%",maxWidth: "100%"}} />
              </div>
          </>
        )}
      </div>
        
      <div>
        <div>
          <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
          >
            <Box sx={style} style={{ backgroundColor: "white" }}>
              <form
                action=""
                className="app__signup"
                onSubmit={onSubmitHandler}
              >
                <center>
                  <h2 className="insta__name">𝖎𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒</h2>
                </center>
                {
                  <p style={{ color: "red", marginTop: "-0.2rem" }}>
                    {" "}
                    {errMsg}
                  </p>
                }

                <div>
                  <center>
                    <TextField
                      className="sign-up-input"
                      id="outlined-basic"
                      label="User-name"
                      variant="outlined"
                      value={username}
                      style={{ marginBottom: "1rem" }}
                      onChange={(e) => setusername(e.target.value)}
                    />
                    {/* {emptyError && !username && (
                    <p style={{ color: "red", marginTop: "-0.2rem" }}>
                      Plz Enter your User.
                    </p>
                  )} */}
                  </center>
                  <center>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      value={email}
                      style={{ marginBottom: "1rem" }}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </center>

                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    value={password}
                    style={{ marginBottom: "1rem" }}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <Button type="submit" onClick={handleOpen}>
                  Sign up
                </Button>
                <Button onClick={CloseSignup}>Cancle</Button>
              </form>
            </Box>
          </StyledModal>

          {/* ============================ Add post*/}

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
          <div className="signin">
            <StyledModal
              aria-labelledby="unstyled-modal-title"
              aria-describedby="unstyled-modal-description"
              open={signInModleopen}
              onClose={handlesetSignInModleopenClose}
              BackdropComponent={Backdrop}
            >
              <Box sx={style} style={{ backgroundColor: "white" }}>
                <form
                  action=""
                  className="app__signup"
                  onSubmit={onSubmitSignInHandler}
                >
                  <center>
                    <h2 className="insta__name">𝖎𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒</h2>
                  </center>
                  {
                    <p style={{ color: "red", marginTop: "-0.2rem" }}>
                      {" "}
                      {signInerrMsg}
                    </p>
                  }

                  <div>
                    <center>
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={email}
                        style={{ marginBottom: "1rem" }}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </center>

                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      value={password}
                      style={{ marginBottom: "1rem" }}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                  <Button type="submit" onClick={handlesetSignInModleopenOpen}>
                    Sign up
                  </Button>
                  <Button onClick={CloseSignup}>Cancle</Button>
                </form>
              </Box>
            </StyledModal>
          </div>
          

          {/* {userLoggedIN ? (
          <Button
            type="button"
            className="Sign_up_Here"
            onClick={logoutHandler}
          >
            Logout
          </Button>
        ) : (
          <>
            <Button type="button" className="Sign_up_Here" onClick={handleOpen}>
              Sign-up
            </Button>
            <Button type="button" className="Sign_up_Here" onClick={handlesetSignInModleopenOpen}>
              Sign-In
            </Button>
          </>
        )} */}
        </div>
      </div>
      
    </div>
  );
};
