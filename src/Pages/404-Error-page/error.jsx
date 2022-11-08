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
        <h2>Oops !</h2>
        <p> We've run in to some issues,</p>
        <p>we couldn't find what you're looking for.</p>
        <div className="button-container">
          <Link to="/main-page" className="edit-link">
            <button className="button"> BACK TO HOME</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ErrorPage;
