import { useEffect, useState } from "react";
import "./App.css";
import { Post } from "./Post";

// import { toast, ToastContainer } from "react-toastify";

import axios from "axios";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      {/* <body > */}
      <div>
        <Login />
      </div>
      {/* </body> */}
    </>
  );
}

export default App;
