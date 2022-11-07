import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./error.css";
import pic from "./Error.png";

function ErrorPage() {
  return (
    <div className="error-image-container">
      <img className="pic" src={pic} alt="picture" />
      <div className="error-msg-container">
        <h1>Oops !</h1>
        <br></br>
        <h3> We've run in to some issues,</h3>
        <h3>we couldn't find what you're looking for.</h3>
        <button className= "button"> BACK TO HOME</button>
      </div>
      
    </div>
  );
}
export default ErrorPage;
